!function(t) {
    function e(e) {
        for (var n, i, a = e[0], o = e[1], s = 0, c = []; s < a.length; s++)
            i = a[s],
            Object.prototype.hasOwnProperty.call(r, i) && r[i] && c.push(r[i][0]),
                r[i] = 0;
        for (n in o)
            Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
        for (u && u(e); c.length; )
            c.shift()()
    }
    var n = {}
        , r = {
        0: 0
    };
    function i(e) {
        if (n[e])
            return n[e].exports;
        var r = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, i),
            r.l = !0,
            r.exports
    }
    i.e = function(t) {
        var e = []
            , n = r[t];
        if (0 !== n)
            if (n)
                e.push(n[2]);
            else {
                var a = new Promise((function(e, i) {
                        n = r[t] = [e, i]
                    }
                ));
                e.push(n[2] = a);
                var o, s = document.createElement("script");
                s.charset = "utf-8",
                    s.timeout = 120,
                i.nc && s.setAttribute("nonce", i.nc),
                    s.src = function(t) {
                        return i.p + "js/" + ({
                            1: "vendors~module/mux",
                            2: "vendors~renderer/hlsjs"
                        }[t] || t) + ".module.js"
                    }(t);
                var u = new Error;
                o = function(e) {
                    s.onerror = s.onload = null,
                        clearTimeout(c);
                    var n = r[t];
                    if (0 !== n) {
                        if (n) {
                            var i = e && ("load" === e.type ? "missing" : e.type)
                                , a = e && e.target && e.target.src;
                            u.message = "Loading chunk " + t + " failed.\n(" + i + ": " + a + ")",
                                u.name = "ChunkLoadError",
                                u.type = i,
                                u.request = a,
                                n[1](u)
                        }
                        r[t] = void 0
                    }
                }
                ;
                var c = setTimeout((function() {
                        o({
                            type: "timeout",
                            target: s
                        })
                    }
                ), 12e4);
                s.onerror = s.onload = o,
                    document.head.appendChild(s)
            }
        return Promise.all(e)
    }
        ,
        i.m = t,
        i.c = n,
        i.d = function(t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }
        ,
        i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
        }
        ,
        i.t = function(t, e) {
            if (1 & e && (t = i(t)),
            8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var n = Object.create(null);
            if (i.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }),
            2 & e && "string" != typeof t)
                for (var r in t)
                    i.d(n, r, function(e) {
                        return t[e]
                    }
                        .bind(null, r));
            return n
        }
        ,
        i.n = function(t) {
            var e = t && t.__esModule ? function() {
                    return t.default
                }
                : function() {
                    return t
                }
            ;
            return i.d(e, "a", e),
                e
        }
        ,
        i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        i.p = "",
        i.oe = function(t) {
            throw console.error(t),
                t
        }
    ;
    var a = window["tvplay-player-web"] = window["tvplay-player-web"] || []
        , o = a.push.bind(a);
    a.push = e,
        a = a.slice();
    for (var s = 0; s < a.length; s++)
        e(a[s]);
    var u = o;
    i(i.s = 51)
}([function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
            return St
        }
    )),
        n.d(e, "b", (function() {
                return h
            }
        )),
        n.d(e, "c", (function() {
                return G
            }
        )),
        n.d(e, "d", (function() {
                return g
            }
        )),
        n.d(e, "e", (function() {
                return m
            }
        )),
        n.d(e, "f", (function() {
                return v
            }
        )),
        n.d(e, "g", (function() {
                return kt
            }
        )),
        n.d(e, "h", (function() {
                return D
            }
        )),
        n.d(e, "i", (function() {
                return _
            }
        )),
        n.d(e, "j", (function() {
                return T
            }
        )),
        n.d(e, "k", (function() {
                return ht
            }
        )),
        n.d(e, "l", (function() {
                return I
            }
        )),
        n.d(e, "m", (function() {
                return ct
            }
        )),
        n.d(e, "n", (function() {
                return k
            }
        )),
        n.d(e, "o", (function() {
                return P
            }
        )),
        n.d(e, "p", (function() {
                return j
            }
        )),
        n.d(e, "q", (function() {
                return V
            }
        )),
        n.d(e, "r", (function() {
                return et
            }
        )),
        n.d(e, "s", (function() {
                return nt
            }
        )),
        n.d(e, "t", (function() {
                return lt
            }
        )),
        n.d(e, "u", (function() {
                return _t
            }
        )),
        n.d(e, "v", (function() {
                return Q
            }
        )),
        n.d(e, "w", (function() {
                return Ot
            }
        )),
        n.d(e, "x", (function() {
                return Dt
            }
        )),
        n.d(e, "y", (function() {
                return wt
            }
        )),
        n.d(e, "z", (function() {
                return At
            }
        )),
        n.d(e, "A", (function() {
                return ot
            }
        )),
        n.d(e, "B", (function() {
                return at
            }
        )),
        n.d(e, "C", (function() {
                return O
            }
        )),
        n.d(e, "D", (function() {
                return it
            }
        )),
        n.d(e, "E", (function() {
                return F
            }
        )),
        n.d(e, "F", (function() {
                return dt
            }
        )),
        n.d(e, "G", (function() {
                return rt
            }
        )),
        n.d(e, "H", (function() {
                return W
            }
        )),
        n.d(e, "I", (function() {
                return E
            }
        )),
        n.d(e, "J", (function() {
                return Ct
            }
        )),
        n.d(e, "K", (function() {
                return gt
            }
        )),
        n.d(e, "L", (function() {
                return pt
            }
        )),
        n.d(e, "M", (function() {
                return y
            }
        )),
        n.d(e, "N", (function() {
                return S
            }
        )),
        n.d(e, "O", (function() {
                return r
            }
        )),
        n.d(e, "P", (function() {
                return mt
            }
        )),
        n.d(e, "Q", (function() {
                return vt
            }
        )),
        n.d(e, "R", (function() {
                return yt
            }
        )),
        n.d(e, "S", (function() {
                return bt
            }
        )),
        n.d(e, "T", (function() {
                return a
            }
        )),
        n.d(e, "U", (function() {
                return u
            }
        )),
        n.d(e, "V", (function() {
                return c
            }
        )),
        n.d(e, "W", (function() {
                return l
            }
        )),
        n.d(e, "X", (function() {
                return o
            }
        )),
        n.d(e, "Y", (function() {
                return i
            }
        )),
        n.d(e, "Z", (function() {
                return s
            }
        )),
        n.d(e, "ab", (function() {
                return f
            }
        )),
        n.d(e, "bb", (function() {
                return d
            }
        )),
        n.d(e, "cb", (function() {
                return M
            }
        )),
        n.d(e, "db", (function() {
                return Tt
            }
        )),
        n.d(e, "eb", (function() {
                return z
            }
        )),
        n.d(e, "fb", (function() {
                return w
            }
        )),
        n.d(e, "gb", (function() {
                return X
            }
        )),
        n.d(e, "hb", (function() {
                return Z
            }
        )),
        n.d(e, "ib", (function() {
                return U
            }
        )),
        n.d(e, "jb", (function() {
                return Y
            }
        )),
        n.d(e, "kb", (function() {
                return ft
            }
        )),
        n.d(e, "lb", (function() {
                return B
            }
        )),
        n.d(e, "mb", (function() {
                return J
            }
        )),
        n.d(e, "nb", (function() {
                return b
            }
        )),
        n.d(e, "ob", (function() {
                return $
            }
        )),
        n.d(e, "pb", (function() {
                return R
            }
        )),
        n.d(e, "qb", (function() {
                return tt
            }
        )),
        n.d(e, "rb", (function() {
                return p
            }
        )),
        n.d(e, "sb", (function() {
                return x
            }
        )),
        n.d(e, "tb", (function() {
                return L
            }
        )),
        n.d(e, "ub", (function() {
                return N
            }
        )),
        n.d(e, "vb", (function() {
                return K
            }
        )),
        n.d(e, "wb", (function() {
                return q
            }
        )),
        n.d(e, "xb", (function() {
                return A
            }
        )),
        n.d(e, "yb", (function() {
                return C
            }
        )),
        n.d(e, "zb", (function() {
                return ut
            }
        )),
        n.d(e, "Ab", (function() {
                return Et
            }
        )),
        n.d(e, "Bb", (function() {
                return H
            }
        )),
        n.d(e, "Cb", (function() {
                return st
            }
        )),
        n.d(e, "Db", (function() {
                return xt
            }
        ));
    var r = "acquiringLicense"
        , i = "adbreakend"
        , a = "adbreakstart"
        , o = "adended"
        , s = "aderror"
        , u = "adplay"
        , c = "adplaying"
        , l = "adpause"
        , d = "adrequest"
        , f = "adresponse"
        , h = "audioTrackChanged"
        , p = "audioTracks"
        , g = "canplay"
        , m = "destroy"
        , v = "error"
        , y = "encrypted"
        , b = "ended"
        , E = "fullscreenChanged"
        , _ = "headTime"
        , T = "initialized"
        , S = "licenseAcquired"
        , O = "manifestLoaded"
        , w = "manifestUpdated"
        , k = "manifestUpdateError"
        , A = "nativeTextTracksListAddTrack"
        , D = "data"
        , x = "metadata"
        , C = "monitor"
        , P = "networkMetric"
        , L = "newMedia"
        , R = "live"
        , j = "source"
        , I = "timeShift"
        , M = "pause"
        , F = "pauseRequest"
        , N = "paused"
        , B = "period"
        , U = "periodChanging"
        , V = "periodUpdated"
        , H = "play"
        , G = "playbackRateChange"
        , z = "playerready"
        , Y = "playing"
        , W = "playlist"
        , K = "playInterrupted"
        , q = "playPromiseResolved"
        , Q = "playRequest"
        , J = "profileChangeRequest"
        , X = "profileChanged"
        , $ = "profile"
        , Z = "profileChanging"
        , tt = "profiles"
        , et = "ready"
        , nt = "reconnect"
        , rt = "resize"
        , it = "restartRequest"
        , at = "seekRequest"
        , ot = "seekToRequest"
        , st = "seeked"
        , ut = "seeking"
        , ct = "setup"
        , lt = "stopped"
        , dt = "stopRequest"
        , ft = "streamEvent"
        , ht = "styles"
        , pt = "subtitleCueChanged"
        , gt = "subtitleEnableRequest"
        , mt = "subtitleToggleRequest"
        , vt = "subtitle"
        , yt = "subtitles"
        , bt = "subtitleDisabled"
        , Et = "syntheticWaiting"
        , _t = "time"
        , Tt = "timeupdate"
        , St = "togglePlayPauseRequest"
        , Ot = "visibilitychange"
        , wt = "volumeChangeRequest"
        , kt = "volumeChanged"
        , At = "volumeMuteRequest"
        , Dt = "waiting"
        , xt = "waitingEnd"
        , Ct = Object.freeze({
        __proto__: null,
        ACQUIRING_LICENSE: r,
        AD_BREAK: "adBreak",
        AD_BREAK_END: i,
        AD_BREAK_START: a,
        AD_BUFFERING: "adbuffering",
        AD_COMPLETE: "adComplete",
        AD_END: "adEnd",
        AD_ENDED: o,
        AD_ERROR: s,
        AD_PLAY: u,
        AD_PLAYING: c,
        AD_PAUSE: l,
        AD_RESPONSE: d,
        AD_REQUEST: f,
        AD_START: "adStart",
        AD_TIME: "adtime",
        AUDIO_TRACK_CHANGE_REQUEST: "audioTrackChangeRequest",
        AUDIO_TRACK_CHANGED: h,
        AUDIO_TRACK_LIST: p,
        BREAK_COMPLETE: "breakComplete",
        CAN_PLAY: g,
        CHROMECAST_CONNECTED: "chromecastConnected",
        CHROMECAST_DISCONNECTED: "chromecastDisconnected",
        CREATED: "created",
        DESTROY: m,
        DRM_KEY_ERROR: "drmKeyError",
        DURATION: "duration",
        ERROR: v,
        ENCRYPTED: y,
        ENDED: b,
        FALLBACK: "fallback",
        FULLSCREEN_CHANGE_REQUEST: "fullscreenChangeRequest",
        FULLSCREEN_CHANGED: E,
        GUI_READY: "guiReady",
        HEAD_TIME: _,
        INITIALIZED: T,
        LICENSE_ACQUIRED: S,
        LOAD_METADATA: "loadedmetadata",
        LOAD_START: "loadstart",
        MANIFEST_LOADED: O,
        MANIFEST_UPDATED: w,
        MANIFEST_UPDATE_ERROR: k,
        NATIVE_TEXT_TRACKS_LIST_ADD_TRACK: A,
        DATA: D,
        METADATA: x,
        MONITOR: C,
        MUTED: "muted",
        NETWORK_METRIC: P,
        NETWORK_METRIC_UPDATED: "networkMetricsUpdated",
        NEW_MEDIA: L,
        OFFLINE: "offline",
        ON_LIVE: R,
        ON_SOURCE: j,
        ON_TIMESHIFT: I,
        OPEN: "open",
        PAUSE: M,
        PAUSE_REQUEST: F,
        PAUSED: N,
        PERIOD: B,
        PERIOD_CHANGING: U,
        PERIOD_UPDATED: V,
        PIP_SWITCHED: "pipSwitched",
        PLAY: H,
        PLAYBACK_RATE_CHANGED: G,
        PLAYER_READY: z,
        PLAYING: Y,
        PLAYLIST: W,
        PLAY_INTERRUPTED: K,
        PLAY_PROMISE_RESOLVED: q,
        PLAY_REQUEST: Q,
        PROFILE_CHANGE_REQUEST: J,
        PROFILE_CHANGED: X,
        PROFILE_CHANGED_LEGACY: $,
        PROFILE_CHANGING: Z,
        PROFILE_LIST: tt,
        PROGRESS: "progress",
        READY: et,
        RECONNECT: nt,
        RESIZE: rt,
        RESTART_REQUEST: it,
        SEEK_REQUEST: at,
        SEEK_TO_REQUEST: ot,
        SEEK_END: st,
        SEEK_START: ut,
        SESSION: "session",
        SETUP: ct,
        STALLED: "stalled",
        STOPPED: lt,
        STOP_REQUEST: dt,
        STREAM_EVENT: ft,
        STYLES: ht,
        SUBTITLE_CUE_CHANGED: pt,
        SUBTITLE_ENABLE_REQUEST: gt,
        SUBTITLE_DISABLE_REQUEST: "subtitleDisableRequest",
        SUBTITLE_TOGGLE_REQUEST: mt,
        SUBTITLE: vt,
        SUBTITLES: yt,
        SUBTITLE_DISABLED: bt,
        SYNTHETIC_WAITING: Et,
        TIME: _t,
        TIME_UPDATE: Tt,
        TOGGLE_PLAY_PAUSE_REQUEST: St,
        UNMUTED: "unmuted",
        VISIBILITY_CHANGE: Ot,
        VOLUME_CHANGE_REQUEST: wt,
        VOLUME_CHANGED: kt,
        VOLUME_MUTE_REQUEST: At,
        WAITING: Dt,
        WAITING_END: xt
    })
}
    , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return i
            }
        )),
            n.d(e, "b", (function() {
                    return d
                }
            )),
            n.d(e, "c", (function() {
                    return h
                }
            )),
            n.d(e, "d", (function() {
                    return m
                }
            )),
            n.d(e, "e", (function() {
                    return k
                }
            )),
            n.d(e, "f", (function() {
                    return ft
                }
            )),
            n.d(e, "g", (function() {
                    return M
                }
            )),
            n.d(e, "h", (function() {
                    return H
                }
            )),
            n.d(e, "i", (function() {
                    return W
                }
            )),
            n.d(e, "j", (function() {
                    return K
                }
            )),
            n.d(e, "k", (function() {
                    return Nt
                }
            )),
            n.d(e, "l", (function() {
                    return Ft
                }
            )),
            n.d(e, "m", (function() {
                    return $
                }
            )),
            n.d(e, "n", (function() {
                    return it
                }
            )),
            n.d(e, "o", (function() {
                    return Rt
                }
            )),
            n.d(e, "p", (function() {
                    return Lt
                }
            )),
            n.d(e, "q", (function() {
                    return ct
                }
            )),
            n.d(e, "r", (function() {
                    return R
                }
            )),
            n.d(e, "s", (function() {
                    return gt
                }
            )),
            n.d(e, "t", (function() {
                    return Dt
                }
            )),
            n.d(e, "u", (function() {
                    return Pt
                }
            )),
            n.d(e, "v", (function() {
                    return Mt
                }
            )),
            n.d(e, "w", (function() {
                    return Ht
                }
            )),
            n.d(e, "x", (function() {
                    return lt
                }
            )),
            n.d(e, "y", (function() {
                    return j
                }
            )),
            n.d(e, "z", (function() {
                    return D
                }
            )),
            n.d(e, "A", (function() {
                    return r
                }
            )),
            n.d(e, "B", (function() {
                    return o
                }
            )),
            n.d(e, "C", (function() {
                    return f
                }
            )),
            n.d(e, "D", (function() {
                    return l
                }
            )),
            n.d(e, "E", (function() {
                    return p
                }
            )),
            n.d(e, "F", (function() {
                    return g
                }
            )),
            n.d(e, "G", (function() {
                    return y
                }
            )),
            n.d(e, "H", (function() {
                    return b
                }
            )),
            n.d(e, "I", (function() {
                    return v
                }
            )),
            n.d(e, "J", (function() {
                    return E
                }
            )),
            n.d(e, "K", (function() {
                    return _
                }
            )),
            n.d(e, "L", (function() {
                    return T
                }
            )),
            n.d(e, "M", (function() {
                    return x
                }
            )),
            n.d(e, "N", (function() {
                    return Yt
                }
            )),
            n.d(e, "O", (function() {
                    return Wt
                }
            )),
            n.d(e, "P", (function() {
                    return N
                }
            )),
            n.d(e, "Q", (function() {
                    return B
                }
            )),
            n.d(e, "R", (function() {
                    return Ct
                }
            )),
            n.d(e, "S", (function() {
                    return w
                }
            )),
            n.d(e, "T", (function() {
                    return xt
                }
            )),
            n.d(e, "U", (function() {
                    return It
                }
            )),
            n.d(e, "V", (function() {
                    return C
                }
            )),
            n.d(e, "W", (function() {
                    return P
                }
            )),
            n.d(e, "X", (function() {
                    return L
                }
            )),
            n.d(e, "Y", (function() {
                    return F
                }
            )),
            n.d(e, "Z", (function() {
                    return U
                }
            )),
            n.d(e, "ab", (function() {
                    return G
                }
            )),
            n.d(e, "bb", (function() {
                    return z
                }
            )),
            n.d(e, "cb", (function() {
                    return Y
                }
            )),
            n.d(e, "db", (function() {
                    return q
                }
            )),
            n.d(e, "eb", (function() {
                    return J
                }
            )),
            n.d(e, "fb", (function() {
                    return at
                }
            )),
            n.d(e, "gb", (function() {
                    return ot
                }
            )),
            n.d(e, "hb", (function() {
                    return st
                }
            )),
            n.d(e, "ib", (function() {
                    return ut
                }
            )),
            n.d(e, "jb", (function() {
                    return ht
                }
            )),
            n.d(e, "kb", (function() {
                    return pt
                }
            )),
            n.d(e, "lb", (function() {
                    return mt
                }
            )),
            n.d(e, "mb", (function() {
                    return vt
                }
            )),
            n.d(e, "nb", (function() {
                    return Ot
                }
            )),
            n.d(e, "ob", (function() {
                    return bt
                }
            )),
            n.d(e, "pb", (function() {
                    return Et
                }
            )),
            n.d(e, "qb", (function() {
                    return _t
                }
            )),
            n.d(e, "rb", (function() {
                    return Tt
                }
            )),
            n.d(e, "sb", (function() {
                    return St
                }
            )),
            n.d(e, "tb", (function() {
                    return jt
                }
            )),
            n.d(e, "ub", (function() {
                    return Ut
                }
            )),
            n.d(e, "vb", (function() {
                    return rt
                }
            )),
            n.d(e, "wb", (function() {
                    return nt
                }
            )),
            n.d(e, "xb", (function() {
                    return tt
                }
            )),
            n.d(e, "yb", (function() {
                    return kt
                }
            )),
            n.d(e, "zb", (function() {
                    return et
                }
            )),
            n.d(e, "Ab", (function() {
                    return Z
                }
            )),
            n.d(e, "Bb", (function() {
                    return wt
                }
            )),
            n.d(e, "Cb", (function() {
                    return yt
                }
            )),
            n.d(e, "Db", (function() {
                    return S
                }
            )),
            n.d(e, "Eb", (function() {
                    return O
                }
            )),
            n.d(e, "Fb", (function() {
                    return Q
                }
            )),
            n.d(e, "Gb", (function() {
                    return At
                }
            )),
            n.d(e, "Hb", (function() {
                    return a
                }
            )),
            n.d(e, "Ib", (function() {
                    return s
                }
            )),
            n.d(e, "Jb", (function() {
                    return u
                }
            )),
            n.d(e, "Kb", (function() {
                    return I
                }
            )),
            n.d(e, "Lb", (function() {
                    return c
                }
            )),
            n.d(e, "Mb", (function() {
                    return dt
                }
            )),
            n.d(e, "Nb", (function() {
                    return A
                }
            )),
            n.d(e, "Ob", (function() {
                    return zt
                }
            )),
            n.d(e, "Pb", (function() {
                    return Vt
                }
            )),
            n.d(e, "Qb", (function() {
                    return Bt
                }
            )),
            n.d(e, "Rb", (function() {
                    return Gt
                }
            )),
            n.d(e, "Sb", (function() {
                    return X
                }
            )),
            n.d(e, "Tb", (function() {
                    return V
                }
            ));
        var r = "advertLabel"
            , i = "autofocus"
            , a = "autoAdaptation"
            , o = "droppedFrames"
            , s = "resolution"
            , u = "bufferLength"
            , c = "autoplay"
            , l = "autoplayBlockedRule"
            , d = "allowedAudioLanguages"
            , f = "allowedSubtitleLanguages"
            , h = "bufferBehind"
            , p = "bufferTime"
            , g = "cacheDrmSessionByKeyId"
            , m = "considerDroppedFrames"
            , v = "controls"
            , y = "controlsLayout"
            , b = "cssPrefix"
            , E = "customTtmlParser"
            , _ = "debug"
            , T = "defaultGuiLanguage"
            , S = "defaultAudioLanguage"
            , O = "defaultBitrate"
            , w = "defaultSubtitle"
            , k = "disableCheckingDecodedFramesCount"
            , A = "disableNativeControls"
            , D = "drm"
            , x = "drmConfig"
            , C = "drmSystems"
            , P = "extra"
            , L = "fairplayContentType"
            , R = "file"
            , j = "files"
            , I = "fixAppleSiteSpecificHacks"
            , M = "forceDash"
            , F = "fullscreen"
            , N = "fullscreenElement"
            , B = "fullscreenElementId"
            , U = "gstream"
            , V = "guardLivePosition"
            , H = "guardTimeShiftSafeSeek"
            , G = "height"
            , z = "hideControls"
            , Y = "holder"
            , W = "httpConfig"
            , K = "immediatelySwitch"
            , q = "keyboardEvents"
            , Q = "lastBitrateCaching"
            , J = "layout"
            , X = "live"
            , $ = "liveDelay"
            , Z = "maxAutoBitrate"
            , tt = "maxBufferLength"
            , et = "minAutoBitrate"
            , nt = "minBufferTime"
            , rt = "minLiveDelay"
            , it = "minimumUpdatePeriodEnabled"
            , at = "modules"
            , ot = "name"
            , st = "pauseOnVideoClick"
            , ut = "playbackRates"
            , ct = "playsInline"
            , lt = "playlist"
            , dt = "poster"
            , ft = "prefetchHlsPlaylist"
            , ht = "reconnect"
            , pt = "rendererPriority"
            , gt = "resolveRedirects"
            , mt = "rootUrl"
            , vt = "seekChangeStep"
            , yt = "seekPrecision"
            , bt = "showButtonsOverVideo"
            , Et = "showButtonsOverVideoOnHover"
            , _t = "showJumpButtonsOverVideo"
            , Tt = "showPauseButtonOverVideo"
            , St = "skin"
            , Ot = "settings"
            , wt = "smartTV"
            , kt = "startBufferLength"
            , At = "startTime"
            , Dt = "streamWithCredentials"
            , xt = "subtitles"
            , Ct = "subtitleEnabled"
            , Pt = "timeShift"
            , Lt = "timeShiftEnabled"
            , Rt = "timeShiftParams"
            , jt = "tooltips"
            , It = "tracking"
            , Mt = "useDownlinkBitrate"
            , Ft = "UTCTimeServer"
            , Nt = "UTCTimeServerUpdateInterval"
            , Bt = "volume"
            , Ut = "volumeChangeStep"
            , Vt = "volumeLocalStorageEnabled"
            , Ht = "volumeLocalStorageKey"
            , Gt = "volumeMuted"
            , zt = "volumeMutedLocalStorageKey"
            , Yt = "volumeType"
            , Wt = "width"
    }
    , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return r
            }
        ));
        var r = function(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
                t
        }
    }
    , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return o
            }
        )),
            n.d(e, "b", (function() {
                    return i
                }
            ));
        var r = n(15)
            , i = Object(r.a)((function(t) {
                var e = function(t) {
                    var e = Object.prototype
                        , n = e.hasOwnProperty
                        , r = "function" == typeof Symbol ? Symbol : {}
                        , i = r.iterator || "@@iterator"
                        , a = r.asyncIterator || "@@asyncIterator"
                        , o = r.toStringTag || "@@toStringTag";
                    function s(t, e, n, r) {
                        var i = e && e.prototype instanceof l ? e : l
                            , a = Object.create(i.prototype)
                            , o = new T(r || []);
                        return a._invoke = function(t, e, n) {
                            var r = "suspendedStart";
                            return function(i, a) {
                                if ("executing" === r)
                                    throw new Error("Generator is already running");
                                if ("completed" === r) {
                                    if ("throw" === i)
                                        throw a;
                                    return O()
                                }
                                for (n.method = i,
                                         n.arg = a; ; ) {
                                    var o = n.delegate;
                                    if (o) {
                                        var s = b(o, n);
                                        if (s) {
                                            if (s === c)
                                                continue;
                                            return s
                                        }
                                    }
                                    if ("next" === n.method)
                                        n.sent = n._sent = n.arg;
                                    else if ("throw" === n.method) {
                                        if ("suspendedStart" === r)
                                            throw r = "completed",
                                                n.arg;
                                        n.dispatchException(n.arg)
                                    } else
                                        "return" === n.method && n.abrupt("return", n.arg);
                                    r = "executing";
                                    var l = u(t, e, n);
                                    if ("normal" === l.type) {
                                        if (r = n.done ? "completed" : "suspendedYield",
                                        l.arg === c)
                                            continue;
                                        return {
                                            value: l.arg,
                                            done: n.done
                                        }
                                    }
                                    "throw" === l.type && (r = "completed",
                                        n.method = "throw",
                                        n.arg = l.arg)
                                }
                            }
                        }(t, n, o),
                            a
                    }
                    function u(t, e, n) {
                        try {
                            return {
                                type: "normal",
                                arg: t.call(e, n)
                            }
                        } catch (t) {
                            return {
                                type: "throw",
                                arg: t
                            }
                        }
                    }
                    t.wrap = s;
                    var c = {};
                    function l() {}
                    function d() {}
                    function f() {}
                    var h = {};
                    h[i] = function() {
                        return this
                    }
                    ;
                    var p = Object.getPrototypeOf
                        , g = p && p(p(S([])));
                    g && g !== e && n.call(g, i) && (h = g);
                    var m = f.prototype = l.prototype = Object.create(h);
                    function v(t) {
                        ["next", "throw", "return"].forEach((function(e) {
                                t[e] = function(t) {
                                    return this._invoke(e, t)
                                }
                            }
                        ))
                    }
                    function y(t, e) {
                        var r;
                        this._invoke = function(i, a) {
                            function o() {
                                return new e((function(r, o) {
                                        !function r(i, a, o, s) {
                                            var c = u(t[i], t, a);
                                            if ("throw" !== c.type) {
                                                var l = c.arg
                                                    , d = l.value;
                                                return d && "object" == typeof d && n.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                                                        r("next", t, o, s)
                                                    }
                                                ), (function(t) {
                                                        r("throw", t, o, s)
                                                    }
                                                )) : e.resolve(d).then((function(t) {
                                                        l.value = t,
                                                            o(l)
                                                    }
                                                ), (function(t) {
                                                        return r("throw", t, o, s)
                                                    }
                                                ))
                                            }
                                            s(c.arg)
                                        }(i, a, r, o)
                                    }
                                ))
                            }
                            return r = r ? r.then(o, o) : o()
                        }
                    }
                    function b(t, e) {
                        var n = t.iterator[e.method];
                        if (void 0 === n) {
                            if (e.delegate = null,
                            "throw" === e.method) {
                                if (t.iterator.return && (e.method = "return",
                                    e.arg = void 0,
                                    b(t, e),
                                "throw" === e.method))
                                    return c;
                                e.method = "throw",
                                    e.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return c
                        }
                        var r = u(n, t.iterator, e.arg);
                        if ("throw" === r.type)
                            return e.method = "throw",
                                e.arg = r.arg,
                                e.delegate = null,
                                c;
                        var i = r.arg;
                        return i ? i.done ? (e[t.resultName] = i.value,
                            e.next = t.nextLoc,
                        "return" !== e.method && (e.method = "next",
                            e.arg = void 0),
                            e.delegate = null,
                            c) : i : (e.method = "throw",
                            e.arg = new TypeError("iterator result is not an object"),
                            e.delegate = null,
                            c)
                    }
                    function E(t) {
                        var e = {
                            tryLoc: t[0]
                        };
                        1 in t && (e.catchLoc = t[1]),
                        2 in t && (e.finallyLoc = t[2],
                            e.afterLoc = t[3]),
                            this.tryEntries.push(e)
                    }
                    function _(t) {
                        var e = t.completion || {};
                        e.type = "normal",
                            delete e.arg,
                            t.completion = e
                    }
                    function T(t) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }],
                            t.forEach(E, this),
                            this.reset(!0)
                    }
                    function S(t) {
                        if (t) {
                            var e = t[i];
                            if (e)
                                return e.call(t);
                            if ("function" == typeof t.next)
                                return t;
                            if (!isNaN(t.length)) {
                                var r = -1
                                    , a = function e() {
                                    for (; ++r < t.length; )
                                        if (n.call(t, r))
                                            return e.value = t[r],
                                                e.done = !1,
                                                e;
                                    return e.value = void 0,
                                        e.done = !0,
                                        e
                                };
                                return a.next = a
                            }
                        }
                        return {
                            next: O
                        }
                    }
                    function O() {
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    return d.prototype = m.constructor = f,
                        f.constructor = d,
                        f[o] = d.displayName = "GeneratorFunction",
                        t.isGeneratorFunction = function(t) {
                            var e = "function" == typeof t && t.constructor;
                            return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
                        }
                        ,
                        t.mark = function(t) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f,
                            o in t || (t[o] = "GeneratorFunction")),
                                t.prototype = Object.create(m),
                                t
                        }
                        ,
                        t.awrap = function(t) {
                            return {
                                __await: t
                            }
                        }
                        ,
                        v(y.prototype),
                        y.prototype[a] = function() {
                            return this
                        }
                        ,
                        t.AsyncIterator = y,
                        t.async = function(e, n, r, i, a) {
                            void 0 === a && (a = Promise);
                            var o = new y(s(e, n, r, i),a);
                            return t.isGeneratorFunction(n) ? o : o.next().then((function(t) {
                                    return t.done ? t.value : o.next()
                                }
                            ))
                        }
                        ,
                        v(m),
                        m[o] = "Generator",
                        m[i] = function() {
                            return this
                        }
                        ,
                        m.toString = function() {
                            return "[object Generator]"
                        }
                        ,
                        t.keys = function(t) {
                            var e = [];
                            for (var n in t)
                                e.push(n);
                            return e.reverse(),
                                function n() {
                                    for (; e.length; ) {
                                        var r = e.pop();
                                        if (r in t)
                                            return n.value = r,
                                                n.done = !1,
                                                n
                                    }
                                    return n.done = !0,
                                        n
                                }
                        }
                        ,
                        t.values = S,
                        T.prototype = {
                            constructor: T,
                            reset: function(t) {
                                if (this.prev = 0,
                                    this.next = 0,
                                    this.sent = this._sent = void 0,
                                    this.done = !1,
                                    this.delegate = null,
                                    this.method = "next",
                                    this.arg = void 0,
                                    this.tryEntries.forEach(_),
                                    !t)
                                    for (var e in this)
                                        "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                            },
                            stop: function() {
                                this.done = !0;
                                var t = this.tryEntries[0].completion;
                                if ("throw" === t.type)
                                    throw t.arg;
                                return this.rval
                            },
                            dispatchException: function(t) {
                                if (this.done)
                                    throw t;
                                var e = this;
                                function r(n, r) {
                                    return o.type = "throw",
                                        o.arg = t,
                                        e.next = n,
                                    r && (e.method = "next",
                                        e.arg = void 0),
                                        !!r
                                }
                                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                    var a = this.tryEntries[i]
                                        , o = a.completion;
                                    if ("root" === a.tryLoc)
                                        return r("end");
                                    if (a.tryLoc <= this.prev) {
                                        var s = n.call(a, "catchLoc")
                                            , u = n.call(a, "finallyLoc");
                                        if (s && u) {
                                            if (this.prev < a.catchLoc)
                                                return r(a.catchLoc, !0);
                                            if (this.prev < a.finallyLoc)
                                                return r(a.finallyLoc)
                                        } else if (s) {
                                            if (this.prev < a.catchLoc)
                                                return r(a.catchLoc, !0)
                                        } else {
                                            if (!u)
                                                throw new Error("try statement without catch or finally");
                                            if (this.prev < a.finallyLoc)
                                                return r(a.finallyLoc)
                                        }
                                    }
                                }
                            },
                            abrupt: function(t, e) {
                                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                    var i = this.tryEntries[r];
                                    if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                        var a = i;
                                        break
                                    }
                                }
                                a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                                var o = a ? a.completion : {};
                                return o.type = t,
                                    o.arg = e,
                                    a ? (this.method = "next",
                                        this.next = a.finallyLoc,
                                        c) : this.complete(o)
                            },
                            complete: function(t, e) {
                                if ("throw" === t.type)
                                    throw t.arg;
                                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                                    this.method = "return",
                                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                                    c
                            },
                            finish: function(t) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var n = this.tryEntries[e];
                                    if (n.finallyLoc === t)
                                        return this.complete(n.completion, n.afterLoc),
                                            _(n),
                                            c
                                }
                            },
                            catch: function(t) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var n = this.tryEntries[e];
                                    if (n.tryLoc === t) {
                                        var r = n.completion;
                                        if ("throw" === r.type) {
                                            var i = r.arg;
                                            _(n)
                                        }
                                        return i
                                    }
                                }
                                throw new Error("illegal catch attempt")
                            },
                            delegateYield: function(t, e, n) {
                                return this.delegate = {
                                    iterator: S(t),
                                    resultName: e,
                                    nextLoc: n
                                },
                                "next" === this.method && (this.arg = void 0),
                                    c
                            }
                        },
                        t
                }(t.exports);
                try {
                    regeneratorRuntime = e
                } catch (t) {
                    Function("r", "regeneratorRuntime = r")(e)
                }
            }
        ));
        function a(t, e, n, r, i, a, o) {
            try {
                var s = t[a](o)
                    , u = s.value
            } catch (t) {
                return void n(t)
            }
            s.done ? e(u) : Promise.resolve(u).then(r, i)
        }
        var o = function(t) {
            return function() {
                var e = this
                    , n = arguments;
                return new Promise((function(r, i) {
                        var o = t.apply(e, n);
                        function s(t) {
                            a(o, r, i, s, u, "next", t)
                        }
                        function u(t) {
                            a(o, r, i, s, u, "throw", t)
                        }
                        s(void 0)
                    }
                ))
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return c
            }
        )),
            n.d(e, "b", (function() {
                    return o
                }
            )),
            n.d(e, "c", (function() {
                    return s
                }
            )),
            n.d(e, "d", (function() {
                    return a
                }
            )),
            n.d(e, "e", (function() {
                    return o
                }
            )),
            n.d(e, "f", (function() {
                    return u
                }
            ));
        var r = n(15)
            , i = n(18);
        var a = function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
            , o = Object(r.a)((function(t) {
                function e(n) {
                    return t.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    }
                        ,
                        e(n)
                }
                t.exports = e
            }
        ));
        var s = function(t, e) {
            return !e || "object" !== Object(i.a)(e) && "function" != typeof e ? a(t) : e
        }
            , u = Object(r.a)((function(t) {
                function e(n, r) {
                    return t.exports = e = Object.setPrototypeOf || function(t, e) {
                        return t.__proto__ = e,
                            t
                    }
                        ,
                        e(n, r)
                }
                t.exports = e
            }
        ));
        var c = function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && u(t, e)
        }
    }
    , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return r
            }
        )),
            n.d(e, "b", (function() {
                    return a
                }
            ));
        var r = function(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        };
        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
            }
        }
        var a = function(t, e, n) {
            return e && i(t.prototype, e),
            n && i(t, n),
                t
        }
    }
    , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return s
            }
        ));
        var r = n(19);
        var i = function(t) {
            if (Array.isArray(t))
                return t
        };
        var a = function(t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                var n = []
                    , r = !0
                    , i = !1
                    , a = void 0;
                try {
                    for (var o, s = t[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value),
                    !e || n.length !== e); r = !0)
                        ;
                } catch (t) {
                    i = !0,
                        a = t
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (i)
                            throw a
                    }
                }
                return n
            }
        };
        var o = function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        };
        var s = function(t, e) {
            return i(t) || a(t, e) || Object(r.b)(t, e) || o()
        }
    }
    , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return r
            }
        ));
        var r = {
            DRM_GENERATE_LICENSE_CHALLENGE_FAILED: "drm.generate.license.challenge.failed",
            DRM_GENERATE_MEDIA_KEYS_FAILED: "drm.generate.media.keys.failed",
            DRM_SESSION_UPDATE_FAILED: "drm.session.update.failed",
            DRM_LOAD_CERTIFICATE_FAILED: "drm.load.certificate.failed",
            DRM_LOAD_LICENSE_KEY_FAILED: "drm.load.license.key.failed",
            DRM_NO_KEY_PROVIDED: "drm.no.key.provided",
            DRM_SESSION_KEY_ERROR: "drm.session.key.error",
            GENERIC_ERROR: "generic.error",
            LICENSE_RESPONSE_REJECTED: "license.response.rejected",
            LOAD_MANIFEST_ERROR: "load.manifest.error",
            LOAD_SEGMENT_ERROR: "load.segment.error",
            MEDIA_ERR_ABORTED: "media.err.aborted",
            MEDIA_ERR_DECODE: "media.err.decode",
            MEDIA_ERR_NETWORK: "media.err.network",
            MEDIA_ERR_SRC_NOT_SUPPORTED: "media.err.src.not.supported",
            NO_SUPPORTED_RENDERER: "no.supported.renderer",
            NO_SUPPORTED_CODEC: "no.supported.codec",
            NOT_SECURE_CONTEXT: "drm.not.secure.context.error",
            PARSE_MANIFEST_ERROR: "parse.manifest.error",
            PLAYBACK_ERROR: "playback.error"
        }
    }
    , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return s
            }
        ));
        var r = n(19);
        var i = function(t) {
            if (Array.isArray(t))
                return Object(r.a)(t)
        };
        var a = function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t)
        };
        var o = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        };
        var s = function(t) {
            return i(t) || a(t) || Object(r.b)(t) || o()
        }
    }
    , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return r
            }
        )),
            n.d(e, "b", (function() {
                    return o
                }
            )),
            n.d(e, "c", (function() {
                    return s
                }
            )),
            n.d(e, "d", (function() {
                    return i
                }
            )),
            n.d(e, "e", (function() {
                    return a
                }
            ));
        var r = "manifest-manager"
            , i = "media-element"
            , a = "media-source"
            , o = "stream-manager"
            , s = "video-wrapper"
    }
    , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return c
            }
        )),
            n.d(e, "b", (function() {
                    return s
                }
            )),
            n.d(e, "c", (function() {
                    return u
                }
            )),
            n.d(e, "d", (function() {
                    return h
                }
            ));
        var r = n(2)
            , i = n(6);
        function a(t) {
            this.message = t
        }
        function o(t) {
            var e, n = this;
            this.promise = new Promise((function(t) {
                    return e = t
                }
            )),
                t((function(t) {
                        n.reason || (n.reason = new a(t),
                            e(n.reason))
                    }
                ))
        }
        o.source = function() {
            var t, e = new o((function(e) {
                    return t = e
                }
            ));
            return {
                cancel: t,
                token: e
            }
        }
        ;
        var s = "failed"
            , u = "progress"
            , c = "arraybuffer";
        function l(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                ))),
                    n.push.apply(n, r)
            }
            return n
        }
        function d(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? l(Object(n), !0).forEach((function(e) {
                        Object(r.a)(t, e, n[e])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                ))
            }
            return t
        }
        var f = {
            responseType: "text",
            method: "GET",
            retryAttempts: 3,
            retryDelay: 1e3,
            timeout: 8e3,
            withCredentials: !1,
            cancelToken: null
        }
            , h = {
            get: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return "xml" === e.responseType && (e.responseType = "document"),
                    p(t, d({}, e))
            },
            getBinary: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return p(t, d({
                    responseType: c
                }, e))
            },
            head: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return p(t, d({
                    method: "HEAD"
                }, e))
            },
            post: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return p(t, d({
                    method: "POST"
                }, e))
            },
            put: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return p(t, d({
                    method: "PUT"
                }, e))
            },
            del: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return p(t, d({
                    method: "DELETE"
                }, e))
            }
        };
        function p(t, e) {
            var n, r, a = Date.now(), o = !1, l = 1;
            return new Promise((function(h, p) {
                    var g = d({}, f, {}, e)
                        , m = g || {}
                        , v = m.cancelToken
                        , y = m.headers
                        , b = void 0 === y ? {} : y
                        , E = m.method
                        , _ = m.onProgress
                        , T = m.params
                        , S = m.responseType
                        , O = m.retryAttempts
                        , w = m.retryDelay
                        , k = m.withCredentials;
                    v && v.promise.then((function() {
                            return P()
                        }
                    ));
                    var A = function(t, e) {
                        if (!e || 0 === Object.keys(e).length)
                            return t;
                        var n = Object.entries(e).map((function(t) {
                                var e = Object(i.a)(t, 2)
                                    , n = e[0]
                                    , r = e[1];
                                return "".concat(n, "=").concat(r)
                            }
                        )).join("&")
                            , r = t.includes("?") ? "&" : "?";
                        return "".concat(t).concat(r).concat(n)
                    }(t, T)
                        , D = function() {
                        n = new XMLHttpRequest,
                        k && (n.withCredentials = !0),
                            n.open(E, A),
                            n.responseType = S,
                        "xml" === S && n.overrideMimeType("text/xml"),
                            Object.entries(b).forEach((function(t) {
                                    var e = Object(i.a)(t, 2)
                                        , r = e[0]
                                        , a = e[1];
                                    return n.setRequestHeader(r, a)
                                }
                            )),
                        _ && (n.onprogress = function(t) {
                                return x(t)
                            }
                        ),
                            n.onreadystatechange = function() {
                                return C()
                            }
                            ,
                            n.send(g.data || null)
                    }
                        , x = function(t) {
                        var e = Date.now()
                            , n = {
                            bps: Math.round(t.loaded / ((e - a) / 1e3) * 8),
                            event: t,
                            timestamp: e,
                            loaded: t.loaded,
                            started: a,
                            status: u
                        };
                        _(n)
                    }
                        , C = function() {
                        if (4 === n.readyState) {
                            var t = Date.now()
                                , e = t - a
                                , i = {
                                duration: e,
                                timestamp: t,
                                url: A,
                                statusCode: n.status,
                                status: "success"
                            };
                            if (200 === n.status) {
                                var u = function(t, e) {
                                    switch (e.responseType) {
                                        case "xml":
                                        case "document":
                                            return t.responseXML;
                                        case c:
                                            return new Uint8Array(t.response);
                                        default:
                                            return t.responseText
                                    }
                                }(n, g);
                                i.bps = Math.round(u.length / (e / 1e3) * 8),
                                    h({
                                        metric: i,
                                        data: u,
                                        url: A,
                                        status: "success",
                                        responseUrl: n.responseURL,
                                        xhr: n
                                    })
                            } else
                                o ? (i.status = "aborted",
                                    p({
                                        error: "aborted",
                                        metric: i,
                                        xhr: n
                                    })) : l > O ? (i.status = s,
                                    p({
                                        error: s,
                                        metric: i,
                                        xhr: n
                                    })) : (l++,
                                    i.status = "retry",
                                    r = setTimeout(D, w),
                                _ && _(i))
                        }
                    }
                        , P = function() {
                        o = !0,
                            clearTimeout(r),
                            n.abort(),
                            p("aborted")
                    };
                    D()
                }
            ))
        }
        h.CancelToken = o
    }
    , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return a
            }
        ));
        var r = navigator.userAgent
            , i = function(t) {
            return !!r.match(t)
        }
            , a = {
            isMobile: function() {
                return this.isAndroid() || this.isIOS() || this.isMobileOpera() || this.isMobileWindows()
            },
            isAndroid: function() {
                return i(/Android/i)
            },
            isIOS: function() {
                return i(/iPhone|iPad|iPod/i)
            },
            isMobileOpera: function() {
                return i(/Opera Mini/i)
            },
            isMobileWindows: function() {
                return i(/IEMobile/i)
            },
            isFirefox: function() {
                return r.indexOf("Firefox") > -1
            },
            isOpera: function() {
                return !!window.opera || r.indexOf("OPR/") >= 0
            },
            isSafari: function() {
                return /^((?!chrome).)*safari/i.test(r)
            },
            isSafariWithSiteSpecificHacks: function() {
                return !this.isSafari() && (/constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || "undefined" != typeof safari && safari.pushNotification).toString())
            },
            isTizen: function() {
                return i(/Tizen/)
            },
            getFirefoxVersion: function() {
                var t = r.indexOf("Firefox");
                return parseFloat(r.substring(t + 8))
            },
            isWidevineSupported: function() {
                return (!this.isFirefox() || !(this.getFirefoxVersion() < 47 || -1 !== r.indexOf("Windows NT 5.1"))) && (!(-1 !== r.toLowerCase().indexOf("linux") && this.getFirefoxVersion() < 47) && !!navigator.requestMediaKeySystemAccess)
            },
            getLanguage: function() {
                return void 0 !== navigator.language ? navigator.language : void 0 !== navigator.languages ? navigator.languages[0].split("-")[0] : null
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return y
            }
        )),
            n.d(e, "b", (function() {
                    return u
                }
            )),
            n.d(e, "c", (function() {
                    return d
                }
            )),
            n.d(e, "d", (function() {
                    return l
                }
            ));
        var r = n(2)
            , i = n(1)
            , a = n(3)
            , o = n(8)
            , s = n(10)
            , u = function(t) {
            return t.startsWith("http") || t.startsWith("//")
        }
            , c = function(t, e) {
            for (var n = !t.startsWith("http"), r = n ? "https://".concat(t) : t, i = new URL(r), a = i.searchParams, s = i.hash, u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), l = 2; l < u; l++)
                c[l - 2] = arguments[l];
            var d = c[0];
            i.hash = "",
            a.has(d) && a.delete(d);
            var f = i.search.substring(1)
                , h = [f];
            Object(o.a)(a.keys()).forEach((function(t) {
                    return a.delete(t)
                }
            )),
                a[e].apply(a, c);
            var p = a.has(d) && a.get(d);
            p && (a.delete(d),
                h.push("".concat(d, "=").concat(p)));
            var g = i.toString().replace(n ? i.protocol : "", "")
                , m = h.filter(Boolean).join("&");
            return m = m ? "?".concat(m) : "",
                "".concat(g).concat(m).concat(s)
        }
            , l = function(t, e, n) {
            return c(t, "set", e, n)
        }
            , d = function(t, e) {
            return c(t, "delete", e)
        }
            , f = "urn:mpeg:dash:utc:direct:2014"
            , h = "urn:mpeg:dash:utc:http-head:2014"
            , p = "urn:mpeg:dash:utc:http-iso:2014"
            , g = function(t) {
            return s.d.get(t.replace("http://", "//")).then((function(t) {
                    var e = t.data;
                    return new Date(e).getTime() || Date.now()
                }
            )).catch((function() {
                    return Date.now()
                }
            ))
        }
            , m = function(t) {
            return Promise.resolve(new Date(t).getTime())
        }
            , v = 0;
        function y(t) {
            var e, n = t.options, o = 1e3 * n.get(i.k), s = n.get(i.l).replace("http:", "");
            function u() {
                return c.apply(this, arguments)
            }
            function c() {
                return (c = Object(a.a)(a.b.mark((function t() {
                        var n, i, c, l, d, b, E = arguments;
                        return a.b.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                        case 0:
                                            if (i = E.length > 0 && void 0 !== E[0] ? E[0] : {},
                                                c = i.schemeIdUri,
                                                l = i.value,
                                                n = {},
                                                Object(r.a)(n, f, m),
                                                Object(r.a)(n, h, g),
                                                Object(r.a)(n, p, g),
                                                !(d = n)[c]) {
                                                t.next = 8;
                                                break
                                            }
                                            return t.next = 5,
                                                d[c](l);
                                        case 5:
                                            t.t0 = t.sent,
                                                t.next = 11;
                                            break;
                                        case 8:
                                            return t.next = 10,
                                                g(s);
                                        case 10:
                                            t.t0 = t.sent;
                                        case 11:
                                            return b = t.t0,
                                                v = Date.now() - b,
                                            o > 0 && c !== f && (e = setTimeout((function() {
                                                    return u({
                                                        schemeIdUri: c,
                                                        value: l
                                                    })
                                                }
                                            ), o)),
                                                t.abrupt("return", y.getTime());
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                            }
                        ), t)
                    }
                )))).apply(this, arguments)
            }
            function l() {
                return (l = Object(a.a)(a.b.mark((function t() {
                        var e, n, r, i, o = arguments;
                        return a.b.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                        case 0:
                                            if (e = o.length > 0 && void 0 !== o[0] ? o[0] : {},
                                                n = e.schemeIdUri,
                                                r = e.value,
                                            n !== f) {
                                                t.next = 6;
                                                break
                                            }
                                            return t.next = 4,
                                                m(r);
                                        case 4:
                                            i = t.sent,
                                                v = Date.now() - i;
                                        case 6:
                                            return t.abrupt("return", y.getTime());
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                            }
                        ), t)
                    }
                )))).apply(this, arguments)
            }
            return {
                sync: u,
                syncDirect: function() {
                    return l.apply(this, arguments)
                },
                stop: function() {
                    clearTimeout(e)
                },
                getTime: function() {
                    return y.getTime()
                }
            }
        }
        y.getTime = function() {
            return (Date.now() - v) / 1e3
        }
    }
    , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return u
            }
        ));
        var r = n(6)
            , i = n(8)
            , a = n(18)
            , o = n(20)
            , s = function() {
            var t = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g;
            function e(t, e) {
                for (var n = "" + Math.abs(t), r = e || 2; n.length < r; )
                    n = "0" + n;
                return n
            }
            return {
                format: function(n, r) {
                    for (var i = r || "YYYY-MM-DD HH:mm:ss", a = new Date(n), o = i.match(t), s = [], u = 0, c = o.length; u < c; u++) {
                        var l = o[u];
                        switch (l) {
                            case "YYYY":
                                s.push(a.getFullYear());
                                break;
                            case "YY":
                                s.push(a.getFullYear() % 100);
                                break;
                            case "MM":
                            case "M":
                                s.push(e(a.getMonth() + 1));
                                break;
                            case "DD":
                            case "D":
                                s.push(e(a.getDate()));
                                break;
                            case "HH":
                            case "H":
                                s.push(e(a.getHours()));
                                break;
                            case "mm":
                            case "m":
                                s.push(e(a.getMinutes()));
                                break;
                            case "ss":
                            case "s":
                                s.push(e(a.getSeconds()));
                                break;
                            case "ms":
                                s.push(a.getMilliseconds);
                                break;
                            default:
                                s.push(l)
                        }
                    }
                    return s.join("")
                }
            }
        }()
            , u = {
            extend: function(t, e) {
                var n;
                for (n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n]);
                return t
            },
            extendDeep: function(t, e) {
                var n;
                for (n in t = t || {},
                    e)
                    e.hasOwnProperty(n) && ("object" === Object(a.b)(e[n]) && null !== e[n] ? (t[n] = "[object Array]" === Object.prototype.toString.call(e[n]) ? [] : {},
                        this.extendDeep(t[n], e[n])) : t[n] = e[n]);
                return t
            },
            generateRandomString: function(t) {
                var e, n = "", r = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (e = 0; e < t; e++)
                    n += r.charAt(Math.floor(Math.random() * r.length));
                return n
            },
            formatTime: function(t) {
                isNaN(t) && (t = 0);
                var e = Math.floor(t / 3600)
                    , n = Math.floor(t / 60) % 60
                    , r = Math.floor(t) % 60;
                return (e ? u.addLeadingZero(e) + ":" : "") + u.addLeadingZero(n) + ":" + this.addLeadingZero(r)
            },
            formatDateTime: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD HH:mm:ss";
                return s.format(t, e)
            },
            addLeadingZero: function(t) {
                return t < 10 ? "0" + t : "" + t
            },
            parseTime: function(t) {
                for (var e = t.split(":"), n = 0, r = 2; e.length > 0; )
                    n += Math.pow(60, r) * parseInt(e.shift(), 10),
                        r--;
                return n
            },
            isDST: function(t) {
                var e = new Date(t.getFullYear(),0,1)
                    , n = new Date(t.getFullYear(),6,1);
                return Math.min(e.getTimezoneOffset(), n.getTimezoneOffset()) === t.getTimezoneOffset()
            },
            parseDate: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0:0:0"
                    , n = t.split("-");
                n[1]--;
                var i = e.split(":")
                    , a = Object(r.a)(i, 3)
                    , o = a[0]
                    , s = a[1]
                    , c = a[2]
                    , l = u.isDST(new Date(n[0],n[1],n[2],parseInt(o),parseInt(s),parseInt(c)))
                    , d = new Date(new Date(n[0],n[1],n[2]).getTime()).getTimezoneOffset() + (l ? 120 : 60);
                return d *= 60,
                new Date(n[0],n[1],n[2]).getTime() / 1e3 - d
            },
            calculateBaseTime: function(t) {
                var e = t.split(" ");
                return u.parseDate(e[0], e[1]) + u.parseTime(e[1])
            },
            parseDateTime: function(t) {
                var e, n = 0, i = t.split(/([\+\-Z])(.{2,9})?$/), a = /Z$/.test(t), o = i.length <= 1, s = i[0].split(/[T\s]/), c = s[0].split("-"), l = Object(r.a)(c, 3), d = l[0], f = l[1], h = l[2], p = s[1].split(":"), g = Object(r.a)(p, 3), m = g[0], v = g[1], y = g[2], b = u.isDST(new Date(d,f - 1,h,m,v,y));
                return a || o || (n = -1 * +(i[1] + (3600 * (e = i[2].split(/[:.]/))[0] + 60 * e[1]))),
                    n += 60 * (b ? 120 : 60),
                this.calculateBaseTime(s[0] + " " + s[1]) + (o ? 0 : n)
            },
            getCssUrl: function(t) {
                var e = t.name
                    , n = void 0 === e ? "default" : e
                    , r = t.url
                    , i = "".concat(o.a.ROOT_URL).concat(o.a.VERSION, "/css/");
                return r || "".concat(i).concat(n, ".css")
            },
            loadSkin: function(t) {
                return this.loadCss(this.getCssUrl(t))
            },
            loadCss: function(t) {
                var e = document.createElement("link");
                return Object(i.a)(document.querySelectorAll("link")).find((function(e) {
                        return e.getAttribute("href") === t
                    }
                )) ? Promise.resolve() : new Promise((function(n, r) {
                        e.setAttribute("rel", "stylesheet"),
                            e.setAttribute("type", "text/css"),
                            e.setAttribute("href", t),
                            document.querySelector("head").appendChild(e),
                            e.onload = function() {
                                return n()
                            }
                            ,
                            e.onerror = function() {
                                return n()
                            }
                    }
                ))
            },
            getBrowserLanguage: function() {
                var t, e, n, r = (null === (t = navigator) || void 0 === t ? void 0 : t.language) || (null === (e = navigator) || void 0 === e || null === (n = e.languages) || void 0 === n ? void 0 : n[0]);
                return null == r ? void 0 : r.split("-")[0]
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return i
            }
        ));
        var r = n(5)
            , i = function() {
            function t() {
                Object(r.a)(this, t),
                    this.callbacks = {}
            }
            return Object(r.b)(t, [{
                key: "on",
                value: function(t, e) {
                    this.callbacks = this.callbacks || {},
                    this.callbacks.hasOwnProperty(t) || (this.callbacks[t] = []),
                        this.callbacks[t].push(e)
                }
            }, {
                key: "once",
                value: function(t, e) {
                    this.on(t, (function n() {
                            var r = Array.prototype.slice.call(arguments);
                            this.off(t, n),
                                e.apply(this, r)
                        }
                    ))
                }
            }, {
                key: "off",
                value: function(t, e) {
                    if (this.callbacks = this.callbacks || {},
                    null != t && "" !== t)
                        if (e) {
                            if (this.callbacks[t] && this.callbacks[t].length)
                                for (var n; -1 !== (n = this.callbacks[t].indexOf(e)); )
                                    this.callbacks[t].splice(n, 1)
                        } else
                            delete this.callbacks[t];
                    else
                        this.callbacks = {}
                }
            }, {
                key: "trigger",
                value: function(t) {
                    var e, n = Array.prototype.slice.call(arguments);
                    if (this.callbacks = this.callbacks || {},
                        n.shift(),
                        this.callbacks.hasOwnProperty(t)) {
                        e = this.callbacks[t].slice();
                        for (var r = 0; r < e.length; r++)
                            e[r].apply(this, n)
                    }
                }
            }]),
                t
        }()
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            return t(e = {
                exports: {}
            }, e.exports),
                e.exports
        }
        n.d(e, "a", (function() {
                return r
            }
        ))
    }
    , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return o
            }
        ));
        var r, i = n(2), a = n(7), o = (r = {},
            Object(i.a)(r, a.a.NO_SUPPORTED_RENDERER, 200),
            Object(i.a)(r, a.a.NO_SUPPORTED_CODEC, 201),
            Object(i.a)(r, a.a.PLAYBACK_ERROR, 204),
            Object(i.a)(r, a.a.MEDIA_ERR_ABORTED, 205),
            Object(i.a)(r, a.a.MEDIA_ERR_DECODE, 206),
            Object(i.a)(r, a.a.MEDIA_ERR_NETWORK, 207),
            Object(i.a)(r, a.a.MEDIA_ERR_SRC_NOT_SUPPORTED, 208),
            Object(i.a)(r, a.a.LOAD_MANIFEST_ERROR, 400),
            Object(i.a)(r, a.a.LOAD_SEGMENT_ERROR, 401),
            Object(i.a)(r, a.a.PARSE_MANIFEST_ERROR, 500),
            Object(i.a)(r, a.a.GENERIC_ERROR, 900),
            r)
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 250
                , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
                , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                , r = null
                , i = 0;
            function a() {
                o(),
                    i = Date.now(),
                    r = setInterval(e, t),
                n && e()
            }
            function o() {
                clearInterval(r)
            }
            function s(e) {
                e && (t = e),
                    a()
            }
            function u() {
                return Date.now() - i
            }
            return {
                getDuration: u,
                start: a,
                restart: s,
                stop: o
            }
        }
        n.d(e, "a", (function() {
                return r
            }
        ))
    }
    , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return i
            }
        )),
            n.d(e, "b", (function() {
                    return i
                }
            ));
        var r = n(15)
            , i = Object(r.a)((function(t) {
                function e(n) {
                    return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = e = function(t) {
                            return typeof t
                        }
                        : t.exports = e = function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }
                        ,
                        e(n)
                }
                t.exports = e
            }
        ))
    }
    , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return r
            }
        )),
            n.d(e, "b", (function() {
                    return i
                }
            ));
        var r = function(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++)
                r[n] = t[n];
            return r
        };
        var i = function(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return r(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return r
            }
        ));
        var r = {
            VERSION: "2.31.0",
            BUILD: "2022-12-02 11:34:37",
            ROOT_URL: "",
            REVISION: "d5f4161"
        };
        r.INFO = "version: ".concat(r.VERSION, ", build: ").concat(r.BUILD, ", revision: ").concat(r.REVISION)
    }
    , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return c
            }
        )),
            n.d(e, "b", (function() {
                    return o
                }
            )),
            n.d(e, "c", (function() {
                    return u
                }
            ));
        var r = n(11)
            , i = r.a.isIOS()
            , a = [["exitFullscreen", "requestFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitExitFullscreen", "webkitRequestFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitCancelFullScreen", "webkitRequestFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozCancelFullScreen", "mozRequestFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msExitFullscreen", "msRequestFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]]
            , o = function(t, e) {
            if (i) {
                var n = s(t)
                    , r = function(t) {
                    t.target === n && e(!0)
                }
                    , a = function(t) {
                    t.target === n && e(!1)
                };
                return n.addEventListener("webkitbeginfullscreen", r),
                    n.addEventListener("webkitendfullscreen", a),
                    function() {
                        n.removeEventListener("webkitbeginfullscreen", r),
                            n.removeEventListener("webkitendfullscreen", a)
                    }
            }
            var o = function(n) {
                n.target === t && e(c(t))
            };
            return document.addEventListener(l.fullscreenchange, o),
                function() {
                    return document.removeEventListener(l.fullscreenchange, o)
                }
        }
            , s = function(t) {
            return "VIDEO" !== t.tagName ? t.querySelector("video") : t
        }
            , u = function(t) {
            if (i) {
                var e = s(t);
                c(t) ? e.webkitExitFullscreen() : e.webkitEnterFullScreen()
            }
            l && (c(t) ? document[l.exitFullscreen]() : t[l.requestFullscreen]())
        }
            , c = function(t) {
            return i && t ? !!s(t).webkitDisplayingFullscreen : l ? !!document[l.fullscreenElement] : void 0
        }
            , l = function() {
            for (var t, e = null, n = 0; n < a.length; n++)
                if (a[n][0]in document) {
                    t = a[n];
                    break
                }
            if (t) {
                e = {};
                for (var r = 0; r < t.length; r++)
                    e[a[0][r]] = t[r]
            }
            return e
        }()
    }
    , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return s
            }
        )),
            n.d(e, "b", (function() {
                    return u
                }
            ));
        var r = n(1)
            , i = n(0)
            , a = n(13)
            , o = n(12)
            , s = {
            LIVE: "live",
            LIVE_DELAYED: "liveDelayed",
            VOD: "vod",
            VOD_SHIFTED: "vodShifted"
        };
        function u(t) {
            var e;
            t.on(i.j, E),
                t.on(i.k, E),
                t.on(i.C, (function(t) {
                        m = t.availabilityStartTime || 0,
                        t.presentationTimeOffset || (v = m)
                    }
                )),
                t.once(i.sb, (function() {
                        h = x()
                    }
                ));
            var n = t.options
                , u = D()
                , c = null
                , l = !1
                , d = -1
                , f = -1
                , h = -1
                , p = -1
                , g = -1
                , m = 0
                , v = 978307200
                , y = null === (e = u) || void 0 === e ? void 0 : e.unixTimestamp
                , b = n.get(r.o);
            function E() {
                u = D(),
                t.options.get(r.p) && (c = s.LIVE),
                u && (void 0 !== u.baseTimeStamp && (v = u.baseTimeStamp),
                u.dvrWindow && (l = !0,
                    f = u.dvrWindow),
                u.start && (d = a.a.parseDateTime(u.start)),
                u.play && (g = a.a.parseDateTime(u.play)),
                u.start && u.stop && (p = a.a.parseDateTime(u.stop),
                g && n.set(r.Gb, Math.floor(g - d))),
                null === c && (c = s.LIVE,
                u.play && (c = s.LIVE_DELAYED),
                u.start && u.stop && (c = s.VOD)),
                    setTimeout(t.trigger.bind(t, i.l), 0))
            }
            function _() {
                return c === s.LIVE || c === s.LIVE_DELAYED
            }
            function T() {
                return null !== c
            }
            function S() {
                return v
            }
            function O() {
                return Math.min(f, A() - d)
            }
            function w() {
                return g
            }
            function k() {
                return p
            }
            function A() {
                return o.a.getTime()
            }
            function D() {
                return t.options.get(r.u)
            }
            function x() {
                var t = A()
                    , e = O();
                return l && e > 0 && t > 0 ? t - e : d
            }
            return y && (v = 0),
                {
                    update: E,
                    getStart: x,
                    getInitialStart: function() {
                        return h
                    },
                    getPlayStart: w,
                    getStop: k,
                    isLive: _,
                    isVod: function() {
                        return c === s.VOD || c === s.VOD_SHIFTED
                    },
                    getDvrWindow: O,
                    getInitialDvrWindow: function() {
                        return f
                    },
                    getMode: function() {
                        return c
                    },
                    isEnabled: T,
                    generateUrl: function(t) {
                        if (b.disableUrlModification)
                            return t;
                        var e = y ? 1 : 1e3
                            , n = (y ? 0 : S()) * e
                            , r = x() * e - n
                            , i = k() * e - n
                            , a = w() * e - n;
                        return t.endsWith("&") && (t = t.slice(0, -1)),
                        _() && r > 0 && f <= 0 && (t = Object(o.d)(t, b.startTime, r)),
                        f > 0 && (t = Object(o.d)(t, b.dvr, 1e3 * f)),
                        c !== s.VOD && c !== s.VOD_SHIFTED || (t = Object(o.d)(t, b.startTime, r),
                            t = Object(o.d)(t, b.stopTime, i)),
                        c !== s.LIVE_DELAYED || f || (t = Object(o.d)(t, b.startTime, a)),
                            t
                    },
                    setDvrWindow: function(t) {
                        T() && (l = !0,
                            f = t)
                    },
                    getBaseTimeStamp: S,
                    getAvailabilityStartTime: function() {
                        return m
                    },
                    setAvailabilityStartTime: function(t) {
                        m = t
                    },
                    setMode: function(t) {
                        c = t
                    },
                    reset: function() {
                        c === s.LIVE_DELAYED && (c = s.LIVE),
                        c === s.VOD_SHIFTED && (c = s.VOD)
                    },
                    isVodEnded: function(t) {
                        return t > p
                    },
                    getLiveNowUTC: A,
                    getHeadTime: function() {
                        return A
                    },
                    setLive: function() {
                        c = s.LIVE
                    },
                    setPlay: function(t) {
                        g = t
                    }
                }
        }
    }
    , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return D
            }
        )),
            n.d(e, "b", (function() {
                    return A
                }
            )),
            n.d(e, "c", (function() {
                    return P
                }
            )),
            n.d(e, "d", (function() {
                    return C
                }
            )),
            n.d(e, "e", (function() {
                    return O
                }
            ));
        var r = n(7)
            , i = n(16)
            , a = n(1)
            , o = n(9)
            , s = n(0)
            , u = n(3)
            , c = n(6)
            , l = n(8)
            , d = n(5)
            , f = n(4)
            , h = n(26)
            , p = n(18)
            , g = n(11)
            , m = n(14)
            , v = n(17)
            , y = n(13)
            , b = n(12)
            , E = n(10)
            , _ = n(22)
            , T = ["timeupdate", "progress", "seeking", "play", "playing", "ended", "waiting", "pause", "seeked", "loadedmetadata", "loadeddata", "loadstart", "stalled", "error", "canplay", "ratechange", "volumechange"];
        function S(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                , n = this
                , r = t || document.createElement("video")
                , i = [];
            r.setAttribute("width", "100%"),
                r.setAttribute("height", "100%"),
            e.get(a.Lb) && r.setAttribute("autoplay", "autoplay"),
            e.get(a.q) && r.setAttribute(a.q.toLowerCase(), ""),
                r.setAttribute("crossorigin", "anonymous");
            var o = e.get(a.Mb);
            function c(t) {
                r.currentTime = t
            }
            function d() {
                n.off(),
                    f()
            }
            function f() {
                n.off(),
                    i.forEach((function(t) {
                            r.removeEventListener(t.event, t.fn)
                        }
                    ))
            }
            function h() {
                try {
                    r.load()
                } catch (t) {}
            }
            function p() {
                return r.paused
            }
            function m() {
                return r.volume
            }
            function v(t) {
                r.volume = t
            }
            function y(t) {
                r.muted = t
            }
            function b() {
                return r.muted
            }
            function E() {
                return r.src
            }
            function _(t) {
                r.src = t
            }
            function S() {
                r.removeAttribute("src")
            }
            function k() {
                try {
                    r.pause()
                } catch (t) {}
            }
            function A() {
                return D.apply(this, arguments)
            }
            function D() {
                return (D = Object(u.a)(u.b.mark((function t() {
                        var e, i, a, o, c, l;
                        return u.b.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                        case 0:
                                            return e = function() {
                                                var t;
                                                return null === (t = r.play()) || void 0 === t ? void 0 : t.catch((function(t) {
                                                        return t
                                                    }
                                                ))
                                            }
                                                ,
                                                i = function() {
                                                    return n.trigger(s.wb)
                                                }
                                                ,
                                                a = 3,
                                                t.next = 5,
                                                e();
                                        case 5:
                                            if (o = t.sent) {
                                                t.next = 8;
                                                break
                                            }
                                            return t.abrupt("return", i());
                                        case 8:
                                            if ("AbortError" !== o.name) {
                                                t.next = 19;
                                                break
                                            }
                                            c = 0;
                                        case 10:
                                            if (!(c < a)) {
                                                t.next = 19;
                                                break
                                            }
                                            return t.next = 13,
                                                e();
                                        case 13:
                                            if (o = t.sent,
                                            "AbortError" === (null === (l = o) || void 0 === l ? void 0 : l.name)) {
                                                t.next = 16;
                                                break
                                            }
                                            return t.abrupt("break", 19);
                                        case 16:
                                            c++,
                                                t.next = 10;
                                            break;
                                        case 19:
                                            if (o) {
                                                t.next = 21;
                                                break
                                            }
                                            return t.abrupt("return", i());
                                        case 21:
                                            n.trigger(s.vb, o);
                                        case 22:
                                        case "end":
                                            return t.stop()
                                    }
                            }
                        ), t)
                    }
                )))).apply(this, arguments)
            }
            function x() {
                return r.duration
            }
            function C() {
                return r.offsetWidth
            }
            function P() {
                return r.offsetHeight
            }
            function L() {
                return Array.from(r.audioTracks || [])
            }
            function R() {
                return r.textTracks
            }
            function j(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                    , n = Object(l.a)(r.textTracks).some((function(t) {
                        return t.language || t.label
                    }
                ));
                !e && n || t.forEach((function(t) {
                        var e = r.addTextTrack("subtitles", t.language, t.language);
                        e.customCreated = !0,
                        t.trackId && (e.trackId = t.trackId)
                    }
                ))
            }
            function I() {
                f(),
                    T.forEach((function(t) {
                            var e = {
                                fn: function(e) {
                                    n.trigger.call(n, t, e)
                                },
                                name: t
                            };
                            r.addEventListener(e.name, e.fn),
                                i.push(e)
                        }
                    ));
                var t = {
                    fn: function(t) {
                        var e = t.track;
                        return n.trigger(s.xb, e, R())
                    },
                    name: "addtrack"
                };
                R().addEventListener("addtrack", t.fn),
                    i.push(t)
            }
            function M(t) {
                r.playbackRate = t
            }
            function F() {
                return r.playbackRate
            }
            return o && r.setAttribute("poster", o),
            g.a.isMobile() && r.setAttribute("autoplay", "autoplay"),
            e.get(a.Nb) && r.removeAttribute("controls"),
                I(),
                {
                    on: this.on.bind(this),
                    once: this.once.bind(this),
                    off: d,
                    seek: c,
                    load: h,
                    getVolume: m,
                    setVolume: v,
                    setMuted: y,
                    getSource: E,
                    setSource: _,
                    removeSource: S,
                    pause: k,
                    play: A,
                    getDuration: x,
                    getNativeAudioTracks: L,
                    getNativeTextTracks: R,
                    addNativeTextTracks: j,
                    getWidth: C,
                    getHeight: P,
                    getPlaybackRate: F,
                    setPlaybackRate: M,
                    isPaused: p,
                    isMuted: b,
                    getVideo: function() {
                        return r
                    },
                    get height() {
                        return r.offsetHeight
                    },
                    getCurrentTime: function() {
                        return r.currentTime
                    },
                    getBufferLengthFromTime: function(t) {
                        return O(r, t)
                    },
                    getBufferLength: function() {
                        return O(r, r.currentTime)
                    },
                    getBuffered: function() {
                        return r.buffered
                    },
                    getPlayed: function() {
                        return r.played
                    },
                    getBufferRange: function(t, e) {
                        return w(r, t, e)
                    },
                    getReadyState: function() {
                        return r.readyState
                    },
                    getDecodedFrameCount: function() {
                        return HTMLVideoElement.prototype.getVideoPlaybackQuality ? r.getVideoPlaybackQuality().totalVideoFrames : "webkitDecodedFrameCount"in r ? r.webkitDecodedFrameCount : -1
                    },
                    getDroppedFrameCount: function() {
                        return HTMLVideoElement.prototype.getVideoPlaybackQuality ? r.getVideoPlaybackQuality().droppedVideoFrames : "webkitDroppedFrameCount"in r ? r.webkitDroppedFrameCount : -1
                    },
                    hasBuffered: function() {
                        return !!r.buffered.length
                    },
                    hasPlayed: function() {
                        return !!r.played.length
                    },
                    isSeeking: function() {
                        return r.seeking
                    }
                }
        }
        function O(t, e) {
            var n, r, i = 0;
            if (t.buffered.length)
                for (var a = 0; a < t.buffered.length; a++)
                    n = t.buffered.start(a),
                        r = t.buffered.end(a),
                    n <= e && r >= e && (i = r - e);
            return i
        }
        function w(t, e) {
            for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE, r = t.buffered || [], i = 0; i < r.length; i++) {
                var a = r.start(i)
                    , o = r.end(i);
                if (a >= e && a < n)
                    return {
                        start: a,
                        end: o
                    }
            }
            return null
        }
        function k() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                    !0
            } catch (t) {
                return !1
            }
        }
        S.prototype = Object.create(m.a.prototype);
        var A = function(t) {
            Object(f.a)(u, t);
            var e, n = (e = u,
                    function() {
                        var t, n = Object(f.b)(e);
                        if (k()) {
                            var r = Object(f.b)(this).constructor;
                            t = Reflect.construct(n, arguments, r)
                        } else
                            t = n.apply(this, arguments);
                        return Object(f.c)(this, t)
                    }
            );
            function u(t, e) {
                var r;
                return Object(d.a)(this, u),
                    (r = n.call(this)).player = t,
                    r.options = t.options,
                    r.timeShift = r.player.timeShift,
                    r.isStarted = !1,
                    r.isPaused = !1,
                    r.url = null,
                    r.baseUrl = null,
                    r.lastEvent = null,
                    r.mediaItem = void 0,
                    r.timer = new v.a(350,(function() {
                            return r.monitor()
                        }
                    )),
                    r.currentRenderer = Object(f.d)(r),
                    r.protectionManger = void 0,
                    r.initialLatency = void 0,
                    r.liveLatencyBeforeAppHiding = void 0,
                    r.volumeLocalStorageKey = r.options.get(a.w),
                    r.volumeMutedLocalStorageKey = r.options.get(a.Ob),
                    r.mediaElement = new S(e || document.createElement("video"),r.options),
                    t.addComponent(r.mediaElement, o.d),
                    t.on(s.w, (function(t) {
                            return r.onVisibilityChange(t)
                        }
                    )),
                    r.updateVolume(),
                    r
            }
            return Object(d.b)(u, [{
                key: "onVisibilityChange",
                value: function(t) {
                    if (this.isLive()) {
                        var e = this.player.getLiveLatency() - (this.liveLatencyBeforeAppHiding || 0);
                        t && e > 20 && this.player.seekToHead(),
                            this.liveLatencyBeforeAppHiding = t ? void 0 : this.player.getLiveLatency()
                    }
                }
            }, {
                key: "monitor",
                value: function() {
                    this.guardLivePlaybackRate(),
                        this.trigger(s.yb, this.getCurrentTime(), this.getDuration())
                }
            }, {
                key: "guardLivePlaybackRate",
                value: function() {
                    (this.isLive() || 1 !== this.getPlaybackRate()) && (this.player.getLiveLatency() < 5 || this.getCurrentTime() < 0) && this.setPlaybackRate(1)
                }
            }, {
                key: "setMediaItem",
                value: function(t) {
                    this.mediaItem = t,
                        this.url = t.url
                }
            }, {
                key: "updateVolume",
                value: function() {
                    var t, e, n = 0, r = !1;
                    this.options.get(a.Pb) && (n = parseFloat(null === (t = localStorage) || void 0 === t ? void 0 : t.getItem(this.options.get(a.w))),
                        r = "true" === (null === (e = localStorage) || void 0 === e ? void 0 : e.getItem(this.options.get(a.Ob))));
                    var i = this.options.get(a.Qb)
                        , o = this.options.get(a.Rb)
                        , s = void 0 !== i ? i : n || 50;
                    this.setVolume(s);
                    var u = void 0 !== o ? o : r;
                    u && this.setMuted(u)
                }
            }, {
                key: "updateLocalStorage",
                value: function() {
                    var t, e;
                    this.options.get(a.Pb) && (null === (t = localStorage) || void 0 === t || t.setItem(this.options.get(a.w), this.getVolume()),
                    null === (e = localStorage) || void 0 === e || e.setItem(this.options.get(a.Ob), this.isMuted()))
                }
            }, {
                key: "getRendererElm",
                value: function() {
                    return this.mediaElement.getVideo()
                }
            }, {
                key: "getVideo",
                value: function() {
                    return this.mediaElement.getVideo()
                }
            }, {
                key: "isMuted",
                value: function() {
                    return this.mediaElement.isMuted()
                }
            }, {
                key: "setMuted",
                value: function(t) {
                    this.mediaElement.setMuted(t),
                    t || 0 !== this.getVolume() || this.setVolume(50)
                }
            }, {
                key: "getVolume",
                value: function() {
                    return 100 * this.mediaElement.getVolume()
                }
            }, {
                key: "getCurrentProfile",
                value: function() {
                    return 0
                }
            }, {
                key: "setVolume",
                value: function(t) {
                    t > 100 && (t = 100),
                    t < 0 && (t = 0),
                        this.mediaElement.setVolume(t / 100),
                    0 === t && this.setMuted(!0)
                }
            }, {
                key: "seek",
                value: function(t) {
                    this.seekTo(this.getDuration() / 100 * t)
                }
            }, {
                key: "seekTo",
                value: function(t) {
                    this.triggerOnSeekStartEvents(),
                        this.mediaElement.seek(t)
                }
            }, {
                key: "seekToHead",
                value: function() {
                    var t = Math.min(this.getDuration(), Number.MAX_SAFE_INTEGER);
                    this.seekTo(t - (this.isLive() ? this.getLiveDelay() : 0))
                }
            }, {
                key: "getDroppedFrameCount",
                value: function() {
                    return this.mediaElement.getDroppedFrameCount()
                }
            }, {
                key: "getDecodedFrameCount",
                value: function() {
                    return this.mediaElement.getDecodedFrameCount()
                }
            }, {
                key: "getPlayed",
                value: function() {
                    return this.mediaElement.getPlayed()
                }
            }, {
                key: "getBuffered",
                value: function() {
                    return this.mediaElement.getBuffered()
                }
            }, {
                key: "getDownloadSpeed",
                value: function() {
                    return -1
                }
            }, {
                key: "getPlaybackRate",
                value: function() {
                    return this.mediaElement.getPlaybackRate()
                }
            }, {
                key: "setPlaybackRate",
                value: function(t) {
                    return this.mediaElement.setPlaybackRate(t)
                }
            }, {
                key: "getLiveDelay",
                value: function() {
                    return 0
                }
            }, {
                key: "getBufferLength",
                value: function() {
                    return this.mediaElement.getBufferLength()
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.mediaElement.getCurrentTime()
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.mediaElement.getDuration()
                }
            }, {
                key: "isLive",
                value: function() {
                    return this.options.get(a.Sb)
                }
            }, {
                key: "registerEvents",
                value: function() {
                    var t = this;
                    T.forEach((function(e) {
                            var n = "on".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));
                            "function" == typeof t[n] && t.mediaElement.on(e, t[n].bind(t))
                        }
                    )),
                        this.mediaElement.on(s.vb, (function(e) {
                                return t.player.trigger(s.vb, e)
                            }
                        )),
                        this.mediaElement.on(s.f, (function(e) {
                                return t.player.trigger(s.f, e)
                            }
                        )),
                        this.mediaElement.on(s.wb, (function() {
                                return t.player.trigger(s.wb)
                            }
                        )),
                        this.mediaElement.on(s.xb, (function(e, n) {
                                return t.player.trigger(s.xb, e, n)
                            }
                        ))
                }
            }, {
                key: "unRegisterEvents",
                value: function() {
                    this.mediaElement.off()
                }
            }, {
                key: "setSource",
                value: function(t) {
                    this.playSource(t)
                }
            }, {
                key: "playSource",
                value: function(t) {
                    this.mediaElement.setSource(t),
                        this.mediaElement.play()
                }
            }, {
                key: "restart",
                value: function() {
                    this.isStarted = !1,
                        this.play()
                }
            }, {
                key: "play",
                value: function() {
                    this.isPaused = !1,
                        this.isStarted ? this.mediaElement.play() : this.setSource(this.mediaItem.url),
                        this.timer.start(),
                        this.isStarted = !0
                }
            }, {
                key: "pause",
                value: function() {
                    this.isPaused = !0,
                        this.mediaElement.pause()
                }
            }, {
                key: "stop",
                value: function() {
                    this.mediaElement.pause(),
                        this.player.trigger(s.t, this.mediaElement.getCurrentTime()),
                        this.destroy()
                }
            }, {
                key: "guardLivePosition",
                value: function() {
                    this.isLive() && !this.timeShift.isEnabled() && this.getCurrentTime() > 0 && this.seekToHead()
                }
            }, {
                key: "guardTimeShiftPosition",
                value: function() {
                    this.timeShift.isEnabled() && this.getCurrentTime() < 0 && this.player.seekTo(this.options.get(a.h))
                }
            }, {
                key: "triggerOnSeekStartEvents",
                value: function() {
                    var t = this.getCurrentTime();
                    this.player.trigger(s.zb, t),
                    this.mediaElement.isPaused() && this.player.trigger(s.Ab, t)
                }
            }, {
                key: "destroy",
                value: function() {
                    var t;
                    null === (t = this.timer) || void 0 === t || t.stop(),
                        this.isStarted = !1,
                        this.isPaused = !1,
                        this.unRegisterEvents(),
                        this.mediaElement.pause(),
                        this.mediaElement.off(),
                    this.mediaElement.getSource() && this.mediaElement.removeSource(),
                        this.mediaElement.load(),
                        this.player.removeComponent(this.mediaElement)
                }
            }, {
                key: "onPlay",
                value: function() {
                    this.player.trigger(s.Bb, this.getCurrentTime()),
                    this.options.get(a.Tb) && this.guardLivePosition()
                }
            }, {
                key: "onPlaying",
                value: function() {
                    this.lastEvent === s.Cb && this.player.trigger(s.Db, this.getCurrentTime()),
                    this.lastEvent !== s.jb && (this.lastEvent = s.jb,
                        this.player.trigger(s.jb, this.getCurrentTime())),
                        this.guardTimeShiftPosition()
                }
            }, {
                key: "onTimeupdate",
                value: function() {
                    this.isLive() && !this.initialLatency && Math.floor(this.getCurrentTime()) > 0 && this.timeShift.getMode() !== _.a.LIVE_DELAYED && (this.initialLatency = this.player.getLiveLatency())
                }
            }, {
                key: "onPause",
                value: function() {
                    this.lastEvent = s.ub,
                        this.player.trigger(s.ub, this.getCurrentTime())
                }
            }, {
                key: "onWaiting",
                value: function() {
                    this.lastEvent = s.x,
                        this.player.trigger(s.x, this.getCurrentTime())
                }
            }, {
                key: "onEnded",
                value: function() {
                    this.lastEvent = s.nb,
                        this.player.trigger(s.nb, this.getCurrentTime())
                }
            }, {
                key: "onCanplay",
                value: function() {
                    this.lastEvent !== s.Db && (this.lastEvent = s.Db,
                        this.player.trigger(s.Db, this.getCurrentTime())),
                        this.player.trigger(s.d)
                }
            }, {
                key: "onSeeked",
                value: function() {
                    this.player.trigger(s.Cb, this.getCurrentTime()),
                    this.mediaElement.isPaused() || this.lastEvent === s.jb || this.player.trigger(s.jb, this.getCurrentTime()),
                        this.lastEvent = s.Cb
                }
            }, {
                key: "onRatechange",
                value: function() {
                    this.player.trigger(s.c, this.getPlaybackRate())
                }
            }, {
                key: "onVolumechange",
                value: function() {
                    this.player.trigger(s.g, this.getVolume(), this.isMuted()),
                        this.updateLocalStorage()
                }
            }, {
                key: "onError",
                value: function(t) {
                    var e = this.mediaElement.getVideo().error
                        , n = r.a.PLAYBACK_ERROR
                        , a = r.a.PLAYBACK_ERROR
                        , o = i.a[r.a.PLAYBACK_ERROR];
                    if (e)
                        switch (n = e.message,
                            e.code) {
                            case 1:
                                o = i.a[r.a.MEDIA_ERR_ABORTED],
                                    a = r.a.MEDIA_ERR_ABORTED;
                                break;
                            case 2:
                                o = i.a[r.a.MEDIA_ERR_NETWORK],
                                    a = r.a.MEDIA_ERR_NETWORK;
                                break;
                            case 3:
                                o = i.a[r.a.MEDIA_ERR_DECODE],
                                    a = r.a.MEDIA_ERR_DECODE;
                                break;
                            case 4:
                                o = i.a[r.a.MEDIA_ERR_SRC_NOT_SUPPORTED],
                                    a = r.a.MEDIA_ERR_SRC_NOT_SUPPORTED
                        }
                    this.lastEvent = s.f,
                        this.player.trigger(s.f, {
                            code: o,
                            type: a,
                            message: n,
                            renderer: this.mediaType,
                            originalEvent: e || t
                        })
                }
            }, {
                key: "mediaType",
                get: function() {
                    return this.rendererType.toUpperCase()
                }
            }]),
                u
        }(m.a);
        function D(t) {
            var e = t.accessibility
                , n = t.codecs
                , r = t.enabled
                , i = t.id
                , a = t.kind
                , o = t.label
                , s = t.lang
                , u = t.language
                , c = t.mimeType
                , l = t.role;
            this.accessibility = e,
                this.codecs = n,
                this.enabled = r,
                this.id = i,
                this.kind = a,
                this.label = o,
                this.lang = s || u,
                this.mimeType = c,
                this.role = l
        }
        function x() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                    !0
            } catch (t) {
                return !1
            }
        }
        var C = function(t) {
            Object(f.a)(i, t);
            var e, n, r = (e = i,
                    function() {
                        var t, n = Object(f.b)(e);
                        if (x()) {
                            var r = Object(f.b)(this).constructor;
                            t = Reflect.construct(n, arguments, r)
                        } else
                            t = n.apply(this, arguments);
                        return Object(f.c)(this, t)
                    }
            );
            function i(t, e) {
                var n;
                return Object(d.a)(this, i),
                    (n = r.call(this, t, e)).rendererType = i.id,
                    n.utcTime = new b.a(n.player),
                    n.utcTimeStamp = 0,
                    n.liveStart = 0,
                    n.timeShiftStart = 0,
                    n
            }
            return Object(d.b)(i, [{
                key: "setSource",
                value: (n = Object(u.a)(u.b.mark((function t(e) {
                            var n, r, i, o, l, d, f, h, p, g, m, v, b;
                            return u.b.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                            case 0:
                                                if (n = this.options.get(a.s),
                                                    r = this.options.get(a.f),
                                                    i = this.player.beforePlayTaskQueue,
                                                    this.registerEvents(),
                                                    !this.timeShift.isEnabled()) {
                                                    t.next = 8;
                                                    break
                                                }
                                                return t.next = 7,
                                                    this.utcTime.sync();
                                            case 7:
                                                this.utcTimeStamp = t.sent;
                                            case 8:
                                                if (null === this.baseUrl && (this.baseUrl = e),
                                                    this.player.trigger(s.p, e),
                                                    !i.length) {
                                                    t.next = 14;
                                                    break
                                                }
                                                return o = i.map((function(t) {
                                                        return t()
                                                    }
                                                )),
                                                    t.next = 14,
                                                    Promise.all(o);
                                            case 14:
                                                if (this.timeShift.isEnabled() && (e = this.timeShift.generateUrl(e, !0)),
                                                    !n) {
                                                    t.next = 19;
                                                    break
                                                }
                                                return t.next = 18,
                                                    E.d.head(e).then((function(t) {
                                                            return t.responseUrl
                                                        }
                                                    )).catch((function() {
                                                            return e
                                                        }
                                                    ));
                                            case 18:
                                                e = t.sent;
                                            case 19:
                                                if (l = this.mediaItem.mediaType,
                                                !r || "HLS" !== l) {
                                                    t.next = 35;
                                                    break
                                                }
                                                return t.prev = 21,
                                                    t.next = 24,
                                                    E.d.get(e).then((function(t) {
                                                            return t.data
                                                        }
                                                    ));
                                            case 24:
                                                return d = t.sent,
                                                    f = d.match(/(http|https).*/) || [],
                                                    h = Object(c.a)(f, 1),
                                                    p = h[0],
                                                    t.next = 28,
                                                    E.d.get(p).then((function(t) {
                                                            return t.data
                                                        }
                                                    ));
                                            case 28:
                                                g = t.sent,
                                                    m = g.match(/#EXT-X-PROGRAM-DATE-TIME:(.*)/) || [],
                                                    (v = Object(c.a)(m, 2))[0],
                                                    b = v[1],
                                                    this.liveStart = y.a.parseDateTime(b),
                                                    t.next = 35;
                                                break;
                                            case 33:
                                                t.prev = 33,
                                                    t.t0 = t.catch(21);
                                            case 35:
                                                !this.timeShift.params && this.isLive() && this.player.trigger(s.pb),
                                                    this.playSource(e);
                                            case 37:
                                            case "end":
                                                return t.stop()
                                        }
                                }
                            ), t, this, [[21, 33]])
                        }
                    ))),
                        function(t) {
                            return n.apply(this, arguments)
                        }
                )
            }, {
                key: "seek",
                value: function(t) {
                    var e = this.getDuration() / 100 * t;
                    this.seekTo(e)
                }
            }, {
                key: "seekTo",
                value: function(t) {
                    this.triggerOnSeekStartEvents(),
                    this.timeShift.getDvrWindow() > 0 && (t += this.timeShift.getLiveNowUTC() - this.utcTimeStamp + this.getCurrentTimeOffset()),
                        this.mediaElement.seek(t)
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    var t = this.mediaElement.getCurrentTime();
                    if (this.isLive() && !this.timeShift.isEnabled())
                        return t + this.liveStart;
                    if (this.timeShift.getDvrWindow() > 0) {
                        if (0 === Math.floor(t))
                            return 0;
                        t -= this.timeShift.getLiveNowUTC() - this.utcTimeStamp,
                            t -= this.getCurrentTimeOffset()
                    }
                    return t
                }
            }, {
                key: "guardTimeShiftPosition",
                value: function() {
                    this.timeShift.isEnabled() && this.getCurrentTime() < 0 && this.player.seekTo(this.options.get(a.h) + this.getCurrentTimeOffset())
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.timeShift.getStart() >= 0 && this.timeShift.getStop() < 0 ? this.timeShift.getLiveNowUTC() - this.timeShift.getStart() : this.timeShift.getStart() >= 0 && this.timeShift.getStop() >= 0 ? this.timeShift.getStop() - this.timeShift.getStart() : this.mediaElement.getDuration()
                }
            }, {
                key: "getCurrentTimeOffset",
                value: function() {
                    return this.timeShift.getInitialDvrWindow() - this.timeShift.getDvrWindow()
                }
            }, {
                key: "isLive",
                value: function() {
                    return Object(h.a)(Object(f.b)(i.prototype), "isLive", this).call(this) || this.getDuration() === 1 / 0 || this.timeShift.isLive()
                }
            }, {
                key: "onLoadedmetadata",
                value: function() {
                    var t, e = this;
                    this.player.trigger(s.tb, this.isLive() ? -1 : this.getDuration()),
                        this.player.trigger(s.sb, {
                            duration: this.getDuration()
                        }),
                    this.isLive() && this.player.trigger(s.pb),
                    this.timeShift.isEnabled() && this.timeShift.getDvrWindow() >= 0 && this.timeShift.getPlayStart() >= 0 && (t = this.timeShift.getPlayStart() - this.timeShift.getStart()),
                    this.options.get(a.Gb) && (t = this.options.get(a.Gb),
                        this.options.set(a.Gb, null)),
                    t && this.mediaElement.once(s.jb, (function() {
                            e.seekTo(t)
                        }
                    ))
                }
            }, {
                key: "onTimeupdate",
                value: function() {
                    this.isLive() && !this.liveStart && Math.floor(this.getCurrentTime()) > 0 && this.timeShift.getMode() !== _.a.LIVE_DELAYED && (this.liveStart = this.timeShift.getLiveNowUTC() - (this.mediaElement.getCurrentTime() + 6)),
                        Object(h.a)(Object(f.b)(i.prototype), "onTimeupdate", this).call(this)
                }
            }, {
                key: "getProfile",
                value: function() {
                    return ""
                }
            }, {
                key: "onLoadeddata",
                value: function() {
                    this.player.trigger(s.h);
                    var t = this.getAudioTracks();
                    if (t.length) {
                        this.player.trigger(s.rb, t);
                        var e = this.getActiveAudioTrack();
                        if (this.defaultAudioLanguage = this.options.get(a.Db),
                            this.defaultAudioLanguage) {
                            var n = this.getAudioTrackByLabel(this.defaultAudioLanguage);
                            n && e !== n ? this.switchAudioTrack(n) : this.player.trigger(s.b, e)
                        } else
                            this.player.trigger(s.b, e)
                    }
                }
            }, {
                key: "play",
                value: function() {
                    if (this.timeShift.isEnabled() && this.getCurrentTime() < 0)
                        return this.mediaElement.seek(0),
                            void this.player.restart();
                    Object(h.a)(Object(f.b)(i.prototype), "play", this).call(this)
                }
            }, {
                key: "switchAudioTrack",
                value: function(t) {
                    var e = "object" === Object(p.b)(t) ? t.id : t
                        , n = this.mediaElement.getNativeAudioTracks()
                        , r = n.find((function(t) {
                            var n = t.id
                                , r = t.language;
                            return n === e || r === e
                        }
                    ));
                    r && (n.forEach((function(t) {
                            t.enabled = t === r
                        }
                    )),
                        this.player.trigger(s.b, this.createAudioTrackDTO(r)))
                }
            }, {
                key: "getAudioTrackByLabel",
                value: function(t) {
                    return this.getAudioTracks().find((function(e) {
                            return e.label === t
                        }
                    ))
                }
            }, {
                key: "getActiveAudioTrack",
                value: function() {
                    return this.getAudioTracks().find((function(t) {
                            return t.enabled
                        }
                    ))
                }
            }, {
                key: "getCurrentAudioTrack",
                value: function() {
                    return this.getActiveAudioTrack()
                }
            }, {
                key: "getAudioTracks",
                value: function() {
                    var t = this;
                    return this.mediaElement.getNativeAudioTracks().map((function(e) {
                            return t.createAudioTrackDTO(e)
                        }
                    ))
                }
            }, {
                key: "getTextTracks",
                value: function() {
                    return Object(l.a)(this.mediaElement.getNativeTextTracks()).filter((function(t) {
                            var e = t.id
                                , n = t.language
                                , r = t.label;
                            return e || n || r
                        }
                    ))
                }
            }, {
                key: "createAudioTrackDTO",
                value: function(t) {
                    return new D(t)
                }
            }], [{
                key: "canPlayType",
                value: function(t) {
                    return document.createElement("video").canPlayType(t)
                }
            }]),
                i
        }(A);
        C.id = "html5",
            C.priority = 200,
            C.mediaTypes = {
                MP4: "video/mp4",
                HLS: "application/x-mpegURL",
                AAC: "audio/mp4",
                MP3: "audio/mpeg",
                MOV: "video/mp4; codecs='avc1.42E01E, mp4a.40.2'",
                WEBM: "video/webm",
                OGG: "video/ogg"
            };
        var P = {
            ID: "hlsjs",
            OPTION_NAME: "hlsjs",
            PRIORITY: 100,
            SUPPORTED_MEDIA_TYPES: {
                HLS: "application/x-mpegURL"
            }
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
    , function(t, e, n) {
        var r = n(40);
        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                "value"in i && (i.writable = !0),
                    Object.defineProperty(t, r(i.key), i)
            }
        }
        t.exports = function(t, e, n) {
            return e && i(t.prototype, e),
            n && i(t, n),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
    , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return o
            }
        ));
        var r = n(15)
            , i = n(4);
        var a = function(t, e) {
            for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Object(i.e)(t)); )
                ;
            return t
        }
            , o = Object(r.a)((function(t) {
                function e(n, r, i) {
                    return "undefined" != typeof Reflect && Reflect.get ? t.exports = e = Reflect.get : t.exports = e = function(t, e, n) {
                        var r = a(t, e);
                        if (r) {
                            var i = Object.getOwnPropertyDescriptor(r, e);
                            return i.get ? i.get.call(n) : i.value
                        }
                    }
                        ,
                        e(n, r, i || n)
                }
                t.exports = e
            }
        ))
    }
    , , function(t, e) {
        function n(e) {
            return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
                ,
                t.exports.__esModule = !0,
                t.exports.default = t.exports,
                n(e)
        }
        t.exports = n,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
    , function(t, e) {
        function n(e) {
            return t.exports = n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                t.exports.__esModule = !0,
                t.exports.default = t.exports,
                n(e)
        }
        t.exports = n,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
    , function(t, e, n) {
        /*! codem-isoboxer v0.3.7 https://github.com/madebyhiro/codem-isoboxer/blob/master/LICENSE.txt */
        var r = {
            parseBuffer: function(t) {
                return new i(t).parse()
            },
            addBoxProcessor: function(t, e) {
                "string" == typeof t && "function" == typeof e && (a.prototype._boxProcessors[t] = e)
            },
            createFile: function() {
                return new i
            },
            createBox: function(t, e, n) {
                var r = a.create(t);
                return e && e.append(r, n),
                    r
            },
            createFullBox: function(t, e, n) {
                var i = r.createBox(t, e, n);
                return i.version = 0,
                    i.flags = 0,
                    i
            },
            Utils: {}
        };
        r.Utils.dataViewToString = function(t, e) {
            var n = e || "utf-8";
            if ("undefined" != typeof TextDecoder)
                return new TextDecoder(n).decode(t);
            var r = []
                , i = 0;
            if ("utf-8" === n)
                for (; i < t.byteLength; ) {
                    var a = t.getUint8(i++);
                    a < 128 || (a < 224 ? (a = (31 & a) << 6,
                        a |= 63 & t.getUint8(i++)) : a < 240 ? (a = (15 & a) << 12,
                        a |= (63 & t.getUint8(i++)) << 6,
                        a |= 63 & t.getUint8(i++)) : (a = (7 & a) << 18,
                        a |= (63 & t.getUint8(i++)) << 12,
                        a |= (63 & t.getUint8(i++)) << 6,
                        a |= 63 & t.getUint8(i++))),
                        r.push(String.fromCharCode(a))
                }
            else
                for (; i < t.byteLength; )
                    r.push(String.fromCharCode(t.getUint8(i++)));
            return r.join("")
        }
            ,
            r.Utils.utf8ToByteArray = function(t) {
                var e, n;
                if ("undefined" != typeof TextEncoder)
                    e = (new TextEncoder).encode(t);
                else
                    for (e = [],
                             n = 0; n < t.length; ++n) {
                        var r = t.charCodeAt(n);
                        r < 128 ? e.push(r) : r < 2048 ? (e.push(192 | r >> 6),
                            e.push(128 | 63 & r)) : r < 65536 ? (e.push(224 | r >> 12),
                            e.push(128 | 63 & r >> 6),
                            e.push(128 | 63 & r)) : (e.push(240 | r >> 18),
                            e.push(128 | 63 & r >> 12),
                            e.push(128 | 63 & r >> 6),
                            e.push(128 | 63 & r))
                    }
                return e
            }
            ,
            r.Utils.appendBox = function(t, e, n) {
                if (e._offset = t._cursor.offset,
                    e._root = t._root ? t._root : t,
                    e._raw = t._raw,
                    e._parent = t,
                -1 !== n)
                    if (null != n) {
                        var r, i = -1;
                        if ("number" == typeof n)
                            i = n;
                        else {
                            if ("string" == typeof n)
                                r = n;
                            else {
                                if ("object" != typeof n || !n.type)
                                    return void t.boxes.push(e);
                                r = n.type
                            }
                            for (var a = 0; a < t.boxes.length; a++)
                                if (r === t.boxes[a].type) {
                                    i = a + 1;
                                    break
                                }
                        }
                        t.boxes.splice(i, 0, e)
                    } else
                        t.boxes.push(e)
            }
            ,
            e.parseBuffer = r.parseBuffer,
            e.addBoxProcessor = r.addBoxProcessor,
            e.createFile = r.createFile,
            e.createBox = r.createBox,
            e.createFullBox = r.createFullBox,
            e.Utils = r.Utils,
            r.Cursor = function(t) {
                this.offset = void 0 === t ? 0 : t
            }
        ;
        var i = function(t) {
            this._cursor = new r.Cursor,
                this.boxes = [],
            t && (this._raw = new DataView(t))
        };
        i.prototype.fetch = function(t) {
            var e = this.fetchAll(t, !0);
            return e.length ? e[0] : null
        }
            ,
            i.prototype.fetchAll = function(t, e) {
                var n = [];
                return i._sweep.call(this, t, n, e),
                    n
            }
            ,
            i.prototype.parse = function() {
                for (this._cursor.offset = 0,
                         this.boxes = []; this._cursor.offset < this._raw.byteLength; ) {
                    var t = a.parse(this);
                    if (void 0 === t.type)
                        break;
                    this.boxes.push(t)
                }
                return this
            }
            ,
            i._sweep = function(t, e, n) {
                for (var r in this.type && this.type == t && e.push(this),
                    this.boxes) {
                    if (e.length && n)
                        return;
                    i._sweep.call(this.boxes[r], t, e, n)
                }
            }
            ,
            i.prototype.write = function() {
                var t, e = 0;
                for (t = 0; t < this.boxes.length; t++)
                    e += this.boxes[t].getLength(!1);
                var n = new Uint8Array(e);
                for (this._rawo = new DataView(n.buffer),
                         this.bytes = n,
                         this._cursor.offset = 0,
                         t = 0; t < this.boxes.length; t++)
                    this.boxes[t].write();
                return n.buffer
            }
            ,
            i.prototype.append = function(t, e) {
                r.Utils.appendBox(this, t, e)
            }
        ;
        var a = function() {
            this._cursor = new r.Cursor
        };
        a.parse = function(t) {
            var e = new a;
            return e._offset = t._cursor.offset,
                e._root = t._root ? t._root : t,
                e._raw = t._raw,
                e._parent = t,
                e._parseBox(),
                t._cursor.offset = e._raw.byteOffset + e._raw.byteLength,
                e
        }
            ,
            a.create = function(t) {
                var e = new a;
                return e.type = t,
                    e.boxes = [],
                    e
            }
            ,
            a.prototype._boxContainers = ["dinf", "edts", "mdia", "meco", "mfra", "minf", "moof", "moov", "mvex", "stbl", "strk", "traf", "trak", "tref", "udta", "vttc", "sinf", "schi", "encv", "enca"],
            a.prototype._boxProcessors = {},
            a.prototype._procField = function(t, e, n) {
                this._parsing ? this[t] = this._readField(e, n) : this._writeField(e, n, this[t])
            }
            ,
            a.prototype._procFieldArray = function(t, e, n, r) {
                var i;
                if (this._parsing)
                    for (this[t] = [],
                             i = 0; i < e; i++)
                        this[t][i] = this._readField(n, r);
                else
                    for (i = 0; i < this[t].length; i++)
                        this._writeField(n, r, this[t][i])
            }
            ,
            a.prototype._procFullBox = function() {
                this._procField("version", "uint", 8),
                    this._procField("flags", "uint", 24)
            }
            ,
            a.prototype._procEntries = function(t, e, n) {
                var r;
                if (this._parsing)
                    for (this[t] = [],
                             r = 0; r < e; r++)
                        this[t].push({}),
                            n.call(this, this[t][r]);
                else
                    for (r = 0; r < e; r++)
                        n.call(this, this[t][r])
            }
            ,
            a.prototype._procSubEntries = function(t, e, n, r) {
                var i;
                if (this._parsing)
                    for (t[e] = [],
                             i = 0; i < n; i++)
                        t[e].push({}),
                            r.call(this, t[e][i]);
                else
                    for (i = 0; i < n; i++)
                        r.call(this, t[e][i])
            }
            ,
            a.prototype._procEntryField = function(t, e, n, r) {
                this._parsing ? t[e] = this._readField(n, r) : this._writeField(n, r, t[e])
            }
            ,
            a.prototype._procSubBoxes = function(t, e) {
                var n;
                if (this._parsing)
                    for (this[t] = [],
                             n = 0; n < e; n++)
                        this[t].push(a.parse(this));
                else
                    for (n = 0; n < e; n++)
                        this._rawo ? this[t][n].write() : this.size += this[t][n].getLength()
            }
            ,
            a.prototype._readField = function(t, e) {
                switch (t) {
                    case "uint":
                        return this._readUint(e);
                    case "int":
                        return this._readInt(e);
                    case "template":
                        return this._readTemplate(e);
                    case "string":
                        return -1 === e ? this._readTerminatedString() : this._readString(e);
                    case "data":
                        return this._readData(e);
                    case "utf8":
                        return this._readUTF8String();
                    default:
                        return -1
                }
            }
            ,
            a.prototype._readInt = function(t) {
                var e = null
                    , n = this._cursor.offset - this._raw.byteOffset;
                switch (t) {
                    case 8:
                        e = this._raw.getInt8(n);
                        break;
                    case 16:
                        e = this._raw.getInt16(n);
                        break;
                    case 32:
                        e = this._raw.getInt32(n);
                        break;
                    case 64:
                        var r = this._raw.getInt32(n)
                            , i = this._raw.getInt32(n + 4);
                        e = r * Math.pow(2, 32) + i
                }
                return this._cursor.offset += t >> 3,
                    e
            }
            ,
            a.prototype._readUint = function(t) {
                var e, n, r = null, i = this._cursor.offset - this._raw.byteOffset;
                switch (t) {
                    case 8:
                        r = this._raw.getUint8(i);
                        break;
                    case 16:
                        r = this._raw.getUint16(i);
                        break;
                    case 24:
                        r = ((e = this._raw.getUint16(i)) << 8) + (n = this._raw.getUint8(i + 2));
                        break;
                    case 32:
                        r = this._raw.getUint32(i);
                        break;
                    case 64:
                        e = this._raw.getUint32(i),
                            n = this._raw.getUint32(i + 4),
                            r = e * Math.pow(2, 32) + n
                }
                return this._cursor.offset += t >> 3,
                    r
            }
            ,
            a.prototype._readString = function(t) {
                for (var e = "", n = 0; n < t; n++) {
                    var r = this._readUint(8);
                    e += String.fromCharCode(r)
                }
                return e
            }
            ,
            a.prototype._readTemplate = function(t) {
                return this._readUint(t / 2) + this._readUint(t / 2) / Math.pow(2, t / 2)
            }
            ,
            a.prototype._readTerminatedString = function() {
                for (var t = ""; this._cursor.offset - this._offset < this._raw.byteLength; ) {
                    var e = this._readUint(8);
                    if (0 === e)
                        break;
                    t += String.fromCharCode(e)
                }
                return t
            }
            ,
            a.prototype._readData = function(t) {
                var e = t > 0 ? t : this._raw.byteLength - (this._cursor.offset - this._offset);
                if (e > 0) {
                    var n = new Uint8Array(this._raw.buffer,this._cursor.offset,e);
                    return this._cursor.offset += e,
                        n
                }
                return null
            }
            ,
            a.prototype._readUTF8String = function() {
                var t = this._raw.byteLength - (this._cursor.offset - this._offset)
                    , e = null;
                return t > 0 && (e = new DataView(this._raw.buffer,this._cursor.offset,t),
                    this._cursor.offset += t),
                    e ? r.Utils.dataViewToString(e) : e
            }
            ,
            a.prototype._parseBox = function() {
                if (this._parsing = !0,
                    this._cursor.offset = this._offset,
                this._offset + 8 > this._raw.buffer.byteLength)
                    this._root._incomplete = !0;
                else {
                    switch (this._procField("size", "uint", 32),
                        this._procField("type", "string", 4),
                    1 === this.size && this._procField("largesize", "uint", 64),
                    "uuid" === this.type && this._procFieldArray("usertype", 16, "uint", 8),
                        this.size) {
                        case 0:
                            this._raw = new DataView(this._raw.buffer,this._offset,this._raw.byteLength - this._cursor.offset + 8);
                            break;
                        case 1:
                            this._offset + this.size > this._raw.buffer.byteLength ? (this._incomplete = !0,
                                this._root._incomplete = !0) : this._raw = new DataView(this._raw.buffer,this._offset,this.largesize);
                            break;
                        default:
                            this._offset + this.size > this._raw.buffer.byteLength ? (this._incomplete = !0,
                                this._root._incomplete = !0) : this._raw = new DataView(this._raw.buffer,this._offset,this.size)
                    }
                    this._incomplete || (this._boxProcessors[this.type] && this._boxProcessors[this.type].call(this),
                        -1 !== this._boxContainers.indexOf(this.type) ? this._parseContainerBox() : this._data = this._readData())
                }
            }
            ,
            a.prototype._parseFullBox = function() {
                this.version = this._readUint(8),
                    this.flags = this._readUint(24)
            }
            ,
            a.prototype._parseContainerBox = function() {
                for (this.boxes = []; this._cursor.offset - this._raw.byteOffset < this._raw.byteLength; )
                    this.boxes.push(a.parse(this))
            }
            ,
            a.prototype.append = function(t, e) {
                r.Utils.appendBox(this, t, e)
            }
            ,
            a.prototype.getLength = function() {
                if (this._parsing = !1,
                    this._rawo = null,
                    this.size = 0,
                    this._procField("size", "uint", 32),
                    this._procField("type", "string", 4),
                1 === this.size && this._procField("largesize", "uint", 64),
                "uuid" === this.type && this._procFieldArray("usertype", 16, "uint", 8),
                this._boxProcessors[this.type] && this._boxProcessors[this.type].call(this),
                -1 !== this._boxContainers.indexOf(this.type))
                    for (var t = 0; t < this.boxes.length; t++)
                        this.size += this.boxes[t].getLength();
                return this._data && this._writeData(this._data),
                    this.size
            }
            ,
            a.prototype.write = function() {
                switch (this._parsing = !1,
                    this._cursor.offset = this._parent._cursor.offset,
                    this.size) {
                    case 0:
                        this._rawo = new DataView(this._parent._rawo.buffer,this._cursor.offset,this.parent._rawo.byteLength - this._cursor.offset);
                        break;
                    case 1:
                        this._rawo = new DataView(this._parent._rawo.buffer,this._cursor.offset,this.largesize);
                        break;
                    default:
                        this._rawo = new DataView(this._parent._rawo.buffer,this._cursor.offset,this.size)
                }
                if (this._procField("size", "uint", 32),
                    this._procField("type", "string", 4),
                1 === this.size && this._procField("largesize", "uint", 64),
                "uuid" === this.type && this._procFieldArray("usertype", 16, "uint", 8),
                this._boxProcessors[this.type] && this._boxProcessors[this.type].call(this),
                -1 !== this._boxContainers.indexOf(this.type))
                    for (var t = 0; t < this.boxes.length; t++)
                        this.boxes[t].write();
                return this._data && this._writeData(this._data),
                    this._parent._cursor.offset += this.size,
                    this.size
            }
            ,
            a.prototype._writeInt = function(t, e) {
                if (this._rawo) {
                    var n = this._cursor.offset - this._rawo.byteOffset;
                    switch (t) {
                        case 8:
                            this._rawo.setInt8(n, e);
                            break;
                        case 16:
                            this._rawo.setInt16(n, e);
                            break;
                        case 32:
                            this._rawo.setInt32(n, e);
                            break;
                        case 64:
                            var r = Math.floor(e / Math.pow(2, 32))
                                , i = e - r * Math.pow(2, 32);
                            this._rawo.setUint32(n, r),
                                this._rawo.setUint32(n + 4, i)
                    }
                    this._cursor.offset += t >> 3
                } else
                    this.size += t >> 3
            }
            ,
            a.prototype._writeUint = function(t, e) {
                if (this._rawo) {
                    var n, r, i = this._cursor.offset - this._rawo.byteOffset;
                    switch (t) {
                        case 8:
                            this._rawo.setUint8(i, e);
                            break;
                        case 16:
                            this._rawo.setUint16(i, e);
                            break;
                        case 24:
                            n = (16776960 & e) >> 8,
                                r = 255 & e,
                                this._rawo.setUint16(i, n),
                                this._rawo.setUint8(i + 2, r);
                            break;
                        case 32:
                            this._rawo.setUint32(i, e);
                            break;
                        case 64:
                            r = e - (n = Math.floor(e / Math.pow(2, 32))) * Math.pow(2, 32),
                                this._rawo.setUint32(i, n),
                                this._rawo.setUint32(i + 4, r)
                    }
                    this._cursor.offset += t >> 3
                } else
                    this.size += t >> 3
            }
            ,
            a.prototype._writeString = function(t, e) {
                for (var n = 0; n < t; n++)
                    this._writeUint(8, e.charCodeAt(n))
            }
            ,
            a.prototype._writeTerminatedString = function(t) {
                if (0 !== t.length) {
                    for (var e = 0; e < t.length; e++)
                        this._writeUint(8, t.charCodeAt(e));
                    this._writeUint(8, 0)
                }
            }
            ,
            a.prototype._writeTemplate = function(t, e) {
                var n = Math.floor(e)
                    , r = (e - n) * Math.pow(2, t / 2);
                this._writeUint(t / 2, n),
                    this._writeUint(t / 2, r)
            }
            ,
            a.prototype._writeData = function(t) {
                if (t)
                    if (this._rawo) {
                        if (t instanceof Array) {
                            for (var e = this._cursor.offset - this._rawo.byteOffset, n = 0; n < t.length; n++)
                                this._rawo.setInt8(e + n, t[n]);
                            this._cursor.offset += t.length
                        }
                        t instanceof Uint8Array && (this._root.bytes.set(t, this._cursor.offset),
                            this._cursor.offset += t.length)
                    } else
                        this.size += t.length
            }
            ,
            a.prototype._writeUTF8String = function(t) {
                var e = r.Utils.utf8ToByteArray(t);
                if (this._rawo)
                    for (var n = new DataView(this._rawo.buffer,this._cursor.offset,e.length), i = 0; i < e.length; i++)
                        n.setUint8(i, e[i]);
                else
                    this.size += e.length
            }
            ,
            a.prototype._writeField = function(t, e, n) {
                switch (t) {
                    case "uint":
                        this._writeUint(e, n);
                        break;
                    case "int":
                        this._writeInt(e, n);
                        break;
                    case "template":
                        this._writeTemplate(e, n);
                        break;
                    case "string":
                        -1 == e ? this._writeTerminatedString(n) : this._writeString(e, n);
                        break;
                    case "data":
                        this._writeData(n);
                        break;
                    case "utf8":
                        this._writeUTF8String(n)
                }
            }
            ,
            a.prototype._boxProcessors.avc1 = a.prototype._boxProcessors.avc2 = a.prototype._boxProcessors.avc3 = a.prototype._boxProcessors.avc4 = a.prototype._boxProcessors.hvc1 = a.prototype._boxProcessors.hev1 = a.prototype._boxProcessors.encv = function() {
                this._procFieldArray("reserved1", 6, "uint", 8),
                    this._procField("data_reference_index", "uint", 16),
                    this._procField("pre_defined1", "uint", 16),
                    this._procField("reserved2", "uint", 16),
                    this._procFieldArray("pre_defined2", 3, "uint", 32),
                    this._procField("width", "uint", 16),
                    this._procField("height", "uint", 16),
                    this._procField("horizresolution", "template", 32),
                    this._procField("vertresolution", "template", 32),
                    this._procField("reserved3", "uint", 32),
                    this._procField("frame_count", "uint", 16),
                    this._procFieldArray("compressorname", 32, "uint", 8),
                    this._procField("depth", "uint", 16),
                    this._procField("pre_defined3", "int", 16),
                    this._procField("config", "data", -1)
            }
            ,
            a.prototype._boxProcessors.dref = function() {
                this._procFullBox(),
                    this._procField("entry_count", "uint", 32),
                    this._procSubBoxes("entries", this.entry_count)
            }
            ,
            a.prototype._boxProcessors.elst = function() {
                this._procFullBox(),
                    this._procField("entry_count", "uint", 32),
                    this._procEntries("entries", this.entry_count, (function(t) {
                            this._procEntryField(t, "segment_duration", "uint", 1 === this.version ? 64 : 32),
                                this._procEntryField(t, "media_time", "int", 1 === this.version ? 64 : 32),
                                this._procEntryField(t, "media_rate_integer", "int", 16),
                                this._procEntryField(t, "media_rate_fraction", "int", 16)
                        }
                    ))
            }
            ,
            a.prototype._boxProcessors.emsg = function() {
                this._procFullBox(),
                    1 == this.version ? (this._procField("timescale", "uint", 32),
                        this._procField("presentation_time", "uint", 64),
                        this._procField("event_duration", "uint", 32),
                        this._procField("id", "uint", 32),
                        this._procField("scheme_id_uri", "string", -1),
                        this._procField("value", "string", -1)) : (this._procField("scheme_id_uri", "string", -1),
                        this._procField("value", "string", -1),
                        this._procField("timescale", "uint", 32),
                        this._procField("presentation_time_delta", "uint", 32),
                        this._procField("event_duration", "uint", 32),
                        this._procField("id", "uint", 32)),
                    this._procField("message_data", "data", -1)
            }
            ,
            a.prototype._boxProcessors.free = a.prototype._boxProcessors.skip = function() {
                this._procField("data", "data", -1)
            }
            ,
            a.prototype._boxProcessors.frma = function() {
                this._procField("data_format", "uint", 32)
            }
            ,
            a.prototype._boxProcessors.ftyp = a.prototype._boxProcessors.styp = function() {
                this._procField("major_brand", "string", 4),
                    this._procField("minor_version", "uint", 32);
                var t = -1;
                this._parsing && (t = (this._raw.byteLength - (this._cursor.offset - this._raw.byteOffset)) / 4),
                    this._procFieldArray("compatible_brands", t, "string", 4)
            }
            ,
            a.prototype._boxProcessors.hdlr = function() {
                this._procFullBox(),
                    this._procField("pre_defined", "uint", 32),
                    this._procField("handler_type", "string", 4),
                    this._procFieldArray("reserved", 3, "uint", 32),
                    this._procField("name", "string", -1)
            }
            ,
            a.prototype._boxProcessors.mdat = function() {
                this._procField("data", "data", -1)
            }
            ,
            a.prototype._boxProcessors.mdhd = function() {
                this._procFullBox(),
                    this._procField("creation_time", "uint", 1 == this.version ? 64 : 32),
                    this._procField("modification_time", "uint", 1 == this.version ? 64 : 32),
                    this._procField("timescale", "uint", 32),
                    this._procField("duration", "uint", 1 == this.version ? 64 : 32),
                this._parsing || "string" != typeof this.language || (this.language = this.language.charCodeAt(0) - 96 << 10 | this.language.charCodeAt(1) - 96 << 5 | this.language.charCodeAt(2) - 96),
                    this._procField("language", "uint", 16),
                this._parsing && (this.language = String.fromCharCode(96 + (this.language >> 10 & 31), 96 + (this.language >> 5 & 31), 96 + (31 & this.language))),
                    this._procField("pre_defined", "uint", 16)
            }
            ,
            a.prototype._boxProcessors.mehd = function() {
                this._procFullBox(),
                    this._procField("fragment_duration", "uint", 1 == this.version ? 64 : 32)
            }
            ,
            a.prototype._boxProcessors.mfhd = function() {
                this._procFullBox(),
                    this._procField("sequence_number", "uint", 32)
            }
            ,
            a.prototype._boxProcessors.mfro = function() {
                this._procFullBox(),
                    this._procField("mfra_size", "uint", 32)
            }
            ,
            a.prototype._boxProcessors.mp4a = a.prototype._boxProcessors.enca = function() {
                this._procFieldArray("reserved1", 6, "uint", 8),
                    this._procField("data_reference_index", "uint", 16),
                    this._procFieldArray("reserved2", 2, "uint", 32),
                    this._procField("channelcount", "uint", 16),
                    this._procField("samplesize", "uint", 16),
                    this._procField("pre_defined", "uint", 16),
                    this._procField("reserved3", "uint", 16),
                    this._procField("samplerate", "template", 32),
                    this._procField("esds", "data", -1)
            }
            ,
            a.prototype._boxProcessors.mvhd = function() {
                this._procFullBox(),
                    this._procField("creation_time", "uint", 1 == this.version ? 64 : 32),
                    this._procField("modification_time", "uint", 1 == this.version ? 64 : 32),
                    this._procField("timescale", "uint", 32),
                    this._procField("duration", "uint", 1 == this.version ? 64 : 32),
                    this._procField("rate", "template", 32),
                    this._procField("volume", "template", 16),
                    this._procField("reserved1", "uint", 16),
                    this._procFieldArray("reserved2", 2, "uint", 32),
                    this._procFieldArray("matrix", 9, "template", 32),
                    this._procFieldArray("pre_defined", 6, "uint", 32),
                    this._procField("next_track_ID", "uint", 32)
            }
            ,
            a.prototype._boxProcessors.payl = function() {
                this._procField("cue_text", "utf8")
            }
            ,
            a.prototype._boxProcessors.pssh = function() {
                this._procFullBox(),
                    this._procFieldArray("SystemID", 16, "uint", 8),
                    this._procField("DataSize", "uint", 32),
                    this._procFieldArray("Data", this.DataSize, "uint", 8)
            }
            ,
            a.prototype._boxProcessors.schm = function() {
                this._procFullBox(),
                    this._procField("scheme_type", "uint", 32),
                    this._procField("scheme_version", "uint", 32),
                1 & this.flags && this._procField("scheme_uri", "string", -1)
            }
            ,
            a.prototype._boxProcessors.sdtp = function() {
                this._procFullBox();
                var t = -1;
                this._parsing && (t = this._raw.byteLength - (this._cursor.offset - this._raw.byteOffset)),
                    this._procFieldArray("sample_dependency_table", t, "uint", 8)
            }
            ,
            a.prototype._boxProcessors.sidx = function() {
                this._procFullBox(),
                    this._procField("reference_ID", "uint", 32),
                    this._procField("timescale", "uint", 32),
                    this._procField("earliest_presentation_time", "uint", 1 == this.version ? 64 : 32),
                    this._procField("first_offset", "uint", 1 == this.version ? 64 : 32),
                    this._procField("reserved", "uint", 16),
                    this._procField("reference_count", "uint", 16),
                    this._procEntries("references", this.reference_count, (function(t) {
                            this._parsing || (t.reference = (1 & t.reference_type) << 31,
                                t.reference |= 2147483647 & t.referenced_size,
                                t.sap = (1 & t.starts_with_SAP) << 31,
                                t.sap |= (3 & t.SAP_type) << 28,
                                t.sap |= 268435455 & t.SAP_delta_time),
                                this._procEntryField(t, "reference", "uint", 32),
                                this._procEntryField(t, "subsegment_duration", "uint", 32),
                                this._procEntryField(t, "sap", "uint", 32),
                            this._parsing && (t.reference_type = t.reference >> 31 & 1,
                                t.referenced_size = 2147483647 & t.reference,
                                t.starts_with_SAP = t.sap >> 31 & 1,
                                t.SAP_type = t.sap >> 28 & 7,
                                t.SAP_delta_time = 268435455 & t.sap)
                        }
                    ))
            }
            ,
            a.prototype._boxProcessors.smhd = function() {
                this._procFullBox(),
                    this._procField("balance", "uint", 16),
                    this._procField("reserved", "uint", 16)
            }
            ,
            a.prototype._boxProcessors.ssix = function() {
                this._procFullBox(),
                    this._procField("subsegment_count", "uint", 32),
                    this._procEntries("subsegments", this.subsegment_count, (function(t) {
                            this._procEntryField(t, "ranges_count", "uint", 32),
                                this._procSubEntries(t, "ranges", t.ranges_count, (function(t) {
                                        this._procEntryField(t, "level", "uint", 8),
                                            this._procEntryField(t, "range_size", "uint", 24)
                                    }
                                ))
                        }
                    ))
            }
            ,
            a.prototype._boxProcessors.stsd = function() {
                this._procFullBox(),
                    this._procField("entry_count", "uint", 32),
                    this._procSubBoxes("entries", this.entry_count)
            }
            ,
            a.prototype._boxProcessors.subs = function() {
                this._procFullBox(),
                    this._procField("entry_count", "uint", 32),
                    this._procEntries("entries", this.entry_count, (function(t) {
                            this._procEntryField(t, "sample_delta", "uint", 32),
                                this._procEntryField(t, "subsample_count", "uint", 16),
                                this._procSubEntries(t, "subsamples", t.subsample_count, (function(t) {
                                        this._procEntryField(t, "subsample_size", "uint", 1 === this.version ? 32 : 16),
                                            this._procEntryField(t, "subsample_priority", "uint", 8),
                                            this._procEntryField(t, "discardable", "uint", 8),
                                            this._procEntryField(t, "codec_specific_parameters", "uint", 32)
                                    }
                                ))
                        }
                    ))
            }
            ,
            a.prototype._boxProcessors.tenc = function() {
                this._procFullBox(),
                    this._procField("default_IsEncrypted", "uint", 24),
                    this._procField("default_IV_size", "uint", 8),
                    this._procFieldArray("default_KID", 16, "uint", 8)
            }
            ,
            a.prototype._boxProcessors.tfdt = function() {
                this._procFullBox(),
                    this._procField("baseMediaDecodeTime", "uint", 1 == this.version ? 64 : 32)
            }
            ,
            a.prototype._boxProcessors.tfhd = function() {
                this._procFullBox(),
                    this._procField("track_ID", "uint", 32),
                1 & this.flags && this._procField("base_data_offset", "uint", 64),
                2 & this.flags && this._procField("sample_description_offset", "uint", 32),
                8 & this.flags && this._procField("default_sample_duration", "uint", 32),
                16 & this.flags && this._procField("default_sample_size", "uint", 32),
                32 & this.flags && this._procField("default_sample_flags", "uint", 32)
            }
            ,
            a.prototype._boxProcessors.tfra = function() {
                this._procFullBox(),
                    this._procField("track_ID", "uint", 32),
                this._parsing || (this.reserved = 0,
                    this.reserved |= (48 & this.length_size_of_traf_num) << 4,
                    this.reserved |= (12 & this.length_size_of_trun_num) << 2,
                    this.reserved |= 3 & this.length_size_of_sample_num),
                    this._procField("reserved", "uint", 32),
                this._parsing && (this.length_size_of_traf_num = (48 & this.reserved) >> 4,
                    this.length_size_of_trun_num = (12 & this.reserved) >> 2,
                    this.length_size_of_sample_num = 3 & this.reserved),
                    this._procField("number_of_entry", "uint", 32),
                    this._procEntries("entries", this.number_of_entry, (function(t) {
                            this._procEntryField(t, "time", "uint", 1 === this.version ? 64 : 32),
                                this._procEntryField(t, "moof_offset", "uint", 1 === this.version ? 64 : 32),
                                this._procEntryField(t, "traf_number", "uint", 8 * (this.length_size_of_traf_num + 1)),
                                this._procEntryField(t, "trun_number", "uint", 8 * (this.length_size_of_trun_num + 1)),
                                this._procEntryField(t, "sample_number", "uint", 8 * (this.length_size_of_sample_num + 1))
                        }
                    ))
            }
            ,
            a.prototype._boxProcessors.tkhd = function() {
                this._procFullBox(),
                    this._procField("creation_time", "uint", 1 == this.version ? 64 : 32),
                    this._procField("modification_time", "uint", 1 == this.version ? 64 : 32),
                    this._procField("track_ID", "uint", 32),
                    this._procField("reserved1", "uint", 32),
                    this._procField("duration", "uint", 1 == this.version ? 64 : 32),
                    this._procFieldArray("reserved2", 2, "uint", 32),
                    this._procField("layer", "uint", 16),
                    this._procField("alternate_group", "uint", 16),
                    this._procField("volume", "template", 16),
                    this._procField("reserved3", "uint", 16),
                    this._procFieldArray("matrix", 9, "template", 32),
                    this._procField("width", "template", 32),
                    this._procField("height", "template", 32)
            }
            ,
            a.prototype._boxProcessors.trex = function() {
                this._procFullBox(),
                    this._procField("track_ID", "uint", 32),
                    this._procField("default_sample_description_index", "uint", 32),
                    this._procField("default_sample_duration", "uint", 32),
                    this._procField("default_sample_size", "uint", 32),
                    this._procField("default_sample_flags", "uint", 32)
            }
            ,
            a.prototype._boxProcessors.trun = function() {
                this._procFullBox(),
                    this._procField("sample_count", "uint", 32),
                1 & this.flags && this._procField("data_offset", "int", 32),
                4 & this.flags && this._procField("first_sample_flags", "uint", 32),
                    this._procEntries("samples", this.sample_count, (function(t) {
                            256 & this.flags && this._procEntryField(t, "sample_duration", "uint", 32),
                            512 & this.flags && this._procEntryField(t, "sample_size", "uint", 32),
                            1024 & this.flags && this._procEntryField(t, "sample_flags", "uint", 32),
                            2048 & this.flags && this._procEntryField(t, "sample_composition_time_offset", 1 === this.version ? "int" : "uint", 32)
                        }
                    ))
            }
            ,
            a.prototype._boxProcessors["url "] = a.prototype._boxProcessors["urn "] = function() {
                this._procFullBox(),
                "urn " === this.type && this._procField("name", "string", -1),
                    this._procField("location", "string", -1)
            }
            ,
            a.prototype._boxProcessors.vlab = function() {
                this._procField("source_label", "utf8")
            }
            ,
            a.prototype._boxProcessors.vmhd = function() {
                this._procFullBox(),
                    this._procField("graphicsmode", "uint", 16),
                    this._procFieldArray("opcolor", 3, "uint", 16)
            }
            ,
            a.prototype._boxProcessors.vttC = function() {
                this._procField("config", "utf8")
            }
            ,
            a.prototype._boxProcessors.vtte = function() {}
    }
    , function(t, e, n) {
        var r = n(50)();
        t.exports = r;
        try {
            regeneratorRuntime = r
        } catch (t) {
            "object" == typeof globalThis ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r)
        }
    }
    , , , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return o
            }
        )),
            n.d(e, "b", (function() {
                    return s
                }
            ));
        var r, i = n(20), a = [], o = {}, s = function(t) {
            window[t] = window[t] || o,
                a.push(t)
        };
        r = i.a,
            Object.assign(o, r)
    }
    , function(t, e, n) {
        var r = n(42);
        function i() {
            return "undefined" != typeof Reflect && Reflect.get ? (t.exports = i = Reflect.get.bind(),
                t.exports.__esModule = !0,
                t.exports.default = t.exports) : (t.exports = i = function(t, e, n) {
                var i = r(t, e);
                if (i) {
                    var a = Object.getOwnPropertyDescriptor(i, e);
                    return a.get ? a.get.call(arguments.length < 3 ? t : n) : a.value
                }
            }
                ,
                t.exports.__esModule = !0,
                t.exports.default = t.exports),
                i.apply(this, arguments)
        }
        t.exports = i,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
    , function(t, e, n) {
        var r = n(43);
        t.exports = function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
            e && r(t, e)
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
    , function(t, e, n) {
        var r = n(29).default
            , i = n(44);
        t.exports = function(t, e) {
            if (e && ("object" === r(e) || "function" == typeof e))
                return e;
            if (void 0 !== e)
                throw new TypeError("Derived constructors may only return object or undefined");
            return i(t)
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
    , function(t, e, n) {
        var r = n(45)
            , i = n(46)
            , a = n(47)
            , o = n(49);
        t.exports = function(t, e) {
            return r(t) || i(t, e) || a(t, e) || o()
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
    , function(t, e) {
        function n(t, e, n, r, i, a, o) {
            try {
                var s = t[a](o)
                    , u = s.value
            } catch (t) {
                return void n(t)
            }
            s.done ? e(u) : Promise.resolve(u).then(r, i)
        }
        t.exports = function(t) {
            return function() {
                var e = this
                    , r = arguments;
                return new Promise((function(i, a) {
                        var o = t.apply(e, r);
                        function s(t) {
                            n(o, i, a, s, u, "next", t)
                        }
                        function u(t) {
                            n(o, i, a, s, u, "throw", t)
                        }
                        s(void 0)
                    }
                ))
            }
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
    , function(t, e, n) {
        var r = n(29).default
            , i = n(41);
        t.exports = function(t) {
            var e = i(t, "string");
            return "symbol" === r(e) ? e : String(e)
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
    , function(t, e, n) {
        var r = n(29).default;
        t.exports = function(t, e) {
            if ("object" !== r(t) || null === t)
                return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
                var i = n.call(t, e || "default");
                if ("object" !== r(i))
                    return i;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === e ? String : Number)(t)
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
    , function(t, e, n) {
        var r = n(28);
        t.exports = function(t, e) {
            for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = r(t)); )
                ;
            return t
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
    , function(t, e) {
        function n(e, r) {
            return t.exports = n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                    t
            }
                ,
                t.exports.__esModule = !0,
                t.exports.default = t.exports,
                n(e, r)
        }
        t.exports = n,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
    , function(t, e) {
        t.exports = function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
    , function(t, e) {
        t.exports = function(t) {
            if (Array.isArray(t))
                return t
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
    , function(t, e) {
        t.exports = function(t, e) {
            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != n) {
                var r, i, a, o, s = [], u = !0, c = !1;
                try {
                    if (a = (n = n.call(t)).next,
                    0 === e) {
                        if (Object(n) !== n)
                            return;
                        u = !1
                    } else
                        for (; !(u = (r = a.call(n)).done) && (s.push(r.value),
                        s.length !== e); u = !0)
                            ;
                } catch (t) {
                    c = !0,
                        i = t
                } finally {
                    try {
                        if (!u && null != n.return && (o = n.return(),
                        Object(o) !== o))
                            return
                    } finally {
                        if (c)
                            throw i
                    }
                }
                return s
            }
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
    , function(t, e, n) {
        var r = n(48);
        t.exports = function(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return r(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0
            }
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
    , function(t, e) {
        t.exports = function(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++)
                r[n] = t[n];
            return r
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
    , function(t, e) {
        t.exports = function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
    , function(t, e, n) {
        var r = n(29).default;
        function i() {
            "use strict";
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            t.exports = i = function() {
                return e
            }
                ,
                t.exports.__esModule = !0,
                t.exports.default = t.exports;
            var e = {}
                , n = Object.prototype
                , a = n.hasOwnProperty
                , o = Object.defineProperty || function(t, e, n) {
                t[e] = n.value
            }
                , s = "function" == typeof Symbol ? Symbol : {}
                , u = s.iterator || "@@iterator"
                , c = s.asyncIterator || "@@asyncIterator"
                , l = s.toStringTag || "@@toStringTag";
            function d(t, e, n) {
                return Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                    t[e]
            }
            try {
                d({}, "")
            } catch (t) {
                d = function(t, e, n) {
                    return t[e] = n
                }
            }
            function f(t, e, n, r) {
                var i = e && e.prototype instanceof g ? e : g
                    , a = Object.create(i.prototype)
                    , s = new D(r || []);
                return o(a, "_invoke", {
                    value: O(t, n, s)
                }),
                    a
            }
            function h(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            e.wrap = f;
            var p = {};
            function g() {}
            function m() {}
            function v() {}
            var y = {};
            d(y, u, (function() {
                    return this
                }
            ));
            var b = Object.getPrototypeOf
                , E = b && b(b(x([])));
            E && E !== n && a.call(E, u) && (y = E);
            var _ = v.prototype = g.prototype = Object.create(y);
            function T(t) {
                ["next", "throw", "return"].forEach((function(e) {
                        d(t, e, (function(t) {
                                return this._invoke(e, t)
                            }
                        ))
                    }
                ))
            }
            function S(t, e) {
                var n;
                o(this, "_invoke", {
                    value: function(i, o) {
                        function s() {
                            return new e((function(n, s) {
                                    !function n(i, o, s, u) {
                                        var c = h(t[i], t, o);
                                        if ("throw" !== c.type) {
                                            var l = c.arg
                                                , d = l.value;
                                            return d && "object" == r(d) && a.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                                                    n("next", t, s, u)
                                                }
                                            ), (function(t) {
                                                    n("throw", t, s, u)
                                                }
                                            )) : e.resolve(d).then((function(t) {
                                                    l.value = t,
                                                        s(l)
                                                }
                                            ), (function(t) {
                                                    return n("throw", t, s, u)
                                                }
                                            ))
                                        }
                                        u(c.arg)
                                    }(i, o, n, s)
                                }
                            ))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                })
            }
            function O(t, e, n) {
                var r = "suspendedStart";
                return function(i, a) {
                    if ("executing" === r)
                        throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === i)
                            throw a;
                        return C()
                    }
                    for (n.method = i,
                             n.arg = a; ; ) {
                        var o = n.delegate;
                        if (o) {
                            var s = w(o, n);
                            if (s) {
                                if (s === p)
                                    continue;
                                return s
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if ("suspendedStart" === r)
                                throw r = "completed",
                                    n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var u = h(t, e, n);
                        if ("normal" === u.type) {
                            if (r = n.done ? "completed" : "suspendedYield",
                            u.arg === p)
                                continue;
                            return {
                                value: u.arg,
                                done: n.done
                            }
                        }
                        "throw" === u.type && (r = "completed",
                            n.method = "throw",
                            n.arg = u.arg)
                    }
                }
            }
            function w(t, e) {
                var n = e.method
                    , r = t.iterator[n];
                if (void 0 === r)
                    return e.delegate = null,
                    "throw" === n && t.iterator.return && (e.method = "return",
                        e.arg = void 0,
                        w(t, e),
                    "throw" === e.method) || "return" !== n && (e.method = "throw",
                        e.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                        p;
                var i = h(r, t.iterator, e.arg);
                if ("throw" === i.type)
                    return e.method = "throw",
                        e.arg = i.arg,
                        e.delegate = null,
                        p;
                var a = i.arg;
                return a ? a.done ? (e[t.resultName] = a.value,
                    e.next = t.nextLoc,
                "return" !== e.method && (e.method = "next",
                    e.arg = void 0),
                    e.delegate = null,
                    p) : a : (e.method = "throw",
                    e.arg = new TypeError("iterator result is not an object"),
                    e.delegate = null,
                    p)
            }
            function k(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                    e.afterLoc = t[3]),
                    this.tryEntries.push(e)
            }
            function A(t) {
                var e = t.completion || {};
                e.type = "normal",
                    delete e.arg,
                    t.completion = e
            }
            function D(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                    t.forEach(k, this),
                    this.reset(!0)
            }
            function x(t) {
                if (t) {
                    var e = t[u];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var n = -1
                            , r = function e() {
                            for (; ++n < t.length; )
                                if (a.call(t, n))
                                    return e.value = t[n],
                                        e.done = !1,
                                        e;
                            return e.value = void 0,
                                e.done = !0,
                                e
                        };
                        return r.next = r
                    }
                }
                return {
                    next: C
                }
            }
            function C() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return m.prototype = v,
                o(_, "constructor", {
                    value: v,
                    configurable: !0
                }),
                o(v, "constructor", {
                    value: m,
                    configurable: !0
                }),
                m.displayName = d(v, l, "GeneratorFunction"),
                e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name))
                }
                ,
                e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v,
                        d(t, l, "GeneratorFunction")),
                        t.prototype = Object.create(_),
                        t
                }
                ,
                e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }
                ,
                T(S.prototype),
                d(S.prototype, c, (function() {
                        return this
                    }
                )),
                e.AsyncIterator = S,
                e.async = function(t, n, r, i, a) {
                    void 0 === a && (a = Promise);
                    var o = new S(f(t, n, r, i),a);
                    return e.isGeneratorFunction(n) ? o : o.next().then((function(t) {
                            return t.done ? t.value : o.next()
                        }
                    ))
                }
                ,
                T(_),
                d(_, l, "Generator"),
                d(_, u, (function() {
                        return this
                    }
                )),
                d(_, "toString", (function() {
                        return "[object Generator]"
                    }
                )),
                e.keys = function(t) {
                    var e = Object(t)
                        , n = [];
                    for (var r in e)
                        n.push(r);
                    return n.reverse(),
                        function t() {
                            for (; n.length; ) {
                                var r = n.pop();
                                if (r in e)
                                    return t.value = r,
                                        t.done = !1,
                                        t
                            }
                            return t.done = !0,
                                t
                        }
                }
                ,
                e.values = x,
                D.prototype = {
                    constructor: D,
                    reset: function(t) {
                        if (this.prev = 0,
                            this.next = 0,
                            this.sent = this._sent = void 0,
                            this.done = !1,
                            this.delegate = null,
                            this.method = "next",
                            this.arg = void 0,
                            this.tryEntries.forEach(A),
                            !t)
                            for (var e in this)
                                "t" === e.charAt(0) && a.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type)
                            throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done)
                            throw t;
                        var e = this;
                        function n(n, r) {
                            return o.type = "throw",
                                o.arg = t,
                                e.next = n,
                            r && (e.method = "next",
                                e.arg = void 0),
                                !!r
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r]
                                , o = i.completion;
                            if ("root" === i.tryLoc)
                                return n("end");
                            if (i.tryLoc <= this.prev) {
                                var s = a.call(i, "catchLoc")
                                    , u = a.call(i, "finallyLoc");
                                if (s && u) {
                                    if (this.prev < i.catchLoc)
                                        return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc)
                                        return n(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc)
                                        return n(i.catchLoc, !0)
                                } else {
                                    if (!u)
                                        throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc)
                                        return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && a.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = t,
                            o.arg = e,
                            i ? (this.method = "next",
                                this.next = i.finallyLoc,
                                p) : this.complete(o)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type)
                            throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                            this.method = "return",
                            this.next = "end") : "normal" === t.type && e && (this.next = e),
                            p
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t)
                                return this.complete(n.completion, n.afterLoc),
                                    A(n),
                                    p
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    A(n)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, n) {
                        return this.delegate = {
                            iterator: x(t),
                            resultName: e,
                            nextLoc: n
                        },
                        "next" === this.method && (this.arg = void 0),
                            p
                    }
                },
                e
        }
        t.exports = i,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
    , function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(2)
            , i = n(7)
            , a = n(16)
            , o = n(1)
            , s = n(9)
            , u = n(0)
            , c = n(3)
            , l = n(6)
            , d = n(8);
        function f(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                ))),
                    n.push.apply(n, r)
            }
            return n
        }
        function h(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? f(Object(n), !0).forEach((function(e) {
                        Object(r.a)(t, e, n[e])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                ))
            }
            return t
        }
        var p = {
            VIDEO: 'video/mp4; codecs="avc1.42E01E"'
        }
            , g = {
            CLEARKEY: "org.w3.clearkey",
            FAIRPLAY: "com.apple.fps.1_0",
            PLAYREADY: "com.microsoft.playready",
            WIDEVINE: "com.widevine.alpha"
        }
            , m = {
            L1: "HW_SECURE_ALL",
            L3: "SW_SECURE_CRYPTO"
        }
            , v = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                , n = ["cenc"]
                , i = t.reduce((function(t, n) {
                    var i = n.contentType
                        , a = n.type;
                    return h({}, t, Object(r.a)({}, "".concat(a, "Capabilities"), [{
                        contentType: i,
                        robustness: e["".concat(a, "Robustness")] || ""
                    }]))
                }
            ), {});
            return [h({
                initDataTypes: n
            }, i)]
        }
            , y = function(t, e) {
            return navigator.requestMediaKeySystemAccess(t, e)
        }
            , b = function() {
            var t = Object(c.a)(c.b.mark((function t() {
                    var e, n, i, a = arguments;
                    return c.b.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                    case 0:
                                        return e = a.length > 0 && void 0 !== a[0] ? a[0] : p,
                                            n = [g.WIDEVINE, g.PLAYREADY, g.FAIRPLAY].reduce((function(t, n) {
                                                    return [].concat(Object(d.a)(t), Object(d.a)(Object.entries(e).flatMap((function(t) {
                                                            var e = Object(l.a)(t, 2)
                                                                , i = e[0]
                                                                , a = e[1];
                                                            return Object.entries(m).flatMap((function(t) {
                                                                    var e = Object(l.a)(t, 2)
                                                                        , o = e[0]
                                                                        , s = e[1]
                                                                        , u = v([{
                                                                        contentType: a,
                                                                        type: i.toLowerCase()
                                                                    }], Object(r.a)({}, "".concat(i.toLowerCase(), "Robustness"), s));
                                                                    return y(n, u).then((function() {
                                                                            return {
                                                                                keySystem: n,
                                                                                level: o,
                                                                                type: i.toLowerCase()
                                                                            }
                                                                        }
                                                                    )).catch((function() {}
                                                                    ))
                                                                }
                                                            ))
                                                        }
                                                    ))))
                                                }
                                            ), []),
                                            t.next = 5,
                                            Promise.all(n);
                                    case 5:
                                        return i = t.sent,
                                            t.abrupt("return", Promise.resolve(i.filter(Boolean)));
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                        }
                    ), t)
                }
            )));
            return function() {
                return t.apply(this, arguments)
            }
        }()
            , E = n(5)
            , _ = n(4)
            , T = n(18)
            , S = n(11)
            , O = n(13)
            , w = n(10)
            , k = n(22)
            , A = n(14);
        function D() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                    !0
            } catch (t) {
                return !1
            }
        }
        var x, C, P = function(t) {
            Object(_.a)(r, t);
            var e, n = (e = r,
                    function() {
                        var t, n = Object(_.b)(e);
                        if (D()) {
                            var r = Object(_.b)(this).constructor;
                            t = Reflect.construct(n, arguments, r)
                        } else
                            t = n.apply(this, arguments);
                        return Object(_.c)(this, t)
                    }
            );
            function r() {
                return Object(E.a)(this, r),
                    n.apply(this, arguments)
            }
            return r
        }(A.a), L = function(t, e, n) {
            return e.slice().sort((function(t, e) {
                    return t.priority - e.priority
                }
            )).reduce((function(e, r) {
                    return Object.entries(t).forEach((function(t) {
                            var i = Object(l.a)(t, 2)
                                , a = i[0]
                                , o = i[1]
                                , s = Object(l.a)(o, 1)[0].src;
                            Object.entries(r.mediaTypes).forEach((function(t) {
                                    var i = Object(l.a)(t, 2)
                                        , o = i[0]
                                        , u = i[1]
                                        , c = r.canPlayType(u, n);
                                    a.toUpperCase() === o && c && e.push({
                                        url: s,
                                        renderer: r,
                                        mimeType: u,
                                        mediaType: o
                                    })
                                }
                            ))
                        }
                    )),
                        e
                }
            ), [])
        }, R = n(21);
        function j(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                ))),
                    n.push.apply(n, r)
            }
            return n
        }
        function I(t) {
            var e = "mediaItem_" + O.a.generateRandomString(16)
                , n = void 0
                , i = void 0
                , a = void 0
                , o = void 0
                , s = void 0
                , u = void 0
                , c = void 0;
            function d(t) {
                var e, n, a;
                null === (e = i = t && Object.entries(t).reduce((function(t, e) {
                        var n = Object(l.a)(e, 2)
                            , i = n[0]
                            , a = n[1];
                        return function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? j(Object(n), !0).forEach((function(e) {
                                        Object(r.a)(t, e, n[e])
                                    }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                    }
                                ))
                            }
                            return t
                        }({}, t, Object(r.a)({}, i.toLowerCase(), "string" == typeof a ? {
                            src: a
                        } : a))
                    }
                ), {})) || void 0 === e || null === (n = e.widevine) || void 0 === n || null === (a = n.multikey) || void 0 === a || a.sort((function(t, e) {
                        return t.securityLevel === e.securityLevel ? t.maxHeight - e.maxHeight : t.securityLevel < e.securityLevel ? 1 : -1
                    }
                ))
            }
            function f(e) {
                t.source = e,
                    n = e
            }
            function h(t) {
                a = t
            }
            function p(t) {
                o = t
            }
            function g(t) {
                s = t
            }
            function m(t) {
                u = t
            }
            function v(t) {
                c = t
            }
            return void 0 !== t && function(t) {
                var e = t.drm
                    , n = t.rating
                    , r = t.sources
                    , i = t.splashscreen
                    , a = t.stripe
                    , o = t.subtitles
                    , s = t.thumbnail;
                f(r),
                    p(a),
                    h(o),
                    m(s),
                    g(i),
                    v(n),
                    d(e)
            }(t),
                t = t = {},
                {
                    getByKey: function(e) {
                        return t[e]
                    },
                    getId: function() {
                        return e
                    },
                    getDrm: function() {
                        return i
                    },
                    setDrm: d,
                    getSource: function() {
                        return n
                    },
                    setSource: f,
                    getStripe: function() {
                        return o
                    },
                    getSubtitles: function() {
                        return a
                    },
                    setThumbnail: m,
                    getThumbnail: function() {
                        return u
                    },
                    getSplashscreen: function() {
                        return s
                    },
                    setSplashscreen: g,
                    getRating: function() {
                        return c
                    },
                    setRating: v
                }
        }
        function M(t) {
            var e = t.options
                , n = []
                , r = {};
            return {
                fetch: function() {
                    var t = e.get(o.r)
                        , i = e.get(o.x) || e.get(o.y);
                    return t ? function(t) {
                        var i = new I
                            , a = {};
                        if (n = [],
                            r = {},
                        "string" == typeof t) {
                            var s = "mp4";
                            -1 !== t.indexOf("#") && (s = t.split("#")[1]),
                                a[s] = [{
                                    src: t
                                }]
                        } else
                            for (var u in t)
                                t.hasOwnProperty(u) && (a[u] = [{
                                    src: t[u]
                                }]);
                        return i.setSource(a),
                            i.setDrm(e.get(o.z)),
                            n.push(i),
                            r[i.getId()] = i,
                            Promise.resolve()
                    }(t) : i ? function(t) {
                        if (n = [],
                            r = {},
                        "object" === Object(T.b)(t)) {
                            if (Array.isArray(t))
                                for (var i = 0; i < t.length; i++)
                                    n.push(t[i]);
                            else
                                n.push(t);
                            return Promise.resolve()
                        }
                        var a = (e.get(o.i) || {}).playlist
                            , s = void 0 === a ? {} : a
                            , u = s.headers
                            , c = s.params
                            , l = s.withCredentials;
                        return w.d.get(t, {
                            headers: u,
                            params: c,
                            withCredentials: !!l
                        }).then((function(t) {
                                var e = JSON.parse(t.data);
                                if (Array.isArray(e))
                                    n = e.map((function(t) {
                                            var e = new I(t);
                                            return r[e.getId()] = e,
                                                e
                                        }
                                    ));
                                else {
                                    var i = new I(e);
                                    r[i.getId()] = i,
                                        n.push(i)
                                }
                            }
                        ))
                    }(i) : Promise.reject()
                },
                list: function() {
                    return n
                },
                first: function() {
                    return n[0]
                },
                getById: function(t) {
                    return r[t]
                }
            }
        }
        function F(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                ))),
                    n.push.apply(n, r)
            }
            return n
        }
        function N(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? F(Object(n), !0).forEach((function(e) {
                        Object(r.a)(t, e, n[e])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                ))
            }
            return t
        }
        var B = (C = {},
            Object(r.a)(C, o.A, "REKLAMA: "),
            Object(r.a)(C, o.Hb, (x = {},
                Object(r.a)(x, o.B, !1),
                Object(r.a)(x, o.Ib, !1),
                Object(r.a)(x, o.Jb, 0),
                x)),
            Object(r.a)(C, o.a, !0),
            Object(r.a)(C, o.Lb, !0),
            Object(r.a)(C, o.D, "resume"),
            Object(r.a)(C, o.c, 30),
            Object(r.a)(C, o.E, 2),
            Object(r.a)(C, o.F, !0),
            Object(r.a)(C, o.d, !1),
            Object(r.a)(C, o.G, "classic"),
            Object(r.a)(C, o.H, "rgpl"),
            Object(r.a)(C, o.I, "default"),
            Object(r.a)(C, o.J, null),
            Object(r.a)(C, o.K, !1),
            Object(r.a)(C, o.L, "pl"),
            Object(r.a)(C, o.Db, null),
            Object(r.a)(C, o.Eb, null),
            Object(r.a)(C, o.e, !1),
            Object(r.a)(C, o.Nb, !0),
            Object(r.a)(C, o.z, null),
            Object(r.a)(C, o.M, {}),
            Object(r.a)(C, o.V, void 0),
            Object(r.a)(C, o.W, {}),
            Object(r.a)(C, o.X, "application/octet-stream"),
            Object(r.a)(C, o.r, void 0),
            Object(r.a)(C, o.y, void 0),
            Object(r.a)(C, o.Kb, !1),
            Object(r.a)(C, o.Y, !0),
            Object(r.a)(C, o.Z, void 0),
            Object(r.a)(C, o.Tb, !0),
            Object(r.a)(C, o.h, .25),
            Object(r.a)(C, o.ab, 400),
            Object(r.a)(C, o.bb, !0),
            Object(r.a)(C, o.cb, null),
            Object(r.a)(C, o.i, {}),
            Object(r.a)(C, o.j, !0),
            Object(r.a)(C, o.db, !1),
            Object(r.a)(C, o.Fb, !1),
            Object(r.a)(C, o.Sb, !1),
            Object(r.a)(C, o.m, 0),
            Object(r.a)(C, o.eb, void 0),
            Object(r.a)(C, o.Ab, null),
            Object(r.a)(C, o.xb, 20),
            Object(r.a)(C, o.zb, null),
            Object(r.a)(C, o.wb, null),
            Object(r.a)(C, o.vb, 15),
            Object(r.a)(C, o.n, !0),
            Object(r.a)(C, o.fb, []),
            Object(r.a)(C, o.gb, void 0),
            Object(r.a)(C, o.hb, !0),
            Object(r.a)(C, o.ib, [.25, .5, 1, 1.5, 2]),
            Object(r.a)(C, o.q, !1),
            Object(r.a)(C, o.Mb, void 0),
            Object(r.a)(C, o.f, !1),
            Object(r.a)(C, o.jb, !1),
            Object(r.a)(C, o.kb, ["dash", "html5"]),
            Object(r.a)(C, o.s, !0),
            Object(r.a)(C, o.lb, null),
            Object(r.a)(C, o.mb, 10),
            Object(r.a)(C, o.Cb, "time"),
            Object(r.a)(C, o.nb, ["profile", "audio", "subtitle", "playbackRate"]),
            Object(r.a)(C, o.ob, !0),
            Object(r.a)(C, o.pb, !0),
            Object(r.a)(C, o.qb, !0),
            Object(r.a)(C, o.rb, !0),
            Object(r.a)(C, o.sb, {
                name: "default",
                url: null
            }),
            Object(r.a)(C, o.Bb, !1),
            Object(r.a)(C, o.yb, 0),
            Object(r.a)(C, o.Gb, 0),
            Object(r.a)(C, o.t, !1),
            Object(r.a)(C, o.p, !1),
            Object(r.a)(C, o.o, {
                dvr: "dvr",
                startTime: "startTime",
                stopTime: "stopTime"
            }),
            Object(r.a)(C, o.tb, !0),
            Object(r.a)(C, o.v, !1),
            Object(r.a)(C, o.l, "//r.dcs.redcdn.pl/utc"),
            Object(r.a)(C, o.k, 60),
            Object(r.a)(C, o.u, null),
            Object(r.a)(C, o.Qb, void 0),
            Object(r.a)(C, o.ub, 5),
            Object(r.a)(C, o.Pb, !0),
            Object(r.a)(C, o.w, "redgalaxy-player-volume"),
            Object(r.a)(C, o.Rb, void 0),
            Object(r.a)(C, o.Ob, "redgalaxy-player-volume-muted"),
            Object(r.a)(C, o.N, "horizontal"),
            Object(r.a)(C, o.O, 600),
            C)
            , U = function() {
            function t() {
                Object(E.a)(this, t),
                    this.options = O.a.extendDeep({}, B),
                    this.options.name = this.options.name || O.a.generateRandomString(10)
            }
            return Object(E.b)(t, [{
                key: "get",
                value: function(t) {
                    return t in this.options ? this.options[t] : null
                }
            }, {
                key: "set",
                value: function(t, e) {
                    this.options[t] = e
                }
            }, {
                key: "update",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return !1 !== t[o.Hb] && (t[o.Hb] = N({}, B[o.Hb], {}, t[o.Hb])),
                        this.options = N({}, this.options, {}, t),
                        this.options.name = "player_renderer_".concat(O.a.generateRandomString(10)),
                        this.options.deviceControls = !1,
                    S.a.isMobile() && (this.options.autoplay = !0),
                        this.options
                }
            }, {
                key: "getWidthWithUnit",
                value: function() {
                    return V(this.options.width)
                }
            }, {
                key: "getHeightWithUnit",
                value: function() {
                    return V(this.options.height)
                }
            }]),
                t
        }();
        function V(t, e) {
            var n = t.toString().replace(/\d+/g, "");
            return n.length || (n = e || "px"),
            parseInt(t, 10) + n
        }
        function H(t, e) {
            var n = document.querySelector("#".concat(t))
                , r = e.get(o.H)
                , i = {}
                , a = n.querySelector(".".concat(r, "-container"));
            a && n.removeChild(a);
            var s = document.createElement("div")
                , u = document.createElement("div")
                , c = document.createElement("div");
            if (n)
                return n.appendChild(s),
                    s.appendChild(u),
                    s.appendChild(c),
                    n.classList.add(r),
                    s.classList.add("".concat(r, "-container")),
                    u.classList.add("".concat(r, "-renderers")),
                    c.classList.add("".concat(r, "-gui-container")),
                S.a.isMobile() && s.classList.add("".concat(r, "-container--mobile")),
                    s.style.background = "#000",
                    s.style.width = "100%",
                    s.style.height = "100%",
                    u.style.width = "100%",
                    u.style.height = "100%",
                    l(),
                    {
                        addRenderer: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            e && (u.innerHTML = ""),
                                t.setAttribute("width", "100%"),
                                t.setAttribute("height", "100%"),
                                u.appendChild(t)
                        },
                        addComponent: function(t, e) {
                            i[e] = t,
                                c.appendChild(t.getElm())
                        },
                        getEl: function() {
                            return s
                        },
                        getComponent: function(t) {
                            return i[t]
                        },
                        getHolderEl: function() {
                            return n
                        },
                        getRendererContainer: function() {
                            return u
                        },
                        hideGuiContainer: function() {
                            c.style.display = "none"
                        },
                        removeComponent: function(t) {
                            var e = "string" == typeof t ? i[t] : t;
                            e && (c.removeChild(e.getElm()),
                                delete i[e.id],
                                e = null)
                        },
                        showGuiContainer: function() {
                            c.style.display = "unset"
                        },
                        updateDims: l
                    };
            function l() {
                n.style.width = e.getWidthWithUnit(),
                    n.style.height = e.getHeightWithUnit()
            }
        }
        function G() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                    !0
            } catch (t) {
                return !1
            }
        }
        var z, Y = [], W = [], K = [], q = function(t) {
            Object(_.a)(h, t);
            var e, n, r, d, f = (e = h,
                    function() {
                        var t, n = Object(_.b)(e);
                        if (G()) {
                            var r = Object(_.b)(this).constructor;
                            t = Reflect.construct(n, arguments, r)
                        } else
                            t = n.apply(this, arguments);
                        return Object(_.c)(this, t)
                    }
            );
            function h(t) {
                var e, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                switch (Object(E.a)(this, h),
                    (e = f.call(this)).holderId = void 0,
                    e._rendererObj = null,
                    e.components = {},
                    e.beforePlayTaskQueue = [],
                    e.supportedDrmSystems = null,
                    e.destroyed = !1,
                    Object(T.b)(t)) {
                    case "object":
                        e._rendererObj = t;
                        break;
                    case "string":
                        n = !0,
                            e.holderId = t
                }
                return e.options = new U,
                    e.playlist = new M(Object(_.d)(e)),
                    e.autoLoad = n,
                    e.renderer = null,
                    e.mediaItem = null,
                    e.frozen = !1,
                    e.timeShift = null,
                    e.onVisibilityChangeRef = function() {
                        return e.onVisibilityChange()
                    }
                    ,
                    document.addEventListener("visibilitychange", e.onVisibilityChangeRef),
                    Y.push(Object(_.d)(e)),
                    e
            }
            return Object(E.b)(h, [{
                key: "renderers",
                get: function() {
                    return W.slice()
                }
            }], [{
                key: "addModule",
                value: function(t) {
                    K.push(t)
                }
            }, {
                key: "addRenderer",
                value: function(t) {
                    W.push(t)
                }
            }, {
                key: "players",
                get: function() {
                    return Y.slice()
                }
            }, {
                key: "renderers",
                set: function(t) {
                    t.forEach((function(t) {
                            return W.push(t)
                        }
                    ))
                },
                get: function() {
                    return W.slice()
                }
            }, {
                key: "modules",
                set: function(t) {
                    t.forEach((function(t) {
                            K.indexOf(t) && K.push(t)
                        }
                    ))
                },
                get: function() {
                    return K.slice()
                }
            }]),
                Object(E.b)(h, [{
                    key: "setup",
                    value: function(t) {
                        return this.options.update(t),
                            this.trigger(u.m),
                        this.autoLoad && this.load(),
                            this
                    }
                }, {
                    key: "load",
                    value: (d = Object(c.a)(c.b.mark((function t(e) {
                                return c.b.wrap((function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                                case 0:
                                                    return this.destroyed = !1,
                                                    null !== this.renderer && this.renderer.destroy(),
                                                    e && this.options.set(o.r, e),
                                                        t.abrupt("return", this._initialize());
                                                case 4:
                                                case "end":
                                                    return t.stop()
                                            }
                                    }
                                ), t, this)
                            }
                        ))),
                            function(t) {
                                return d.apply(this, arguments)
                            }
                    )
                }, {
                    key: "_initialize",
                    value: (r = Object(c.a)(c.b.mark((function t() {
                                return c.b.wrap((function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2,
                                                        this.registerModules();
                                                case 2:
                                                    return this.timeShift = new k.b(this),
                                                        this.trigger(u.j),
                                                        t.prev = 4,
                                                        t.next = 7,
                                                        this.playlist.fetch();
                                                case 7:
                                                    if (this.mediaItem = this.playlist.first(),
                                                    this.supportedDrmSystems || !this.mediaItem.getDrm()) {
                                                        t.next = 12;
                                                        break
                                                    }
                                                    return t.next = 11,
                                                        b();
                                                case 11:
                                                    this.supportedDrmSystems = t.sent;
                                                case 12:
                                                    this.trigger(u.H, this.playlist.list()),
                                                        t.next = 18;
                                                    break;
                                                case 15:
                                                    t.prev = 15,
                                                        t.t0 = t.catch(4),
                                                        this.trigger(u.f, {
                                                            code: 220,
                                                            type: "PLAYLIST_ERROR",
                                                            renderer: null,
                                                            message: "Failed to load playlist."
                                                        });
                                                case 18:
                                                    if (!this.destroyed) {
                                                        t.next = 20;
                                                        break
                                                    }
                                                    return t.abrupt("return");
                                                case 20:
                                                    if (!this.mediaItem) {
                                                        t.next = 23;
                                                        break
                                                    }
                                                    return t.next = 23,
                                                        this._create();
                                                case 23:
                                                case "end":
                                                    return t.stop()
                                            }
                                    }
                                ), t, this, [[4, 15]])
                            }
                        ))),
                            function() {
                                return r.apply(this, arguments)
                            }
                    )
                }, {
                    key: "_create",
                    value: (n = Object(c.a)(c.b.mark((function t() {
                                var e, n, r, i, a, o, d, f = this;
                                return c.b.wrap((function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                                case 0:
                                                    if (!this.destroyed) {
                                                        t.next = 2;
                                                        break
                                                    }
                                                    return t.abrupt("return");
                                                case 2:
                                                    if (e = L(this.mediaItem.getSource(), W, this.options),
                                                        n = Object(l.a)(e, 1),
                                                        r = n[0]) {
                                                        t.next = 5;
                                                        break
                                                    }
                                                    return t.abrupt("return", this.throwNoSupportedRendererError());
                                                case 5:
                                                    if (!(i = r.renderer.create)) {
                                                        t.next = 12;
                                                        break
                                                    }
                                                    return t.next = 9,
                                                        i(this, this._rendererObj).catch((function() {
                                                                return f.throwNoSupportedRendererError()
                                                            }
                                                        ));
                                                case 9:
                                                    t.t0 = t.sent,
                                                        t.next = 13;
                                                    break;
                                                case 12:
                                                    t.t0 = new r.renderer(this,this._rendererObj);
                                                case 13:
                                                    if (this.renderer = t.t0,
                                                    this.renderer && !this.destroyed) {
                                                        t.next = 16;
                                                        break
                                                    }
                                                    return t.abrupt("return");
                                                case 16:
                                                    this.renderer.setMediaItem(r),
                                                        this._registerEvents(),
                                                        a = this._rendererObj || this.renderer.getRendererElm(),
                                                    this.holderId && ((o = new H(this.holderId,this.options)).addRenderer(a),
                                                        this.addComponent(o, s.c)),
                                                        d = Object(R.b)(this.getFullscreenElement(), (function(t) {
                                                                return f.trigger(u.I, t)
                                                            }
                                                        )),
                                                        this.on(u.e, d),
                                                        this.trigger(u.r, this.renderer);
                                                case 23:
                                                case "end":
                                                    return t.stop()
                                            }
                                    }
                                ), t, this)
                            }
                        ))),
                            function() {
                                return n.apply(this, arguments)
                            }
                    )
                }, {
                    key: "freeze",
                    value: function() {
                        this.frozen = !0
                    }
                }, {
                    key: "unFreeze",
                    value: function() {
                        this.frozen = !1
                    }
                }, {
                    key: "addComponent",
                    value: function(t, e) {
                        this.components[e] = t
                    }
                }, {
                    key: "getComponent",
                    value: function(t) {
                        return this.components[t]
                    }
                }, {
                    key: "removeComponent",
                    value: function(t) {
                        this.components[t.id] = void 0,
                            delete this.components[t.id]
                    }
                }, {
                    key: "getRendererObj",
                    value: function() {
                        return this._rendererObj
                    }
                }, {
                    key: "switchMedia",
                    value: function(t) {
                        var e = this;
                        this.renderer && this.renderer.destroy();
                        var n = this.getComponent(s.c);
                        this.renderer = new Renderer(t,this),
                            n.addRenderer(this.renderer.getRendererElm(), !0),
                            this.renderer.on(u.yb, (function(t, n) {
                                    return e.trigger(u.u, t, n)
                                }
                            )),
                            this.renderer.on(u.yb, (function(t, n) {
                                    return e.trigger(u.yb, t, n)
                                }
                            ))
                    }
                }, {
                    key: "isIndexMode",
                    value: function() {
                        var t, e;
                        return null === (t = this.renderer) || void 0 === t || null === (e = t.isIndexMode) || void 0 === e ? void 0 : e.call(t)
                    }
                }, {
                    key: "getRendererElm",
                    value: function() {
                        var t;
                        return null === (t = this.renderer) || void 0 === t ? void 0 : t.getRendererElm()
                    }
                }, {
                    key: "getMediaType",
                    value: function() {
                        var t;
                        return null === (t = this.renderer) || void 0 === t ? void 0 : t.rendererType
                    }
                }, {
                    key: "getRenderer",
                    value: function() {
                        return this.renderer
                    }
                }, {
                    key: "_registerEvents",
                    value: function() {
                        var t = this;
                        this.renderer.on(u.yb, this.trigger.bind(this, u.u)),
                            this.renderer.on(u.yb, this.trigger.bind(this, u.yb)),
                            this.on(u.r, this.ready.bind(this)),
                            this.on(u.v, (function() {
                                    return t._play()
                                }
                            )),
                            this.on(u.y, (function(e) {
                                    return t._setVolume(e)
                                }
                            )),
                            this.on(u.z, (function(e) {
                                    return t._setMuted(e)
                                }
                            )),
                            this.on(17, (function(e, n) {
                                    return t.trigger(u.A, n)
                                }
                            )),
                            this.on(u.A, (function(e) {
                                    return t._seekTo(e)
                                }
                            )),
                            this.on(u.B, (function(e) {
                                    return t._seek(e)
                                }
                            )),
                            this.on(u.a, (function() {
                                    return t.togglePlayPause()
                                }
                            ))
                    }
                }, {
                    key: "registerModules",
                    value: function() {
                        var t = this
                            , e = this.options.get(o.fb)
                            , n = [];
                        return K.forEach((function(r) {
                                if (r.enabled || -1 !== e.indexOf(r.moduleId)) {
                                    var i = new r(t);
                                    i.initAsync && n.push(i.initAsync())
                                }
                            }
                        )),
                            Promise.all(n)
                    }
                }, {
                    key: "onVisibilityChange",
                    value: function() {
                        this.trigger(u.w, "visible" === document.visibilityState)
                    }
                }, {
                    key: "ready",
                    value: function() {
                        this.options.get(o.Lb) && this.renderer.play()
                    }
                }, {
                    key: "onVolumeChanged",
                    value: function(t) {
                        var e;
                        this.options.get(o.Pb) && (null === (e = localStorage) || void 0 === e || e.setItem(this.options.get(o.w), t))
                    }
                }, {
                    key: "restart",
                    value: function() {
                        this.frozen || (this.timeShift.isEnabled() && this.timeShift.reset(),
                            this.renderer.restart()),
                            this.trigger(u.D)
                    }
                }, {
                    key: "switchProfile",
                    value: function(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                            , n = arguments.length > 2 ? arguments[2] : void 0;
                        null !== this.renderer && this.renderer.switchProfile(t, e, n)
                    }
                }, {
                    key: "switchAudioTrack",
                    value: function(t, e) {
                        this.renderer.switchAudioTrack(t, e)
                    }
                }, {
                    key: "getDroppedFrameCount",
                    value: function() {
                        return this.renderer.getDroppedFrameCount()
                    }
                }, {
                    key: "getDecodedFrameCount",
                    value: function() {
                        return this.renderer.getDecodedFrameCount()
                    }
                }, {
                    key: "getBuffered",
                    value: function() {
                        return this.renderer.getBuffered()
                    }
                }, {
                    key: "getPlayed",
                    value: function() {
                        return this.renderer.getPlayed()
                    }
                }, {
                    key: "getProfile",
                    value: function() {
                        return this.renderer.getProfile()
                    }
                }, {
                    key: "_play",
                    value: function() {
                        this.frozen || this.renderer.play()
                    }
                }, {
                    key: "play",
                    value: function() {
                        var t = this;
                        return new Promise((function(e, n) {
                                t.trigger(u.v);
                                var r = function() {
                                    t.off(u.wb, e),
                                        t.off(u.vb, n)
                                };
                                t.once(u.wb, (function() {
                                        r(),
                                            e()
                                    }
                                )),
                                    t.once(u.vb, (function(t) {
                                            r(),
                                                n(t)
                                        }
                                    ))
                            }
                        ))
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.frozen || this.renderer.pause(),
                            this.trigger(u.E)
                    }
                }, {
                    key: "stop",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.renderer.stop(),
                        t || this.trigger(u.F)
                    }
                }, {
                    key: "head",
                    value: function() {
                        this.seek(100)
                    }
                }, {
                    key: "isPaused",
                    value: function() {
                        return !!this.renderer && this.renderer.isPaused
                    }
                }, {
                    key: "resize",
                    value: function(t, e) {
                        this.trigger(u.G, t, e)
                    }
                }, {
                    key: "setVolume",
                    value: function(t) {
                        this.trigger(u.y, t)
                    }
                }, {
                    key: "_setVolume",
                    value: function(t) {
                        this.renderer.setVolume(t)
                    }
                }, {
                    key: "getVolume",
                    value: function() {
                        return this.renderer.getVolume()
                    }
                }, {
                    key: "_setMuted",
                    value: function(t) {
                        var e;
                        null === (e = this.renderer) || void 0 === e || e.setMuted(t)
                    }
                }, {
                    key: "isMuted",
                    value: function() {
                        var t;
                        return null === (t = this.renderer) || void 0 === t ? void 0 : t.isMuted()
                    }
                }, {
                    key: "mute",
                    value: function() {
                        return this._setMuted(!0)
                    }
                }, {
                    key: "unMute",
                    value: function() {
                        return this._setMuted(!1)
                    }
                }, {
                    key: "volumeUp",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                            , e = parseFloat(this.renderer.getVolume());
                        (e += t / 10) > 1 && (e = 1),
                            this.renderer.setVolume(100 * e)
                    }
                }, {
                    key: "volumeDown",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                            , e = parseFloat(this.renderer.getVolume());
                        (e -= t / 10) < 0 && (e = 0),
                            this.renderer.setVolume(100 * e)
                    }
                }, {
                    key: "setDrm",
                    value: function(t) {
                        this.mediaItem.setDrm(t)
                    }
                }, {
                    key: "isStreamStarted",
                    value: function() {
                        var t;
                        return null === (t = this.renderer) || void 0 === t ? void 0 : t.isStarted
                    }
                }, {
                    key: "isStreamPaused",
                    value: function() {
                        var t;
                        return null === (t = this.renderer) || void 0 === t ? void 0 : t.isPaused
                    }
                }, {
                    key: "isLive",
                    value: function() {
                        var t;
                        return null === (t = this.renderer) || void 0 === t ? void 0 : t.isLive()
                    }
                }, {
                    key: "isLiveWithoutTimeShift",
                    value: function() {
                        return this.isLive() && !this.timeShift.isEnabled()
                    }
                }, {
                    key: "isFullscreen",
                    value: function(t) {
                        return Object(R.a)(t || this.getFullscreenElement())
                    }
                }, {
                    key: "getFullscreenElement",
                    value: function() {
                        var t = this.options.get(o.P);
                        if (t)
                            return t;
                        var e = this.options.get(o.Q) || this.holderId;
                        return document.getElementById(e) || this.renderer.getRendererElm()
                    }
                }, {
                    key: "getMediaItem",
                    value: function() {
                        return this.mediaItem
                    }
                }, {
                    key: "getUrl",
                    value: function() {
                        var t;
                        return null === (t = this.renderer) || void 0 === t ? void 0 : t.url
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        var t;
                        return Math.max(0, null === (t = this.renderer) || void 0 === t ? void 0 : t.getCurrentTime())
                    }
                }, {
                    key: "getCurrentTimeUTC",
                    value: function() {
                        var t = this.getCurrentTime();
                        return this.isLive() && this.timeShift.isEnabled() && (t += this.getLiveStartUTC()),
                            t
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return null === this.renderer ? NaN : this.renderer.getDuration()
                    }
                }, {
                    key: "getBufferLength",
                    value: function() {
                        return null === this.renderer ? NaN : this.renderer.getBufferLength()
                    }
                }, {
                    key: "setMaxBufferLength",
                    value: function(t) {
                        var e;
                        null === (e = this.renderer) || void 0 === e || e.setMaxBufferLength(t),
                            this.options.set("maxBufferLength", t)
                    }
                }, {
                    key: "getCurrentProfile",
                    value: function() {
                        var t;
                        return null === (t = this.renderer) || void 0 === t ? void 0 : t.getCurrentProfile()
                    }
                }, {
                    key: "getProfiles",
                    value: function() {
                        return this.renderer.getProfiles()
                    }
                }, {
                    key: "getAudioTracks",
                    value: function() {
                        return this.renderer.getAudioTracks()
                    }
                }, {
                    key: "getCurrentAudioTrack",
                    value: function() {
                        return this.renderer.getCurrentAudioTrack()
                    }
                }, {
                    key: "getTextTracks",
                    value: function() {
                        return this.renderer.getTextTracks()
                    }
                }, {
                    key: "seek",
                    value: function() {
                        for (var t = this, e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                            n[r] = arguments[r];
                        return this._createSeekPromise((function() {
                                return t.trigger.apply(t, [u.B].concat(n))
                            }
                        ))
                    }
                }, {
                    key: "seekTo",
                    value: function() {
                        for (var t = this, e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                            n[r] = arguments[r];
                        return this._createSeekPromise((function() {
                                return t.trigger.apply(t, [u.A].concat(n))
                            }
                        ))
                    }
                }, {
                    key: "seekToHead",
                    value: function() {
                        var t = this;
                        return this._createSeekPromise((function() {
                                t.timeShift.isEnabled() && t.timeShift.setMode(k.a.LIVE),
                                    t.renderer.seekToHead()
                            }
                        ))
                    }
                }, {
                    key: "_createSeekPromise",
                    value: function(t) {
                        var e = this;
                        return new Promise((function(n) {
                                e.once(u.Cb, n),
                                    t()
                            }
                        ))
                    }
                }, {
                    key: "_seek",
                    value: function() {
                        if (!this.frozen) {
                            this.timeShift.isLive() && this.timeShift.setMode(k.a.LIVE_DELAYED);
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                                e[n] = arguments[n];
                            this.renderer.seek.apply(this.renderer, e)
                        }
                    }
                }, {
                    key: "_seekTo",
                    value: function() {
                        if (!this.frozen) {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                                e[n] = arguments[n];
                            this.renderer.seekTo.apply(this.renderer, e)
                        }
                    }
                }, {
                    key: "updateTimeShift",
                    value: function(t) {
                        this.options.set(o.u, t),
                            this.timeShift.update()
                    }
                }, {
                    key: "togglePlayPause",
                    value: function() {
                        this.isPaused() ? (!this.timeShift.isEnabled() && this.isLive() && this.seekToHead(),
                            this.play()) : this.pause()
                    }
                }, {
                    key: "getTimeShift",
                    value: function() {
                        return this.timeShift
                    }
                }, {
                    key: "getTimeShiftStart",
                    value: function() {
                        return this.timeShift.getStart()
                    }
                }, {
                    key: "getTimeShiftHead",
                    value: function() {
                        return this.timeShift.getLiveNowUTC()
                    }
                }, {
                    key: "getLiveHeadUTC",
                    value: function() {
                        return this.timeShift.getLiveNowUTC() - this.getLiveDelay()
                    }
                }, {
                    key: "getLiveNowUTC",
                    value: function() {
                        return this.timeShift.getLiveNowUTC()
                    }
                }, {
                    key: "getLiveStartUTC",
                    value: function() {
                        return this.timeShift.getStart()
                    }
                }, {
                    key: "getLiveDelay",
                    value: function() {
                        var t;
                        return this.isLive() && (null === (t = this.renderer) || void 0 === t ? void 0 : t.getLiveDelay()) || 0
                    }
                }, {
                    key: "getLiveLatency",
                    value: function() {
                        var t = this.getCurrentTime()
                            , e = this.isLive() && !this.timeShift.isEnabled() ? 0 : this.getLiveStartUTC();
                        return this.getLiveNowUTC() - e - t
                    }
                }, {
                    key: "getCurrentPeriod",
                    value: function() {
                        var t;
                        return null === (t = this.renderer) || void 0 === t ? void 0 : t.getCurrentPeriod()
                    }
                }, {
                    key: "getDownloadSpeed",
                    value: function() {
                        return this.renderer.getDownloadSpeed()
                    }
                }, {
                    key: "getPlaybackRate",
                    value: function() {
                        return this.renderer.getPlaybackRate()
                    }
                }, {
                    key: "setPlaybackRate",
                    value: function(t) {
                        this.renderer.setPlaybackRate(t)
                    }
                }, {
                    key: "getOptions",
                    value: function() {
                        return this.options.options
                    }
                }, {
                    key: "throwNoSupportedRendererError",
                    value: function() {
                        this.trigger(u.f, {
                            code: a.a[i.a.NO_SUPPORTED_RENDERER],
                            type: i.a.NO_SUPPORTED_RENDERER,
                            renderer: null,
                            message: "Given media file is not supported by any renderer."
                        })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.destroyed = !0,
                            this.beforePlayTaskQueue = [],
                            this.trigger(u.e, this.getCurrentTime()),
                            this.off(),
                            document.removeEventListener("visibilitychange", this.onVisibilityChangeRef),
                        this.renderer && this.renderer.destroy(),
                        -1 !== Y.indexOf(this) && Y.splice(Y.indexOf(this), 1)
                    }
                }]),
                h
        }(P), Q = n(34), J = n(26), X = n(23), $ = n(17), Z = n(12), tt = {
            VIDEO: "video",
            AUDIO: "audio",
            TEXT: "text"
        }, et = {
            ALL: "all",
            ERROR: "error",
            INFO: "info",
            TRACE: "trace",
            WARN: "warn"
        }, nt = (z = {},
            Object(r.a)(z, et.INFO, "1"),
            Object(r.a)(z, et.WARN, "1"),
            Object(r.a)(z, et.ERROR, "1"),
            Object(r.a)(z, et.TRACE, "0.5"),
            z), rt = {
            "video-stream": "#109fff",
            "audio-stream": "#33a700",
            manifest: "#ba0037",
            period: "#f3750f"
        }, it = function() {
            function t(e, n) {
                Object(E.a)(this, t),
                    this.label = e,
                    this.color = n,
                    this.enabledLevels = []
            }
            return Object(E.b)(t, [{
                key: "setLevel",
                value: function() {
                    for (var t = this, e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                        n[r] = arguments[r];
                    null == n || n.forEach((function(e) {
                            t.enabledLevels.includes(e) || t.enabledLevels.push(e)
                        }
                    ))
                }
            }, {
                key: "removeLevel",
                value: function() {
                    for (var t = this, e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                        n[r] = arguments[r];
                    null == n || n.forEach((function(e) {
                            var n = t.enabledLevels.indexOf(e);
                            -1 !== n && t.enabledLevels.splice(n, 1)
                        }
                    ))
                }
            }, {
                key: "info",
                value: function(t) {
                    this._print("log", t, et.INFO)
                }
            }, {
                key: "trace",
                value: function(t) {
                    this._print("log", t, et.TRACE)
                }
            }, {
                key: "warn",
                value: function(t) {
                    this._print("warn", t, et.WARN)
                }
            }, {
                key: "error",
                value: function(t) {
                    this._print("error", t, et.ERROR)
                }
            }, {
                key: "_print",
                value: function(t, e, n) {
                    if (this.isEnabled(n)) {
                        var r, i, a, o, s, u, c = this.color || rt[this.label] || "#f0f", l = (r = nt[n],
                            i = c.replace("#", ""),
                            a = 6 === i.length,
                            o = parseInt(a ? i.slice(0, 2) : i.slice(0, 1), 16),
                            s = parseInt(a ? i.slice(2, 4) : i.slice(1, 2), 16),
                            u = parseInt(a ? i.slice(4, 6) : i.slice(2, 3), 16),
                            "rgba(".concat(o, ",").concat(s, ",").concat(u, ",").concat(r, ")"));
                        console[t]("%c".concat(this.label), "background: ".concat(l, "; color: #fff; padding: 1px 2px"), e)
                    }
                }
            }, {
                key: "isEnabled",
                value: function(t) {
                    return this.enabledLevels.includes(t) || this.enabledLevels.includes(et.ALL)
                }
            }]),
                t
        }(), at = new (function() {
            function t() {
                Object(E.a)(this, t),
                    this.loggers = [],
                    this.Level = et
            }
            return Object(E.b)(t, [{
                key: "get",
                value: function(t, e) {
                    return this._find(t) || this._create(t, e)
                }
            }, {
                key: "_create",
                value: function(t, e) {
                    var n = new it(t,e);
                    return this.loggers.push(n),
                        n
                }
            }, {
                key: "_find",
                value: function(t) {
                    return this.loggers.find((function(e) {
                            return e.label === t
                        }
                    ))
                }
            }, {
                key: "getLabels",
                value: function() {
                    return this.loggers.map((function(t) {
                            return t.label
                        }
                    ))
                }
            }]),
                t
        }());
        Object.assign(at, et);
        var ot = Object.values(tt)
            , st = ["stpp"]
            , ut = function(t) {
            if (!t)
                return null;
            var e = /^P(?:([0-9]*)Y)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(t);
            if (!e)
                return null;
            var n = e.slice(1, 6).map((function(t) {
                    return parseInt(t, 10) || 0
                }
            ))
                , r = Object(l.a)(n, 4);
            return 31536e3 * r[0] + 86400 * r[1] + 3600 * r[2] + 60 * r[3] + parseFloat(e[5] || 0)
        }
            , ct = function(t) {
            var e = t.split(":").reverse()
                , n = e.map((function(t) {
                    return parseInt(t, 10) || 0
                }
            ))
                , r = Object(l.a)(n, 4)
                , i = (r[0],
                r[1])
                , a = r[2];
            return 86400 * (r[3] || 0) + 3600 * (a || 0) + 60 * i + parseFloat(e[0] || 0)
        }
            , lt = function(t) {
            if (t) {
                var e = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})(?::([0-9]*)(\.[0-9]*)?)?(?:([+\-])([0-9]{2})([0-9]{2}))?/.exec(t)
                    , n = e.slice(1, 7).map((function(t) {
                        return parseInt(t, 10)
                    }
                ))
                    , r = Object(l.a)(n, 6)
                    , i = r[0]
                    , a = r[1]
                    , o = r[2]
                    , s = r[3]
                    , u = r[4]
                    , c = r[5]
                    , d = parseFloat(e[7] || 0)
                    , f = Date.UTC(i, a - 1, o, s, u, c || 0, d);
                return new Date(f).getTime() / 1e3
            }
        }
            , dt = function(t, e) {
            return Array.from(t.childNodes).filter((function(t) {
                    return t.tagName === e
                }
            ))
        }
            , ft = function(t, e) {
            var n;
            return (null === (n = dt(t, e)) || void 0 === n ? void 0 : n[0]) || null
        }
            , ht = function(t, e) {
            for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "0"; t.length < e; )
                t = "".concat(n).concat(t);
            return t
        }
            , pt = function(t) {
            return parseFloat(t.toPrecision(12))
        }
            , gt = function(t, e) {
            var n = t.bandwidth
                , r = t.id
                , i = t.segmentTemplate
                , a = t.url
                , o = e.index
                , s = e.startTime;
            return function(t, e, n) {
                var r = t.indexOf("$".concat(e));
                if (r < 0)
                    return t;
                var i = t.indexOf("$", r + e.length)
                    , a = t.indexOf("%0", r + e.length)
                    , o = 0;
                if (a >= 0)
                    switch (o = t.substring(a + "%0".length, i - 1),
                        t.charAt(i - 1)) {
                        case "d":
                        case "i":
                        case "u":
                            n = ht(n.toString(), o, "0");
                            break;
                        case "o":
                            n = ht(n.toString(8), o, "0");
                            break;
                        case "x":
                            n = ht(n.toString(16), o, "0")
                    }
                return t.substring(0, r) + n + t.substring(i + 1)
            }([a, i.media].join(""), "Number", o).replace("$Time$", s).replace("$RepresentationID$", r).replace("$Bandwidth$", n)
        }
            , mt = function(t) {
            var e = t.getAttribute("codecs")
                , n = t.getAttribute("contentType")
                , r = t.getAttribute("mimeType");
            return ot.includes(n) ? n : st.includes(e) ? tt.TEXT : r ? ot.find((function(t) {
                    return -1 !== r.indexOf(t)
                }
            )) : void 0
        };
        function vt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                ))),
                    n.push.apply(n, r)
            }
            return n
        }
        function yt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? vt(Object(n), !0).forEach((function(e) {
                        Object(r.a)(t, e, n[e])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : vt(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                ))
            }
            return t
        }
        bt.prototype = Object.create(A.a.prototype);
        function bt(t, e, n) {
            var r = this
                , i = t.options
                , a = i.get(o.t)
                , l = t.getComponent(s.a)
                , d = t.getComponent(s.d)
                , f = at.get("".concat(e, "-stream"))
                , h = i.get(o.i) || {}
                , p = (null == h ? void 0 : h.fragment) || {}
                , g = p.headers
                , m = p.params
                , v = null
                , y = null
                , b = []
                , E = {}
                , _ = !1
                , T = !1
                , S = null
                , O = !1
                , k = !1
                , A = null
                , D = 0
                , x = void 0;
            function C() {
                I(),
                    M(),
                    y = null,
                    b = [],
                    S = null,
                    T = !1
            }
            function P() {
                T = !1,
                    k = !1,
                    R()
            }
            function L(t, n) {
                var r, i = N(t), a = y || {}, o = a.start, s = a.duration, u = t + (i > n ? i : n);
                if (null !== y || e !== tt.AUDIO && e !== tt.TEXT || (u = t + n),
                null !== y && u <= o + s && (u = o + s + .01),
                (null === (r = x) || void 0 === r ? void 0 : r.end) && y) {
                    var c, d = v.segmentList, f = (null === (c = d[d.length - 1]) || void 0 === c ? void 0 : c.start) === y.start, h = l.getNextPeriod(x);
                    f && h && (u = h.start)
                }
                if (!(u - t > l.maxBufferLength + 1))
                    return u
            }
            function R() {
                return j.apply(this, arguments)
            }
            function j() {
                return (j = Object(c.a)(c.b.mark((function t() {
                        var i, a, o, s, d, f, h, p;
                        return c.b.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                        case 0:
                                            if (!(O || k || _)) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            if (i = n(),
                                                a = i.time,
                                                o = i.bufferLength,
                                                s = L(a, o),
                                                !isNaN(s)) {
                                                t.next = 6;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 6:
                                            if (d = l.findPeriodByTime(s),
                                            x && x.id !== (null == d ? void 0 : d.id) && (k = !0,
                                                T = !1,
                                                z("NEXT PERIOD: ".concat(d.id, ", PREV: ").concat(x.id))),
                                            T || !d) {
                                                t.next = 28;
                                                break
                                            }
                                            if (f = e === tt.VIDEO ? l.getVideoNearestBandwidth(D, d) : D,
                                                v = l.getRepresentationByBandwidth(f, e, d, A)) {
                                                t.next = 13;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 13:
                                            return r.trigger(u.ib, d),
                                                r.trigger("representationChanged", v, d),
                                                z("START LOADING INIT: ".concat(v.bandwidth, ", PERIOD: ").concat(d.id)),
                                                _ = !0,
                                                t.next = 19,
                                                V(v, d);
                                        case 19:
                                            if (h = t.sent,
                                                k = !1,
                                                S = null,
                                                _ = !1,
                                                h) {
                                                t.next = 25;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 25:
                                            z("LOADED INIT: ".concat(v.bandwidth, ", PERIOD: ").concat(d.id)),
                                                T = !0,
                                                b.push(h);
                                        case 28:
                                            if (x = d,
                                                z("LOOKING FOR SEGMENT: [".concat(v.id, "]: start: ").concat(s, ", bandwidth: ").concat(v.bandwidth / 1e3)),
                                                p = B(s, v)) {
                                                t.next = 33;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 33:
                                            if (z("FOUND SEGMENT: [".concat(v.id, "]: start: ").concat(p.start, ", id: ").concat(p.index, ", bandwidth: ").concat(v.bandwidth / 1e3)),
                                                !(null !== y && y.start >= p.start)) {
                                                t.next = 36;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 36:
                                            return t.abrupt("return", H(p, v, o).then((function() {
                                                    return p
                                                }
                                            )));
                                        case 37:
                                        case "end":
                                            return t.stop()
                                    }
                            }
                        ), t)
                    }
                )))).apply(this, arguments)
            }
            function I() {
                O = !0
            }
            function M() {
                S ? S() : _ = !1
            }
            function F() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                b = t ? [] : b.filter((function(t) {
                        return -1 === t.index
                    }
                ))
            }
            function N() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return b.filter((function(e) {
                        var n = e.start
                            , r = e.duration;
                        return n >= t || n < t && n + r > t
                    }
                )).reduce((function(e, n, r) {
                        var i = n.start
                            , a = n.duration;
                        return 0 === r && (e -= t - i),
                        e + a
                    }
                ), 0)
            }
            function B(t, n) {
                var r;
                if (isNaN(t))
                    return null;
                if (t = pt(t),
                    !n) {
                    var i = l.findPeriodByTime(t)
                        , a = D;
                    e === tt.VIDEO && (a = l.getVideoNearestBandwidth(D, i)),
                        n = l.getRepresentationByBandwidth(a, e, i, A)
                }
                var o = (null === (r = n) || void 0 === r ? void 0 : r.segmentList) || [];
                if (!o.length)
                    return null;
                (0 === t || t < o[0].start) && (t = pt(o[0].start));
                for (var s, u = 0, c = o.length - 1; u <= c; ) {
                    var d = o[s = (u + c) / 2 | 0]
                        , f = d.start
                        , h = d.duration
                        , p = pt(f)
                        , g = pt(p + h);
                    if (t >= p && t < g)
                        return d;
                    p > t ? c = s - 1 : u = s + 1
                }
                return null
            }
            function U() {
                var t;
                return null === (t = v) || void 0 === t ? void 0 : t.segmentList
            }
            function V(t, n) {
                var i = "".concat(n.id, "_").concat(t.adaptationSetId, "_").concat(t.id);
                if (E[i])
                    return Promise.resolve(E[i]);
                var a = function(t) {
                    var e = t.bandwidth
                        , n = t.id
                        , r = t.segmentTemplate;
                    return [t.url, r.initialization].join("").replace("$RepresentationID$", n).replace("$Bandwidth$", e)
                }(t)
                    , o = n.start
                    , s = n.end
                    , u = t.bandwidth
                    , c = t.id
                    , l = t.segmentTemplate
                    , d = l.presentationTimeOffset
                    , f = l.timescale
                    , h = {
                    appendWindowStart: o,
                    appendWindowEnd: s || 1 / 0,
                    bandwidth: u,
                    duration: 0,
                    index: -1,
                    mediaType: e,
                    offset: o - (d / f || 0),
                    representationId: c,
                    periodId: n.id,
                    type: "initialization"
                };
                return G(a).then((function(t) {
                        var e = t.data
                            , n = t.metric
                            , a = yt({}, h, {
                            data: e
                        });
                        return E[i] = a,
                            r.trigger("segmentDownloaded", yt({}, n, {
                                segmentInfo: h
                            })),
                            a
                    }
                )).catch((function(t) {
                        var e = t.error
                            , n = t.metric
                            , i = t.xhr;
                        e === w.b && r.trigger("failedToLoadSegment", yt({}, n, {
                            segmentInfo: h
                        }), i)
                    }
                ))
            }
            function H(t, e, n) {
                var i = gt(e, t)
                    , a = t.start
                    , o = t.duration
                    , s = t.index
                    , u = e.id
                    , c = e.bandwidth
                    , l = e.mediaType
                    , h = e.periodId;
                _ = !0;
                var p = {
                    bandwidth: c,
                    duration: o,
                    index: s,
                    mediaType: l,
                    representation: e,
                    representationId: u,
                    start: a,
                    periodId: h
                };
                return G(i, {
                    onProgress: function(t) {
                        t.bps > 0 && t.loaded > 5e3 && r.trigger("segmentProgress", yt({}, t, {
                            status: w.c,
                            buffer: n
                        }))
                    }
                }).then((function(e) {
                        var n = e.data
                            , i = e.metric;
                        y = t,
                            i.segmentInfo = p,
                            f.info("[".concat(d.getCurrentTime(), "] DOWNLOADED SEGMENT: [").concat(u, "]: start: ").concat(p.start, ", id: ").concat(s, ", bandwidth: ").concat(c / 1e3)),
                            b.push(yt({}, p, {
                                data: n
                            })),
                            r.trigger("segmentDownloaded", i)
                    }
                )).catch((function(t) {
                        var e = t.error
                            , n = t.metric
                            , i = t.xhr;
                        e === w.b && (n.segmentInfo = p,
                            r.trigger("failedToLoadSegment", n, i))
                    }
                )).then((function() {
                        S = null,
                            _ = !1
                    }
                ))
            }
            function G(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    , n = h || {}
                    , r = n.fragment
                    , i = void 0 === r ? {} : r
                    , o = i.retryAttempts
                    , s = i.retryDelay
                    , u = i.withCredentials;
                return w.d.getBinary(t, yt({}, e, {
                    cancelToken: new w.d.CancelToken((function(t) {
                            return S = t
                        }
                    )),
                    withCredentials: a || !!u
                }, o && {
                    retryAttempts: o
                }, {}, s && {
                    retryDelay: s
                }, {
                    headers: g,
                    params: m
                }))
            }
            function z(t) {
                f.trace("[".concat(d.getCurrentTime(), "] ").concat(t))
            }
            return {
                on: r.on.bind(r),
                off: r.off.bind(r),
                trigger: r.trigger.bind(r),
                switchAdaptation: function(t, e) {
                    var n = t.id
                        , r = t.lang;
                    void 0 !== n && (A = {
                        id: n,
                        lang: r
                    },
                        v = null,
                        k = !1,
                    e && (C(),
                        R()),
                        z("START SWITCHING: [".concat(n, "] ").concat(r)))
                },
                switchProfile: function(t, e) {
                    z("START SWITCHING PROFILE: ".concat(t)),
                        D = t,
                    e && (C(),
                        R())
                },
                getAdaptation: function() {
                    var t = v.adaptationSetId;
                    return l.getAdaptationSetById(t, x)
                },
                getBandwidth: function() {
                    return D
                },
                getPeriod: function() {
                    var t;
                    return null === (t = v) || void 0 === t ? void 0 : t.periodId
                },
                getRepresentation: function() {
                    return v
                },
                findSegmentByPosition: B,
                getNextSegmentToSwitch: function(t) {
                    var e, n, r, i, a = B(Math.round(t)), o = 0, s = 0;
                    if (null === a)
                        return null;
                    for (; o < a.duration && s < 4; )
                        n = a,
                            r = void 0,
                            i = void 0,
                            r = U(),
                            o = (e = (i = r.indexOf(n) + 1) >= r.length - 1 ? r[r.length - 1] : r[i]).start - t,
                            a = e,
                            s++;
                    return e
                },
                getQueue: function() {
                    return b
                },
                getQueueStart: function() {
                    return b.length ? b[0].start : null
                },
                getAllSegments: U,
                getQueueLengthFromTime: N,
                start: P,
                stop: function() {
                    k = !0,
                        M(),
                        y = null,
                        b = [],
                        T = !1
                },
                next: R,
                pause: I,
                abort: M,
                update: function() {
                    M(),
                        F(!1),
                        y = null,
                        R()
                },
                flush: F,
                resume: function() {
                    if (k)
                        return !1;
                    O = !1,
                    T || _ || P()
                },
                restart: function() {
                    E = {},
                        C()
                },
                isLastSegment: function(t) {
                    var e = t.index
                        , n = v || {}
                        , r = n.period
                        , i = n.lastSegment;
                    return r === l.getLastPeriod() && (null == i ? void 0 : i.index) === e
                },
                isProcessingRequest: function() {
                    return _
                }
            }
        }
        var Et = n(15);
        var _t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                    !0
            } catch (t) {
                return !1
            }
        }
            , Tt = Object(Et.a)((function(t) {
                function e(n, r, i) {
                    return _t() ? t.exports = e = Reflect.construct : t.exports = e = function(t, e, n) {
                        var r = [null];
                        r.push.apply(r, e);
                        var i = new (Function.bind.apply(t, r));
                        return n && Object(_.f)(i, n.prototype),
                            i
                    }
                        ,
                        e.apply(null, arguments)
                }
                t.exports = e
            }
        ))
            , St = "redgalaxy-player-bitrate"
            , Ot = function t() {
            Object(E.a)(this, t),
                this.start = null,
                this.startTime = null,
                this.duration = null,
                this.index = null
        }
            , wt = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                , e = t.presentationTimeOffset
                , n = t.timescale;
            return e / n || 0
        }
            , kt = function(t, e) {
            if (t.hasOwnSegments) {
                var n = t.duration
                    , r = t.indexMode
                    , i = t.segmentTemplate
                    , a = e.duration
                    , o = e.start
                    , s = i.segmentDuration
                    , u = i.startNumber
                    , c = i.timeline
                    , l = i.timescale
                    , d = (c || {}).timePoints
                    , f = t.isDynamic && !a
                    , h = o * l
                    , p = u
                    , g = [];
                if (r && f)
                    return g;
                if (s) {
                    var m = a || n
                        , v = Math.ceil(m / (s / l));
                    g = Array.from({
                        length: v
                    }).map((function(t, e) {
                            var n = new Ot;
                            return n.startTime = h + e * s,
                                n.start = n.startTime / l,
                                n.duration = s / l,
                                n.index = p + e,
                                n
                        }
                    ))
                } else if (d)
                    for (var y, b = (null === (y = d[0]) || void 0 === y ? void 0 : y.startTime) || 0, E = b - wt(i) * l + o * l, _ = 0, T = d.length; _ < T; _++)
                        for (var S = d[_].repeat || 0, O = 0; O <= S; O++) {
                            var w = new Ot
                                , k = d[_].duration;
                            w.index = p,
                                w.startTime = b,
                                w.start = E / l,
                                w.duration = k / l,
                                g.push(w),
                                p++,
                                b += k,
                                E += k
                        }
                return g
            }
        }
            , At = function(t, e) {
            var n = t.availabilityStartTime
                , r = t.dvrWindow
                , i = t.segmentList
                , a = t.segmentTemplate
                , o = t.timeShiftBufferDepth
                , s = a.timescale
                , u = a.startNumber
                , c = r > 0 ? r : o
                , l = wt(a)
                , f = a.segmentDuration / s
                , h = Math.max(0, Math.ceil(n - l))
                , p = function(t) {
                return t && t.length ? t[t.length - 1] : null
            }(i)
                , g = u
                , m = l ? e - (l + h) : c
                , v = l;
            l || (v = e - h - c,
                g += Math.floor(v / f)),
            p && (m = e - (h + l + p.start + f),
                v = p.start + f + l,
                g = p.index + 1);
            var y = Math.ceil(m / f);
            if (y) {
                var b = Array.from({
                    length: Math.min(1e5, y)
                }).map((function(t, e) {
                        var n = new Ot
                            , r = pt(v + e * f);
                        return n.startTime = r + h,
                            n.start = r - l,
                            n.duration = f,
                            n.index = g + e,
                            n
                    }
                ));
                i.push.apply(i, Object(d.a)(b))
            }
        };
        function Dt() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                    !0
            } catch (t) {
                return !1
            }
        }
        var xt = function(t) {
            Object(_.a)(r, t);
            var e, n = (e = r,
                    function() {
                        var t, n = Object(_.b)(e);
                        if (Dt()) {
                            var r = Object(_.b)(this).constructor;
                            t = Reflect.construct(n, arguments, r)
                        } else
                            t = n.apply(this, arguments);
                        return Object(_.c)(this, t)
                    }
            );
            function r() {
                var t;
                return Object(E.a)(this, r),
                    (t = n.call(this)).id = null,
                    t.segmentList = null,
                    t.adaptationSets = [],
                    t.timeline = null,
                    t.baseUrl = null,
                    t.start = null,
                    t.end = null,
                    t.duration = null,
                    t.segmentTemplate = null,
                    t.eventStreams = [],
                    t
            }
            return Object(E.b)(r, [{
                key: "createEvents",
                value: function(t) {
                    var e = this;
                    this.eventStreams = t.map((function(t) {
                            var n = dt(t, "Event")
                                , r = t.getAttribute("timescale") || 1e3;
                            return Object(d.a)(n).map((function(t) {
                                    var n = new Ct
                                        , i = parseInt(t.getAttribute("presentationTime")) / r;
                                    return n.id = t.getAttribute("id"),
                                        n.presentationTime = i,
                                        n.start = e.start + i,
                                        n.messageData = t.getAttribute("messageData") || t.textContent,
                                        n.eventData = t.textContent,
                                        n.event = t.getAttribute("event"),
                                        n
                                }
                            ))
                        }
                    ))
                }
            }]),
                r
        }(A.a)
            , Ct = function t() {
            Object(E.a)(this, t),
                this.id = void 0,
                this.start = void 0,
                this.messageData = void 0,
                this.eventData = void 0,
                this.fired = !1
        }
            , Pt = function() {
            function t() {
                Object(E.a)(this, t),
                    this.timePoints = []
            }
            return Object(E.b)(t, [{
                key: "parse",
                value: function(t) {
                    this.timePoints = t.map((function(t, e) {
                            var n = new Lt;
                            return n.index = e,
                                n.duration = parseInt(t.getAttribute("d")),
                                n.startTime = parseInt(t.getAttribute("t")),
                                n.repeat = parseInt(t.getAttribute("r")),
                                n
                        }
                    ))
                }
            }]),
                t
        }();
        function Lt() {
            this.index = null,
                this.startTime = null,
                this.duration = null,
                this.repeat = null
        }
        var Rt = function t() {
            Object(E.a)(this, t),
                this.timescale = 1,
                this.presentationTimeOffset = 0,
                this.segmentDuration = null,
                this.initialization = null,
                this.media = null,
                this.duration = null,
                this.startNumber = 1,
                this.timeline = null,
                this.hasIndex = !1,
                this.hasTimeline = !1
        }
            , jt = function t() {
            Object(E.a)(this, t),
                this.duration = null,
                this.maxSegmentDuration = 0,
                this.minBufferTime = 6,
                this.periods = [],
                this.baseUrl = null,
                this.location = null,
                this.type = null,
                this.minimumUpdatePeriod = null,
                this.maxSegmentDuration = null,
                this.publishTime = null,
                this.startTime = 0,
                this.availabilityStartTime = 0,
                this.availabilityEndTime = 0,
                this.UTCTiming = null,
                this.timeShiftBufferDepth = null,
                this.suggestedPresentationDelay = null
        }
            , It = function t() {
            Object(E.a)(this, t),
                this.period = null,
                this.availabilityEndTime = null,
                this.url = null,
                this.minBufferTime = null,
                this.duration = 0,
                this.publishTime = null,
                this.suggestedPresentationDelay = null,
                this.presentationTimeOffset = 0,
                this.timeShiftBufferDepth = null,
                this.segmentTemplate = null,
                this.codecs = null,
                this.mimeType = null,
                this.contentType = null,
                this.type = null,
                this.segmentList = null,
                this.lang = null,
                this.label = null,
                this.representations = [],
                this.availabilityStartTime = null,
                this.indexMode = !1,
                this.dvrWindow = -1,
                this.hasOwnSegments = !0,
                this.unsupportedCodecs = []
        }
            , Mt = function t() {
            Object(E.a)(this, t),
                this.id = void 0,
                this.adaptationSetId = void 0,
                this.period = void 0,
                this.bandwidth = void 0,
                this.mimeType = void 0,
                this.width = void 0,
                this.height = void 0,
                this.codecs = void 0,
                this.mimeCodec = void 0,
                this.mediaType = void 0,
                this.url = void 0,
                this.segmentList = void 0,
                this.segmentTemplate = void 0,
                this.hasOwnSegments = !0
        };
        function Ft(t) {
            var e, n;
            this.mpd = null,
                this.player = t,
                this.options = t.options,
                this.timeShift = t.timeShift,
                this.mediaItem = t.mediaItem,
                this.widevineConfig = (null === (e = this.player.mediaItem.getDrm()) || void 0 === e ? void 0 : e.widevine) || {},
                this.widevineSupportedConfigs = null === (n = this.player.supportedDrmSystems) || void 0 === n ? void 0 : n.filter((function(t) {
                        return t.keySystem === g.WIDEVINE
                    }
                ))
        }
        function Nt(t, e) {
            var n, r = ft(t, "BaseURL"), i = null;
            if (null !== r && null !== (n = r.textContent))
                if (Object(Z.b)(n))
                    i = n;
                else if (i = [e.slice(0, e.lastIndexOf("/")), n].join("/"),
                    n.startsWith("/"))
                    try {
                        i = "".concat(new URL(e).origin).concat(n)
                    } catch (t) {}
            return i
        }
        function Bt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                ))),
                    n.push.apply(n, r)
            }
            return n
        }
        function Ut() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                    !0
            } catch (t) {
                return !1
            }
        }
        Ft.prototype = {
            parse: function(t, e, n) {
                var r, i = this;
                this.mpd = new jt,
                    this.mpd.dvrWindow = this.timeShift.getDvrWindow();
                var a = (new DOMParser).parseFromString(t, "text/xml")
                    , o = ft(a, "MPD");
                if (null === o)
                    return null;
                n || (n = e),
                    n = n.split("?")[0],
                    this.mpd.timeStamp = (new Date).getTime(),
                    this.mpd.responseUrl = n,
                    this.mpd.type = o.getAttribute("type"),
                    this.mpd.duration = ut(o.getAttribute("mediaPresentationDuration")),
                    this.mpd.mediaPresentationDuration = ut(o.getAttribute("mediaPresentationDuration")),
                    this.mpd.minBufferTime = ut(o.getAttribute("minBufferTime")) || 0,
                    this.mpd.minimumUpdatePeriod = ut(o.getAttribute("minimumUpdatePeriod")),
                    this.mpd.maxSegmentDuration = ut(o.getAttribute("maxSegmentDuration")),
                    this.mpd.suggestedPresentationDelay = ut(o.getAttribute("suggestedPresentationDelay")) || 0,
                    this.mpd.timeShiftBufferDepth = ut(o.getAttribute("timeShiftBufferDepth")) || 0,
                    this.mpd.location = null === (r = ft(o, "Location")) || void 0 === r ? void 0 : r.textContent,
                    this.mpd.periods = [],
                    this.mpd.availabilityStartTime = lt(o.getAttribute("availabilityStartTime")) || 0;
                var s = ft(o, "UTCTiming");
                s && (this.mpd.utcTiming = {
                    schemeIdUri: s.getAttribute("schemeIdUri"),
                    value: s.getAttribute("value")
                });
                var u = Nt(o, n);
                null === this.mpd.duration && (this.mpd.duration = Number.MAX_VALUE),
                null !== this.mpd.mediaPresentationDuration && (this.mpd.duration = this.mpd.mediaPresentationDuration),
                    this.mpd.availabilityStartTime = lt(o.getAttribute("availabilityStartTime")) || 0,
                    this.mpd.availabilityEndTime = lt(o.getAttribute("availabilityEndTime")) || 0,
                this.mpd.availabilityStartTime && this.mpd.mediaPresentationDuration && !this.mpd.availabilityEndTime && (this.mpd.availabilityEndTime = this.mpd.availabilityStartTime + this.mpd.mediaPresentationDuration),
                    this.mpd.startTime = 0,
                    this.mpd.publishTime = o.getAttribute("publishTime");
                var c = Array.from(dt(o, "Period") || []).map((function(t) {
                        return i.createPeriod(t, u, n)
                    }
                ));
                c.forEach((function(t, e) {
                        var n = c[e - 1] || {};
                        n && (n.end = t.start,
                            n.duration = t.start - n.start),
                            t.adaptationSets.forEach((function(e) {
                                    e.segmentList = kt(e, t),
                                        e.representations.forEach((function(n) {
                                                n.segmentList = kt(n, t),
                                                n.hasOwnSegments || (n.segmentList = e.segmentList)
                                            }
                                        ))
                                }
                            ))
                    }
                ));
                var d = this.widevineConfig.multikey;
                if (d && this.widevineSupportedConfigs.length) {
                    var f = c.flatMap((function(t) {
                            var e = t.adaptationSets;
                            return null == e ? void 0 : e.flatMap((function(t) {
                                    return t.representations
                                }
                            ))
                        }
                    )).filter((function(t) {
                            return t.mediaType === tt.VIDEO
                        }
                    )).sort((function(t, e) {
                            return e.height - t.height
                        }
                    ))
                        , h = Object(l.a)(f, 1)[0]
                        , p = h && d.find((function(t) {
                            return t.maxHeight >= h.height
                        }
                    ));
                    this.widevineConfig.multikeySrc = null == p ? void 0 : p.src
                }
                return this.mpd.periods = c,
                    this.mpd
            },
            createPeriod: function(t, e, n) {
                var r = new xt
                    , i = dt(t, "AdaptationSet")
                    , a = Nt(t, n);
                null === a && (a = e),
                    r.id = t.getAttribute("id") || "period_".concat(Date.now()),
                    r.start = ut(t.getAttribute("start")),
                    r.baseUrl = a || function(t) {
                        var e = t.lastIndexOf("/");
                        return e = -1 === e ? t.length : e + 1,
                            t.substring(0, e)
                    }(n),
                    r.segmentTemplate = this.createSegmentTemplate(t),
                    this.createAdaptationSets(this.mpd, r, i);
                var o = dt(t, "EventStream");
                return o.length && r.createEvents(o),
                    r
            },
            createAdaptationSets: function(t, e, n) {
                for (var r = 1, i = !0, a = void 0, o = 0; o < n.length; o++) {
                    var s = n[o]
                        , u = this.getAdaptationSetType(s);
                    if (a = u === tt.AUDIO ? a || s : a,
                        !this.shouldDiscardAdaptation(s, u)) {
                        u === tt.AUDIO && (i = !1);
                        var c = this.createAdaptationSet(t, e, s, {
                            trackId: r,
                            type: u
                        });
                        c.representations.length && (c.type !== tt.VIDEO && r++,
                            e.adaptationSets.push(c))
                    }
                }
                if (i && a) {
                    var l = this.createAdaptationSet(t, e, a, {
                        trackId: r,
                        type: tt.AUDIO
                    });
                    e.adaptationSets.push(l)
                }
            },
            createAdaptationSet: function(t, e, n, r) {
                var i, a, o, s = this, u = new It, c = r.trackId, d = r.type;
                u.periodId = e.id,
                    u.url = e.baseUrl,
                    u.segmentTemplate = this.createSegmentTemplate(n, e.segmentTemplate || {}),
                u.segmentTemplate || (u.hasOwnSegments = !1),
                    u.indexMode = u.segmentTemplate && u.segmentTemplate.duration && !u.segmentTemplate.hasTimeline,
                    u.publishTime = this.mpd.publishTime,
                    u.dvrWindow = t.dvrWindow,
                    u.timeShiftBufferDepth = this.mpd.timeShiftBufferDepth,
                    u.suggestedPresentationDelay = this.mpd.suggestedPresentationDelay,
                    u.availabilityStartTime = this.mpd.availabilityStartTime,
                    u.suggestedPresentationDelay = this.mpd.suggestedPresentationDelay,
                    u.availabilityEndTime = this.mpd.availabilityEndTime,
                    u.duration = this.mpd.duration,
                    u.minBufferTime = this.mpd.minBufferTime,
                    u.isDynamic = "dynamic" === this.mpd.type,
                    t.indexMode = u.indexMode,
                    u.codecs = n.getAttribute("codecs"),
                    u.lang = n.getAttribute("lang"),
                    u.label = n.getAttribute("label"),
                    u.mimeType = n.getAttribute("mimeType"),
                    u.type = d,
                    u.accessibility = null === (i = ft(n, "Accessibility")) || void 0 === i ? void 0 : i.getAttribute("value"),
                    u.role = null === (a = ft(n, "Role")) || void 0 === a ? void 0 : a.getAttribute("value"),
                n.getAttribute("id") && (u.id = parseInt(n.getAttribute("id"))),
                u.type !== tt.VIDEO && isNaN(u.id) && (u.id = c);
                for (var f = dt(n, "Representation"), h = function(n) {
                    var r = s.createRepresentation(u, f[n])
                        , i = r.hasOwnSegments
                        , a = r.mediaType
                        , o = r.mimeCodec
                        , c = r.segmentTemplate;
                    if (r.periodId = e.id,
                    i && c.hasIndex && !c.hasTimeline && (t.indexMode = !0),
                    [tt.AUDIO, tt.VIDEO].includes(a) && o && !window.MediaSource.isTypeSupported(o))
                        return u.unsupportedCodecs.push(o),
                            "continue";
                    var l = (s.widevineConfig || {}).multikey;
                    if (a === tt.VIDEO && l && s.widevineSupportedConfigs.length && !!!(null == l ? void 0 : l.find((function(t) {
                            var e = t.maxHeight
                                , n = t.securityLevel;
                            return r.height <= e && s.widevineSupportedConfigs.find((function(t) {
                                    return t.level === n
                                }
                            ))
                        }
                    ))))
                        return "continue";
                    u.representations.push(r)
                }, p = 0; p < f.length; p++)
                    h(p);
                if (null === (o = u.representations) || void 0 === o ? void 0 : o.length) {
                    var g = Object(l.a)(u.representations, 1)[0];
                    null === u.mimeType && null !== g.mimeType && (u.mimeType = g.mimeType),
                    u.codecs || (u.codecs = g.codecs),
                    u.codecs && (u.contentType = "".concat(u.mimeType, ';codecs="').concat(u.codecs, '"'))
                }
                return u.representations.sort(this.sortFn),
                    u
            },
            getAdaptationSetType: function(t) {
                var e = mt(t);
                if (!e) {
                    var n = dt(t, "Representation")
                        , r = Object(l.a)(n, 1)[0];
                    return mt(r)
                }
                return e
            },
            createRepresentation: function(t, e) {
                var n = new Mt;
                return n.id = e.getAttribute("id"),
                    n.adaptationSetId = t.id,
                    n.bandwidth = parseInt(e.getAttribute("bandwidth")),
                    n.mimeType = e.getAttribute("mimeType"),
                    n.width = parseInt(e.getAttribute("width")),
                    n.height = parseInt(e.getAttribute("height")),
                    n.mediaType = t.type,
                    n.url = t.url,
                    n.segmentList = t.segmentList,
                    n.availabilityStartTime = t.availabilityStartTime,
                    n.timeShiftBufferDepth = t.timeShiftBufferDepth,
                    n.codecs = e.getAttribute("codecs"),
                "mp4a.40.1" === n.codecs && (n.codecs = "mp4a.40.2"),
                n.codecs && t.mimeType && (n.mimeCodec = "".concat(t.mimeType, ';codecs="').concat(n.codecs, '"')),
                    n.segmentTemplate = this.createSegmentTemplate(e),
                !n.segmentTemplate && t.segmentTemplate && (n.hasOwnSegments = !1,
                    n.segmentTemplate = t.segmentTemplate),
                    n
            },
            createSegmentTemplate: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    , n = e.initialization
                    , r = e.media
                    , i = e.startNumber
                    , a = void 0 === i ? 1 : i
                    , o = ft(t, "SegmentTemplate");
                if (o) {
                    var s = ft(o, "SegmentTimeline")
                        , u = new Rt;
                    if (u.timeline = new Pt,
                        s) {
                        var c = dt(s, "S");
                        u.timeline.parse(c)
                    }
                    u.timescale = parseInt(o.getAttribute("timescale")) || 1,
                        u.segmentDuration = parseInt(o.getAttribute("duration"));
                    var l = o.getAttribute("startNumber");
                    return u.hasIndex = !!l,
                        u.hasTimeline = !!s,
                        u.startNumber = null !== l ? parseInt(l, 10) : a,
                        u.duration = parseInt(o.getAttribute("duration")),
                        u.presentationTimeOffset = parseInt(o.getAttribute("presentationTimeOffset")) || 0,
                        u.initialization = o.getAttribute("initialization") || n,
                        u.media = o.getAttribute("media") || r,
                        u
                }
            },
            shouldDiscardAdaptation: function(t, e) {
                var n = this.options.get(o.b)
                    , r = this.options.get(o.C)
                    , i = t.getAttribute("lang");
                if (i)
                    return n && e === tt.AUDIO ? !n.includes(i) : r && e === tt.TEXT ? !r.includes(i) : void 0
            },
            sortFn: function(t, e) {
                return e.bandwidth - t.bandwidth
            },
            update: function(t, e, n) {
                var r = this
                    , i = this.timeShift.getDvrWindow() > 0 ? this.timeShift.getDvrWindow() : n;
                if (e.periods.forEach((function(e) {
                        var i = t.periods.find((function(t) {
                                return t.start === e.start
                            }
                        ))
                            , a = t.periods.find((function(t) {
                                var n = t.start
                                    , r = t.end;
                                return n === e.start && !r
                            }
                        ));
                        i || t.periods.push(e),
                        a && r.updatePeriod(a, e, n)
                    }
                )),
                    t.periods.sort((function(t, e) {
                            return t.start - e.start
                        }
                    )),
                t.periods.length > 1) {
                    var a = Object(l.a)(t.periods, 1)[0]
                        , o = t.periods.slice(-1)
                        , s = Object(l.a)(o, 1)[0]
                        , u = s.start - a.start;
                    i > 0 && u > i && (t.periods = t.periods.reduce((function(t, e) {
                            return (e.end || e.start) >= s.start - i && t.push(e),
                                t
                        }
                    ), []))
                }
                return this.updatePeriodsDuration(t.periods),
                    t.publishTime = e.publishTime,
                    t.baseUrl = e.baseUrl,
                    t.minimumUpdatePeriod = e.minimumUpdatePeriod,
                    t
            },
            updatePeriod: function(t, e, n) {
                for (var r = this, i = function(i) {
                    var a = t.adaptationSets[i]
                        , o = e.adaptationSets[i]
                        , s = a.segmentList
                        , u = o.segmentList;
                    a.url = o.url,
                    (null == u ? void 0 : u.length) > 0 && (a.segmentList = r.merge(s, u, n)),
                        a.representations.forEach((function(t, e) {
                                var i = o.representations[e];
                                (null == i ? void 0 : i.segmentList) && (t.segmentList = r.merge(t.segmentList, i.segmentList, n),
                                    t.url = o.url,
                                    t.segmentTemplate = i.segmentTemplate)
                            }
                        ))
                }, a = 0; a < e.adaptationSets.length; a++)
                    i(a)
            },
            updatePeriodsDuration: function(t) {
                var e;
                t.forEach((function(t) {
                        if (e) {
                            var n = e
                                , r = n.duration
                                , i = n.start;
                            e.end = t.start,
                                e.duration = t.start - i,
                            r || e.trigger(u.q, e)
                        }
                        e = t
                    }
                ))
            },
            merge: function(t, e) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, i = [], a = Object(l.a)(e, 1), o = a[0];
                if (!o)
                    return t;
                t = t.filter((function(t) {
                        return o.start > t.start
                    }
                ));
                var s = (n = [].concat(Object(d.a)(t), Object(d.a)(e)))[0].index
                    , u = n.slice(-1)
                    , c = Object(l.a)(u, 1)
                    , f = c[0]
                    , h = 0 === r ? 0 : f.start - r;
                return n.forEach((function(t) {
                        t.index > s && (s = t.index),
                            t.index = s,
                        t.start > h && (i.push(t),
                            s++)
                    }
                )),
                    i
            }
        };
        var Vt = function(t) {
            Object(_.a)(i, t);
            var e, n = (e = i,
                    function() {
                        var t, n = Object(_.b)(e);
                        if (Ut()) {
                            var r = Object(_.b)(this).constructor;
                            t = Reflect.construct(n, arguments, r)
                        } else
                            t = n.apply(this, arguments);
                        return Object(_.c)(this, t)
                    }
            );
            function i(t, e) {
                var r, a, u, c, l;
                return Object(E.a)(this, i),
                    l = n.call(this),
                    e.addComponent(Object(_.d)(l), s.a),
                    l.video = t,
                    l.player = e,
                    l.logger = at.get("manifest"),
                    l.options = l.player.options,
                    l.httpConfig = l.options.get(o.i),
                    l.headers = null === (r = l.httpConfig) || void 0 === r || null === (a = r.manifest) || void 0 === a ? void 0 : a.headers,
                    l.params = null === (u = l.httpConfig) || void 0 === u || null === (c = u.manifest) || void 0 === c ? void 0 : c.params,
                    l.streamWithCredentials = l.options.get(o.t),
                    l.minimumUpdatePeriodEnabled = l.options.get(o.n),
                    l.timeShift = l.player.timeShift,
                    l.utcTime = new Z.a(e),
                    l.manifest = null,
                    l.parser = new Ft(e),
                    l.updating = !1,
                    l.adaptations = [],
                    l.videoAdaptation = null,
                    l.audioAdaptation = null,
                    l.cancelRequest = function() {}
                    ,
                    l.monitorTimer = null,
                    l.headSegmentIndex = -1,
                    l.duration = -1,
                    l.url = null,
                    l.utcHeadTime = 0,
                    l
            }
            return Object(E.b)(i, [{
                key: "monitor",
                value: function() {
                    var t = this.manifest.location || this.url;
                    if (this.isIndexMode()) {
                        var e = this.utcTime.getTime();
                        if (e > 0) {
                            this.updateTimeLine(e),
                                this.utcHeadTime = e - this.parser.mpd.availabilityStartTime;
                            var n = ((new Date).getTime() - this.parser.mpd.timeStamp) / 1e3;
                            this.minimumUpdatePeriodEnabled && n > this.manifest.minimumUpdatePeriod && this.update(Object(Z.c)(t, "startTime"))
                        }
                    } else
                        this.updating || this.update(t)
                }
            }, {
                key: "load",
                value: function(t) {
                    var e = this;
                    return this.url = t,
                        this.updating = !0,
                        this.abort(),
                    this.monitorTimer && this.monitorTimer.stop(),
                        this.fetch(this.url).then(function() {
                            var t = Object(c.a)(c.b.mark((function t(n) {
                                    var r, i, a, o, s, l;
                                    return c.b.wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                    case 0:
                                                        if (r = n.metric,
                                                            i = n.data,
                                                            a = n.url,
                                                            o = n.responseUrl,
                                                            e.sendMetric(r),
                                                            e.manifest = e.parse(i, a, o),
                                                            e.adaptations = e.getAllAdaptationSets(),
                                                            e.videoAdaptation = e.getAdaptationSetByType(tt.VIDEO),
                                                            e.audioAdaptation = e.getAdaptationSetByType(tt.AUDIO),
                                                            e.duration = e.manifest.duration,
                                                            e.updating = !1,
                                                            !e.isLive()) {
                                                            t.next = 18;
                                                            break
                                                        }
                                                        return t.next = 11,
                                                            e.utcTime.sync(e.manifest.utcTiming);
                                                    case 11:
                                                        s = t.sent,
                                                            e.trigger(u.i, s),
                                                            l = 1e3 * e.manifest.minimumUpdatePeriod || 2e3,
                                                        e.isIndexMode() && (l = 1e3),
                                                            e.monitorTimer = new $.a(l,(function() {
                                                                    return e.monitor()
                                                                }
                                                            )),
                                                            e.monitorTimer.start(),
                                                        e.isIndexMode() && e.monitor();
                                                    case 18:
                                                        return e.logger.info("MANIFEST LOADED: duration: ".concat(r.duration / 1e3, ", url: ").concat(e.url)),
                                                            e.trigger(u.C, e.manifest),
                                                            t.abrupt("return", e.manifest);
                                                    case 21:
                                                    case "end":
                                                        return t.stop()
                                                }
                                        }
                                    ), t)
                                }
                            )));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()).catch((function(n) {
                                var r = n.error
                                    , i = n.metric
                                    , a = n.xhr;
                                if (e.updating = !1,
                                r === w.b)
                                    return e.sendMetric(i),
                                        e.logger.error("MANIFEST LOADED: duration: ".concat(i.duration / 1e3, ", url: ").concat(e.url)),
                                        Promise.reject({
                                            error: "failedToLoadManifest",
                                            url: t,
                                            xhr: a
                                        })
                            }
                        ))
                }
            }, {
                key: "update",
                value: function(t) {
                    var e = this;
                    this.updating = !0;
                    var n = 0;
                    this.timeShift.isEnabled() || (n = 60),
                    this.parser.mpd.timeShiftBufferDepth && (n = this.parser.mpd.timeShiftBufferDepth),
                        this.fetch(t).then(function() {
                            var r = Object(c.a)(c.b.mark((function r(i) {
                                    var a, o, s, l, d, f, h;
                                    return c.b.wrap((function(r) {
                                            for (; ; )
                                                switch (r.prev = r.next) {
                                                    case 0:
                                                        return a = i.metric,
                                                            o = i.data,
                                                            s = i.url,
                                                            l = i.responseUrl,
                                                            d = e.parse(o, s, l),
                                                            f = e.manifest.minimumUpdatePeriod,
                                                            r.next = 5,
                                                            e.utcTime.syncDirect(d.utcTiming);
                                                    case 5:
                                                        return e.sendMetric(a),
                                                            e.manifest = e.parser.update(e.manifest, d, n),
                                                            e.trigger(u.i, e.utcTime.getTime()),
                                                            e.trigger(u.fb, e.manifest),
                                                            e.updating = !1,
                                                            h = e.manifest.minimumUpdatePeriod,
                                                        f === h || e.isIndexMode() || e.monitorTimer.restart(1e3 * h),
                                                            e.logger.info("MANIFEST UPDATED: duration: ".concat(a.duration / 1e3, ", url: ").concat(t)),
                                                            r.abrupt("return", e.manifest);
                                                    case 14:
                                                    case "end":
                                                        return r.stop()
                                                }
                                        }
                                    ), r)
                                }
                            )));
                            return function(t) {
                                return r.apply(this, arguments)
                            }
                        }()).catch((function(n) {
                                var r = n.error
                                    , i = n.metric;
                                r === w.b && (e.trigger(u.n),
                                    e.logger.error("MANIFEST LOADED: duration: ".concat(i.duration / 1e3, ", url: ").concat(t)),
                                    e.sendMetric(i)),
                                    e.updating = !1
                            }
                        ))
                }
            }, {
                key: "fetch",
                value: function(t) {
                    var e = this
                        , n = this.httpConfig.manifest
                        , i = void 0 === n ? {} : n
                        , a = i.retryAttempts
                        , o = i.retryDelay
                        , s = i.withCredentials;
                    return w.d.get(t, function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? Bt(Object(n), !0).forEach((function(e) {
                                    Object(r.a)(t, e, n[e])
                                }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Bt(Object(n)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                }
                            ))
                        }
                        return t
                    }({
                        cancelToken: new w.d.CancelToken((function(t) {
                                return e.cancelRequest = t
                            }
                        )),
                        withCredentials: this.streamWithCredentials || !!s
                    }, a && {
                        retryAttempts: a
                    }, {}, o && {
                        retryDelay: o
                    }, {
                        headers: this.headers,
                        params: this.params
                    }))
                }
            }, {
                key: "sendMetric",
                value: function(t) {
                    this.player.trigger(u.o, {
                        duration: t.duration,
                        status: t.status,
                        statusCode: t.statusCode,
                        timestamp: (new Date).getTime(),
                        url: t.url,
                        type: "MANIFEST"
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    this.monitorTimer && this.monitorTimer.stop(),
                        this.utcTime.stop(),
                        this.abort()
                }
            }, {
                key: "abort",
                value: function() {
                    this.cancelRequest()
                }
            }, {
                key: "getPresentationTimeOffset",
                value: function() {
                    return this.manifest.presentationTimeOffset
                }
            }, {
                key: "parse",
                value: function(t, e, n) {
                    return this.parser.parse(t, e, n)
                }
            }, {
                key: "updateManifest",
                value: function(t, e, n) {
                    return this.parser.update(t, e, n)
                }
            }, {
                key: "isIndexMode",
                value: function() {
                    return this.manifest && this.manifest.indexMode
                }
            }, {
                key: "isLive",
                value: function() {
                    return this.manifest && "dynamic" === this.manifest.type
                }
            }, {
                key: "getLiveDelay",
                value: function() {
                    var t = Math.max(this.options.get(o.vb), this.suggestedPresentationDelay);
                    return this.startBufferLength && (t = this.startBufferLength),
                    this.options.get(o.m) || t
                }
            }, {
                key: "getAudioProfiles",
                value: function(t) {
                    return this.getRepresentationsByType(tt.AUDIO, t)
                }
            }, {
                key: "getVideoProfiles",
                value: function(t) {
                    return this.getAdaptationSetsByType(tt.VIDEO, t).reduce((function(t, e) {
                            var n = e.representations;
                            return [].concat(Object(d.a)(t), Object(d.a)(n))
                        }
                    ), []).sort((function(t, e) {
                            return e.bandwidth - t.bandwidth
                        }
                    ))
                }
            }, {
                key: "getVideoNearestBandwidth",
                value: function(t, e) {
                    var n = this.getVideoProfiles(e).map((function(t) {
                            return t.bandwidth
                        }
                    ));
                    return n.find((function(e) {
                            return t >= e
                        }
                    )) || n[n.length - 1]
                }
            }, {
                key: "getTextAdaptations",
                value: function() {
                    return this.getAdaptationsSetByType(tt.TEXT)
                }
            }, {
                key: "getAudioAdaptations",
                value: function(t) {
                    return this.getAdaptations(tt.AUDIO, t)
                }
            }, {
                key: "getAudioAdaptation",
                value: function(t, e) {
                    var n = this.getAudioAdaptations(e)
                        , r = "string" == typeof t ? "lang" : "id";
                    return n.find((function(e) {
                            return e[r] === t
                        }
                    ))
                }
            }, {
                key: "getAudioTracks",
                value: function() {
                    return this.getAudioAdaptations().map((function(t) {
                            return new X.a(t)
                        }
                    ))
                }
            }, {
                key: "updateTimeLine",
                value: function(t) {
                    var e = this.getPeriods().slice().reverse()
                        , n = Object(l.a)(e, 1)[0];
                    this.getAllAdaptationSets(n).forEach((function(e) {
                            e.segmentTemplate && At(e, t),
                                e.representations.forEach((function(e) {
                                        e.hasOwnSegments && e.segmentTemplate.hasIndex && At(e, t)
                                    }
                                ))
                        }
                    ))
                }
            }, {
                key: "getLastSegmentEndTimeByType",
                value: function(t) {
                    var e = this.getRepresentationsByType(t)
                        , n = (Object(l.a)(e, 1)[0] || {}).segmentList
                        , r = (null == n ? void 0 : n[(null == n ? void 0 : n.length) - 1]) || {};
                    return r.start + r.duration
                }
            }, {
                key: "getFirstSegmentStartTimeByType",
                value: function(t) {
                    var e, n, r = this.getRepresentationsByType(t), i = Object(l.a)(r, 1)[0];
                    return (null == i || null === (e = i.segmentList) || void 0 === e || null === (n = e[0]) || void 0 === n ? void 0 : n.start) || 0
                }
            }, {
                key: "getStartTime",
                value: function() {
                    return Math.max(this.getFirstSegmentStartTimeByType(tt.VIDEO), this.getFirstSegmentStartTimeByType(tt.AUDIO))
                }
            }, {
                key: "getAdaptations",
                value: function(t, e, n) {
                    return this.manifest && this.getAdaptationsSetByType(t, e, n)
                }
            }, {
                key: "getAllAdaptationSets",
                value: function(t) {
                    return this.getPeriod(t).adaptationSets
                }
            }, {
                key: "getAdaptationSetMimeType",
                value: function(t) {
                    var e = this.getAdaptations(t)
                        , n = Object(l.a)(e, 1)[0];
                    return n && "".concat(n.mimeType, "; codecs=").concat(n.codecs)
                }
            }, {
                key: "getPeriods",
                value: function() {
                    var t;
                    return null === (t = this.manifest) || void 0 === t ? void 0 : t.periods
                }
            }, {
                key: "getPeriod",
                value: function(t) {
                    var e, n;
                    return (null === (e = this.getPeriods()) || void 0 === e ? void 0 : e.find((function(e) {
                            var n = e.id
                                , r = e.start;
                            return n === (null == t ? void 0 : t.id) && r === (null == t ? void 0 : t.start)
                        }
                    ))) || (null === (n = this.getPeriods()) || void 0 === n ? void 0 : n[0])
                }
            }, {
                key: "getNextPeriod",
                value: function(t) {
                    var e = this.getPeriods()
                        , n = e.indexOf(t);
                    return n >= 0 && e[n + 1]
                }
            }, {
                key: "getLastPeriod",
                value: function() {
                    var t = this.getPeriods();
                    return t[t.length - 1]
                }
            }, {
                key: "getPeriodById",
                value: function(t) {
                    var e, n;
                    return (null === (e = this.getPeriods()) || void 0 === e ? void 0 : e.find((function(e) {
                            return e.id === t
                        }
                    ))) || (null === (n = this.getPeriods()) || void 0 === n ? void 0 : n[0])
                }
            }, {
                key: "getAdaptationSetById",
                value: function(t, e) {
                    var n;
                    return null === (n = this.getPeriod(e)) || void 0 === n ? void 0 : n.adaptationSets.find((function(e) {
                            return e.id === t
                        }
                    ))
                }
            }, {
                key: "getAdaptationsSetByType",
                value: function(t, e) {
                    var n;
                    return null === (n = this.getPeriod(e)) || void 0 === n ? void 0 : n.adaptationSets.filter((function(e) {
                            return e.type === t
                        }
                    ))
                }
            }, {
                key: "getAdaptationSetsByType",
                value: function(t, e, n) {
                    var r = this.getAdaptationsSetByType(t, e);
                    if (n) {
                        var i = n.id
                            , a = n.lang;
                        return r.filter((function(t) {
                                var e = t.id
                                    , n = t.lang;
                                return e === i && n === a
                            }
                        )) || r.filter((function(t) {
                                return t.lang === a
                            }
                        )) || r
                    }
                    return r
                }
            }, {
                key: "getAdaptationSetByType",
                value: function(t, e, n) {
                    var r;
                    return (null === (r = this.getAdaptationSetsByType(t, e, n)) || void 0 === r ? void 0 : r[0]) || null
                }
            }, {
                key: "getRepresentationsByType",
                value: function(t, e) {
                    var n = this.getAdaptationSetByType(t, e);
                    return null === n ? [] : n.representations
                }
            }, {
                key: "getRepresentationByBandwidth",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tt.VIDEO
                        , n = arguments.length > 2 ? arguments[2] : void 0
                        , r = arguments.length > 3 ? arguments[3] : void 0
                        , i = this.getAdaptationSetsByType(e, n, r)
                        , a = i.reduce((function(t, e) {
                            var n = e.representations;
                            return [].concat(Object(d.a)(t), Object(d.a)(n))
                        }
                    ), [])
                        , o = t || this.getAverageBandwidth(a);
                    return a.find((function(t) {
                            return t.bandwidth === parseInt(o, 10)
                        }
                    )) || null
                }
            }, {
                key: "getAverageBandwidth",
                value: function(t) {
                    var e = t.map((function(t) {
                            return t.bandwidth
                        }
                    ));
                    return e[Math.floor(e.length / 2) - (e.length % 2 == 0 ? 1 : 0)]
                }
            }, {
                key: "findPeriodByTime",
                value: function(t) {
                    var e = this.manifest.periods;
                    return (null == e ? void 0 : e.find((function(e) {
                            var n = e.start
                                , r = e.end;
                            return t >= n && t < (r || 1 / 0)
                        }
                    ))) || (null == e ? void 0 : e[0])
                }
            }, {
                key: "minBufferTime",
                get: function() {
                    return this.options.get(o.wb) || 0
                }
            }, {
                key: "maxBufferLength",
                get: function() {
                    var t = this.options.get(o.xb);
                    return this.startBufferLength >= t ? this.startBufferLength + 1 : t
                },
                set: function(t) {
                    this.options.set(o.xb, t)
                }
            }, {
                key: "startBufferLength",
                get: function() {
                    return this.options.get(o.yb)
                }
            }, {
                key: "minAutoBitrate",
                get: function() {
                    return this.options.get(o.zb)
                }
            }, {
                key: "maxAutoBitrate",
                get: function() {
                    return this.options.get(o.Ab)
                }
            }, {
                key: "suggestedPresentationDelay",
                get: function() {
                    var t;
                    return null === (t = this.manifest) || void 0 === t ? void 0 : t.suggestedPresentationDelay
                }
            }, {
                key: "segmentDuration",
                get: function() {
                    return this.videoAdaptation.segmentTemplate ? this.videoAdaptation.segmentTemplate.segmentDuration ? this.videoAdaptation.segmentTemplate.segmentDuration / this.videoAdaptation.segmentTemplate.timescale : this.videoAdaptation.segmentList.length ? this.videoAdaptation.segmentList[0].duration : 0 : 0
                }
            }]),
                i
        }(A.a)
            , Ht = {
            HAVE_NOTHING: 0,
            HAVE_METADATA: 1,
            HAVE_CURRENT_DATA: 2,
            HAVE_FUTURE_DATA: 3,
            HAVE_ENOUGH_DATA: 4
        }
            , Gt = function() {
            function t(e) {
                Object(E.a)(this, t),
                    this.taskQueue = [],
                    this.sourceBuffer = e
            }
            return Object(E.b)(t, [{
                key: "addTask",
                value: function(t) {
                    var e, n, r = new Promise((function(t, r) {
                            e = t,
                                n = r
                        }
                    )), i = {
                        fn: t,
                        p: {
                            resolve: e,
                            reject: n
                        }
                    };
                    return this.taskQueue.push(i),
                    1 === this.taskQueue.length && this.runTask(),
                        r
                }
            }, {
                key: "runTask",
                value: function() {
                    var t = Object(l.a)(this.taskQueue, 1)[0];
                    if (t && !this.sourceBuffer.updating)
                        try {
                            t.result = t.fn()
                        } catch (e) {
                            this.taskQueue.shift(),
                                t.p.reject(e),
                                this.runTask()
                        }
                }
            }, {
                key: "onSuccess",
                value: function() {
                    var t = this.taskQueue.shift();
                    t.p.resolve(t.result),
                        this.runTask()
                }
            }, {
                key: "onError",
                value: function(t) {
                    Object(l.a)(this.taskQueue, 1)[0].p.reject(t)
                }
            }, {
                key: "empty",
                value: function() {
                    for (var t; t = this.taskQueue.shift(); )
                        t.p.reject()
                }
            }, {
                key: "currentTask",
                get: function() {
                    return this.taskQueue[0]
                }
            }]),
                t
        }();
        function zt(t, e) {
            var n = t.addSourceBuffer(e)
                , r = new Gt(n)
                , i = 0
                , a = 1 / 0;
            function o(t, e) {
                i = t,
                    a = e,
                    n.appendWindowStart = 0,
                    n.appendWindowEnd = a,
                    n.appendWindowStart = i,
                    l()
            }
            function s(t) {
                for (var e = u() || [], n = 0; n < e.length; n++) {
                    var r = e.start(n)
                        , i = e.end(n);
                    if (t >= r && t < i)
                        return {
                            start: r,
                            end: i
                        }
                }
                return null
            }
            function u() {
                try {
                    return n.buffered
                } catch (t) {}
            }
            function c(t) {
                return r.addTask(t)
            }
            function l() {
                r.onSuccess()
            }
            function d(t) {
                r.onError(t)
            }
            return n.mimeType = e,
                n.addEventListener("updateend", l),
                n.addEventListener("error", d),
                n.addEventListener("abort", d),
                {
                    abort: function() {
                        var t;
                        if (!(null === (t = r.currentTask) || void 0 === t ? void 0 : t.fn.toString().includes("remove")))
                            try {
                                n.abort(),
                                    c((function() {
                                            return o(i, a)
                                        }
                                    ))
                            } catch (t) {}
                    },
                    appendBuffer: function(t) {
                        return n.appendBuffer(t.data),
                            t
                    },
                    destroy: function() {
                        n.removeEventListener("updateend", l),
                            n.removeEventListener("error", d),
                            n.removeEventListener("abort", d),
                            r.empty()
                    },
                    getBufferRange: s,
                    getBufferRanges: function() {
                        for (var t = u() || [], e = [], n = 0; n < t.length; n++) {
                            var r = t.start(n)
                                , i = t.end(n);
                            e.push({
                                start: r,
                                end: i
                            })
                        }
                        return e
                    },
                    getBufferLength: function(t) {
                        var e = s(t);
                        return e ? e.end - t : 0
                    },
                    getAppendWindow: function() {
                        return {
                            appendWindowStart: n.appendWindowStart,
                            appendWindowEnd: n.appendWindowEnd
                        }
                    },
                    queue: c,
                    remove: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                            , r = arguments.length > 1 ? arguments[1] : void 0;
                        n.remove(e, r || t.duration || Number.MAX_VALUE)
                    },
                    setAppendWindow: o,
                    setTimestampOffset: function(t) {
                        n.timestampOffset = t,
                            l()
                    }
                }
        }
        function Yt(t, e, n) {
            var r = this
                , i = at.get("".concat(e, "-stream"))
                , a = t.getComponent(s.a)
                , o = t.getComponent(s.d)
                , d = t.getComponent(s.e)
                , f = !1
                , h = !1
                , p = null
                , g = !1
                , m = !1
                , v = 0
                , y = !1
                , b = !1
                , E = void 0
                , _ = a.maxBufferLength
                , T = new bt(t,e,w);
            T.on("failedToLoadSegment", (function(t, e) {
                    r.trigger("failedToLoadSegment", t, e)
                }
            )),
                T.on("segmentDownloaded", (function(t) {
                        k(),
                            r.trigger("segmentDownloaded", t)
                    }
                )),
            e === tt.AUDIO && T.on("representationChanged", (function(t, e) {
                    var n = t.adaptationSetId
                        , i = a.getAdaptationSetById(n, e);
                    r.trigger(u.b, i)
                }
            )),
            e === tt.VIDEO && (t.on(u.gb, (function() {
                    return R(0, Math.max(0, o.getCurrentTime() - 2))
                }
            )),
                T.on("segmentProgress", (function(t) {
                        r.trigger("segmentProgress", t)
                    }
                )),
                T.on("representationChanged", (function(t) {
                        r.trigger(u.hb, t)
                    }
                )),
                T.on(u.ib, (function(e) {
                        t.trigger(u.ib, e)
                    }
                ))),
                t.once(u.jb, (function() {
                        m = !0
                    }
                ));
            var S = new $.a(500,k);
            function O() {
                T.abort()
            }
            function w() {
                var t = o.getReadyState() === Ht.HAVE_NOTHING ? v : o.getCurrentTime();
                return {
                    time: t,
                    bufferLength: p.getBufferLength(t)
                }
            }
            function k() {
                return A.apply(this, arguments)
            }
            function A() {
                return (A = Object(c.a)(c.b.mark((function t() {
                        var n, s, u, d, h, m, v, S, O, A, x, C, R, I, M, F, N, B;
                        return c.b.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                        case 0:
                                            if (null !== p && !y) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            if (n = w(),
                                                s = n.time,
                                                u = n.bufferLength,
                                                d = o.getDuration(),
                                                h = T.getQueueLengthFromTime(s),
                                                P(),
                                                h + u > _ ? T.pause() : T.resume(),
                                                T.next(),
                                                m = D(s),
                                                v = Math.min(_, 120),
                                                !(m >= h && s + h < d - .1 && e === tt.VIDEO)) {
                                                t.next = 12;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 12:
                                            if (g = !0,
                                                S = T.getQueue(),
                                                O = Object(l.a)(S, 1),
                                                !((A = O[0]) && u < v)) {
                                                t.next = 23;
                                                break
                                            }
                                            if (A !== E) {
                                                t.next = 17;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 17:
                                            return E = A,
                                            -1 === A.index && (C = a.duration,
                                                R = !a.isLive() && T.getPeriod() === (null === (x = a.getLastPeriod()) || void 0 === x ? void 0 : x.id) && C,
                                                I = R || A.appendWindowEnd + .5,
                                                p.queue((function() {
                                                        return p.setTimestampOffset(A.offset)
                                                    }
                                                )).catch((function() {}
                                                )),
                                                p.queue((function() {
                                                        return p.setAppendWindow(Math.max(0, A.appendWindowStart - 1), I)
                                                    }
                                                )).then((function() {
                                                        var t = p.getAppendWindow()
                                                            , e = t.appendWindowStart
                                                            , n = t.appendWindowEnd;
                                                        i.info("[".concat(o.getCurrentTime(), "] APPEND WINDOW: start: ").concat(e, ", end: ").concat(n, ", offset: ").concat(A.offset))
                                                    }
                                                )).catch((function() {}
                                                ))),
                                                t.next = 21,
                                                p.queue((function() {
                                                        return p.appendBuffer(A)
                                                    }
                                                )).catch((function() {
                                                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                                                            , n = (null == A ? void 0 : A.segmentInfo) || {}
                                                            , r = n.index
                                                            , a = n.start
                                                            , s = n.representationId
                                                            , u = n.periodId
                                                            , c = "[".concat(o.getCurrentTime(), "] ERROR APPEND ").concat(null == e ? void 0 : e.toUpperCase());
                                                        return c += " ".concat(r, ", ").concat(a, ", ").concat(s, " ").concat(u, ", ERROR: ").concat(t.code, ", ").concat(t.message),
                                                            i.error(c),
                                                            E = void 0,
                                                            22 === t.code ? _ = Math.max(10, _ - 5) : b ? (b = !1,
                                                                T.restart()) : b = !0,
                                                            !1
                                                    }
                                                ));
                                        case 21:
                                            t.sent && (b = !1,
                                            e === tt.VIDEO && r.trigger("segmentAppended", A),
                                                M = "APPENDED SEGMENT [".concat(A.representationId, "]:"),
                                                M += " id: ".concat(A.index, ", "),
                                            A.index >= 0 && (M += "start: ".concat(A.start, ", "),
                                                M += "end: ".concat(A.start + A.duration, ", "),
                                                M += "duration: ".concat(A.duration, ", ")),
                                                M += "bandwidth: ".concat((A.bandwidth / 1e3).toFixed(0)),
                                                i.info("[".concat(o.getCurrentTime(), "] ").concat(M)),
                                                F = p.getBufferRanges().reduce((function(t, e) {
                                                        var n = e.start
                                                            , r = e.end;
                                                        return t += " | ".concat(n, " - ").concat(r, " ")
                                                    }
                                                ), ""),
                                                i.info("[".concat(o.getCurrentTime(), "] BUFFER RANGES: ").concat(F)),
                                            A.index >= 0 && f && (j(),
                                                f = !1),
                                                N = T.getQueue(),
                                            (B = N.indexOf(A)) >= 0 && N.splice(B, 1),
                                            !a.isLive() && T.isLastSegment(A) && L(),
                                                k());
                                        case 23:
                                        case "end":
                                            return t.stop()
                                    }
                            }
                        ), t)
                    }
                )))).apply(this, arguments)
            }
            function D(e) {
                var n = a.minBufferTime;
                if (!m) {
                    var r;
                    isNaN(a.startBufferLength) || (n = a.startBufferLength);
                    var i, o = t.getDownloadSpeed(), s = null === (r = T.getRepresentation()) || void 0 === r ? void 0 : r.bandwidth;
                    if (s && o > 0 && 1.25 * o < s)
                        n = (null === (i = T.findSegmentByPosition(e)) || void 0 === i ? void 0 : i.duration) || 2
                }
                return n
            }
            function x() {
                return (x = Object(c.a)(c.b.mark((function t(e) {
                        var n, i = arguments;
                        return c.b.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                        case 0:
                                            if (n = i.length > 1 && void 0 !== i[1] && i[1],
                                                !e) {
                                                t.next = 7;
                                                break
                                            }
                                            return f = n,
                                                T.switchAdaptation(e, !!p),
                                                t.next = 6,
                                                R(0);
                                        case 6:
                                            r.trigger(u.b, e);
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                            }
                        ), t)
                    }
                )))).apply(this, arguments)
            }
            function C() {
                return (C = Object(c.a)(c.b.mark((function t(e, n) {
                        var r, i, a = arguments;
                        return c.b.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                        case 0:
                                            if (r = a.length > 2 && void 0 !== a[2] && a[2],
                                            e !== T.getBandwidth()) {
                                                t.next = 3;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 3:
                                            if (T.pause(),
                                            n && p) {
                                                t.next = 7;
                                                break
                                            }
                                            return T.switchProfile(e, !!p),
                                                t.abrupt("return");
                                        case 7:
                                            if (!r) {
                                                t.next = 13;
                                                break
                                            }
                                            return t.next = 10,
                                                R();
                                        case 10:
                                            f = !0,
                                                t.next = 17;
                                            break;
                                        case 13:
                                            if (null === (i = T.getNextSegmentToSwitch(o.getCurrentTime()))) {
                                                t.next = 17;
                                                break
                                            }
                                            return t.next = 17,
                                                R(Math.max(i.start, 5) - .1);
                                        case 17:
                                            T.switchProfile(e, !!p);
                                        case 18:
                                        case "end":
                                            return t.stop()
                                    }
                            }
                        ), t)
                    }
                )))).apply(this, arguments)
            }
            function P() {
                if (!a.isLive() && "open" === d.getReadyState()) {
                    var t = T.getAllSegments();
                    if (t) {
                        var e = t[t.length - 1]
                            , n = o.getCurrentTime()
                            , r = a.getLastPeriod();
                        Math.round(n) >= Math.round(null == e ? void 0 : e.start) && a.findPeriodByTime(n) === r && T.getPeriod() === r.id && L()
                    }
                }
            }
            function L() {
                h = !0,
                    r.trigger("endOfStream")
            }
            function R(t, e) {
                return !p || e <= t ? Promise.resolve() : p.queue((function() {
                        return p.remove(t, e)
                    }
                )).then((function() {
                        r.trigger("sourceBufferCleared", t, e),
                            i.info("[".concat(o.getCurrentTime(), "] CLEAR BUFFER: ").concat(t, " - ").concat(e || "Infinity"))
                    }
                )).catch((function() {}
                ))
            }
            function j() {
                o.seek(o.getCurrentTime() - .05)
            }
            function I(t) {
                return T.findSegmentByPosition(t)
            }
            return {
                on: r.on.bind(r),
                off: r.off.bind(r),
                trigger: r.trigger.bind(r),
                init: function() {
                    E = void 0,
                        p = new zt(d,n),
                        S.start(),
                        T.start()
                },
                abort: O,
                update: k,
                pause: function() {
                    y = !0
                },
                resume: function() {
                    y = !1
                },
                stop: function() {
                    S.stop(),
                        O(),
                        d.endOfStream(),
                        T.stop(),
                    null !== p && ("open" === d.getReadyState() && p.abort(),
                        p.destroy(),
                        p = null)
                },
                clearBuffer: R,
                getAdaptation: function() {
                    return T.getAdaptation()
                },
                findSegmentByPosition: I,
                getNearestSegmentPosition: function(t) {
                    var e = I(t);
                    return null !== e ? e.start : -1
                },
                setStartTime: function(t) {
                    v = t
                },
                isStreamStarted: function() {
                    return g
                },
                isProcessingRequest: function() {
                    return T.isProcessingRequest()
                },
                switchProfile: function(t, e) {
                    return C.apply(this, arguments)
                },
                updatePosition: function(t) {
                    v = t,
                        T.update(),
                        k()
                },
                switchTrack: function(t) {
                    return x.apply(this, arguments)
                },
                setMaxBufferLength: function(t) {
                    a.maxBufferLength = t
                },
                getRepresentation: function() {
                    return T.getRepresentation()
                },
                getRepresentations: function() {
                    var t;
                    return null === (t = T.getAdaptation()) || void 0 === t ? void 0 : t.representations
                },
                sourceOpen: function() {
                    h = !1
                },
                isEndOfStream: function() {
                    return h
                },
                endOfStream: function(t) {
                    h = t
                },
                getMediaType: function() {
                    return e
                },
                getSegmentManager: function() {
                    return T
                }
            }
        }
        function Wt() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                    !0
            } catch (t) {
                return !1
            }
        }
        Yt.prototype = Object.create(A.a.prototype);
        var Kt = S.a.isTizen() ? .1 : 0
            , qt = function(t) {
            Object(_.a)(r, t);
            var e, n = (e = r,
                    function() {
                        var t, n = Object(_.b)(e);
                        if (Wt()) {
                            var r = Object(_.b)(this).constructor;
                            t = Reflect.construct(n, arguments, r)
                        } else
                            t = n.apply(this, arguments);
                        return Object(_.c)(this, t)
                    }
            );
            function r(t) {
                var e;
                return Object(E.a)(this, r),
                    (e = n.call(this, t)).player = t,
                    e.options = t.options,
                    e.timeShift = t.timeShift,
                    e.mediaElement = t.getComponent(s.d),
                    e.manifestManager = t.getComponent(s.a),
                    e.streamManager = null,
                    e.videoStream = null,
                    t.addComponent(Object(_.d)(e), s.b),
                    e.isLive = !1,
                    e.liveDelay = 0,
                    e.lastPosition = -1,
                    e.deadlockTimeout = 0,
                    e.decodedFrameCount = -1,
                    e.frameDeadlockTimeout = null,
                    e.hasFrameDeadlockTimeout = !1,
                    e.hasDeadlockTimeout = !1,
                    e.metric = {},
                    e.segmentList = [],
                    e.lastProfile = null,
                    e.timer = new $.a(250,(function() {
                            return e.monitor()
                        }
                    )),
                    e.player.on(u.e, (function() {
                            return e.destroy()
                        }
                    )),
                    e.player.on(u.t, (function() {
                            return e.destroy()
                        }
                    )),
                    e.player.on(u.f, (function() {
                            return e.destroy()
                        }
                    )),
                    e.player.on(u.x, (function() {
                            return e.seekToNextBufferRangeStart()
                        }
                    )),
                    e
            }
            return Object(E.b)(r, [{
                key: "observe",
                value: function() {
                    var t = this;
                    this.destroy(),
                        this.isLive = this.manifestManager.isLive(),
                        this.timer.start(),
                        this.streamManager = this.player.getComponent(s.b),
                        this.videoStream = this.streamManager.getVideoStream(),
                    this.videoStream && (this.videoStream.on("segmentAppended", (function(e) {
                            return t.onSegmentAppended(e)
                        }
                    )),
                        this.videoStream.on("sourceBufferCleared", (function(e, n) {
                                return t.onSourceBufferCleared(e, n)
                            }
                        ))),
                    this.isLive && (this.liveDelay = this.manifestManager.getLiveDelay())
                }
            }, {
                key: "seekToNextBufferRangeStart",
                value: function() {
                    var t, e = this.mediaElement.getCurrentTime(), n = (null === (t = this.mediaElement.getPlayed()) || void 0 === t ? void 0 : t.length) ? e + 2 : Number.MAX_SAFE_INTEGER;
                    if (this.mediaElement.hasBuffered()) {
                        var r = this.mediaElement.getBufferRange(e, n);
                        r && r.start !== e && this.mediaElement.seek(r.start + Kt)
                    }
                }
            }, {
                key: "monitor",
                value: function() {
                    var t, e = this, n = this.streamManager.getStartTime(), r = this.streamManager.isProcessingRequest(), i = this.mediaElement.getCurrentTime(), a = this.mediaElement.getBufferLengthFromTime(i), s = this.mediaElement.getReadyState(), u = null === (t = this.mediaElement.getPlayed()) || void 0 === t ? void 0 : t.length, c = Date.now(), l = this.streamManager.isStreamsStarted(), d = !this.options.get(o.e);
                    if (this.detectProfileChange(i),
                    this.options.get(o.Bb) && l && !u && 0 === i && n > 0 && this.mediaElement.seek(n),
                    0 === a && s <= Ht.HAVE_CURRENT_DATA) {
                        var f = this.manifestManager.getStartTime();
                        u && this.timeShift.isEnabled() && i < f ? this.mediaElement.seek(f) : this.seekToNextBufferRangeStart()
                    }
                    if (this.mediaElement.isPaused())
                        return this.hasFrameDeadlockTimeout = !1,
                            void clearTimeout(this.frameDeadlockTimeout);
                    s === Ht.bufferLength && a < 2 && this.seekToNextBufferRangeStart(),
                    s === Ht.HAVE_METADATA && n > i && Math.abs(n - i) < 2 && this.mediaElement.seek(n);
                    var h = this.mediaElement.getDecodedFrameCount();
                    if (h < this.decodedFrameCount && (h = this.decodedFrameCount),
                    d && this.videoStream && a > 0 && this.decodedFrameCount >= 0 && h === this.decodedFrameCount && !document.hidden) {
                        if (!this.hasFrameDeadlockTimeout) {
                            var p = 3e3;
                            this.options.get(o.Bb) && (p += 3e3),
                                this.decodedFrameCount = h,
                                this.hasFrameDeadlockTimeout = !0,
                                this.frameDeadlockTimeout = setTimeout((function() {
                                        e.hasFrameDeadlockTimeout = !1,
                                            e.mediaElement.seek(e.mediaElement.getCurrentTime() + .1)
                                    }
                                ), p)
                        }
                    } else
                        this.hasFrameDeadlockTimeout = !1,
                            clearTimeout(this.frameDeadlockTimeout);
                    if (s > Ht.HAVE_METADATA && !r && (this.lastPosition > 0 && this.lastPosition === i || 0 === a)) {
                        var g = this.mediaElement.getBufferRange(i);
                        null !== g && i + 5 > g.start ? this.mediaElement.seek(g.start + 1e-5) : !this.hasDeadlockTimeout && this.isLive && (this.hasDeadlockTimeout = !0,
                            this.deadlockTimeout = setTimeout((function() {
                                    var t;
                                    null === (t = e.streamManager) || void 0 === t || t.reconnect(0),
                                        e.hasDeadlockTimeout = !1
                                }
                            ), 3e3))
                    } else
                        clearTimeout(this.deadlockTimeout),
                            this.hasDeadlockTimeout = !1,
                            this.decodedFrameCount = h;
                    if (s <= Ht.HAVE_CURRENT_DATA)
                        if (this.metric.time !== i || this.metric.bufferLength !== a || d && this.metric.decodedFrameCount !== h)
                            this.metric.lastChange = c,
                                this.metric.time = i,
                                this.metric.bufferLength = a,
                                this.metric.decodedFrameCount = h;
                        else if ((c - this.metric.lastChange) / 1e3 > 2 && l && (this.metric.lastChange = c,
                        a > 0)) {
                            var m, v = (null === (m = this.streamManager.getVideoStream()) || void 0 === m ? void 0 : m.findSegmentByPosition(i)) || {}, y = v.start, b = v.duration;
                            y && b && this.mediaElement.seek(y + b)
                        }
                    this.lastPosition = i
                }
            }, {
                key: "onSegmentAppended",
                value: function(t) {
                    var e = t.index
                        , n = t.representation
                        , r = t.start
                        , i = t.duration;
                    if (!(e < 0)) {
                        var a = r + i
                            , o = this.segmentList.find((function(t) {
                                return t.start === r
                            }
                        ));
                        o ? o.representation = n : this.segmentList.push({
                            start: r,
                            stop: a,
                            representation: n
                        })
                    }
                }
            }, {
                key: "onSourceBufferCleared",
                value: function(t, e) {
                    this.segmentList = this.segmentList.reduce((function(n, r) {
                            return t <= r.start && e >= r.stop || n.push(r),
                                n
                        }
                    ), [])
                }
            }, {
                key: "detectProfileChange",
                value: function(t) {
                    var e = this.segmentList.find((function(e) {
                            var n = e.start
                                , r = e.stop;
                            return t >= n && t <= r
                        }
                    ));
                    if (e) {
                        var n = e.representation
                            , r = n.bandwidth;
                        r !== this.lastProfile && this.trigger(u.gb, n),
                            this.lastProfile = r
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    clearTimeout(this.deadlockTimeout),
                        clearTimeout(this.frameDeadlockTimeout),
                        this.decodedFrameCount = -1,
                        this.lastPosition = 0,
                        this.hasDeadlockTimeout = !1,
                        this.hasDeadlockTimeout = !1,
                        this.hasFrameDeadlockTimeout = !1,
                        this.timer.stop(),
                        this.lastProfile = null,
                        this.segmentList = []
                }
            }]),
                r
        }(A.a)
            , Qt = .5
            , Jt = 2
            , Xt = function(t) {
            return {
                id: t.id,
                start: t.start,
                end: t.end,
                duration: t.duration
            }
        }
            , $t = function() {
            function t(e) {
                var n = this;
                Object(E.a)(this, t),
                    this.player = e,
                    this.currentPeriod = null,
                    this.manifestManager = e.getComponent(s.a),
                    this.mediaElement = e.getComponent(s.d),
                    this.logger = at.get("period"),
                    this.timer = new $.a(500,(function() {
                            return n.onTimer()
                        }
                    ),!0),
                    this.player.once(u.jb, (function() {
                            return n.init()
                        }
                    )),
                    this.player.once(u.e, (function() {
                            return n.timer.stop()
                        }
                    )),
                    this.player.once(u.t, (function() {
                            return n.timer.stop()
                        }
                    )),
                    this.player.once(u.f, (function() {
                            return n.timer.stop()
                        }
                    ))
            }
            return Object(E.b)(t, [{
                key: "init",
                value: function() {
                    this.timer.start()
                }
            }, {
                key: "onTimer",
                value: function() {
                    var t, e = this, n = this.mediaElement.getCurrentTime(), r = this.manifestManager.findPeriodByTime(n);
                    (this.currentPeriod !== r && (this.currentPeriod && this.currentPeriod.off(),
                        this.updatePeriod(r, n)),
                        null === (t = this.currentPeriod) || void 0 === t ? void 0 : t.eventStreams.length) && this.currentPeriod.eventStreams.forEach((function(t) {
                            t.filter((function(t) {
                                    var e = t.fired
                                        , r = t.start;
                                    return r >= n - Qt && r < n + Jt && !e
                                }
                            )).forEach((function(t) {
                                    e.player.trigger(u.kb, t),
                                        t.fired = Date.now()
                                }
                            ))
                        }
                    ))
                }
            }, {
                key: "getCurrentPeriod",
                value: function() {
                    return Xt(this.currentPeriod)
                }
            }, {
                key: "updatePeriod",
                value: function(t, e) {
                    var n = this;
                    this.currentPeriod = t,
                        this.currentPeriod.on(u.q, (function(t) {
                                return n.player.trigger(u.q, Xt(t))
                            }
                        )),
                        this.player.trigger(u.lb, Xt(this.currentPeriod));
                    var r = this.currentPeriod
                        , i = r.id
                        , a = r.start
                        , o = r.duration;
                    this.logger.info("[".concat(e, "] PERIOD CHANGED: ").concat(this.currentPeriod.id, " ").concat(i, ", ").concat(a, " ").concat(o))
                }
            }]),
                t
        }();
        function Zt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                ))),
                    n.push.apply(n, r)
            }
            return n
        }
        function te(t) {
            var e = this
                , n = t.getComponent(s.d)
                , i = t.getComponent(s.a)
                , a = t.timeShift
                , c = t.options
                , d = c.get(o.Cb)
                , f = new $t(t)
                , h = new qt(t)
                , p = new $.a(5e3,(function() {
                    var t = c.get(o.c);
                    if (t && !n.isSeeking()) {
                        var e = n.getCurrentTime() - t;
                        e > 0 && L(0, e)
                    }
                }
            ))
                , g = null
                , m = !1
                , v = 0
                , y = []
                , b = null
                , E = null
                , _ = null
                , T = !1;
            function O(n, r) {
                var i = new Yt(t,n,r);
                return i.on("endOfStream", C),
                    i.on("segmentProgress", (function(t) {
                            e.trigger("segmentProgress", t)
                        }
                    )),
                    i.on("segmentDownloaded", (function(t) {
                            A(t)
                        }
                    )),
                    i.on("failedToLoadSegment", (function(t, n) {
                            T || (A(t),
                            m && j() < 1 && P(2e3),
                            t.status === w.b && e.trigger("failedToLoadSegment", t.url, n))
                        }
                    )),
                    i.on(u.b, (function(e) {
                            var n = F(e);
                            _ = n.lang,
                                t.trigger(u.b, n)
                        }
                    )),
                    i.on(u.hb, (function(t) {
                            return e.trigger(u.hb, t)
                        }
                    )),
                    i
            }
            function A(e) {
                t.trigger(u.o, function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Zt(Object(n), !0).forEach((function(e) {
                                Object(r.a)(t, e, n[e])
                            }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Zt(Object(n)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            }
                        ))
                    }
                    return t
                }({}, e, {
                    downloadingBitrate: e.bps,
                    type: "SEGMENT"
                }))
            }
            function D(t, e, r) {
                var a, o = i.findPeriodByTime(n.getCurrentTime());
                i.getRepresentationByBandwidth(t, tt.VIDEO, o);
                p.restart(),
                null === (a = b) || void 0 === a || a.switchProfile(t, e, r)
            }
            function x(t, e) {
                var r = i.findPeriodByTime(n.getCurrentTime())
                    , a = i.getAudioAdaptation(t, r);
                E.switchTrack(a, e)
            }
            function C() {
                var t = y.every((function(t) {
                        return t.isEndOfStream()
                    }
                ));
                "open" === g.getReadyState() && t && g.endOfStream()
            }
            function P() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2e3;
                e.trigger(u.s, t)
            }
            function L(t, e) {
                "open" === g.getReadyState() && y.forEach((function(n) {
                        return n.clearBuffer(t, e)
                    }
                ))
            }
            function R() {
                return a.getDvrWindow() >= 0 ? a.getDvrWindow() : a.getStart() >= 0 && a.getStop() < 0 ? a.getLiveNowUTC() < 0 ? 0 : a.getLiveNowUTC() - a.getStart() : a.getStart() >= 0 && a.getStop() >= 0 ? a.getStop() - a.getStart() : n ? n.getDuration() : 0
            }
            function j() {
                return (null == n ? void 0 : n.getBufferLength()) || 0
            }
            function I() {
                var t = c.get(o.Gb)
                    , e = 0;
                if (t)
                    return c.set(o.Gb, null),
                        t;
                if (m)
                    e = M(),
                        y.forEach((function(t) {
                                return t.setStartTime(e)
                            }
                        ));
                else {
                    var n = [];
                    y.forEach((function(t) {
                            var e, r, a = i.getAdaptations(t.getMediaType()), o = Object(l.a)(a, 1)[0], s = t.getNearestSegmentPosition(null === (e = o.segmentList) || void 0 === e || null === (r = e[0]) || void 0 === r ? void 0 : r.start);
                            t.setStartTime(s),
                                n.push(s)
                        }
                    )),
                        e = Math.max.apply(Math, n)
                }
                return Math.round(1e3 * e) / 1e3
            }
            function M() {
                var e = 0
                    , n = a.getBaseTimeStamp()
                    , r = i.getStartTime()
                    , o = i.getLastSegmentEndTimeByType(tt.VIDEO) || i.getLastSegmentEndTimeByType(tt.AUDIO)
                    , s = o - i.getLiveDelay()
                    , u = a.getPlayStart() - n
                    , c = a.getStart() - n
                    , l = t.getLiveNowUTC() - n - o;
                return e = s,
                l > 0 && (e += l),
                a.getMode() === k.a.LIVE_DELAYED && u >= 0 && c <= u && s >= u && (e = u - c,
                a.getDvrWindow() > 0 && (e = u)),
                    Math.max(r, e)
            }
            function F(t) {
                return new X.a(t)
            }
            return p.immediateUpdate = !1,
                h.on(u.gb, (function(t) {
                        return function(t) {
                            e.trigger(u.gb, t)
                        }(t)
                    }
                )),
                {
                    on: e.on.bind(e),
                    off: e.off.bind(e),
                    trigger: e.trigger.bind(e),
                    getCurrentTime: function() {
                        var t = (null == n ? void 0 : n.getCurrentTime()) || 0;
                        return 0 === t || a.isEnabled() && a.isVod() ? t : m && !a.isEnabled() && t > 0 ? t + a.getAvailabilityStartTime() : m && a.isEnabled() ? a.getBaseTimeStamp() + t - a.getStart() : t
                    },
                    getDuration: R,
                    destroy: function() {
                        p.stop(),
                            y.forEach((function(t) {
                                    t.stop(),
                                        t = null
                                }
                            )),
                            y = []
                    },
                    reconnect: P,
                    initStreams: function() {
                        y.forEach((function(t) {
                                return t.init()
                            }
                        )),
                            p.start()
                    },
                    createStreams: function(t, n) {
                        g = t,
                            m = n,
                            T = !1;
                        var r, a, s, l, d, p, w, k, A, C = i.getAdaptationSetMimeType(tt.AUDIO), P = i.getAdaptationSetMimeType(tt.VIDEO);
                        if (C) {
                            var L = c.get(o.Db);
                            E = O(tt.AUDIO, C),
                                y.push(E),
                                x(_ || L || S.a.getLanguage())
                        }
                        if (P && (b = O(tt.VIDEO, P),
                            y.push(b)),
                            v = I(),
                            P) {
                            var R = i.findPeriodByTime(v)
                                , j = i.getAdaptationSetByType(tt.VIDEO, R)
                                , M = i.getAverageBandwidth(null == j ? void 0 : j.representations)
                                , F = (d = 1e3 * c.get(o.Eb),
                                p = c.get(o.Fb) ? parseFloat(null === (r = localStorage) || void 0 === r ? void 0 : r.getItem(St)) : 0,
                                w = (null === (a = i.getAudioProfiles()[0]) || void 0 === a ? void 0 : a.bandwidth) || 0,
                                k = c.get(o.v) ? 1e6 * (null === (s = navigator) || void 0 === s || null === (l = s.connection) || void 0 === l ? void 0 : l.downlink) - w : 0,
                            (A = d || k || p) && i.getVideoNearestBandwidth(A) || M)
                                , N = i.getRepresentationByBandwidth(F, tt.VIDEO, R);
                            D(F),
                                e.trigger(u.gb, N)
                        }
                        h.observe(),
                            f.updatePeriod(i.findPeriodByTime(v), v)
                    },
                    hasActiveStreams: function() {
                        return y.length
                    },
                    getBufferLength: j,
                    getStartTime: function() {
                        return v
                    },
                    clearBuffer: L,
                    updatePosition: function(t) {
                        y.forEach((function(e) {
                                return e.updatePosition(t)
                            }
                        ))
                    },
                    seek: function(e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d
                            , o = R() - t.getLiveDelay()
                            , s = o * e / 100;
                        if (s > o && (s = o),
                            a.isEnabled()) {
                            var u = i.getStartTime();
                            s = Math.max(u, t.getLiveStartUTC() + s - a.getBaseTimeStamp())
                        }
                        if ("time" !== r && (s = b.getNearestSegmentPosition(s)),
                        100 === e && a.isEnabled())
                            return a.setLive(),
                                p.restart(),
                                v = I(),
                                void n.seek(v);
                        s >= 0 && n.seek(s)
                    },
                    seekToHead: function() {
                        n.seek(M())
                    },
                    switchProfile: D,
                    getProfiles: function() {
                        return b.getRepresentations()
                    },
                    getCurrentProfile: function() {
                        return b.getRepresentation()
                    },
                    getCurrentAudioTrack: function() {
                        return F(E.getAdaptation())
                    },
                    getCurrentPeriod: function() {
                        return null == f ? void 0 : f.getCurrentPeriod()
                    },
                    setMaxBufferLength: function(t) {
                        y.forEach((function(e) {
                                return e.setMaxBufferLength(t)
                            }
                        ))
                    },
                    isReconnecting: function() {
                        return T
                    },
                    isStreamsStarted: function() {
                        return y.every((function(t) {
                                return t.isStreamStarted()
                            }
                        ))
                    },
                    isProcessingRequest: function() {
                        return y.every((function(t) {
                                return !t.isProcessingRequest()
                            }
                        ))
                    },
                    setReconnecting: function() {
                        T = !0
                    },
                    switchAudioTrack: x,
                    sourceOpen: function() {
                        y.forEach((function(t) {
                                return t.endOfStream(!1)
                            }
                        ))
                    },
                    getAudioStream: function() {
                        return E
                    },
                    getVideoStream: function() {
                        return b
                    }
                }
        }
        function ee() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                    !0
            } catch (t) {
                return !1
            }
        }
        te.prototype = Object.create(A.a.prototype);
        var ne = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER
                , n = t.sort((function(t, e) {
                    return e.bandwidth - t.bandwidth
                }
            ));
            if (!n.length)
                return [];
            var r = n.filter((function(t) {
                    var n = t.width;
                    return e >= (n || Number.MAX_SAFE_INTEGER)
                }
            ));
            return r.length || (r = [n[n.length - 1]]),
                r.map((function(t) {
                        return t.bandwidth
                    }
                ))
        }
            , re = function(t) {
            Object(_.a)(r, t);
            var e, n = (e = r,
                    function() {
                        var t, n = Object(_.b)(e);
                        if (ee()) {
                            var r = Object(_.b)(this).constructor;
                            t = Reflect.construct(n, arguments, r)
                        } else
                            t = n.apply(this, arguments);
                        return Object(_.c)(this, t)
                    }
            );
            function r(t) {
                var e;
                return Object(E.a)(this, r),
                    (e = n.call(this, t)).mediaElement = t.getComponent(s.d),
                    e.manifest = t.getComponent(s.a),
                    e.options = t.options,
                    e.timer = new $.a(500,(function() {
                            return e.update()
                        }
                    )),
                    e.droppedFramesTimer = new $.a(5e3,(function() {
                            return e.checkDroppedFrames()
                        }
                    )),
                    e.representations = e.manifest.getVideoProfiles(),
                    e.opts = e.options.get(o.Hb),
                    e.supportResolution = e.opts[o.Ib],
                    e.minimumBufferLength = e.opts[o.Jb],
                    e.metrics = [],
                    e.representation = null,
                    e.bandwidths = ne(e.representations),
                    e.minBandwidth = 1e3 * parseFloat(e.manifest.minAutoBitrate) || null,
                    e.maxBandwidth = 1e3 * parseFloat(e.manifest.maxAutoBitrate) || Number.POSITIVE_INFINITY,
                    e.lastSwitch = 0,
                    e.droppedFrames = 0,
                    e.droppedFramesTimeoutId = 0,
                    e.multiplier = e.manifest.isLive() ? .7 : .5,
                    e.updateMaxBandwidthHandler = function() {
                        return e.updateMaxBandwidth()
                    }
                    ,
                    t.on(u.ib, (function(t) {
                            return e.onPeriodChanging(t)
                        }
                    )),
                    t.on(u.hb, (function(t) {
                            return e.onProfileChanging(t)
                        }
                    )),
                e.supportResolution && (window.addEventListener("resize", e.updateMaxBandwidthHandler),
                    e.updateMaxBandwidth()),
                    e.timer.start(),
                e.options.get(o.d) && e.droppedFramesTimer.start(),
                    e
            }
            return Object(E.b)(r, [{
                key: "addMetric",
                value: function(t) {
                    null !== this.representation && (this.bandwidths.length < 2 || (this.metrics.push(t),
                    this.metrics.length > 10 && this.metrics.shift(),
                        this.update()))
                }
            }, {
                key: "update",
                value: function() {
                    var t, e = Date.now(), n = this.calculateAvgBps(), r = !1;
                    if (null !== this.representation && n >= 0) {
                        t = this.getTargetBandwidth(n);
                        var i = Object(X.e)(this.mediaElement.getVideo(), this.mediaElement.getCurrentTime())
                            , a = this.representation
                            , o = a.bandwidth
                            , s = a.segmentTemplate
                            , u = t > o;
                        if (t !== o) {
                            if (u && i < 2)
                                return void (this.lastSwitch = 0);
                            var c = s.duration / s.timescale || 0
                                , l = this.minimumBufferLength || Math.max(c, 4) + 2;
                            if (!u && (this.lastSwitch = 0,
                            i > l && o < this.maxBandwidth))
                                return;
                            var d = n - n * this.multiplier;
                            if (e - this.lastSwitch > 5e3) {
                                if (u && d > t && (r = !0),
                                !r && u && i < l)
                                    return;
                                this.change(t, r)
                            }
                        }
                    }
                }
            }, {
                key: "change",
                value: function(t, e) {
                    this.trigger(u.mb, t, e),
                        this.metrics = [],
                        this.lastSwitch = Date.now()
                }
            }, {
                key: "calculateAvgBps",
                value: function() {
                    if (this.metrics.length <= 4) {
                        var t = this.metrics.slice().reverse()
                            , e = Object(l.a)(t, 1)[0];
                        return e && Date.now() - e.started > 3e3 ? e.bps : -1
                    }
                    return parseInt(this.metrics.slice(this.metrics.length - 4, this.metrics.length).reduce((function(t, e, n) {
                            return t + e.bps
                        }
                    ), 0) / 4)
                }
            }, {
                key: "getDownloadSpeed",
                value: function() {
                    var t = Object(l.a)(this.metrics, 1)[0];
                    return null == t ? void 0 : t.bps
                }
            }, {
                key: "checkDroppedFrames",
                value: function() {
                    var t = this
                        , e = this.mediaElement.getDroppedFrameCount();
                    if (e - this.droppedFrames > 20 && this.bandwidths.length > 1 && this.representation) {
                        var n = this.bandwidths.slice().reverse().slice(1)
                            , r = Object(l.a)(n, 1);
                        this.maxBandwidth = r[0],
                        this.representation.bandwidth > this.maxBandwidth && (this.change(this.maxBandwidth, !0),
                            this.droppedFramesTimer.stop(),
                            this.droppedFramesTimeoutId = setTimeout((function() {
                                    t.droppedFramesTimer.start()
                                }
                            ), 1e4))
                    }
                    this.droppedFrames = e
                }
            }, {
                key: "getTargetBandwidth",
                value: function(t) {
                    var e = this.bandwidths[this.bandwidths.length - 1];
                    return t -= .15 * t,
                    this.minBandwidth && t < this.minBandwidth && (t = this.minBandwidth),
                    this.maxBandwidth && t > this.maxBandwidth && (t = this.maxBandwidth),
                    this.bandwidths.find((function(e) {
                            return t >= e
                        }
                    )) || e
                }
            }, {
                key: "updateMaxBandwidth",
                value: function() {
                    var t = this;
                    setTimeout((function() {
                            var e = ne(t.representations, t.mediaElement.getWidth())
                                , n = Object(l.a)(e, 1);
                            t.maxBandwidth = n[0]
                        }
                    ), 0)
                }
            }, {
                key: "onPeriodChanging",
                value: function(t) {
                    this.representations = this.manifest.getVideoProfiles(t),
                        this.bandwidths = ne(this.representations),
                    this.supportResolution && this.updateMaxBandwidth()
                }
            }, {
                key: "onProfileChanging",
                value: function(t) {
                    this.metrics = [],
                        this.representation = t
                }
            }, {
                key: "destroy",
                value: function() {
                    var t, e;
                    null === (t = this.timer) || void 0 === t || t.stop(),
                    null === (e = this.droppedFramesTimer) || void 0 === e || e.stop(),
                        clearTimeout(this.droppedFramesTimeoutId),
                        window.removeEventListener("resize", this.updateMaxBandwidthHandler),
                        this.metrics = []
                }
            }]),
                r
        }(A.a);
        function ie(t) {
            var e = this
                , n = new window.MediaSource;
            function r() {
                e.trigger("sourceclose")
            }
            function i() {
                e.trigger("sourceopen")
            }
            function a() {
                e.trigger("sourceended")
            }
            function o() {
                return n.readyState
            }
            return n.addEventListener("sourceclose", r),
                n.addEventListener("sourceopen", i),
                n.addEventListener("sourceended", a),
                t.setSource(URL.createObjectURL(n)),
                {
                    on: e.on.bind(e),
                    off: e.off.bind(e),
                    trigger: e.trigger.bind(e),
                    addSourceBuffer: function(t) {
                        return n.addSourceBuffer(t)
                    },
                    destroy: function() {
                        Object(d.a)(n.sourceBuffers).forEach((function(t) {
                                return function(t) {
                                    try {
                                        n.removeSourceBuffer(t)
                                    } catch (t) {}
                                }(t)
                            }
                        )),
                            n.removeEventListener("sourceclose", r),
                            n.removeEventListener("sourceopen", i),
                            n.removeEventListener("sourceended", a),
                            e.off()
                    },
                    setDuration: function(t) {
                        n.duration = t
                    },
                    endOfStream: function() {
                        if ("open" === o())
                            try {
                                n.endOfStream()
                            } catch (t) {}
                    },
                    getReadyState: o,
                    getActiveSourceBuffers: function() {
                        return n.activeSourceBuffers
                    },
                    setLiveSeekableRange: function(t, e) {
                        "function" == typeof n.setLiveSeekableRange && "function" == typeof n.clearLiveSeekableRange && "open" === n.readyState && (n.clearLiveSeekableRange(),
                            n.setLiveSeekableRange(t, e))
                    }
                }
        }
        function ae() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                    !0
            } catch (t) {
                return !1
            }
        }
        ie.prototype = Object.create(A.a.prototype),
            ie.isSupported = function(t) {
                return window.MediaSource.isTypeSupported(t)
            }
        ;
        var oe = function(t) {
            Object(_.a)(l, t);
            var e, n, r = (e = l,
                    function() {
                        var t, n = Object(_.b)(e);
                        if (ae()) {
                            var r = Object(_.b)(this).constructor;
                            t = Reflect.construct(n, arguments, r)
                        } else
                            t = n.apply(this, arguments);
                        return Object(_.c)(this, t)
                    }
            );
            function l(t, e) {
                var n;
                return Object(E.a)(this, l),
                    (n = r.call(this, t, e)).rendererType = l.id,
                    n.url = null,
                    n.isAbr = !0,
                    n.streams = [],
                    n.abr = null,
                    n.currentBandwidth = null,
                    n.seekingTimeout = 0,
                    n.manifestManager = new Vt(n.mediaElement.getVideo(),n.player),
                    n.manifestManager.on(u.fb, n.onManifestUpdated.bind(Object(_.d)(n))),
                    n.manifestManager.on(u.n, n.onManifestUpdateError.bind(Object(_.d)(n))),
                    n.manifestManager.on(u.C, n.onManifestLoaded.bind(Object(_.d)(n))),
                    n.streamManager = new te(n.player,n.manifestManager),
                    n.player.addComponent(n.streamManager, s.b),
                    n.streamManager.on("segmentProgress", (function(t) {
                            return n.abr.addMetric(t)
                        }
                    )),
                    n.streamManager.on(u.gb, (function(t) {
                            return n.onProfileChanged(t)
                        }
                    )),
                    n.streamManager.on(u.hb, (function(t) {
                            return n.onProfileChanging(t)
                        }
                    )),
                    n.streamManager.on(u.s, n.reconnect.bind(Object(_.d)(n))),
                    n.streamManager.on("failedToLoadSegment", n.onFailedToLoadSegment.bind(Object(_.d)(n))),
                    n.streamManager.on(u.nb, n.onEnded.bind(Object(_.d)(n))),
                    n.player.on(u.lb, (function(t) {
                            return n.onPeriod(t)
                        }
                    )),
                    n.reconnectTimeout = 0,
                    n.currentProfile = null,
                    n
            }
            return Object(E.b)(l, [{
                key: "onManifestLoaded",
                value: function() {
                    var t = this.manifestManager.manifest;
                    this.player.trigger(u.C, t)
                }
            }, {
                key: "onManifestUpdated",
                value: function() {
                    var t = this.manifestManager.manifest;
                    this.player.trigger(u.fb, t),
                        this.streamManager.clearBuffer(0, this.mediaElement.getCurrentTime() - 60)
                }
            }, {
                key: "onManifestUpdateError",
                value: function() {
                    this.reconnect()
                }
            }, {
                key: "onProfileChanged",
                value: function(t) {
                    if (t) {
                        var e = t.bandwidth;
                        this.currentProfile !== t && (this.currentBandwidth = e,
                            this.currentProfile = t,
                            this.player.trigger(u.gb, t, this.getCurrentTime(), this.isAbr),
                        this.options.get(o.Fb) && localStorage.setItem(St, e))
                    }
                }
            }, {
                key: "onProfileChanging",
                value: function(t) {
                    this.player.trigger(u.hb, t, this.getCurrentTime(), this.isAbr),
                        this.player.trigger(u.ob, this.getCurrentTime(), t, this.isAbr)
                }
            }, {
                key: "onFailedToLoadSegment",
                value: function(t, e) {
                    this.trigger("failedToLoadSegment", t),
                        this.player.trigger(u.f, {
                            code: a.a[i.a.LOAD_SEGMENT_ERROR],
                            renderer: "DASH",
                            message: i.a.LOAD_SEGMENT_ERROR,
                            url: t,
                            xhr: e
                        })
                }
            }, {
                key: "isIndexMode",
                value: function() {
                    return this.manifestManager.isIndexMode()
                }
            }, {
                key: "setSource",
                value: function(t) {
                    var e = this;
                    this.destroy(),
                        this.isAbr = !!this.options.get(o.Hb),
                        this.url = t,
                    null === this.baseUrl && (this.baseUrl = this.url),
                        this.player.trigger(u.p, this.url),
                    this.timeShift.isEnabled() && (this.url = this.timeShift.generateUrl(this.url)),
                        this.manifestManager.load(this.url).then((function(t) {
                                if (e.isLive() && e.player.trigger(u.pb),
                                    !t)
                                    return e.player.trigger(u.f, {
                                        code: a.a[i.a.PARSE_MANIFEST_ERROR],
                                        renderer: "DASH",
                                        message: i.a.PARSE_MANIFEST_ERROR
                                    });
                                e.player.trigger(u.qb, e.manifestManager.getVideoProfiles()),
                                    e.player.trigger(u.rb, e.manifestManager.getAudioTracks()),
                                    e.playSource()
                            }
                        )).catch((function(t) {
                                var n = t.error
                                    , r = t.url
                                    , o = t.xhr;
                                "failedToLoadManifest" === n && (e.isLive() ? e.timeShift.isLive() ? e.reconnect(4e3, e.baseUrl) : e.reconnect(4e3) : e.destroy(),
                                    e.player.trigger(u.f, {
                                        code: a.a[i.a.LOAD_MANIFEST_ERROR],
                                        renderer: "DASH",
                                        message: i.a.LOAD_MANIFEST_ERROR,
                                        url: r,
                                        xhr: o
                                    }))
                            }
                        ))
                }
            }, {
                key: "isLive",
                value: function() {
                    var t;
                    return Object(J.a)(Object(_.b)(l.prototype), "isLive", this).call(this) || (null === (t = this.manifestManager) || void 0 === t ? void 0 : t.isLive())
                }
            }, {
                key: "destroy",
                value: function() {
                    var t, e;
                    clearTimeout(this.reconnectTimeout),
                        this.manifestManager.destroy(),
                        this.streamManager.destroy(),
                    null === (t = this.mediaSource) || void 0 === t || t.destroy(),
                    null === (e = this.abr) || void 0 === e || e.destroy(),
                        Object(J.a)(Object(_.b)(l.prototype), "destroy", this).call(this)
                }
            }, {
                key: "onPeriod",
                value: function(t) {
                    var e = t.id
                        , n = this.manifestManager.getPeriodById(e)
                        , r = this.manifestManager.getVideoProfiles(n);
                    this.player.trigger(u.qb, r)
                }
            }, {
                key: "onEnded",
                value: function() {
                    Object(J.a)(Object(_.b)(l.prototype), "onEnded", this).call(this),
                        this.destroy()
                }
            }, {
                key: "onSeeking",
                value: function() {
                    var t = this;
                    clearTimeout(this.seekingTimeout),
                        this.seekingTimeout = setTimeout((function() {
                                t.streamManager.updatePosition(t.mediaElement.getCurrentTime())
                            }
                        ), 250)
                }
            }, {
                key: "onLoadedmetadata",
                value: function() {
                    this.lastEvent = u.sb,
                        this.mediaElement.seek(this.streamManager.getStartTime()),
                        this.player.trigger(u.tb, this.manifestManager.isLive() ? -1 : this.manifestManager.duration),
                        this.player.trigger(u.sb, {
                            duration: this.manifestManager.duration
                        })
                }
            }, {
                key: "reconnect",
                value: function(t, e, n) {
                    var r = this;
                    this.streamManager && this.streamManager.getBufferLength() > 1 && !n || (t = t || 2e3,
                        e = e || this.url,
                        this.streamManager.setReconnecting(),
                        this.options.autoplay = !0,
                        clearTimeout(this.reconnectTimeout),
                        this.player.trigger(u.x, this.mediaElement.getCurrentTime()),
                    this.timeShift.isEnabled() && this.timeShift.isLive() && this.timeShift.setLive(),
                        this.reconnectTimeout = setTimeout((function() {
                                r.setSource(e),
                                    r.timer.start()
                            }
                        ), t))
                }
            }, {
                key: "switchProfile",
                value: function(t, e, n) {
                    var r = (null == t ? void 0 : t.bandwidth) || t;
                    0 === Math.round(this.getCurrentTime()) && clearTimeout(this.seekingTimeout),
                        "auto" === r ? (this.isAbr = !0,
                            this.player.trigger(u.gb, this.currentProfile, this.getCurrentTime(), this.isAbr)) : (this.isAbr = !1,
                            this.streamManager.switchProfile(r, e, void 0 !== n ? n : this.options.get(o.j)))
                }
            }, {
                key: "switchAudioTrack",
                value: function(t, e) {
                    this.streamManager.switchAudioTrack(t, e)
                }
            }, {
                key: "playSource",
                value: (n = Object(c.a)(c.b.mark((function t(e) {
                            var n, r, o, l, d, f, h = this;
                            return c.b.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                            case 0:
                                                if (clearTimeout(this.reconnectTimeout),
                                                    n = this.manifestManager,
                                                    r = n.videoAdaptation,
                                                    o = n.audioAdaptation,
                                                null !== (l = r || o)) {
                                                    t.next = 6;
                                                    break
                                                }
                                                return this.reconnect(5e3),
                                                    t.abrupt("return");
                                            case 6:
                                                if (l.representations.length) {
                                                    t.next = 10;
                                                    break
                                                }
                                                return l.unsupportedCodecs.length && this.player.trigger(u.f, {
                                                    code: a.a[i.a.NO_SUPPORTED_CODEC],
                                                    renderer: "DASH",
                                                    message: i.a.NO_SUPPORTED_CODEC,
                                                    data: l.unsupportedCodecs
                                                }),
                                                    this.destroy(),
                                                    t.abrupt("return");
                                            case 10:
                                                if (void 0 === e) {
                                                    t.next = 13;
                                                    break
                                                }
                                                return this.setSource(e),
                                                    t.abrupt("return");
                                            case 13:
                                                if (!(d = this.player.beforePlayTaskQueue).length) {
                                                    t.next = 18;
                                                    break
                                                }
                                                return f = d.map((function(t) {
                                                        return t()
                                                    }
                                                )),
                                                    t.next = 18,
                                                    Promise.all(f);
                                            case 18:
                                                if (!this.player.destroyed) {
                                                    t.next = 20;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 20:
                                                this.abr = new re(this.player),
                                                    this.mediaSource = new ie(this.mediaElement),
                                                    this.player.addComponent(this.mediaSource, s.e),
                                                    this.mediaSource.on("sourceopen", (function() {
                                                            return h.onSourceOpen()
                                                        }
                                                    )),
                                                    this.registerEvents(),
                                                    this.abr.on(u.mb, (function(t, e) {
                                                            setTimeout((function() {
                                                                    h.isAbr && h.streamManager.switchProfile(t, e)
                                                                }
                                                            ), 0)
                                                        }
                                                    )),
                                                    this.isPaused ? (this.mediaElement.pause(),
                                                        this.player.trigger(u.ub, this.getCurrentTime())) : this.mediaElement.play();
                                            case 27:
                                            case "end":
                                                return t.stop()
                                        }
                                }
                            ), t, this)
                        }
                    ))),
                        function(t) {
                            return n.apply(this, arguments)
                        }
                )
            }, {
                key: "seek",
                value: function() {
                    this.triggerOnSeekStartEvents();
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    this.streamManager.seek.apply(this.streamManager, e)
                }
            }, {
                key: "seekTo",
                value: function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    var r = e[0];
                    if (this.timeShift.isEnabled())
                        return this.triggerOnSeekStartEvents(),
                            e[0] = r / (this.getDuration() - this.player.getLiveDelay()) * 100,
                            void this.streamManager.seek.apply(this.streamManager, e);
                    e[0] = r / this.getDuration() * 100,
                        this.seek.apply(this, e)
                }
            }, {
                key: "seekToHead",
                value: function() {
                    this.triggerOnSeekStartEvents(),
                        this.streamManager.seekToHead()
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.streamManager.getDuration()
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.streamManager.getCurrentTime()
                }
            }, {
                key: "getBufferLength",
                value: function() {
                    return this.streamManager.getBufferLength()
                }
            }, {
                key: "getLiveDelay",
                value: function() {
                    return this.manifestManager.getLiveDelay()
                }
            }, {
                key: "getDownloadSpeed",
                value: function() {
                    return this.abr.getDownloadSpeed()
                }
            }, {
                key: "setMaxBufferLength",
                value: function(t) {
                    return this.streamManager.setMaxBufferLength(t)
                }
            }, {
                key: "getCurrentProfile",
                value: function() {
                    return this.streamManager.getCurrentProfile()
                }
            }, {
                key: "getProfiles",
                value: function() {
                    return this.streamManager.getProfiles()
                }
            }, {
                key: "getProfile",
                value: function() {
                    return this.currentProfile
                }
            }, {
                key: "getAudioTracks",
                value: function() {
                    return this.manifestManager.getAudioTracks()
                }
            }, {
                key: "getCurrentAudioTrack",
                value: function() {
                    return this.streamManager.getCurrentAudioTrack()
                }
            }, {
                key: "getTextTracks",
                value: function() {
                    return this.mediaElement.getNativeTextTracks()
                }
            }, {
                key: "getCurrentPeriod",
                value: function() {
                    return this.streamManager.getCurrentPeriod()
                }
            }, {
                key: "stop",
                value: function() {
                    this.player.trigger(u.t, this.mediaElement.getCurrentTime()),
                        this.isPaused = !1,
                        this.destroy()
                }
            }, {
                key: "resume",
                value: function() {
                    this.isPaused = !1,
                        this.mediaElement.play()
                }
            }, {
                key: "onSourceOpen",
                value: function() {
                    if (this.streamManager.hasActiveStreams())
                        this.streamManager.sourceOpen();
                    else {
                        var t = this.manifestManager.duration;
                        this.timeShift.isEnabled() && this.timeShift.isLive() && (t = Number.MAX_VALUE),
                            this.mediaSource.setDuration(t),
                        this.manifestManager.isLive() && this.options.get(o.Bb) && this.mediaSource.setLiveSeekableRange(0, Number.MAX_VALUE),
                            this.streamManager.createStreams(this.mediaSource, this.manifestManager.isLive() && !this.timeShift.isVod()),
                        null !== this.currentBandwidth && this.streamManager.switchProfile(this.currentBandwidth),
                            this.streamManager.initStreams()
                    }
                }
            }], [{
                key: "canPlayType",
                value: function(t, e) {
                    return !!e.get(o.g) || (!e.get(o.Kb) || !S.a.isSafariWithSiteSpecificHacks()) && (!(S.a.isSafari() && !e.get(o.Bb)) && (!(!S.a.isWidevineSupported() && S.a.isFirefox()) && void 0 !== window.MediaSource))
                }
            }]),
                l
        }(X.b);
        oe.id = "dash",
            oe.enabled = !0,
            oe.priority = 100,
            oe.mediaTypes = {
                DASH: "application/dash+xml"
            };
        var se = function() {
            return n.e(2).then(n.bind(null, 54))
        }
            , ue = function() {
            function t() {
                Object(E.a)(this, t)
            }
            return Object(E.b)(t, null, [{
                key: "canPlayType",
                value: function(t, e) {
                    return !!e.get(X.c.OPTION_NAME)
                }
            }, {
                key: "create",
                value: function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    return new Promise(function() {
                        var t = Object(c.a)(c.b.mark((function t(n, r) {
                                return c.b.wrap((function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2,
                                                        se().then((function(t) {
                                                                return n(Tt(t.default, e))
                                                            }
                                                        )).catch((function() {
                                                                return r()
                                                            }
                                                        ));
                                                case 2:
                                                case "end":
                                                    return t.stop()
                                            }
                                    }
                                ), t)
                            }
                        )));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
            }]),
                t
        }();
        ue.id = X.c.ID,
            ue.priority = X.c.PRIORITY,
            ue.mediaTypes = X.c.SUPPORTED_MEDIA_TYPES;
        function ce(t) {
            var e = t.options
                , n = e.get(o.gb)
                , r = e.get(o.Z);
            if ("undefined" != typeof gemiusStream && void 0 !== r) {
                var i = []
                    , a = !1
                    , s = !1
                    , c = !1
                    , l = !0
                    , d = 0
                    , f = O.a.extend({
                    identifier: "",
                    hitcollector: "https://pro.hit.gemius.pl/gstream.js",
                    materialId: null,
                    customPackage: [],
                    additionalPackage: [],
                    treeId: []
                }, r);
                t.on(u.sb, (function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                            , n = e.duration
                            , r = t.isLive();
                        i.push({
                            name: "new",
                            duration: n && !r ? n : -1
                        }),
                        r && !d && (d = t.getLiveNowUTC()),
                            h()
                    }
                )),
                    t.on(u.jb, (function(t) {
                            s || (l = !1,
                                s = !0,
                                c = !1,
                                i.push({
                                    name: u.jb,
                                    time: p(t)
                                }),
                                h())
                        }
                    )),
                    t.on(u.ub, (function(t) {
                            s = !1,
                                i.push({
                                    name: u.ub,
                                    time: p(t)
                                }),
                                h()
                        }
                    )),
                    t.on(u.x, (function(t) {
                            c || (c = !0,
                                s = !1,
                                i.push({
                                    name: "buffering",
                                    time: p(t)
                                }),
                                h())
                        }
                    )),
                    t.on(u.zb, (function(t) {
                            c = !1,
                                i.push({
                                    name: "seekingStarted",
                                    time: p(t)
                                }),
                                h()
                        }
                    )),
                    t.on(u.Cb, (function() {
                            c = !1
                        }
                    )),
                    t.on(u.t, (function(t) {
                            s = !1,
                                c = !1,
                            l || (l = !0,
                                i.push({
                                    name: u.t,
                                    time: p(t)
                                }),
                                h(),
                                a = !1)
                        }
                    )),
                    t.on(u.nb, (function(t) {
                            s = !1,
                                c = !1,
                            l || (l = !0,
                                i.push({
                                    name: "complete",
                                    time: p(t)
                                }),
                                h(),
                                a = !1)
                        }
                    )),
                    t.on(u.e, (function() {
                            var e = 0;
                            try {
                                e = parseInt(t.getCurrentTime(), 10)
                            } catch (t) {}
                            gemiusStream.closeStream(n, f.materialId, parseInt(p(e), 10))
                        }
                    ))
            }
            function h() {
                var t;
                if (a)
                    for (; i.length; )
                        t = i.shift(),
                            gemiusStream.event(n, f.materialId, parseInt(t.time, 10), t.name);
                else
                    for (var e = 0; e < i.length; e++)
                        if ("new" === i[e].name) {
                            t = i[e],
                                i.splice(e, 1),
                                gemiusStream.newStream(n, f.materialId, parseInt(t.duration, 10), f.customPackage, f.additionalPackage, f.identifier, f.hitcollector, f.treeId),
                                a = !0,
                                h();
                            break
                        }
            }
            function p(e) {
                if (!t.isLive())
                    return e;
                var n = t.getTimeShift()
                    , r = n.isEnabled()
                    , i = n.getInitialStart()
                    , a = n.getDvrWindow()
                    , o = t.getLiveNowUTC();
                return r ? r && i > 0 && a >= 0 ? e + (o - i - a) : e : d ? o - d : 0
            }
        }
        (function() {
            function t(e) {
                Object(E.a)(this, t),
                    this.player = e
            }
            return Object(E.b)(t, [{
                key: "initAsync",
                value: function() {
                    var t = this;
                    return this.player.options.get("mux") ? n.e(1).then(n.bind(null, 55)).then((function(e) {
                            return new e.default(t.player)
                        }
                    )).catch((function() {
                            return !1
                        }
                    )) : Promise.resolve()
                }
            }]),
                t
        }()).enabled = !0,
            ce.enabled = !0,
            ce.moduleId = "gstream";
        var le = ce
            , de = n(24)
            , fe = n.n(de)
            , he = n(25)
            , pe = n.n(he)
            , ge = n(35)
            , me = n.n(ge)
            , ve = n(36)
            , ye = n.n(ve)
            , be = n(37)
            , Ee = n.n(be)
            , _e = n(28)
            , Te = n.n(_e)
            , Se = n(30)
            , Oe = n.n(Se)
            , we = new XMLSerializer
            , ke = function(t, e) {
            return e ? "".concat(e, ":").concat(t) : t
        }
            , Ae = function(t) {
            for (var e = (new DOMParser).parseFromString(t, "text/xml"), n = Object(d.a)(e.documentElement.attributes).reduce((function(t, e) {
                    return "http://www.w3.org/ns/ttml" === e.value && "xmlns" === e.prefix && e.localName ? e.localName : t
                }
            ), ""), r = ft(e, ke("tt", n)), i = ft(r, ke("body", n)), a = ft(i, ke("div", n)), o = dt(a, ke("p", n)), s = [], u = function(t) {
                var e = o[t]
                    , r = ct(e.getAttribute(ke("begin", n)))
                    , i = ct(e.getAttribute(ke("end", n)))
                    , a = s.find((function(t) {
                        return t.begin === r && t.end === i
                    }
                ))
                    , u = []
                    , c = e.cloneNode(!0);
                c.removeAttribute("xml:id"),
                    c.removeAttribute(ke("begin", n)),
                    c.removeAttribute(ke("end", n));
                for (var l = 0; l < e.childNodes.length; l++) {
                    var d = e.childNodes[l].textContent;
                    d && u.push(d.trim())
                }
                var f = we.serializeToString(c);
                a ? (a.line += "\n" + u.join("\n"),
                    a.data += f,
                    a.lines.concat(u)) : s.push({
                    line: u.join("\n"),
                    data: f,
                    lines: u,
                    begin: r,
                    end: i
                })
            }, c = 0; c < o.length; c++)
                u(c);
            return s
        }
            , De = /\s*(\d*:?[0-5]\d:[0-5]\d\.\d\d\d)\s*-->\s*(\d*:?[0-5]\d:[0-5]\d\.\d\d\d)\s*(.*)/
            , xe = function(t) {
            var e = t.split(/[:.]/).reverse()
                , n = Object(l.a)(e, 4)
                , r = n[0]
                , i = n[1]
                , a = n[2]
                , o = n[3];
            return 3600 * parseInt(void 0 === o ? 0 : o) + 60 * parseInt(a) + parseInt(i) + parseInt(r) / 1e3
        }
            , Ce = function(t) {
            var e, n, r, i = [], a = null;
            "\ufeff" === t[0] && (t = t.slice(1, t.length - 1)),
                e = t.split(/\r\n|\r|\n/);
            for (var o = 0; o < e.length; o++)
                n = e[o],
                    (r = De.exec(n)) ? (a = {
                        begin: parseFloat(xe(r[1])),
                        end: parseFloat(xe(r[2])),
                        lines: []
                    },
                        i.push(a)) : "" === n.trim() ? a = null : a && a.lines.push(n);
            return i
        };
        function Pe(t) {
            var e, n = t.getRendererElm(), r = window.VTTCue || window.TextTrackCue, i = {};
            function a() {
                var e, n = null === (e = t.getActiveSubtitle()) || void 0 === e ? void 0 : e.language;
                n && (s(n).mode = "hidden")
            }
            function s(t) {
                return Object(d.a)(n.textTracks).find((function(e) {
                        return e.language === t
                    }
                ))
            }
            return t.on(u.Q, (function(e) {
                    var n = e.language;
                    (function(e) {
                            if (i[e])
                                return Promise.resolve(i[e]);
                            return new Promise((function(n, r) {
                                    w.d.get(e).then(function() {
                                        var a = Object(c.a)(c.b.mark((function a(s) {
                                                var u, l, d, f, h;
                                                return c.b.wrap((function(a) {
                                                        for (; ; )
                                                            switch (a.prev = a.next) {
                                                                case 0:
                                                                    u = s.data,
                                                                        l = u.startsWith("<?xml"),
                                                                        d = t.options.get(o.J),
                                                                        f = d || Ae,
                                                                        (h = l ? f(u) : Ce(u)) ? (i[e] = h,
                                                                            n(h)) : r();
                                                                case 6:
                                                                case "end":
                                                                    return a.stop()
                                                            }
                                                    }
                                                ), a)
                                            }
                                        )));
                                        return function(t) {
                                            return a.apply(this, arguments)
                                        }
                                    }())
                                }
                            ))
                        }
                    )(e.url).then((function(t) {
                            var e = s(n);
                            if (e) {
                                var i;
                                e.cues && Object(d.a)(e.cues).forEach((function(t) {
                                        return e.removeCue(t)
                                    }
                                ));
                                var a = t.captions
                                    , o = t.styleNode
                                    , u = Object.keys(a || {}).find((function(t) {
                                        return t.split("-")[0] === n.toLowerCase()
                                    }
                                )) || "Default"
                                    , c = a && (a[u] || (null === (i = Object.values(a)) || void 0 === i ? void 0 : i[0]));
                                e.styleNode = o,
                                    t.forEach((function(t) {
                                            var n = t.begin
                                                , i = t.end
                                                , a = t.lines;
                                            if (n) {
                                                var o = new r(n,i,a.join("\n"));
                                                c && (o.parsedCaptions = document.createElement("div"),
                                                null == c || c.filter((function(e) {
                                                        var n = e.begin
                                                            , r = e.end;
                                                        return t.begin === n && t.end === r
                                                    }
                                                )).forEach((function(t) {
                                                        var e = t.content;
                                                        return o.parsedCaptions.appendChild(e)
                                                    }
                                                ))),
                                                    e.addCue(o)
                                            }
                                        }
                                    ))
                            }
                        }
                    )).catch((function() {}
                    ))
                }
            )),
            null === (e = n.textTracks) || void 0 === e || e.addEventListener("change", a),
                {
                    destroy: function() {
                        var t;
                        null === (t = n.textTracks) || void 0 === t || t.removeEventListener("change", a)
                    }
                }
        }
        var Le = function() {
            function t(e) {
                Object(E.a)(this, t),
                    this.data = e,
                    this.type = this.data.type,
                    this.offset = this.data._offset
            }
            return Object(E.b)(t, [{
                key: "getChildBox",
                value: function(t) {
                    return this.boxes.find((function(e) {
                            return e.type === t
                        }
                    ))
                }
            }, {
                key: "getChildBoxes",
                value: function(t) {
                    return this.boxes.reduce((function(e, n) {
                            return n.type === t && e.push(n),
                                e
                        }
                    ), [])
                }
            }, {
                key: "boxes",
                get: function() {
                    return this.data.boxes && this.data.boxes.map((function(e) {
                            return new t(e)
                        }
                    )) || []
                }
            }]),
                t
        }();
        function Re(t) {
            var e = t.getComponent(s.d)
                , n = t.getRendererElm()
                , r = new $.a(300,(function() {
                    a.resume(),
                        a.next(),
                    a.getQueue().length > 5 && a.pause();
                    var e = a.getQueue()
                        , n = Object(l.a)(e, 1)[0];
                    if (n) {
                        a.getQueue().shift();
                        var r = n.data.buffer;
                        if (n.index >= 0)
                            (function(t) {
                                    if (!t || 0 === t.byteLength)
                                        return {
                                            sampleList: [],
                                            lastSequenceNumber: NaN,
                                            totalDuration: NaN,
                                            numSequences: NaN
                                        };
                                    var e, n = Oe.a.parseBuffer(t), r = [], i = n.fetchAll("moof").map((function(t) {
                                            return new Le(t)
                                        }
                                    )), a = n.fetchAll("mfhd").map((function(t) {
                                            return new Le(t)
                                        }
                                    )), o = a[a.length - 1], s = o && o.data.sequence_number, u = i.length;
                                    return i.forEach((function(t) {
                                            t.getChildBoxes("traf").forEach((function(n) {
                                                    var i = n.getChildBoxes("trun")
                                                        , a = n.getChildBox("tfhd")
                                                        , o = n.getChildBox("tfdt")
                                                        , s = o.data.baseMediaDecodeTime;
                                                    i.forEach((function(n) {
                                                            i.forEach((function(e) {
                                                                    for (var n = e.data.sample_count, i = (a.data.base_data_offset || 0) + (e.data.data_offset || 0), o = 0; o < n; o++) {
                                                                        var u = e.data.samples[o]
                                                                            , c = void 0 !== u.sample_composition_time_offset ? u.sample_composition_time_offset : 0
                                                                            , l = void 0 !== u.sample_duration ? u.sample_duration : a.data.default_sample_duration
                                                                            , d = void 0 !== u.sample_size ? u.sample_size : a.data.default_sample_size
                                                                            , f = {
                                                                            dts: s,
                                                                            cts: s + c,
                                                                            duration: l,
                                                                            offset: t.offset + i,
                                                                            size: d,
                                                                            subSizes: [d]
                                                                        };
                                                                        r.push(f),
                                                                            s += l
                                                                    }
                                                                }
                                                            )),
                                                                e = s - o.data.baseMediaDecodeTime
                                                        }
                                                    ))
                                                }
                                            ))
                                        }
                                    )),
                                        {
                                            numSequences: u,
                                            lastSequenceNumber: s,
                                            sampleList: r,
                                            totalDuration: e
                                        }
                                }
                            )(r).sampleList.forEach((function(e) {
                                    var n, a = new DataView(r,e.offset,e.subSizes[0]), s = (n = a,
                                        Oe.a.Utils.dataViewToString(n, "utf-8")), u = t.options.get(o.J), l = u ? u(s) : Ae(s);
                                    l.forEach((function(t) {
                                            if (c) {
                                                var e = c.language
                                                    , n = t.begin
                                                    , r = t.end
                                                    , a = t.data
                                                    , o = t.line
                                                    , s = new i(n - f,r - f,o);
                                                if (s.data = a,
                                                    u) {
                                                    var d;
                                                    s.parsedCaptions = document.createElement("div");
                                                    var h = Object.keys(l.captions || {}).find((function(t) {
                                                            return t.split("-")[0] === e
                                                        }
                                                    )) || "Default"
                                                        , p = l.captions[h] || (null === (d = Object.values(l.captions)) || void 0 === d ? void 0 : d[0]);
                                                    null == p || p.filter((function(e) {
                                                            var n = e.begin
                                                                , r = e.end;
                                                            return t.begin === n && t.end === r
                                                        }
                                                    )).forEach((function(t) {
                                                            var e = t.content;
                                                            return s.parsedCaptions.appendChild(e)
                                                        }
                                                    )),
                                                        s.styleNode = null == l ? void 0 : l.styleNode
                                                }
                                                c.addCue(s)
                                            }
                                        }
                                    ))
                                }
                            ))
                    }
                }
            ))
                , i = window.VTTCue || window.TextTrackCue
                , a = new bt(t,tt.TEXT,(function() {
                    return {
                        time: e.getCurrentTime(),
                        bufferLength: 0
                    }
                }
            ))
                , c = Object(l.a)(n.textTracks, 1)[0]
                , f = 0;
            function h() {
                r.start(),
                    a.start()
            }
            function p() {
                c && c.cues && Object(d.a)(c.cues).forEach((function(t) {
                        return c.removeCue(t)
                    }
                ))
            }
            return t.on(u.zb, (function() {
                    a.pause()
                }
            )),
                t.on(u.Cb, (function() {
                        a.update(),
                            p(),
                            a.resume()
                    }
                )),
                {
                    init: h,
                    destroy: function() {
                        r.stop(),
                            a.stop()
                    },
                    setAdaptationSet: function(t) {
                        var e = Object(l.a)(t.representations, 1)[0].segmentTemplate
                            , r = e.presentationTimeOffset
                            , i = e.timescale;
                        a.switchAdaptation(t),
                        r && (f = r / i),
                        (c = Object(d.a)(n.textTracks).find((function(e) {
                                return e.language === t.lang
                            }
                        ))) && (Object(d.a)(c.cues).forEach((function(t) {
                                return c.removeCue(t)
                            }
                        )),
                            p(),
                            c.mode = "hidden",
                            h())
                    }
                }
        }
        function je(t, e) {
            var n, r = t.getComponent(s.a);
            t.on(u.Q, a),
                t.on(u.S, o),
                t.on(u.C, (function() {
                        var e = t.getActiveSubtitle();
                        e && a(e)
                    }
                ));
            var i = new Re(t);
            function a(t) {
                var e = r.getTextAdaptations();
                (n = e.find((function(e) {
                        return e.id === t.trackId
                    }
                ))) && (i.destroy(),
                    i.setAdaptationSet(n),
                    i.init())
            }
            function o() {
                i.destroy()
            }
            return e && a(e),
                {
                    destroy: function() {
                        t.off(u.Q, a),
                            t.off(u.S, o),
                            i.destroy()
                    }
                }
        }
        var Ie = window.VTTCue || window.TextTrackCue
            , Me = "external"
            , Fe = "fragmented"
            , Ne = "native"
            , Be = "disabled"
            , Ue = "hidden"
            , Ve = "showing"
            , He = function() {
            function t(e) {
                var n = this;
                Object(E.a)(this, t),
                    this.options = e.options,
                    this.player = e,
                    this.active = !!this.options.get(o.R),
                    this.subtitle = void 0,
                    this.subtitles = void 0,
                    this.initialized = !1,
                    this.source = void 0,
                    this.subtitleManager = void 0,
                    this.onCueChangeRef = function() {
                        return n.onCueChange()
                    }
                    ,
                    this.initNativeTimeout = 0,
                    this.registerEvents(),
                    this.exposeApi()
            }
            return Object(E.b)(t, [{
                key: "getDefault",
                value: function() {
                    var t = this.options.get(o.S) || O.a.getBrowserLanguage();
                    return t && (t = t.toLowerCase()),
                    this.subtitles.find((function(e) {
                            return e.language.toLowerCase() === t
                        }
                    )) || this.subtitles[0]
                }
            }, {
                key: "registerEvents",
                value: function() {
                    var t = this;
                    this.player.on(u.r, (function() {
                            return t.init()
                        }
                    )),
                        this.player.on(u.sb, (function() {
                                return t.init()
                            }
                        )),
                        this.player.on(u.h, (function() {
                                return t.init()
                            }
                        )),
                        this.player.on(u.S, (function() {
                                return t.disable()
                            }
                        )),
                        this.player.on(u.R, (function(e) {
                                return t.onSubtitles(e)
                            }
                        )),
                        this.player.on(u.Q, (function(e) {
                                return t.setSubtitle(e)
                            }
                        )),
                        this.player.on(u.K, (function() {
                                return t.enableSubtitle()
                            }
                        )),
                        this.player.on(u.P, (function() {
                                return t.toggleSubtitle()
                            }
                        )),
                        this.player.on(u.t, (function() {
                                return t.destroy()
                            }
                        )),
                        this.player.on(u.nb, (function() {
                                return t.destroy()
                            }
                        )),
                        this.player.on(u.e, (function() {
                                return t.destroy()
                            }
                        )),
                    S.a.isSafari() && this.player.on(u.xb, (function() {
                            return t.initNative()
                        }
                    ))
                }
            }, {
                key: "onSubtitles",
                value: function(t) {
                    var e = this.player.getComponent(s.d)
                        , n = Object(d.a)(e.getNativeTextTracks());
                    n.forEach((function(t) {
                            t.mode = Be
                        }
                    )),
                    n.length && (this.initialized = !0),
                        this.subtitles = t,
                    this.active && (this.subtitle = this.getDefault())
                }
            }, {
                key: "enableSubtitle",
                value: function() {
                    this.active = !0,
                    this.subtitle || (this.subtitle = this.getDefault()),
                        this.initialized ? this.player.trigger(u.Q, this.subtitle) : this.init()
                }
            }, {
                key: "toggleSubtitle",
                value: function() {
                    this.player.getActiveSubtitle() ? this.player.disableSubtitle() : this.player.enableSubtitle()
                }
            }, {
                key: "setSubtitle",
                value: function(t) {
                    var e = this.player.getRendererElm()
                        , n = Object(d.a)(e.textTracks);
                    n.forEach((function(t) {
                            t.mode = Be
                        }
                    ));
                    var r = n.find((function(e) {
                            return e.language === t.language || e.trackId && e.trackId === t.trackId
                        }
                    ));
                    r && (r.mode = Ue,
                        this.setActiveTrack(r)),
                        this.active = !0,
                    this.subtitle !== t && (this.subtitle = t,
                    this.initialized || this.init())
                }
            }, {
                key: "setActiveTrack",
                value: function(t) {
                    this.disableActiveTrack(),
                        this.activeTrack = t,
                        this.activeTrack.addEventListener("cuechange", this.onCueChangeRef)
                }
            }, {
                key: "disableActiveTrack",
                value: function() {
                    this.activeTrack && this.activeTrack.removeEventListener("cuechange", this.onCueChangeRef)
                }
            }, {
                key: "onCueChange",
                value: function() {
                    var t = this;
                    if (this.activeTrack && this.activeTrack.activeCues.length) {
                        var e = -1;
                        Object(d.a)(this.activeTrack.activeCues).forEach((function(n) {
                                e !== n.startTime && (t.activeTrack.mode === Ve && (t.activeTrack.mode = Ue),
                                    e = n.startTime,
                                    t.player.trigger(u.L, n))
                            }
                        ))
                    } else
                        this.player.trigger(u.L, new Ie(0,0,""))
                }
            }, {
                key: "disableSubtitle",
                value: function() {
                    this.disableActiveTrack(),
                        this.player.trigger(u.S)
                }
            }, {
                key: "initNative",
                value: function() {
                    var t = this;
                    this.initNativeTimeout = setTimeout((function() {
                            return t.init()
                        }
                    ), 100)
                }
            }, {
                key: "init",
                value: function() {
                    var t, e, n;
                    if (!this.initialized) {
                        var r, i = null === (t = this.player.getMediaItem().getSubtitles() || this.options.get(o.T)) || void 0 === t ? void 0 : t.map((function(t, e) {
                                return {
                                    language: t.language,
                                    trackId: e + 1,
                                    url: t.url
                                }
                            }
                        )), a = null === (e = this.player.getComponent(s.a)) || void 0 === e || null === (n = e.getTextAdaptations()) || void 0 === n ? void 0 : n.map((function(t) {
                                var e = t.accessibility
                                    , n = t.id;
                                return {
                                    accessibility: e,
                                    language: t.lang,
                                    trackId: n,
                                    role: t.role
                                }
                            }
                        )), c = ["subtitles", "captions", void 0], l = this.player.getComponent(s.d), f = Object(d.a)(l.getNativeTextTracks()).filter((function(t) {
                                var e = t.customCreated
                                    , n = t.kind;
                                return !e && c.includes(n)
                            }
                        )).filter((function(t) {
                                var e = t.id
                                    , n = t.language
                                    , r = t.label;
                                return e || n || r
                            }
                        )).map((function(t, e) {
                                return t.trackId = e + 1,
                                    t
                            }
                        ));
                        if ((null == i ? void 0 : i.length) ? (r = i,
                            this.source = Me) : (null == a ? void 0 : a.length) ? (r = a,
                            this.source = Fe) : (null == f ? void 0 : f.length) && (r = f,
                            this.source = Ne),
                        !this.subtitles && r && this.player.trigger(u.R, r),
                        this.active && r) {
                            switch (this.source) {
                                case Me:
                                    this.initExternal();
                                    break;
                                case Fe:
                                    this.initFragmented()
                            }
                            this.subtitle && this.player.trigger(u.Q, this.subtitle),
                                this.initialized = !0
                        }
                    }
                }
            }, {
                key: "initExternal",
                value: function() {
                    this.player.getComponent(s.d).addNativeTextTracks(this.subtitles, !0),
                        this.subtitleManager = new Pe(this.player)
                }
            }, {
                key: "initFragmented",
                value: function() {
                    this.player.getComponent(s.d).addNativeTextTracks(this.subtitles),
                        this.subtitleManager = new je(this.player)
                }
            }, {
                key: "exposeApi",
                value: function() {
                    var t = this;
                    this.player.setActiveSubtitle = function(e) {
                        return t.player.trigger(u.Q, e)
                    }
                        ,
                        this.player.getActiveSubtitle = function() {
                            return t.active && t.subtitle
                        }
                        ,
                        this.player.disableSubtitle = function() {
                            return t.player.trigger(u.S)
                        }
                        ,
                        this.player.enableSubtitle = function() {
                            return t.player.trigger(u.K)
                        }
                        ,
                        this.player.listSubtitles = function() {
                            return t.subtitles
                        }
                }
            }, {
                key: "disable",
                value: function() {
                    this.active = !1,
                        this.disableActiveTrack()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.initialized = !1,
                        this.subtitle = void 0,
                        clearTimeout(this.initNativeTimeout),
                    this.subtitleManager && this.subtitleManager.destroy()
                }
            }]),
                t
        }();
        function Ge(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                        !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = Te()(t);
                if (e) {
                    var i = Te()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else
                    n = r.apply(this, arguments);
                return Ee()(this, n)
            }
        }
        He.enabled = !0,
            He.moduleId = "subtitle";
        var ze, Ye, We = function(t) {
            ye()(n, t);
            var e = Ge(n);
            function n() {
                return fe()(this, n),
                    e.apply(this, arguments)
            }
            return pe()(n, [{
                key: "onSubtitles",
                value: function(t) {
                    me()(Te()(n.prototype), "onSubtitles", this).call(this, t),
                    this.active && this.subtitle || this.player.trigger(u.J.SUBTITLE_DISABLED)
                }
            }]),
                n
        }(He), Ke = n(38), qe = n.n(Ke), Qe = n(39), Je = n.n(Qe), Xe = n(31), $e = n.n(Xe), Ze = new Promise((function(t, e) {
                window.cast ? t() : window.__onGCastApiAvailable = function(n) {
                    n ? "complete" === document.readyState ? t() : window.addEventListener("load", (function e() {
                            t(),
                                window.removeEventListener("load", e)
                        }
                    )) : e()
                }
            }
        )).then((function() {
                return !0
            }
        )).catch((function() {
                return !1
            }
        )), tn = Je()($e.a.mark((function t() {
                var e;
                return $e.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                        Ze;
                                case 2:
                                    return e = t.sent,
                                        t.abrupt("return", e ? Promise.resolve() : Promise.reject());
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                    }
                ), t)
            }
        ))), en = function() {
            function t(e) {
                var n = this;
                fe()(this, t),
                    this.player = e,
                    this.bar = void 0,
                    this.icon = void 0,
                    this.label = void 0,
                    this.gui = this.player.getComponent("gui"),
                this.gui && (e.on(u.J.CHROMECAST_CONNECTED, (function(t) {
                        return n.show(t)
                    }
                )),
                    e.on(u.J.CHROMECAST_DISCONNECTED, (function() {
                            return n.hide()
                        }
                    )),
                    this.create())
            }
            return pe()(t, [{
                key: "create",
                value: function() {
                    var t = this.gui.getContainer();
                    this.bar = document.createElement("div"),
                        this.bar.classList.add("".concat(this.player.options.get("cssPrefix"), "-cast-bar")),
                        this.icon = document.createElement("span"),
                        this.bar.appendChild(this.icon),
                        this.label = document.createElement("p"),
                        this.bar.appendChild(this.label),
                        t.appendChild(this.bar)
                }
            }, {
                key: "show",
                value: function(t) {
                    this.bar && (this.bar.classList.add("active"),
                        this.label.innerHTML = t.friendlyName)
                }
            }, {
                key: "hide",
                value: function() {
                    this.bar && this.bar.classList.remove("active")
                }
            }]),
                t
        }(), nn = function() {
            function t(e) {
                var n = this;
                fe()(this, t),
                    this.player = e,
                    this.gui = void 0,
                    this.playerState = "IDLE",
                    tn().then((function() {
                            n.player.on(cast.framework.CastContextEventType.SESSION_STATE_CHANGED, (function(t, e) {
                                    return n.onSessionStateChanged(t, e)
                                }
                            )),
                                n.player.on(cast.framework.CastContextEventType.CAST_STATE_CHANGED, (function(t) {
                                        return n.onCastStateChanged(t)
                                    }
                                )),
                                n.player.on(cast.framework.RemotePlayerEventType.PLAYER_STATE_CHANGED, (function(t) {
                                        return n.onPlayerStateChanged(t)
                                    }
                                )),
                                n.player.on(cast.framework.RemotePlayerEventType.CURRENT_TIME_CHANGED, (function(t, e) {
                                        return n.onPlayerTimeChanged(t, e)
                                    }
                                ))
                        }
                    )).catch((function() {}
                    )),
                    this.init()
            }
            return pe()(t, [{
                key: "init",
                value: function() {
                    var t = this;
                    this.gui = this.player.getComponent("gui"),
                        this.controls = this.player.getComponent("controls"),
                        tn().then((function() {
                                return t.initCastGui()
                            }
                        )).catch((function() {}
                        ))
                }
            }, {
                key: "initCastGui",
                value: function() {
                    var t = this;
                    this.gui.hidePlayBigButton(),
                        this.chromecastInfoBar = new en(this.player),
                        this.castButton = this.controls.createButton("cast"),
                        this.castButton.hideClass = "hidden",
                        this.castButton.on("click", (function() {
                                return t.player.connect()
                            }
                        )),
                        this.controls.addExtraControl(this.castButton),
                        requestAnimationFrame((function() {
                                return t.controls.rebuild()
                            }
                        ))
                }
            }, {
                key: "onSessionStateChanged",
                value: function(t, e) {
                    var n = this;
                    switch (this.showControls(),
                        t) {
                        case cast.framework.SessionState.SESSION_RESUMED:
                            "IDLE" === this.playerState && this.gui.showPlayBigButton(),
                                setTimeout((function() {
                                        var t = e && e.customData && e.customData.options;
                                        t && t.live && n.controls.showLive()
                                    }
                                ), 100)
                    }
                }
            }, {
                key: "onCastStateChanged",
                value: function(t) {
                    var e = this;
                    switch (this.showControls(),
                        requestAnimationFrame((function() {
                                return e.controls.rebuild()
                            }
                        )),
                        t) {
                        case cast.framework.CastState.NO_DEVICES_AVAILABLE:
                            this.castButton.removeClass("active"),
                                this.castButton.hide();
                            break;
                        case cast.framework.CastState.NOT_CONNECTED:
                            this.castButton.removeClass("active"),
                                this.castButton.show();
                            break;
                        case cast.framework.CastState.CONNECTING:
                            this.castButton.removeClass("pending"),
                                this.castButton.show();
                            break;
                        case cast.framework.CastState.CONNECTED:
                            this.castButton.addClass("active"),
                                this.castButton.show()
                    }
                }
            }, {
                key: "onPlayerStateChanged",
                value: function(t) {
                    var e = this;
                    switch (this.playerState = t.value,
                        t.value) {
                        case "PLAYING":
                            setTimeout((function() {
                                    return e.controls.showPause()
                                }
                            ), 0),
                                this.gui.hidePlayBigButton();
                            break;
                        case "PAUSED":
                            this.gui.showPlayBigButton();
                            break;
                        case "IDLE":
                            this.gui.showPlayBigButton(),
                                this.controls.showPlay(),
                                this.gui.showPlayBigButton()
                    }
                }
            }, {
                key: "onPlayerTimeChanged",
                value: function(t, e) {
                    var n = t / e * 100;
                    this.gui.controlsBar.progressControl.update(n, e),
                        this.gui.controlsBar.timeDisplay.update(t, e)
                }
            }, {
                key: "showControls",
                value: function() {
                    this.controls.enable()
                }
            }]),
                t
        }(), rn = [], an = function() {
            function t(e) {
                var n = this;
                fe()(this, t),
                    this.player = e,
                    this.options = this.player.options,
                    this.timeShift = this.player.timeShift,
                    this.id = this.options.get("id"),
                    this.player.on(u.J.DESTROY, (function() {
                            return n.onDestroy()
                        }
                    )),
                    this.removeGlobalListeners(),
                    this.player.loadCastMedia = function() {
                        return n.load()
                    }
                    ,
                    this.chromecastOpts = this.options.get("chromecast"),
                this.chromecastOpts && (this.appId = this.chromecastOpts.appId,
                    this.sessionState = void 0,
                    this.onRemotePlayerTimeChangedRef = this.onRemotePlayerTimeChanged.bind(this),
                    this.currentTextTrack = void 0,
                    this.currentAudioTrack = void 0,
                    this.stopped = !1,
                    this.currentTime = 0,
                    this._castState = void 0,
                    this._castContext = void 0,
                    this._castSession = void 0,
                    this.initAutoplay = this.options.get("autoplay"),
                    this.listeners = [],
                this.chromecastOpts.resumeSession && this.options.set("autoplay", !1),
                    this.player.connect = function(t) {
                        return n.connect(t)
                    }
                    ,
                    this.player.stopCasting = function() {
                        return n.stopCasting()
                    }
                    ,
                    this.player.on(u.J.READY, (function() {
                            return n.init()
                        }
                    )),
                    this.player.on(u.J.GUI_READY, (function() {
                            return new nn(n.player)
                        }
                    )))
            }
            return pe()(t, [{
                key: "removeGlobalListeners",
                value: function() {
                    for (; rn.length; ) {
                        var t = rn.pop();
                        t.object.removeEventListener(t.event, t.fn)
                    }
                }
            }, {
                key: "castState",
                get: function() {
                    return this._castState
                },
                set: function(t) {
                    this._castState = t,
                    t && this.player.trigger(cast.framework.CastContextEventType.CAST_STATE_CHANGED, t)
                }
            }, {
                key: "castContext",
                get: function() {
                    return cast && cast.framework.CastContext.getInstance()
                }
            }, {
                key: "castSession",
                get: function() {
                    return cast && this.castContext && this.castContext.getCurrentSession()
                }
            }, {
                key: "isSessionActive",
                get: function() {
                    return this.castContext && (this.castContext.getSessionState() === cast.framework.SessionState.SESSION_STARTED || this.castContext.getSessionState() === cast.framework.SessionState.SESSION_RESUMED)
                }
            }, {
                key: "onDestroy",
                value: function() {
                    this.removeGlobalListeners(),
                        this.sessionState = void 0,
                        this.currentTextTrack = void 0,
                        this.currentAudioTrack = void 0,
                        this.stopped = !1,
                        this.currentTime = 0,
                        this._castState = void 0,
                        this._castContext = void 0,
                        this._castSession = void 0
                }
            }, {
                key: "registerEvents",
                value: function() {
                    var t = this;
                    this.player.on(u.J.PLAYING, (function() {
                            return t.stopped = !1
                        }
                    )),
                        this.player.on(u.J.SUBTITLE, (function(e) {
                                return t.onSubtitle(e)
                            }
                        )),
                        this.player.on(u.J.SUBTITLE_DISABLED, (function() {
                                return t.onSubtitle()
                            }
                        )),
                        this.player.on(u.J.PAUSE_REQUEST, (function() {
                                "PAUSED" !== ze.playerState && t.playOrPause()
                            }
                        )),
                        this.player.on(u.J.PLAY_REQUEST, (function() {
                                "PLAYING" !== ze.playerState && t.playOrPause()
                            }
                        )),
                        this.player.on(u.J.STOP_REQUEST, (function() {
                                return t.stop()
                            }
                        )),
                        this.player.on(u.J.VOLUME_CHANGE_REQUEST, (function(e) {
                                return t.setVolume(e)
                            }
                        )),
                        this.player.on(u.J.AUDIO_TRACK_CHANGE_REQUEST, (function(e) {
                                return t.setTrack({
                                    trackId: e,
                                    type: "AUDIO"
                                })
                            }
                        )),
                        this.player.on(u.J.SUBTITLE_ENABLE_REQUEST, (function() {
                                t.isSessionActive && (t.currentTextTrack = t.currentTextTrack || t.player.listSubtitles()[0],
                                    t.player.trigger(u.J.SUBTITLE, t.currentTextTrack))
                            }
                        ))
                }
            }, {
                key: "init",
                value: function() {
                    var t = this;
                    tn().then((function() {
                            t.registerEvents(),
                                t.timeShift = t.player.timeShift,
                            t.chromecastOpts.resumeSession && setTimeout((function() {
                                    var e = t.castSession && t.castSession.getMediaSession();
                                    e && e.customData && e.customData.options ? t.load() : t.sessionState !== cast.framework.SessionState.SESSION_RESUMED && t.player.play()
                                }
                            ), 300),
                            ze && Ye || (ze = new window.cast.framework.RemotePlayer,
                                Ye = new window.cast.framework.RemotePlayerController(ze)),
                                t.registerRemotePlayerEvents(),
                                t.setupContext(t.castContext),
                                t.player.on(u.J.SEEK_TO_REQUEST, (function(t) {
                                        ze.currentTime = t,
                                            Ye.seek()
                                    }
                                )),
                                t.player.on(u.J.SEEK_REQUEST, (function(t) {
                                        ze.currentTime = t * ze.duration / 100,
                                            Ye.seek()
                                    }
                                ))
                        }
                    )).catch((function() {
                            t.initAutoplay && t.player.play()
                        }
                    ))
                }
            }, {
                key: "setupContext",
                value: function(t) {
                    var e = this;
                    if (t) {
                        var n = function(t) {
                            return e.onCastStateChanged(t)
                        }
                            , r = function(t) {
                            return e.onSessionStateChanged(t)
                        };
                        t.setOptions({
                            receiverApplicationId: this.appId,
                            autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
                        }),
                            rn.push({
                                object: t,
                                event: cast.framework.CastContextEventType.CAST_STATE_CHANGED,
                                fn: n
                            }),
                            rn.push({
                                object: t,
                                event: cast.framework.CastContextEventType.SESSION_STATE_CHANGED,
                                fn: r
                            }),
                            this.castState = t.getCastState(),
                            t.addEventListener(cast.framework.CastContextEventType.CAST_STATE_CHANGED, n),
                            t.addEventListener(cast.framework.CastContextEventType.SESSION_STATE_CHANGED, r)
                    }
                }
            }, {
                key: "setVolume",
                value: function(t) {
                    Ye && (ze.volumeLevel = t / 100,
                        Ye.setVolumeLevel())
                }
            }, {
                key: "onSubtitle",
                value: function(t) {
                    this.currentTextTrack = t,
                        this.setTrack(t)
                }
            }, {
                key: "setTrack",
                value: function(t) {
                    if (this.castSession) {
                        var e = {
                            type: "EDIT_TRACKS_INFO",
                            requestId: 1,
                            mediaSessionId: this.castSession.getMediaSession().mediaSessionId,
                            activeTrackIds: t && t.trackId ? [t.trackId] : []
                        }
                            , n = this.currentTextTrack && this.currentTextTrack.trackId;
                        t && "AUDIO" === t.type && (this.player.trigger(u.J.AUDIO_TRACK_CHANGED, t),
                        n && e.activeTrackIds.push(n)),
                            this.castSession.sendMessage("urn:x-cast:com.google.cast.media", e)
                    }
                }
            }, {
                key: "registerRemotePlayerEvents",
                value: function() {
                    var t = this;
                    if (Ye) {
                        var e = function(e) {
                            return t.onRemotePlayerTimeChanged(e)
                        }
                            , n = function(e) {
                            return t.onRemotePlayerStateChanged(e)
                        };
                        rn.push({
                            object: Ye,
                            event: cast.framework.RemotePlayerEventType.CURRENT_TIME_CHANGED,
                            fn: e
                        }),
                            rn.push({
                                object: Ye,
                                event: cast.framework.RemotePlayerEventType.PLAYER_STATE_CHANGED,
                                fn: n
                            }),
                            Ye.addEventListener(cast.framework.RemotePlayerEventType.CURRENT_TIME_CHANGED, e),
                            Ye.addEventListener(cast.framework.RemotePlayerEventType.PLAYER_STATE_CHANGED, n)
                    }
                }
            }, {
                key: "connect",
                value: function(t) {
                    var e = t.audio
                        , n = t.subtitle;
                    return this.audioLanguage = e.lang,
                        this.subtitleLang = n.language,
                        this.castContext.requestSession()
                }
            }, {
                key: "onRemotePlayerStateChanged",
                value: function(t) {
                    this.player.trigger(cast.framework.RemotePlayerEventType.PLAYER_STATE_CHANGED, t)
                }
            }, {
                key: "onRemotePlayerTimeChanged",
                value: function(t) {
                    this.currentTime = ze.currentTime;
                    var e = ze.duration;
                    ze && ze.liveSeekableRange && (e = ze.liveSeekableRange.end),
                        this.player.trigger(cast.framework.RemotePlayerEventType.CURRENT_TIME_CHANGED, this.currentTime, e)
                }
            }, {
                key: "onCastStateChanged",
                value: function(t) {
                    switch (this.castState = t.castState,
                        t.castState) {
                        case cast.framework.CastState.NOT_CONNECTED:
                            this.player.trigger(u.J.CHROMECAST_DISCONNECTED);
                            break;
                        case cast.framework.CastState.CONNECTED:
                            if (this.player.trigger(u.J.CHROMECAST_CONNECTED, this.castSession.getCastDevice()),
                                !(this.castSession && this.castSession.getMediaSession())) {
                                var e = !this.player.isLive() && this.player.getCurrentTime();
                                this.load(e)
                            }
                            this.player.stop(!0)
                    }
                }
            }, {
                key: "onSessionStateChanged",
                value: function(t) {
                    this.sessionState = t.sessionState;
                    var e = this.castSession && this.castSession.getMediaSession();
                    switch (this.player.trigger(cast.framework.CastContextEventType.SESSION_STATE_CHANGED, t.sessionState, e),
                        t.sessionState) {
                        case cast.framework.SessionState.SESSION_ENDED:
                            if (this.unFreezePlayer(),
                                !this.stopped) {
                                var n = this.currentTime || 0;
                                this.options.set("startTime", n),
                                    this.player.play()
                            }
                            break;
                        case cast.framework.SessionState.SESSION_STARTED:
                            this.freezePlayer();
                            break;
                        case cast.framework.SessionState.SESSION_RESUMED:
                            if (this.freezePlayer(),
                            !e || !e.media || !e.media.tracks)
                                return;
                            var r = e.media.tracks.filter((function(t) {
                                    return "AUDIO" === t.type
                                }
                            )).map((function(t) {
                                    return t.lang = t.language,
                                        t.id = t.trackId,
                                        t
                                }
                            ))
                                , i = e.media.tracks.filter((function(t) {
                                    return "TEXT" === t.type
                                }
                            ));
                            this.currentTextTrack = this.getCurrentTrack("TEXT"),
                                this.currentAudioTrack = this.getCurrentTrack("AUDIO"),
                            this.currentTextTrack && !this.currentTextTrack.id && (this.currentTextTrack.id = this.currentTextTrack.trackId),
                                this.player.trigger(u.J.AUDIO_TRACK_LIST, r),
                            i && i.length && (this.player.trigger(u.J.SUBTITLES, i),
                            this.currentTextTrack && this.player.trigger(u.J.SUBTITLE, this.currentTextTrack)),
                            this.currentAudioTrack && this.player.trigger(u.J.AUDIO_TRACK_CHANGED, this.currentAudioTrack)
                    }
                }
            }, {
                key: "load",
                value: function(t) {
                    var e = this
                        , n = this.player.mediaItem
                        , r = n.getSource().dash || n.getSource().DASH || [{}]
                        , i = qe()(r, 1)[0]
                        , a = n.getDrm()
                        , o = i.src;
                    if (o) {
                        this.timeShift && this.timeShift.isEnabled() && (o = this.timeShift.generateUrl(o));
                        var s = new window.chrome.cast.media.MediaInfo(o,"application/dash+xml");
                        if (s.metadata = new chrome.cast.media.GenericMediaMetadata,
                            s.customData = {},
                        this.options.get("live") && (s.customData.live = !0,
                            s.streamType = chrome.cast.media.StreamType.LIVE),
                            s.customData.options = this.player.getOptions(),
                            s.customData.debug = this.chromecastOpts.debug,
                        null != a && a.widevine) {
                            var u = a.widevine.src;
                            this.chromecastOpts.config && this.chromecastOpts.config.videoSessionId && (u += "&videoSessionId=".concat(this.chromecastOpts.config.videoSessionId),
                                s.customData.videoSessionId = this.chromecastOpts.config.videoSessionId),
                            this.chromecastOpts.config && this.chromecastOpts.config.videoSession && (s.customData.videoSession = this.chromecastOpts.config.videoSession),
                                s.customData.licenseUrl = u,
                                s.metadata.title = this.chromecastOpts.title || "",
                                s.metadata.subtitle = this.chromecastOpts.subtitle || "",
                            this.chromecastOpts.image && (s.metadata.images = [{
                                url: this.chromecastOpts.image
                            }])
                        }
                        var c = new window.chrome.cast.media.LoadRequest(s);
                        t && (c.currentTime = t),
                            this.castSession.loadMedia(c).then((function() {
                                    var t = e.getMedia();
                                    if (null != t && t.tracks) {
                                        var n = t.tracks.find((function(t) {
                                                return t.language === e.audioLanguage && "AUDIO" === t.type
                                            }
                                        ))
                                            , r = t.tracks.find((function(t) {
                                                return t.language === e.subtitleLang && "TEXT" === t.type
                                            }
                                        ));
                                        n && (e.currentAudioTrack = n),
                                        r && (e.currentTextTrack = r),
                                            n ? e.setTrack(e.currentAudioTrack) : r && e.setTrack(e.currentTextTrack)
                                    }
                                    e.setVolume(e.player.getVolume())
                                }
                            ), (function(t) {
                                    console.log("loadMedia ERROR: ", t)
                                }
                            ))
                    }
                }
            }, {
                key: "getCurrentTrack",
                value: function(t) {
                    var e = this.getMedia();
                    if (e) {
                        var n = mediaSession.activeTrackIds.reduce((function(n, r) {
                                return e.tracks.find((function(e) {
                                        return e.trackId === r && e.type === t
                                    }
                                )) || n
                            }
                        ), void 0);
                        return n && !n.trackId && "AUDIO" === t && (n = e.tracks.find((function(e) {
                                return e.type === t
                            }
                        ))),
                            n
                    }
                }
            }, {
                key: "getMedia",
                value: function() {
                    var t = this.castSession && this.castSession.getMediaSession();
                    return null == t ? void 0 : t.media
                }
            }, {
                key: "freezePlayer",
                value: function() {
                    this.player.freeze()
                }
            }, {
                key: "unFreezePlayer",
                value: function() {
                    this.player.unFreeze()
                }
            }, {
                key: "playOrPause",
                value: function() {
                    (this.player.frozen || this.castSession) && ("IDLE" === ze.playerState ? this.load() : Ye.playOrPause())
                }
            }, {
                key: "stopCasting",
                value: function() {
                    this.stopped = !1,
                        this.castSession.endSession(!0)
                }
            }, {
                key: "stop",
                value: function() {
                    (this.player.frozen || this.castSession) && (this.stopped = !0,
                        this.player.stop(!0),
                        Ye.stop(),
                        this.castSession.endSession(!0))
                }
            }]),
                t
        }();
        an.enabled = !0,
            an.moduleId = "chromecast-sender";
        var on = an
            , sn = 503
            , un = 504
            , cn = 505
            , ln = 506
            , dn = 507
            , fn = 509
            , hn = 511
            , pn = Object.freeze({
            __proto__: null,
            CLEARKEY: "1077efec-c0b2-4d02-ace3-3c1e52e2fb4b",
            FAIRPLAY: "94ce86fb-07ff-4f43-adb8-93d2fa968ca2",
            PLAYREADY: "9a04f079-9840-4286-ab92-e65be0885f95",
            WIDEVINE: "edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"
        });
        function gn(t) {
            if (null === t)
                return [];
            for (var e = new DataView(t), n = !1, r = [], i = 0; !n; ) {
                var a, o, s = void 0, u = void 0, c = i;
                if (i >= e.buffer.byteLength) {
                    n = !0;
                    break
                }
                a = i + e.getUint32(i),
                    i += 4,
                    1886614376 === e.getUint32(i) ? (i += 4,
                        0 === (o = e.getUint8(i)) || 1 === o ? (i++,
                            i += 3,
                            s = mn(new Uint8Array(t,i,16)),
                            i += 16,
                            s = s.toLowerCase(),
                        0 === o && (u = mn(new Uint8Array(t,Math.min(i + 8, t.byteLength - 16),16))),
                            i += 4,
                            r.push({
                                id: s,
                                data: e.buffer.slice(c, a),
                                keyId: u
                            }),
                            i = a) : i = a) : i = a
            }
            return r
        }
        function mn(t) {
            var e = []
                , n = function(t) {
                for (var e = "", n = 0; n < t.length; ++n) {
                    var r = t[n].toString(16);
                    1 == r.length && (r = "0" + r),
                        e += r
                }
                return e
            };
            return e.push(n(t.subarray(0, 4))),
                e.push(n(t.subarray(4, 6))),
                e.push(n(t.subarray(6, 8))),
                e.push(n(t.subarray(8, 10))),
                e.push(n(t.subarray(10, 16))),
                e.join("-")
        }
        function vn(t, e) {
            for (var n = 0; n < t.length; n++)
                if (t[n].keyId === e)
                    return t[n];
            return null
        }
        function yn(t) {
            var e;
            return null === (e = Object.entries(g).find((function(e) {
                    var n = Object(l.a)(e, 2)
                        , r = (n[0],
                        n[1]);
                    return t === r
                }
            ))) || void 0 === e ? void 0 : e[0]
        }
        function bn(t, e) {
            if (t.byteLength !== e.byteLength)
                return !1;
            for (var n = new Uint8Array(t), r = new Uint8Array(e), i = 0; i < n.length; i++)
                if (n[i] !== r[i])
                    return !1;
            return !0
        }
        function En(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                ))),
                    n.push.apply(n, r)
            }
            return n
        }
        function _n(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? En(Object(n), !0).forEach((function(e) {
                        Object(r.a)(t, e, n[e])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : En(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                ))
            }
            return t
        }
        var Tn = Object.keys(g).map((function(t) {
                return t.toLowerCase()
            }
        ));
        function Sn(t, e) {
            return On.apply(this, arguments)
        }
        function On() {
            return (On = Object(c.a)(c.b.mark((function t(e, n) {
                    var r, a, s, d, f, h, p, m, b, E, _, T, S, O, k, A, D, x, C, P, L, R, j, I, M, F, N, B;
                    return c.b.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (B = function() {
                                            k = [],
                                                E.forEach((function(t) {
                                                        t.close().catch((function() {}
                                                        )),
                                                            t.removeEventListener("message", I),
                                                            t = null
                                                    }
                                                )),
                                                E = [],
                                            A && A(),
                                                a.removeEventListener("encrypted", L)
                                        }
                                            ,
                                            N = function(t, n) {
                                                t.update(n).then((function() {
                                                        e.trigger(u.N)
                                                    }
                                                )).catch((function(t) {
                                                        var e = i.a.DRM_SESSION_UPDATE_FAILED
                                                            , n = ln;
                                                        "Rejected with system code (18)" === t.message && (e = i.a.LICENSE_RESPONSE_REJECTED,
                                                            n = hn),
                                                            C(n, e, t)
                                                    }
                                                ))
                                            }
                                            ,
                                            F = function(t, n, r) {
                                                e.trigger(u.O, t, yn(_.keySystem));
                                                var a = (s.get(o.i) || {}).drm
                                                    , c = void 0 === a ? {} : a
                                                    , l = _n({}, r, {}, c.headers || {});
                                                return w.d.post(t, {
                                                    cancelToken: new w.d.CancelToken((function(t) {
                                                            return A = t
                                                        }
                                                    )),
                                                    data: n,
                                                    responseType: w.a,
                                                    withCredentials: c.withCredentials,
                                                    headers: l,
                                                    params: c.params
                                                }).then((function(n) {
                                                        var r = n.data
                                                            , i = n.metric
                                                            , a = n.xhr;
                                                        return e.trigger(u.o, {
                                                            duration: i.duration,
                                                            type: "LICENSE",
                                                            statusCode: a.status,
                                                            url: t,
                                                            timestamp: Date.now()
                                                        }),
                                                            r
                                                    }
                                                )).catch((function(n) {
                                                        var r = n.metric
                                                            , a = n.xhr;
                                                        C(dn, i.a.DRM_LOAD_LICENSE_KEY_FAILED),
                                                            e.trigger(u.o, {
                                                                duration: r.duration,
                                                                type: "LICENSE",
                                                                statusCode: a.status,
                                                                url: t,
                                                                timestamp: Date.now
                                                            })
                                                    }
                                                ))
                                            }
                                            ,
                                            M = function() {
                                                return (M = Object(c.a)(c.b.mark((function t(e) {
                                                        var n, r, i, a, o, s, u, l, d, h, p, g;
                                                        return c.b.wrap((function(t) {
                                                                for (; ; )
                                                                    switch (t.prev = t.next) {
                                                                        case 0:
                                                                            n = e.target,
                                                                                r = e.message,
                                                                                i = [];
                                                                            try {
                                                                                if (a = new Uint16Array(r),
                                                                                    o = String.fromCharCode.apply(null, a),
                                                                                    s = new DOMParser,
                                                                                    (u = s.parseFromString(o, "application/xml")).getElementsByTagName("Challenge")[0])
                                                                                    for ((r = u.getElementsByTagName("Challenge")[0].childNodes[0].nodeValue) && (r = atob(r)),
                                                                                             l = u.getElementsByTagName("name"),
                                                                                             d = u.getElementsByTagName("value"),
                                                                                             h = 0; h < l.length; h++)
                                                                                        i[l[h].childNodes[0].nodeValue] = d[h].childNodes[0].nodeValue
                                                                            } catch (t) {}
                                                                            return p = f[S].multikeySrc || f[S].src,
                                                                                t.next = 7,
                                                                                F(p, r, i);
                                                                        case 7:
                                                                            (g = t.sent) && N(n, g);
                                                                        case 9:
                                                                        case "end":
                                                                            return t.stop()
                                                                    }
                                                            }
                                                        ), t)
                                                    }
                                                )))).apply(this, arguments)
                                            }
                                            ,
                                            I = function(t) {
                                                return M.apply(this, arguments)
                                            }
                                            ,
                                            j = function(t, e, n, r) {
                                                var a = t.createSession();
                                                a.keyId = r,
                                                    a.addEventListener("message", I),
                                                    a.generateRequest(e, n).catch((function() {
                                                            C(cn, i.a.DRM_GENERATE_LICENSE_CHALLENGE_FAILED)
                                                        }
                                                    )),
                                                    E.push(a)
                                            }
                                            ,
                                            R = function(t, e) {
                                                return d ? !!vn(k, e) : k.some((function(e) {
                                                        return bn(e.initData, t)
                                                    }
                                                ))
                                            }
                                            ,
                                            L = function(t) {
                                                if (a.mediaKeys) {
                                                    var n = gn(new Uint8Array(t.initData).buffer)
                                                        , r = pn[S.toUpperCase()].toLowerCase()
                                                        , i = n.find((function(t) {
                                                            return t.id === r
                                                        }
                                                    ))
                                                        , o = (null == i ? void 0 : i.keyId) || r;
                                                    if (!R(t.initData, o)) {
                                                        e.trigger(u.M, t);
                                                        var s = new wn;
                                                        s.keyId = o,
                                                        d || (s.initData = t.initData),
                                                            k.push(s),
                                                            j(a.mediaKeys, t.initDataType, t.initData, o)
                                                    }
                                                }
                                            }
                                            ,
                                            P = function() {
                                                C(un, i.a.DRM_GENERATE_MEDIA_KEYS_FAILED)
                                            }
                                            ,
                                            C = function(t, n, r) {
                                                e.trigger(u.f, {
                                                    code: t,
                                                    message: n,
                                                    type: "DRM_ERROR",
                                                    renderer: "DASH",
                                                    originalMessage: r
                                                })
                                            }
                                            ,
                                            x = function() {
                                                return (x = Object(c.a)(c.b.mark((function t(e) {
                                                        var r, i, a;
                                                        return c.b.wrap((function(t) {
                                                                for (; ; )
                                                                    switch (t.prev = t.next) {
                                                                        case 0:
                                                                            r = void 0;
                                                                        case 1:
                                                                            if (!e.length || r) {
                                                                                t.next = 9;
                                                                                break
                                                                            }
                                                                            return i = e.shift(),
                                                                                a = v(n, h[i]),
                                                                                t.next = 6,
                                                                                y(g[i.toUpperCase()], a).catch((function() {}
                                                                                ));
                                                                        case 6:
                                                                            r = t.sent,
                                                                                t.next = 1;
                                                                            break;
                                                                        case 9:
                                                                            return t.abrupt("return", r);
                                                                        case 10:
                                                                        case "end":
                                                                            return t.stop()
                                                                    }
                                                            }
                                                        ), t)
                                                    }
                                                )))).apply(this, arguments)
                                            }
                                            ,
                                            D = function(t) {
                                                return x.apply(this, arguments)
                                            }
                                            ,
                                            a = e.getRendererElm(),
                                            s = e.options,
                                            d = s.get(o.F),
                                            e.on(u.e, B),
                                            e.on(u.t, B),
                                            e.on(u.nb, B),
                                            f = e.mediaItem.getDrm(),
                                            h = s.get(o.M),
                                            p = s.get(o.V) || Tn,
                                            m = Object.keys(f),
                                            b = p.filter((function(t) {
                                                    return m.includes(t)
                                                }
                                            )),
                                            E = [],
                                        0 !== b.length) {
                                            t.next = 27;
                                            break
                                        }
                                        return C(sn, i.a.DRM_NO_KEY_PROVIDED),
                                            t.abrupt("return", Promise.resolve());
                                    case 27:
                                        return t.next = 29,
                                            D(b.slice());
                                    case 29:
                                        if (_ = t.sent) {
                                            t.next = 33;
                                            break
                                        }
                                        return P(),
                                            t.abrupt("return", Promise.resolve());
                                    case 33:
                                        if (T = _.keySystem,
                                            S = null === (r = Object.entries(g).find((function(t) {
                                                    var e = Object(l.a)(t, 2);
                                                    e[0];
                                                    return e[1] === T
                                                }
                                            ))) || void 0 === r ? void 0 : r[0].toLowerCase(),
                                            t.t0 = a.mediaKeys,
                                            t.t0) {
                                            t.next = 40;
                                            break
                                        }
                                        return t.next = 39,
                                            _.createMediaKeys().catch(P);
                                    case 39:
                                        t.t0 = t.sent;
                                    case 40:
                                        return O = t.t0,
                                            t.next = 43,
                                            a.setMediaKeys(O).catch(P);
                                    case 43:
                                        return a.addEventListener("encrypted", L),
                                            k = [],
                                            A = null,
                                            t.abrupt("return", {
                                                destroy: B
                                            });
                                    case 47:
                                    case "end":
                                        return t.stop()
                                }
                        }
                    ), t)
                }
            )))).apply(this, arguments)
        }
        function wn() {
            this.keyId = null,
                this.initData = null
        }
        function kn(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                ))),
                    n.push.apply(n, r)
            }
            return n
        }
        function An(t) {
            var e = t.options
                , n = t.getRendererElm();
            n.addEventListener("webkitneedkey", (function(e) {
                    var r = e.initData
                        , o = function(t) {
                        var e = (r = t,
                            i = new Uint16Array(r.buffer),
                            String.fromCharCode.apply(null, i))
                            , n = document.createElement("a");
                        var r, i;
                        return n.href = e,
                            n.hostname
                    }(r);
                    (function() {
                            if (s)
                                return Promise.resolve(s);
                            return w.d.getBinary(d).then((function(t) {
                                    return t.data
                                }
                            ))
                        }
                    )().then((function(i) {
                            s = new Uint8Array(i),
                                r = function(t, e, n) {
                                    "string" == typeof e && (e = function(t) {
                                        for (var e = new ArrayBuffer(2 * t.length), n = new Uint16Array(e), r = 0, i = t.length; r < i; r++)
                                            n[r] = t.charCodeAt(r);
                                        return n
                                    }(e));
                                    var r = 0
                                        , i = new ArrayBuffer(t.byteLength + 4 + e.byteLength + 4 + n.byteLength)
                                        , a = new DataView(i);
                                    new Uint8Array(i,r,t.byteLength).set(t),
                                        r += t.byteLength,
                                        a.setUint32(r, e.byteLength, !0),
                                        r += 4;
                                    var o = new Uint16Array(i,r,e.length);
                                    return o.set(e),
                                        r += o.byteLength,
                                        a.setUint32(r, n.byteLength, !0),
                                        r += 4,
                                        new Uint8Array(i,r,n.byteLength).set(n),
                                        new Uint8Array(i,0,i.byteLength)
                                }(r, o, s),
                            n.webkitKeys || n.webkitSetMediaKeys(new WebKitMediaKeys(g.FAIRPLAY)),
                                (a = n.webkitKeys.createSession("video/mp4", r)).contentId = o,
                                t.trigger(u.M, e),
                                a.addEventListener("webkitkeymessage", f)
                        }
                    )).catch((function() {
                            t.trigger(u.f, {
                                code: fn,
                                type: "DRM_ERROR",
                                renderer: "HLS",
                                message: i.a.DRM_LOAD_CERTIFICATE_FAILED
                            })
                        }
                    ))
                }
            ));
            var a, s, c = t.mediaItem.getDrm().fairplay, l = c && c.src, d = c && c.cert;
            function f(n) {
                t.trigger(u.O, l, yn(g.FAIRPLAY)),
                    function(n, i) {
                        var s, c = e.get(o.i) || {}, d = c.drm || {}, f = d.headers, p = d.params, g = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? kn(Object(n), !0).forEach((function(e) {
                                        Object(r.a)(t, e, n[e])
                                    }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : kn(Object(n)).forEach((function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                    }
                                ))
                            }
                            return t
                        }({
                            "Content-Type": e.get(o.X)
                        }, f);
                        w.d.post(n, {
                            data: i,
                            responseType: w.a,
                            withCredentials: null == c || null === (s = c.drm) || void 0 === s ? void 0 : s.withCredentials,
                            headers: g,
                            params: p
                        }).then((function(e) {
                                return r = (n = e).data,
                                    i = n.metric,
                                    o = n.xhr,
                                    t.trigger(u.o, {
                                        duration: i.duration,
                                        type: "LICENSE",
                                        statusCode: o.status,
                                        url: l,
                                        timestamp: Date.now()
                                    }),
                                    a.update(new Uint8Array(r)),
                                    void t.trigger(u.N);
                                var n, r, i, o
                            }
                        )).catch((function(t) {
                                return h(t)
                            }
                        ))
                    }(l, n.message)
            }
            function h(e) {
                var n = e.metric
                    , r = e.xhr;
                t.trigger(u.f, {
                    code: dn,
                    renderer: "HLS",
                    type: "DRM_ERROR",
                    message: i.a.DRM_LOAD_LICENSE_KEY_FAILED
                }),
                    t.trigger(u.o, {
                        duration: n.duration,
                        type: "LICENSE",
                        statusCode: r.status,
                        url: url,
                        timestamp: Date.now()
                    })
            }
        }
        function Dn(t) {
            t.on(u.r, (function() {
                    var e = t.beforePlayTaskQueue;
                    t.mediaItem.getDrm() && e.push((function() {
                            return new Promise(function() {
                                var e = Object(c.a)(c.b.mark((function e(n) {
                                        var r, a, o;
                                        return c.b.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                        case 0:
                                                            return r = t.getComponent(s.a),
                                                                a = null == r ? void 0 : r.getAllAdaptationSets().filter((function(t) {
                                                                        var e = t.contentType
                                                                            , n = t.type;
                                                                        return e && [tt.AUDIO, tt.VIDEO].includes(n)
                                                                    }
                                                                )).map((function(t) {
                                                                        return {
                                                                            contentType: t.contentType,
                                                                            type: t.type
                                                                        }
                                                                    }
                                                                )),
                                                                o = xn(t.getRendererElm(), a),
                                                                e.prev = 3,
                                                                e.next = 6,
                                                                new o(t,a);
                                                        case 6:
                                                            e.next = 11;
                                                            break;
                                                        case 8:
                                                            e.prev = 8,
                                                                e.t0 = e.catch(3),
                                                                t.trigger(u.f, {
                                                                    code: un,
                                                                    message: i.a.DRM_GENERATE_MEDIA_KEYS_FAILED,
                                                                    type: "DRM_ERROR",
                                                                    renderer: "DASH",
                                                                    originalMessage: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
                                                                });
                                                        case 11:
                                                            n();
                                                        case 12:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                            }
                                        ), e, null, [[3, 8]])
                                    }
                                )));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }())
                        }
                    ))
                }
            ))
        }
        function xn(t, e) {
            return void 0 === e ? An : void 0 !== t.onencrypted && void 0 !== t.mediaKeys && void 0 !== navigator.requestMediaKeySystemAccess && "function" == typeof navigator.requestMediaKeySystemAccess ? Sn : void 0
        }
        Dn.enabled = !0,
            Dn.moduleId = "drm";
        var Cn = Dn
            , Pn = function() {
            function t(e) {
                Object(E.a)(this, t),
                    this.trackingCollector = window.AtdsTracking,
                    this.player = e;
                var n = this.player.options;
                this.config = n.get(o.U),
                void 0 !== this.trackingCollector && (parseFloat(this.trackingCollector.VERSION) < parseFloat("2.0.0") ? console.error("Tracking module requires collector script in version ".concat("2.0.0", " or later")) : this.config && (this.eventsQueue = [],
                    this.isNewSent = !1,
                    this.playerId = this.trackingCollector.generatePlayerId(),
                    this.rendererType = null,
                    this.mimeType = null,
                    this.currentBitrate = 0,
                    this.appendBitrateToEvent = this.config.appendBitrateToEvent,
                    this.registerEvents()))
            }
            return Object(E.b)(t, [{
                key: "registerEvents",
                value: function() {
                    var t = this;
                    [u.b, u.e, u.nb, u.f, u.tb, u.ub, u.jb, u.gb, u.r, u.zb, u.t, u.Q, u.S, u.x].forEach((function(e) {
                            t.player.on(e, (function() {
                                    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                                        r[i] = arguments[i];
                                    return t.event.apply(t, [e].concat(r))
                                }
                            ))
                        }
                    ))
                }
            }, {
                key: "event",
                value: function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                        n[r - 1] = arguments[r];
                    if (t === u.r) {
                        var i = n[0];
                        switch (this.isNewSent = !1,
                            this.url = i.url,
                            this.rendererType = i.rendererType.toUpperCase(),
                            this.mimeType = this.rendererType,
                            this.rendererType) {
                            case "DASH":
                                this.mimeType = "DASH",
                                    this.rendererType = "HTML5"
                        }
                    }
                    var a = this.normalizeTime(this.player.getCurrentTime()) || 0;
                    this.isNewSent || t === u.tb ? this.sendEvent.apply(this, [t, a].concat(n)) : this.eventsQueue.push([t, a].concat(n))
                }
            }, {
                key: "normalizeTime",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return this.player.timeShift.isEnabled() && (t += this.player.getLiveStartUTC()),
                        parseInt(t, 10)
                }
            }, {
                key: "prepareEventData",
                value: function(t, e) {
                    var n = [this.playerId, t, e];
                    return this.appendBitrateToEvent && n.push(this.currentBitrate),
                        n
                }
            }, {
                key: "sendEvent",
                value: function(t, e) {
                    for (var n, r, o, s, c, l, f = arguments.length, h = new Array(f > 2 ? f - 2 : 0), p = 2; p < f; p++)
                        h[p - 2] = arguments[p];
                    var g = h[0] || 0;
                    switch (t) {
                        case u.tb:
                            if (this.isNewSent)
                                return;
                            this.isNewSent = !0;
                            var m = this.config
                                , v = m.collector
                                , y = m.customData
                                , b = m.customerId
                                , E = m.productId
                                , _ = m.productTitle
                                , T = m.productType
                                , O = m.sessionId
                                , w = m.subscriberId
                                , k = m.subscriberProfileId;
                            for (this.trackingCollector.newSession({
                                playerId: this.playerId,
                                collector: v,
                                customData: y,
                                customerId: b,
                                productId: E,
                                productTitle: _,
                                productType: T,
                                subscriberId: w,
                                subscriberProfileId: k,
                                sessionId: O,
                                url: this.url,
                                terminal: S.a.isMobile() ? "PHONE" : "PC",
                                duration: parseInt(g, 10),
                                rendererType: this.rendererType,
                                mimeType: this.mimeType,
                                platform: "BROWSER",
                                referrer: encodeURIComponent(location.href),
                                playerVersion: Q.a.VERSION
                            }); this.eventsQueue.length; )
                                this.sendEvent.apply(this, Object(d.a)(this.eventsQueue.shift()));
                            break;
                        case u.ub:
                        case u.jb:
                        case u.zb:
                        case u.x:
                            (n = this.trackingCollector).event.apply(n, Object(d.a)(this.prepareEventData(t, e)));
                            break;
                        case u.e:
                            (r = this.trackingCollector).event.apply(r, Object(d.a)(this.prepareEventData("closed", e)));
                            break;
                        case u.t:
                        case u.nb:
                            (o = this.trackingCollector).event.apply(o, Object(d.a)(this.prepareEventData(t, e))),
                                this.isNewSent = !1;
                            break;
                        case u.gb:
                            this.currentBitrate = parseInt(h[0].bandwidth / 1e3) || 0,
                                this.trackingCollector.event(this.playerId, "trackChanged", e, this.currentBitrate);
                            break;
                        case u.b:
                            var A = (null === (s = h[0]) || void 0 === s ? void 0 : s.lang) || 0;
                            this.trackingCollector.event(this.playerId, u.b, e, A);
                            break;
                        case u.Q:
                        case u.S:
                            var D = (null === (c = h[0]) || void 0 === c ? void 0 : c.language) || -1;
                            this.trackingCollector.event(this.playerId, "subtitleTrackChanged", e, D);
                            break;
                        case u.f:
                            this.trackingCollector.event(this.playerId, u.f, e, (null === (l = h[0]) || void 0 === l ? void 0 : l.code) || a.a[i.a.GENERIC_ERROR])
                    }
                }
            }]),
                t
        }();
        Pn.enabled = !0,
            Pn.moduleId = "tracking";
        var Ln = Pn
            , Rn = new Uint8Array([0, 0, 0, 28, 102, 116, 121, 112, 105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 109, 112, 52, 49, 0, 0, 0, 8, 102, 114, 101, 101, 0, 0, 2, 239, 109, 100, 97, 116, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 2, 194, 109, 111, 111, 118, 0, 0, 0, 108, 109, 118, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 232, 0, 0, 0, 47, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 236, 116, 114, 97, 107, 0, 0, 0, 92, 116, 107, 104, 100, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 101, 100, 116, 115, 0, 0, 0, 28, 101, 108, 115, 116, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 47, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 100, 109, 100, 105, 97, 0, 0, 0, 32, 109, 100, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172, 68, 0, 0, 8, 0, 85, 196, 0, 0, 0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0, 0, 0, 1, 15, 109, 105, 110, 102, 0, 0, 0, 16, 115, 109, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 100, 105, 110, 102, 0, 0, 0, 28, 100, 114, 101, 102, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1, 0, 0, 0, 211, 115, 116, 98, 108, 0, 0, 0, 103, 115, 116, 115, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 87, 109, 112, 52, 97, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0, 172, 68, 0, 0, 0, 0, 0, 51, 101, 115, 100, 115, 0, 0, 0, 0, 3, 128, 128, 128, 34, 0, 2, 0, 4, 128, 128, 128, 20, 64, 21, 0, 0, 0, 0, 1, 244, 0, 0, 1, 243, 249, 5, 128, 128, 128, 2, 18, 16, 6, 128, 128, 128, 1, 2, 0, 0, 0, 24, 115, 116, 116, 115, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 28, 115, 116, 115, 99, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 28, 115, 116, 115, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 115, 0, 0, 1, 116, 0, 0, 0, 20, 115, 116, 99, 111, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 44, 0, 0, 0, 98, 117, 100, 116, 97, 0, 0, 0, 90, 109, 101, 116, 97, 0, 0, 0, 0, 0, 0, 0, 33, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 109, 100, 105, 114, 97, 112, 112, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 105, 108, 115, 116, 0, 0, 0, 37, 169, 116, 111, 111, 0, 0, 0, 29, 100, 97, 116, 97, 0, 0, 0, 1, 0, 0, 0, 0, 76, 97, 118, 102, 53, 54, 46, 52, 48, 46, 49, 48, 49])
            , jn = new Blob([Rn],{
            type: "video/mp4"
        })
            , In = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                , e = document.createElement("video");
            return t.muted && (e.volume = 0,
                e.muted = !0),
                e.setAttribute("playsinline", "1"),
                e.setAttribute("src", URL.createObjectURL(jn)),
                e.load(),
                e
        };
        q.renderers = [oe, X.d],
            q.modules = [on, Cn, le, We, Ln],
            Q.a.Player = q,
            q.utils = {
                checkAutoplaySupport: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 300;
                    return new Promise(function() {
                        var e = Object(c.a)(c.b.mark((function e(n) {
                                var r, i;
                                return c.b.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return setTimeout((function() {
                                                            n({
                                                                isAutoplayAllowed: !1,
                                                                isMutedAutoplayAllowed: !1
                                                            })
                                                        }
                                                    ), t),
                                                        e.next = 3,
                                                        In().play().then((function() {
                                                                return !0
                                                            }
                                                        )).catch((function() {
                                                                return !1
                                                            }
                                                        ));
                                                case 3:
                                                    return r = e.sent,
                                                        e.next = 6,
                                                        In({
                                                            muted: !0
                                                        }).play().then((function() {
                                                                return !0
                                                            }
                                                        )).catch((function() {
                                                                return !1
                                                            }
                                                        ));
                                                case 6:
                                                    i = e.sent,
                                                        n({
                                                            isAutoplayAllowed: r,
                                                            isMutedAutoplayAllowed: i
                                                        });
                                                case 8:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }())
                },
                toggleFullscreen: R.c
            },
            Object(Q.b)("redGalaxy")
    }
]);
