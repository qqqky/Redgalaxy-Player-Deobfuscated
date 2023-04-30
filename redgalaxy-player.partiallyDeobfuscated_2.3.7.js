!function(modules) {
    function e(e) {
        var propName1, propName2, a = e[0], o = e[1], c = [];

        for (let i = 0; i < a.length; i++) {
            propName1 = a[i];

            if (Object.prototype.hasOwnProperty.call(obj, propName1) && obj[propName1]) {
                c.push(obj[propName1][0]);
            }

            obj[propName1] = 0;
        }
        for (propName2 in o) {
            if (Object.prototype.hasOwnProperty.call(o, propName2)) {
                modules[propName2] = o[propName2];
            }
        }
        if (u) {
            u(e);
        }
        while (c.length) {
            c.shift()();
        }
    }
    // The module cache
    var installedModules = {},
        obj = {
            0: 0
        };
    // The require function
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        // Flag the module as loaded
        module.l = !0;

        return module.exports;
    }
    __webpack_require__.e = function(t) {
        var e = [],
            n = obj[t];

        if (0 === n) {
            return;
        }

        if (n) {
            e.push(n[2]);
            return Promise.all(e);
        }

        var a = new Promise((function(resolve, reject) {
            n = obj[t] = [resolve, reject];
        }));
        e.push(n[2] = a);

        var loadHtmlScriptElementF, htmlScriptElement = document.createElement("script");
        htmlScriptElement.charset = "utf-8";
        htmlScriptElement.timeout = 120;

        if (__webpack_require__.nc) {
            htmlScriptElement.setAttribute("nonce", __webpack_require__.nc);
        }

        htmlScriptElement.src = function(t) {
            return __webpack_require__.p + "js/" + ({
                1: "vendors~renderer/hlsjs"
            }[t] || t) + ".module.js"
        }(t);
        var chunkLoadError = new Error;
        loadHtmlScriptElementF = function(e) {
            htmlScriptElement.onerror = htmlScriptElement.onload = null;
            clearTimeout(htmlScriptElementTimeoutWrapper);

            var n = obj[t];

            if (0 === n) {
                return;
            }

            if (!n) {
                obj[t] = void 0;
                return;
            }

            var type = e && ("load" === e.type ? "missing" : e.type),
                request = e && e.target && e.target.src;

            chunkLoadError.message = "Loading chunk " + t + " failed.\n(" + type + ": " + request + ")";
            chunkLoadError.name = "ChunkLoadError";
            chunkLoadError.type = type;
            chunkLoadError.request = request;
            n[1](chunkLoadError);

            obj[t] = void 0;
        };
        var htmlScriptElementTimeoutWrapper = setTimeout((function() {
            loadHtmlScriptElementF({
                type: "timeout",
                target: htmlScriptElement
            })
        }), 12e4);
        htmlScriptElement.onerror = htmlScriptElement.onload = loadHtmlScriptElementF;
        document.head.appendChild(htmlScriptElement);

        return Promise.all(e);
    };
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, propertyName, getter) {
        if (__webpack_require__.o(exports, propertyName)) {
            return;
        }

        Object.defineProperty(exports, propertyName, {
            enumerable: !0,
            get: getter
        })
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" != typeof Symbol && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    };

    // create a fake namespace object
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) {
            value = __webpack_require__(value);
        }
        if (8 & mode) {
            return value;
        }
        if (4 & mode && "object" == typeof value && value && value.__esModule) {
            return value;
        }
        var ns = Object.create(null);

        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        });

        if (2 & mode && "string" != typeof value) {
            for (var key in value) {
                __webpack_require__.d(ns, key, function(key) {
                    return value[key];
                }.bind(null, key));
            }
        }

        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter;

        if (module && module.__esModule) {
            getter = function() { return module.default }
        } else {
            getter = function() { return module }
        }

        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    __webpack_require__.oe = function(error) {
        console.error(error);
        throw error;
    };
    var a = window["tvplay-player-web"] = window["tvplay-player-web"] || [],
        o = a.push.bind(a);

    a.push = e;
    a = a.slice();

    for (let i = 0; i < a.length; i++) {
        e(a[i]);
    }

    var u = o;
    __webpack_require__(__webpack_require__.s = 47);
}([
    function(t, e, n) { /*** index 00 ***/
    "use strict";
        n.d(e, "a", (function() {
            return togglePlayPauseRequest;
        }));
        n.d(e, "b", (function() {
            return audioTrackChanged;
        }));
        n.d(e, "c", (function() {
            return playbackRateChange;
        }));
        n.d(e, "d", (function() {
            return canplay;
        }));
        n.d(e, "e", (function() {
            return destroy;
        }));
        n.d(e, "f", (function() {
            return error;
        }));
        n.d(e, "g", (function() {
            return volumeChanged;
        }));
        n.d(e, "h", (function() {
            return data;
        }));
        n.d(e, "i", (function() {
            return headTime;
        }));
        n.d(e, "j", (function() {
            return initialized;
        }));
        n.d(e, "k", (function() {
            return styles;
        }));
        n.d(e, "l", (function() {
            return timeShift;
        }));
        n.d(e, "m", (function() {
            return setup;
        }));
        n.d(e, "n", (function() {
            return manifestUpdateError;
        }));
        n.d(e, "o", (function() {
            return networkMetric;
        }));
        n.d(e, "p", (function() {
            return source;
        }));
        n.d(e, "q", (function() {
            return periodUpdated;
        }));
        n.d(e, "r", (function() {
            return ready;
        }));
        n.d(e, "s", (function() {
            return reconnect;
        }));
        n.d(e, "t", (function() {
            return stopped;
        }));
        n.d(e, "u", (function() {
            return time;
        }));
        n.d(e, "v", (function() {
            return playRequest;
        }));
        n.d(e, "w", (function() {
            return visibilityChange;
        }));
        n.d(e, "x", (function() {
            return waiting;
        }));
        n.d(e, "y", (function() {
            return volumeChangeRequest;
        }));
        n.d(e, "z", (function() {
            return volumeMuteRequest;
        }));
        n.d(e, "A", (function() {
            return seekToRequest;
        }));
        n.d(e, "B", (function() {
            return seekRequest;
        }));
        n.d(e, "C", (function() {
            return manifestLoaded;
        }));
        n.d(e, "D", (function() {
            return restartRequest;
        }));
        n.d(e, "E", (function() {
            return pauseRequest;
        }));
        n.d(e, "F", (function() {
            return stopRequest;
        }));
        n.d(e, "G", (function() {
            return resize;
        }));
        n.d(e, "H", (function() {
            return playlist;
        }));
        n.d(e, "I", (function() {
            return PLAYER_CONSTANTS;
        }));
        n.d(e, "J", (function() {
            return subtitleEnableRequest;
        }));
        n.d(e, "K", (function() {
            return subtitleCueChanged;
        }));
        n.d(e, "L", (function() {
            return encrypted;
        }));
        n.d(e, "M", (function() {
            return licenseAcquired;
        }));
        n.d(e, "N", (function() {
            return acquiringLicense;
        }));
        n.d(e, "O", (function() {
            return subtitleToggleRequest;
        }));
        n.d(e, "P", (function() {
            return subtitle;
        }));
        n.d(e, "Q", (function() {
            return subtitles;
        }));
        n.d(e, "R", (function() {
            return subtitleDisabled;
        }));
        n.d(e, "S", (function() {
            return manifestUpdated;
        }));
        n.d(e, "T", (function() {
            return profileChanged;
        }));
        n.d(e, "U", (function() {
            return profileChanging;
        }));
        n.d(e, "V", (function() {
            return periodChanging;
        }));
        n.d(e, "W", (function() {
            return playing;
        }));
        n.d(e, "X", (function() {
            return streamEvent;
        }));
        n.d(e, "Y", (function() {
            return period;
        }));
        n.d(e, "Z", (function() {
            return profileChangeRequest;
        }));
        n.d(e, "ab", (function() {
            return ended;
        }));
        n.d(e, "bb", (function() {
            return profile;
        }));
        n.d(e, "cb", (function() {
            return live;
        }));
        n.d(e, "db", (function() {
            return profiles;
        }));
        n.d(e, "eb", (function() {
            return audioTracks;
        }));
        n.d(e, "fb", (function() {
            return metadata;
        }));
        n.d(e, "gb", (function() {
            return newMedia;
        }));
        n.d(e, "hb", (function() {
            return paused;
        }));
        n.d(e, "ib", (function() {
            return playInterrupted;
        }));
        n.d(e, "jb", (function() {
            return playPromiseResolved;
        }));
        n.d(e, "kb", (function() {
            return nativeTextTracksListAddTrack;
        }));
        n.d(e, "lb", (function() {
            return monitor;
        }));
        n.d(e, "mb", (function() {
            return seeking;
        }));
        n.d(e, "nb", (function() {
            return syntheticWaiting;
        }));
        n.d(e, "ob", (function() {
            return play;
        }));
        n.d(e, "pb", (function() {
            return seeked;
        }));
        n.d(e, "qb", (function() {
            return waitingEnd;
        }));
        var acquiringLicense = "acquiringLicense",
            audioTrackChanged = "audioTrackChanged",
            audioTracks = "audioTracks",
            canplay = "canplay",
            destroy = "destroy",
            error = "error",
            encrypted = "encrypted",
            ended = "ended",
            headTime = "headTime",
            initialized = "initialized",
            licenseAcquired = "licenseAcquired",
            manifestLoaded = "manifestLoaded",
            manifestUpdated = "manifestUpdated",
            manifestUpdateError = "manifestUpdateError",
            nativeTextTracksListAddTrack = "nativeTextTracksListAddTrack",
            data = "data",
            metadata = "metadata",
            monitor = "monitor",
            networkMetric = "networkMetric",
            newMedia = "newMedia",
            live = "live",
            source = "source",
            timeShift = "timeShift",
            pauseRequest = "pauseRequest",
            paused = "paused",
            period = "period",
            periodChanging = "periodChanging",
            periodUpdated = "periodUpdated",
            play = "play",
            playbackRateChange = "playbackRateChange",
            playing = "playing",
            playlist = "playlist",
            playInterrupted = "playInterrupted",
            playPromiseResolved = "playPromiseResolved",
            playRequest = "playRequest",
            profileChangeRequest = "profileChangeRequest",
            profileChanged = "profileChanged",
            profile = "profile",
            profileChanging = "profileChanging",
            profiles = "profiles",
            ready = "ready",
            reconnect = "reconnect",
            resize = "resize",
            restartRequest = "restartRequest",
            seekRequest = "seekRequest",
            seekToRequest = "seekToRequest",
            seeked = "seeked",
            seeking = "seeking",
            setup = "setup",
            stopped = "stopped",
            stopRequest = "stopRequest",
            streamEvent = "streamEvent",
            styles = "styles",
            subtitleCueChanged = "subtitleCueChanged",
            subtitleEnableRequest = "subtitleEnableRequest",
            subtitleToggleRequest = "subtitleToggleRequest",
            subtitle = "subtitle",
            subtitles = "subtitles",
            subtitleDisabled = "subtitleDisabled",
            syntheticWaiting = "syntheticWaiting",
            time = "time",
            togglePlayPauseRequest = "togglePlayPauseRequest",
            visibilityChange = "visibilitychange",
            volumeChangeRequest = "volumeChangeRequest",
            volumeChanged = "volumeChanged",
            volumeMuteRequest = "volumeMuteRequest",
            waiting = "waiting",
            waitingEnd = "waitingEnd",
            PLAYER_CONSTANTS = Object.freeze({
                __proto__: null,
                ACQUIRING_LICENSE: acquiringLicense,
                AD_BREAK: "adBreak",
                AD_BREAK_END: "adbreakend",
                AD_BREAK_START: "adbreakstart",
                AD_BUFFERING: "adbuffering",
                AD_COMPLETE: "adComplete",
                AD_END: "adEnd",
                AD_ENDED: "adended",
                AD_ERROR: "aderror",
                AD_PLAY: "adplay",
                AD_PLAYING: "adplaying",
                AD_PAUSE: "adpause",
                AD_RESPONSE: "adrequest",
                AD_REQUEST: "adresponse",
                AD_START: "adStart",
                AD_TIME: "adtime",
                AUDIO_TRACK_CHANGE_REQUEST: "audioTrackChangeRequest",
                AUDIO_TRACK_CHANGED: audioTrackChanged,
                AUDIO_TRACK_LIST: audioTracks,
                BREAK_COMPLETE: "breakComplete",
                CAN_PLAY: canplay,
                CHROMECAST_CONNECTED: "chromecastConnected",
                CHROMECAST_DISCONNECTED: "chromecastDisconnected",
                CREATED: "created",
                DESTROY: destroy,
                DRM_KEY_ERROR: "drmKeyError",
                DURATION: "duration",
                ERROR: error,
                ENCRYPTED: encrypted,
                ENDED: ended,
                FALLBACK: "fallback",
                FULLSCREEN_CHANGE_REQUEST: "fullscreenChangeRequest",
                FULLSCREEN_CHANGED: "fullscreenChanged",
                GUI_READY: "guiReady",
                HEAD_TIME: headTime,
                INITIALIZED: initialized,
                LICENSE_ACQUIRED: licenseAcquired,
                LOAD_METADATA: "loadedmetadata",
                LOAD_START: "loadstart",
                MANIFEST_LOADED: manifestLoaded,
                MANIFEST_UPDATED: manifestUpdated,
                MANIFEST_UPDATE_ERROR: manifestUpdateError,
                NATIVE_TEXT_TRACKS_LIST_ADD_TRACK: nativeTextTracksListAddTrack,
                DATA: data,
                METADATA: metadata,
                MONITOR: monitor,
                MUTED: "muted",
                NETWORK_METRIC: networkMetric,
                NETWORK_METRIC_UPDATED: "networkMetricsUpdated",
                NEW_MEDIA: newMedia,
                OFFLINE: "offline",
                ON_LIVE: live,
                ON_SOURCE: source,
                ON_TIMESHIFT: timeShift,
                OPEN: "open",
                PAUSE: "pause",
                PAUSE_REQUEST: pauseRequest,
                PAUSED: paused,
                PERIOD: period,
                PERIOD_CHANGING: periodChanging,
                PERIOD_UPDATED: periodUpdated,
                PIP_SWITCHED: "pipSwitched",
                PLAY: play,
                PLAYBACK_RATE_CHANGED: playbackRateChange,
                PLAYER_READY: "playerready",
                PLAYING: playing,
                PLAYLIST: playlist,
                PLAY_INTERRUPTED: playInterrupted,
                PLAY_PROMISE_RESOLVED: playPromiseResolved,
                PLAY_REQUEST: playRequest,
                PROFILE_CHANGE_REQUEST: profileChangeRequest,
                PROFILE_CHANGED: profileChanged,
                PROFILE_CHANGED_LEGACY: profile,
                PROFILE_CHANGING: profileChanging,
                PROFILE_LIST: profiles,
                PROGRESS: "progress",
                READY: ready,
                RECONNECT: reconnect,
                RESIZE: resize,
                RESTART_REQUEST: restartRequest,
                SEEK_REQUEST: seekRequest,
                SEEK_TO_REQUEST: seekToRequest,
                SEEK_END: seeked,
                SEEK_START: seeking,
                SESSION: "session",
                SETUP: setup,
                STALLED: "stalled",
                STOPPED: stopped,
                STOP_REQUEST: stopRequest,
                STREAM_EVENT: streamEvent,
                STYLES: styles,
                SUBTITLE_CUE_CHANGED: subtitleCueChanged,
                SUBTITLE_ENABLE_REQUEST: subtitleEnableRequest,
                SUBTITLE_DISABLE_REQUEST: "subtitleDisableRequest",
                SUBTITLE_TOGGLE_REQUEST: subtitleToggleRequest,
                SUBTITLE: subtitle,
                SUBTITLES: subtitles,
                SUBTITLE_DISABLED: subtitleDisabled,
                SYNTHETIC_WAITING: syntheticWaiting,
                TIME: time,
                TIME_UPDATE: "timeupdate",
                TOGGLE_PLAY_PAUSE_REQUEST: togglePlayPauseRequest,
                UNMUTED: "unmuted",
                VISIBILITY_CHANGE: visibilityChange,
                VOLUME_CHANGE_REQUEST: volumeChangeRequest,
                VOLUME_CHANGED: volumeChanged,
                VOLUME_MUTE_REQUEST: volumeMuteRequest,
                WAITING: waiting,
                WAITING_END: waitingEnd
            })
    },
    function(t, e, n) { /*** index 01 ***/
    "use strict";
        //init for n1
        n.d(e, "a", (function() {
            return autoFocus;
        }));
        n.d(e, "b", (function() {
            return allowedAudioLanguages;
        }));
        n.d(e, "c", (function() {
            return bufferBehind;
        }));
        n.d(e, "d", (function() {
            return considerDroppedFrames;
        }));
        n.d(e, "e", (function() {
            return disableCheckingDecodedFramesCount;
        }));
        n.d(e, "f", (function() {
            return prefetchHlsPlaylist;
        }));
        n.d(e, "g", (function() {
            return forceDash;
        }));
        n.d(e, "h", (function() {
            return guardTimeShiftSafeSeek;
        }));
        n.d(e, "i", (function() {
            return httpConfig;
        }));
        n.d(e, "j", (function() {
            return immediatelySwitch;
        }));
        n.d(e, "k", (function() {
            return UTCTimeServerUpdateInterval;
        }));
        n.d(e, "l", (function() {
            return UTCTimeServer;
        }));
        n.d(e, "m", (function() {
            return liveDelay;
        }));
        n.d(e, "n", (function() {
            return minimumUpdatePeriodEnabled;
        }));
        n.d(e, "o", (function() {
            return timeShiftParams;
        }));
        n.d(e, "p", (function() {
            return timeShiftEnabled;
        }));
        n.d(e, "q", (function() {
            return playsInline;
        }));
        n.d(e, "r", (function() {
            return file;
        }));
        n.d(e, "s", (function() {
            return resolveRedirects;
        }));
        n.d(e, "t", (function() {
            return streamWithCredentials;
        }));
        n.d(e, "u", (function() {
            return timeShift;
        }));
        n.d(e, "v", (function() {
            return useDownlinkBitrate;
        }));
        n.d(e, "w", (function() {
            return volumeLocalStorageKey;
        }));
        n.d(e, "x", (function() {
            return playlist;
        }));
        n.d(e, "y", (function() {
            return files;
        }));
        n.d(e, "z", (function() {
            return drm;
        }));
        n.d(e, "A", (function() {
            return advertLabel;
        }));
        n.d(e, "B", (function() {
            return droppedFrames;
        }));
        n.d(e, "C", (function() {
            return allowedSubtitleLanguages;
        }));
        n.d(e, "D", (function() {
            return autoplayBlockedRule;
        }));
        n.d(e, "E", (function() {
            return bufferTime;
        }));
        n.d(e, "F", (function() {
            return cacheDrmSessionByKeyId;
        }));
        n.d(e, "G", (function() {
            return controlsLayout;
        }));
        n.d(e, "H", (function() {
            return cssPrefix;
        }));
        n.d(e, "I", (function() {
            return controls;
        }));
        n.d(e, "J", (function() {
            return customTtmlParser;
        }));
        n.d(e, "K", (function() {
            return debug;
        }));
        n.d(e, "L", (function() {
            return defaultGuiLanguage;
        }));
        n.d(e, "M", (function() {
            return drmConfig;
        }));
        n.d(e, "N", (function() {
            return volumeType;
        }));
        n.d(e, "O", (function() {
            return width;
        }));
        n.d(e, "P", (function() {
            return subtitleEnabled;
        }));
        n.d(e, "Q", (function() {
            return defaultSubtitle;
        }));
        n.d(e, "R", (function() {
            return subtitles;
        }));
        n.d(e, "S", (function() {
            return tracking;
        }));
        n.d(e, "T", (function() {
            return drmSystems;
        }));
        n.d(e, "U", (function() {
            return extra;
        }));
        n.d(e, "V", (function() {
            return fairplayContentType;
        }));
        n.d(e, "W", (function() {
            return fullscreen;
        }));
        n.d(e, "X", (function() {
            return gstream;
        }));
        n.d(e, "Y", (function() {
            return height;
        }));
        n.d(e, "Z", (function() {
            return hideControls;
        }));
        n.d(e, "ab", (function() {
            return holder;
        }));
        n.d(e, "bb", (function() {
            return keyboardEvents;
        }));
        n.d(e, "cb", (function() {
            return layout;
        }));
        n.d(e, "db", (function() {
            return modules;
        }));
        n.d(e, "eb", (function() {
            return name;
        }));
        n.d(e, "fb", (function() {
            return pauseOnVideoClick;
        }));
        n.d(e, "gb", (function() {
            return playbackRates;
        }));
        n.d(e, "hb", (function() {
            return reconnect;
        }));
        n.d(e, "ib", (function() {
            return rendererPriority;
        }));
        n.d(e, "jb", (function() {
            return rootUrl;
        }));
        n.d(e, "kb", (function() {
            return seekChangeStep;
        }));
        n.d(e, "lb", (function() {
            return settings;
        }));
        n.d(e, "mb", (function() {
            return showButtonsOverVideo;
        }));
        n.d(e, "nb", (function() {
            return showButtonsOverVideoOnHover;
        }));
        n.d(e, "ob", (function() {
            return showJumpButtonsOverVideo;
        }));
        n.d(e, "pb", (function() {
            return showPauseButtonOverVideo;
        }));
        n.d(e, "qb", (function() {
            return skin;
        }));
        n.d(e, "rb", (function() {
            return tooltips;
        }));
        n.d(e, "sb", (function() {
            return volumeChangeStep;
        }));
        n.d(e, "tb", (function() {
            return minLiveDelay;
        }));
        n.d(e, "ub", (function() {
            return minBufferTime;
        }));
        n.d(e, "vb", (function() {
            return maxBufferLength;
        }));
        n.d(e, "wb", (function() {
            return startBufferLength;
        }));
        n.d(e, "xb", (function() {
            return minAutoBitrate;
        }));
        n.d(e, "yb", (function() {
            return maxAutoBitrate;
        }));
        n.d(e, "zb", (function() {
            return smartTV;
        }));
        n.d(e, "Ab", (function() {
            return seekPrecision;
        }));
        n.d(e, "Bb", (function() {
            return defaultAudioLanguage;
        }));
        n.d(e, "Cb", (function() {
            return defaultBitrate;
        }));
        n.d(e, "Db", (function() {
            return lastBitrateCaching;
        }));
        n.d(e, "Eb", (function() {
            return startTime;
        }));
        n.d(e, "Fb", (function() {
            return autoAdaptation;
        }));
        n.d(e, "Gb", (function() {
            return resolution;
        }));
        n.d(e, "Hb", (function() {
            return bufferLength;
        }));
        n.d(e, "Ib", (function() {
            return fixAppleSiteSpecificHacks;
        }));
        n.d(e, "Jb", (function() {
            return autoplay;
        }));
        n.d(e, "Kb", (function() {
            return poster;
        }));
        n.d(e, "Lb", (function() {
            return disableNativeControls;
        }));
        n.d(e, "Mb", (function() {
            return volumeMutedLocalStorageKey;
        }));
        n.d(e, "Nb", (function() {
            return volumeLocalStorageEnabled;
        }));
        n.d(e, "Ob", (function() {
            return volume;
        }));
        n.d(e, "Pb", (function() {
            return volumeMuted;
        }));
        n.d(e, "Qb", (function() {
            return live;
        }));
        n.d(e, "Rb", (function() {
            return guardLivePosition;
        }));
        var advertLabel = "advertLabel",
            autoFocus = "autofocus",
            autoAdaptation = "autoAdaptation",
            droppedFrames = "droppedFrames",
            resolution = "resolution",
            bufferLength = "bufferLength",
            autoplay = "autoplay",
            autoplayBlockedRule = "autoplayBlockedRule",
            allowedAudioLanguages = "allowedAudioLanguages",
            allowedSubtitleLanguages = "allowedSubtitleLanguages",
            bufferBehind = "bufferBehind",
            bufferTime = "bufferTime",
            cacheDrmSessionByKeyId = "cacheDrmSessionByKeyId",
            considerDroppedFrames = "considerDroppedFrames",
            controls = "controls",
            controlsLayout = "controlsLayout",
            cssPrefix = "cssPrefix",
            customTtmlParser = "customTtmlParser", //TTML = Timed Text Markup Language
            debug = "debug",
            defaultGuiLanguage = "defaultGuiLanguage",
            defaultAudioLanguage = "defaultAudioLanguage",
            defaultBitrate = "defaultBitrate",
            defaultSubtitle = "defaultSubtitle",
            disableCheckingDecodedFramesCount = "disableCheckingDecodedFramesCount",
            disableNativeControls = "disableNativeControls",
            drm = "drm",
            drmConfig = "drmConfig",
            drmSystems = "drmSystems",
            extra = "extra",
            fairplayContentType = "fairplayContentType",
            file = "file",
            files = "files",
            fixAppleSiteSpecificHacks = "fixAppleSiteSpecificHacks",
            forceDash = "forceDash",
            fullscreen = "fullscreen",
            gstream = "gstream",
            guardLivePosition = "guardLivePosition",
            guardTimeShiftSafeSeek = "guardTimeShiftSafeSeek",
            height = "height",
            hideControls = "hideControls",
            holder = "holder",
            httpConfig = "httpConfig",
            immediatelySwitch = "immediatelySwitch",
            keyboardEvents = "keyboardEvents",
            lastBitrateCaching = "lastBitrateCaching",
            layout = "layout",
            live = "live",
            liveDelay = "liveDelay",
            maxAutoBitrate = "maxAutoBitrate",
            maxBufferLength = "maxBufferLength",
            minAutoBitrate = "minAutoBitrate",
            minBufferTime = "minBufferTime",
            minLiveDelay = "minLiveDelay",
            minimumUpdatePeriodEnabled = "minimumUpdatePeriodEnabled",
            modules = "modules",
            name = "name",
            pauseOnVideoClick = "pauseOnVideoClick",
            playbackRates = "playbackRates",
            playsInline = "playsInline",
            playlist = "playlist",
            poster = "poster",
            prefetchHlsPlaylist = "prefetchHlsPlaylist",
            reconnect = "reconnect",
            rendererPriority = "rendererPriority",
            resolveRedirects = "resolveRedirects",
            rootUrl = "rootUrl",
            seekChangeStep = "seekChangeStep",
            seekPrecision = "seekPrecision",
            showButtonsOverVideo = "showButtonsOverVideo",
            showButtonsOverVideoOnHover = "showButtonsOverVideoOnHover",
            showJumpButtonsOverVideo = "showJumpButtonsOverVideo",
            showPauseButtonOverVideo = "showPauseButtonOverVideo",
            skin = "skin",
            settings = "settings",
            smartTV = "smartTV",
            startBufferLength = "startBufferLength",
            startTime = "startTime",
            streamWithCredentials = "streamWithCredentials",
            subtitles = "subtitles",
            subtitleEnabled = "subtitleEnabled",
            timeShift = "timeShift",
            timeShiftEnabled = "timeShiftEnabled",
            timeShiftParams = "timeShiftParams",
            tooltips = "tooltips",
            tracking = "tracking",
            useDownlinkBitrate = "useDownlinkBitrate",
            UTCTimeServer = "UTCTimeServer",
            UTCTimeServerUpdateInterval = "UTCTimeServerUpdateInterval",
            volume = "volume",
            volumeChangeStep = "volumeChangeStep",
            volumeLocalStorageEnabled = "volumeLocalStorageEnabled",
            volumeLocalStorageKey = "volumeLocalStorageKey",
            volumeMuted = "volumeMuted",
            volumeMutedLocalStorageKey = "volumeMutedLocalStorageKey",
            volumeType = "volumeType",
            width = "width"
    },
    function(t, e, n) { /*** index 02 ***/
    "use strict";
        n.d(e, "a", (function() {
            return definePropertyF;
        }));

        var definePropertyF = function(obj, propertyName, propertyValue) {
            if (propertyName in obj) {
                Object.defineProperty(obj, propertyName, {
                    value: propertyValue,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                })
            } else {
                obj[propertyName] = propertyValue;
            }

            return obj;
        }
    },
    function(t, e, n) { /*** index 03 ***/
    "use strict";
        n.d(e, "a", (function() {
            return _asyncToGenerator;
        }));
        n.d(e, "b", (function() {
            return i;
        }));

        var n15 = n(15),
            i = Object(n15.a)((function(module) {
                    var runtime = function(exports) {  //'Regenerator Runtime'
                        var objectPrototype = Object.prototype,
                            hasOwn = objectPrototype.hasOwnProperty,
                            $Symbol = "function" == typeof Symbol ? Symbol : {},
                            iteratorSymbol = $Symbol.iterator || "@@iterator",
                            asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
                            toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

                        function wrap(innerFn, outerFn, self, tryLocsList) {
                            var emptyF1skeleton = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
                                emptyF1prototype = Object.create(emptyF1skeleton.prototype),
                                context = new Context(tryLocsList || []);

                            emptyF1prototype._invoke = function(method, iterator, argument) {
                                var generatorState = "suspendedStart";
                                return function(methodName, exception) {
                                    if ("executing" === generatorState) {
                                        throw new Error("Generator is already running");
                                    }
                                    if ("completed" === generatorState) {
                                        if ("throw" === methodName) {
                                            throw exception;
                                        }
                                        return doneResult();
                                    }
                                    argument.method = methodName;
                                    argument.arg = exception;
                                    for (; ; ) {
                                        var delegate = argument.delegate;
                                        if (delegate) {
                                            var delegateResult = maybeInvokeDelegate(delegate, argument);
                                            if (delegateResult) {
                                                if (delegateResult === ContinueSentinel) {
                                                    continue;
                                                }
                                                return delegateResult;
                                            }
                                        }
                                        if ("next" === argument.method) {
                                            argument.sent = argument._sent = argument.arg;
                                        } else if ("throw" === argument.method) {
                                            if ("suspendedStart" === generatorState) {
                                                generatorState = "completed";
                                                throw argument.arg;
                                            }
                                            argument.dispatchException(argument.arg);
                                        } else if ("return" === argument.method) {
                                            argument.abrupt("return", argument.arg);
                                        }
                                        generatorState = "executing";
                                        var command = tryCatch(method, iterator, argument);

                                        if ("normal" === command.type) {
                                            generatorState = argument.done ? "completed" : "suspendedYield";
                                            if (command.arg === ContinueSentinel) {
                                                continue;
                                            }
                                            return {
                                                value: command.arg,
                                                done: argument.done
                                            }
                                        }
                                        if ("throw" === command.type) {
                                            generatorState = "completed";
                                            argument.method = "throw";
                                            argument.arg = command.arg;
                                        }
                                    }
                                }
                            }(innerFn, self, context);

                            return emptyF1prototype;
                        }
                        function tryCatch(method, delegate, argument) {
                            try {
                                return {
                                    type: "normal",
                                    arg: method.call(delegate, argument)
                                }
                            } catch (t) {
                                return {
                                    type: "throw",
                                    arg: t
                                }
                            }
                        }
                        exports.wrap = wrap;
                        // Returning this object from the innerFn has the same effect as
                        // breaking out of the dispatch switch statement.
                        var ContinueSentinel = {};

                        // Dummy constructor functions that we use as the .constructor and
                        // .constructor.prototype properties for functions that return Generator
                        // objects. For full spec compliance, you may wish to configure your
                        // minifier not to mangle the names of these two functions.
                        function Generator() {}
                        function GeneratorFunction() {}
                        function GeneratorFunctionPrototype() {}

                        // This is a polyfill for %IteratorPrototype% for environments that
                        // don't natively support it.
                        var IteratorPrototype = {};

                        IteratorPrototype[iteratorSymbol] = function() {
                            return this;
                        };
                        var getProto = Object.getPrototypeOf,
                            NativeIteratorPrototype = getProto && getProto(getProto(values([])));

                        if (NativeIteratorPrototype && NativeIteratorPrototype !== objectPrototype && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
                            IteratorPrototype = NativeIteratorPrototype;
                        }

                        var generatorPrototype = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
                        function defineIteratorMethods(generator) {
                            ["next", "throw", "return"].forEach((function(method) {
                                generator[method] = function(mediaKeys) {
                                    return this._invoke(method, mediaKeys);
                                }
                            }));
                        }
                        function AsyncIterator(generator, PromiseImpl) {
                            var previousPromise;
                            this._invoke = function(method, arg) { //'enqueue'
                                function callInvokeWithMethodAndArg() {
                                    return new PromiseImpl((function(resolve, reject) {
                                            !function invoke(method, arg, resolve, reject) {
                                                var command = tryCatch(generator[method], generator, arg);
                                                if ("throw" !== command.type) {
                                                    var result = command.arg,
                                                        value = result.value;

                                                    if (value && "object" == typeof value && hasOwn.call(value, "__await")) {
                                                        return PromiseImpl.resolve(value.__await).then((function(value) {
                                                            invoke("next", value, resolve, reject); //on success
                                                        }), (function(err) {
                                                            invoke("throw", err, resolve, reject); //on failed
                                                        }))
                                                    } else {
                                                        return PromiseImpl.resolve(value).then((function(unwrapped) {
                                                            result.value = unwrapped;
                                                            resolve(result);
                                                        }), (function(error) {
                                                            return invoke("throw", error, resolve, reject);
                                                        }))
                                                    }
                                                }
                                                reject(command.arg);
                                            }(method, arg, resolve, reject)
                                        }
                                    ))
                                }
                                return previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
                            }
                        }
                        function maybeInvokeDelegate(delegate, context) {
                            var method = delegate.iterator[context.method];
                            if (void 0 === method) {
                                context.delegate = null;
                                if ("throw" !== context.method) {
                                    return ContinueSentinel;
                                }

                                if (delegate.iterator.return) {
                                    context.method = "return";
                                    context.arg = void 0;
                                    maybeInvokeDelegate(delegate, context);

                                    if ("throw" === context.method) {
                                        // If maybeInvokeDelegate(context) changed context.method from
                                        // "return" to "throw", let that override the TypeError below.
                                        return ContinueSentinel;
                                    }
                                }
                                context.method = "throw";
                                context.arg = new TypeError("The iterator does not provide a 'throw' method");

                                return ContinueSentinel;
                            }

                            var record = tryCatch(method, delegate.iterator, context.arg);
                            if ("throw" === record.type) {
                                context.method = "throw";
                                context.arg = record.arg;
                                context.delegate = null;
                                return ContinueSentinel;
                            }

                            var info = record.arg;

                            if (!info) {
                                context.method = "throw";
                                context.arg = new TypeError("iterator result is not an object");
                                context.delegate = null;
                                return ContinueSentinel;
                            }

                            if (!info.done) {
                                // Re-yield the result returned by the delegate method.
                                return info;
                            }
                            // Assign the result of the finished delegate to the temporary
                            // variable specified by delegate.resultName (see delegateYield).
                            context[delegate.resultName] = info.value;

                            // Resume execution at the desired location (see delegateYield).
                            context.next = delegate.nextLoc;

                            // If context.method was "throw" but the delegate handled the
                            // exception, let the outer generator proceed normally. If
                            // context.method was "next", forget context.arg since it has been
                            // "consumed" by the delegate iterator. If context.method was
                            // "return", allow the original .return call to continue in the
                            // outer generator.
                            if ("return" !== context.method) {
                                context.method = "next";
                                context.arg = void 0;
                            }

                            // The delegate iterator is finished, so forget it and continue with
                            // the outer generator.
                            context.delegate = null;
                            return ContinueSentinel;
                        }
                        function pushTryEntry(locs) {
                            var entry = { tryLoc: locs[0] };

                            if (1 in locs) {
                                entry.catchLoc = locs[1];
                            }

                            if (2 in locs) {
                                entry.finallyLoc = locs[2];
                                entry.afterLoc = locs[3];
                            }

                            this.tryEntries.push(entry);
                        }
                        function resetTryEntry(entry) {
                            var record = entry.completion || {};
                            record.type = "normal";
                            delete record.arg;
                            entry.completion = record;
                        }
                        function Context(tryLocsList) {
                            // The root entry object (effectively a try statement without a catch
                            // or a finally block) gives us a place to store values thrown from
                            // locations where there is no enclosing try statement.
                            this.tryEntries = [{ tryLoc: "root" }];
                            tryLocsList.forEach(pushTryEntry, this);
                            this.reset(!0);
                        }
                        function values(iterable) {
                            if (!iterable) {
                                return { next: doneResult };
                            }

                            var iteratorMethod = iterable[iteratorMethod];

                            if (iteratorMethod) {
                                return iteratorMethod.call(iterable);
                            }
                            if ("function" == typeof iterable.next) {
                                return iterable;
                            }
                            if (isNaN(iterable.length)) {
                                return { next: doneResult };
                            }

                            var i = -1,
                                next = function next() {
                                    while (++i < iterable.length) {
                                        if (hasOwn.call(iterable, i)) {
                                            next.value = iterable[i];
                                            next.done = !1;
                                            return next;
                                        }
                                    }
                                    next.value = void 0;
                                    next.done = !0;

                                    return next;
                                };
                            return next.next = next;
                        }
                        function doneResult() {
                            return {
                                value: void 0,
                                done: !0
                            }
                        }

                        GeneratorFunction.prototype = generatorPrototype.constructor = GeneratorFunctionPrototype;
                        GeneratorFunctionPrototype.constructor = GeneratorFunction;
                        GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

                        exports.isGeneratorFunction = function(func) {
                            var constructor = "function" == typeof func && func.constructor;

                            return !!constructor && (constructor === GeneratorFunction || "GeneratorFunction" === (constructor.displayName || constructor.name));
                        };
                        exports.mark = function(t) {
                            if (Object.setPrototypeOf) {
                                Object.setPrototypeOf(t, GeneratorFunctionPrototype);
                            } else {
                                t.__proto__ = GeneratorFunctionPrototype;

                                if (!(toStringTagSymbol in t)) {
                                    t[toStringTagSymbol] = "GeneratorFunction";
                                }
                            }

                            t.prototype = Object.create(generatorPrototype);
                            return t;
                        };
                        exports.awrap = function(t) {
                            return { __await: t };
                        };
                        defineIteratorMethods(AsyncIterator.prototype);
                        AsyncIterator.prototype[asyncIteratorSymbol] = function() {
                            return this;
                        };
                        exports.AsyncIterator = AsyncIterator;
                        exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
                            if (void 0 === PromiseImpl) {
                                PromiseImpl = Promise;
                            }

                            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);

                            if (exports.isGeneratorFunction(outerFn)) {
                                return iter;
                            }

                            iter.next().then((function(result) {
                                return result.done ? result.value : iter.next();
                            }))
                        };
                        defineIteratorMethods(generatorPrototype);
                        generatorPrototype[toStringTagSymbol] = "Generator";
                        generatorPrototype[iteratorSymbol] = function() {
                            return this;
                        };
                        generatorPrototype.toString = function() {
                            return "[object Generator]";
                        };
                        exports.keys = function(object) {
                            var keys = [];
                            for (var key in object) {
                                keys.push(key);
                            }
                            keys.reverse();

                            return function next() {
                                while (keys.length) {
                                    var key = keys.pop();
                                    if (key in object) {
                                        next.value = key;
                                        next.done = !1;
                                    }
                                    return next;
                                }
                                next.done = !0;
                                return next;
                            }
                        };
                        exports.values = values;
                        Context.prototype = {
                            constructor: Context,

                            reset: function(skipTempReset) {
                                this.prev = 0;
                                this.next = 0;
                                this.sent = this._sent = void 0;
                                this.done = !1;
                                this.delegate = null;
                                this.method = "next";
                                this.arg = void 0;
                                this.tryEntries.forEach(resetTryEntry);

                                if (skipTempReset) {
                                    return;
                                }

                                for (var prop in this) {
                                    if ("t" !== prop.charAt(0)) {
                                        continue;
                                    }

                                    if (hasOwn.call(this, prop) && !isNaN(+prop.slice(1))) {
                                        this[prop] = void 0;
                                    }
                                }
                            },

                            stop: function() {
                                this.done = !0;

                                var rootRecord = this.tryEntries[0].completion;
                                if ("throw" === rootRecord.type) {
                                    throw rootRecord.arg;
                                }
                                return this.rval;
                            },

                            dispatchException: function(exception) {
                                if (this.done) {
                                    throw exception;
                                }

                                var context = this;
                                function handle(loc, caught) {
                                    record.type = "throw";
                                    record.arg = exception;
                                    context.next = loc;

                                    if (caught) {
                                        // If the dispatched exception was caught by a catch block,
                                        // then let that catch block handle the exception normally.
                                        context.method = "next";
                                        context.arg = void 0;
                                    }

                                    return !!caught;
                                }

                                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                                    var entry = this.tryEntries[i],
                                        record = entry.completion;

                                    if ("root" === entry.tryLoc) {
                                        return handle("end");
                                    }
                                    if (entry.tryLoc > this.prev) {
                                        continue;
                                    }

                                    var hasCatch = hasOwn.call(entry, "catchLoc"),
                                        hasFinally = hasOwn.call(entry, "finallyLoc");

                                    if (hasCatch && hasFinally) {
                                        if (this.prev < entry.catchLoc) {
                                            return handle(entry.catchLoc, !0);
                                        }
                                        if (this.prev < entry.finallyLoc) {
                                            return handle(entry.finallyLoc);
                                        }
                                    } else if (hasCatch) {
                                        if (this.prev < entry.catchLoc) {
                                            return handle(entry.catchLoc, !0);
                                        }
                                        continue;
                                    }

                                    if (!hasFinally) {
                                        throw new Error("try statement without catch or finally");
                                    }

                                    if (this.prev < entry.finallyLoc) {
                                        return handle(entry.finallyLoc);
                                    }
                                }
                            },

                            abrupt: function(type, arg) {
                                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                                    var entry = this.tryEntries[i];

                                    if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                                        var finallyEntry = entry;
                                        break;
                                    }
                                }

                                if (finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
                                    // Ignore the finally entry if control is not jumping to a
                                    // location outside the try/catch block.
                                    finallyEntry = null;
                                }

                                var record = finallyEntry ? finallyEntry.completion : {};

                                record.type = type;
                                record.arg = arg;

                                if (!finallyEntry) {
                                    return this.complete(record);
                                }

                                this.method = "next";
                                this.next = finallyEntry.finallyLoc;
                                return ContinueSentinel;
                            },

                            complete: function(record, afterLoc) {
                                if ("throw" === record.type) {
                                    throw record.arg;
                                }

                                if ("break" === record.type || "continue" === record.type) {
                                    this.next = record.arg;
                                } else if ("return" === record.type) {
                                    this.rval = this.arg = record.arg;
                                    this.method = "return";
                                    this.next = "end";
                                } else if ("normal" === record.type && afterLoc) {
                                    this.next = afterLoc;
                                }

                                return ContinueSentinel;
                            },

                            finish: function(finallyLoc) {
                                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                                    var entry = this.tryEntries[i];
                                    if (entry.finallyLoc === finallyLoc) {
                                        this.complete(entry.completion, entry.afterLoc);
                                        resetTryEntry(entry);

                                        return ContinueSentinel;
                                    }
                                }
                            },

                            catch: function(tryLoc) {
                                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                                    var entry = this.tryEntries[i];

                                    if (entry.tryLoc === tryLoc) {
                                        var record = entry.completion;
                                        if ("throw" === record.type) {
                                            var thrown = record.arg;
                                            resetTryEntry(entry);
                                        }
                                        return thrown;
                                    }
                                }
                                // The context.catch method must only be called with a location
                                // argument that corresponds to a known catch block.
                                throw new Error("illegal catch attempt");
                            },

                            delegateYield: function(iterable, resultName, nextLoc) {
                                this.delegate = {
                                    iterator: values(iterable),
                                    resultName: resultName,
                                    nextLoc: nextLoc
                                };

                                if ("next" === this.method) {
                                    this.arg = void 0;
                                }

                                return ContinueSentinel;
                            }
                        };
                        // Regardless of whether this script is executing as a CommonJS module
                        // or not, return the runtime object so that we can declare the variable
                        // regeneratorRuntime in the outer scope, which allows this module to be
                        // injected easily by `bin/regenerator --include-runtime script.js`.
                        return exports;
                    }(module.exports);
                    try {
                        regeneratorRuntime = runtime;
                    } catch (accidentalStrictMode) {
                        // This module should not be running in strict mode, so the above
                        // assignment should always work unless something is misconfigured. Just
                        // in case runtime.js accidentally runs in strict mode, in modern engines
                        // we can explicitly access globalThis. In older engines we can escape
                        // strict mode using a global Function call. This could conceivably fail
                        // if a Content Security Policy forbids using Function, but in that case
                        // the proper solution is to fix the accidental strict mode problem. If
                        // you've misconfigured your bundler to force strict mode and applied a
                        // CSP to forbid Function, and you're not willing to fix either of those
                        // problems, please detail your unique predicament in a GitHub issue.
                        Function("r", "regeneratorRuntime = r")(runtime);
                    }
                }
            ));
        function asyncGeneratorStep(generator, resolve, reject, _next, _throw, key, arg) {
            try {
                var info = generator[key](arg),
                    value = info.value
            } catch (generator) {
                return void reject(generator);
            }
            info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw) //loops until s.done === true ???
        }
        var _asyncToGenerator = function(fn) {
            return function() {
                var self = this,
                    args = arguments;
                return new Promise((function(resolve, reject) {
                        var generator = fn.apply(self, args);
                        function _next(value) {
                            asyncGeneratorStep(generator, resolve, reject, _next, _throw, "next", value);
                        }
                        function _throw(err) {
                            asyncGeneratorStep(generator, resolve, reject, _next, _throw, "throw", err);
                        }

                        _next(void 0);
                    }
                ))
            }
        }
    },
    function(t, e, n) { /*** index 04 ***/
    "use strict";
        n.d(e, "a", (function() {
            return inherits;
        }));
        n.d(e, "b", (function() {
            return o;
        }));
        n.d(e, "c", (function() {
            return s;
        }));
        n.d(e, "d", (function() {
            return assertThisInitialized;
        }));
        n.d(e, "e", (function() {
            return o;
        }));
        n.d(e, "f", (function() {
            return setPrototypeOf;
        }));

        var n15 = n(15),
            n18 = n(18);

        var assertThisInitialized = function(obj) {
                if (void 0 === obj) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }

                return obj;
            },
            o = Object(n15.a)((function(module) {
                function e(n) {
                    module.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                        return t.__proto__ || Object.getPrototypeOf(t);
                    };
                    return e(n);
                }
                module.exports = e;
            }));
        var s = function(t, e) {
                return !e || "object" !== Object(n18.a)(e) && "function" != typeof e ? assertThisInitialized(t) : e;
            },
            setPrototypeOf = Object(n15.a)((function(module) {
                function e(n, r) {
                    module.exports = e = Object.setPrototypeOf || function(obj, prototype) {
                        obj.__proto__ = prototype;
                        return obj;
                    };
                    return e(n, r);
                }
                module.exports = e;
            }));
        var inherits = function(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) {
                throw new TypeError("Super expression must either be null or a function");
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    writable: !0,
                    configurable: !0
                }
            });

            if (!superClass) {
                return;
            }

            setPrototypeOf(subClass, superClass);
        }
    },
    function(t, e, n) { /*** index 05 ***/
    "use strict";
        n.d(e, "a", (function() {
            return classCallCheck;
        }));
        n.d(e, "b", (function() {
            return defineSelectedPropertiesF;
        }));

        var classCallCheck = function(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        };
        function _defineProperties(target, props) {
            for (let i = 0; i < props.length; i++) {
                var keyValue = props[i];

                keyValue.enumerable = keyValue.enumerable || !1;
                keyValue.configurable = !0;

                if ("value" in keyValue) {
                    keyValue.writable = !0;
                }
                Object.defineProperty(target, keyValue.key, keyValue);
            }
        }
        var defineSelectedPropertiesF = function(Constructor, prototypeProps, staticProps) {
            if (prototypeProps) {
                _defineProperties(Constructor.prototype, prototypeProps);
            }
            if (staticProps) {
                _defineProperties(Constructor, staticProps);
            }

            return Constructor;
        }
    },
    function(t, e, n) { /*** index 06 ***/
    "use strict";
        n.d(e, "a", (function() {
            return convertToArray;
        }));
        var n19 = n(19);
        var returnSelfIfArray = function(possibleArray) {
            if (Array.isArray(possibleArray)) {
                return possibleArray;
            }
        };
        var iterableToArray = function(maybeIterable, numItemsToFilter) {
            if ("undefined" === typeof Symbol || !Symbol.iterator in Object(maybeIterable)) {
                return;
            }

            var result = [],
                done = !0,
                failed = !1,
                exception = void 0;
            try {
                var currentItem,
                    iterator = maybeIterable[Symbol.iterator]();

                while (!(done = (currentItem = iterator.next()).done)) {
                    result.push(currentItem.value);
                    if (numItemsToFilter && result.length === numItemsToFilter) {
                        break;
                    }
                    done = !0;
                }
            } catch (ex) {
                failed = !0;
                exception = ex;
            } finally {
                try {
                    done || null == iterator.return || iterator.return();
                } finally {
                    if (failed)
                        throw exception;
                }
            }

            return result;
        };
        var throwCannotDestructureNonIterableInstanceError = function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        };
        var convertToArray = function(possibleArray, numItemsToFilter) {
            return returnSelfIfArray(possibleArray) || iterableToArray(possibleArray, numItemsToFilter) || Object(n19.b)(possibleArray, numItemsToFilter) || throwCannotDestructureNonIterableInstanceError();
        }
    },
    function(t, e, n) { /*** index 07 ***/
    "use strict";
        n.d(e, "a", (function() {
            return playerErrors;
        }));

        var playerErrors = {
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
    },
    function(t, e, n) { /*** index 08 ***/
    "use strict";
        n.d(e, "a", (function() {
            return toArrayF; //breakpoint here
        }));
        var n19 = n(19);
        var maybeShallowCopyArray = function(maybeArray) {
            if (Array.isArray(maybeArray)) {
                return Object(n19.a)(maybeArray);
            }
        };
        var convertToArrayIfIterable = function(maybeIterable) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(maybeIterable)) {
                return Array.from(maybeIterable);
            }
        };
        var throwCannotSpreadNonIterableInstanceError = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        };
        var toArrayF = function(maybeIterable) {
            return maybeShallowCopyArray(maybeIterable) || convertToArrayIfIterable(maybeIterable) || Object(n19.b)(maybeIterable) || throwCannotSpreadNonIterableInstanceError();
        }
    },
    function(t, e, n) { /*** index 09 ***/
    "use strict";
        n.d(e, "a", (function() {
            return "manifest-manager";
        }));
        n.d(e, "b", (function() {
            return "stream-manager";
        }));
        n.d(e, "c", (function() {
            return "video-wrapper";
        }));
        n.d(e, "d", (function() {
            return "media-element";
        }));
        n.d(e, "e", (function() {
            return "media-source";
        }));
    },
    function(t, e, n) { /*** index 10 ***/
    "use strict";
        n.d(e, "a", (function() {
            return responseTypeArraybuffer;
        }));
        n.d(e, "b", (function() {
            return responseTypeFailed;
        }));
        n.d(e, "c", (function() {
            return responseTypeProgress;
        }));
        n.d(e, "d", (function() {
            return xhrManager;
        }));

        var n2 = n(2),
            n6 = n(6);

        function Message(msg) {
            this.message = msg;
        }
        function CancelTokenFunction(t) {
            var e, cancelToken = this;

            this.promise = new Promise((function(t) {
                return e = t;
            }));

            t((function(msg) {
                if (cancelToken.reason) {
                    return;
                }

                cancelToken.reason = new Message(msg);
                e(cancelToken.reason);
            }));
        }
        CancelTokenFunction.source = function() {
            var doOnCancelF,
                cancelTokenF = new CancelTokenFunction((function(onCancelF) {
                    return doOnCancelF = onCancelF;
                }));

            return {
                cancel: doOnCancelF,
                token: cancelTokenF
            }
        };
        var responseTypeFailed = "failed",
            responseTypeProgress = "progress",
            responseTypeArraybuffer = "arraybuffer";

        function getMappedProperties(originalObject, enumerablePropertiesOnly) { //duplicate method
            var mappedProperties = Object.keys(originalObject);
            if (Object.getOwnPropertySymbols) {
                var propertySymbols = Object.getOwnPropertySymbols(originalObject);
                if (enumerablePropertiesOnly) {
                    propertySymbols = propertySymbols.filter((function(propertyName) {
                        return Object.getOwnPropertyDescriptor(originalObject, propertyName).enumerable;
                    }));
                }

                mappedProperties.push.apply(mappedProperties, propertySymbols);
            }

            return mappedProperties;
        }
        function buildRequestSkeleton(obj) {
            for (let i = 1; i < arguments.length; i++) {
                var originalObject = null != arguments[i] ? arguments[i] : {};

                if (i % 2) {
                    getMappedProperties(Object(originalObject), !0).forEach((function(property) {
                        Object(n2.a)(obj, property, originalObject[property]);
                    }));
                } else if (Object.getOwnPropertyDescriptors) {
                    Object.defineProperties(obj, Object.getOwnPropertyDescriptors(originalObject));
                } else {
                    getMappedProperties(Object(originalObject)).forEach((function(propertyName) {
                        Object.defineProperty(obj, propertyName, Object.getOwnPropertyDescriptor(originalObject, propertyName));
                    }));
                }
            }

            return obj;
        }
        var requestManager = {
                responseType: "text",
                method: "GET",
                retryAttempts: 3,
                retryDelay: 1e3,
                timeout: 8e3,
                withCredentials: !1,
                cancelToken: null
            },
            xhrManager = {
                get: function(url) {
                    var additionalArg = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    "xml" === additionalArg.responseType && (additionalArg.responseType = "document");

                    return prepareAndSendXHR(url, buildRequestSkeleton({}, additionalArg));
                },
                getBinary: function(url) {
                    var additionalArg = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};

                    return prepareAndSendXHR(url, buildRequestSkeleton({
                        responseType: responseTypeArraybuffer
                    }, additionalArg))
                },
                head: function(url) {
                    var additionalArg = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};

                    return prepareAndSendXHR(url, buildRequestSkeleton({
                        method: "HEAD"
                    }, additionalArg))
                },
                post: function(url) {
                    var additionalArg = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return prepareAndSendXHR(url, buildRequestSkeleton({
                        method: "POST"
                    }, additionalArg))
                },
                put: function(url) {
                    var additionalArg = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};

                    return prepareAndSendXHR(url, buildRequestSkeleton({
                        method: "PUT"
                    }, additionalArg))
                },
                del: function(url) {
                    var additionalArg = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};

                    return prepareAndSendXHR(url, buildRequestSkeleton({
                        method: "DELETE"
                    }, additionalArg))
                }
            };
        function prepareAndSendXHR(resourceUrl, xhrRequestConfig) {
            var xmlHttpRequest, xhrTimeoutWrapper, startTimestamp = Date.now(), aborted = !1, currentAttempt = 1;

            return new Promise((function(resolve, reject) {
                    var requestData = buildRequestSkeleton({}, requestManager, {}, xhrRequestConfig),
                        requestHeaders = requestData.headers || {},
                        onProgressF = requestData.onProgress;

                    if (xhrRequestConfig.cancelToken) {
                        xhrRequestConfig.cancelToken.promise.then((function() {
                            return abortCurrentXhrRequest();
                        }));
                    }

                    var xmlTimeoutTimerHandlerF = function() {
                            xmlHttpRequest = new XMLHttpRequest;

                            if (requestData.withCredentials) {
                                xmlHttpRequest.withCredentials = !0;
                            }

                            xmlHttpRequest.open(requestData.method, resourceUrl);
                            xmlHttpRequest.responseType = requestData.responseType;

                            if ("xml" === requestData.responseType) {
                                xmlHttpRequest.overrideMimeType("text/xml");
                            }

                            Object.entries(requestHeaders).forEach((function(entry) {
                                var requestWrapper = Object(n6.a)(entry, 2),
                                    requestHeader = requestWrapper[0],
                                    requestValue = requestWrapper[1];

                                return xmlHttpRequest.setRequestHeader(requestHeader, requestValue);
                            }));

                            if (onProgressF) {
                                xmlHttpRequest.onprogress = function(progressEvent) {
                                    return processProgressEvent(progressEvent);
                                }
                            }

                            xmlHttpRequest.onreadystatechange = function() {
                                return onXHRReadyStateChangedF();
                            };
                            xmlHttpRequest.send(requestData.data || null); //body
                        },
                        processProgressEvent = function(progressEvent) {
                            var currentTimestamp = Date.now(),
                                metricsWrapper = {
                                    bps: Math.round(progressEvent.loaded / ((currentTimestamp - startTimestamp) / 1e3) * 8),
                                    event: progressEvent,
                                    timestamp: currentTimestamp,
                                    loaded: progressEvent.loaded,
                                    started: startTimestamp,
                                    status: responseTypeProgress
                                };
                            onProgressF(metricsWrapper);
                        },
                        onXHRReadyStateChangedF = function() {
                            if (4 !== xmlHttpRequest.readyState) {
                                return;
                            }

                            var currentTimestamp = Date.now(),
                                responseDuration = currentTimestamp - startTimestamp,
                                metricsWrapper = {
                                    duration: responseDuration,
                                    timestamp: currentTimestamp,
                                    url: resourceUrl,
                                    statusCode: xmlHttpRequest.status,
                                    status: "success"
                                };

                            if (200 === xmlHttpRequest.status) {
                                var mpdAsString = function(t, e) {
                                    switch (e.responseType) {
                                        case "xml":
                                        case "document":
                                            return t.responseXML;
                                        case responseTypeArraybuffer:
                                            return new Uint8Array(t.response);
                                        default:
                                            return t.responseText
                                    }
                                }(xmlHttpRequest, requestData);
                                metricsWrapper.bps = Math.round(mpdAsString.length / (responseDuration / 1e3) * 8);
                                resolve({
                                    metric: metricsWrapper,
                                    data: mpdAsString,
                                    url: resourceUrl,
                                    status: "success",
                                    responseUrl: xmlHttpRequest.responseURL,
                                    xhr: xmlHttpRequest
                                });

                                return;
                            }

                            if (aborted) {
                                metricsWrapper.status = "aborted";
                                reject({
                                    error: "aborted",
                                    metric: metricsWrapper,
                                    xhr: xmlHttpRequest
                                });
                                return;
                            }

                            if (currentAttempt > requestData.retryAttempts) {
                                metricsWrapper.status = responseTypeFailed;
                                reject({
                                    error: responseTypeFailed,
                                    metric: metricsWrapper,
                                    xhr: xmlHttpRequest
                                })
                                return;
                            }

                            currentAttempt++;
                            metricsWrapper.status = "retry";
                            xhrTimeoutWrapper = setTimeout(xmlTimeoutTimerHandlerF, requestData.retryDelay); //breakpoint here, return type?

                            if (onProgressF) {
                                onProgressF(metricsWrapper);
                            }
                        },
                        abortCurrentXhrRequest = function() {
                            aborted = !0;
                            clearTimeout(xhrTimeoutWrapper);
                            xmlHttpRequest.abort();
                            reject("aborted");
                        };
                    xmlTimeoutTimerHandlerF();
                }
            ))
        }
        xhrManager.CancelToken = CancelTokenFunction;
    },
    function(t, e, n) { /*** index 11 ***/
    "use strict";
        n.d(e, "a", (function() {
            return deviceAndBrowserAnalyser;
        }));
        var userAgent = navigator.userAgent,
            userAgentMatches = function(regex) {
                return !!userAgent.match(regex);
            },
            deviceAndBrowserAnalyser = {
                isMobile: function() {
                    return this.isAndroid() || this.isIOS() || this.isMobileOpera() || this.isMobileWindows();
                },
                isAndroid: function() {
                    return userAgentMatches(/Android/i);
                },
                isIOS: function() {
                    return userAgentMatches(/iPhone|iPad|iPod/i);
                },
                isMobileOpera: function() {
                    return userAgentMatches(/Opera Mini/i);
                },
                isMobileWindows: function() {
                    return userAgentMatches(/IEMobile/i);
                },
                isFirefox: function() {
                    return userAgent.indexOf("Firefox") > -1;
                },
                isOpera: function() {
                    return !!window.opera || userAgent.indexOf("OPR/") >= 0;
                },
                isSafari: function() {
                    return /^((?!chrome).)*safari/i.test(userAgent);
                },
                isSafariWithSiteSpecificHacks: function() {
                    return !this.isSafari() && (/constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || "undefined" != typeof safari && safari.pushNotification).toString());
                },
                isTizen: function() {
                    return userAgentMatches(/Tizen/);
                },
                getFirefoxVersion: function() {
                    var t = userAgent.indexOf("Firefox");
                    return parseFloat(userAgent.substring(t + 8));
                },
                isWidevineSupported: function() {
                    return (!this.isFirefox() || !(this.getFirefoxVersion() < 47 || -1 !== userAgent.indexOf("Windows NT 5.1"))) && (!(-1 !== userAgent.toLowerCase().indexOf("linux") && this.getFirefoxVersion() < 47) && !!navigator.requestMediaKeySystemAccess);
                },
                getLanguage: function() {
                    return void 0 !== navigator.language ? navigator.language : void 0 !== navigator.languages ? navigator.languages[0].split("-")[0] : null;
                }
            }
    },
    function(t, e, n) { /*** index 12 ***/
    "use strict";
        n.d(e, "a", (function() {
            return y;
        }));
        n.d(e, "b", (function() {
            return isSchemePresentInUrl;
        }));
        n.d(e, "c", (function() {
            return d;
        }));
        n.d(e, "d", (function() {
            return l;
        }));

        var n2 = n(2),
            n1 = n(1),
            n3 = n(3),
            n8 = n(8),
            n10 = n(10),
            isSchemePresentInUrl = function(url) {
                return url.startsWith("http") || url.startsWith("//");
            },
            buildUrlWithRequestParamsAndHash = function(url, commandName) {
                var schemeNotHttp = !url.startsWith("http"),
                    fullUrl = schemeNotHttp ? "https://".concat(url) : url,
                    newUrlObj = new URL(fullUrl),
                    searchParams = newUrlObj.searchParams,
                    urlHash = newUrlObj.hash,
                    argsLength = arguments.length,
                    additionalArgsArray = new Array(argsLength > 2 ? argsLength - 2 : 0); //breakpoint here

                for (let i = 2; i < argsLength; i++) {
                    additionalArgsArray[i - 2] = arguments[i];
                }
                var sensitiveArg = additionalArgsArray[0]; //breakpoint here
                newUrlObj.hash = "";

                if (searchParams.has(sensitiveArg)) {
                    searchParams.delete(sensitiveArg);
                }

                var f = newUrlObj.search.substring(1),
                    requestParamsArray = [f];

                Object(n8.a)(searchParams.keys()).forEach((function(key) {
                    return searchParams.delete(key);
                }));

                searchParams[commandName].apply(searchParams, additionalArgsArray);


                var p = searchParams.has(sensitiveArg) && searchParams.get(sensitiveArg);

                if (p) {
                    searchParams.delete(sensitiveArg);
                    requestParamsArray.push("".concat(sensitiveArg, "=").concat(p)); //breakpoint here
                }

                var g = newUrlObj.toString().replace(schemeNotHttp ? newUrlObj.protocol : "", ""),
                    requestParams = requestParamsArray.filter(Boolean).join("&");
                requestParams = requestParams ? "?".concat(requestParams) : "";

                return "".concat(g).concat(requestParams).concat(urlHash);
            },
            l = function(url, e, n) {
                return buildUrlWithRequestParamsAndHash(url, "set", e, n);
            },
            d = function(url, e) {
                return buildUrlWithRequestParamsAndHash(url, "delete", e);
            },
            UTCTimingSchemeIdUriDirect = "urn:mpeg:dash:utc:direct:2014",
            UTCTimingSchemeIdUriHead = "urn:mpeg:dash:utc:http-head:2014",
            UTCTimingSchemeIdUriIso = "urn:mpeg:dash:utc:http-iso:2014",
            getServerTimeF = function(utcTimeServerUrl) {
                return n10.d.get(utcTimeServerUrl.replace("http://", "//")).then((function(t) {
                    var serverTime = t.data;
                    return new Date(serverTime).getTime() || Date.now();
                })).catch((function() {
                    return Date.now();
                }))
            },
            getServerTimeAsPromiseF = function(serverTime) {
                return Promise.resolve(new Date(serverTime).getTime());
            },
            v = 0;
        function y(t) {
            var timeoutWrapper,
                options = t.options,
                o = 1e3 * options.get(n1.k), //UTCTimeServerUpdateInterval
                schemelessUTCTimeServerUrl = options.get(n1.l).replace("http:", ""); //UTCTimeServer
            function timeSyncF() {
                return c.apply(this, arguments);
            }
            function c() {
                return (c = Object(n3.a)(n3.b.mark((function t() {
                        var n, timeSyncWrapper, selectedUtcTimingSchemeIdUri, timeSyncValue, d, b, args = arguments;
                        return n3.b.wrap((function(t) {
                                for (; ; ) {
                                    switch (t.prev = t.next) {
                                        case 0:
                                            timeSyncWrapper = args.length > 0 && void 0 !== args[0] ? args[0] : {};
                                            selectedUtcTimingSchemeIdUri = timeSyncWrapper.schemeIdUri;
                                            timeSyncValue = timeSyncWrapper.value;
                                            n = {};
                                            Object(n2.a)(n, UTCTimingSchemeIdUriDirect, getServerTimeAsPromiseF);
                                            Object(n2.a)(n, UTCTimingSchemeIdUriHead, getServerTimeF);
                                            Object(n2.a)(n, UTCTimingSchemeIdUriIso, getServerTimeF);

                                            if (!(d = n)[selectedUtcTimingSchemeIdUri]) {
                                                t.next = 8;
                                                break;
                                            }
                                            t.next = 5;
                                            return d[selectedUtcTimingSchemeIdUri](timeSyncValue);
                                        case 5:
                                            t.t0 = t.sent;
                                            t.next = 11;
                                            break;
                                        case 8:
                                            t.next = 10;
                                            return getServerTimeF(schemelessUTCTimeServerUrl);
                                        case 10:
                                            t.t0 = t.sent;
                                        case 11:
                                            b = t.t0;
                                            v = Date.now() - b;

                                            if (o <= 0) {
                                                return t.abrupt("return", y.getTime());
                                            }

                                            if (selectedUtcTimingSchemeIdUri !== UTCTimingSchemeIdUriDirect) {
                                                timeoutWrapper = setTimeout((function() {
                                                    return timeSyncF({
                                                        schemeIdUri: selectedUtcTimingSchemeIdUri,
                                                        value: timeSyncValue
                                                    })
                                                }), o);
                                            }

                                            return t.abrupt("return", y.getTime());
                                        case 15:
                                        case "end":
                                            return t.stop();
                                    }
                                }
                            }
                        ), t)
                    }
                )))).apply(this, arguments);
            }
            function l() {
                return (l = Object(n3.a)(n3.b.mark((function t() {
                        var timeSyncWrapper, selectedUtcTimingSchemeIdUri, timeSyncValue, i, args = arguments;
                        return n3.b.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                        case 0:
                                            timeSyncWrapper = args.length > 0 && void 0 !== args[0] ? args[0] : {};
                                            selectedUtcTimingSchemeIdUri = timeSyncWrapper.schemeIdUri;
                                            timeSyncValue = timeSyncWrapper.value;

                                            if (selectedUtcTimingSchemeIdUri !== UTCTimingSchemeIdUriDirect) {
                                                t.next = 6;
                                                break;
                                            }
                                            t.next = 4;
                                            return getServerTimeAsPromiseF(timeSyncValue);
                                        case 4:
                                            i = t.sent;
                                            v = Date.now() - i;
                                        case 6:
                                            return t.abrupt("return", y.getTime());
                                        case 7:
                                        case "end":
                                            return t.stop();
                                    }
                            }
                        ), t)
                    }
                )))).apply(this, arguments);
            }
            return {
                sync: timeSyncF,
                syncDirect: function() {
                    return l.apply(this, arguments);
                },
                stop: function() {
                    clearTimeout(timeoutWrapper);
                },
                getTime: function() {
                    return y.getTime();
                }
            }
        }
        y.getTime = function() {
            return (Date.now() - v) / 1e3;
        }
    },
    function(t, e, n) { /*** index 13 ***/
    "use strict";
        n.d(e, "a", (function() {
            return utils;
        }));

        var n6 = n(6),
            n8 = n(8),
            n18 = n(18),
            n20 = n(20),
            dateTimeFormatter = function() {
                var t = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g;

                function padWith0(inputNum, padLength) {
                    var result = "" + Math.abs(inputNum),
                        r = padLength || 2;

                    while (result.length < r) {
                        result = "0" + result;
                    }

                    return result;
                }
                return {
                    format: function(n, dateTimeFormat) {
                        var currentDateTimeFormat = dateTimeFormat || "YYYY-MM-DD HH:mm:ss",
                            date = new Date(n),
                            o = currentDateTimeFormat.match(t),
                            s = [];

                        for (let i = 0, end = o.length; i < end; i++) {
                            var l = o[i];
                            switch (l) {
                                case "YYYY":
                                    s.push(date.getFullYear());
                                    break;
                                case "YY":
                                    s.push(date.getFullYear() % 100);
                                    break;
                                case "MM":
                                case "M":
                                    s.push(padWith0(date.getMonth() + 1));
                                    break;
                                case "DD":
                                case "D":
                                    s.push(padWith0(date.getDate()));
                                    break;
                                case "HH":
                                case "H":
                                    s.push(padWith0(date.getHours()));
                                    break;
                                case "mm":
                                case "m":
                                    s.push(padWith0(date.getMinutes()));
                                    break;
                                case "ss":
                                case "s":
                                    s.push(padWith0(date.getSeconds()));
                                    break;
                                case "ms":
                                    s.push(date.getMilliseconds);
                                    break;
                                default:
                                    s.push(l);
                            }
                        }
                        return s.join("");
                    }
                }
            }(),
            utils = {
                extend: function(targetObj, sourceObj) {
                    var propName;
                    for (propName in sourceObj) {
                        if (!sourceObj.hasOwnProperty(propName)) {
                            continue;
                        }
                        targetObj[propName] = sourceObj[propName];
                    }

                    return targetObj;
                },
                extendDeep: function(targetObj, sourceObj) {
                    var propName;
                    for (propName in targetObj = targetObj || {}, sourceObj) {
                        if (!sourceObj.hasOwnProperty(propName)) {
                            continue;
                        }
                        if ("object" === Object(n18.b)(sourceObj[propName]) && null !== sourceObj[propName]) {
                            targetObj[propName] = "[object Array]" === Object.prototype.toString.call(sourceObj[propName]) ? [] : {};
                            this.extendDeep(targetObj[propName], sourceObj[propName]);
                        } else {
                            targetObj[propName] = sourceObj[propName];
                        }
                    }

                    return targetObj;
                },
                generateRandomString: function(len) {
                    var result = "",
                        alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    for (let i = 0; i < len; i++) {
                        result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                    }

                    return result;
                },
                formatTime: function(durationInSeconds) {
                    if (isNaN(durationInSeconds)) {
                        durationInSeconds = 0;
                    }

                    var hours = Math.floor(durationInSeconds / 3600),
                        minutes = Math.floor(durationInSeconds / 60) % 60,
                        seconds = Math.floor(durationInSeconds) % 60;
                    return (hours ? utils.addLeadingZero(hours) + ":" : "") + utils.addLeadingZero(minutes) + ":" + this.addLeadingZero(seconds);
                },
                formatDateTime: function(dateTimeString) {
                    var customDateTimeFormatOrDefault = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD HH:mm:ss";
                    return dateTimeFormatter.format(dateTimeString, customDateTimeFormatOrDefault);
                },
                addLeadingZero: function(num) {
                    return num < 10 ? "0" + num : "" + num;
                },
                parseTime: function(t) {
                    var e = t.split(":"),
                        n = 0,
                        r = 2;

                    while (e.length > 0) {
                        n += Math.pow(60, r) * parseInt(e.shift(), 10);
                        r--;
                    }

                    return n;
                },
                isDST: function(date) {
                    var january = new Date(date.getFullYear(), 0, 1),
                        june = new Date(date.getFullYear(), 6, 1);

                    return Math.min(january.getTimezoneOffset(), june.getTimezoneOffset()) === date.getTimezoneOffset();
                },
                parseDate: function(date) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0:0:0",
                        n = date.split("-");

                    n[1]--;

                    var i = e.split(":"),
                        a = Object(n6.a)(i, 3),
                        years = a[0],
                        months = a[1],
                        days = a[2],
                        dst = utils.isDST(new Date(n[0], n[1], n[2], parseInt(years), parseInt(months), parseInt(days))),
                        correctionForDST = new Date(new Date(n[0], n[1], n[2]).getTime()).getTimezoneOffset() + (dst ? 120 : 60);

                    correctionForDST *= 60;

                    return new Date(n[0] [1], n[2]).getTime() / 1e3 - correctionForDST;
                },
                calculateBaseTime: function(t) {
                    var e = t.split(" ");
                    return utils.parseDate(e[0], e[1]) + utils.parseTime(e[1]);
                },
                parseDateTime: function(t) {
                    var e, n = 0,
                        i = t.split(/([\+\-Z])(.{2,9})?$/),
                        a = /Z$/.test(t),
                        o = i.length <= 1,
                        s = i[0].split(/[T\s]/),
                        c = s[0].split("-"),
                        YMDArray = Object(n6.a)(c, 3),
                        year = YMDArray[0],
                        month = YMDArray[1],
                        day = YMDArray[2],
                        p = s[1].split(":"),
                        HMSArray = Object(n6.a)(p, 3),
                        hours = HMSArray[0],
                        minutes = HMSArray[1],
                        seconds = HMSArray[2],
                        isDST = utils.isDST(new Date(year, month - 1, day, hours, minutes, seconds));

                    if (!a && !o) {
                        n = -1 * + (i[1] + (3600 * (e = i[2].split(/[:.]/))[0] + 60 * e[1]));
                    }

                    n += 60 * (isDST ? 120 : 60);

                    return this.calculateBaseTime(s[0] + " " + s[1]) + (o ? 0 : n);
                },
                getCssUrl: function(cssResourceWrapper) {
                    var cssInitialName = cssResourceWrapper.name,
                        cssFinalName = void 0 === cssInitialName ? "default" : cssInitialName,
                        cssUrl = cssResourceWrapper.url,
                        cssRootPath = "".concat(n20.a.ROOT_URL).concat(n20.a.VERSION, "/css/");

                    return cssUrl || "".concat(cssRootPath).concat(cssFinalName, ".css");
                },
                loadSkin: function(cssResourceWrapper) {
                    return this.loadCss(this.getCssUrl(cssResourceWrapper));
                },
                loadCss: function(url) {
                    var htmlLinkElement = document.createElement("link");

                    var linkExists = Object(n8.a)(document.querySelectorAll("link")).find((function(link) {
                        return link.getAttribute("href") === url;
                    }));

                    if (linkExists) {
                        return Promise.resolve();
                    }

                    return new Promise((function(resolve, reject) {
                        htmlLinkElement.setAttribute("rel", "stylesheet");
                        htmlLinkElement.setAttribute("type", "text/css");
                        htmlLinkElement.setAttribute("href", url);
                        document.querySelector("head").appendChild(htmlLinkElement);
                        htmlLinkElement.onload = function() {
                            return resolve();
                        };
                        htmlLinkElement.onerror = function() {
                            return resolve();
                        };
                    }));
                },
                getBrowserLanguage: function() {
                    var currentNavigator1 = navigator,
                        currentNavigator2 = navigator,
                        n,
                        lang = (currentNavigator1 == null ? void 0 : currentNavigator1.language) || (currentNavigator2 == null || null === (n = currentNavigator2.languages) || void 0 === n ? void 0 : n[0]);
                    return null == lang ? void 0 : lang.split("-")[0];
                }
            }
    },
    function(t, e, n) { /*** index 14 ***/
    "use strict";
        n.d(e, "a", (function() {
            return i;
        }));

        var n5 = n(5),
            i = function() {
                function t() {
                    Object(n5.a)(this, t);
                    this.callbacks = {};
                }
                Object(n5.b)(t, [{
                    key: "on",
                    value: function(propName, e) {
                        this.callbacks = this.callbacks || {};
                        if (!this.callbacks.hasOwnProperty(propName)) {
                            this.callbacks[propName] = [];
                        }

                        this.callbacks[propName].push(e);
                    }
                },
                    {
                        key: "once",
                        value: function(t, e) {
                            this.on(t, (function n() {
                                var r = Array.prototype.slice.call(arguments);

                                this.off(t, n);
                                e.apply(this, r);
                            }))
                        }
                    },
                    {
                        key: "off",
                        value: function(t, e) {
                            this.callbacks = this.callbacks || {}; //breakpoint here, are t and e numbers?
                            if (t == null || "" === t) {
                                this.callbacks = {};
                            }

                            if (e && this.callbacks[t] && this.callbacks[t].length) {
                                for (let i = this.callbacks[t].indexOf(e); -1 !== i; i = this.callbacks[t].indexOf(e)) {
                                    this.callbacks[t].splice(i, 1);
                                }
                            } else {
                                delete this.callbacks[t];
                            }
                        }
                    },
                    {
                        key: "trigger",
                        value: function(callbackCategory) {
                            var callbackSequence,
                                args = Array.prototype.slice.call(arguments);

                            this.callbacks = this.callbacks || {};
                            args.shift();

                            if (this.callbacks.hasOwnProperty(callbackCategory)) {
                                callbackSequence = this.callbacks[callbackCategory].slice();
                                for (let i = 0; i < callbackSequence.length; i++) {
                                    callbackSequence[i].apply(this, args);
                                }
                            }
                        }
                    }]);
                return t;
            }()
    },
    function(t, e, n) { /*** index 15 ***/
    "use strict";
        function r(t, e) {
            e = { exports: {} };
            t(e, e.exports);

            return e.exports;
        }
        n.d(e, "a", (function() {
            return r;
        }))
    },
    function(t, e, n) { /*** index 16 ***/
    "use strict";
        n.d(e, "a", (function() {
            return errorKeysAndCodesWrapper;
        }));

        var errorKeysAndCodesInit = {},
            n2 = n(2),
            n7 = n(7),
            errorKeysAndCodesWrapper;

        Object(n2.a)(errorKeysAndCodesInit, n7.a.NO_SUPPORTED_RENDERER, 200);
        Object(n2.a)(errorKeysAndCodesInit, n7.a.NO_SUPPORTED_CODEC, 201);
        Object(n2.a)(errorKeysAndCodesInit, n7.a.PLAYBACK_ERROR, 204);
        Object(n2.a)(errorKeysAndCodesInit, n7.a.MEDIA_ERR_ABORTED, 205);
        Object(n2.a)(errorKeysAndCodesInit, n7.a.MEDIA_ERR_DECODE, 206);
        Object(n2.a)(errorKeysAndCodesInit, n7.a.MEDIA_ERR_NETWORK, 207);
        Object(n2.a)(errorKeysAndCodesInit, n7.a.MEDIA_ERR_SRC_NOT_SUPPORTED, 208);
        Object(n2.a)(errorKeysAndCodesInit, n7.a.LOAD_MANIFEST_ERROR, 400);
        Object(n2.a)(errorKeysAndCodesInit, n7.a.LOAD_SEGMENT_ERROR, 401);
        Object(n2.a)(errorKeysAndCodesInit, n7.a.PARSE_MANIFEST_ERROR, 500);
        Object(n2.a)(errorKeysAndCodesInit, n7.a.GENERIC_ERROR, 900);

        errorKeysAndCodesWrapper = errorKeysAndCodesInit;
    },
    function(t, e, n) { /*** index 17 ***/
    "use strict";
        function r() {
            var timeout = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 250,
                timerHandler = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                currentInterval = null,
                start = 0;

            function doStart() {
                doStop();
                start = Date.now();
                currentInterval = setInterval(timerHandler, timeout);

                if (!n) {
                    return;
                }

                timerHandler();
            }
            function doStop() {
                clearInterval(currentInterval);
            }
            function doRestart(newTimeout) {
                if (newTimeout) {
                    timeout = newTimeout;
                }

                doStart();
            }
            function calculateDuration() {
                return Date.now() - start;
            }
            return {
                getDuration: calculateDuration,
                start: doStart,
                restart: doRestart,
                stop: doStop
            }
        }
        n.d(e, "a", (function() {
            return r;
        }))
    },
    function(t, e, n) { /*** index 18 ***/
    "use strict";
        n.d(e, "a", (function() {
            return i;
        }));
        n.d(e, "b", (function() {
            return i;
        }));

        var n15 = n(15),
            i = Object(n15.a)((function(module) {
                function _typeof2(obj) {
                    if ("function" == typeof Symbol && "symbol" == typeof Symbol.iterator) {
                        module.exports = _typeof2 = function(obj) {
                            return typeof obj;
                        }
                    } else {
                        module.exports = _typeof2 = function(obj) {
                            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        };
                    }

                    return _typeof2(obj);
                }
                module.exports = _typeof2;
            }))
    },
    function(t, e, n) { /*** index 19 ***/
    "use strict";
        n.d(e, "a", (function() {
            return shallowCopyArray;
        }));
        n.d(e, "b", (function() {
            return ii;
        }));

        var shallowCopyArray = function(oldArray, newArrayLength) {
            if (null == newArrayLength || newArrayLength > oldArray.length) {
                newArrayLength = oldArray.length;
            }

            var result = new Array(newArrayLength);
            for (let i = 0; i < newArrayLength; i++) {
                result[i] = oldArray[i];
            }
            return result;
        };
        var ii = function(obj, e) {
            if (!obj) {
                return;
            }

            if ("string" == typeof obj) {
                return shallowCopyArray(obj, e);
            }
            var n = Object.prototype.toString.call(obj).slice(8, -1);

            if ("Object" === n && obj.constructor) {
                n = obj.constructor.name;
            }

            if ("Map" === n || "Set" === n) {
                return Array.from(n);
            }

            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                return shallowCopyArray(obj, e);
            }

            return void 0;
        }
    },
    function(t, e, n) { /*** index 20 ***/
    "use strict";
        n.d(e, "a", (function() {
            return currentPlayerReleaseInfo;
        }));

        var currentPlayerReleaseInfo = {
            VERSION: "2.27.3",
            BUILD: "2022-09-15 08:49:57",
            ROOT_URL: "",
            REVISION: "f3093a8"
        };

        currentPlayerReleaseInfo.INFO = "version: ".concat(currentPlayerReleaseInfo.VERSION, ", build: ").concat(currentPlayerReleaseInfo.BUILD, ", revision: ").concat(currentPlayerReleaseInfo.REVISION);
    },
    function(t, e, n) { /*** index 21 ***/
    "use strict";
        n.d(e, "a", (function() {
            return streamModes;
        }));
        n.d(e, "b", (function() {
            return u; //breakpoint here
        }));
        var n1 = n(1),
            n0 = n(0),
            n13 = n(13),
            n12 = n(12),
            streamModes = {
                LIVE: "live",
                LIVE_DELAYED: "liveDelayed",
                VOD: "vod",
                VOD_SHIFTED: "vodShifted"
            };
        function u(t) {
            t.on(n0.j, doUpdate); //subtitleEnableRequest
            t.on(n0.k, doUpdate); //styles
            t.on(n0.C, (function(t) { //manifestLoaded
                availabilityStartTime = t.availabilityStartTime || 0;
                if (!t.presentationTimeOffset) {
                    baseTimeStamp = availabilityStartTime;
                }
            }));
            t.once(n0.fb, (function() { //metadata
                initialStart = doGetStartTime();
            }));

            var options = t.options,
                timeShift = getTimeShift(),
                calculatedTimeShift = timeShift,
                currentStreamMode = null,
                delayed = !1,
                delay = -1,
                initialDvrWindow = -1,
                initialStart = -1,
                playStopTime = -1,
                playStartTime = -1,
                availabilityStartTime = 0,
                baseTimeStamp = 978307200,
                timeShiftUnix = calculatedTimeShift == null ? void 0 : calculatedTimeShift.unixTimestamp,
                timeShiftParams = options.get(n1.o); //timeShiftParams

            function doUpdate() {
                timeShift = getTimeShift();

                if (t.options.get(n1.p)) { //timeShiftEnabled
                    currentStreamMode = streamModes.LIVE;
                }

                if (!timeShift) {
                    return;
                }

                if (void 0 !== timeShift.baseTimeStamp) {
                    baseTimeStamp = timeShift.baseTimeStamp;
                }

                if (timeShift.dvrWindow) {
                    delayed = !0;
                    initialDvrWindow = timeShift.dvrWindow;
                }

                if (timeShift.start) {
                    delay = n13.a.parseDateTime(timeShift.start);
                }

                if (timeShift.play) {
                    playStartTime = n13.a.parseDateTime(timeShift.play);
                }

                if (timeShift.start && timeShift.stop) {
                    playStopTime = n13.a.parseDateTime(timeShift.stop);
                    playStartTime && options.set(n1.Eb, Math.floor(playStartTime - delay)); //startTime
                }

                if (null === currentStreamMode) {
                    currentStreamMode = streamModes.LIVE;

                    if (timeShift.play) {
                        currentStreamMode = streamModes.LIVE_DELAYED;
                    }
                    if (timeShift.start && timeShift.stop) {
                        currentStreamMode = streamModes.VOD;
                    }
                }

                setTimeout(t.trigger.bind(t, n0.l), 0); //timeShift
            }
            function live() {
                return currentStreamMode === streamModes.LIVE || currentStreamMode === streamModes.LIVE_DELAYED;
            }
            function isStreamEnabled() {
                return null !== currentStreamMode;
            }
            function doGetBaseTimeStamp() {
                return baseTimeStamp;
            }
            function doGetDvrWindow() {
                return Math.min(initialDvrWindow, doGetHeadTime() - delay);
            }
            function doGetPlayStart() {
                return playStartTime;
            }
            function doGetStop() {
                return playStopTime;
            }
            function doGetHeadTime() {
                return n12.a.getTime();
            }
            function getTimeShift() {
                return t.options.get(n1.u); //timeShift
            }
            function doGetStartTime() {
                var headTime = doGetHeadTime(),
                    dvrWindow = doGetDvrWindow();
                return delayed && dvrWindow > 0 && headTime > 0 ? headTime - dvrWindow : delay;
            }

            if (timeShiftUnix) {
                baseTimeStamp = 0;
            }
            return  {
                update: doUpdate,
                getStart: doGetStartTime,
                getInitialStart: function() {
                    return initialStart;
                },
                getPlayStart: doGetPlayStart,
                getStop: doGetStop,
                isLive: live,
                isVod: function() {
                    return currentStreamMode === streamModes.VOD || currentStreamMode === streamModes.VOD_SHIFTED;
                },
                getDvrWindow: doGetDvrWindow,
                getInitialDvrWindow: function() {
                    return initialDvrWindow;
                },
                getMode: function() {
                    return currentStreamMode;
                },
                isEnabled: isStreamEnabled,
                generateUrl: function(fullUrl) {
                    if (timeShiftParams.disableUrlModification) {
                        return fullUrl;
                    }
                    var multiplier = timeShiftUnix ? 1 : 1e3,
                        normalizedBaseTimeStamp = (timeShiftUnix ? 0 : doGetBaseTimeStamp()) * multiplier,
                        r = doGetStartTime() * multiplier - normalizedBaseTimeStamp,
                        i = doGetStop() * multiplier - normalizedBaseTimeStamp,
                        a = doGetPlayStart() * multiplier - normalizedBaseTimeStamp;

                    if (fullUrl.endsWith("&")) {
                        fullUrl = fullUrl.slice(0, -1);
                    }

                    if (live() && r > 0 && initialDvrWindow <= 0) {
                        fullUrl = Object(n12.d)(fullUrl, timeShiftParams.startTime, r);
                    }

                    if (initialDvrWindow > 0) {
                        fullUrl = Object(n12.d)(fullUrl, timeShiftParams.dvr, 1e3 * initialDvrWindow);
                    }

                    if (currentStreamMode === streamModes.VOD || currentStreamMode === streamModes.VOD_SHIFTED) {
                        fullUrl = Object(n12.d)(fullUrl, timeShiftParams.startTime, r);
                        fullUrl = Object(n12.d)(fullUrl, timeShiftParams.stopTime, i);
                    }

                    if (currentStreamMode === streamModes.LIVE_DELAYED && !initialDvrWindow) {
                        fullUrl = Object(n12.d)(fullUrl, timeShiftParams.startTime, a);
                    }

                    return fullUrl;
                },
                setDvrWindow: function(newDvrWindow) {
                    if (!isStreamEnabled()) {
                        return;
                    }

                    delayed = !0;
                    initialDvrWindow = newDvrWindow;
                },
                getBaseTimeStamp: doGetBaseTimeStamp,
                getAvailabilityStartTime: function() {
                    return availabilityStartTime;
                },
                setAvailabilityStartTime: function(newStartTime) {
                    availabilityStartTime = newStartTime;
                },
                setMode: function(newStreamMode) {
                    currentStreamMode = newStreamMode;
                },
                reset: function() {
                    if (currentStreamMode === streamModes.LIVE_DELAYED) {
                        currentStreamMode = streamModes.LIVE;
                    }
                    if (currentStreamMode === streamModes.VOD_SHIFTED) {
                        currentStreamMode = streamModes.VOD;
                    }
                },
                isVodEnded: function(currentTime) {
                    return currentTime > playStopTime;
                },
                getLiveNowUTC: doGetHeadTime,
                getHeadTime: function() {
                    return doGetHeadTime;
                },
                setLive: function() {
                    currentStreamMode = streamModes.LIVE;
                },
                setPlay: function(preferredStartTime) {
                    playStartTime = preferredStartTime;
                }
            }
        }
    },
    function(t, e, n) { /*** index 22 ***/
    "use strict";
        n.d(e, "a", (function() {
            return AudioTrackDTO;
        }));
        n.d(e, "b", (function() {
            return domPlayerWrapper; //breakpoint here and on others
        }));
        n.d(e, "c", (function() {
            return HlsjsConstants;
        }));
        n.d(e, "d", (function() {
            return Html5Renderer;
        }));
        n.d(e, "e", (function() {
            return getBufferLengthForTime;
        }));

        var n7 = n(7),
            ERROR_NUMBERS = n(16),
            n1 = n(1),
            n9 = n(9),
            n0 = n(0),
            n3 = n(3),
            n6 = n(6),
            n8 = n(8),
            n5 = n(5),
            n4 = n(4),
            n25 = n(25),
            n18 = n(18),
            n11 = n(11),
            n14 = n(14),
            n17 = n(17),
            n13 = n(13),
            n12 = n(12),
            n10 = n(10),
            n21 = n(21),
            playerEvents = ["timeupdate", "progress", "seeking", "play", "playing", "ended", "waiting", "pause", "seeked", "loadedmetadata", "loadeddata", "loadstart", "stalled", "error", "canplay", "ratechange", "volumechange"];

        function MediaElement(htmlVideoElement) {
            var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                mediaElement = this,
                videoElement = htmlVideoElement || document.createElement("video"),
                eventWrappers = [],
                o = !1; //loading?

            videoElement.setAttribute("width", "100%");
            videoElement.setAttribute("height", "100%");

            if (options.get(n1.Jb)) { //autoplay
                videoElement.setAttribute("autoplay", "autoplay");
            }
            if (options.get(n1.q)) { //playsInline
                videoElement.setAttribute(n1.q.toLowerCase(), "");
            }

            videoElement.setAttribute("crossorigin", "anonymous");

            var posterValue = options.get(n1.Kb); //poster
            function seekToTime(newTime) {
                videoElement.currentTime = newTime;
            }
            function turnOff() {
                mediaElement.off();
                removeAllListeners();
            }
            function removeAllListeners() {
                mediaElement.off();
                eventWrappers.forEach((function(eventWrapper) {
                    videoElement.removeEventListener(eventWrapper.event, eventWrapper.fn);
                }));
            }
            function loadVideoElement() {
                try {
                    videoElement.load();
                } catch (t) {}
            }
            function isPausedF() {
                return videoElement.paused;
            }
            function getVolumeF() {
                return videoElement.volume;
            }
            function setVolumeF(newVolume) {
                videoElement.volume = newVolume;
            }
            function setMutedF(muted) {
                videoElement.muted = muted;
            }
            function isMutedF() {
                return videoElement.muted;
            }
            function getSourceF() {
                return videoElement.src;
            }
            function setSourceF(src) {
                videoElement.src = src;
            }
            function doRemoveSource() {
                videoElement.removeAttribute("src");
            }
            function doPause() {
                if (o) {
                    return;
                }

                videoElement.pause();
            }
            function doPlay() {
                if (o) {
                    return;
                }

                var t = videoElement.play(); //breakpoint here, what does this return?

                if (null == t || !t.catch) {
                    return t;
                }

                o = !0;
                t.catch((function(t) {
                    return mediaElement.trigger(n0.ib, t); //playInterrupted
                })).then((function(t) {
                    o = !1;
                    mediaElement.trigger(n0.jb); //playPromiseResolved
                }))

                return t;
            }
            function getDurationF() {
                return videoElement.duration;
            }
            function getOffsetWidth() {
                return videoElement.offsetWidth;
            }
            function getOffsetHeight() {
                return videoElement.offsetHeight;
            }
            function getNativeAudioTracksF() {
                return Array.from(videoElement.audioTracks || []);
            }
            function getNativeTextTracksF() {
                return videoElement.textTracks;
            }
            function doAddNativeTextTracks(nativeTextTracks) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    textTrackLoaded = Object(n8.a)(videoElement.textTracks).some((function(track) {
                        return track.language || track.label;
                    }));

                if (!e && textTrackLoaded) {
                    return;
                }

                nativeTextTracks.forEach((function(nativeTextTrack) {
                    var textTrack = videoElement.addTextTrack("subtitles", nativeTextTrack.language, nativeTextTrack.language);
                    textTrack.customCreated = !0;

                    if (nativeTextTrack.trackId) {
                        textTrack.trackId = nativeTextTrack.trackId;
                    }
                }))
            }
            function createEventWrappers() {
                removeAllListeners();
                playerEvents.forEach((function(eventName) {
                    var eventWrapper = {
                        fn: function(event) {
                            mediaElement.trigger.call(mediaElement, eventName, event);
                        },
                        name: eventName
                    };
                    videoElement.addEventListener(eventWrapper.name, eventWrapper.fn);
                    eventWrappers.push(eventWrapper);
                }));

                var addTrackEventWrapper = {
                    fn: function(t) {
                        var track = t.track;
                        return mediaElement.trigger(n0.kb, track, getNativeTextTracksF()); //nativeTextTracksListAddTrack
                    },
                    name: "addtrack"
                };
                getNativeTextTracksF().addEventListener("addtrack", addTrackEventWrapper.fn);
                eventWrappers.push(addTrackEventWrapper);
            }
            function setPlaybackRateF(newPlaybackRate) {
                videoElement.playbackRate = newPlaybackRate;
            }
            function getPlaybackRateF() {
                return videoElement.playbackRate;
            }

            if (posterValue) {
                videoElement.setAttribute("poster", posterValue);
            }

            if (n11.a.isMobile()) {
                videoElement.setAttribute("autoplay", "autoplay");
            }

            if (options.get(n1.Lb)) { //disableNativeControls
                videoElement.removeAttribute("controls");
            }
            createEventWrappers();

            return {
                on: this.on.bind(this),
                once: this.once.bind(this),
                off: turnOff,
                seek: seekToTime,
                load: loadVideoElement,
                getVolume: getVolumeF,
                setVolume: setVolumeF,
                setMuted: setMutedF,
                getSource: getSourceF,
                setSource: setSourceF,
                removeSource: doRemoveSource,
                pause: doPause,
                play: doPlay,
                getDuration: getDurationF,
                getNativeAudioTracks: getNativeAudioTracksF,
                getNativeTextTracks: getNativeTextTracksF,
                addNativeTextTracks: doAddNativeTextTracks,
                getWidth: getOffsetWidth,
                getHeight: getOffsetHeight,
                getPlaybackRate: getPlaybackRateF,
                setPlaybackRate: setPlaybackRateF,
                isPaused: isPausedF,
                isMuted: isMutedF,
                getVideo: function() {
                    return videoElement;
                },
                getHeightF() { //this was: get height()
                    return videoElement.offsetHeight;
                },
                getCurrentTime: function() {
                    return videoElement.currentTime;
                },
                getBufferLengthFromTime: function(t) {
                    return getBufferLengthForTime(videoElement, t);
                },
                getBufferLength: function() {
                    return getBufferLengthForTime(videoElement, videoElement.currentTime);
                },
                getBuffered: function() {
                    return videoElement.buffered;
                },
                getPlayed: function() {
                    return videoElement.played;
                },
                getBufferRange: function(t, e) {
                    return getBufferRangeF(videoElement, t, e);
                },
                getReadyState: function() {
                    return videoElement.readyState;
                },
                getDecodedFrameCount: function() {
                    return HTMLVideoElement.prototype.getVideoPlaybackQuality ? videoElement.getVideoPlaybackQuality().totalVideoFrames : "webkitDecodedFrameCount" in videoElement ? videoElement.webkitDecodedFrameCount : -1;
                },
                getDroppedFrameCount: function() {
                    return HTMLVideoElement.prototype.getVideoPlaybackQuality ? videoElement.getVideoPlaybackQuality().droppedVideoFrames : "webkitDroppedFrameCount" in videoElement ? videoElement.webkitDroppedFrameCount : -1;
                },
                hasBuffered: function() {
                    return !!videoElement.buffered.length;
                },
                hasPlayed: function() {
                    return !!videoElement.played.length;
                },
                isSeeking: function() {
                    return videoElement.seeking;
                }
            }
        }
        function getBufferLengthForTime(t, targetTime) {
            var startTime, endTime, bufferLength = 0;
            if (!t.buffered.length) {
                return bufferLength;
            }

            for (let i = 0; i < t.buffered.length; i++) {
                startTime = t.buffered.start(i);
                endTime = t.buffered.end(i);

                if (startTime <= targetTime && endTime >= targetTime) {
                    bufferLength = endTime - targetTime;
                }
            }

            return bufferLength;
        }
        function getBufferRangeF(videoElement, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
                bufferedSegments = videoElement.buffered || [];
            for (let i = 0; i < bufferedSegments.length; i++) {
                var bufferStart = bufferedSegments.start(i),
                    bufferEnd = bufferedSegments.end(i);

                if (bufferStart < e || bufferStart > n) {
                    continue;
                }

                return {
                    start: bufferStart,
                    end: bufferEnd
                }
            }

            return null;
        }
        function isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], (function() {} )));
                return !0;
            } catch (t) {
                return !1;
            }
        }
        MediaElement.prototype = Object.create(n14.a.prototype);
        var domPlayerWrapper = function(args) {
            Object(n4.a)(createDomPlayerWrapperSkeleton, args);
            var e, n;
            e = createDomPlayerWrapperSkeleton;
            n = function() {
                var t,
                    n = Object(n4.b)(e);
                if (isNativeReflectConstruct()) {
                    var constructor = Object(n4.b)(this).constructor;
                    t = Reflect.construct(n, arguments, constructor);
                } else {
                    t = n.apply(this, arguments);
                }

                return Object(n4.c)(this, t);
            }

            function createDomPlayerWrapperSkeleton(player, htmlVideoElement) {
                var renderer;

                Object(n5.a)(this, createDomPlayerWrapperSkeleton);
                renderer = n.call(this);
                renderer.player = player;
                renderer.options = player.options;
                renderer.timeShift = renderer.player.timeShift;
                renderer.isStarted = !1;
                renderer.isPaused = !1;
                renderer.url = null;
                renderer.baseUrl = null;
                renderer.lastEvent = null;
                renderer.mediaItem = void 0;
                renderer.timer = new n17.a(350, (function() {
                    return renderer.monitor();
                }));
                renderer.currentRenderer = Object(n4.d)(renderer);
                renderer.protectionManger = void 0;
                renderer.initialLatency = void 0;
                renderer.liveLatencyBeforeAppHiding = void 0;
                renderer.volumeLocalStorageKey = renderer.options.get(n1.w); //volumeLocalStorageKey
                renderer.volumeMutedLocalStorageKey = renderer.options.get(n1.Mb); //volumeMutedLocalStorageKey
                renderer.mediaElement = new MediaElement(htmlVideoElement || document.createElement("video"), renderer.options);
                player.addComponent(renderer.mediaElement, n9.d); //"media-element"
                player.on(n0.w, (function(t) { //visibilitychange
                    return renderer.onVisibilityChange(t);
                }));
                renderer.updateVolume();

                return renderer;
            }
            Object(n5.b)(createDomPlayerWrapperSkeleton, [{
                key: "onVisibilityChange",
                value: function(t) {
                    if (!this.isLive()) {
                        return;
                    }

                    var e = this.player.getLiveLatency() - (this.liveLatencyBeforeAppHiding || 0);

                    if (t && e > 20) {
                        this.player.seekToHead();
                    }

                    this.liveLatencyBeforeAppHiding = t ? void 0 : this.player.getLiveLatency();
                }
            },
                {
                    key: "monitor",
                    value: function() {
                        this.guardLivePlaybackRate();
                        this.trigger(n0.lb, this.getCurrentTime(), this.getDuration()); //monitor
                    }
                },
                {
                    key: "guardLivePlaybackRate",
                    value: function() {
                        if (!this.isLive() && 1 === this.getPlaybackRate()) {
                            return;
                        }

                        if (this.player.getLiveLatency() >= 5 && this.getCurrentTime() >= 0) {
                            return;
                        }

                        this.setPlaybackRate(1);
                    }
                },
                {
                    key: "setMediaItem",
                    value: function(mediaItem) {
                        this.mediaItem = mediaItem;
                        this.url = mediaItem.url;
                    }
                },
                {
                    key: "updateVolume",
                    value: function() {
                        var stor1 = localStorage,
                            stor2 = localStorage,
                            volumeLocalStorageKey = 0,
                            volumeMutedLocalStorageKey = !1;

                        if (this.options.get(n1.Nb)) { //volumeLocalStorageEnabled
                            volumeLocalStorageKey = parseFloat(stor1 == null ? void 0 : stor1.getItem(this.options.get(n1.w))); //volumeLocalStorageKey
                            volumeMutedLocalStorageKey = "true" === (stor2 == null ? void 0 : stor2.getItem(this.options.get(n1.Mb))); //volumeMutedLocalStorageKey
                        }

                        var volume = this.options.get(n1.Ob), //volume
                            volumeMuted = this.options.get(n1.Pb), //volumeMuted
                            resultVolume = void 0 !== volume ? volume : volumeLocalStorageKey || 50;
                        this.setVolume(resultVolume);
                        var muted = void 0 !== volumeMuted ? volumeMuted : volumeMutedLocalStorageKey;

                        if (muted) {
                            this.setMuted(muted);
                        }
                    }
                },
                {
                    key: "updateLocalStorage",
                    value: function() {
                        var stor1 = localStorage,
                            stor2 = localStorage;

                        if (!this.options.get(n1.Nb)) {//volumeLocalStorageEnabled
                            return;
                        }

                        if (stor1 != null) {
                            stor1.setItem(this.options.get(n1.w), this.getVolume()); //volumeLocalStorageKey
                        }
                        if (stor2 != null) {
                            stor2.setItem(this.options.get(n1.Mb), this.isMuted()); //volumeMutedLocalStorageKey
                        }
                    }
                },
                {
                    key: "getRendererElm",
                    value: function() {
                        return this.mediaElement.getVideo();
                    }
                },
                {
                    key: "getVideo",
                    value: function() {
                        return this.mediaElement.getVideo();
                    }
                },
                {
                    key: "isMuted",
                    value: function() {
                        return this.mediaElement.isMuted();
                    }
                },
                {
                    key: "setMuted",
                    value: function(muted) {
                        this.mediaElement.setMuted(muted);

                        if (muted) {
                            return;
                        }

                        if (0 === this.getVolume()) {
                            this.setVolume(50);
                        }
                    }
                },
                {
                    key: "getVolume",
                    value: function() {
                        return 100 * this.mediaElement.getVolume();
                    }
                },
                {
                    key: "getCurrentProfile",
                    value: function() {
                        return 0;
                    }
                },
                {
                    key: "setVolume",
                    value: function(volume) {
                        if (volume > 100) {
                            volume = 100;
                        }
                        if (volume < 0) {
                            volume = 0;
                        }

                        this.mediaElement.setVolume(volume / 100);

                        if (0 === volume) {
                            this.setMuted(!0);
                        }
                    }
                },
                {
                    key: "seek",
                    value: function(t) {
                        this.seekTo(this.getDuration() / 100 * t);
                    }
                },
                {
                    key: "seekTo",
                    value: function(t) {
                        this.triggerOnSeekStartEvents();
                        this.mediaElement.seek(t);
                    }
                },
                {
                    key: "seekToHead",
                    value: function() {
                        var headTime = Math.min(this.getDuration(), Number.MAX_SAFE_INTEGER),
                            liveDelay = this.isLive() ? this.getLiveDelay() : 0;
                        this.seekTo(headTime - liveDelay);
                    }
                },
                {
                    key: "getDroppedFrameCount",
                    value: function() {
                        return this.mediaElement.getDroppedFrameCount();
                    }
                },
                {
                    key: "getDecodedFrameCount",
                    value: function() {
                        return this.mediaElement.getDecodedFrameCount();
                    }
                },
                {
                    key: "getPlayed",
                    value: function() {
                        return this.mediaElement.getPlayed();
                    }
                },
                {
                    key: "getBuffered",
                    value: function() {
                        return this.mediaElement.getBuffered();
                    }
                },
                {
                    key: "getDownloadSpeed",
                    value: function() {
                        return -1;
                    }
                },
                {
                    key: "getPlaybackRate",
                    value: function() {
                        return this.mediaElement.getPlaybackRate();
                    }
                },
                {
                    key: "setPlaybackRate",
                    value: function(t) {
                        return this.mediaElement.setPlaybackRate(t);
                    }
                },
                {
                    key: "getLiveDelay",
                    value: function() {
                        return 0;
                    }
                },
                {
                    key: "getBufferLength",
                    value: function() {
                        return this.mediaElement.getBufferLength();
                    }
                },
                {
                    key: "getCurrentTime",
                    value: function() {
                        return this.mediaElement.getCurrentTime();
                    }
                },
                {
                    key: "getDuration",
                    value: function() {
                        return this.mediaElement.getDuration();
                    }
                },
                {
                    key: "isLive",
                    value: function() {
                        return this.options.get(n1.Qb); //live
                    }
                },
                {
                    key: "registerEvents",
                    value: function() {
                        var domPlayerWrapper = this;
                        playerEvents.forEach((function(playerEvent) {
                            var eventName = "on".concat(playerEvent.charAt(0).toUpperCase()).concat(playerEvent.slice(1));

                            if ("function" == typeof domPlayerWrapper[eventName]) {
                                domPlayerWrapper.mediaElement.on(playerEvent, domPlayerWrapper[eventName].bind(domPlayerWrapper));
                            }
                        }));
                        this.mediaElement.on(n0.ib, (function(e) {
                            return domPlayerWrapper.player.trigger(n0.ib, e); //playInterrupted
                        }));
                        this.mediaElement.on(n0.jb, (function() {
                            return domPlayerWrapper.player.trigger(n0.jb); //playPromiseResolved
                        }));
                        this.mediaElement.on(n0.kb, (function(e, n) {
                            return domPlayerWrapper.player.trigger(n0.kb, e, n); //nativeTextTracksListAddTrack
                        }));
                    }
                },
                {
                    key: "unRegisterEvents",
                    value: function() {
                        this.mediaElement.off();
                    }
                },
                {
                    key: "setSource",
                    value: function(newSource) {
                        this.playSource(newSource);
                    }
                },
                {
                    key: "playSource",
                    value: function(newSource) {
                        this.mediaElement.setSource(newSource);
                        this.mediaElement.play();
                    }
                },
                {
                    key: "restart",
                    value: function() {
                        this.isStarted = !1;
                        this.play();
                    }
                },
                {
                    key: "play",
                    value: function() {
                        this.isPaused = !1;
                        this.isStarted ? this.mediaElement.play() : this.setSource(this.mediaItem.url);
                        this.timer.start();
                        this.isStarted = !0;
                    }
                },
                {
                    key: "pause",
                    value: function() {
                        this.isPaused = !0;
                        this.mediaElement.pause();
                    }
                },
                {
                    key: "stop",
                    value: function() {
                        this.mediaElement.pause();
                        this.player.trigger(n0.t, this.mediaElement.getCurrentTime()); //stopped
                        this.destroy();
                    }
                },
                {
                    key: "guardLivePosition",
                    value: function() {
                        if (!this.isLive()) {
                            return;
                        }

                        if (this.timeShift.isEnabled()) {
                            return;
                        }

                        if (this.getCurrentTime() > 0) {
                            this.seekToHead();
                        }
                    }
                },
                {
                    key: "guardTimeShiftPosition",
                    value: function() {
                        if (this.timeShift.isEnabled() && this.getCurrentTime() < 0) {
                            this.player.seekTo(this.options.get(n1.h)); //guardTimeShiftSafeSeek
                        }
                    }
                },
                {
                    key: "triggerOnSeekStartEvents",
                    value: function() {
                        var currentTime = this.getCurrentTime();
                        this.player.trigger(n0.mb, currentTime); //seeking

                        if (this.mediaElement.isPaused()) {
                            this.player.trigger(n0.nb, currentTime); //syntheticWaiting
                        }
                    }
                },
                {
                    key: "destroy",
                    value: function() {
                        var timer = this.timer;

                        if (timer != null) {
                            timer.stop();
                        }

                        this.isStarted = !1;
                        this.isPaused = !1;
                        this.unRegisterEvents();
                        this.mediaElement.pause();
                        this.mediaElement.off();

                        if (this.mediaElement.getSource()) {
                            this.mediaElement.removeSource();
                        }

                        this.mediaElement.load();
                        this.player.removeComponent(this.mediaElement);
                    }
                },
                {
                    key: "onPlay",
                    value: function() {
                        this.player.trigger(n0.ob, this.getCurrentTime()); //play
                        this.options.get(n1.Rb) && this.guardLivePosition(); //guardLivePosition
                    }
                },
                {
                    key: "onPlaying",
                    value: function() {
                        if (this.lastEvent === n0.pb) { //seeked
                            this.player.trigger(n0.qb, this.getCurrentTime()); //waitingEnd
                        }

                        if (this.lastEvent !== n0.W) { //playing
                            this.lastEvent = n0.W; //playing
                            this.player.trigger(n0.W, this.getCurrentTime()); //playing
                        }
                        this.guardTimeShiftPosition();
                    }
                },
                {
                    key: "onTimeupdate",
                    value: function() {
                        if (!this.isLive()) {
                            return;
                        }
                        if (this.initialLatency) {
                            return;
                        }
                        if (Math.floor(this.getCurrentTime()) <= 0) {
                            return;
                        }
                        if (this.timeShift.getMode() !== n21.a.LIVE_DELAYED) {
                            this.initialLatency = this.player.getLiveLatency();
                        }
                    }
                },
                {
                    key: "onPause",
                    value: function() {
                        this.lastEvent = n0.hb; //paused
                        this.player.trigger(n0.hb, this.getCurrentTime()); //paused
                    }
                },
                {
                    key: "onWaiting",
                    value: function() {
                        this.lastEvent = n0.x; //waiting
                        this.player.trigger(n0.x, this.getCurrentTime()); //waiting
                    }
                },
                {
                    key: "onEnded",
                    value: function() {
                        this.lastEvent = n0.ab; //ended
                        this.player.trigger(n0.ab, this.getCurrentTime()); //ended
                    }
                },
                {
                    key: "onCanplay",
                    value: function() {
                        if (this.lastEvent !== n0.qb) { //waitingEnd
                            this.lastEvent = n0.qb; //waitingEnd
                            this.player.trigger(n0.qb, this.getCurrentTime()); //waitingEnd
                        }

                        this.player.trigger(n0.d); //canplay
                    }
                },
                {
                    key: "onSeeked",
                    value: function() {
                        this.player.trigger(n0.pb, this.getCurrentTime()); //seeked

                        if (!this.mediaElement.isPaused() || !this.lastEvent === n0.W) { //playing
                            this.player.trigger(n0.W, this.getCurrentTime()); //playing
                        }

                        this.lastEvent = n0.pb; //seeked
                    }
                },
                {
                    key: "onRatechange",
                    value: function() {
                        this.player.trigger(n0.c, this.getPlaybackRate()); //playbackRateChange
                    }
                },
                {
                    key: "onVolumechange",
                    value: function() {
                        this.player.trigger(n0.g, this.getVolume(), this.isMuted()); //volumeChanged
                        this.updateLocalStorage();
                    }
                },
                {
                    key: "onError",
                    value: function(originalError) {
                        var error = this.mediaElement.getVideo().error,
                            errorMessage = n7.a.PLAYBACK_ERROR, //playback.error
                            errorType = n7.a.PLAYBACK_ERROR, //playback.error
                            playbackErrorCode = ERROR_NUMBERS.a[n7.a.PLAYBACK_ERROR];

                        if (error) {
                            errorMessage = error.message;
                            switch (error.code) {
                                case 1:
                                    playbackErrorCode = ERROR_NUMBERS.a[n7.a.MEDIA_ERR_ABORTED];
                                    errorType = n7.a.MEDIA_ERR_ABORTED;
                                    break;
                                case 2:
                                    playbackErrorCode = ERROR_NUMBERS.a[n7.a.MEDIA_ERR_NETWORK];
                                    errorType = n7.a.MEDIA_ERR_NETWORK;
                                    break;
                                case 3:
                                    playbackErrorCode = ERROR_NUMBERS.a[n7.a.MEDIA_ERR_DECODE];
                                    errorType = n7.a.MEDIA_ERR_DECODE;
                                    break;
                                case 4:
                                    playbackErrorCode = ERROR_NUMBERS.a[n7.a.MEDIA_ERR_SRC_NOT_SUPPORTED];
                                    errorType = n7.a.MEDIA_ERR_SRC_NOT_SUPPORTED;
                            }
                        }

                        this.lastEvent = n0.f; //error
                        this.player.trigger(n0.f, { //error
                            code: playbackErrorCode,
                            type: errorType,
                            message: errorMessage,
                            renderer: this.mediaType,
                            originalEvent: error || originalError
                        });
                    }
                },
                {
                    key: "mediaType",
                    get: function() {
                        return this.rendererType.toUpperCase();
                    }
                }])
            return createDomPlayerWrapperSkeleton;
        }(n14.a);
        function AudioTrackDTO(track) {
            this.accessibility = track.accessibility;
            this.codecs = track.codecs;
            this.enabled = track.enabled;
            this.id = track.id;
            this.kind = track.kind;
            this.label = track.label;
            this.lang = track.lang || track.language;
            this.mimeType = track.mimeType;
            this.role = track.role;
        }
        function isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], (function() {} )));
                return !0;
            } catch (t) {
                return !1;
            }
        }
        var Html5Renderer = function(args) {
            Object(n4.a)(createHtml5RendererSkeleton, args);
            var e = createHtml5RendererSkeleton,
                currentSource,
                r = function() {
                    var t, n = Object(n4.b)(e);
                    if (isNativeReflectConstruct()) {
                        var constructor = Object(n4.b)(this).constructor;
                        t = Reflect.construct(n, arguments, constructor);
                    } else {
                        t = n.apply(this, arguments);
                    }

                    return Object(n4.c)(this, t);
                }
            function createHtml5RendererSkeleton(t, e) {
                var html5Renderer;

                Object(n5.a)(this, createHtml5RendererSkeleton);
                html5Renderer = r.call(this, t, e);
                html5Renderer.rendererType = createHtml5RendererSkeleton.id;
                html5Renderer.utcTime = new n12.a(html5Renderer.player);
                html5Renderer.utcTimeStamp = 0;
                html5Renderer.liveStart = 0;
                html5Renderer.timeShiftStart = 0;

                return html5Renderer;
            }
            Object(n5.b)(createHtml5RendererSkeleton, [
                    {
                        key: "setSource",
                        value: (currentSource = Object(n3.a)(n3.b.mark((function t(sourceUrl) {
                                    var resolveRedirects, prefetchHlsPlaylist, beforePlayTaskQueue, executeBeforePlayTasks, currentMediaType, d, scheme, h, p, g, programDateTimeFromTag, v, b;
                                    return n3.b.wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                    case 0:
                                                        resolveRedirects = this.options.get(n1.s); //resolveRedirects
                                                        prefetchHlsPlaylist = this.options.get(n1.f); //prefetchHlsPlaylist
                                                        beforePlayTaskQueue = this.player.beforePlayTaskQueue;
                                                        this.registerEvents();

                                                        if (!this.timeShift.isEnabled()) {
                                                            t.next = 8;
                                                            break;
                                                        }
                                                        t.next = 7;
                                                        return this.utcTime.sync();
                                                    case 7:
                                                        this.utcTimeStamp = t.sent;
                                                    case 8:
                                                        if (null === this.baseUrl) {
                                                            this.baseUrl = sourceUrl;
                                                        }

                                                        this.player.trigger(n0.p, sourceUrl); //source
                                                        if (!beforePlayTaskQueue.length) {
                                                            t.next = 14;
                                                            break;
                                                        }

                                                        executeBeforePlayTasks = beforePlayTaskQueue.map((function(task) {
                                                            return task();
                                                        }));
                                                        t.next = 14;
                                                        return Promise.all(executeBeforePlayTasks);
                                                    case 14:
                                                        if (this.timeShift.isEnabled()) {
                                                            sourceUrl = this.timeShift.generateUrl(sourceUrl, !0);
                                                        }

                                                        if (!resolveRedirects) {
                                                            t.next = 19;
                                                            break;
                                                        }
                                                        t.next = 18;

                                                        return n10.d.head(sourceUrl).then((function(t) {
                                                            return t.responseUrl;
                                                        })).catch((function() {
                                                            return sourceUrl;
                                                        }));
                                                    case 18:
                                                        sourceUrl = t.sent;
                                                    case 19:
                                                        currentMediaType = this.mediaItem.mediaType;

                                                        if (!prefetchHlsPlaylist || "HLS" !== currentMediaType) {
                                                            t.next = 35;
                                                            break;
                                                        }

                                                        t.prev = 21;
                                                        t.next = 24;

                                                        return n10.d.get(sourceUrl).then((function(t) {
                                                            return t.data;
                                                        }));
                                                    case 24:
                                                        d = t.sent;
                                                        scheme = d.match(/(http|https).*/) || [];
                                                        h = Object(n6.a)(scheme, 1);
                                                        p = h[0];
                                                        t.next = 28;

                                                        return n10.d.get(p).then((function(t) {
                                                            return t.data;
                                                        }));
                                                    case 28:
                                                        g = t.sent;
                                                        programDateTimeFromTag = g.match(/#EXT-X-PROGRAM-DATE-TIME:(.*)/) || [];
                                                        (v = Object(n6.a)(programDateTimeFromTag, 2))[0];
                                                        b = v[1];
                                                        this.liveStart = n13.a.parseDateTime(b);
                                                        t.next = 35;
                                                        break;
                                                    case 33:
                                                        t.prev = 33;
                                                        t.t0 = t.catch(21);
                                                    case 35:
                                                        if (!this.timeShift.params && this.isLive()) {
                                                            this.player.trigger(n0.cb); //live
                                                        }

                                                        this.playSource(sourceUrl);
                                                    case 37:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }
                                    ), t, this, [[21, 33]])
                                }
                            ))),
                                function(t) {
                                    return currentSource.apply(this, arguments);
                                }
                        )
                    },
                    {
                        key: "seek",
                        value: function(t) {
                            var e = this.getDuration() / 100 * t;
                            this.seekTo(e);
                        }
                    },
                    {
                        key: "seekTo",
                        value: function(t) {
                            this.triggerOnSeekStartEvents();

                            if (this.timeShift.getDvrWindow() > 0) {
                                t += this.timeShift.getLiveNowUTC() - this.utcTimeStamp + this.getCurrentTimeOffset();
                            }

                            this.mediaElement.seek(t);
                        }
                    },
                    {
                        key: "getCurrentTime",
                        value: function() {
                            var currentTime = this.mediaElement.getCurrentTime();

                            if (this.isLive() && !this.timeShift.isEnabled()) {
                                return currentTime + this.liveStart;
                            }
                            if (this.timeShift.getDvrWindow() > 0) {
                                if (0 === Math.floor(currentTime)) {
                                    return 0;
                                }
                                currentTime -= this.timeShift.getLiveNowUTC() - this.utcTimeStamp;
                                currentTime -= this.getCurrentTimeOffset();
                            }

                            return currentTime;
                        }
                    },
                    {
                        key: "guardTimeShiftPosition",
                        value: function() {
                            if (this.timeShift.isEnabled() && this.getCurrentTime() < 0) {
                                this.player.seekTo(this.options.get(n1.h) + this.getCurrentTimeOffset()); //guardTimeShiftSafeSeek
                            }
                        }
                    },
                    {
                        key: "getDuration",
                        value: function() {
                            if (this.timeShift.getStart() >= 0 && this.timeShift.getStop() < 0) {
                                return this.timeShift.getLiveNowUTC() - this.timeShift.getStart();
                            }

                            if (this.timeShift.getStart() >= 0 && this.timeShift.getStop() >= 0) {
                                return this.timeShift.getStop() - this.timeShift.getStart();
                            }

                            return this.mediaElement.getDuration();
                        }
                    },
                    {
                        key: "getCurrentTimeOffset",
                        value: function() {
                            return this.timeShift.getInitialDvrWindow() - this.timeShift.getDvrWindow();
                        }
                    },
                    {
                        key: "isLive",
                        value: function() {
                            return Object(n25.a)(Object(n4.b)(createHtml5RendererSkeleton.prototype), "isLive", this).call(this) || this.getDuration() === 1 / 0; // 1 / 0 == Infinity
                        }
                    },
                    {
                        key: "onLoadedmetadata",
                        value: function() {
                            var startTime,
                                domPlayerWrapper = this;

                            this.player.trigger(n0.gb, this.isLive() ? -1 : this.getDuration()); //newMedia
                            this.player.trigger(n0.fb, { //metadata
                                duration: this.getDuration()
                            });

                            if (this.isLive()) {
                                this.player.trigger(n0.cb); //live
                            }

                            if (this.timeShift.isEnabled() && this.timeShift.getDvrWindow() >= 0 && this.timeShift.getPlayStart() >= 0) {
                                startTime = this.timeShift.getPlayStart() - this.timeShift.getStart();
                            }

                            if (this.options.get(n1.Eb)) { //startTime
                                startTime = this.options.get(n1.Eb); //startTime
                                this.options.set(n1.Eb, null); //startTime
                            }

                            if (!startTime) {
                                return;
                            }

                            this.mediaElement.once(n0.W, (function() { //playing
                                domPlayerWrapper.seekTo(startTime);
                            }))
                        }
                    },
                    {
                        key: "onTimeupdate",
                        value: function() {
                            if (this.isLive() && !this.liveStart && Math.floor(this.getCurrentTime()) > 0 && this.timeShift.getMode() !== n21.a.LIVE_DELAYED) {
                                this.liveStart = this.timeShift.getLiveNowUTC() - (this.mediaElement.getCurrentTime() + 6);
                            }

                            Object(n25.a)(Object(n4.b)(createHtml5RendererSkeleton.prototype), "onTimeupdate", this).call(this);
                        }
                    },
                    {
                        key: "getProfile",
                        value: function() {
                            return "";
                        }
                    },
                    {
                        key: "onLoadeddata",
                        value: function() {
                            this.player.trigger(n0.h); //data
                            var audioTracks = this.getAudioTracks();

                            if (!audioTracks.length) {
                                return;
                            }

                            this.player.trigger(n0.eb, audioTracks); //audioTracks
                            var activeAudioTrack = this.getActiveAudioTrack();
                            this.defaultAudioLanguage = this.options.get(n1.Bb); //defaultAudioLanguage

                            if (!this.defaultAudioLanguage) {
                                this.player.trigger(n0.b, activeAudioTrack); //audioTrackChanged
                                return;
                            }

                            var audioTrack = this.getAudioTrackByLabel(this.defaultAudioLanguage);

                            if (audioTrack && activeAudioTrack !== audioTrack) {
                                this.switchAudioTrack(audioTrack);
                                return;
                            }

                            this.player.trigger(n0.b, activeAudioTrack); //audioTrackChanged
                        }
                    },
                    {
                        key: "play",
                        value: function() {
                            if (this.timeShift.isEnabled() && this.getCurrentTime() < 0) {
                                this.mediaElement.seek(0);
                                return void this.player.restart();
                            }
                            Object(n25.a)(Object(n4.b)(createHtml5RendererSkeleton.prototype), "play", this).call(this);
                        }
                    },
                    {
                        key: "switchAudioTrack",
                        value: function(audioTrack) {
                            var idOrLanguage = "object" === Object(n18.b)(audioTrack) ? audioTrack.id : audioTrack,
                                nativeAudioTracks = this.mediaElement.getNativeAudioTracks(),
                                selectedTrack = nativeAudioTracks.find((function(track) {
                                    var id = track.id,
                                        lang = track.language;
                                    return id === idOrLanguage || lang === idOrLanguage;
                                }));

                            if (!selectedTrack) {
                                return;
                            }

                            nativeAudioTracks.forEach((function(track) {
                                track.enabled = track === selectedTrack;
                            }));
                            this.player.trigger(n0.b, this.createAudioTrackDTO(selectedTrack)); //audioTrackChanged
                        }
                    },
                    {
                        key: "getAudioTrackByLabel",
                        value: function(label) {
                            return this.getAudioTracks().find((function(track) {
                                return track.label === label;
                            }))
                        }
                    },
                    {
                        key: "getActiveAudioTrack",
                        value: function() {
                            return this.getAudioTracks().find((function(track) {
                                return track.enabled;
                            }))
                        }
                    },
                    {
                        key: "getCurrentAudioTrack",
                        value: function() {
                            return this.getActiveAudioTrack();
                        }
                    },
                    {
                        key: "getAudioTracks",
                        value: function() {
                            var domPlayerWrapper = this;
                            return this.mediaElement.getNativeAudioTracks().map((function(track) {
                                return domPlayerWrapper.createAudioTrackDTO(track);
                            }))
                        }
                    },
                    {
                        key: "getTextTracks",
                        value: function() {
                            return Object(n8.a)(this.mediaElement.getNativeTextTracks()).filter((function(textTrack) {
                                var id = textTrack.id,
                                    lang = textTrack.language,
                                    label = textTrack.label;
                                return id || lang || label;
                            }))
                        }
                    },
                    {
                        key: "createAudioTrackDTO",
                        value: function(track) {
                            return new AudioTrackDTO(track);
                        }
                    }],
                [{
                    key: "canPlayType",
                    value: function(mediaResourceTypeName) {
                        return document.createElement("video").canPlayType(mediaResourceTypeName);
                    }
                }]);

            return createHtml5RendererSkeleton;
        }(domPlayerWrapper);
        Html5Renderer.id = "html5";
        Html5Renderer.priority = 200;
        Html5Renderer.mediaTypes = {
            MP4: "video/mp4",
            HLS: "application/x-mpegURL",
            AAC: "audio/mp4",
            MP3: "audio/mpeg",
            MOV: "video/mp4; codecs='avc1.42E01E, mp4a.40.2'",
            WEBM: "video/webm",
            OGG: "video/ogg"
        };
        var HlsjsConstants = {
            ID: "hlsjs",
            OPTION_NAME: "hlsjs",
            PRIORITY: 100,
            SUPPORTED_MEDIA_TYPES: {
                HLS: "application/x-mpegURL"
            }
        };
    },
    function(module, e) { /*** index 23 ***/
    module.exports = function(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    };
        module.exports.__esModule = !0;
        module.exports.default = module.exports;
    },
    function(module, e) { /*** index 24 ***/
    function _defineProperties(target, props) {
        for (let i = 0; i < props.length; i++) {
            var keyValue = props[i];

            keyValue.enumerable = keyValue.enumerable || !1;
            keyValue.configurable = !0;

            if ("value" in keyValue) {
                keyValue.writable = !0;
            }

            Object.defineProperty(target, keyValue.key, keyValue);
        }
    }
        module.exports = function(Constructor, prototypeProps, staticProps) {
            if (prototypeProps) {
                _defineProperties(Constructor.prototype, prototypeProps);
            }
            if (staticProps) {
                _defineProperties(Constructor, staticProps);
            }
            Object.defineProperty(Constructor, "prototype", {
                writable: !1
            });

            return Constructor;
        };
        module.exports.__esModule = !0;
        module.exports.default = module.exports;
    },
    function(t, e, n) { /*** index 25 ***/
    "use strict";
        n.d(e, "a", (function() {
            return o;
        }));

        var n15 = n(15),
            n4 = n(4);

        var a = function(t, propertyName) {
                while (!Object.prototype.hasOwnProperty.call(t, propertyName) && null !== (t = Object(n4.e)(t)));

                return t;
            },
            o = Object(n15.a)((function(module) {
                    function e(n, r, i) {
                        if ("undefined" != typeof Reflect && Reflect.get) {
                            module.exports = e = Reflect.get;
                        } else {
                            module.exports = e = function(t, propertyName, n) {
                                var originalObject = a(t, propertyName);
                                if (originalObject) {
                                    var ownPropertyDescriptor = Object.getOwnPropertyDescriptor(originalObject, propertyName);
                                    return ownPropertyDescriptor.get ? ownPropertyDescriptor.get.call(n) : ownPropertyDescriptor.value;
                                }
                            };
                        }

                        return e(n, r, i || n);
                    }

                    module.exports = e;
                }
            ))
    },
    , ///*** index 26 left empty ***/
    function(module, e) { /*** index 27 ***/
    function n(e) {
        module.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        };
        module.exports.__esModule = !0;
        module.exports.default = module.exports;

        return n(e);
    }
        module.exports = n;
        module.exports.__esModule = !0;
        module.exports.default = module.exports;
    },
    function(t, e, n) { /*** index 28 ***/
        /*! codem-isoboxer v0.3.7 https://github.com/madebyhiro/codem-isoboxer/blob/master/LICENSE.txt */
        var ISOBoxer = {
            parseBuffer: function(arrayBuffer) {
                return new ISOFile(arrayBuffer).parse();
            },
            addBoxProcessor: function(type, parser) {
                if ("string" == typeof type && "function" == typeof parser) {
                    ISOBox.prototype._boxProcessors[type] = parser;
                }
            },
            createFile: function() {
                return new ISOFile;
            },
            createBox: function(type, parent, pos) {
                var box = ISOBox.create(type);

                if (parent) {
                    parent.append(box, pos);
                }

                return box;
            },
            createFullBox: function(type, parent, pos) {
                var box = ISOBoxer.createBox(type, parent, pos);
                box.version = 0;
                box.flags = 0;

                return box;
            },
            Utils: {}
        };
        ISOBoxer.Utils.dataViewToString = function(dataView, encoding) {
            var impliedEncoding = encoding || "utf-8";
            if ("undefined" != typeof TextDecoder) {
                return new TextDecoder(impliedEncoding).decode(dataView);
            }
            var result = [],
                i = 0;

            if ("utf-8" !== impliedEncoding) {
                while (i < dataView.byteLength) {
                    result.push(String.fromCharCode(dataView.getUint8(i++)));
                }
                return result.join("");
            }

            /* The following algorithm is essentially a rewrite of the UTF8.decode at
            http://bannister.us/weblog/2007/simple-base64-encodedecode-javascript/
            */
            while (i < dataView.byteLength) {
                var c = dataView.getUint8(i++);

                if (c < 128) { // 1-byte character (7 bits)
                    result.push(String.fromCharCode(c));
                    continue;
                }

                if (c < 224) { // 2-byte character (11 bits)
                    c = (31 & c) << 6;
                    c |= 63 & dataView.getUint8(i++);
                } else if (c < 240) { // 3-byte character (16 bits)
                    c = (15 & c) << 12;
                    c |= (63 & dataView.getUint8(i++)) << 6;
                    c |= 63 & dataView.getUint8(i++);
                } else { // 4-byte character (21 bits)
                    c = (7 & c) << 18;
                    c |= (63 & dataView.getUint8(i++)) << 12;
                    c |= (63 & dataView.getUint8(i++)) << 6;
                    c |= 63 & dataView.getUint8(i++);
                }

                result.push(String.fromCharCode(c));
            }

            return result.join("");
        };
        ISOBoxer.Utils.utf8ToByteArray = function(utf8String) {
            var result;
            if ("undefined" != typeof TextEncoder) {
                return (new TextEncoder).encode(utf8String);
            }

            result = [];

            for (let i = 0; i < utf8String.length; ++i) {
                var currentCharCode = utf8String.charCodeAt(i);

                if (currentCharCode < 128) {
                    result.push(currentCharCode);
                } else if (currentCharCode < 2048) {
                    result.push(192 | currentCharCode >> 6);
                    result.push(128 | 63 & currentCharCode);
                } else if (currentCharCode < 65536) {
                    result.push(224 | currentCharCode >> 12);
                    result.push(128 | 63 & currentCharCode >> 6);
                    result.push(128 | 63 & currentCharCode);
                } else {
                    result.push(240 | currentCharCode >> 18);
                    result.push(128 | 63 & currentCharCode >> 12);
                    result.push(128 | 63 & currentCharCode >> 6);
                    result.push(128 | 63 & currentCharCode);
                }
            }

            return result;
        };
        ISOBoxer.Utils.appendBox = function(parent, box, pos) {
            box._offset = parent._cursor.offset;
            box._root = parent._root ? parent._root : parent;
            box._raw = parent._raw;
            box._parent = parent;

            if (-1 === pos) {
                return;
            }

            if (pos == null) {
                parent.boxes.push(box);
                return;
            }

            var type, index = -1;

            if ("number" == typeof pos) {
                index = pos;
                parent.boxes.splice(index, 0, box);
                return;
            }

            if ("string" == typeof pos)
                type = pos;
            else if ("object" != typeof pos || !pos.type) {
                return void parent.boxes.push(box);
            } else {
                type = pos.type;
            }

            for (let i = 0; i < parent.boxes.length; i++) {
                if (type === parent.boxes[i].type) {
                    index = i + 1;
                    break;
                }
            }

            parent.boxes.splice(index, 0, box);
        };
        e.parseBuffer = ISOBoxer.parseBuffer;
        e.addBoxProcessor = ISOBoxer.addBoxProcessor;
        e.createFile = ISOBoxer.createFile;
        e.createBox = ISOBoxer.createBox;
        e.createFullBox = ISOBoxer.createFullBox;
        e.Utils = ISOBoxer.Utils;
        ISOBoxer.Cursor = function(initialOffset) {
            this.offset = void 0 === initialOffset ? 0 : initialOffset;
        };

        var ISOFile = function(arrayBuffer) {
            this._cursor = new ISOBoxer.Cursor;
            this.boxes = [];

            if (arrayBuffer) {
                this._raw = new DataView(arrayBuffer);
            }
        };
        ISOFile.prototype.fetch = function(type) {
            var result = this.fetchAll(type, !0);

            return result.length ? result[0] : null;
        };
        ISOFile.prototype.fetchAll = function(type, returnEarly) {
            var result = [];
            ISOFile._sweep.call(this, type, result, returnEarly);

            return result;
        };
        ISOFile.prototype.parse = function() {
            this._cursor.offset = 0;
            this.boxes = [];

            while (this._cursor.offset < this._raw.byteLength) {
                var isoBox = ISOBox.parse(this);

                // Box could not be parsed
                if (void 0 === isoBox.type) {
                    break;
                }

                this.boxes.push(isoBox);
            }

            return this;
        };
        ISOFile._sweep = function(type, result, returnEarly) {
            for (var r in this.type && this.type == type && result.push(this), this.boxes) {
                if (result.length && returnEarly) {
                    return;
                }
                ISOFile._sweep.call(this.boxes[r], type, result, returnEarly);
            }
        };
        ISOFile.prototype.write = function() {
            var length = 0;
            for (let i = 0; i < this.boxes.length; i++) {
                length += this.boxes[i].getLength(!1);
            }

            var uint8Array = new Uint8Array(length);
            this._rawo = new DataView(uint8Array.buffer);
            this.bytes = uint8Array;
            this._cursor.offset = 0;

            for (let i = 0; i < this.boxes.length; i++) {
                this.boxes[i].write();
            }

            return uint8Array.buffer;
        };
        ISOFile.prototype.append = function(box, pos) {
            ISOBoxer.Utils.appendBox(this, box, pos);
        };

        var ISOBox = function() {
            this._cursor = new ISOBoxer.Cursor;
        };
        ISOBox.parse = function(parent) {
            var newBox = new ISOBox;

            newBox._offset = parent._cursor.offset;
            newBox._root = parent._root ? parent._root : parent;
            newBox._raw = parent._raw;
            newBox._parent = parent;
            newBox._parseBox();
            parent._cursor.offset = newBox._raw.byteOffset + newBox._raw.byteLength;

            return newBox;
        };
        ISOBox.create = function(type) {
            var newBox = new ISOBox;
            newBox.type = type;
            newBox.boxes = [];

            return newBox;
        };
        ISOBox.prototype._boxContainers = ["dinf", "edts", "mdia", "meco", "mfra", "minf", "moof", "moov", "mvex", "stbl", "strk", "traf", "trak", "tref", "udta", "vttc", "sinf", "schi", "encv", "enca"];
        ISOBox.prototype._boxProcessors = {};

        ///////////////////////////////////////////////////////////////////////////////////////////////////
        // Generic read/write functions
        ISOBox.prototype._procField = function(name, type, size) {
            this._parsing ? this[name] = this._readField(type, size) : this._writeField(type, size, this[name]);
        };
        ISOBox.prototype._procFieldArray = function(name, length, type, size) {
            if (this._parsing) {
                this[name] = [];
                for (let i = 0; i < length; i++) {
                    this[name][i] = this._readField(type, size);
                }
                return;
            }

            for (let i = 0; i < this[name].length; i++) {
                this._writeField(type, size, this[name][i]);
            }
        };
        ISOBox.prototype._procFullBox = function() {
            this._procField("version", "uint", 8);
            this._procField("flags", "uint", 24);
        };
        ISOBox.prototype._procEntries = function(name, length, fn) {
            if (!this._parsing) {
                for (let i = 0; i < length; i++) {
                    fn.call(this, this[name][i]);
                }
                return;
            }

            this[name] = [];
            for (let i = 0; i < length; i++) {
                this[name].push({});
                fn.call(this, this[name][i]);
            }
        };
        ISOBox.prototype._procSubEntries = function(entry, name, length, fn) {
            if (!this._parsing) {
                for (let i = 0; i < length; i++) {
                    fn.call(this, entry[name][i]);
                }
                return;
            }

            entry[name] = [];
            for (let i = 0; i < length; i++) {
                entry[name].push({});
                fn.call(this, entry[name][i]);
            }
        };
        ISOBox.prototype._procEntryField = function(entry, name, type, size) {
            if (this._parsing) {
                entry[name] = this._readField(type, size);
                return;
            }

            this._writeField(type, size, entry[name]);
        };
        ISOBox.prototype._procSubBoxes = function(name, length) {
            if (this._parsing) {
                this[name] = [];
                for (let i = 0; i < length; i++) {
                    this[name].push(ISOBox.parse(this));
                }
                return;
            }

            for (let i = 0; i < length; i++) {
                if (this._rawo) {
                    this[name][i].write();
                    continue;
                }

                this.size += this[name][i].getLength();
            }
        };

        ///////////////////////////////////////////////////////////////////////////////////////////////////
        // Read/parse functions

        ISOBox.prototype._readField = function(type, size) {
            switch (type) {
                case "uint":
                    return this._readUint(size);
                case "int":
                    return this._readInt(size);
                case "template":
                    return this._readTemplate(size);
                case "string":
                    return -1 === size ? this._readTerminatedString() : this._readString(size);
                case "data":
                    return this._readData(size);
                case "utf8":
                    return this._readUTF8String();
                default:
                    return -1;
            }
        };
        ISOBox.prototype._readInt = function(size) {
            var result = null,
                offset = this._cursor.offset - this._raw.byteOffset;
            switch (size) {
                case 8:
                    result = this._raw.getInt8(offset);
                    break;
                case 16:
                    result = this._raw.getInt16(offset);
                    break;
                case 32:
                    result = this._raw.getInt32(offset);
                    break;
                case 64:
                    // Warning: JavaScript cannot handle 64-bit integers natively.
                    // This will give unexpected results for integers >= 2^53
                    var r = this._raw.getInt32(offset),
                        i = this._raw.getInt32(offset + 4);

                    result = r * Math.pow(2, 32) + i;
            }

            this._cursor.offset += size >> 3;
            return result;
        };
        ISOBox.prototype._readUint = function(size) {
            var s1, s2,
                result = null,
                offset = this._cursor.offset - this._raw.byteOffset;

            switch (size) {
                case 8:
                    result = this._raw.getUint8(offset);
                    break;
                case 16:
                    result = this._raw.getUint16(offset);
                    break;
                case 24:
                    s1 = this._raw.getUint16(offset);
                    s2 = this._raw.getUint8(offset + 2);
                    result = (s1 << 8) + s2;
                    break;
                case 32:
                    result = this._raw.getUint32(offset);
                    break;
                case 64:
                    // Warning: JavaScript cannot handle 64-bit integers natively.
                    // This will give unexpected results for integers >= 2^53
                    s1 = this._raw.getUint32(offset);
                    s2 = this._raw.getUint32(offset + 4);
                    result = s1 * Math.pow(2, 32) + s2;
            }

            this._cursor.offset += size >> 3;
            return result;
        };
        ISOBox.prototype._readString = function(length) {
            var result = "";
            for (let i = 0; i < length; i++) {
                var currentCharCode = this._readUint(8);

                result += String.fromCharCode(currentCharCode);
            }

            return result;
        };
        ISOBox.prototype._readTemplate = function(size) {
            return this._readUint(size / 2) + this._readUint(size / 2) / Math.pow(2, size / 2);
        };
        ISOBox.prototype._readTerminatedString = function() {
            var result = "";
            while (this._cursor.offset - this._offset < this._raw.byteLength) {
                var currentCharCode = this._readUint(8);
                if (0 === currentCharCode) {
                    break;
                }
                result += String.fromCharCode(currentCharCode);
            }

            return result;
        };
        ISOBox.prototype._readData = function(size) {
            var e = size > 0 ? size : this._raw.byteLength - (this._cursor.offset - this._offset);

            if (e <= 0) {
                return null;
            }

            var data = new Uint8Array(this._raw.buffer, this._cursor.offset, e);
            this._cursor.offset += e;

            return data;
        };
        ISOBox.prototype._readUTF8String = function() {
            var length = this._raw.byteLength - (this._cursor.offset - this._offset),
                data = null;

            if (length > 0) {
                data = new DataView(this._raw.buffer, this._cursor.offset, length);
                this._cursor.offset += length;
            }

            return data ? ISOBoxer.Utils.dataViewToString(data) : data;
        };
        ISOBox.prototype._parseBox = function() {
            this._parsing = !0;
            this._cursor.offset = this._offset;

            // return immediately if there are not enough bytes to read the header
            if (this._offset + 8 > this._raw.buffer.byteLength) {
                this._root._incomplete = !0;
                return;
            }

            this._procField("size", "uint", 32);
            this._procField("type", "string", 4);

            if (1 === this.size) {
                this._procField("largesize", "uint", 64);
            }
            if ("uuid" === this.type) {
                this._procFieldArray("usertype", 16, "uint", 8);
            }

            switch (this.size) {
                case 0:
                    this._raw = new DataView(this._raw.buffer, this._offset, this._raw.byteLength - this._cursor.offset + 8);
                    break;
                case 1:
                    if (this._offset + this.size > this._raw.buffer.byteLength) {
                        this._incomplete = !0;
                        this._root._incomplete = !0;
                        break;
                    }
                    this._raw = new DataView(this._raw.buffer, this._offset, this.largesize);
                    break;
                default:
                    if (this._offset + this.size > this._raw.buffer.byteLength) {
                        this._incomplete = !0;
                        this._root._incomplete = !0;
                        break;
                    }
                    this._raw = new DataView(this._raw.buffer, this._offset, this.size);
            }

            if (!this._incomplete) {
                this._boxProcessors[this.type] && this._boxProcessors[this.type].call(this);
            }

            if (-1 !== this._boxContainers.indexOf(this.type)) {
                this._parseContainerBox();
                return;
            }

            this._data = this._readData();
        };
        ISOBox.prototype._parseFullBox = function() {
            this.version = this._readUint(8);
            this.flags = this._readUint(24);
        };
        ISOBox.prototype._parseContainerBox = function() {
            this.boxes = [];
            while (this._cursor.offset - this._raw.byteOffset < this._raw.byteLength) {
                this.boxes.push(ISOBox.parse(this));
            }
        };

        ///////////////////////////////////////////////////////////////////////////////////////////////////
        // Write functions

        ISOBox.prototype.append = function(box, pos) {
            ISOBoxer.Utils.appendBox(this, box, pos);
        };
        ISOBox.prototype.getLength = function() {
            this._parsing = !1;
            this._rawo = null;
            this.size = 0;
            this._procField("size", "uint", 32);
            this._procField("type", "string", 4);

            if (1 === this.size) {
                this._procField("largesize", "uint", 64);
            }

            if ("uuid" === this.type) {
                this._procFieldArray("usertype", 16, "uint", 8);
            }

            if (this._boxProcessors[this.type]) {
                this._boxProcessors[this.type].call(this);
            }

            if (-1 !== this._boxContainers.indexOf(this.type)) {
                for (let i = 0; i < this.boxes.length; i++) {
                    this.size += this.boxes[i].getLength();
                }
            }

            if (this._data) {
                this._writeData(this._data);
            }

            return this.size;
        };
        ISOBox.prototype.write = function() {
            this._parsing = !1;
            this._cursor.offset = this._parent._cursor.offset;

            switch (this.size) {
                case 0:
                    this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, this.parent._rawo.byteLength - this._cursor.offset);
                    break;
                case 1:
                    this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, this.largesize);
                    break;
                default:
                    this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, this.size);
            }
            this._procField("size", "uint", 32);
            this._procField("type", "string", 4);

            if (1 === this.size) {
                this._procField("largesize", "uint", 64);
            }

            if ("uuid" === this.type) {
                this._procFieldArray("usertype", 16, "uint", 8);
            }

            if (this._boxProcessors[this.type]) {
                this._boxProcessors[this.type].call(this);
            }

            if (-1 !== this._boxContainers.indexOf(this.type)) {
                for (let i = 0; i < this.boxes.length; i++) {
                    this.boxes[i].write();
                }
            }

            if (this._data) {
                this._writeData(this._data);
            }

            this._parent._cursor.offset += this.size;

            return this.size;
        };
        ISOBox.prototype._writeInt = function(size, value) {
            if (!this._rawo) {
                this.size += size >> 3;
                return;
            }

            var byteOffset = this._cursor.offset - this._rawo.byteOffset;
            switch (size) {
                case 8:
                    this._rawo.setInt8(byteOffset, value);
                    break;
                case 16:
                    this._rawo.setInt16(byteOffset, value);
                    break;
                case 32:
                    this._rawo.setInt32(byteOffset, value);
                    break;
                case 64:
                    // Warning: JavaScript cannot handle 64-bit integers natively.
                    // This will give unexpected results for integers >= 2^53
                    var s1 = Math.floor(value / Math.pow(2, 32)),
                        s2 = value - s1 * Math.pow(2, 32);

                    this._rawo.setUint32(byteOffset, s1);
                    this._rawo.setUint32(byteOffset + 4, s2);
            }

            this._cursor.offset += size >> 3;
        };
        ISOBox.prototype._writeUint = function(size, value) {
            if (!this._rawo) {
                this.size += size >> 3;
                return;
            }

            var s1, s2,
                byteOffset = this._cursor.offset - this._rawo.byteOffset;

            switch (size) {
                case 8:
                    this._rawo.setUint8(byteOffset, value);
                    break;
                case 16:
                    this._rawo.setUint16(byteOffset, value);
                    break;
                case 24:
                    s1 = (0xFFFF00 & value) >> 8;
                    s2 = 0x0000FF & value;
                    this._rawo.setUint16(byteOffset, s1);
                    this._rawo.setUint8(byteOffset + 2, s2);
                    break;
                case 32:
                    this._rawo.setUint32(byteOffset, value);
                    break;
                case 64:
                    // Warning: JavaScript cannot handle 64-bit integers natively.
                    // This will give unexpected results for integers >= 2^53
                    s1 = Math.floor(value / Math.pow(2, 32));
                    s2 = value - (s1 * Math.pow(2, 32));
                    this._rawo.setUint32(byteOffset, s1);
                    this._rawo.setUint32(byteOffset + 4, s2);
            }

            this._cursor.offset += size >> 3;
        };
        ISOBox.prototype._writeString = function(size, str) {
            for (let i = 0; i < size; i++) {
                this._writeUint(8, str.charCodeAt(i));
            }
        };
        ISOBox.prototype._writeTerminatedString = function(t) {
            if (0 === t.length) {
                return;
            }

            for (let i = 0; i < t.length; i++) {
                this._writeUint(8, t.charCodeAt(i));
            }
            this._writeUint(8, 0);
        };
        ISOBox.prototype._writeTemplate = function(size, value) {
            var pre = Math.floor(value),
                post = (value - pre) * Math.pow(2, size / 2);

            this._writeUint(size / 2, pre);
            this._writeUint(size / 2, post);
        };
        ISOBox.prototype._writeData = function(data) {
            if (!data) {
                return;
            }

            if (!this._rawo) {
                this.size += data.length;
                return;
            }

            if (data instanceof Array) {
                var e = this._cursor.offset - this._rawo.byteOffset;

                for (let i = 0; i < data.length; i++) {
                    this._rawo.setInt8(e + i, data[i]);
                }
                this._cursor.offset += data.length;
            }
            if (!(data instanceof Uint8Array)) {
                return;
            }

            this._root.bytes.set(data, this._cursor.offset);
            this._cursor.offset += data.length;
        };
        ISOBox.prototype._writeUTF8String = function(string) {
            var byteArray = ISOBoxer.Utils.utf8ToByteArray(string);
            if (!this._rawo) {
                this.size += byteArray.length;
                return;
            }
            var dataView = new DataView(this._rawo.buffer, this._cursor.offset, byteArray.length);

            for (let i = 0; i < byteArray.length; i++) {
                dataView.setUint8(i, byteArray[i]);
            }
        };
        ISOBox.prototype._writeField = function(type, size, value) {
            switch (type) {
                case "uint":
                    this._writeUint(size, value);
                    break;
                case "int":
                    this._writeInt(size, value);
                    break;
                case "template":
                    this._writeTemplate(size, value);
                    break;
                case "string":
                    if (-1 == size) {
                        this._writeTerminatedString(value);
                    } else {
                        this._writeString(size, value);
                    }
                    break;
                case "data":
                    this._writeData(value);
                    break;
                case "utf8":
                    this._writeUTF8String(value)
            }
        };
        ISOBox.prototype._boxProcessors.avc1 = ISOBox.prototype._boxProcessors.avc2 = ISOBox.prototype._boxProcessors.avc3 = ISOBox.prototype._boxProcessors.avc4 = ISOBox.prototype._boxProcessors.hvc1 = ISOBox.prototype._boxProcessors.hev1 = ISOBox.prototype._boxProcessors.encv = function() {
            // SampleEntry fields
            this._procFieldArray("reserved1", 6, "uint", 8);
            this._procField("data_reference_index", "uint", 16);
            // VisualSampleEntry fields
            this._procField("pre_defined1", "uint", 16);
            this._procField("reserved2", "uint", 16);
            this._procFieldArray("pre_defined2", 3, "uint", 32);
            this._procField("width", "uint", 16);
            this._procField("height", "uint", 16);
            this._procField("horizresolution", "template", 32);
            this._procField("vertresolution", "template", 32);
            this._procField("reserved3", "uint", 32);
            this._procField("frame_count", "uint", 16);
            this._procFieldArray("compressorname", 32, "uint", 8);
            this._procField("depth", "uint", 16);
            this._procField("pre_defined3", "int", 16);
            // Codec-specific fields
            this._procField("config", "data", -1);
        };
        ISOBox.prototype._boxProcessors.dref = function() {
            this._procFullBox();
            this._procField("entry_count", "uint", 32);
            this._procSubBoxes("entries", this.entry_count);
        };
        ISOBox.prototype._boxProcessors.elst = function() {
            this._procFullBox();
            this._procField("entry_count", "uint", 32);
            this._procEntries("entries", this.entry_count, (function(t) {
                this._procEntryField(t, "segment_duration", "uint", 1 === this.version ? 64 : 32);
                this._procEntryField(t, "media_time", "int", 1 === this.version ? 64 : 32);
                this._procEntryField(t, "media_rate_integer", "int", 16);
                this._procEntryField(t, "media_rate_fraction", "int", 16);
            }))
        };
        ISOBox.prototype._boxProcessors.emsg = function() {
            this._procFullBox();

            if (1 === this.version) {
                this._procField("timescale", "uint", 32);
                this._procField("presentation_time", "uint", 64);
                this._procField("event_duration", "uint", 32);
                this._procField("id", "uint", 32);
                this._procField("scheme_id_uri", "string", -1);
                this._procField("value", "string", -1);
            } else {
                this._procField("timescale", "uint", 32);
                this._procField("presentation_time_delta", "uint", 32);
                this._procField("event_duration", "uint", 32);
                this._procField("id", "uint", 32);
                this._procField("scheme_id_uri", "string", -1);
                this._procField("value", "string", -1);
            }

            this._procField("message_data", "data", -1);
        };
        ISOBox.prototype._boxProcessors.free = ISOBox.prototype._boxProcessors.skip = function() {
            this._procField("data", "data", -1);
        };
        ISOBox.prototype._boxProcessors.frma = function() {
            this._procField("data_format", "uint", 32);
        };
        ISOBox.prototype._boxProcessors.ftyp = ISOBox.prototype._boxProcessors.styp = function() {
            this._procField("major_brand", "string", 4);
            this._procField("minor_version", "uint", 32);
            var nbCompatibleBrands = -1;
            if (this._parsing) {
                nbCompatibleBrands = (this._raw.byteLength - (this._cursor.offset - this._raw.byteOffset)) / 4;
            }

            this._procFieldArray("compatible_brands", nbCompatibleBrands, "string", 4);
        };
        ISOBox.prototype._boxProcessors.hdlr = function() {
            this._procFullBox();
            this._procField("pre_defined", "uint", 32);
            this._procField("handler_type", "string", 4);
            this._procFieldArray("reserved", 3, "uint", 32);
            this._procField("name", "string", -1);
        };
        ISOBox.prototype._boxProcessors.mdat = function() {
            this._procField("data", "data", -1);
        };
        ISOBox.prototype._boxProcessors.mdhd = function() {
            this._procFullBox();
            this._procField("creation_time", "uint", 1 == this.version ? 64 : 32);
            this._procField("modification_time", "uint", 1 == this.version ? 64 : 32);
            this._procField("timescale", "uint", 32);
            this._procField("duration", "uint", 1 == this.version ? 64 : 32);

            if (!this._parsing && "string" == typeof this.language) {
                this.language = this.language.charCodeAt(0) - 96 << 10 | this.language.charCodeAt(1) - 96 << 5 | this.language.charCodeAt(2) - 96;
            }

            this._procField("language", "uint", 16);

            if (this._parsing) {
                this.language = String.fromCharCode(96 + (this.language >> 10 & 31), 96 + (this.language >> 5 & 31), 96 + (31 & this.language));
            }

            this._procField("pre_defined", "uint", 16);
        };
        ISOBox.prototype._boxProcessors.mehd = function() {
            this._procFullBox();
            this._procField("fragment_duration", "uint", 1 == this.version ? 64 : 32);
        };
        ISOBox.prototype._boxProcessors.mfhd = function() {
            this._procFullBox();
            this._procField("sequence_number", "uint", 32);
        };
        ISOBox.prototype._boxProcessors.mfro = function() {
            this._procFullBox();
            this._procField("mfra_size", "uint", 32);
        };
        ISOBox.prototype._boxProcessors.mp4a = ISOBox.prototype._boxProcessors.enca = function() {
            this._procFieldArray("reserved1", 6, "uint", 8);
            this._procField("data_reference_index", "uint", 16);
            this._procFieldArray("reserved2", 2, "uint", 32);
            this._procField("channelcount", "uint", 16);
            this._procField("samplesize", "uint", 16);
            this._procField("pre_defined", "uint", 16);
            this._procField("reserved3", "uint", 16);
            this._procField("samplerate", "template", 32);
            this._procField("esds", "data", -1);
        };
        ISOBox.prototype._boxProcessors.mvhd = function() {
            this._procFullBox();
            this._procField("creation_time", "uint", 1 == this.version ? 64 : 32);
            this._procField("modification_time", "uint", 1 == this.version ? 64 : 32);
            this._procField("timescale", "uint", 32);
            this._procField("duration", "uint", 1 == this.version ? 64 : 32);
            this._procField("rate", "template", 32);
            this._procField("volume", "template", 16);
            this._procField("reserved1", "uint", 16);
            this._procFieldArray("reserved2", 2, "uint", 32);
            this._procFieldArray("matrix", 9, "template", 32);
            this._procFieldArray("pre_defined", 6, "uint", 32);
            this._procField("next_track_ID", "uint", 32);
        };
        ISOBox.prototype._boxProcessors.payl = function() {
            this._procField("cue_text", "utf8");
        };
        ISOBox.prototype._boxProcessors.pssh = function() {
            this._procFullBox();
            this._procFieldArray("SystemID", 16, "uint", 8);
            this._procField("DataSize", "uint", 32);
            this._procFieldArray("Data", this.DataSize, "uint", 8);
        };
        ISOBox.prototype._boxProcessors.schm = function() {
            this._procFullBox();
            this._procField("scheme_type", "uint", 32);
            this._procField("scheme_version", "uint", 32);
            1 & this.flags && this._procField("scheme_uri", "string", -1);
        };
        ISOBox.prototype._boxProcessors.sdtp = function() {
            this._procFullBox();
            var sampleCount = -1;

            if (this._parsing) {
                sampleCount = this._raw.byteLength - (this._cursor.offset - this._raw.byteOffset);
            }

            this._procFieldArray("sample_dependency_table", sampleCount, "uint", 8);
        };
        ISOBox.prototype._boxProcessors.sidx = function() {
            this._procFullBox();
            this._procField("reference_ID", "uint", 32);
            this._procField("timescale", "uint", 32);
            this._procField("earliest_presentation_time", "uint", 1 == this.version ? 64 : 32);
            this._procField("first_offset", "uint", 1 == this.version ? 64 : 32);
            this._procField("reserved", "uint", 16);
            this._procField("reference_count", "uint", 16);
            this._procEntries("references", this.reference_count, (function(t) {
                if (!this._parsing) {
                    t.reference = (1 & t.reference_type) << 31;
                    t.reference |= 2147483647 & t.referenced_size;
                    t.sap = (1 & t.starts_with_SAP) << 31;
                    t.sap |= (3 & t.SAP_type) << 28;
                    t.sap |= 268435455 & t.SAP_delta_time;
                }

                this._procEntryField(t, "reference", "uint", 32);
                this._procEntryField(t, "subsegment_duration", "uint", 32);
                this._procEntryField(t, "sap", "uint", 32);

                if (!this._parsing) {
                    return;
                }

                t.reference_type = t.reference >> 31 & 1;
                t.referenced_size = 2147483647 & t.reference;
                t.starts_with_SAP = t.sap >> 31 & 1;
                t.SAP_type = t.sap >> 28 & 7;
                t.SAP_delta_time = 268435455 & t.sap;
            }));
        };
        ISOBox.prototype._boxProcessors.smhd = function() {
            this._procFullBox();
            this._procField("balance", "uint", 16);
            this._procField("reserved", "uint", 16);
        };
        ISOBox.prototype._boxProcessors.ssix = function() {
            this._procFullBox();
            this._procField("subsegment_count", "uint", 32);
            this._procEntries("subsegments", this.subsegment_count, (function(t) {
                this._procEntryField(t, "ranges_count", "uint", 32);
                this._procSubEntries(t, "ranges", t.ranges_count, (function(t) {
                    this._procEntryField(t, "level", "uint", 8);
                    this._procEntryField(t, "range_size", "uint", 24);
                }))
            }))
        };
        ISOBox.prototype._boxProcessors.stsd = function() {
            this._procFullBox();
            this._procField("entry_count", "uint", 32);
            this._procSubBoxes("entries", this.entry_count);
        };
        ISOBox.prototype._boxProcessors.subs = function() {
            this._procFullBox();
            this._procField("entry_count", "uint", 32);
            this._procEntries("entries", this.entry_count, (function(t) {
                this._procEntryField(t, "sample_delta", "uint", 32);
                this._procEntryField(t, "subsample_count", "uint", 16);
                this._procSubEntries(t, "subsamples", t.subsample_count, (function(t) {
                    this._procEntryField(t, "subsample_size", "uint", 1 === this.version ? 32 : 16);
                    this._procEntryField(t, "subsample_priority", "uint", 8);
                    this._procEntryField(t, "discardable", "uint", 8);
                    this._procEntryField(t, "codec_specific_parameters", "uint", 32);
                }))
            }))
        };
        ISOBox.prototype._boxProcessors.tenc = function() {
            this._procFullBox();
            this._procField("default_IsEncrypted", "uint", 24);
            this._procField("default_IV_size", "uint", 8);
            this._procFieldArray("default_KID", 16, "uint", 8);
        };
        ISOBox.prototype._boxProcessors.tfdt = function() {
            this._procFullBox();
            this._procField("baseMediaDecodeTime", "uint", 1 == this.version ? 64 : 32);
        };
        ISOBox.prototype._boxProcessors.tfhd = function() {
            this._procFullBox();
            this._procField("track_ID", "uint", 32);
            1 & this.flags && this._procField("base_data_offset", "uint", 64);
            2 & this.flags && this._procField("sample_description_offset", "uint", 32);
            8 & this.flags && this._procField("default_sample_duration", "uint", 32);
            16 & this.flags && this._procField("default_sample_size", "uint", 32);
            32 & this.flags && this._procField("default_sample_flags", "uint", 32);
        };
        ISOBox.prototype._boxProcessors.tfra = function() {
            this._procFullBox();
            this._procField("track_ID", "uint", 32);

            if (!this._parsing) {
                this.reserved = 0;
                this.reserved |= (48 & this.length_size_of_traf_num) << 4;
                this.reserved |= (12 & this.length_size_of_trun_num) << 2;
                this.reserved |= 3 & this.length_size_of_sample_num;
            }
            this._procField("reserved", "uint", 32);

            if (this._parsing) {
                this.length_size_of_traf_num = (48 & this.reserved) >> 4;
                this.length_size_of_trun_num = (12 & this.reserved) >> 2;
                this.length_size_of_sample_num = 3 & this.reserved;
            }

            this._procField("number_of_entry", "uint", 32);

            this._procEntries("entries", this.number_of_entry, (function(t) {
                this._procEntryField(t, "time", "uint", 1 === this.version ? 64 : 32);
                this._procEntryField(t, "moof_offset", "uint", 1 === this.version ? 64 : 32);
                this._procEntryField(t, "traf_number", "uint", 8 * (this.length_size_of_traf_num + 1));
                this._procEntryField(t, "trun_number", "uint", 8 * (this.length_size_of_trun_num + 1));
                this._procEntryField(t, "sample_number", "uint", 8 * (this.length_size_of_sample_num + 1));
            }))
        };
        ISOBox.prototype._boxProcessors.tkhd = function() {
            this._procFullBox();
            this._procField("creation_time", "uint", 1 == this.version ? 64 : 32);
            this._procField("modification_time", "uint", 1 == this.version ? 64 : 32);
            this._procField("track_ID", "uint", 32);
            this._procField("reserved1", "uint", 32);
            this._procField("duration", "uint", 1 == this.version ? 64 : 32);
            this._procFieldArray("reserved2", 2, "uint", 32);
            this._procField("layer", "uint", 16);
            this._procField("alternate_group", "uint", 16);
            this._procField("volume", "template", 16);
            this._procField("reserved3", "uint", 16);
            this._procFieldArray("matrix", 9, "template", 32);
            this._procField("width", "template", 32);
            this._procField("height", "template", 32);
        };
        ISOBox.prototype._boxProcessors.trex = function() {
            this._procFullBox();
            this._procField("track_ID", "uint", 32);
            this._procField("default_sample_description_index", "uint", 32);
            this._procField("default_sample_duration", "uint", 32);
            this._procField("default_sample_size", "uint", 32);
            this._procField("default_sample_flags", "uint", 32);
        };
        ISOBox.prototype._boxProcessors.trun = function() {
            this._procFullBox();
            this._procField("sample_count", "uint", 32);
            1 & this.flags && this._procField("data_offset", "int", 32);
            4 & this.flags && this._procField("first_sample_flags", "uint", 32);
            this._procEntries("samples", this.sample_count, (function(t) {
                256 & this.flags && this._procEntryField(t, "sample_duration", "uint", 32);
                512 & this.flags && this._procEntryField(t, "sample_size", "uint", 32);
                1024 & this.flags && this._procEntryField(t, "sample_flags", "uint", 32);
                2048 & this.flags && this._procEntryField(t, "sample_composition_time_offset", 1 === this.version ? "int" : "uint", 32);
            }))
        };
        ISOBox.prototype._boxProcessors["url "] = ISOBox.prototype._boxProcessors["urn "] = function() {
            this._procFullBox();
            "urn " === this.type && this._procField("name", "string", -1);
            this._procField("location", "string", -1);
        };
        ISOBox.prototype._boxProcessors.vlab = function() {
            this._procField("source_label", "utf8");
        };
        ISOBox.prototype._boxProcessors.vmhd = function() {
            this._procFullBox();
            this._procField("graphicsmode", "uint", 16);
            this._procFieldArray("opcolor", 3, "uint", 16);
        };
        ISOBox.prototype._boxProcessors.vttC = function() {
            this._procField("config", "utf8");
        };
        ISOBox.prototype._boxProcessors.vtte = function() {} // Nothing should happen here.
    },
    function(module, e, n) { /*** index 29 ***/
    var r = n(46)(); //do not change the name 'r'
        module.exports = r;
        try {
            regeneratorRuntime = r;
        } catch (t) {
            "object" == typeof globalThis ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r);
        }
    },
    , /*** index 30 left empty ***/
    , /*** index 31 left empty ***/
    function(module, e) { /*** index 32 ***/
    function _typeof2(obj) {
        if ("function" == typeof Symbol && "symbol" == typeof Symbol.iterator) {
            _typeof2 = function(obj) {
                return typeof obj;
            }
        } else {
            _typeof2 = function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            }
        }

        module.exports = _typeof2;
        module.exports.__esModule = !0;
        module.exports.default = module.exports;

        return _typeof2(obj);
    }
        module.exports = _typeof2;
        module.exports.__esModule = !0;
        module.exports.default = module.exports;
    },
    function(module, e, n) { /*** index 33 ***/
    var n38 = n(38);
        function i() {
            if ("undefined" != typeof Reflect && Reflect.get) {
                module.exports = i = Reflect.get.bind();
                module.exports.__esModule = !0;
                module.exports.default = module.exports;
            } else {
                module.exports = i = function(t, propertyName, n) {
                    var originalObject = n38(t, propertyName);
                    if (originalObject) {
                        var ownPropertyDescriptor = Object.getOwnPropertyDescriptor(originalObject, propertyName);
                        return ownPropertyDescriptor.get ? ownPropertyDescriptor.get.call(arguments.length < 3 ? t : n) : ownPropertyDescriptor.value;
                    }
                };
                module.exports.__esModule = !0;
                module.exports.default = module.exports;
            }

            return i.apply(this, arguments);
        }
        module.exports = i;
        module.exports.__esModule = !0;
        module.exports.default = module.exports;
    },
    function(module, e, n) { /*** index 34 ***/
    var n39 = n(39);
        module.exports = function(subClass, superClass) { //"inherits()"
            if ("function" != typeof superClass && null !== superClass) {
                throw new TypeError("Super expression must either be null or a function");
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    writable: !0,
                    configurable: !0
                }
            });

            Object.defineProperty(subClass, "prototype", {
                writable: !1
            });
            if (superClass) {
                n39(subClass, superClass);
            }
        };
        module.exports.__esModule = !0;
        module.exports.default = module.exports;
    },
    function(module, e, n) { /*** index 35 ***/
    var r = n(32).default,
        n40 = n(40);

        module.exports = function(t, e) {
            if (e && ("object" === r(e) || "function" == typeof e)) {
                return e;
            }
            if (void 0 !== e) {
                throw new TypeError("Derived constructors may only return object or undefined");
            }

            return n40(t);
        };
        module.exports.__esModule = !0;
        module.exports.default = module.exports;
    },
    function(module, e, n) { /*** index 36 ***/
    var n41 = n(41),
        n42 = n(42),
        n43 = n(43),
        n45 = n(45);

        module.exports = function(t, e) {
            return n41(t) || n42(t, e) || n43(t, e) || n45();
        };
        module.exports.__esModule = !0;
        module.exports.default = module.exports;
    },
    function(module, e) { /*** index 37 ***/
    function asyncGeneratorStep(generator, resolve, reject, _next, _throw, key, arg) {
        try {
            var info = generator[key](arg),
                value = info.value;
        } catch (error) {
            return void reject(error);
        }
        info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
    }
        module.exports = function(fn) {
            return function() {
                var self = this,
                    args = arguments;
                return new Promise((function(resolve, reject) {
                        var generator = fn.apply(self, args);
                        function _next(arg) {
                            asyncGeneratorStep(generator, resolve, reject, _next, _throw, "next", arg);
                        }
                        function _throw(error) {
                            asyncGeneratorStep(generator, resolve, reject, _next, _throw, "throw", error);
                        }
                        _next(void 0);
                    }
                ))
            }
        };
        module.exports.__esModule = !0;
        module.exports.default = module.exports;
    },
    function(module, e, n) { /*** index 38 ***/
    var n27 = n(27);
        module.exports = function(t, propertyName) {

            while (!Object.prototype.hasOwnProperty.call(t, propertyName)) {
                t = n27(t);
                if (t === null) {
                    break;
                }
            }

            return t;
        };
        module.exports.__esModule = !0;
        module.exports.default = module.exports;
    },
    function(module, e) { /*** index 39 ***/
    function n(e, r) {
        module.exports = n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(obj, prototype) {
            obj.__proto__ = prototype;
            return obj;
        };
        module.exports.__esModule = !0;
        module.exports.default = module.exports;

        return n(e, r);
    }
        module.exports = n;
        module.exports.__esModule = !0;
        module.exports.default = module.exports;
    },
    function(module, e) { /*** index 40 ***/
    module.exports = function(t) {
        if (void 0 === t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t;
    };
        module.exports.__esModule = !0;
        module.exports.default = module.exports;
    },
    function(module, e) { /*** index 41 ***/
    module.exports = function(maybeArray) {
        if (Array.isArray(maybeArray)) {
            return maybeArray;
        }
    };
        module.exports.__esModule = !0;
        module.exports.default = module.exports;
    },
    function(module, e) { /*** index 42 ***/
    module.exports = function(t, e) {
        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];

        if (null == n) {
            return;
        }

        var r, i,
            a = [],
            o = !0,
            s = !1;

        try {
            for (n = n.call(t); !(o = (r = n.next()).done) && (a.push(r.value),
            !e || a.length !== e); o = !0);
        } catch (t) {
            s = !0;
            i = t;
        } finally {
            try {
                o || null == n.return || n.return();
            } finally {
                if (s) {
                    throw i;
                }
            }
        }

        return a;
    };
        module.exports.__esModule = !0;
        module.exports.default = module.exports;
    },
    function(module, e, n) { /*** index 43 ***/
    var n44 = n(44);
        module.exports = function(t, e) {
            if (!t) {
                return;
            }

            if ("string" == typeof t) {
                return n44(t, e);
            }
            var n = Object.prototype.toString.call(t).slice(8, -1);
            if ("Object" === n && t.constructor) {
                n = t.constructor.name;
            }

            if ("Map" === n || "Set" === n) {
                return Array.from(t);
            } else if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                return n44(t, e);
            } else {
                return void 0;
            }
        };
        module.exports.__esModule = !0;
        module.exports.default = module.exports;
    },
    function(module, e) { /*** index 44 ***/
    module.exports = function(t, e) {
        if (null == e || e > t.length) {
            e = t.length;
        }
        var r = new Array(e);

        for (let i = 0; i < e; i++) {
            r[i] = t[i];
        }

        return r;
    };
        module.exports.__esModule = !0;
        module.exports.default = module.exports;
    },
    function(module, e) { /*** index 45 ***/
    module.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    };
        module.exports.__esModule = !0;
        module.exports.default = module.exports;
    },
    function(module, e, n) { /*** index 46 ***/
    var r = n(32).default;
        function i() {
            "use strict";
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            module.exports = i = function() {
                return exports;
            };
            module.exports.__esModule = !0;
            module.exports.default = module.exports;
            var exports = {},
                Op = Object.prototype,
                hasOwn = Op.hasOwnProperty,
                $Symbol = "function" == typeof Symbol ? Symbol : {},
                iteratorSymbol = $Symbol.iterator || "@@iterator",
                asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
                toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

            function define(obj, key, value) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                });

                return obj[key];
            }
            try {
                // IE 8 has a broken Object.defineProperty that only works on DOM objects.
                define({}, "");
            } catch (t) {
                define = function(obj, key, value) {
                    return obj[key] = value;
                };
            }
            function wrap(innerFn, outerFn, self, tryLocsList) {
                // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
                var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
                    generator = Object.create(protoGenerator.prototype),
                    context = new Context(tryLocsList || []);

                //'makeInvokeMethod' function
                generator._invoke = function(innerFn, self, context) {
                    var generatorState = "suspendedStart";

                    return function(method, arg) { //this is 'invoke' function
                        if ("executing" === generatorState) {
                            throw new Error("Generator is already running");
                        }
                        if ("completed" === generatorState) {
                            if ("throw" === method) {
                                throw arg;
                            }
                            return doneResult();
                        }
                        context.method = method;
                        context.arg = arg;

                        for (; ; ) {
                            var delegate = context.delegate;
                            if (delegate) {
                                var delegateResult = maybeInvokeDelegate(delegate, context);
                                if (delegateResult) {
                                    if (delegateResult === ContinueSentinel) {
                                        continue;
                                    }
                                    return delegateResult;
                                }
                            }
                            if ("next" === context.method) {
                                context.sent = context._sent = context.arg;
                            } else if ("throw" === context.method) {
                                if ("suspendedStart" === generatorState) {
                                    generatorState = "completed";
                                    throw context.arg;
                                }
                                context.dispatchException(context.arg);
                            } else {
                                "return" === context.method && context.abrupt("return", context.arg);
                            }
                            generatorState = "executing";
                            var command = tryCatch(method, self, context);
                            if ("normal" === command.type) {
                                generatorState = context.done ? "completed" : "suspendedYield";
                                if (command.arg === ContinueSentinel) {
                                    continue;
                                }
                                return {
                                    value: command.arg,
                                    done: context.done
                                }
                            }
                            if ("throw" === command.type) {
                                generatorState = "completed";
                                context.method = "throw";
                                context.arg = command.arg;
                            }
                        }
                    }
                }(innerFn, self, context);

                return generator;
            }
            function tryCatch(fn, obj, arg) {
                try {
                    return {
                        type: "normal",
                        arg: fn.call(obj, arg)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            exports.wrap = wrap;

            // Returning this object from the innerFn has the same effect as
            // breaking out of the dispatch switch statement.
            var ContinueSentinel = {};

            // Dummy constructor functions that we use as the .constructor and
            // .constructor.prototype properties for functions that return Generator
            // objects. For full spec compliance, you may wish to configure your
            // minifier not to mangle the names of these two functions.
            function Generator() {}
            function GeneratorFunction() {}
            function GeneratorFunctionPrototype() {}

            var IteratorPrototype = {};
            define(IteratorPrototype, iteratorSymbol, (function() {
                return this;
            }));

            var getProto = Object.getPrototypeOf,
                NativeIteratorPrototype = getProto && getProto(getProto(values([])));

            if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
                IteratorPrototype = NativeIteratorPrototype;
            }

            var generatorPrototype = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

            // Helper for defining the .next, .throw, and .return methods of the
            // Iterator interface in terms of a single ._invoke method.
            function defineIteratorMethods(prototype) {
                ["next", "throw", "return"].forEach((function(method) {
                    define(prototype, method, (function(arg) {
                        return this._invoke(method, arg);
                    }))
                }))
            }

            function AsyncIterator(generator, PromiseImpl) {
                var previousPromise;
                this._invoke = function(method, arg) {
                    function callInvokeWithMethodAndArg() {
                        return new PromiseImpl((function(resolve, reject) {
                            !function invoke(method, arg, resolve, reject) {
                                var record = tryCatch(generator[method], generator, arg);
                                if ("throw" === record.type) {
                                    reject(record.arg);
                                    return;
                                }

                                var result = record.arg,
                                    value = result.value;

                                if (value && "object" == r(value) && hasOwn.call(value, "__await")) {
                                    return PromiseImpl.resolve(value.__await).then((function(value) {
                                        invoke("next", value, resolve, reject);
                                    }), (function(err) {
                                        invoke("throw", err, resolve, reject);
                                    }));
                                }

                                return PromiseImpl.resolve(value).then((function(unwrapped) {
                                    // When a yielded Promise is resolved, its final value becomes
                                    // the .value of the Promise<{value,done}> result for the
                                    // current iteration.
                                    result.value = unwrapped;
                                    resolve(result);
                                }), (function(error) {
                                    // If a rejected Promise was yielded, throw the rejection back
                                    // into the async generator function so it can be handled there.
                                    return invoke("throw", error, resolve, reject);
                                }))

                            }(method, arg, resolve, reject);
                        }))
                    }

                    // If enqueue has been called before, then we want to wait until
                    // all previous Promises have been resolved before calling invoke,
                    // so that results are always delivered in the correct order. If
                    // enqueue has not been called before, then it is important to
                    // call invoke immediately, without waiting on a callback to fire,
                    // so that the async generator function has the opportunity to do
                    // any necessary setup in a predictable way. This predictability
                    // is why the Promise constructor synchronously invokes its
                    // executor callback, and why async functions synchronously
                    // execute code before the first await. Since we implement simple
                    // async functions in terms of async generators, it is especially
                    // important to get this right, even though it requires care.
                    return previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
                }
            }
            function maybeInvokeDelegate(delegate, iteratorContext) {
                var method = delegate.iterator[iteratorContext.method];
                if (void 0 === method) {
                    iteratorContext.delegate = null;
                    if ("throw" === iteratorContext.method) {
                        if (delegate.iterator.return) {
                            iteratorContext.method = "return";
                            iteratorContext.arg = void 0;
                            maybeInvokeDelegate(delegate, iteratorContext);

                            if ("throw" === iteratorContext.method) {
                                return ContinueSentinel;
                            }
                        }

                        iteratorContext.method = "throw";
                        iteratorContext.arg = new TypeError("The iterator does not provide a 'throw' method");
                    }

                    return ContinueSentinel;
                }
                var command = tryCatch(method, delegate.iterator, iteratorContext.arg);
                if ("throw" === command.type) {
                    iteratorContext.method = "throw";
                    iteratorContext.arg = command.arg;
                    iteratorContext.delegate = null;
                    return  ContinueSentinel;
                }

                var i = command.arg;

                if (!i) {
                    iteratorContext.method = "throw";
                    iteratorContext.arg = new TypeError("iterator result is not an object");
                    iteratorContext.delegate = null;
                    return ContinueSentinel;
                }

                if (!i.done) {
                    return i;
                }

                iteratorContext[delegate.resultName] = i.value;
                iteratorContext.next = delegate.nextLoc;

                if ("return" !== iteratorContext.method) {
                    iteratorContext.method = "next";
                    iteratorContext.arg = void 0;
                }
                iteratorContext.delegate = null;

                return ContinueSentinel;
            }
            function pushTryEntry(locs) {
                var entry = { tryLoc: locs[0] };

                if (1 in locs) {
                    entry.catchLoc = locs[1];
                }

                if (2 in locs) {
                    entry.finallyLoc = locs[2];
                    entry.afterLoc = locs[3];
                }

                this.tryEntries.push(entry);
            }
            function resetTryEntry(entry) {
                var record = entry.completion || {};
                record.type = "normal";
                delete record.arg;
                entry.completion = record;
            }
            function Context(tryLocsList) {
                // The root entry object (effectively a try statement without a catch
                // or a finally block) gives us a place to store values thrown from
                // locations where there is no enclosing try statement.
                this.tryEntries = [{ tryLoc: "root" }];
                tryLocsList.forEach(pushTryEntry, this);
                this.reset(!0);
            }
            function values(iterable) {
                if (!iterable) {
                    return { next: doneResult };
                }

                var iteratorMethod = iterable[iteratorSymbol];

                if (iteratorMethod) {
                    return iteratorMethod.call(iterable);
                }
                if ("function" == typeof iterable.next) {
                    return iterable;
                }
                if (isNaN(iterable.length)) {
                    return;
                }

                var i = -1,
                    next = function next() {
                        while (++i < iterable.length) {
                            if (hasOwn.call(iterable, i)) {
                                next.value = iterable[i];
                                next.done = !1;
                                return  next;
                            }
                        }

                        next.value = void 0;
                        next.done = !0;
                        return next;
                    };

                next.next = next;
                return next.next;
            }
            function doneResult() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            GeneratorFunction.prototype = GeneratorFunctionPrototype;
            define(generatorPrototype, "constructor", GeneratorFunctionPrototype);
            define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
            GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
            exports.isGeneratorFunction = function(genFun) {
                var constructor = "function" == typeof genFun && genFun.constructor;
                return !!constructor && (constructor === GeneratorFunction || "GeneratorFunction" === (constructor.displayName || constructor.name));
            };
            exports.mark = function(genFun) {
                if (Object.setPrototypeOf) {
                    Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
                } else {
                    genFun.__proto__ = GeneratorFunctionPrototype;
                    define(genFun, toStringTagSymbol, "GeneratorFunction");
                }

                genFun.prototype = Object.create(generatorPrototype);
                return genFun;
            };
            // Within the body of any async function, `await x` is transformed to
            // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
            // `hasOwn.call(value, "__await")` to determine if the yielded value is
            // meant to be awaited.
            exports.awrap = function(arg) {
                return { __await: arg };
            };
            defineIteratorMethods(AsyncIterator.prototype);
            define(AsyncIterator.prototype, asyncIteratorSymbol, (function() {
                return this;
            }));
            exports.AsyncIterator = AsyncIterator;

            // Note that simple async functions are implemented on top of
            // AsyncIterator objects; they just return a Promise for the value of
            // the final result produced by the iterator.
            exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
                if (void 0 === PromiseImpl) {
                    PromiseImpl = Promise;
                }

                var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);

                if (exports.isGeneratorFunction(outerFn)) {
                    return iter;
                }

                return iter.next().then((function(result) {
                    return result.done ? result.value : iter.next();
                }))
            };
            defineIteratorMethods(generatorPrototype);
            define(generatorPrototype, toStringTagSymbol, "Generator");
            define(generatorPrototype, iteratorSymbol, (function() {
                return this;
            }));
            define(generatorPrototype, "toString", (function() {
                return "[object Generator]";
            }));
            exports.keys = function(object) {
                var keys = [];
                for (var key in object) {
                    keys.push(key);
                }
                keys.reverse();

                // Rather than returning an object with a next method, we keep
                // things simple and return the next function itself.
                return function next() {
                    while (keys.length) {
                        var key = keys.pop();
                        if (key in object) {
                            next.value = key;
                            next.done = !1;
                            return next;
                        }
                    }
                    // To avoid creating an additional object, we just hang the .value
                    // and .done properties off the next function object itself. This
                    // also ensures that the minifier will not anonymize the function.
                    next.done = !0;
                    return next;
                }
            };
            exports.values = values;
            Context.prototype = {
                constructor: Context,

                reset: function(skipTempReset) {
                    this.prev = 0;
                    this.next = 0;
                    this.sent = this._sent = void 0;
                    this.done = !1;
                    this.delegate = null;
                    this.method = "next";
                    this.arg = void 0;
                    this.tryEntries.forEach(resetTryEntry);

                    if (skipTempReset) {
                        return;
                    }

                    for (var prop in this) {
                        if ("t" !== prop.charAt(0)) {
                            continue;
                        }

                        if (hasOwn.call(this, prop) && !isNaN(+prop.slice(1))) {
                            this[prop] = void 0;
                        }
                    }
                },
                stop: function() {
                    this.done = !0;

                    var rootRecord = this.tryEntries[0].completion;
                    if ("throw" === rootRecord.type) {
                        throw rootRecord.arg;
                    }
                    return this.rval;
                },
                dispatchException: function(exception) {
                    if (this.done) {
                        throw exception;
                    }
                    var context = this;
                    function handle(loc, caught) {
                        entryCompletion.type = "throw";
                        entryCompletion.arg = exception;
                        context.next = loc;
                        if (caught) {
                            context.method = "next";
                            context.arg = void 0;
                        }

                        return !!caught;
                    }
                    for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i],
                            entryCompletion = entry.completion;

                        if ("root" === entry.tryLoc) {
                            return handle("end");
                        }
                        if (entry.tryLoc > this.prev) {
                            return;
                        }

                        var hasCatch = hasOwn.call(entry, "catchLoc"),
                            hasFinally = hasOwn.call(entry, "finallyLoc");

                        if (hasCatch && hasFinally) {
                            if (this.prev < entry.catchLoc) {
                                return handle(entry.catchLoc, !0);
                            }
                            if (this.prev < entry.finallyLoc) {
                                return handle(entry.finallyLoc);
                            }
                        } else if (hasCatch && this.prev < entry.catchLoc) {
                            return handle(entry.catchLoc, !0);
                        } else {
                            if (!hasFinally) {
                                throw new Error("try statement without catch or finally");
                            }
                            if (this.prev < entry.finallyLoc) {
                                return handle(entry.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function(type, arg) {
                    for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i];

                        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                            var finallyEntry = entry;
                            break;
                        }
                    }

                    if (finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
                        finallyEntry = null;
                    }

                    var entryCompletion = finallyEntry ? finallyEntry.completion : {};

                    entryCompletion.type = type;
                    entryCompletion.arg = arg;

                    if (!finallyEntry) {
                        return this.complete(entryCompletion);
                    }

                    this.method = "next";
                    this.next = finallyEntry.finallyLoc;
                    return ContinueSentinel;
                },
                complete: function(record, afterLoc) {
                    if ("throw" === record.type) {
                        throw record.arg;
                    }

                    if ("break" === record.type || "continue" === record.type) {
                        this.next = record.arg;
                        return ContinueSentinel;
                    }

                    if ("return" === record.type) {
                        this.rval = this.arg = record.arg;
                        this.method = "return";
                        this.next = "end";
                    } else if ("normal" === record.type && afterLoc) {
                        this.next = afterLoc;
                    }

                    return ContinueSentinel;
                },
                finish: function(finallyLoc) {
                    for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i];
                        if (entry.finallyLoc === finallyLoc) {
                            this.complete(entry.completion, entry.afterLoc);
                            resetTryEntry(entry);

                            return ContinueSentinel;
                        }
                    }
                },
                catch: function(tryLoc) {
                    for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i];

                        if (entry.tryLoc === tryLoc) {
                            var record = entry.completion;
                            if ("throw" === record.type) {
                                var thrown = record.arg;
                                resetTryEntry(entry);
                            }

                            return thrown;
                        }
                    }
                    // The context.catch method must only be called with a location
                    // argument that corresponds to a known catch block.
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(iterable, resultName, nextLoc) {
                    this.delegate = {
                        iterator: values(iterable),
                        resultName: resultName,
                        nextLoc: nextLoc
                    };

                    if ("next" === this.method) {
                        this.arg = void 0;
                    }

                    return ContinueSentinel;
                }
            };

            return exports;
        }
        module.exports = i;
        module.exports.__esModule = !0;
        module.exports.default = module.exports;
    },
    function(t, e, n) { /*** index 47 ***/
    "use strict";
        n.r(e);
        var n2 = n(2),
            n7 = n(7),
            ERROR_NUMBERS = n(16),
            n1 = n(1),
            n9 = n(9),
            n0 = n(0),
            n3 = n(3),
            n6 = n(6),
            n8 = n(8);

        function getMappedProperties(originalObject, enumerablePropertiesOnly) { //duplicate method
            var mappedProperties = Object.keys(originalObject);
            if (Object.getOwnPropertySymbols) {
                var propertySymbols = Object.getOwnPropertySymbols(originalObject);
                if (enumerablePropertiesOnly) {
                    propertySymbols = propertySymbols.filter((function(propertyName) {
                        return Object.getOwnPropertyDescriptor(originalObject, propertyName).enumerable;
                    }));
                }

                mappedProperties.push.apply(mappedProperties, propertySymbols);
            }

            return mappedProperties;
        }
        function buildVideoCapabilitiesInfo(obj) {
            for (let i = 1; i < arguments.length; i++) {
                var originalObject = null != arguments[i] ? arguments[i] : {};

                if (i % 2) {
                    getMappedProperties(Object(originalObject), !0).forEach((function(property) {
                        Object(n2.a)(obj, property, originalObject[property]);
                    }))
                } else if (Object.getOwnPropertyDescriptors) {
                    Object.defineProperties(obj, Object.getOwnPropertyDescriptors(originalObject));
                } else {
                    getMappedProperties(Object(originalObject)).forEach((function(propertyName) {
                        Object.defineProperty(obj, propertyName, Object.getOwnPropertyDescriptor(originalObject, propertyName));
                    }))
                }
            }

            return obj;
        }
        var defaultVideoMimeTypeAndCodec = {
                VIDEO: 'video/mp4; codecs="avc1.42E01E"'
            },
            supportedDrmTechnologies = {
                CLEARKEY: "org.w3.clearkey",
                FAIRPLAY: "com.apple.fps.1_0",
                PLAYREADY: "com.microsoft.playready",
                WIDEVINE: "com.widevine.alpha"
            },
            supportedDrmRobustnessLevels = {
                L1: "HW_SECURE_ALL",
                L3: "SW_SECURE_CRYPTO"
            },
            v = function() {
                var requestedAudioVideoMimeTypeAndCodecs = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    videoRobustness = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    supportedContentProtectionSchemes = ["cenc"],
                    i = requestedAudioVideoMimeTypeAndCodecs.reduce((function(result, audioMimeTypeAndCodec) {
                        var contentType = audioMimeTypeAndCodec.contentType,
                            mediaType = audioMimeTypeAndCodec.type;

                        return buildVideoCapabilitiesInfo({}, result, Object(n2.a)({}, "".concat(mediaType, "Capabilities"), [{
                            contentType: contentType,
                            robustness: videoRobustness["".concat(mediaType, "Robustness")] || ""
                        }]))
                    }), {});
                return [buildVideoCapabilitiesInfo({
                    initDataTypes: supportedContentProtectionSchemes
                }, i)]
            },
            requestMediaKeySystemAccess = function(drmKeySystem, supportedConfigs) {
                console.log("Requesting media keys for: " + drmKeySystem);
                var prom = navigator.requestMediaKeySystemAccess(drmKeySystem, supportedConfigs);
                return prom;
            },
            b = function() {
                var t = Object(n3.a)(n3.b.mark((function t() {
                        var requestedVideoMimeTypeAndCodec, n, i, clientSupportedMimeTypesAndCodecs = arguments;
                        return n3.b.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                        case 0:
                                            requestedVideoMimeTypeAndCodec = clientSupportedMimeTypesAndCodecs.length > 0 && void 0 !== clientSupportedMimeTypesAndCodecs[0] ? clientSupportedMimeTypesAndCodecs[0] : defaultVideoMimeTypeAndCodec;
                                            n = [supportedDrmTechnologies.WIDEVINE, supportedDrmTechnologies.PLAYREADY, supportedDrmTechnologies.FAIRPLAY].reduce((function(drmTechnologyType, keySystem) {
                                                    return [].concat(Object(n8.a)(drmTechnologyType), Object(n8.a)(Object.entries(requestedVideoMimeTypeAndCodec).flatMap((function(t) {
                                                            var e = Object(n6.a)(t, 2),
                                                                mediaType = e[0],
                                                                mimeTypeAndCodecs = e[1];
                                                            return Object.entries(supportedDrmRobustnessLevels).flatMap((function(robustnessLevel) {
                                                                var e = Object(n6.a)(robustnessLevel, 2),
                                                                    drmRobustnessLevel = e[0],
                                                                    drmRobustness = e[1],
                                                                    u = v([{
                                                                        contentType: mimeTypeAndCodecs, //breakpoint here
                                                                        type: mediaType.toLowerCase()
                                                                    }], Object(n2.a)({}, "".concat(mediaType.toLowerCase(), "Robustness"), drmRobustness));
                                                                return requestMediaKeySystemAccess(keySystem, u).then((function() {
                                                                    return {
                                                                        keySystem: keySystem,
                                                                        level: drmRobustnessLevel,
                                                                        type: mediaType.toLowerCase()
                                                                    }
                                                                })).catch((function() {} ));
                                                            }))
                                                        }
                                                    ))))
                                                }
                                            ), []);
                                            t.next = 5;
                                            return Promise.all(n);
                                        case 5:
                                            i = t.sent;
                                            return t.abrupt("return", Promise.resolve(i.filter(Boolean)));
                                        case 7:
                                        case "end":
                                            return t.stop();
                                    }
                            }
                        ), t)
                    }
                )));
                return function() {
                    return t.apply(this, arguments);
                }
            }(),
            n5 = n(5),
            n4 = n(4),
            n18 = n(18),
            n11 = n(11),
            n13 = n(13),
            n10 = n(10),
            n21 = n(21),
            n14 = n(14);
        function isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], (function() {} )));
                return !0;
            } catch (t) {
                return !1
            }
        }
        var x, configModel,
            C = function(t) {
                Object(n4.a)(r, t);
                var e, n;

                e = r;
                n = function() {
                    var t, n = Object(n4.b)(e);
                    if (isNativeReflectConstruct()) {
                        var constructor = Object(n4.b)(this).constructor;
                        t = Reflect.construct(n, arguments, constructor);
                    } else {
                        t = n.apply(this, arguments);
                    }

                    return Object(n4.c)(this, t); //breakpoint here
                };

                function r() {
                    Object(n5.a)(this, r);
                    return n.apply(this, arguments);
                }

                return r;
            }(n14.a),
            getAllMediaItems = function(availableSources, renderers, options) {
                return renderers.slice().sort((function(renderer1, renderer2) {
                    return renderer1.priority - renderer2.priority;
                })).reduce((function(result, currentRenderer) {
                    Object.entries(availableSources).forEach((function(availableSource) {
                        var i = Object(n6.a)(availableSource, 2),
                            a = i[0],
                            o = i[1],
                            sourceUrl = Object(n6.a)(o, 1)[0].src;
                        Object.entries(currentRenderer.mediaTypes).forEach((function(mediaType) {
                            var i = Object(n6.a)(mediaType, 2),
                                currentMediaType = i[0],
                                currentMimeType = i[1],
                                typeSupported = currentRenderer.canPlayType(currentMimeType, options);

                            if (a.toUpperCase() === currentMediaType && typeSupported) {
                                result.push({
                                    url: sourceUrl,
                                    renderer: currentRenderer,
                                    mimeType: currentMimeType,
                                    mediaType: currentMediaType
                                })
                            }
                        }))
                    }));

                    return result;
                }), [])
            };
        function getMappedProperties(originalObject, enumerablePropertiesOnly) { //duplicate method
            var mappedProperties = Object.keys(originalObject);
            if (Object.getOwnPropertySymbols) {
                var propertySymbols = Object.getOwnPropertySymbols(originalObject);
                if (enumerablePropertiesOnly) {
                    propertySymbols = propertySymbols.filter((function(propertyName) {
                        return Object.getOwnPropertyDescriptor(originalObject, propertyName).enumerable;
                    }));
                }

                mappedProperties.push.apply(mappedProperties, propertySymbols);
            }

            return mappedProperties;
        }
        function MediaItem(jsonDataItem) {
            var mediaItemId = "mediaItem_" + n13.a.generateRandomString(16),
                source = void 0,
                drm = void 0,
                subtitles = void 0,
                stripe = void 0,
                splashscreen = void 0,
                thumbnail = void 0,
                rating = void 0;

            function setDrmF(t) {
                var e, n, a;
                null === (e = drm = t && Object.entries(t).reduce((function(t, e) {
                        var n = Object(n6.a)(e, 2),
                            i = n[0],
                            a = n[1];
                        return function(obj) {
                            for (let i = 1; i < arguments.length; i++) {
                                var originalObject = null != arguments[i] ? arguments[i] : {};

                                if (i % 2) {
                                    getMappedProperties(Object(originalObject), !0).forEach((function(property) {
                                        Object(n2.a)(obj, property, originalObject[property]);
                                    }))
                                } else if (Object.getOwnPropertyDescriptors) {
                                    Object.defineProperties(obj, Object.getOwnPropertyDescriptors(originalObject));
                                } else {
                                    getMappedProperties(Object(originalObject)).forEach((function(propertyName) {
                                        Object.defineProperty(obj, propertyName, Object.getOwnPropertyDescriptor(originalObject, propertyName));
                                    }))
                                }
                            }

                            return obj;
                        }({}, t, Object(n2.a)({}, i.toLowerCase(), "string" == typeof a ? {
                            src: a
                        } : a))
                    }
                ), {})) || void 0 === e || null === (n = e.widevine) || void 0 === n || null === (a = n.multikey) || void 0 === a || a.sort((function(t, e) {
                        return t.securityLevel === e.securityLevel ? t.maxHeight - e.maxHeight : t.securityLevel < e.securityLevel ? 1 : -1
                    }
                ))
            }
            function setSourceF(newSource) {
                jsonDataItem.source = newSource;
                source = newSource;
            }
            function setSubtitlesF(newSubtitles) {
                subtitles = newSubtitles;
            }
            function setStripeF(newStripe) {
                stripe = newStripe;
            }
            function setSplashscreenF(newSplashscreen) {
                splashscreen = newSplashscreen;
            }
            function setThumbnailF(newThumbnail) {
                thumbnail = newThumbnail;
            }
            function setRatingF(newRating) {
                rating = newRating;
            }

            if (void 0 !== jsonDataItem) {
                (function(t) {
                    var drm = t.drm,
                        rating = t.rating,
                        sources = t.sources,
                        splashScreen = t.splashscreen,
                        stripe = t.stripe,
                        subtitles = t.subtitles,
                        thumbnail = t.thumbnail;
                    setSourceF(sources);
                    setStripeF(stripe);
                    setSubtitlesF(subtitles);
                    setThumbnailF(thumbnail);
                    setSplashscreenF(splashScreen);
                    setRatingF(rating);
                    setDrmF(drm);
                }(jsonDataItem))
            }
            jsonDataItem = {};
            return {
                getByKey: function(key) {
                    return jsonDataItem[key];
                },
                getId: function() {
                    return mediaItemId;
                },
                getDrm: function() {
                    return drm;
                },
                setDrm: setDrmF,
                getSource: function() {
                    return source;
                },
                setSource: setSourceF,
                getStripe: function() {
                    return stripe;
                },
                getSubtitles: function() {
                    return subtitles;
                },
                setThumbnail: setThumbnailF,
                getThumbnail: function() {
                    return thumbnail;
                },
                getSplashscreen: function() {
                    return splashscreen;
                },
                setSplashscreen: setSplashscreenF,
                getRating: function() {
                    return rating;
                },
                setRating: setRatingF
            }
        }
        function Playlist(manifestSources) {
            var options = manifestSources.options,
                availableMediaItems = [],
                currentMediaItem = {};
            return {
                fetch: function() {
                    var currentManifestSources = options.get(n1.r), //file
                        i = options.get(n1.x) || options.get(n1.y); //playlist, files

                    if (currentManifestSources) {
                        return function(t) {
                            var mediaItem = new MediaItem,
                                availableManifestSources = {};
                            availableMediaItems = [];
                            currentMediaItem = {};

                            if ("string" == typeof t) {
                                var s = "mp4";

                                if (-1 !== t.indexOf("#")) {
                                    s = t.split("#")[1];
                                }
                                availableManifestSources[s] = [{ src: t }];
                            } else {
                                for (var propName in t) {
                                    if (t.hasOwnProperty(propName)) {
                                        availableManifestSources[propName] = [{ src: t[propName] }];
                                    }
                                }
                            }

                            mediaItem.setSource(availableManifestSources);
                            mediaItem.setDrm(options.get(n1.z)); //drm
                            availableMediaItems.push(mediaItem);
                            currentMediaItem[mediaItem.getId()] = mediaItem;

                            return Promise.resolve();
                        }(currentManifestSources);
                    }
                    if (!i) {
                        return Promise.reject();
                    }

                    return function(mediaItemToAdd) {
                        availableMediaItems = [];
                        currentMediaItem = {};

                        if ("object" === Object(n18.b)(mediaItemToAdd)) {
                            if (Array.isArray(mediaItemToAdd)) {
                                for (let i = 0; i < mediaItemToAdd.length; i++) {
                                    availableMediaItems.push(mediaItemToAdd[i]);
                                }
                            } else {
                                availableMediaItems.push(mediaItemToAdd);
                            }

                            return Promise.resolve();
                        }
                        var httpConfig = options.get(n1.i), //httpConfig
                            currentPlaylist = httpConfig.playlist,
                            requestHeaders = null == currentPlaylist ? void 0 : currentPlaylist.headers;

                        return n10.d.get(mediaItemToAdd, {
                            headers: requestHeaders,
                            withCredentials: !!(null == httpConfig.playlist ? void 0 : httpConfig.playlist.withCredentials)
                        }).then((function(t) {
                                var jsonData = JSON.parse(t.data);
                                if (Array.isArray(jsonData)) {
                                    availableMediaItems = jsonData.map((function(jsonDataItem) {
                                        var mediaItem = new MediaItem(jsonDataItem);
                                        currentMediaItem[mediaItem.getId()] = mediaItem;
                                        return mediaItem;
                                    }));
                                } else {
                                    var mediaItem = new MediaItem(jsonData);
                                    currentMediaItem[mediaItem.getId()] = mediaItem;
                                    availableMediaItems.push(mediaItem);
                                }
                            }
                        ))
                    }(i);
                },
                list: function() {
                    return availableMediaItems;
                },
                first: function() {
                    return availableMediaItems[0];
                },
                getById: function(mediaItemId) {
                    return currentMediaItem[mediaItemId];
                }
            }
        }
        function getMappedProperties(originalObject, enumerablePropertiesOnly) { //duplicate method
            var mappedProperties = Object.keys(originalObject);
            if (Object.getOwnPropertySymbols) {
                var propertySymbols = Object.getOwnPropertySymbols(originalObject);
                if (enumerablePropertiesOnly) {
                    propertySymbols = propertySymbols.filter((function(propertyName) {
                        return Object.getOwnPropertyDescriptor(originalObject, propertyName).enumerable;
                    }));
                }

                mappedProperties.push.apply(mappedProperties, propertySymbols);
            }

            return mappedProperties;
        }
        function F(obj) {
            for (let i = 1; i < arguments.length; i++) {
                var originalObject = null != arguments[i] ? arguments[i] : {};

                if (i % 2) {
                    getMappedProperties(Object(originalObject), !0).forEach((function(property) {
                        Object(n2.a)(obj, property, originalObject[property]);
                    }))
                } else if (Object.getOwnPropertyDescriptors) {
                    Object.defineProperties(obj, Object.getOwnPropertyDescriptors(originalObject));
                } else {
                    getMappedProperties(Object(originalObject)).forEach((function(propertyName) {
                        Object.defineProperty(obj, propertyName, Object.getOwnPropertyDescriptor(originalObject, propertyName));
                    }))
                }
            }

            return obj;
        }
        var playerConfiguration;

        configModel = {};
        Object(n2.a)(configModel, n1.A, "REKLAMA: "); //'advertLabel'
        x = {};
        Object(n2.a)(x, n1.B, !1); //droppedFrames
        Object(n2.a)(x, n1.Gb, !1); //resolution
        Object(n2.a)(x, n1.Hb, 0); //bufferLength
        Object(n2.a)(configModel, n1.Fb, x); //autoAdaptation

        Object(n2.a)(configModel, n1.a, !0); //autofocus
        Object(n2.a)(configModel, n1.Jb, !0); //"autoplay"
        Object(n2.a)(configModel, n1.D, "resume"); //autoplayBlockedRule
        Object(n2.a)(configModel, n1.c, 30); //"bufferBehind"
        Object(n2.a)(configModel, n1.E, 2); //bufferTime
        Object(n2.a)(configModel, n1.F, !0); //cacheDrmSessionByKeyId
        Object(n2.a)(configModel, n1.d, !1); //considerDroppedFrames
        Object(n2.a)(configModel, n1.G, "classic"); //controlsLayout
        Object(n2.a)(configModel, n1.H, "rgpl"); //cssPrefix
        Object(n2.a)(configModel, n1.I, "default"); //controls
        Object(n2.a)(configModel, n1.J, null); //customTtmlParser
        Object(n2.a)(configModel, n1.K, !1); //debug
        Object(n2.a)(configModel, n1.L, "pl"); //defaultGuiLanguage
        Object(n2.a)(configModel, n1.Bb, null); //defaultAudioLanguage
        Object(n2.a)(configModel, n1.Cb, null); //defaultBitrate
        Object(n2.a)(configModel, n1.e, !1); //disableCheckingDecodedFramesCount
        Object(n2.a)(configModel, n1.Lb, !0); //disableNativeControls
        Object(n2.a)(configModel, n1.z, null); //drm
        Object(n2.a)(configModel, n1.M, {}); //drmConfig
        Object(n2.a)(configModel, n1.T, void 0); //drmSystems
        Object(n2.a)(configModel, n1.U, {}); //extra
        Object(n2.a)(configModel, n1.V, "application/octet-stream"); //fairplayContentType
        Object(n2.a)(configModel, n1.r, void 0); //file
        Object(n2.a)(configModel, n1.y, void 0); //files
        Object(n2.a)(configModel, n1.Ib, !1); //fixAppleSiteSpecificHacks
        Object(n2.a)(configModel, n1.W, !0); //fullscreen
        Object(n2.a)(configModel, n1.X, void 0); //gstream
        Object(n2.a)(configModel, n1.Rb, !0); //guardLivePosition
        Object(n2.a)(configModel, n1.h, .25); //guardTimeShiftSafeSeek
        Object(n2.a)(configModel, n1.Y, 400); //height
        Object(n2.a)(configModel, n1.Z, !0); //hideControls
        Object(n2.a)(configModel, n1.ab, null); //holder
        Object(n2.a)(configModel, n1.i, {}); //httpConfig
        Object(n2.a)(configModel, n1.j, !0); //immediatelySwitch
        Object(n2.a)(configModel, n1.bb, !1); //keyboardEvents
        Object(n2.a)(configModel, n1.Db, !1); //lastBitrateCaching
        Object(n2.a)(configModel, n1.Qb, !1); //live
        Object(n2.a)(configModel, n1.m, 0); //liveDelay
        Object(n2.a)(configModel, n1.cb, void 0); //layout
        Object(n2.a)(configModel, n1.yb, null); //maxAutoBitrate
        Object(n2.a)(configModel, n1.vb, 20); //maxBufferLength
        Object(n2.a)(configModel, n1.xb, null); //minAutoBitrate
        Object(n2.a)(configModel, n1.ub, null); //minBufferTime
        Object(n2.a)(configModel, n1.tb, 15); //minLiveDelay
        Object(n2.a)(configModel, n1.n, !0); //minimumUpdatePeriodEnabled
        Object(n2.a)(configModel, n1.db, []); //modules
        Object(n2.a)(configModel, n1.eb, void 0); //name
        Object(n2.a)(configModel, n1.fb, !0); //pauseOnVideoClick
        Object(n2.a)(configModel, n1.gb, [.25, .5, 1, 1.5, 2]); //playbackRates
        Object(n2.a)(configModel, n1.q, !1); //playsInline
        Object(n2.a)(configModel, n1.Kb, void 0); //poster
        Object(n2.a)(configModel, n1.f, !1); //prefetchHlsPlaylist
        Object(n2.a)(configModel, n1.hb, !1); //reconnect
        Object(n2.a)(configModel, n1.ib, ["dash", "html5"]); //rendererPriority
        Object(n2.a)(configModel, n1.s, !0); //resolveRedirects
        Object(n2.a)(configModel, n1.jb, null); //rootUrl
        Object(n2.a)(configModel, n1.kb, 10); //seekChangeStep
        Object(n2.a)(configModel, n1.Ab, "time"); //seekPrecision
        Object(n2.a)(configModel, n1.lb, ["profile", "audio", "subtitle", "playbackRate"]); //settings
        Object(n2.a)(configModel, n1.mb, !0); //showButtonsOverVideo
        Object(n2.a)(configModel, n1.nb, !0); //showButtonsOverVideoOnHover
        Object(n2.a)(configModel, n1.ob, !0); //showJumpButtonsOverVideo
        Object(n2.a)(configModel, n1.pb, !0); //showPauseButtonOverVideo
        Object(n2.a)(configModel, n1.qb, { //skin
            name: "default",
            url: null
        });
        Object(n2.a)(configModel, n1.zb, !1); //smartTV
        Object(n2.a)(configModel, n1.wb, 0); //startBufferLength
        Object(n2.a)(configModel, n1.Eb, 0); //startTime
        Object(n2.a)(configModel, n1.t, !1); //streamWithCredentials
        Object(n2.a)(configModel, n1.p, !1); //timeShiftEnabled
        Object(n2.a)(configModel, n1.o, { //timeShiftParams
            dvr: "dvr",
            startTime: "startTime",
            stopTime: "stopTime"
        });
        Object(n2.a)(configModel, n1.rb, !0); //tooltips
        Object(n2.a)(configModel, n1.v, !1); //useDownlinkBitrate
        Object(n2.a)(configModel, n1.l, "//r.dcs.redcdn.pl/utc"); //UTCTimeServer
        Object(n2.a)(configModel, n1.k, 60); //UTCTimeServerUpdateInterval
        Object(n2.a)(configModel, n1.u, null); //timeShift
        Object(n2.a)(configModel, n1.Ob, void 0); //volume
        Object(n2.a)(configModel, n1.sb, 5); //volumeChangeStep
        Object(n2.a)(configModel, n1.Nb, !0); //volumeLocalStorageEnabled
        Object(n2.a)(configModel, n1.w, "redgalaxy-player-volume"); //volumeLocalStorageKey
        Object(n2.a)(configModel, n1.Pb, void 0); //volumeMuted
        Object(n2.a)(configModel, n1.Mb, "redgalaxy-player-volume-muted"); //volumeMutedLocalStorageKey
        Object(n2.a)(configModel, n1.N, "horizontal"); //volumeType
        Object(n2.a)(configModel, n1.O, 600); //width

        playerConfiguration = configModel;

        var PlayerOptions = function() {
            function createPlayerOptionsSkeleton() {
                Object(n5.a)(this, createPlayerOptionsSkeleton);
                this.options = n13.a.extendDeep({}, playerConfiguration);
                this.options.name = this.options.name || n13.a.generateRandomString(10);
            }
            Object(n5.b)(createPlayerOptionsSkeleton, [{
                key: "get",
                value: function(optionName) {
                    return optionName in this.options ? this.options[optionName] : null;
                }
            },
                {
                    key: "set",
                    value: function(optionName, value) {
                        this.options[optionName] = value;
                    }
                },
                {
                    key: "update",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

                        if (!1 !== t[n1.Fb]) { //autoAdaptation
                            t[n1.Fb] = F({}, playerConfiguration[n1.Fb], {}, t[n1.Fb]); //autoAdaptation
                        }

                        this.options = F({}, this.options, {}, t);
                        this.options.name = "player_renderer_".concat(n13.a.generateRandomString(10));
                        this.options.deviceControls = !1;

                        if (n11.a.isMobile()) {
                            this.options.autoplay = !0;
                        }

                        return this.options;
                    }
                },
                {
                    key: "getWidthWithUnit",
                    value: function() {
                        return convertToMeasurementWithUnits(this.options.width);
                    }
                },
                {
                    key: "getHeightWithUnit",
                    value: function() {
                        return convertToMeasurementWithUnits(this.options.height);
                    }
                }]);

            return createPlayerOptionsSkeleton;
        }();
        function convertToMeasurementWithUnits(numAsString, units) {
            var sanitized = numAsString.toString().replace(/\d+/g, ""); //'g' means 'every matched occurence in the string'
            sanitized.length || (sanitized = units || "px");

            return parseInt(numAsString, 10) + sanitized;
        }
        function VideoWrapperComponent(htmlElementId, options) {
            var selectedElement = document.querySelector("#".concat(htmlElementId)),
                cssPrefix = options.get(n1.H), //cssPrefix
                componentObj = {},
                currentCssContainer = selectedElement.querySelector(".".concat(cssPrefix, "-container"));

            if (currentCssContainer) {
                selectedElement.removeChild(currentCssContainer);
            }

            var parentDiv = document.createElement("div"),
                rendererContainer = document.createElement("div"),
                guiContainer = document.createElement("div");   //creates element by tag name (eg <div.../>)
            if (!selectedElement) {
                return;
            }

            selectedElement.appendChild(parentDiv);
            parentDiv.appendChild(rendererContainer);
            parentDiv.appendChild(guiContainer);
            selectedElement.classList.add(cssPrefix);
            parentDiv.classList.add("".concat(cssPrefix, "-container"));
            rendererContainer.classList.add("".concat(cssPrefix, "-renderers"));
            guiContainer.classList.add("".concat(cssPrefix, "-gui-container"));

            if (n11.a.isMobile()) {
                parentDiv.classList.add("".concat(cssPrefix, "-container--mobile"));
            }

            parentDiv.style.background = "#000";
            parentDiv.style.width = "100%";
            parentDiv.style.height = "100%";
            rendererContainer.style.width = "100%";
            rendererContainer.style.height = "100%";
            updateElementDimensionsF();

            return {
                addRenderer: function(component) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

                    if (e) {
                        rendererContainer.innerHTML = "";
                    }

                    component.setAttribute("width", "100%");
                    component.setAttribute("height", "100%");
                    rendererContainer.appendChild(component);
                },
                addComponent: function(component, index) {
                    componentObj[index] = component;
                    guiContainer.appendChild(component.getElm());
                },
                getEl: function() {
                    return parentDiv;
                },
                getComponent: function(index) {
                    return componentObj[index];
                },
                getHolderEl: function() {
                    return selectedElement;
                },
                getRendererContainer: function() {
                    return rendererContainer;
                },
                hideGuiContainer: function() {
                    guiContainer.style.display = "none";
                },
                removeComponent: function(t) {
                    var e = "string" == typeof t ? componentObj[t] : t;

                    if (e) {
                        guiContainer.removeChild(e.getElm());
                        delete componentObj[e.id];
                        e = null;
                    }
                },
                showGuiContainer: function() {
                    guiContainer.style.display = "unset";
                },
                updateDims: updateElementDimensionsF
            };
            function updateElementDimensionsF() {
                selectedElement.style.width = options.getWidthWithUnit();
                selectedElement.style.height = options.getHeightWithUnit();
            }
        }
        function isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], (function() {} )));
                return !0;
            } catch (t) {
                return !1;
            }
        }
        var G,
            players = [],
            renderers = [],
            modules = [],
            activePlayer = function(args) {
                Object(n4.a)(createPlayerSkeleton, args);
                var e, createMediaItemRendererF, initializePlaylistF, loadFileF, f = (e = createPlayerSkeleton,
                        function() {
                            var t, n = Object(n4.b)(e);
                            if (isNativeReflectConstruct()) {
                                var constructor = Object(n4.b)(this).constructor;
                                t = Reflect.construct(n, arguments, constructor);
                            } else {
                                t = n.apply(this, arguments);
                            }

                            return Object(n4.c)(this, t);
                        }
                );
                function createPlayerSkeleton(objOrId) {
                    var player,
                        autoload = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

                    Object(n5.a)(this, createPlayerSkeleton);
                    player = f.call(this);
                    player.holderId = void 0;
                    player._rendererObj = null;
                    player.components = {};
                    player.beforePlayTaskQueue = [];
                    player.supportedDrmSystems = null;
                    player.destroyed = !1;

                    switch (Object(n18.b)(objOrId)) {
                        case "object":
                            player._rendererObj = objOrId;
                            break;
                        case "string":
                            autoload = !0;
                            player.holderId = objOrId;
                    }

                    player.options = new PlayerOptions;
                    player.playlist = new Playlist(Object(n4.d)(player));
                    player.autoLoad = autoload;
                    player.renderer = null;
                    player.mediaItem = null;
                    player.frozen = !1;
                    player.timeShift = null;
                    player.onVisibilityChangeRef = function() {
                        return player.onVisibilityChange();
                    };
                    document.addEventListener("visibilitychange", player.onVisibilityChangeRef);
                    players.push(Object(n4.d)(player));

                    return player;
                }
                Object(n5.b)(createPlayerSkeleton, [{
                        key: "renderers",
                        get: function() {
                            return renderers.slice();
                        }
                    }],
                    [{
                        key: "addModule",
                        value: function(module) {
                            modules.push(module);
                        }
                    },
                        {
                            key: "addRenderer",
                            value: function(renderer) {
                                renderers.push(renderer);
                            }
                        },
                        {
                            key: "players",
                            get: function() {
                                return players.slice();
                            }
                        },
                        {
                            key: "renderers",
                            set: function(listOfRenderers) {
                                listOfRenderers.forEach((function(renderer) {
                                    return renderers.push(renderer);
                                }))
                            },
                            get: function() {
                                return renderers.slice();
                            }
                        },
                        {
                            key: "modules",
                            set: function(modulesList) {
                                modulesList.forEach((function(module) {
                                    modules.indexOf(module) && modules.push(module); //indexOf(-1) === true ('does not exist')
                                }))
                            },
                            get: function() {
                                return modules.slice();
                            }
                        }]);

                Object(n5.b)(createPlayerSkeleton, [{
                    key: "setup",
                    value: function(initialPlayerConfig) {
                        this.options.update(initialPlayerConfig);
                        this.trigger(n0.m); //setup

                        if (this.autoLoad) {
                            this.load();
                        }

                        return this;
                    }
                },
                    {
                        key: "load",
                        value: (loadFileF = Object(n3.a)(n3.b.mark((function t(file) {
                                    return n3.b.wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                    case 0:
                                                        this.destroyed = !1;

                                                        if (null !== this.renderer) {
                                                            this.renderer.destroy();
                                                        }
                                                        if (file) {
                                                            this.options.set(n1.r, file); //file
                                                        }

                                                        return t.abrupt("return", this._initialize());
                                                    case 4:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }
                                    ), t, this)
                                }
                            ))),
                                function(t) {
                                    return loadFileF.apply(this, arguments);
                                }
                        )
                    },
                    {
                        key: "_initialize",
                        value: (initializePlaylistF = Object(n3.a)(n3.b.mark((function t() {
                                    return n3.b.wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                    case 0:
                                                        t.next = 2;
                                                        return this.registerModules();
                                                    case 2:
                                                        this.timeShift = new n21.b(this);
                                                        this.trigger(n0.j); //subtitleEnableRequest
                                                        t.prev = 4;
                                                        t.next = 7;
                                                        return this.playlist.fetch();
                                                    case 7:
                                                        this.mediaItem = this.playlist.first();
                                                        if (this.supportedDrmSystems || !this.mediaItem.getDrm()) {
                                                            t.next = 12;
                                                            break;
                                                        }
                                                        t.next = 11;
                                                        return b();
                                                    case 11:
                                                        this.supportedDrmSystems = t.sent;
                                                    case 12:
                                                        this.trigger(n0.H, this.playlist.list()); //playlist
                                                        t.next = 18;
                                                        break;
                                                    case 15:
                                                        t.prev = 15;
                                                        t.t0 = t.catch(4);
                                                        this.trigger(n0.f, { //error
                                                            code: 220,
                                                            type: "PLAYLIST_ERROR",
                                                            renderer: null,
                                                            message: "Failed to load playlist."
                                                        });
                                                    case 18:
                                                        if (!this.destroyed) {
                                                            t.next = 20;
                                                            break;
                                                        }
                                                        return t.abrupt("return");
                                                    case 20:
                                                        if (!this.mediaItem) {
                                                            t.next = 23;
                                                            break;
                                                        }
                                                        t.next = 23;
                                                        return this._create();
                                                    case 23:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }
                                    ), t, this, [[4, 15]])
                                }
                            ))),
                                function() {
                                    return initializePlaylistF.apply(this, arguments);
                                }
                        )
                    },
                    {
                        key: "_create",
                        value: (createMediaItemRendererF = Object(n3.a)(n3.b.mark((function t() {
                                    var allMediaItems, availableMediaItems, currentMediaItem, mediaItemRenderer, videoWrapperComponent,
                                        player = this;
                                    return n3.b.wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                    case 0:
                                                        if (!this.destroyed) {
                                                            t.next = 2;
                                                            break;
                                                        }
                                                        return t.abrupt("return");
                                                    case 2:
                                                        allMediaItems = getAllMediaItems(this.mediaItem.getSource(), renderers, this.options);
                                                        availableMediaItems = Object(n6.a)(allMediaItems, 1);
                                                        currentMediaItem = availableMediaItems[0];

                                                        if (currentMediaItem) {
                                                            t.next = 5;
                                                            break;
                                                        }

                                                        return t.abrupt("return", this.throwNoSupportedRendererError());
                                                    case 5:
                                                        if (!(mediaItemRenderer = currentMediaItem.renderer.create)) {
                                                            t.next = 12;
                                                            break;
                                                        }
                                                        t.next = 9;

                                                        return mediaItemRenderer(this, this._rendererObj).catch((function() {
                                                            return player.throwNoSupportedRendererError();
                                                        }));
                                                    case 9:
                                                        t.t0 = t.sent;
                                                        t.next = 13;
                                                        break;
                                                    case 12:
                                                        t.t0 = new currentMediaItem.renderer(this, this._rendererObj);
                                                    case 13:
                                                        this.renderer = t.t0;
                                                        if (this.renderer && !this.destroyed) {
                                                            t.next = 16;
                                                            break;
                                                        }
                                                        return t.abrupt("return");
                                                    case 16:
                                                        this.renderer.setMediaItem(currentMediaItem);
                                                        this._registerEvents();
                                                        if (this.holderId) {
                                                            videoWrapperComponent = new VideoWrapperComponent(this.holderId, this.options);
                                                            videoWrapperComponent.addRenderer(this.renderer.getRendererElm());
                                                            this.addComponent(videoWrapperComponent, n9.c); //"video-wrapper"
                                                        }

                                                        this.trigger(n0.r, this.renderer); //ready
                                                    case 20:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }
                                    ), t, this)
                                }
                            ))),
                                function() {
                                    return createMediaItemRendererF.apply(this, arguments);
                                }
                        )
                    },
                    {
                        key: "freeze",
                        value: function() {
                            this.frozen = !0;
                        }
                    },
                    {
                        key: "unFreeze",
                        value: function() {
                            this.frozen = !1;
                        }
                    },
                    {
                        key: "addComponent",
                        value: function(component, id) {
                            this.components[id] = component;
                        }
                    },
                    {
                        key: "getComponent",
                        value: function(componentId) {
                            return this.components[componentId];
                        }
                    },
                    {
                        key: "removeComponent",
                        value: function(component) {
                            this.components[component.id] = void 0;
                            delete this.components[component.id];
                        }
                    },
                    {
                        key: "getRendererObj",
                        value: function() {
                            return this._rendererObj;
                        }
                    },
                    {
                        key: "switchMedia",
                        value: function(t) {
                            var player = this;
                            if (this.renderer) {
                                this.renderer.destroy();
                            }

                            var videoWrapperComponent = this.getComponent(n9.c); //video-wrapper
                            this.renderer = new Renderer(t, this);
                            videoWrapperComponent.addRenderer(this.renderer.getRendererElm(), !0);

                            this.renderer.on(n0.lb, (function(t, n) { //monitor
                                return player.trigger(n0.u, t, n); //time
                            }));
                            this.renderer.on(n0.lb, (function(t, n) { //monitor
                                return player.trigger(n0.lb, t, n); //monitor
                            }));
                        }
                    },
                    {
                        key: "isIndexMode",
                        value: function() {
                            var renderer = this.renderer;
                            return renderer == null || renderer.isIndexMode == null ? void 0 : renderer.isIndexMode.call(renderer);
                        }
                    },
                    {
                        key: "getRendererElm",
                        value: function() {
                            var renderer = this.renderer;
                            return renderer == null ? void 0 : renderer.getRendererElm();
                        }
                    },
                    {
                        key: "getMediaType",
                        value: function() {
                            var renderer = this.renderer;
                            return renderer == null ? void 0 : renderer.rendererType;
                        }
                    },
                    {
                        key: "getRenderer",
                        value: function() {
                            return this.renderer;
                        }
                    },
                    {
                        key: "_registerEvents",
                        value: function() {
                            var player = this;
                            this.renderer.on(n0.lb, this.trigger.bind(this, n0.u)); //monitor, time
                            this.renderer.on(n0.lb, this.trigger.bind(this, n0.lb)); //monitor, monitor
                            this.on(n0.r, this.ready.bind(this)); //ready

                            this.on(n0.v, (function() { //playRequest
                                return player._play();
                            }));
                            this.on(n0.y, (function(newVolume) { //volumeChangeRequest
                                return player._setVolume(newVolume);
                            }));
                            this.on(n0.z, (function(muted) { //volumeMuteRequest
                                return player._setMuted(muted);
                            }));
                            this.on(17, (function(e, n) {
                                return player.trigger(n0.A, n); //seekToRequest
                            }));
                            this.on(n0.A, (function(e) { //seekToRequest
                                return player._seekTo(e);
                            }));
                            this.on(n0.B, (function(e) { //seekRequest
                                return player._seek(e);
                            }));
                            this.on(n0.a, (function() { //togglePlayPauseRequest
                                return player.togglePlayPause();
                            }));
                        }
                    },
                    {
                        key: "registerModules",
                        value: function() {
                            var player = this,
                                currentModules = this.options.get(n1.db), //modules
                                allPromises = [];

                            modules.forEach((function(Module) {
                                if (!Module.enabled && -1 === currentModules.indexOf(Module.moduleId)) {
                                    return;
                                }

                                var module = new Module(player);

                                if (!module.initAsync) {
                                    return;
                                }

                                allPromises.push(module.initAsync());
                            }));

                            return Promise.all(allPromises);
                        }
                    },
                    {
                        key: "onVisibilityChange",
                        value: function() {
                            this.trigger(n0.w, "visible" === document.visibilityState); //visibilitychange
                        }
                    },
                    {
                        key: "ready",
                        value: function() {
                            this.options.get(n1.Jb) && this.renderer.play(); //autoplay
                        }
                    },
                    {
                        key: "onVolumeChanged",
                        value: function(newVolumeLocalStorageKey) {
                            if (!this.options.get(n1.Nb)) { //volumeLocalStorageEnabled
                                return;
                            }
                            var storage = localStorage;

                            if (storage == null) {
                                return;
                            }

                            storage.setItem(this.options.get(n1.w), newVolumeLocalStorageKey); //volumeLocalStorageKey
                        }
                    },
                    {
                        key: "restart",
                        value: function() {
                            if (!this.frozen) {
                                this.timeShift.isEnabled() && this.timeShift.reset();
                                this.renderer.restart();
                            }

                            this.trigger(n0.D); //restartRequest
                        }
                    },
                    {
                        key: "switchProfile",
                        value: function(t) {
                            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                n = arguments.length > 2 ? arguments[2] : void 0;

                            if (null !== this.renderer) {
                                this.renderer.switchProfile(t, e, n); //breakpoint here
                            }
                        }
                    },
                    {
                        key: "switchAudioTrack",
                        value: function(t, e) {
                            this.renderer.switchAudioTrack(t, e); //breakpoint here
                        }
                    },
                    {
                        key: "getDroppedFrameCount",
                        value: function() {
                            return this.renderer.getDroppedFrameCount();
                        }
                    },
                    {
                        key: "getDecodedFrameCount",
                        value: function() {
                            return this.renderer.getDecodedFrameCount();
                        }
                    },
                    {
                        key: "getBuffered",
                        value: function() {
                            return this.renderer.getBuffered();
                        }
                    },
                    {
                        key: "getPlayed",
                        value: function() {
                            return this.renderer.getPlayed();
                        }
                    },
                    {
                        key: "getProfile",
                        value: function() {
                            return this.renderer.getProfile();
                        }
                    },
                    {
                        key: "_play",
                        value: function() {
                            this.frozen || this.renderer.play();
                        }
                    },
                    {
                        key: "play",
                        value: function() {
                            var player = this;

                            return new Promise((function(resolve, reject) {
                                    player.trigger(n0.v); //playRequest
                                    var r = function() {
                                        player.off(n0.jb, resolve); //playPromiseResolved
                                        player.off(n0.ib, reject); //playInterrupted
                                    };
                                    player.once(n0.jb, (function() { //playPromiseResolved
                                        r();
                                        resolve();
                                    }));
                                    player.once(n0.ib, (function(t) { //playInterrupted
                                        r();
                                        reject(t);
                                    }));
                                }
                            ))
                        }
                    },
                    {
                        key: "pause",
                        value: function() {
                            if (!this.frozen) {
                                this.renderer.pause();
                            }

                            this.trigger(n0.E); //pauseRequest
                        }
                    },
                    {
                        key: "stop",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            this.renderer.stop();

                            if (!t) {
                                this.trigger(n0.F); //stopRequest
                            }
                        }
                    },
                    {
                        key: "head",
                        value: function() {
                            this.seek(100);
                        }
                    },
                    {
                        key: "isPaused",
                        value: function() {
                            return !!this.renderer && this.renderer.isPaused;
                        }
                    },
                    {
                        key: "resize",
                        value: function(t, e) {
                            this.trigger(n0.G, t, e); //resize
                        }
                    },
                    {
                        key: "setVolume",
                        value: function(newVolume) {
                            this.trigger(n0.y, newVolume); //volumeChangeRequest
                        }
                    },
                    {
                        key: "_setVolume",
                        value: function(newVolume) {
                            this.renderer.setVolume(newVolume);
                        }
                    },
                    {
                        key: "getVolume",
                        value: function() {
                            return this.renderer.getVolume();
                        }
                    },
                    {
                        key: "_setMuted",
                        value: function(muted) {
                            var renderer = this.renderer;

                            if (renderer == null) {
                                return;
                            }

                            renderer.setMuted(muted);
                        }
                    },
                    {
                        key: "isMuted",
                        value: function() {
                            var renderer = this.renderer;

                            return renderer == null ? void 0 : renderer.isMuted();
                        }
                    },
                    {
                        key: "mute",
                        value: function() {
                            return this._setMuted(!0);
                        }
                    },
                    {
                        key: "unMute",
                        value: function() {
                            return this._setMuted(!1);
                        }
                    },
                    {
                        key: "volumeUp",
                        value: function() {
                            var requestedVolumeIncrement = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                                currentVolume = parseFloat(this.renderer.getVolume());
                            currentVolume += requestedVolumeIncrement / 10;

                            if (currentVolume > 1) {
                                currentVolume = 1;
                            }

                            this.renderer.setVolume(100 * currentVolume);
                        }
                    },
                    {
                        key: "volumeDown",
                        value: function() {
                            var requestedVolumeDecrement = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                                currentVolume = parseFloat(this.renderer.getVolume());

                            currentVolume -= requestedVolumeDecrement / 10;

                            if (currentVolume < 0) {
                                currentVolume = 0;
                            }

                            this.renderer.setVolume(100 * currentVolume);
                        }
                    },
                    {
                        key: "setDrm",
                        value: function(drm) {
                            this.mediaItem.setDrm(drm);
                        }
                    },
                    {
                        key: "isStreamStarted",
                        value: function() {
                            var renderer = this.renderer;

                            return renderer == null ? void 0 : renderer.isStarted;
                        }
                    },
                    {
                        key: "isStreamPaused",
                        value: function() {
                            var renderer = this.renderer;

                            return renderer == null ? void 0 : renderer.isPaused;
                        }
                    },
                    {
                        key: "isLive",
                        value: function() {
                            var renderer = this.renderer;

                            return renderer == null ? void 0 : renderer.isLive();
                        }
                    },
                    {
                        key: "isLiveWithoutTimeShift",
                        value: function() {
                            return this.isLive() && !this.timeShift.isEnabled();
                        }
                    },
                    {
                        key: "getMediaItem",
                        value: function() {
                            return this.mediaItem;
                        }
                    },
                    {
                        key: "getUrl",
                        value: function() {
                            var renderer = this.renderer;

                            return renderer == null ? void 0 : renderer.url;
                        }
                    },
                    {
                        key: "getCurrentTime",
                        value: function() {
                            var renderer = this.renderer;

                            return Math.max(0, renderer == null ? void 0 : renderer.getCurrentTime());
                        }
                    },
                    {
                        key: "getCurrentTimeUTC",
                        value: function() {
                            var currentTime = this.getCurrentTime();

                            if (this.isLive() && this.timeShift.isEnabled()) {
                                currentTime += this.getLiveStartUTC();
                            }

                            return currentTime;
                        }
                    },
                    {
                        key: "getDuration",
                        value: function() {
                            return null === this.renderer ? NaN : this.renderer.getDuration();
                        }
                    },
                    {
                        key: "getBufferLength",
                        value: function() {
                            return null === this.renderer ? NaN : this.renderer.getBufferLength();
                        }
                    },
                    {
                        key: "setMaxBufferLength",
                        value: function(maxBufferLength) {
                            var renderer = this.renderer;

                            if (renderer != null) {
                                renderer.setMaxBufferLength(maxBufferLength);
                            }

                            this.options.set("maxBufferLength", maxBufferLength);
                        }
                    },
                    {
                        key: "getCurrentProfile",
                        value: function() {
                            var renderer = this.renderer;

                            return renderer == null ? void 0 : renderer.getCurrentProfile();
                        }
                    },
                    {
                        key: "getProfiles",
                        value: function() {
                            return this.renderer.getProfiles();
                        }
                    },
                    {
                        key: "getAudioTracks",
                        value: function() {
                            return this.renderer.getAudioTracks();
                        }
                    },
                    {
                        key: "getCurrentAudioTrack",
                        value: function() {
                            return this.renderer.getCurrentAudioTrack();
                        }
                    },
                    {
                        key: "getTextTracks",
                        value: function() {
                            return this.renderer.getTextTracks();
                        }
                    },
                    {
                        key: "seek",
                        value: function() {
                            var player = this,
                                argsLength = arguments.length,
                                argsArray = new Array(argsLength);

                            for (let i = 0; i < argsLength; i++) {
                                argsArray[i] = arguments[i];
                            }
                            return this._createSeekPromise((function() {
                                return player.trigger.apply(player, [n0.B].concat(argsArray)); //seekRequest
                            }))
                        }
                    },
                    {
                        key: "seekTo",
                        value: function() {
                            var player = this,
                                argsLength = arguments.length,
                                argsArray = new Array(argsLength);
                            for (let i = 0; i < argsLength; i++) {
                                argsArray[i] = arguments[i];
                            }
                            return this._createSeekPromise((function() {
                                return player.trigger.apply(player, [n0.A].concat(argsArray)); //seekToRequest
                            }))
                        }
                    },
                    {
                        key: "seekToHead",
                        value: function() {
                            var player = this;

                            return this._createSeekPromise((function() {
                                if (player.timeShift.isEnabled()) {
                                    player.timeShift.setMode(n21.a.LIVE);
                                }

                                player.renderer.seekToHead();
                            }))
                        }
                    },
                    {
                        key: "_createSeekPromise",
                        value: function(t) {
                            var player = this;

                            return new Promise((function(n) {
                                player.once(n0.pb, n); //seeked
                                t();
                            }))
                        }
                    },
                    {
                        key: "_seek",
                        value: function() {
                            if (this.frozen) {
                                return;
                            }

                            if (this.timeShift.isLive()) {
                                this.timeShift.setMode(n21.a.LIVE_DELAYED);
                            }

                            var argsLength = arguments.length,
                                argsArray = new Array(argsLength);
                            for (let i = 0; i < argsLength; i++) {
                                argsArray[i] = arguments[i];
                            }

                            this.renderer.seek.apply(this.renderer, argsArray);
                        }
                    },
                    {
                        key: "_seekTo",
                        value: function() {
                            if (this.frozen) {
                                return;
                            }

                            var argsLength = arguments.length,
                                argsArray = new Array(argsLength);

                            for (let i = 0; i < argsLength; i++) {
                                argsArray[i] = arguments[i];
                            }

                            this.renderer.seekTo.apply(this.renderer, argsArray);
                        }
                    },
                    {
                        key: "updateTimeShift",
                        value: function(newTimeShift) {
                            this.options.set(n1.u, newTimeShift); //timeShift
                            this.timeShift.update();
                        }
                    },
                    {
                        key: "togglePlayPause",
                        value: function() {
                            if (!this.isPaused()) {
                                this.pause();
                                return;
                            }
                            if (!this.timeShift.isEnabled() && this.isLive()) {
                                this.seekToHead();
                            }

                            this.play();
                        }
                    },
                    {
                        key: "getTimeShift",
                        value: function() {
                            return this.timeShift;
                        }
                    },
                    {
                        key: "getTimeShiftStart",
                        value: function() {
                            return this.timeShift.getStart();
                        }
                    },
                    {
                        key: "getTimeShiftHead",
                        value: function() {
                            return this.timeShift.getLiveNowUTC();
                        }
                    },
                    {
                        key: "getLiveHeadUTC",
                        value: function() {
                            return this.timeShift.getLiveNowUTC() - this.getLiveDelay();
                        }
                    },
                    {
                        key: "getLiveNowUTC",
                        value: function() {
                            return this.timeShift.getLiveNowUTC();
                        }
                    },
                    {
                        key: "getLiveStartUTC",
                        value: function() {
                            return this.timeShift.getStart();
                        }
                    },
                    {
                        key: "getLiveDelay",
                        value: function() {
                            var renderer = this.renderer;
                            return this.isLive() && (renderer == null ? void 0 : renderer.getLiveDelay()) || 0;
                        }
                    },
                    {
                        key: "getLiveLatency",
                        value: function() {
                            var currentTime = this.getCurrentTime(),
                                liveStart = this.isLive() && !this.timeShift.isEnabled() ? 0 : this.getLiveStartUTC();
                            return this.getLiveNowUTC() - liveStart - currentTime;
                        }
                    },
                    {
                        key: "getCurrentPeriod",
                        value: function() {
                            var renderer = this.renderer;

                            return renderer == null ? void 0 : renderer.getCurrentPeriod();
                        }
                    },
                    {
                        key: "getDownloadSpeed",
                        value: function() {
                            return this.renderer.getDownloadSpeed();
                        }
                    },
                    {
                        key: "getPlaybackRate",
                        value: function() {
                            return this.renderer.getPlaybackRate();
                        }
                    },
                    {
                        key: "setPlaybackRate",
                        value: function(t) {
                            this.renderer.setPlaybackRate(t); //breakpoint here
                        }
                    },
                    {
                        key: "getOptions",
                        value: function() {
                            return this.options.options;
                        }
                    },
                    {
                        key: "throwNoSupportedRendererError",
                        value: function() {
                            this.trigger(n0.f, { //error
                                code: ERROR_NUMBERS.a[n7.a.NO_SUPPORTED_RENDERER],
                                type: n7.a.NO_SUPPORTED_RENDERER,
                                renderer: null,
                                message: "Given media file is not supported by any renderer."
                            })
                        }
                    },
                    {
                        key: "destroy",
                        value: function() {
                            this.destroyed = !0;
                            this.beforePlayTaskQueue = [];
                            this.trigger(n0.e, this.getCurrentTime()); //destroy
                            this.off();
                            document.removeEventListener("visibilitychange", this.onVisibilityChangeRef);
                            if (this.renderer) {
                                this.renderer.destroy();
                            }
                            if (-1 !== players.indexOf(this)) {
                                players.splice(players.indexOf(this), 1);
                            }
                        }
                    }]);

                return createPlayerSkeleton;
            }(C),
            n20 = n(20),
            playerInfoKeys = [],
            playerInfoWrapper = {};
        G = n20.a;

        Object.assign(playerInfoWrapper, G);
        var J,
            n25 = n(25),
            n22 = n(22),
            n17 = n(17),
            n12 = n(12),
            contentTypes = {
                VIDEO: "video",
                AUDIO: "audio",
                TEXT: "text"
            },
            logLevels = {
                ALL: "all",
                ERROR: "error",
                INFO: "info",
                TRACE: "trace",
                WARN: "warn"
            },
            loggerAlphaMappings = (J = {},
                Object(n2.a)(J, logLevels.INFO, "1"),
                Object(n2.a)(J, logLevels.WARN, "1"),
                Object(n2.a)(J, logLevels.ERROR, "1"),
                Object(n2.a)(J, logLevels.TRACE, "0.5"),
                J),
            at = {
                "video-stream": "#109fff",
                "audio-stream": "#33a700",
                manifest: "#ba0037",
                period: "#f3750f"
            },
            CustomLogger = function() {
                function customLoggerSkeleton(label, color) {
                    Object(n5.a)(this, customLoggerSkeleton);
                    this.label = label;
                    this.color = color;
                    this.enabledLevels = [];
                }
                Object(n5.b)(customLoggerSkeleton, [{
                    key: "setLevel",
                    value: function() {
                        var logger = this,
                            argsLength = arguments.length,
                            argsArray = new Array(argsLength);

                        for (let i = 0; i < argsLength; i++) {
                            argsArray[i] = arguments[i];
                        }
                        null == argsArray || argsArray.forEach((function(logLevel) {
                            if (!logger.enabledLevels.includes(logLevel)) {
                                logger.enabledLevels.push(logLevel);
                            }
                        }))
                    }
                },
                    {
                        key: "removeLevel",
                        value: function() {
                            var logger = this,
                                argsLength = arguments.length,
                                argsArray = new Array(argsLength);
                            for (let i = 0; i < argsLength; i++) {
                                argsArray[i] = arguments[i];
                            }
                            if (argsArray === null) {
                                return;
                            }

                            argsArray.forEach((function(logLevel) {
                                var index = logger.enabledLevels.indexOf(logLevel);
                                if (-1 !== index) {
                                    logger.enabledLevels.splice(index, 1);
                                }
                            }))
                        }
                    },
                    {
                        key: "info",
                        value: function(message) {
                            this._print("log", message, logLevels.INFO);
                        }
                    },
                    {
                        key: "trace",
                        value: function(message) {
                            this._print("log", message, logLevels.TRACE);
                        }
                    },
                    {
                        key: "warn",
                        value: function(message) {
                            this._print("warn", message, logLevels.WARN);
                        }
                    },
                    {
                        key: "error",
                        value: function(message) {
                            this._print("error", message, logLevels.ERROR);
                        }
                    },
                    {
                        key: "_print",
                        value: function(t, e, loggerId) {
                            if (!this.isEnabled(loggerId)) {
                                return;
                            }

                            var color = this.color || at[this.label] || "#f0f",
                                alpha = loggerAlphaMappings[loggerId],
                                colorHexValue = color.replace("#", ""),
                                is6HexDigits = 6 === colorHexValue.length,
                                red = parseInt(is6HexDigits ? colorHexValue.slice(0, 2) : colorHexValue.slice(0, 1), 16),
                                green = parseInt(is6HexDigits ? colorHexValue.slice(2, 4) : colorHexValue.slice(1, 2), 16),
                                blue = parseInt(is6HexDigits ? colorHexValue.slice(4, 6) : colorHexValue.slice(2, 3), 16),
                                backgroundColor = "rgba(".concat(red, ",").concat(green, ",").concat(blue, ",").concat(alpha, ")");

                            console[t]("%c".concat(this.label), "background: ".concat(backgroundColor, "; color: #fff; padding: 1px 2px"), e); //breakpoint here
                        }
                    },
                    {
                        key: "isEnabled",
                        value: function(selectedLogLevel) {
                            return this.enabledLevels.includes(selectedLogLevel) || this.enabledLevels.includes(logLevels.ALL);
                        }
                    }]);

                return customLoggerSkeleton;
            }(),
            loggersMap = new (function() {
                function createLoggersMapSkeleton() {
                    Object(n5.a)(this, createLoggersMapSkeleton);
                    this.loggers = [];
                    this.Level = logLevels;
                }
                Object(n5.b)(createLoggersMapSkeleton, [{
                    key: "get",
                    value: function(label, color) {
                        return this._find(label) || this._create(label, color);
                    }
                },
                    {
                        key: "_create",
                        value: function(label, color) {
                            var logger = new CustomLogger(label, color);
                            this.loggers.push(logger);

                            return logger;
                        }
                    },
                    {
                        key: "_find",
                        value: function(loggerLabel) {
                            return this.loggers.find((function(logger) {
                                return logger.label === loggerLabel;
                            }));
                        }
                    },
                    {
                        key: "getLabels",
                        value: function() {
                            return this.loggers.map((function(logger) {
                                return logger.label;
                            }));
                        }
                    }]);

                return createLoggersMapSkeleton;
            }());
        Object.assign(loggersMap, logLevels);
        var contentTypeValues = Object.values(contentTypes),
            ct = ["stpp"],
            calculateDurationInSeconds = function(dateTime) {
                if (!dateTime) {
                    return null;
                }
                var dateTimeWrapper = /^P(?:([0-9]*)Y)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(dateTime);
                if (!dateTimeWrapper) {
                    return null;
                }
                var dateTimeYDHMS = dateTimeWrapper.slice(1, 6).map((function(dateItem) {
                        return parseInt(dateItem, 10) || 0;
                    })),
                    sanitizedYDHMSArray = Object(n6.a)(dateTimeYDHMS, 4);

                return 31536e3 * sanitizedYDHMSArray[0] + 86400 * sanitizedYDHMSArray[1] + 3600 * sanitizedYDHMSArray[2] + 60 * sanitizedYDHMSArray[3] + parseFloat(dateTimeWrapper[5] || 0); //includes ms, eg. 225.42
            },
            calculateTotalSeconds = function(timeString) {
                var SMHDTimeArray = timeString.split(":").reverse(),
                    SMHDTimeMappedToInt = SMHDTimeArray.map((function(value) {
                        return parseInt(value, 10) || 0;
                    })),
                    SMHDTime = Object(n6.a)(SMHDTimeMappedToInt, 4),
                    minutes = (SMHDTime[0], SMHDTime[1]),
                    hours = SMHDTime[2];

                return 86400 * (SMHDTime[3] || 0) + 3600 * (hours || 0) + 60 * minutes + parseFloat(SMHDTimeArray[0] || 0);
            },
            toEpochSeconds = function(timeString) {
                if (!timeString) {
                    return;
                }

                var timeArray = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})(?::([0-9]*)(\.[0-9]*)?)?(?:([+\-])([0-9]{2})([0-9]{2}))?/.exec(timeString),
                    n = timeArray.slice(1, 7).map((function(t) {
                        return parseInt(t, 10);
                    })),
                    timeArrayAsInt = Object(n6.a)(n, 6),
                    year = timeArrayAsInt[0],
                    month = timeArrayAsInt[1],
                    day = timeArrayAsInt[2],
                    hours = timeArrayAsInt[3],
                    minutes = timeArrayAsInt[4],
                    seconds = timeArrayAsInt[5],
                    ms = parseFloat(timeArray[7] || 0),
                    f = Date.UTC(year, month - 1, day, hours, minutes, seconds || 0, ms);

                return new Date(f).getTime() / 1e3;
            },
            extractElementsFromXML = function(xmlNode, elementTagNameToExtract) {
                return Array.from(xmlNode.childNodes).filter((function(node) {
                    return node.tagName === elementTagNameToExtract;
                }));
            },
            extractAsClass = function(parentNode, tagNameToExtract) {
                var extractedElements = extractElementsFromXML(parentNode, tagNameToExtract);

                return (extractedElements == null ? void 0 : extractedElements[0]) || null;
            },
            padToX = function(input, requestedLength) {
                var padSymbol = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "0";
                while (input.length < requestedLength) {
                    input = "".concat(padSymbol).concat(input);
                }

                return input;
            },
            parseWithPrecision12 = function(t) {
                return parseFloat(t.toPrecision(12));
            },
            buildResourceUrl = function(adaptationSet, currentSegment) {
                var bandwidth = adaptationSet.bandwidth,
                    id = adaptationSet.id,
                    segmentTemplate = adaptationSet.segmentTemplate,
                    url = adaptationSet.url,
                    index = currentSegment.index,
                    startTime = currentSegment.startTime;

                return function(segmentUrl, identifier, segmentIndex) {
                    var identifierIndex = segmentUrl.indexOf("$".concat(identifier));
                    if (identifierIndex < 0) {
                        return segmentUrl;
                    }
                    var i = segmentUrl.indexOf("$", identifierIndex + identifier.length),
                        a = segmentUrl.indexOf("%0", identifierIndex + identifier.length),
                        o = 0;

                    if (a < 0) {
                        return segmentUrl.substring(0, identifierIndex) + segmentIndex + segmentUrl.substring(i + 1);
                    }

                    o = segmentUrl.substring(a + "%0".length, i - 1);
                    switch (segmentUrl.charAt(i - 1)) {
                        case "d":
                        case "i":
                        case "u":
                            segmentIndex = padToX(segmentIndex.toString(), o, "0");
                            break;
                        case "o":
                            segmentIndex = padToX(segmentIndex.toString(8), o, "0");
                            break;
                        case "x":
                            segmentIndex = padToX(segmentIndex.toString(16), o, "0");
                    }

                    return segmentUrl.substring(0, identifierIndex) + segmentIndex + segmentUrl.substring(i + 1);

                }([url, segmentTemplate.media].join(""), "Number", index).replace("$Time$", startTime).replace("$RepresentationID$", id).replace("$Bandwidth$", bandwidth);
            },
            findAdaptationSetType = function(adaptationSetOrRepresentation) {
                var codecs = adaptationSetOrRepresentation.getAttribute("codecs"),
                    contentType = adaptationSetOrRepresentation.getAttribute("contentType"),
                    mimeType = adaptationSetOrRepresentation.getAttribute("mimeType");

                return contentTypeValues.includes(contentType) ? contentType : ct.includes(codecs) ? contentTypes.TEXT : mimeType ? contentTypeValues.find((function(t) {
                        return -1 !== mimeType.indexOf(t);
                    }
                )) : void 0
            };
        function getMappedProperties(originalObject, enumerablePropertiesOnly) { //duplicate method
            var mappedProperties = Object.keys(originalObject);
            if (Object.getOwnPropertySymbols) {
                var propertySymbols = Object.getOwnPropertySymbols(originalObject);
                if (enumerablePropertiesOnly) {
                    propertySymbols = propertySymbols.filter((function(propertyName) {
                        return Object.getOwnPropertyDescriptor(originalObject, propertyName).enumerable;
                    }));
                }

                mappedProperties.push.apply(mappedProperties, propertySymbols);
            }
            return mappedProperties;
        }
        function Et(obj) {
            for (let i = 1; i < arguments.length; i++) {
                var originalObject = null != arguments[i] ? arguments[i] : {};

                if (i % 2) {
                    getMappedProperties(Object(originalObject), !0).forEach((function(property) {
                        Object(n2.a)(obj, property, originalObject[property]);
                    }))
                } else if (Object.getOwnPropertyDescriptors) {
                    Object.defineProperties(obj, Object.getOwnPropertyDescriptors(originalObject));
                } else {
                    getMappedProperties(Object(originalObject)).forEach((function(propertyName) {
                        Object.defineProperty(obj, propertyName, Object.getOwnPropertyDescriptor(originalObject, propertyName));
                    }))
                }
            }

            return obj;
        }
        SegmentManager.prototype = Object.create(n14.a.prototype);
        function SegmentManager(player, currentContentType, getCurrentTimeAndBufferLengthF) {
            var segmentManager = this,
                options = player.options,
                streamWithCredentials = options.get(n1.t), //streamWithCredentials
                manifestManagerComponent = player.getComponent(n9.a), //manifest-manager
                mediaElementComponent = player.getComponent(n9.d), //media-element
                logger = loggersMap.get("".concat(currentContentType, "-stream")),
                httpConfig = options.get(n1.i), //httpConfig
                currentFragment = httpConfig.fragment,
                fragmentHeaders = currentFragment == null ? void 0 : currentFragment.headers,
                currentAdaptationSetOrRepresentation = null,
                aSegment = null,
                segmentQueue = [],
                b = {}, //something segment
                processingRequest = !1,
                initLoaded = !1,
                cancelRequest = null,
                paused = !1,
                stopped = !1,
                adaptationSetDetails = null,
                bandwidth = 0,
                currentPeriod = void 0;

            function cleanup() {
                pauseF();
                abortF();
                aSegment = null;
                segmentQueue = [];
                cancelRequest = null;
                initLoaded = !1;
            }
            function startF() {
                initLoaded = !1;
                stopped = !1;
                nextF();
            }
            function calculateNextSegmentTime(t, n) {
                var period,
                    queueLength = getQueueLengthFromTimeF(t),
                    a = aSegment || {},
                    start = a.start,
                    duration = a.duration,
                    u = t + (queueLength > n ? queueLength : n);

                if (null === aSegment || currentContentType === contentTypes.AUDIO || currentContentType === contentTypes.TEXT) {
                    u = t + n;
                }

                if (null !== aSegment && u <= start + duration) {
                    u = start + duration + .01;
                }

                period = currentPeriod;

                if ((period == null ? void 0 : period.end) && aSegment) {
                    var l = currentAdaptationSetOrRepresentation.segmentList,
                        c = l[l.length - 1],
                        startPositionMatches = (c == null ? void 0 : c.start) === aSegment.start,
                        h = manifestManagerComponent.getNextPeriod(currentPeriod);

                    if (startPositionMatches && h) {
                        u = h.start;
                    }
                }
                if (!(u - t > manifestManagerComponent.maxBufferLength + 1)) {
                    return u;
                }
            }
            function nextF() {
                return R.apply(this, arguments);
            }
            function R() {
                return (R = Object(n3.a)(n3.b.mark((function t() {
                        var currentTimeAndBufferLengthWrapper, currentSegmentTime, bufferLength, nextSegmentTime, nextPeriod, nextItemBandwidth, initSegment, currentSegment;
                        return n3.b.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                        case 0:
                                            if (!(paused || stopped || processingRequest)) {
                                                t.next = 2;
                                                break;
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            currentTimeAndBufferLengthWrapper = getCurrentTimeAndBufferLengthF();
                                            currentSegmentTime = currentTimeAndBufferLengthWrapper.time;
                                            bufferLength = currentTimeAndBufferLengthWrapper.bufferLength;
                                            nextSegmentTime = calculateNextSegmentTime(currentSegmentTime, bufferLength);

                                            if (!isNaN(nextSegmentTime)) {
                                                t.next = 6;
                                                break;
                                            }
                                            return t.abrupt("return");
                                        case 6:
                                            nextPeriod = manifestManagerComponent.findPeriodByTime(nextSegmentTime);
                                            var nextPeriodId = null == nextPeriod ? void 0 : nextPeriod.id;

                                            if (currentPeriod && currentPeriod.id !== (nextPeriodId)) {
                                                stopped = !0;
                                                initLoaded = !1;
                                                logF("NEXT PERIOD: ".concat(nextPeriod.id, ", PREV: ").concat(currentPeriod.id));
                                            }

                                            if (initLoaded || !nextPeriod) {
                                                t.next = 28;
                                                break;
                                            }

                                            if (currentContentType === contentTypes.VIDEO) {
                                                nextItemBandwidth = manifestManagerComponent.getVideoNearestBandwidth(bandwidth, nextPeriod);
                                            } else {
                                                nextItemBandwidth = bandwidth;
                                            }

                                            currentAdaptationSetOrRepresentation = manifestManagerComponent.getRepresentationByBandwidth(nextItemBandwidth, currentContentType, nextPeriod, adaptationSetDetails)

                                            if (currentAdaptationSetOrRepresentation) {
                                                t.next = 13;
                                                break;
                                            }

                                            return t.abrupt("return");
                                        case 13:
                                            segmentManager.trigger(n0.V, nextPeriod); //periodChanging
                                            segmentManager.trigger("representationChanged", currentAdaptationSetOrRepresentation, nextPeriod);
                                            logF("START LOADING INIT: ".concat(currentAdaptationSetOrRepresentation.bandwidth, ", PERIOD: ").concat(nextPeriod.id));
                                            processingRequest = !0;
                                            t.next = 19;

                                            return U(currentAdaptationSetOrRepresentation, nextPeriod);
                                        case 19:
                                            initSegment = t.sent;
                                            stopped = !1;
                                            cancelRequest = null;
                                            processingRequest = !1;

                                            if (initSegment) {
                                                t.next = 25;
                                                break;
                                            }
                                            return t.abrupt("return");
                                        case 25:
                                            logF("LOADED INIT: ".concat(currentAdaptationSetOrRepresentation.bandwidth, ", PERIOD: ").concat(nextPeriod.id));
                                            initLoaded = !0;
                                            segmentQueue.push(initSegment);
                                        case 28:
                                            currentPeriod = nextPeriod;
                                            logF("LOOKING FOR SEGMENT: [".concat(currentAdaptationSetOrRepresentation.id, "]: start: ").concat(nextSegmentTime, ", bandwidth: ").concat(currentAdaptationSetOrRepresentation.bandwidth / 1e3));
                                            currentSegment = findSegmentByTimePosition(nextSegmentTime, currentAdaptationSetOrRepresentation);

                                            if (currentSegment) {
                                                t.next = 33;
                                                break;
                                            }
                                            return t.abrupt("return");
                                        case 33:
                                            logF("FOUND SEGMENT: [".concat(currentAdaptationSetOrRepresentation.id, "]: start: ").concat(currentSegment.start, ", id: ").concat(currentSegment.index, ", bandwidth: ").concat(currentAdaptationSetOrRepresentation.bandwidth / 1e3));
                                            if (!(null !== aSegment && aSegment.start >= currentSegment.start)) {
                                                t.next = 36;
                                                break;
                                            }
                                            return t.abrupt("return");
                                        case 36:
                                            return t.abrupt("return", V(currentSegment, currentAdaptationSetOrRepresentation, bufferLength).then((function() {
                                                    return currentSegment;
                                                }
                                            )));
                                        case 37:
                                        case "end":
                                            return t.stop();
                                    }
                            }
                        ), t)
                    }
                )))).apply(this, arguments)
            }
            function pauseF() {
                paused = !0;
            }
            function abortF() {
                cancelRequest ? cancelRequest() : processingRequest = !1;
            }
            function flushF() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];

                if (t) {
                    segmentQueue = [];
                    return;
                }

                segmentQueue = segmentQueue.filter((function(t) {
                    return -1 === t.index;
                }));
            }
            function getQueueLengthFromTimeF() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return segmentQueue.filter((function(e) {
                        var n = e.start,
                            r = e.duration;
                        return n >= t || n < t && n + r > t;
                    }
                )).reduce((function(e, n, r) {
                        var i = n.start,
                            a = n.duration;

                        if (0 === r) {
                            e -= t - i;
                        }

                        return e + a;
                    }
                ), 0)
            }
            function findSegmentByTimePosition(requestedTimePosition, representation) {
                if (isNaN(requestedTimePosition)) {
                    return null;
                }
                requestedTimePosition = parseWithPrecision12(requestedTimePosition);
                if (!representation) {
                    var period = manifestManagerComponent.findPeriodByTime(requestedTimePosition),
                        a = bandwidth;
                    if (currentContentType === contentTypes.VIDEO) {
                        a = manifestManagerComponent.getVideoNearestBandwidth(bandwidth, period);
                    }

                    representation = manifestManagerComponent.getRepresentationByBandwidth(a, currentContentType, period, adaptationSetDetails);
                }
                var allSegments = (representation == null ? void 0 : representation.segmentList) || [];
                if (!allSegments.length) {
                    return null;
                }
                if (0 === requestedTimePosition || requestedTimePosition < allSegments[0].start) {
                    requestedTimePosition = parseWithPrecision12(allSegments[0].start);
                }

                for (let currentIndex, start = 0, end = allSegments.length - 1; start <= end; ) {
                    var currentSegment = allSegments[currentIndex = (start + end) / 2 | 0],
                        startOfSegment = currentSegment.start,
                        duration = currentSegment.duration,
                        startOfSegmentFixed = parseWithPrecision12(startOfSegment),
                        endOfSegmentFixed = parseWithPrecision12(startOfSegmentFixed + duration);

                    if (requestedTimePosition >= startOfSegmentFixed && requestedTimePosition < endOfSegmentFixed) {
                        return currentSegment;
                    }

                    if (startOfSegmentFixed > requestedTimePosition) {
                        end = currentIndex - 1;
                    } else {
                        start = currentIndex + 1;
                    }
                }

                return null;
            }
            function getSegmentList() {
                var adaptationSetOrRepresentation = currentAdaptationSetOrRepresentation; //wtf...
                return adaptationSetOrRepresentation == null ? void 0 : adaptationSetOrRepresentation.segmentList;
            }
            function U(currentRepresentation, sourceBuffer) {
                var nextItem = "".concat(sourceBuffer.id, "_").concat(currentRepresentation.adaptationSetId, "_").concat(currentRepresentation.id);
                if (b[nextItem]) {
                    return Promise.resolve(b[nextItem]);
                }
                var a = function(representation) {
                        var representationBandwidth = representation.bandwidth,
                            representationId = representation.id,
                            segmentTemplate = representation.segmentTemplate;
                        return [representation.url, segmentTemplate.initialization].join("").replace("$RepresentationID$", representationId).replace("$Bandwidth$", representationBandwidth);
                    }(currentRepresentation),
                    appendWStart = sourceBuffer.start,
                    appendWEnd = sourceBuffer.end,
                    currentBandwidth = currentRepresentation.bandwidth,
                    currentRepresentationId = currentRepresentation.id,
                    template = currentRepresentation.segmentTemplate,
                    presentationTimeOffset = template.presentationTimeOffset,
                    timescale = template.timescale,
                    segmentInfoWrapper = {
                        appendWindowStart: appendWStart,
                        appendWindowEnd: appendWEnd || 1 / 0,
                        bandwidth: currentBandwidth,
                        duration: 0,
                        index: -1,
                        mediaType: currentContentType,
                        offset: appendWStart - (presentationTimeOffset / timescale || 0),
                        representationId: currentRepresentationId,
                        periodId: sourceBuffer.id,
                        type: "initialization"
                    };
                return downloadNextSegment(a).then((function(segm) {
                        var resultData = segm.data,
                            metric = segm.metric,
                            s = Et({}, segmentInfoWrapper, {
                                data: resultData
                            });

                        b[nextItem] = s;
                        segmentManager.trigger("segmentDownloaded", Et({}, metric, {
                            segmentInfo: segmentInfoWrapper
                        }));

                        return s;
                    }
                )).catch((function(t) {
                        var error = t.error,
                            metric = t.metric,
                            xhr = t.xhr;

                        if (error !== n10.b) {
                            return;
                        }

                        segmentManager.trigger("failedToLoadSegment", Et({}, metric, {
                            segmentInfo: segmentInfoWrapper
                        }), xhr)
                    }
                ))
            }
            function V(currentSegment, currentRepresentation, currentBuffer) {
                var resourceUrl = buildResourceUrl(currentRepresentation, currentSegment),
                    segmentStart = currentSegment.start,
                    duration = currentSegment.duration,
                    index = currentSegment.index,
                    currentRepresentationId = currentRepresentation.id,
                    bandwidth = currentRepresentation.bandwidth,
                    mediaType = currentRepresentation.mediaType,
                    periodId = currentRepresentation.periodId;
                processingRequest = !0;
                var segmentInfoArray = {
                    bandwidth: bandwidth,
                    duration: duration,
                    index: index,
                    mediaType: mediaType,
                    representation: currentRepresentation,
                    representationId: currentRepresentationId,
                    start: segmentStart,
                    periodId: periodId
                };
                return downloadNextSegment(resourceUrl, {
                    onProgress: function(t) {
                        if (t.bps <= 0 || t.loaded <= 5e3) {
                            return;
                        }

                        segmentManager.trigger("segmentProgress", Et({}, t, {
                            status: n10.c,
                            buffer: currentBuffer
                        }))
                    }
                }).then((function(segm) {
                        var segmentData = segm.data,
                            metric = segm.metric;

                        aSegment = currentSegment;
                        metric.segmentInfo = segmentInfoArray;
                        logger.info("[".concat(mediaElementComponent.getCurrentTime(), "] DOWNLOADED SEGMENT: [").concat(currentRepresentationId, "]: start: ").concat(segmentInfoArray.start, ", id: ").concat(index, ", bandwidth: ").concat(bandwidth / 1e3));
                        segmentQueue.push(Et({}, segmentInfoArray, {
                            data: segmentData
                        }))
                        segmentManager.trigger("segmentDownloaded", metric);
                    }
                )).catch((function(t) {
                        var e = t.error,
                            metric = t.metric,
                            xhr = t.xhr;

                        if (e === n10.b) {
                            metric.segmentInfo = segmentInfoArray;
                            segmentManager.trigger("failedToLoadSegment", metric, xhr);
                        }
                    }
                )).then((function() {
                        cancelRequest = null;
                        processingRequest = !1;
                    }
                ))
            }
            function downloadNextSegment(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    currentHttpConfig = httpConfig || {},
                    currentFragment = currentHttpConfig.fragment,
                    i = void 0 === currentFragment ? {} : currentFragment,
                    retryAttempts = i.retryAttempts,
                    retryDelay = i.retryDelay,
                    useCredentials = i.withCredentials;
                return n10.d.getBinary(t, Et({}, e, {
                        cancelToken: new n10.d.CancelToken((function(t) {
                            return cancelRequest = t
                        })),
                        withCredentials: streamWithCredentials || !!useCredentials
                    },
                    retryAttempts && { retryAttempts: retryAttempts },
                    {},
                    retryDelay && { retryDelay: retryDelay },
                    { headers: fragmentHeaders }
                ))
            }
            function logF(t) {
                logger.trace("[".concat(mediaElementComponent.getCurrentTime(), "] ").concat(t));
            }
            return {
                on: segmentManager.on.bind(segmentManager),
                off: segmentManager.off.bind(segmentManager),
                trigger: segmentManager.trigger.bind(segmentManager),
                switchAdaptation: function(adaptSet, e) {
                    var adaptationSetId = adaptSet.id,
                        adaptationSetLang = adaptSet.lang;

                    if (adaptationSetId === void 0) {
                        return;
                    }

                    adaptationSetDetails = {
                        id: adaptationSetId,
                        lang: adaptationSetLang
                    };
                    currentAdaptationSetOrRepresentation = null;
                    stopped = !1;

                    if (e) {
                        cleanup();
                        nextF();
                    }

                    logF("START SWITCHING: [".concat(adaptationSetId, "] ").concat(adaptationSetLang));
                },
                switchProfile: function(adaptationSetBandwidth, e) {
                    logF("START SWITCHING PROFILE: ".concat(adaptationSetBandwidth));
                    bandwidth = adaptationSetBandwidth;

                    if (!e) {
                        return;
                    }

                    cleanup();
                    nextF();
                },
                getAdaptation: function() {
                    var adaptationSetId = currentAdaptationSetOrRepresentation.adaptationSetId;
                    return manifestManagerComponent.getAdaptationSetById(adaptationSetId, currentPeriod);
                },
                getBandwidth: function() {
                    return bandwidth;
                },
                getPeriod: function() {
                    var adaptationSet = currentAdaptationSetOrRepresentation;
                    return adaptationSet == null ? void 0 : adaptationSet.periodId;
                },
                getRepresentation: function() {
                    return currentAdaptationSetOrRepresentation;
                },
                findSegmentByPosition: findSegmentByTimePosition,
                getNextSegmentToSwitch: function(time) {
                    var nextSegment, currentSegment, availableSegments, i,
                        segment = findSegmentByTimePosition(Math.round(time)),
                        o = 0, //duration?
                        s = 0;

                    if (null === segment) {
                        return null;
                    }

                    while (o < segment.duration && s < 4) {
                        currentSegment = segment;
                        availableSegments = void 0;
                        availableSegments = getSegmentList();
                        i = availableSegments.indexOf(currentSegment) + 1;
                        o = (nextSegment = i >= availableSegments.length - 1 ? availableSegments[availableSegments.length - 1] : availableSegments[i]).start - time;
                        segment = nextSegment;
                        s++;
                    }

                    return nextSegment;
                },
                getQueue: function() {
                    return segmentQueue;
                },
                getQueueStart: function() {
                    return segmentQueue.length ? segmentQueue[0].start : null;
                },
                getAllSegments: getSegmentList,
                getQueueLengthFromTime: getQueueLengthFromTimeF,
                start: startF,
                stop: function() {
                    stopped = !0;
                    abortF();
                    aSegment = null;
                    segmentQueue = [];
                    initLoaded = !1;
                },
                next: nextF,
                pause: pauseF,
                abort: abortF,
                update: function() {
                    abortF();
                    flushF(!1);
                    aSegment = null;
                    nextF();
                },
                flush: flushF,
                resume: function() {
                    if (stopped) {
                        return !1;
                    }
                    paused = !1;

                    if (!initLoaded && !processingRequest) {
                        startF();
                    }
                },
                restart: function() {
                    b = {};
                    cleanup();
                },
                isLastSegment: function(segment) {
                    var segmentIndex = segment.index,
                        adaptationSet = currentAdaptationSetOrRepresentation || {},
                        period = adaptationSet.period,
                        lastSegment = adaptationSet.lastSegment;

                    return period === manifestManagerComponent.getLastPeriod() && (null == lastSegment ? void 0 : lastSegment.index) === segmentIndex;
                },
                isProcessingRequest: function() {
                    return processingRequest;
                }
            }
        }
        var n15 = n(15);
        var isNativeReflectConstruct = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], (function() {} )));
                    return !0;
                } catch (t) {
                    return !1
                }
            },
            Ot = Object(n15.a)((function(module) {
                function _construct(parent, args, Class) {
                    if (isNativeReflectConstruct()) {
                        module.exports = _construct = Reflect.construct;
                    } else {
                        module.exports = _construct = function(parent, args, Class) {
                            var argsArray = [null];
                            argsArray.push.apply(argsArray, args);
                            var instance = new (Function.bind.apply(parent, argsArray));

                            if (Class) {
                                Object(n4.f)(instance, Class.prototype);
                            }

                            return instance;
                        };
                    }

                    return _construct.apply(null, arguments);
                }
                module.exports = _construct;
            })),
            redgalaxyPlayerBitrateLabel = "redgalaxy-player-bitrate",
            SegmentWrapper = function createSegmentWrapperSkeleton() {
                Object(n5.a)(this, createSegmentWrapperSkeleton);
                this.start = null;
                this.startTime = null;
                this.duration = null;
                this.index = null;
            },
            calculateTimeOffset = function() {
                var segmentTemplate = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    presentationTimeOffset = segmentTemplate.presentationTimeOffset,
                    timescale = segmentTemplate.timescale;

                return presentationTimeOffset / timescale || 0;
            },
            createSegmentList = function(adaptationSetOrRepresentation, period) {
                if (!adaptationSetOrRepresentation.hasOwnSegments) {
                    return;
                }

                var n = adaptationSetOrRepresentation.duration,
                    isIndexMode = adaptationSetOrRepresentation.indexMode,
                    currentSegmentTemplate = adaptationSetOrRepresentation.segmentTemplate,
                    periodDuration = period.duration,
                    startTime = period.start,
                    segmentDuration = currentSegmentTemplate.segmentDuration,
                    startNumber = currentSegmentTemplate.startNumber,
                    timeline = currentSegmentTemplate.timeline,
                    timescale = currentSegmentTemplate.timescale,
                    timePoints = (timeline || {}).timePoints,
                    f = adaptationSetOrRepresentation.isDynamic && !periodDuration,
                    h = startTime * timescale,
                    startNum = startNumber,
                    g = [];

                if (isIndexMode && f) {
                    return g;
                }
                if (segmentDuration) {
                    var m = periodDuration || n,
                        v = Math.ceil(m / (segmentDuration / timescale));
                    g = Array.from({ length: v }).map((function(t, e) {
                            var segment = new SegmentWrapper;

                            segment.startTime = h + e * segmentDuration;
                            segment.start = segment.startTime / timescale;
                            segment.duration = segmentDuration / timescale;
                            segment.index = startNum + e;

                            return segment;
                        }
                    ))
                } else if (timePoints) {
                    var y = timePoints[0],
                        b = (y == null ? void 0 : y.startTime) || 0,
                        E = b - calculateTimeOffset(currentSegmentTemplate) * timescale + startTime * timescale,
                        timePointsLength = timePoints.length;

                    for (let i = 0; i < timePointsLength; i++) {
                        var S = timePoints[i].repeat || 0;
                        for (let j = 0; j <= S; j++) {
                            var segment = new SegmentWrapper,
                                w = timePoints[i].duration;

                            segment.index = startNum;
                            segment.startTime = b;
                            segment.start = E / timescale;
                            segment.duration = w / timescale;
                            g.push(segment);
                            startNum++;
                            b += w;
                            E += w;
                        }
                    }
                }

                return g;
            },
            updateTimeLine = function(adaptationSetOrRepresentation, requestedTime) {
                var availabilityStartTime = adaptationSetOrRepresentation.availabilityStartTime,
                    dvrWindow = adaptationSetOrRepresentation.dvrWindow, //DVR = Digital Video Recorder
                    segmentList = adaptationSetOrRepresentation.segmentList,
                    segmentTemplate = adaptationSetOrRepresentation.segmentTemplate,
                    timeShiftBufferDepth = adaptationSetOrRepresentation.timeShiftBufferDepth,
                    timescale = segmentTemplate.timescale,
                    startNumber = segmentTemplate.startNumber,
                    c = dvrWindow > 0 ? dvrWindow : timeShiftBufferDepth,
                    timeOffset = calculateTimeOffset(segmentTemplate),
                    segmentDuration = segmentTemplate.segmentDuration / timescale,
                    h = Math.max(0, Math.ceil(availabilityStartTime - timeOffset)),
                    lastSegment = function(segments) {
                        return segments && segments.length ? segments[segments.length - 1] : null;
                    }(segmentList),
                    g = startNumber,
                    m = timeOffset ? requestedTime - (timeOffset + h) : c,
                    v = timeOffset;

                if (!timeOffset) {
                    v = requestedTime - h - c;
                    g += Math.floor(v / segmentDuration);
                }
                if (lastSegment) {
                    m = requestedTime - (h + timeOffset + lastSegment.start + segmentDuration);
                    v = lastSegment.start + segmentDuration + timeOffset;
                    g = lastSegment.index + 1;
                }

                var y = Math.ceil(m / segmentDuration);

                if (!y) {
                    return;
                }

                var b = Array.from({
                    length: Math.min(1e5, y)
                }).map((function(t, e) {
                        var segment = new SegmentWrapper,
                            r = parseWithPrecision12(v + e * segmentDuration);

                        segment.startTime = r + h;
                        segment.start = r - timeOffset;
                        segment.duration = segmentDuration;
                        segment.index = g + e;

                        return segment;
                    }
                ));

                segmentList.push.apply(segmentList, Object(n8.a)(b));
            };

        function isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], (function() {} )));
                return !0;
            } catch (t) {
                return !1;
            }
        }
        var Period = function(t) {
                Object(n4.a)(createPeriodSkeleton, t);
                var periodSkeletonCreationF = createPeriodSkeleton,
                    createPeriodF = function() {
                        var period,
                            periodSkeletonF = Object(n4.b)(periodSkeletonCreationF);
                        if (isNativeReflectConstruct()) {
                            var constructor = Object(n4.b)(this).constructor;
                            period = Reflect.construct(periodSkeletonF, arguments, constructor);
                        } else {
                            period = periodSkeletonF.apply(this, arguments);
                        }

                        return Object(n4.c)(this, period);
                    }

                function createPeriodSkeleton() {
                    var period;
                    Object(n5.a)(this, createPeriodSkeleton);
                    period = createPeriodF.call(this);
                    period.id = null;
                    period.segmentList = null;
                    period.adaptationSets = [];
                    period.timeline = null;
                    period.baseUrl = null;
                    period.start = null;
                    period.end = null;
                    period.duration = null;
                    period.segmentTemplate = null;
                    period.eventStreams = [];

                    return period;
                }
                Object(n5.b)(createPeriodSkeleton, [{
                    key: "createEvents",
                    value: function(t) {
                        var period = this;

                        this.eventStreams = t.map((function(t) {
                            var eventElements = extractElementsFromXML(t, "Event"),
                                timescaleInSeconds = t.getAttribute("timescale") || 1e3; //??
                            return Object(n8.a)(eventElements).map((function(eventElement) {
                                    var eventStream = new EventStream,
                                        presentationTime = parseInt(eventElement.getAttribute("presentationTime")) / timescaleInSeconds;

                                    eventStream.id = eventElement.getAttribute("id");
                                    eventStream.presentationTime = presentationTime;
                                    eventStream.start = period.start + presentationTime;
                                    eventStream.messageData = eventElement.getAttribute("messageData") || eventElement.textContent;
                                    eventStream.eventData = eventElement.textContent;
                                    eventStream.event = eventElement.getAttribute("event");

                                    return eventStream;
                                }
                            ))
                        }))
                    }
                }]);

                return createPeriodSkeleton;
            }(n14.a),
            EventStream = function createEventStreamSkeletonF() {
                Object(n5.a)(this, createEventStreamSkeletonF);
                this.id = void 0;
                this.start = void 0;
                this.messageData = void 0;
                this.eventData = void 0;
                this.fired = !1;
            },
            Timeline = function() {
                function createTimelineSkeleton() {
                    Object(n5.a)(this, createTimelineSkeleton);
                    this.timePoints = [];
                }
                Object(n5.b)(createTimelineSkeleton, [{
                    key: "parse",
                    value: function(allTimePoints) {
                        this.timePoints = allTimePoints.map((function(timePoint, index) {
                            var segment = new Segment; //holds 'duration', 'index', 'repeat' and 'startTime'
                            segment.index = index;
                            segment.duration = parseInt(timePoint.getAttribute("d"));
                            segment.startTime = parseInt(timePoint.getAttribute("t"));
                            segment.repeat = parseInt(timePoint.getAttribute("r"));

                            return segment;
                        }))
                    }
                }]);
                return createTimelineSkeleton;
            }();
        function Segment() {
            this.index = null;
            this.startTime = null;
            this.duration = null;
            this.repeat = null;
        }
        var SegmentTemplate = function createSegmentTemplateSkeleton() {
                Object(n5.a)(this, createSegmentTemplateSkeleton);
                this.timescale = 1;
                this.presentationTimeOffset = 0;
                this.segmentDuration = null;
                this.initialization = null;
                this.media = null;
                this.duration = null;
                this.startNumber = 1;
                this.timeline = null;
                this.hasIndex = !1;
                this.hasTimeline = !1;
            },
            MPDWrapper = function createMPDWrapperSkeleton() {
                Object(n5.a)(this, createMPDWrapperSkeleton);
                this.duration = null;
                this.maxSegmentDuration = 0;
                this.minBufferTime = 6;
                this.periods = [];
                this.baseUrl = null;
                this.location = null;
                this.type = null;
                this.minimumUpdatePeriod = null;
                this.maxSegmentDuration = null;
                this.publishTime = null;
                this.startTime = 0;
                this.availabilityStartTime = 0;
                this.availabilityEndTime = 0;
                this.UTCTiming = null;
                this.timeShiftBufferDepth = null;
                this.suggestedPresentationDelay = null;
            },
            AdaptationSet = function createAdaptationSetSkeleton() {
                Object(n5.a)(this, createAdaptationSetSkeleton);
                this.period = null;
                this.availabilityEndTime = null;
                this.url = null;
                this.minBufferTime = null;
                this.duration = 0;
                this.publishTime = null;
                this.suggestedPresentationDelay = null;
                this.presentationTimeOffset = 0;
                this.timeShiftBufferDepth = null;
                this.segmentTemplate = null;
                this.codecs = null;
                this.mimeType = null;
                this.contentType = null;
                this.type = null;
                this.segmentList = null;
                this.lang = null;
                this.representations = [];
                this.availabilityStartTime = null;
                this.indexMode = !1;
                this.dvrWindow = -1;
                this.hasOwnSegments = !0;
                this.unsupportedCodecs = [];
            },
            Representation = function createRepresentationSkeleton() {
                Object(n5.a)(this, createRepresentationSkeleton);
                this.id = void 0;
                this.adaptationSetId = void 0;
                this.period = void 0;
                this.bandwidth = void 0;
                this.mimeType = void 0;
                this.width = void 0;
                this.height = void 0;
                this.codecs = void 0;
                this.mimeCodec = void 0;
                this.mediaType = void 0;
                this.url = void 0;
                this.segmentList = void 0;
                this.segmentTemplate = void 0;
                this.hasOwnSegments = !0;
            };
        function MpdParser(player) {
            var drmConfig, supportedDrmSystems;

            this.mpd = null;
            this.player = player;
            this.options = player.options;
            this.timeShift = player.timeShift;
            this.mediaItem = player.mediaItem;
            drmConfig = this.player.mediaItem.getDrm();
            this.widevineConfig = (drmConfig == null ? void 0 : drmConfig.widevine) || {};
            supportedDrmSystems = this.player.supportedDrmSystems;

            this.widevineSupportedConfigs = supportedDrmSystems == null ? void 0 : supportedDrmSystems.filter((function(drm) {
                return drm.keySystem === supportedDrmTechnologies.WIDEVINE;
            }));
        }
        function buildRequestUrl(recreatedXmlElementAsClass, url) {
            var textContent, baseUrlElement = extractAsClass(recreatedXmlElementAsClass, "BaseURL"), result = null;

            if (null === baseUrlElement) {
                return result;
            }

            if (null === (textContent = baseUrlElement.textContent)) {
                return result;
            }

            if (Object(n12.b)(textContent)) {
                result = textContent;
            } else {
                result = [url.slice(0, url.lastIndexOf("/")), textContent].join("/");
                if (textContent.startsWith("/")) {
                    try {
                        result = "".concat(new URL(url).origin).concat(textContent);
                    } catch (t) {}
                }
            }

            return result;
        }
        function getMappedProperties(originalObject, enumerablePropertiesOnly) { //duplicate method
            var mappedProperties = Object.keys(originalObject);
            if (Object.getOwnPropertySymbols) {
                var propertySymbols = Object.getOwnPropertySymbols(originalObject);
                if (enumerablePropertiesOnly) {
                    propertySymbols = propertySymbols.filter((function(propertyName) {
                        return Object.getOwnPropertyDescriptor(originalObject, propertyName).enumerable;
                    }));
                }

                mappedProperties.push.apply(mappedProperties, propertySymbols);
            }

            return mappedProperties;
        }
        function isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], (function() {} )));
                return !0;
            } catch (t) {
                return !1
            }
        }
        MpdParser.prototype = {
            parse: function(fullMPDAsText, e, mpdHolder) {
                var locationConfig, parser = this;

                this.mpd = new MPDWrapper;
                this.mpd.dvrWindow = this.timeShift.getDvrWindow();

                var a = (new DOMParser).parseFromString(fullMPDAsText, "text/xml"),
                    mpdWrapper = extractAsClass(a, "MPD");

                if (null === mpdWrapper) {
                    return null;
                }
                if (!mpdHolder) {
                    mpdHolder = e;
                }

                mpdHolder = mpdHolder.split("?")[0];
                this.mpd.timeStamp = (new Date).getTime();
                this.mpd.responseUrl = mpdHolder;
                this.mpd.type = mpdWrapper.getAttribute("type");
                this.mpd.duration = calculateDurationInSeconds(mpdWrapper.getAttribute("mediaPresentationDuration"));
                this.mpd.mediaPresentationDuration = calculateDurationInSeconds(mpdWrapper.getAttribute("mediaPresentationDuration"));
                this.mpd.minBufferTime = calculateDurationInSeconds(mpdWrapper.getAttribute("minBufferTime")) || 0;
                this.mpd.minimumUpdatePeriod = calculateDurationInSeconds(mpdWrapper.getAttribute("minimumUpdatePeriod"));
                this.mpd.maxSegmentDuration = calculateDurationInSeconds(mpdWrapper.getAttribute("maxSegmentDuration"));
                this.mpd.suggestedPresentationDelay = calculateDurationInSeconds(mpdWrapper.getAttribute("suggestedPresentationDelay")) || 0;
                this.mpd.timeShiftBufferDepth = calculateDurationInSeconds(mpdWrapper.getAttribute("timeShiftBufferDepth")) || 0;
                locationConfig = extractAsClass(mpdWrapper, "Location");
                this.mpd.location = locationConfig == null ? void 0 : locationConfig.textContent;
                this.mpd.periods = [];
                this.mpd.availabilityStartTime = toEpochSeconds(mpdWrapper.getAttribute("availabilityStartTime")) || 0;
                var utcTimingConfig = extractAsClass(mpdWrapper, "UTCTiming");
                utcTimingConfig && (this.mpd.utcTiming = {
                    schemeIdUri: utcTimingConfig.getAttribute("schemeIdUri"),
                    value: utcTimingConfig.getAttribute("value")
                });
                var resourceUrl = buildRequestUrl(mpdWrapper, mpdHolder);
                if (null === this.mpd.duration) {
                    this.mpd.duration = Number.MAX_VALUE;
                }

                if (null !== this.mpd.mediaPresentationDuration) {
                    this.mpd.duration = this.mpd.mediaPresentationDuration;
                }

                this.mpd.availabilityStartTime = toEpochSeconds(mpdWrapper.getAttribute("availabilityStartTime")) || 0;
                this.mpd.availabilityEndTime = toEpochSeconds(mpdWrapper.getAttribute("availabilityEndTime")) || 0;

                if (this.mpd.availabilityStartTime && this.mpd.mediaPresentationDuration && !this.mpd.availabilityEndTime) {
                    this.mpd.availabilityEndTime = this.mpd.availabilityStartTime + this.mpd.mediaPresentationDuration;
                }

                this.mpd.startTime = 0;
                this.mpd.publishTime = mpdWrapper.getAttribute("publishTime");
                var availablePeriods = Array.from(extractElementsFromXML(mpdWrapper, "Period") || []).map((function(period) {
                    return parser.createPeriod(period, resourceUrl, mpdHolder);
                }));

                availablePeriods.forEach((function(period, e) {
                    var n = availablePeriods[e - 1] || {};

                    if (n) {
                        n.end = period.start;
                        n.duration = period.start - n.start;
                    }

                    period.adaptationSets.forEach((function(adaptationSet) {
                        adaptationSet.segmentList = createSegmentList(adaptationSet, period);
                        adaptationSet.representations.forEach((function(representation) {
                            representation.segmentList = createSegmentList(representation, period);
                            if (!representation.hasOwnSegments) {
                                representation.segmentList = adaptationSet.segmentList;
                            }
                        }))
                    }))
                }));
                var d = this.widevineConfig.multikey; //breakpoint here
                if (d && this.widevineSupportedConfigs.length) {
                    var f = availablePeriods.flatMap((function(period) {
                            var adaptationSets = period.adaptationSets;
                            return null == adaptationSets ? void 0 : adaptationSets.flatMap((function(adaptationSet) {
                                return adaptationSet.representations;
                            }))
                        })).filter((function(t) {
                            return t.mediaType === contentTypes.VIDEO;
                        })).sort((function(t, e) {
                            return e.height - t.height;
                        })),
                        h = Object(n6.a)(f, 1)[0],
                        p = h && d.find((function(t) {
                            return t.maxHeight >= h.height;
                        }));
                    this.widevineConfig.multikeySrc = null == p ? void 0 : p.src; //breakpoint here
                }
                this.mpd.periods = availablePeriods;

                return this.mpd;
            },
            createPeriod: function(initialPeriodSkeleton, e, fullUrl) {
                var period = new Period,
                    adaptationSets = extractElementsFromXML(initialPeriodSkeleton, "AdaptationSet"),
                    a = buildRequestUrl(initialPeriodSkeleton, fullUrl); //breakpoint here

                if (a === null) {
                    a = e;
                }

                period.id = initialPeriodSkeleton.getAttribute("id") || "period_".concat(Date.now());
                period.start = calculateDurationInSeconds(initialPeriodSkeleton.getAttribute("start"));
                period.baseUrl = a || function(url) {
                    return url.substring(0, url.lastIndexOf("/") !== -1 ? url.lastIndexOf("/") + 1 : url.length);
                }(fullUrl);
                period.segmentTemplate = this.createSegmentTemplate(initialPeriodSkeleton);
                this.createAdaptationSets(this.mpd, period, adaptationSets);
                var eventStream = extractElementsFromXML(initialPeriodSkeleton, "EventStream");
                eventStream.length && period.createEvents(eventStream);

                return period;
            },
            createAdaptationSets: function(mpdOrManifest, period, adaptationSetsList) {
                var currentTrackId = 1,
                    ii = !0,
                    currentAdaptationSet = void 0;

                for (let i = 0; i < adaptationSetsList.length; i++) {
                    var adaptationSet = adaptationSetsList[i],
                        adaptationSetType = this.getAdaptationSetType(adaptationSet);
                    currentAdaptationSet = adaptationSetType === contentTypes.AUDIO ? currentAdaptationSet || adaptationSet : currentAdaptationSet;

                    if (!this.shouldDiscardAdaptation(adaptationSet, adaptationSetType)) {
                        adaptationSetType === contentTypes.AUDIO && (ii = !1);
                        var currentAdaptationSet = this.createAdaptationSet(mpdOrManifest, period, adaptationSet, {
                            trackId: currentTrackId,
                            type: adaptationSetType
                        });

                        if (currentAdaptationSet.type !== contentTypes.VIDEO) {
                            currentTrackId++;
                        }

                        period.adaptationSets.push(currentAdaptationSet);
                    }
                }
                if (ii && currentAdaptationSet) {
                    var adaptSet = this.createAdaptationSet(mpdOrManifest, period, currentAdaptationSet, {
                        trackId: currentTrackId,
                        type: contentTypes.AUDIO
                    });

                    period.adaptationSets.push(adaptSet);
                }
            },
            createAdaptationSet: function(mpdOrManifest, period, adaptationSet, mediaTrack) {
                var accessibilityConfig, roleConfig,
                    mpdParser = this,
                    newAdaptationSet = new AdaptationSet,
                    mediaTrackId = mediaTrack.trackId,
                    mediaTrackType = mediaTrack.type;

                newAdaptationSet.periodId = period.id;
                newAdaptationSet.url = period.baseUrl;
                newAdaptationSet.segmentTemplate = this.createSegmentTemplate(adaptationSet, period.segmentTemplate || {});

                if (!newAdaptationSet.segmentTemplate) {
                    newAdaptationSet.hasOwnSegments = !1;
                }

                newAdaptationSet.indexMode = newAdaptationSet.segmentTemplate && newAdaptationSet.segmentTemplate.duration && !newAdaptationSet.segmentTemplate.hasTimeline;
                newAdaptationSet.publishTime = this.mpd.publishTime;
                newAdaptationSet.dvrWindow = mpdOrManifest.dvrWindow;
                newAdaptationSet.timeShiftBufferDepth = this.mpd.timeShiftBufferDepth;
                newAdaptationSet.suggestedPresentationDelay = this.mpd.suggestedPresentationDelay;
                newAdaptationSet.availabilityStartTime = this.mpd.availabilityStartTime;
                newAdaptationSet.suggestedPresentationDelay = this.mpd.suggestedPresentationDelay;
                newAdaptationSet.availabilityEndTime = this.mpd.availabilityEndTime;
                newAdaptationSet.duration = this.mpd.duration;
                newAdaptationSet.minBufferTime = this.mpd.minBufferTime;
                newAdaptationSet.isDynamic = "dynamic" === this.mpd.type;
                mpdOrManifest.indexMode = newAdaptationSet.indexMode;
                newAdaptationSet.codecs = adaptationSet.getAttribute("codecs");
                newAdaptationSet.lang = adaptationSet.getAttribute("lang");
                newAdaptationSet.mimeType = adaptationSet.getAttribute("mimeType");
                newAdaptationSet.type = mediaTrackType;
                accessibilityConfig = extractAsClass(adaptationSet, "Accessibility");
                newAdaptationSet.accessibility = accessibilityConfig == null ? void 0 : accessibilityConfig.getAttribute("value");
                roleConfig = extractAsClass(adaptationSet, "Role");
                newAdaptationSet.role = roleConfig == null ? void 0 : roleConfig.getAttribute("value");

                if (adaptationSet.getAttribute("id")) {
                    newAdaptationSet.id = parseInt(adaptationSet.getAttribute("id"));
                }

                newAdaptationSet.type !== contentTypes.VIDEO && isNaN(newAdaptationSet.id) && (newAdaptationSet.id = mediaTrackId);

                var availableRepresentations = extractElementsFromXML(adaptationSet, "Representation"),
                    createAndInitRepresentation = function(n) {
                        var representation = mpdParser.createRepresentation(newAdaptationSet, availableRepresentations[n]),
                            hasOwnSegments = representation.hasOwnSegments,
                            mediaType = representation.mediaType,
                            mimeCodec = representation.mimeCodec,
                            segmentTemplate = representation.segmentTemplate;

                        representation.periodId = period.id;

                        if (hasOwnSegments && segmentTemplate.hasIndex && !segmentTemplate.hasTimeline) {
                            mpdOrManifest.indexMode = !0;
                        }
                        if ([contentTypes.AUDIO, contentTypes.VIDEO].includes(mediaType) && mimeCodec && !window.MediaSource.isTypeSupported(mimeCodec)) {
                            newAdaptationSet.unsupportedCodecs.push(mimeCodec);
                            return "continue"; //this might be a problem
                        }

                        var multikey = (mpdParser.widevineConfig || {}).multikey; //breakpoint here

                        if (mediaType === contentTypes.VIDEO && multikey && mpdParser.widevineSupportedConfigs.length) {
                            if (multikey == null) {
                                return "continue";
                            } else {
                                var found = multikey.find((function(t) {
                                    var maxHeight = t.maxHeight,
                                        securityLevel = t.securityLevel;
                                    return representation.height <= maxHeight && mpdParser.widevineSupportedConfigs.find((function(config) {
                                        return config.level === securityLevel;
                                    }))
                                }))
                                if (!found) {
                                    return "continue";
                                }
                            }
                        }

                        newAdaptationSet.representations.push(representation);
                    }

                for (let i = 0; i < availableRepresentations.length; i++) {
                    createAndInitRepresentation(i);
                }
                availableRepresentations = newAdaptationSet.representations;

                if (availableRepresentations == null ? void 0 : availableRepresentations.length) {
                    var g = Object(n6.a)(newAdaptationSet.representations, 1)[0];
                    null === newAdaptationSet.mimeType && null !== g.mimeType && (newAdaptationSet.mimeType = g.mimeType);

                    if (!newAdaptationSet.codecs) {
                        newAdaptationSet.codecs = g.codecs;
                    }
                    if (newAdaptationSet.codecs) {
                        newAdaptationSet.contentType = "".concat(newAdaptationSet.mimeType, ';codecs="').concat(newAdaptationSet.codecs, '"');
                    }
                }
                newAdaptationSet.representations.sort(this.sortFn);

                return newAdaptationSet;
            },
            getAdaptationSetType: function(adaptationSet) {
                var adaptationSetType = findAdaptationSetType(adaptationSet);
                if (!adaptationSetType) {
                    var representation = extractElementsFromXML(adaptationSet, "Representation"),
                        firstRepresentation = Object(n6.a)(representation, 1)[0];
                    return findAdaptationSetType(firstRepresentation);
                }

                return adaptationSetType;
            },
            createRepresentation: function(t, adaptationSet) {
                var representation = new Representation;

                representation.id = adaptationSet.getAttribute("id");
                representation.adaptationSetId = t.id;
                representation.bandwidth = parseInt(adaptationSet.getAttribute("bandwidth"));
                representation.mimeType = adaptationSet.getAttribute("mimeType");
                representation.width = parseInt(adaptationSet.getAttribute("width"));
                representation.height = parseInt(adaptationSet.getAttribute("height"));
                representation.mediaType = t.type;
                representation.url = t.url;
                representation.segmentList = t.segmentList;
                representation.availabilityStartTime = t.availabilityStartTime;
                representation.timeShiftBufferDepth = t.timeShiftBufferDepth;
                representation.codecs = adaptationSet.getAttribute("codecs");

                if ("mp4a.40.1" === representation.codecs) {
                    representation.codecs = "mp4a.40.2";
                }

                if (representation.codecs && t.mimeType) {
                    representation.mimeCodec = "".concat(t.mimeType, ';codecs="').concat(representation.codecs, '"');
                }

                representation.segmentTemplate = this.createSegmentTemplate(adaptationSet);

                if (!representation.segmentTemplate && t.segmentTemplate) {
                    representation.hasOwnSegments = !1;
                    representation.segmentTemplate = t.segmentTemplate;
                }

                return representation;
            },
            createSegmentTemplate: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    initialization = e.initialization,
                    media = e.media,
                    startNumberDefault = void 0 === e.startNumber ? 1 : e.startNumber,
                    segmentTemplateWrapper = extractAsClass(t, "SegmentTemplate");

                if (!segmentTemplateWrapper) {
                    return;
                }

                var segmentTimelineWrapper = extractAsClass(segmentTemplateWrapper, "SegmentTimeline"),
                    segmentTemplate = new SegmentTemplate;
                segmentTemplate.timeline = new Timeline;

                if (segmentTimelineWrapper) {
                    var c = extractElementsFromXML(segmentTimelineWrapper, "S");
                    segmentTemplate.timeline.parse(c);
                }

                segmentTemplate.timescale = parseInt(segmentTemplateWrapper.getAttribute("timescale")) || 1;
                segmentTemplate.segmentDuration = parseInt(segmentTemplateWrapper.getAttribute("duration"));

                var actualStartNumber = segmentTemplateWrapper.getAttribute("startNumber");

                segmentTemplate.hasIndex = !!actualStartNumber;
                segmentTemplate.hasTimeline = !!segmentTimelineWrapper;
                segmentTemplate.startNumber = null !== actualStartNumber ? parseInt(actualStartNumber, 10) : startNumberDefault;
                segmentTemplate.duration = parseInt(segmentTemplateWrapper.getAttribute("duration"));
                segmentTemplate.presentationTimeOffset = parseInt(segmentTemplateWrapper.getAttribute("presentationTimeOffset")) || 0;
                segmentTemplate.initialization = segmentTemplateWrapper.getAttribute("initialization") || initialization;
                segmentTemplate.media = segmentTemplateWrapper.getAttribute("media") || media;

                return segmentTemplate;
            },
            shouldDiscardAdaptation: function(adaptationSet, contentType) {
                var allowedAudioLanguages = this.options.get(n1.b), //allowedAudioLanguages
                    allowedSubtitleLanguages = this.options.get(n1.C), //allowedSubtitleLanguages
                    lang = adaptationSet.getAttribute("lang");

                if (lang) {
                    return allowedAudioLanguages && contentType === contentTypes.AUDIO ? !allowedAudioLanguages.includes(lang) : allowedSubtitleLanguages && contentType === contentTypes.TEXT ? !allowedSubtitleLanguages.includes(lang) : void 0;
                }
            },
            sortFn: function(adaptationSet1, adaptationSet2) {
                return adaptationSet2.bandwidth - adaptationSet1.bandwidth;
            },
            update: function(currentManifest, newManifest, defaultDvrSize) {
                var mpdParser = this,
                    dvrSize = this.timeShift.getDvrWindow() > 0 ? this.timeShift.getDvrWindow() : defaultDvrSize;

                newManifest.periods.forEach((function(newPeriod) {
                    var activePeriod = currentManifest.periods.find((function(period) {
                            return period.start === newPeriod.start;
                        })),
                        oldPeriod = currentManifest.periods.find((function(period) {
                            var start = period.start,
                                end = period.end;
                            return start === newPeriod.start && !end;
                        }))
                    if (!activePeriod) {
                        currentManifest.periods.push(newPeriod);
                    }
                    if (oldPeriod) {
                        mpdParser.updatePeriod(oldPeriod, newPeriod, defaultDvrSize);
                    }
                }));
                currentManifest.periods.sort((function(period1, period2) {
                    return period1.start - period2.start;
                }));

                if (currentManifest.periods.length > 1) {
                    var firstPeriod = Object(n6.a)(currentManifest.periods, 1)[0],
                        lastPer = currentManifest.periods.slice(-1),
                        lastPeriod = Object(n6.a)(lastPer, 1)[0],
                        u = lastPeriod.start - firstPeriod.start;

                    if (dvrSize > 0 && u > dvrSize) {
                        currentManifest.periods = currentManifest.periods.reduce((function(t, period) {
                            if ((period.end || period.start) >= lastPeriod.start - dvrSize) {
                                t.push(period);
                            }

                            return t;
                        }), [])
                    }
                }

                this.updatePeriodsDuration(currentManifest.periods);
                currentManifest.publishTime = newManifest.publishTime;
                currentManifest.baseUrl = newManifest.baseUrl;
                currentManifest.minimumUpdatePeriod = newManifest.minimumUpdatePeriod;

                return currentManifest;
            },
            updatePeriod: function(oldPeriod, newPeriod, dvrSize) {
                var mpdParser = this,
                    processAdaptationSetsAtIndex = function(index) {
                        var oldAdaptationSet = oldPeriod.adaptationSets[index],
                            newAdaptationSet = newPeriod.adaptationSets[index],
                            oldSegmentList = oldAdaptationSet.segmentList,
                            newSegmentList = newAdaptationSet.segmentList;
                        oldAdaptationSet.url = newAdaptationSet.url;

                        if (newSegmentList !== void 0 && newSegmentList.length > 0) {
                            oldAdaptationSet.segmentList = mpdParser.merge(oldSegmentList, newSegmentList, dvrSize);
                        }
                        oldAdaptationSet.representations.forEach((function(representation, index) {
                            var currentRepresentation = newAdaptationSet.representations[index];
                            if (currentRepresentation !== null && MediaItem.segmentList) {
                                representation.segmentList = mpdParser.merge(representation.segmentList, currentRepresentation.segmentList, dvrSize);
                                representation.url = newAdaptationSet.url;
                                representation.segmentTemplate = currentRepresentation.segmentTemplate;
                            }
                        }))
                    }
                for (let i = 0; i < newPeriod.adaptationSets.length; i++) {
                    processAdaptationSetsAtIndex(i);
                }
            },
            updatePeriodsDuration: function(periods) {
                var currentPeriod;
                periods.forEach((function(period) {
                    if (!currentPeriod) {
                        currentPeriod = period;
                        return;
                    }

                    var n = currentPeriod,
                        duration = n.duration,
                        start = n.start;

                    currentPeriod.end = period.start;
                    currentPeriod.duration = period.start - start;

                    if (!duration) {
                        currentPeriod.trigger(n0.q, currentPeriod); //periodUpdated
                    }

                    currentPeriod = period;
                }))
            },
            merge: function(segmentList1, segmentList2) {
                var allSegments,
                    offset = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    result = [],
                    a = Object(n6.a)(segmentList2, 1),
                    firstSegmentFromSegmentList2 = a[0];

                if (!firstSegmentFromSegmentList2) {
                    return segmentList1;
                }
                segmentList1 = segmentList1.filter((function(segment) {
                    return firstSegmentFromSegmentList2.start > segment.start;
                }));
                allSegments = [].concat(Object(n8.a)(segmentList1), Object(n8.a)(segmentList2));

                var currentIndex = allSegments[0].index,
                    lastSegment = allSegments.slice(-1),
                    c = Object(n6.a)(lastSegment, 1),
                    f = c[0],
                    actualStartValue = 0 === offset ? 0 : f.start - offset;

                allSegments.forEach((function(segment) {
                    if (segment.index > currentIndex) {
                        currentIndex = segment.index;
                    }
                    segment.index = currentIndex;

                    if (segment.start > actualStartValue) {
                        result.push(segment);
                        currentIndex++;
                    }
                }));

                return result;
            }
        };
        var ManifestManager = function(args) {
                Object(n4.a)(createManifestManager, args);
                var manifestManagerCreatorF = createManifestManager,
                    n = function() {
                        var t,
                            n = Object(n4.b)(manifestManagerCreatorF);
                        if (isNativeReflectConstruct()) {
                            var constructor = Object(n4.b)(this).constructor;
                            t = Reflect.construct(n, arguments, constructor)
                        } else {
                            t = n.apply(this, arguments);
                        }

                        return Object(n4.c)(this, t);
                    };

                function createManifestManager(htmlVideoElement, player) { //1st arg - renderer element (HTMLVideoElement)
                    var httpConfig, manifest, manifestManager;

                    Object(n5.a)(this, createManifestManager);
                    manifestManager = n.call(this);
                    player.addComponent(Object(n4.d)(manifestManager), n9.a); //???, "manifest-manager"
                    manifestManager.video = htmlVideoElement;
                    manifestManager.player = player;
                    manifestManager.logger = loggersMap.get("manifest");
                    manifestManager.options = manifestManager.player.options;
                    manifestManager.httpConfig = manifestManager.options.get(n1.i); //httpConfig
                    httpConfig = manifestManager.httpConfig;
                    manifestManager.headers = httpConfig == null || null === (manifest = httpConfig.manifest) || void 0 === manifest ? void 0 : manifest.headers;
                    manifestManager.streamWithCredentials = manifestManager.options.get(n1.t); //streamWithCredentials
                    manifestManager.minimumUpdatePeriodEnabled = manifestManager.options.get(n1.n); //minimumUpdatePeriodEnabled
                    manifestManager.timeShift = manifestManager.player.timeShift;
                    manifestManager.utcTime = new n12.a(player);
                    manifestManager.manifest = null;
                    manifestManager.parser = new MpdParser(player);
                    manifestManager.updating = !1;
                    manifestManager.adaptations = [];
                    manifestManager.videoAdaptation = null;
                    manifestManager.audioAdaptation = null;
                    manifestManager.cancelRequest = function() {};
                    manifestManager.monitorTimer = null;
                    manifestManager.headSegmentIndex = -1;
                    manifestManager.duration = -1;
                    manifestManager.url = null;
                    manifestManager.utcHeadTime = 0;

                    return manifestManager;
                }
                Object(n5.b)(createManifestManager, [{
                    key: "monitor",
                    value: function() {
                        var manifestLocation = this.manifest.location || this.url;

                        if (!this.isIndexMode()) {
                            this.updating || this.update(manifestLocation);
                            return;
                        }

                        var currentUtcTime = this.utcTime.getTime();
                        if (currentUtcTime <= 0) {
                            return;
                        }

                        this.updateTimeLine(currentUtcTime);
                        this.utcHeadTime = currentUtcTime - this.parser.mpd.availabilityStartTime;
                        var secondsElapsed = ((new Date).getTime() - this.parser.mpd.timeStamp) / 1e3;

                        if (this.minimumUpdatePeriodEnabled && secondsElapsed > this.manifest.minimumUpdatePeriod) {
                            this.update(Object(n12.c)(manifestLocation, "startTime"));
                        }
                    }
                },
                    {
                        key: "load",
                        value: function(urlToLoad) {
                            var manifestManager = this;

                            this.url = urlToLoad;
                            this.updating = !0;
                            this.abort();

                            if (this.monitorTimer) {
                                this.monitorTimer.stop();
                            }

                            return this.fetch(this.url).then(function() {
                                var manifestLoadF = Object(n3.a)(n3.b.mark((function t(n) {
                                        var currentMetric, data, urlWithoutScheme, fullUrl, s, updatePeriod;
                                        return n3.b.wrap((function(t) {
                                                for (; ; ) {
                                                    switch (t.prev = t.next) {
                                                        case 0:
                                                            currentMetric = n.metric;
                                                            data = n.data;
                                                            urlWithoutScheme = n.url;
                                                            fullUrl = n.responseUrl;
                                                            manifestManager.sendMetric(currentMetric);
                                                            manifestManager.manifest = manifestManager.parse(data, urlWithoutScheme, fullUrl);
                                                            manifestManager.adaptations = manifestManager.getAllAdaptationSets();
                                                            manifestManager.videoAdaptation = manifestManager.getAdaptationSetByType(contentTypes.VIDEO);
                                                            manifestManager.audioAdaptation = manifestManager.getAdaptationSetByType(contentTypes.AUDIO);
                                                            manifestManager.duration = manifestManager.manifest.duration;
                                                            manifestManager.updating = !1;

                                                            if (!manifestManager.isLive()) {
                                                                t.next = 18;
                                                                break;
                                                            }
                                                            t.next = 11;

                                                            return manifestManager.utcTime.sync(manifestManager.manifest.utcTiming);
                                                        case 11:
                                                            s = t.sent;
                                                            manifestManager.trigger(n0.i, s); //headTime
                                                            updatePeriod = 1e3 * manifestManager.manifest.minimumUpdatePeriod || 2e3;
                                                            manifestManager.isIndexMode() && (updatePeriod = 1e3);
                                                            manifestManager.monitorTimer = new n17.a(updatePeriod, (function() {
                                                                return manifestManager.monitor();
                                                            }));
                                                            manifestManager.monitorTimer.start();
                                                            manifestManager.isIndexMode() && manifestManager.monitor();
                                                        case 18:
                                                            manifestManager.logger.info("MANIFEST LOADED: duration: ".concat(currentMetric.duration / 1e3, ", url: ").concat(manifestManager.url));
                                                            manifestManager.trigger(n0.C, manifestManager.manifest); //manifestLoaded

                                                            return t.abrupt("return", manifestManager.manifest);
                                                        case 21:
                                                        case "end":
                                                            return t.stop();
                                                    }
                                                }
                                            }
                                        ), t)
                                    }
                                )));
                                return function(e) {
                                    return manifestLoadF.apply(this, arguments);
                                }
                            }()).catch((function(xhrErrorData) {
                                var errorName = xhrErrorData.error,
                                    metricInfo = xhrErrorData.metric,
                                    originalRequest = xhrErrorData.xhr;

                                manifestManager.updating = !1;

                                if (errorName !== n10.b) {
                                    return;
                                }

                                manifestManager.sendMetric(metricInfo);
                                manifestManager.logger.error("MANIFEST LOADED: duration: ".concat(metricInfo.duration / 1e3, ", url: ").concat(manifestManager.url));

                                return Promise.reject({
                                    error: "failedToLoadManifest",
                                    url: urlToLoad,
                                    xhr: originalRequest
                                })
                            }))
                        }
                    },
                    {
                        key: "update",
                        value: function(t) {
                            var manifestManager = this;
                            this.updating = !0;
                            var timeShiftBufferDepth = 0;

                            if (!this.timeShift.isEnabled()) {
                                timeShiftBufferDepth = 60;
                            }

                            if (this.parser.mpd.timeShiftBufferDepth) {
                                timeShiftBufferDepth = this.parser.mpd.timeShiftBufferDepth;
                            }

                            this.fetch(t).then(function() {
                                var manifestUpdateF = Object(n3.a)(n3.b.mark((function r(i) {
                                        var metric, data, url, responseUrl, d, minUpdatePeriod, previousMinUpdatePeriod;
                                        return n3.b.wrap((function(r) {
                                                for (; ; )
                                                    switch (r.prev = r.next) {
                                                        case 0:
                                                            metric = i.metric;
                                                            data = i.data;
                                                            url = i.url;
                                                            responseUrl = i.responseUrl;
                                                            d = manifestManager.parse(data, url, responseUrl); //breakpoint here, what is 'd'
                                                            minUpdatePeriod = manifestManager.manifest.minimumUpdatePeriod;
                                                            r.next = 5;

                                                            return manifestManager.utcTime.syncDirect(d.utcTiming);
                                                        case 5:
                                                            manifestManager.sendMetric(metric);
                                                            manifestManager.manifest = manifestManager.parser.update(manifestManager.manifest, d, timeShiftBufferDepth);
                                                            manifestManager.trigger(n0.i, manifestManager.utcTime.getTime()); //headTime
                                                            manifestManager.trigger(n0.S, manifestManager.manifest); //manifestUpdated
                                                            manifestManager.updating = !1;
                                                            previousMinUpdatePeriod = manifestManager.manifest.minimumUpdatePeriod;
                                                            minUpdatePeriod === previousMinUpdatePeriod || manifestManager.isIndexMode() || manifestManager.monitorTimer.restart(1e3 * previousMinUpdatePeriod);
                                                            manifestManager.logger.info("MANIFEST UPDATED: duration: ".concat(metric.duration / 1e3, ", url: ").concat(t));

                                                            return r.abrupt("return", manifestManager.manifest);
                                                        case 14:
                                                        case "end":
                                                            return r.stop();
                                                    }
                                            }
                                        ), r)
                                    }
                                )));
                                return function(t) {
                                    return manifestUpdateF.apply(this, arguments);
                                }
                            }()).catch((function(n) {
                                    var error = n.error,
                                        metric = n.metric;

                                    if (error === n10.b) {
                                        manifestManager.trigger(n0.n); //manifestUpdateError
                                        manifestManager.logger.error("MANIFEST LOADED: duration: ".concat(metric.duration / 1e3, ", url: ").concat(t));
                                        manifestManager.sendMetric(metric);
                                    }
                                    manifestManager.updating = !1;
                                }
                            ))
                        }
                    },
                    {
                        key: "fetch",
                        value: function(t) {
                            var manifestManager = this,
                                manifest = void 0 === this.httpConfig.manifest ? {} : this.httpConfig.manifest,
                                retryAttempts = manifest.retryAttempts,
                                retryDelay = manifest.retryDelay,
                                credentials = manifest.withCredentials;

                            return n10.d.get(t, function(obj) {
                                    for (let i = 1; i < arguments.length; i++) {
                                        var originalObject = null != arguments[i] ? arguments[i] : {};

                                        if (i % 2) {
                                            getMappedProperties(Object(originalObject), !0).forEach((function(property) {
                                                Object(n2.a)(obj, property, originalObject[property]);
                                            }))
                                        } else if (Object.getOwnPropertyDescriptors) {
                                            Object.defineProperties(obj, Object.getOwnPropertyDescriptors(originalObject));
                                        } else {
                                            getMappedProperties(Object(originalObject)).forEach((function(propertyName) {
                                                Object.defineProperty(obj, propertyName, Object.getOwnPropertyDescriptor(originalObject, propertyName));
                                            }))
                                        }
                                    }

                                    return obj;
                                }(
                                {
                                    cancelToken: new n10.d.CancelToken((function(t) {
                                        return manifestManager.cancelRequest = t;
                                    })),
                                    withCredentials: this.streamWithCredentials || !!credentials
                                },
                                retryAttempts && { retryAttempts: retryAttempts },
                                {},
                                retryDelay && { retryDelay: retryDelay },
                                { headers: this.headers }
                                )
                            );
                        }
                    },
                    {
                        key: "sendMetric",
                        value: function(t) {
                            this.player.trigger(n0.o, { //networkMetric
                                duration: t.duration,
                                status: t.status,
                                statusCode: t.statusCode,
                                timestamp: (new Date).getTime(),
                                url: t.url,
                                type: "MANIFEST"
                            })
                        }
                    },
                    {
                        key: "destroy",
                        value: function() {
                            if (this.monitorTimer) {
                                this.monitorTimer.stop();
                            }

                            this.utcTime.stop();
                            this.abort();
                        }
                    },
                    {
                        key: "abort",
                        value: function() {
                            this.cancelRequest();
                        }
                    },
                    {
                        key: "getPresentationTimeOffset",
                        value: function() {
                            return this.manifest.presentationTimeOffset;
                        }
                    },
                    {
                        key: "parse",
                        value: function(manifest, schemelessUrl, fullUrl) {
                            return this.parser.parse(manifest, schemelessUrl, fullUrl);
                        }
                    },
                    {
                        key: "updateManifest",
                        value: function(t, e, n) {
                            return this.parser.update(t, e, n); //breakpoint here
                        }
                    },
                    {
                        key: "isIndexMode",
                        value: function() {
                            return this.manifest && this.manifest.indexMode;
                        }
                    },
                    {
                        key: "isLive",
                        value: function() {
                            return this.manifest && "dynamic" === this.manifest.type;
                        }
                    },
                    {
                        key: "getLiveDelay",
                        value: function() {
                            var delay = Math.max(this.options.get(n1.tb), this.suggestedPresentationDelay); //minLiveDelay
                            if (this.startBufferLength) {
                                delay = this.startBufferLength;
                            }

                            return this.options.get(n1.m) || delay; //liveDelay
                        }
                    },
                    {
                        key: "getAudioProfiles",
                        value: function(t) {
                            return this.getRepresentationsByType(contentTypes.AUDIO, t);
                        }
                    },
                    {
                        key: "getVideoProfiles",
                        value: function(period) {
                            return this.getAdaptationSetsByType(contentTypes.VIDEO, period).reduce((function(t, adaptationSet) {
                                var representations = adaptationSet.representations;
                                return [].concat(Object(n8.a)(t), Object(n8.a)(representations));
                            }), []).sort((function(adaptationSet1, adaptationSet2) {
                                return adaptationSet2.bandwidth - adaptationSet1.bandwidth;
                            }))
                        }
                    },
                    {
                        key: "getVideoNearestBandwidth",
                        value: function(requestedBandwidth, period) {
                            var availableBandwidths = this.getVideoProfiles(period).map((function(profile) {
                                return profile.bandwidth;
                            }));

                            return availableBandwidths.find((function(bandwidth) {
                                return requestedBandwidth >= bandwidth;
                            })) || availableBandwidths[availableBandwidths.length - 1];
                        }
                    },
                    {
                        key: "getTextAdaptations",
                        value: function() {
                            return this.getAdaptationsSetByType(contentTypes.TEXT);
                        }
                    },
                    {
                        key: "getAudioAdaptations",
                        value: function(t) {
                            return this.getAdaptations(contentTypes.AUDIO, t); //breakpoiont here, what is t
                        }
                    },
                    {
                        key: "getAudioAdaptation",
                        value: function(langOrId, manifestMaybe) {
                            var audioAdaptations = this.getAudioAdaptations(manifestMaybe),
                                property = "string" == typeof langOrId ? "lang" : "id";

                            return audioAdaptations.find((function(adaptation) {
                                return adaptation[property] === langOrId;
                            }))
                        }
                    },
                    {
                        key: "getAudioTracks",
                        value: function() {
                            return this.getAudioAdaptations().map((function(audioAdaptation) {
                                return new n22.a(audioAdaptation);
                            }))
                        }
                    },
                    {
                        key: "updateTimeLine",
                        value: function(t) {
                            var allPeriodsReverseOrder = this.getPeriods().slice().reverse(),
                                firstPeriod = Object(n6.a)(allPeriodsReverseOrder, 1)[0];
                            this.getAllAdaptationSets(firstPeriod).forEach((function(adaptationSet) {
                                if (adaptationSet.segmentTemplate) {
                                    updateTimeLine(adaptationSet, t);
                                }

                                adaptationSet.representations.forEach((function(representation) {
                                    if (representation.hasOwnSegments && representation.segmentTemplate.hasIndex) {
                                        updateTimeLine(representation, t);
                                    }
                                }))
                            }))
                        }
                    },
                    {
                        key: "getLastSegmentEndTimeByType",
                        value: function(type) {
                            var representations = this.getRepresentationsByType(type),
                                segments = (Object(n6.a)(representations, 1)[0] || {}).segmentList,
                                lastSegment = (null == segments ? void 0 : segments[segments.length - 1]) || {};

                            return lastSegment.start + lastSegment.duration;
                        }
                    },
                    {
                        key: "getFirstSegmentStartTimeByType",
                        value: function(type) {
                            var availableRepresentations = this.getRepresentationsByType(type),
                                firstRepresentation = Object(n6.a)(availableRepresentations, 1)[0],
                                segmentList = firstRepresentation.segmentList,
                                firstSegment = segmentList[0];

                            return (segmentList == null || firstSegment == null ? void 0 : firstSegment.start) || 0;
                        }
                    },
                    {
                        key: "getStartTime",
                        value: function() {
                            return Math.max(this.getFirstSegmentStartTimeByType(contentTypes.VIDEO), this.getFirstSegmentStartTimeByType(contentTypes.AUDIO));
                        }
                    },
                    {
                        key: "getAdaptations",
                        value: function(contentType, period, n) {
                            return this.manifest && this.getAdaptationsSetByType(contentType, period, n);
                        }
                    },
                    {
                        key: "getAllAdaptationSets",
                        value: function(period) {
                            return this.getPeriod(period).adaptationSets;
                        }
                    },
                    {
                        key: "getAdaptationSetMimeType",
                        value: function(contentType) {
                            var adaptations = this.getAdaptations(contentType),
                                n = Object(n6.a)(adaptations, 1)[0];
                            if (n) {
                                return "".concat(n.mimeType, "; codecs=").concat(n.codecs);
                            }
                        }
                    },
                    {
                        key: "getPeriods",
                        value: function() {
                            var currentManifest = this.manifest;
                            return currentManifest == null ? void 0 : currentManifest.periods;
                        }
                    },
                    {
                        key: "getPeriod",
                        value: function(requestedPeriod) { //this is more like a validation function - 'getSelfIfExistsOrFirst'
                            var availablePeriods = this.getPeriods(),
                                result;
                            return (availablePeriods == null ? void 0 : availablePeriods.find((function(period) {
                                    var periodId = period.id,
                                        periodStart = period.start;
                                    return periodId === (null == requestedPeriod ? void 0 : requestedPeriod.id) && periodStart === (null == requestedPeriod ? void 0 : requestedPeriod.start);
                                })))
                                || (null === (result = this.getPeriods())
                                || void 0 === result ? void 0 : result[0]);
                        }
                    },
                    {
                        key: "getNextPeriod",
                        value: function(currentPeriod) {
                            var allPeriods = this.getPeriods(),
                                indexOfCurrentPeriod = allPeriods.indexOf(currentPeriod);

                            if (indexOfCurrentPeriod >=0) {
                                return allPeriods[indexOfCurrentPeriod + 1];
                            }
                        }
                    },
                    {
                        key: "getLastPeriod",
                        value: function() {
                            var allPeriods = this.getPeriods();
                            return allPeriods[allPeriods.length - 1];
                        }
                    },
                    {
                        key: "getPeriodById",
                        value: function(selectedPeriodId) {
                            var allPeriods = this.getPeriods(),
                                result = this.getPeriods();

                            return (allPeriods == null ? void 0 : allPeriods.find((function(period) {
                                    return period.id === selectedPeriodId;
                                })))
                                || (result == null ? void 0 : result[0]);
                        }
                    },
                    {
                        key: "getAdaptationSetById",
                        value: function(adaptationSetId, period) {
                            var currentPeriod = this.getPeriod(period);
                            return currentPeriod == null ? void 0 : currentPeriod.adaptationSets.find((function(adaptationSet) {
                                return adaptationSet.id === adaptationSetId;
                            }))
                        }
                    },
                    {
                        key: "getAdaptationsSetByType",
                        value: function(type, period) {
                            var currentPeriod = this.getPeriod(period); //breakpont here, is this periodId?
                            return currentPeriod == null ? void 0 : currentPeriod.adaptationSets.filter((function(adaptationSet) {
                                return adaptationSet.type === type;
                            }));
                        }
                    },
                    {
                        key: "getAdaptationSetsByType",
                        value: function(mediaType, period, n) {
                            var adaptationSets = this.getAdaptationsSetByType(mediaType, period);
                            if (!n) {
                                return adaptationSets;
                            }

                            var id = n.id,
                                language = n.lang,
                                result;

                            result = adaptationSets.filter((function(adaptationSet) {
                                    var adaptationSetId = adaptationSet.id,
                                        adaptationSetLang = adaptationSet.lang;
                                    return adaptationSetId === id && adaptationSetLang === language;
                                }))
                                || adaptationSets.filter((function(adaptationSet) {
                                    return adaptationSet.lang === language
                                }))
                                || adaptationSets;

                            return result;
                        }
                    },
                    {
                        key: "getAdaptationSetByType",
                        value: function(contentType, period, n) {
                            var adaptationSets = this.getAdaptationSetsByType(contentType, period, n);

                            return (adaptationSets == null ? void 0 : adaptationSets[0]) || null;
                        }
                    },
                    {
                        key: "getRepresentationsByType",
                        value: function(contentType, period) {
                            var adaptationSet = this.getAdaptationSetByType(contentType, period);
                            return null === adaptationSet ? [] : adaptationSet.representations;
                        }
                    },
                    {
                        key: "getRepresentationByBandwidth",
                        value: function(bandwidth) {
                            var contentType = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : contentTypes.VIDEO,
                                period = arguments.length > 2 ? arguments[2] : void 0,
                                arg4 = arguments.length > 3 ? arguments[3] : void 0,
                                adaptationSets = this.getAdaptationSetsByType(contentType, period, arg4),

                                validRepresentations = adaptationSets.reduce((function(result, adaptationSet) {
                                    var representations = adaptationSet.representations;
                                    return [].concat(Object(n8.a)(result), Object(n8.a)(representations))
                                }), []),

                                selectedBandwidth = bandwidth || this.getAverageBandwidth(validRepresentations);

                            return validRepresentations.find((function(representation) {
                                return representation.bandwidth === parseInt(selectedBandwidth, 10);
                            })) || null
                        }
                    },
                    {
                        key: "getAverageBandwidth",
                        value: function(representations) {
                            var allBandwidths = representations.map((function(representation) {
                                return representation.bandwidth;
                            }));

                            return allBandwidths[Math.floor(allBandwidths.length / 2) - (allBandwidths.length % 2 == 0 ? 1 : 0)];
                        }
                    },
                    {
                        key: "findPeriodByTime",
                        value: function(segmentTime) {
                            var allPeriods = this.manifest.periods;

                            if (allPeriods == null) {
                                return void 0;
                            }

                            return (allPeriods.find((function(period) {
                                    var periodStart = period.start,
                                        periodEnd = period.end;
                                    return segmentTime >= periodStart && segmentTime < (periodEnd || 1 / 0);
                                })))
                                || (allPeriods[0]);
                        }
                    },
                    {
                        key: "minBufferTime",
                        get: function() {
                            return this.options.get(n1.ub) || 0; //minBufferTime
                        }
                    },
                    {
                        key: "maxBufferLength",
                        get: function() {
                            var currentMaxBufferLength = this.options.get(n1.vb); //maxBufferLength
                            return this.startBufferLength >= currentMaxBufferLength ? this.startBufferLength + 1 : currentMaxBufferLength;
                        },
                        set: function(t) {
                            this.options.set(n1.vb, t); //maxBufferLength
                        }
                    },
                    {
                        key: "startBufferLength",
                        get: function() {
                            return this.options.get(n1.wb); //startBufferLength
                        }
                    },
                    {
                        key: "minAutoBitrate",
                        get: function() {
                            return this.options.get(n1.xb); //minAutoBitrate
                        }
                    },
                    {
                        key: "maxAutoBitrate",
                        get: function() {
                            return this.options.get(n1.yb); //maxAutoBitrate
                        }
                    },
                    {
                        key: "suggestedPresentationDelay",
                        get: function() {
                            var manifest = this.manifest;
                            return manifest == null ? void 0 : manifest.suggestedPresentationDelay;
                        }
                    },
                    {
                        key: "segmentDuration",
                        get: function() {
                            return this.videoAdaptation.segmentTemplate ? this.videoAdaptation.segmentTemplate.segmentDuration ? this.videoAdaptation.segmentTemplate.segmentDuration / this.videoAdaptation.segmentTemplate.timescale : this.videoAdaptation.segmentList.length ? this.videoAdaptation.segmentList[0].duration : 0 : 0
                        }
                    }]);

                return createManifestManager;
            }(n14.a),
            bufferManagerState = {
                HAVE_NOTHING: 0,
                HAVE_METADATA: 1,
                HAVE_CURRENT_DATA: 2,
                HAVE_FUTURE_DATA: 3,
                HAVE_ENOUGH_DATA: 4
            },
            TaskExecutor = function() {
                function createTaskExecutorSkeleton(sourceBuffer) {
                    Object(n5.a)(this, createTaskExecutorSkeleton);
                    this.taskQueue = [];
                    this.sourceBuffer = sourceBuffer;
                }
                Object(n5.b)(createTaskExecutorSkeleton, [{
                    key: "addTask",
                    value: function(newTask) {
                        var onResolve,
                            onReject,
                            taskPromise = new Promise((function(resolve, reject) {
                                onResolve = resolve;
                                onReject = reject;
                            })),
                            task = {
                                fn: newTask,
                                p: {
                                    resolve: onResolve,
                                    reject: onReject
                                }
                            };
                        this.taskQueue.push(task);

                        if ( 1 === this.taskQueue.length) {
                            this.runTask();
                        }

                        return taskPromise;
                    }
                },
                    {
                        key: "runTask",
                        value: function() {
                            var task = Object(n6.a)(this.taskQueue, 1)[0];

                            if (!task || this.sourceBuffer.updating) {
                                return;
                            }

                            try {
                                task.result = task.fn();
                            } catch (e) {
                                this.taskQueue.shift();
                                task.p.reject(e);
                                this.runTask();
                            }
                        }
                    },
                    {
                        key: "onSuccess",
                        value: function() {
                            var taskQueue = this.taskQueue.shift();
                            taskQueue.p.resolve(taskQueue.result);
                            this.runTask();
                        }
                    },
                    {
                        key: "onError",
                        value: function(t) {
                            Object(n6.a)(this.taskQueue, 1)[0].p.reject(t);
                        }
                    },
                    {
                        key: "empty",
                        value: function() {
                            var taskQueue;
                            while (taskQueue = this.taskQueue.shift()) {
                                taskQueue.p.reject();
                            }
                        }
                    },
                    {
                        key: "currentTask",
                        get: function() {
                            return this.taskQueue[0];
                        }
                    }]);

                return createTaskExecutorSkeleton;
            }();
        function MediaSourceEngine(mediaSourceComponent, mimeTypeAndCodecs) {
            var sourceBuffer = mediaSourceComponent.addSourceBuffer(mimeTypeAndCodecs),
                taskExecutor = new TaskExecutor(sourceBuffer),
                appendWindowStartPosition = 0,
                appendWindowEndPosition = 1 / 0; //Infinity

            function updateAppendWindowRange(start, end) {
                appendWindowStartPosition = start;
                appendWindowEndPosition = end;
                sourceBuffer.appendWindowStart = 0;
                sourceBuffer.appendWindowEnd = appendWindowEndPosition;
                sourceBuffer.appendWindowStart = appendWindowStartPosition;

                doOnSuccess();
            }
            function doGetBufferRange(currentTime) {
                var bufferedSegments = doGetBufferedSegments() || [];

                for (let i = 0; i < bufferedSegments.length; i++) {
                    var segmentStartTime = bufferedSegments.start(i),
                        segmentEndTime = bufferedSegments.end(i);
                    if (currentTime >= segmentStartTime && currentTime < segmentEndTime) {
                        return {
                            start: segmentStartTime,
                            end: segmentEndTime
                        }
                    }
                }

                return null;
            }
            function doGetBufferedSegments() {
                try {
                    return sourceBuffer.buffered;
                } catch (t) {}
            }
            function addTask(task) {
                return taskExecutor.addTask(task);
            }
            function doOnSuccess() {
                taskExecutor.onSuccess();
            }
            function doOnError(t) {
                taskExecutor.onError(t);
            }
            sourceBuffer.mimeType = mimeTypeAndCodecs;
            sourceBuffer.addEventListener("updateend", doOnSuccess);
            sourceBuffer.addEventListener("error", doOnError);
            sourceBuffer.addEventListener("abort", doOnError);

            return {
                abort: function() {
                    var currentTask = taskExecutor.currentTask;
                    if (!(currentTask == null ? void 0 : currentTask.fn.toString().includes("remove")))
                        try {
                            sourceBuffer.abort();
                            addTask((function() {
                                return updateAppendWindowRange(appendWindowStartPosition, appendWindowEndPosition);
                            }));
                        } catch (t) {}
                },
                appendBuffer: function(buffer) {
                    sourceBuffer.appendBuffer(buffer.data);
                    return buffer;
                },
                destroy: function() {
                    sourceBuffer.removeEventListener("updateend", doOnSuccess);
                    sourceBuffer.removeEventListener("error", doOnError);
                    sourceBuffer.removeEventListener("abort", doOnError);
                    taskExecutor.empty();
                },
                getBufferRange: doGetBufferRange,
                getBufferRanges: function() {
                    var bufferedSegments = doGetBufferedSegments() || [],
                        buffers = [];

                    for (let i = 0; i < bufferedSegments.length; i++) {
                        var bufferedSegmentStart = bufferedSegments.start(i),
                            bufferedSegmentEnd = bufferedSegments.end(i);
                        buffers.push({
                            start: bufferedSegmentStart,
                            end: bufferedSegmentEnd
                        })
                    }
                    return buffers;
                },
                getBufferLength: function(currentTime) {
                    var bufferRangeWrapper = doGetBufferRange(currentTime);
                    return bufferRangeWrapper ? bufferRangeWrapper.end - currentTime : 0;
                },
                getAppendWindow: function() {
                    return {
                        appendWindowStart: sourceBuffer.appendWindowStart,
                        appendWindowEnd: sourceBuffer.appendWindowEnd
                    }
                },
                queue: addTask,
                remove: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        r = arguments.length > 1 ? arguments[1] : void 0;
                    sourceBuffer.remove(e, r || mediaSourceComponent.duration || Number.MAX_VALUE);
                },
                setAppendWindow: updateAppendWindowRange,
                setTimestampOffset: function(offset) {
                    sourceBuffer.timestampOffset = offset;
                    doOnSuccess();
                }
            }
        }
        function StreamManagerWrapper(player, mediaType, mimeTypeAndCodecs) {
            var streamManager = this,
                logger = loggersMap.get("".concat(mediaType, "-stream")),
                manifestManagerComponent = player.getComponent(n9.a), //manifest-manager
                mediaElementComponent = player.getComponent(n9.d), //media-element
                mediaSourceComponent = player.getComponent(n9.e), //"media-source"
                f = !1,
                endOfStream = !1,
                mediaSourceEngine = null,
                streamStarted = !1,
                playing = !1,
                startTime = 0,
                paused = !1,
                b = !1,
                currentSourceBuffer = void 0,
                maxBufferLength = manifestManagerComponent.maxBufferLength,
                segmentManager = new SegmentManager(player, mediaType, getCurrentTimeAndBufferLength);

            segmentManager.on("failedToLoadSegment", (function(t, e) {
                streamManager.trigger("failedToLoadSegment", t, e);
            }));
            segmentManager.on("segmentDownloaded", (function(t) {
                updateF();
                streamManager.trigger("segmentDownloaded", t);
            }));

            if (mediaType === contentTypes.AUDIO) {
                segmentManager.on("representationChanged", (function(representationOrAdaptationSet, period) {
                    var adaptationSetId = representationOrAdaptationSet.adaptationSetId,
                        currentAdaptationSet = manifestManagerComponent.getAdaptationSetById(adaptationSetId, period);

                    streamManager.trigger(n0.b, currentAdaptationSet); //"audioTrackChanged"
                }))
            }

            if (mediaType === contentTypes.VIDEO) {
                player.on(n0.T, (function() { //"profileChanged"
                    return clearBufferPromise(0, Math.max(0, mediaElementComponent.getCurrentTime() - 2));
                }));
                segmentManager.on("segmentProgress", (function(t) {
                    streamManager.trigger("segmentProgress", t);
                }));
                segmentManager.on("representationChanged", (function(manifest) {
                    streamManager.trigger(n0.U, manifest); //"profileChanging"
                }));
                segmentManager.on(n0.V, (function(e) { //periodChanging
                    player.trigger(n0.V, e); //periodChanging
                }));
            }

            player.once(n0.W, (function() { //playing
                playing = !0;
            }));

            var S = new n17.a(500, updateF);
            function abortF() {
                segmentManager.abort();
            }
            function getCurrentTimeAndBufferLength() {
                var currentTime = mediaElementComponent.getReadyState() === bufferManagerState.HAVE_NOTHING ? startTime : mediaElementComponent.getCurrentTime();
                return {
                    time: currentTime,
                    bufferLength: mediaSourceEngine.getBufferLength(currentTime)
                }
            }
            function updateF() {
                return A.apply(this, arguments);
            }
            function A() {
                return (A = Object(n3.a)(n3.b.mark((function t() {
                        var currentTimeAndBufferLengthWrapper, time, bufferLength, duration, queueLength, preferredBufferTime, preferredBufferLength, segmentQueue1, segmentQueue1Array, currentSegment, lastPeriod, duration, preferredAppendWindowEnd, appendWindowEnd, segmentAppendedMessage, bufferRangesMessage, segmentQueue2, selectedSegmentIndex;
                        return n3.b.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                        case 0:
                                            if (null !== mediaSourceEngine && !paused) {
                                                t.next = 2;
                                                break;
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            currentTimeAndBufferLengthWrapper = getCurrentTimeAndBufferLength();
                                            time = currentTimeAndBufferLengthWrapper.time;
                                            bufferLength = currentTimeAndBufferLengthWrapper.bufferLength;
                                            duration = mediaElementComponent.getDuration();
                                            queueLength = segmentManager.getQueueLengthFromTime(time);
                                            endStreamIfFinished();

                                            if ((queueLength + bufferLength) > maxBufferLength) {
                                                segmentManager.pause();
                                            } else {
                                                segmentManager.resume();
                                            }

                                            segmentManager.next();
                                            preferredBufferTime = calculatePreferredBufferTime(time);
                                            preferredBufferLength = Math.min(maxBufferLength, 120);

                                            if (!(preferredBufferTime >= queueLength && time + queueLength < duration - .1 && mediaType === contentTypes.VIDEO)) {
                                                t.next = 12;
                                                break;
                                            }
                                            return t.abrupt("return");
                                        case 12:
                                            streamStarted = !0;
                                            segmentQueue1 = segmentManager.getQueue();
                                            segmentQueue1Array = Object(n6.a)(segmentQueue1, 1);
                                            currentSegment = segmentQueue1Array[0];

                                            if (!(currentSegment && bufferLength < preferredBufferLength)) {
                                                t.next = 23;
                                                break;
                                            }
                                            if (currentSegment !== currentSourceBuffer) {
                                                t.next = 17;
                                                break;
                                            }
                                            return t.abrupt("return");
                                        case 17:
                                            currentSourceBuffer = currentSegment;

                                            if (-1 === currentSegment.index) {
                                                duration = manifestManagerComponent.duration;
                                                lastPeriod = manifestManagerComponent.getLastPeriod();

                                                if (!manifestManagerComponent.isLive() && segmentManager.getPeriod() === (lastPeriod == null ? void 0 : lastPeriod.id)) {
                                                    preferredAppendWindowEnd = duration;
                                                }

                                                appendWindowEnd = preferredAppendWindowEnd || currentSegment.appendWindowEnd + .5;

                                                mediaSourceEngine.queue((function() {
                                                        return mediaSourceEngine.setTimestampOffset(currentSegment.offset);
                                                    }
                                                )).catch((function() {} ));

                                                mediaSourceEngine.queue((function() {
                                                        return mediaSourceEngine.setAppendWindow(Math.max(0, currentSegment.appendWindowStart - 1), appendWindowEnd);
                                                    }
                                                )).then((function() {
                                                        var appendWindow = mediaSourceEngine.getAppendWindow(),
                                                            appendWindowStart = appendWindow.appendWindowStart,
                                                            appendWindowEnd = appendWindow.appendWindowEnd;

                                                        logger.info("[".concat(mediaElementComponent.getCurrentTime(), "] APPEND WINDOW: start: ").concat(appendWindowStart, ", end: ").concat(appendWindowEnd, ", offset: ").concat(currentSegment.offset));
                                                    }
                                                )).catch((function() {} ));
                                            }

                                            t.next = 21;
                                            return mediaSourceEngine.queue((function() {
                                                    return mediaSourceEngine.appendBuffer(currentSegment);
                                                }
                                            )).catch((function() {
                                                var errorInfo = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                    segmentInfo = (null == currentSegment ? void 0 : currentSegment.segmentInfo) || {},
                                                    index = segmentInfo.index,
                                                    start = segmentInfo.start,
                                                    representationId = segmentInfo.representationId,
                                                    periodId = segmentInfo.periodId,
                                                    errorMessage = "[".concat(mediaElementComponent.getCurrentTime(), "] ERROR APPEND ").concat(null == mediaType ? void 0 : mediaType.toUpperCase());

                                                errorMessage += " ".concat(index, ", ").concat(start, ", ").concat(representationId, " ").concat(periodId, ", ERROR: ").concat(errorInfo.code, ", ").concat(errorInfo.message);
                                                logger.error(errorMessage);
                                                currentSourceBuffer = void 0;

                                                if (22 === errorInfo.code) {
                                                    maxBufferLength = Math.max(10, maxBufferLength - 5);
                                                } else if (b) {
                                                    b = !1;
                                                    segmentManager.restart();
                                                } else {
                                                    b = !0;
                                                }

                                                return !1;
                                            }));
                                        case 21:
                                            if (!t.sent) {
                                                return t.stop();
                                            }

                                            b = !1;
                                            if (mediaType === contentTypes.VIDEO) {
                                                streamManager.trigger("segmentAppended", currentSegment);
                                            }
                                            segmentAppendedMessage = "APPENDED SEGMENT [".concat(currentSegment.representationId, "]:");
                                            segmentAppendedMessage += " id: ".concat(currentSegment.index, ", ");

                                            if (currentSegment.index >= 0) {
                                                segmentAppendedMessage += "start: ".concat(currentSegment.start, ", ");
                                                segmentAppendedMessage += "end: ".concat(currentSegment.start + currentSegment.duration, ", ");
                                                segmentAppendedMessage += "duration: ".concat(currentSegment.duration, ", ");
                                            }

                                            segmentAppendedMessage += "bandwidth: ".concat((currentSegment.bandwidth / 1e3).toFixed(0));
                                            logger.info("[".concat(mediaElementComponent.getCurrentTime(), "] ").concat(segmentAppendedMessage));

                                            bufferRangesMessage = mediaSourceEngine.getBufferRanges().reduce((function(result, bufferRangeWrapper) {
                                                var start = bufferRangeWrapper.start,
                                                    end = bufferRangeWrapper.end;

                                                return result += " | ".concat(start, " - ").concat(end, " ");
                                            }), "");

                                            logger.info("[".concat(mediaElementComponent.getCurrentTime(), "] BUFFER RANGES: ").concat(bufferRangesMessage));

                                            if (currentSegment.index >= 0 && f) {
                                                seekBackAFrame();
                                                f = !1;
                                            }

                                            segmentQueue2 = segmentManager.getQueue();
                                            selectedSegmentIndex = segmentQueue2.indexOf(currentSegment);

                                            if (selectedSegmentIndex >= 0) {
                                                segmentQueue2.splice(selectedSegmentIndex, 1);
                                            }

                                            !manifestManagerComponent.isLive() && segmentManager.isLastSegment(currentSegment) && doEndStream();
                                            updateF();
                                        case 23:
                                        case "end":
                                            return t.stop();
                                    }
                            }
                        ), t)
                    }
                )))).apply(this, arguments)
            }
            function calculatePreferredBufferTime(segmentTimePosition) {
                var minBufferTime = manifestManagerComponent.minBufferTime;

                if (playing) {
                    return minBufferTime;
                }

                var representation;
                if (!isNaN(manifestManagerComponent.startBufferLength)) {
                    minBufferTime = manifestManagerComponent.startBufferLength;
                }

                var segment,
                    downloadSpeed = player.getDownloadSpeed(),
                    selectedBandwidth = null === (representation = segmentManager.getRepresentation()) || void 0 === representation ? void 0 : representation.bandwidth;

                if (selectedBandwidth && downloadSpeed > 0 && 1.25 * downloadSpeed < selectedBandwidth) {
                    segment = segmentManager.findSegmentByPosition(segmentTimePosition);
                    minBufferTime = (segment == null ? void 0 : segment.duration) || 2;
                }

                return minBufferTime;
            }
            function x() {
                return (x = Object(n3.a)(n3.b.mark((function t(adaptationSet) {
                        var n, args = arguments;
                        return n3.b.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                        case 0:
                                            n = args.length > 1 && void 0 !== args[1] && args[1];
                                            if (!adaptationSet) {
                                                t.next = 7;
                                                break;
                                            }
                                            f = n;
                                            segmentManager.switchAdaptation(adaptationSet, !!mediaSourceEngine);
                                            t.next = 6;
                                            return clearBufferPromise(0);
                                        case 6:
                                            streamManager.trigger(n0.b, adaptationSet); //audioTrackChanged
                                        case 7:
                                        case "end":
                                            return t.stop();
                                    }
                            }
                        ), t)
                    }
                )))).apply(this, arguments)
            }
            function P() {
                return (P = Object(n3.a)(n3.b.mark((function t(adaptationSetBandwidth, n) {
                        var r, segment, args = arguments;
                        return n3.b.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                        case 0:
                                            r = args.length > 2 && void 0 !== args[2] && args[2];
                                            if (adaptationSetBandwidth !== segmentManager.getBandwidth()) {
                                                t.next = 3;
                                                break;
                                            }
                                            return t.abrupt("return");
                                        case 3:
                                            segmentManager.pause();
                                            if (n && mediaSourceEngine) {
                                                t.next = 7;
                                                break;
                                            }
                                            segmentManager.switchProfile(adaptationSetBandwidth, !!mediaSourceEngine);
                                            return t.abrupt("return");
                                        case 7:
                                            if (!r) {
                                                t.next = 13;
                                                break;
                                            }
                                            t.next = 10;
                                            return clearBufferPromise();
                                        case 10:
                                            f = !0;
                                            t.next = 17;
                                            break;
                                        case 13:
                                            segment = segmentManager.getNextSegmentToSwitch(mediaElementComponent.getCurrentTime());
                                            if (null === segment) {
                                                t.next = 17;
                                                break;
                                            }
                                            t.next = 17;
                                            return clearBufferPromise(Math.max(segment.start, 5) - .1);
                                        case 17:
                                            segmentManager.switchProfile(adaptationSetBandwidth, !!mediaSourceEngine);
                                        case 18:
                                        case "end":
                                            return t.stop();
                                    }
                            }
                        ), t)
                    }
                )))).apply(this, arguments)
            }
            function endStreamIfFinished() {
                if (manifestManagerComponent.isLive() || "open" !== mediaSourceComponent.getReadyState()) {
                    return;
                }

                var segments = segmentManager.getAllSegments();
                if (!segments) {
                    return;
                }

                var lastSegment = segments[segments.length - 1],
                    currentTime = mediaElementComponent.getCurrentTime(),
                    lastPeriod = manifestManagerComponent.getLastPeriod();

                if (currentTime > (null == lastSegment ? void 0 : lastSegment.start) && manifestManagerComponent.findPeriodByTime(currentTime) === lastPeriod && segmentManager.getPeriod() === lastPeriod.id) {
                    doEndStream();
                }
            }
            function doEndStream() {
                endOfStream = !0;
                streamManager.trigger("endOfStream");
            }
            function clearBufferPromise(timeFrom, timeTo) {
                if (!mediaSourceEngine || timeTo <= timeFrom) {
                    return Promise.resolve();
                }

                mediaSourceEngine.queue((function() {
                        return mediaSourceEngine.remove(timeFrom, timeTo);
                    }
                )).then((function() {
                        streamManager.trigger("sourceBufferCleared", timeFrom, timeTo);
                        logger.info("[".concat(mediaElementComponent.getCurrentTime(), "] CLEAR BUFFER: ").concat(timeFrom, " - ").concat(timeTo || "Infinity"));
                    }
                )).catch((function() {} ))
            }
            function seekBackAFrame() {
                mediaElementComponent.seek(mediaElementComponent.getCurrentTime() - .05);
            }
            function doFindSegment(segmentTimePosition) {
                return segmentManager.findSegmentByPosition(segmentTimePosition);
            }
            return {
                on: streamManager.on.bind(streamManager),
                off: streamManager.off.bind(streamManager),
                trigger: streamManager.trigger.bind(streamManager),
                init: function() {
                    currentSourceBuffer = void 0;
                    mediaSourceEngine = new MediaSourceEngine(mediaSourceComponent, mimeTypeAndCodecs);
                    S.start();
                    segmentManager.start();
                },
                abort: abortF,
                update: updateF,
                pause: function() {
                    paused = !0;
                },
                resume: function() {
                    paused = !1;
                },
                stop: function() {
                    S.stop();
                    abortF();
                    mediaSourceComponent.endOfStream();
                    segmentManager.stop();
                    if (mediaSourceEngine !== null && "open" === mediaSourceComponent.getReadyState() && mediaSourceEngine.abort()) {
                        mediaSourceEngine.destroy();
                        mediaSourceEngine = null;
                    }
                },
                clearBuffer: clearBufferPromise,
                getAdaptation: function() {
                    return segmentManager.getAdaptation();
                },
                findSegmentByPosition: doFindSegment,
                getNearestSegmentPosition: function(t) {
                    var segment = doFindSegment(t);
                    return null !== segment ? segment.start : -1;
                },
                setStartTime: function(newStartTime) {
                    startTime = newStartTime;
                },
                isStreamStarted: function() {
                    return streamStarted;
                },
                isProcessingRequest: function() {
                    return segmentManager.isProcessingRequest();
                },
                switchProfile: function(t, e) {
                    return P.apply(this, arguments);
                },
                updatePosition: function(time) {
                    startTime = time;
                    segmentManager.update();
                    updateF();
                },
                switchTrack: function(t) {
                    return x.apply(this, arguments);
                },
                setMaxBufferLength: function(bufferLength) {
                    manifestManagerComponent.maxBufferLength = bufferLength;
                },
                getRepresentation: function() {
                    return segmentManager.getRepresentation();
                },
                getRepresentations: function() {
                    var adaptation = segmentManager.getAdaptation();
                    return adaptation == null ? void 0 : adaptation.representations;
                },
                sourceOpen: function() {
                    endOfStream = !1;
                },
                isEndOfStream: function() {
                    return endOfStream;
                },
                endOfStream: function(t) {
                    endOfStream = t;
                },
                getMediaType: function() {
                    return mediaType;
                },
                getSegmentManager: function() {
                    return segmentManager;
                }
            }
        }
        function isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], (function() {} )));
                return !0;
            } catch (t) {
                return !1
            }
        }
        StreamManagerWrapper.prototype = Object.create(n14.a.prototype);
        var Qt = n11.a.isTizen() ? .1 : 0,
            StreamManagerComponent = function(args) {
                Object(n4.a)(createStreamManagerComponentSkeleton, args);
                var e, n = (e = createStreamManagerComponentSkeleton,
                        function() {
                            var t, n = Object(n4.b)(e);
                            if (isNativeReflectConstruct()) {
                                var constructor = Object(n4.b)(this).constructor;
                                t = Reflect.construct(n, arguments, constructor);
                            } else {
                                t = n.apply(this, arguments);
                            }

                            return Object(n4.c)(this, t);
                        }
                );
                function createStreamManagerComponentSkeleton(player) {
                    var streamManagerComponent;

                    Object(n5.a)(this, createStreamManagerComponentSkeleton);
                    streamManagerComponent = n.call(this, player);
                    streamManagerComponent.player = player;
                    streamManagerComponent.options = player.options;
                    streamManagerComponent.timeShift = player.timeShift;
                    streamManagerComponent.mediaElement = player.getComponent(n9.d); //"media-element"
                    streamManagerComponent.manifestManager = player.getComponent(n9.a); //"manifest-manager"
                    streamManagerComponent.streamManager = null;
                    streamManagerComponent.videoStream = null;
                    player.addComponent(Object(n4.d)(streamManagerComponent), n9.b); //"stream-manager"
                    streamManagerComponent.isLive = !1;
                    streamManagerComponent.liveDelay = 0;
                    streamManagerComponent.lastPosition = -1;
                    streamManagerComponent.deadlockTimeout = 0;
                    streamManagerComponent.decodedFrameCount = -1;
                    streamManagerComponent.frameDeadlockTimeout = null;
                    streamManagerComponent.hasFrameDeadlockTimeout = !1;
                    streamManagerComponent.hasDeadlockTimeout = !1;
                    streamManagerComponent.metric = {};
                    streamManagerComponent.segmentList = [];
                    streamManagerComponent.lastProfile = null;
                    streamManagerComponent.timer = new n17.a(250, (function() {
                        return streamManagerComponent.monitor();
                    }));
                    streamManagerComponent.player.on(n0.e, (function() { //destroy
                        return streamManagerComponent.destroy();
                    }));
                    streamManagerComponent.player.on(n0.t, (function() { //stopped
                        return streamManagerComponent.destroy();
                    }));
                    streamManagerComponent.player.on(n0.f, (function() { //error
                        return streamManagerComponent.destroy();
                    }));
                    streamManagerComponent.player.on(n0.x, (function() { //waiting
                        return streamManagerComponent.seekToNextBufferRangeStart();
                    }));

                    return streamManagerComponent;
                }
                Object(n5.b)(createStreamManagerComponentSkeleton, [{
                    key: "observe",
                    value: function() {
                        var streamManager = this;

                        this.destroy();
                        this.isLive = this.manifestManager.isLive();
                        this.timer.start();
                        this.streamManager = this.player.getComponent(n9.b); //stream-manager
                        this.videoStream = this.streamManager.getVideoStream();
                        if (this.videoStream) {
                            this.videoStream.on("segmentAppended", (function(segment) {
                                return streamManager.onSegmentAppended(segment);
                            }));

                            this.videoStream.on("sourceBufferCleared", (function(start, stop) {
                                return streamManager.onSourceBufferCleared(start, stop);
                            }));
                        }
                        if (this.isLive) {
                            this.liveDelay = this.manifestManager.getLiveDelay();
                        }
                    }
                },
                    {
                        key: "seekToNextBufferRangeStart",
                        value: function() {
                            var lastTimePosition = this.mediaElement.getCurrentTime(),
                                timeRanges = this.mediaElement.getPlayed(),
                                n = (timeRanges == null ? void 0 : timeRanges.length) ? lastTimePosition + 2 : Number.MAX_SAFE_INTEGER;

                            if (!this.mediaElement.hasBuffered()) {
                                return;
                            }

                            var bufferRangeWrapper = this.mediaElement.getBufferRange(lastTimePosition, n);

                            if (bufferRangeWrapper && bufferRangeWrapper.start !== lastTimePosition) {
                                this.mediaElement.seek(bufferRangeWrapper.start + Qt);
                            }
                        }
                    },
                    {
                        key: "monitor",
                        value: function() {
                            var streamManager = this,
                                startTime = this.streamManager.getStartTime(),
                                processingRequest = this.streamManager.isProcessingRequest(),
                                lastTimePosition = this.mediaElement.getCurrentTime(),
                                bufferLength = this.mediaElement.getBufferLengthFromTime(lastTimePosition),
                                playerState = this.mediaElement.getReadyState(),
                                timeRanges = this.mediaElement.getPlayed(),
                                u = timeRanges == null ? void 0 : timeRanges.length,
                                currentTime = Date.now(),
                                streamsStarted = this.streamManager.isStreamsStarted(),
                                decodedFramesCountEnabled = !this.options.get(n1.e); //disableCheckingDecodedFramesCount

                            this.detectProfileChange(lastTimePosition);

                            if (this.options.get(n1.zb) && streamsStarted && !u && 0 === lastTimePosition && startTime > 0) { //n1.zb=smartTV
                                this.mediaElement.seek(startTime);
                            }

                            if (0 === bufferLength && playerState <= bufferManagerState.HAVE_CURRENT_DATA) {
                                var actualStartTime = this.manifestManager.getStartTime();
                                u && this.timeShift.isEnabled() && lastTimePosition < actualStartTime ? this.mediaElement.seek(actualStartTime) : this.seekToNextBufferRangeStart();
                            }

                            if (this.mediaElement.isPaused()) {
                                this.hasFrameDeadlockTimeout = !1;
                                return void clearTimeout(this.frameDeadlockTimeout);
                            }

                            if (playerState === bufferManagerState.bufferLength && bufferLength < 2) {
                                this.seekToNextBufferRangeStart();
                            }

                            if (playerState === bufferManagerState.HAVE_METADATA && startTime > lastTimePosition && Math.abs(startTime - lastTimePosition) < 2) {
                                this.mediaElement.seek(startTime);
                            }

                            var decodedFrameCount = this.mediaElement.getDecodedFrameCount();

                            if (decodedFrameCount < this.decodedFrameCount) {
                                decodedFrameCount = this.decodedFrameCount;
                            }
                            if (decodedFramesCountEnabled && this.videoStream && bufferLength > 0 && this.decodedFrameCount >= 0 && decodedFrameCount === this.decodedFrameCount && !document.hidden) {
                                if (!this.hasFrameDeadlockTimeout) {
                                    var p = 3e3;

                                    if (this.options.get(n1.zb)) { //smartTV
                                        p += 3e3;
                                    }

                                    this.decodedFrameCount = decodedFrameCount;
                                    this.hasFrameDeadlockTimeout = !0;
                                    this.frameDeadlockTimeout = setTimeout((function() {
                                        streamManager.hasFrameDeadlockTimeout = !1;
                                        streamManager.mediaElement.seek(streamManager.mediaElement.getCurrentTime() + .1);
                                    }), p);
                                }
                            } else {
                                this.hasFrameDeadlockTimeout = !1;
                                clearTimeout(this.frameDeadlockTimeout);
                            }
                            if (playerState > bufferManagerState.HAVE_METADATA && !processingRequest && (this.lastPosition > 0 && this.lastPosition === lastTimePosition || 0 === bufferLength)) {
                                var g = this.mediaElement.getBufferRange(lastTimePosition);
                                null !== g && lastTimePosition + 5 > g.start ? this.mediaElement.seek(g.start + 1e-5) : !this.hasDeadlockTimeout && this.isLive && (this.hasDeadlockTimeout = !0,
                                    this.deadlockTimeout = setTimeout((function() {
                                        var streamManager = streamManager.streamManager;
                                        if (streamManager != null) {
                                            streamManager.reconnect(0);
                                        }
                                        streamManager.hasDeadlockTimeout = !1;
                                    }), 3e3))
                            } else {
                                clearTimeout(this.deadlockTimeout);
                                this.hasDeadlockTimeout = !1;
                                this.decodedFrameCount = decodedFrameCount;
                            }

                            if (playerState > bufferManagerState.HAVE_CURRENT_DATA) {
                                this.lastPosition = lastTimePosition;
                                return;
                            }

                            if (this.metric.time !== lastTimePosition || this.metric.bufferLength !== bufferLength || decodedFramesCountEnabled && this.metric.decodedFrameCount !== decodedFrameCount) {
                                this.metric.lastChange = currentTime;
                                this.metric.time = lastTimePosition;
                                this.metric.bufferLength = bufferLength;
                                this.metric.decodedFrameCount = decodedFrameCount;
                            } else if ((currentTime - this.metric.lastChange) / 1e3 > 2 && streamsStarted && (this.metric.lastChange = currentTime, bufferLength > 0)) {
                                var currentVideoStream = this.streamManager.getVideoStream(),
                                    segment = (currentVideoStream == null ? void 0 : currentVideoStream.findSegmentByPosition(lastTimePosition)) || {},
                                    segmentStart = segment.start,
                                    segmentDuration = segment.duration;

                                if (segmentStart && segmentDuration) {
                                    this.mediaElement.seek(segmentStart + segmentDuration);
                                }
                            }

                            this.lastPosition = lastTimePosition;
                        }
                    },
                    {
                        key: "onSegmentAppended",
                        value: function(segment) {
                            var segmentIndex = segment.index,
                                currentRepresentation = segment.representation,
                                start = segment.start,
                                duration = segment.duration;

                            if (!(segmentIndex < 0)) {
                                var nextSegment = start + duration,
                                    correctSegment = this.segmentList.find((function(currentSegment) {
                                        return currentSegment.start === start;
                                    }));

                                if (correctSegment) {
                                    correctSegment.representation = currentRepresentation;
                                } else {
                                    this.segmentList.push({
                                        start: start,
                                        stop: nextSegment,
                                        representation: currentRepresentation
                                    })
                                }
                            }
                        }
                    },
                    {
                        key: "onSourceBufferCleared",
                        value: function(start, stop) {
                            this.segmentList = this.segmentList.reduce((function(result, segment) {
                                start <= segment.start && stop >= segment.stop || result.push(segment);
                                return result;
                            }), []);
                        }
                    },
                    {
                        key: "detectProfileChange",
                        value: function(currentTime) {
                            var correctSegment = this.segmentList.find((function(segment) {
                                var start = segment.start,
                                    stop = segment.stop;
                                return currentTime >= start && currentTime <= stop;
                            }));

                            if (!correctSegment) {
                                return;
                            }

                            var representation = correctSegment.representation,
                                bandwidth = representation.bandwidth;

                            if (bandwidth !== this.lastProfile) {
                                this.trigger(n0.T, representation); //profileChanged
                            }

                            this.lastProfile = bandwidth;
                        }
                    },
                    {
                        key: "destroy",
                        value: function() {
                            clearTimeout(this.deadlockTimeout);
                            clearTimeout(this.frameDeadlockTimeout);
                            this.decodedFrameCount = -1;
                            this.lastPosition = 0;
                            this.hasDeadlockTimeout = !1;
                            this.hasDeadlockTimeout = !1;
                            this.hasFrameDeadlockTimeout = !1;
                            this.timer.stop();
                            this.lastProfile = null;
                            this.segmentList = [];
                        }
                    }]);

                return createStreamManagerComponentSkeleton;
            }(n14.a),
            delay = .5,
            $t = 2,
            getCurrentPeriodInfo = function(period) {
                return {
                    id: period.id,
                    start: period.start,
                    end: period.end,
                    duration: period.duration
                }
            },
            Manifest = function() {
                function createManifestSkeleton(player) {
                    var manifestManager = this;

                    Object(n5.a)(this, createManifestSkeleton);
                    this.player = player;
                    this.currentPeriod = null;
                    this.manifestManager = player.getComponent(n9.a); //manifest-manager
                    this.mediaElement = player.getComponent(n9.d); //media-element
                    this.logger = loggersMap.get("period");
                    this.timer = new n17.a(500, (function() {
                        return manifestManager.onTimer();
                    }), !0);
                    this.player.once(n0.W, (function() { //playing
                        return manifestManager.init();
                    }));
                    this.player.once(n0.e, (function() { //destroy
                        return manifestManager.timer.stop();
                    }));
                    this.player.once(n0.t, (function() { //stopped
                        return manifestManager.timer.stop();
                    }));
                    this.player.once(n0.f, (function() { //error
                        return manifestManager.timer.stop();
                    }));
                }
                Object(n5.b)(createManifestSkeleton, [{
                    key: "init",
                    value: function() {
                        this.timer.start();
                    }
                },
                    {
                        key: "onTimer",
                        value: function() {
                            var currentPeriod,
                                e = this,
                                periodTime = this.mediaElement.getCurrentTime(),
                                period = this.manifestManager.findPeriodByTime(periodTime);

                            if (this.currentPeriod !== period) {
                                this.currentPeriod && this.currentPeriod.off();
                            }

                            this.updatePeriod(period, periodTime);
                            currentPeriod = this.currentPeriod;
                            var numEventStreams = currentPeriod == null ? void 0 : currentPeriod.eventStreams.length;

                            if (!numEventStreams) {
                                return;
                            }

                            this.currentPeriod.eventStreams.forEach((function(eventStream) {
                                eventStream.filter((function(event) {
                                    var eventFiredTime = event.fired,
                                        eventStartTime = event.start;

                                    return eventStartTime >= periodTime - delay && eventStartTime < periodTime + $t && !eventFiredTime;
                                })).forEach((function(event) {
                                    e.player.trigger(n0.X, event); //streamEvent
                                    event.fired = Date.now();
                                }))
                            }))
                        }
                    },
                    {
                        key: "getCurrentPeriod",
                        value: function() {
                            return getCurrentPeriodInfo(this.currentPeriod);
                        }
                    },
                    {
                        key: "updatePeriod",
                        value: function(currentPeriod, e) {
                            var manifestManager = this;

                            this.currentPeriod = currentPeriod;
                            this.currentPeriod.on(n0.q, (function(t) { //periodUpdated
                                return manifestManager.player.trigger(n0.q, getCurrentPeriodInfo(t)); //periodUpdated
                            }));
                            this.player.trigger(n0.Y, getCurrentPeriodInfo(this.currentPeriod)); //period
                            var period = this.currentPeriod,
                                id = period.id,
                                start = period.start,
                                duration = period.duration;

                            this.logger.info("[".concat(e, "] PERIOD CHANGED: ").concat(this.currentPeriod.id, " ").concat(id, ", ").concat(start, " ").concat(duration));
                        }
                    }]);

                return createManifestSkeleton;
            }();
        function getMappedProperties(originalObject, enumerablePropertiesOnly) { //duplicate method
            var mappedProperties = Object.keys(originalObject);
            if (Object.getOwnPropertySymbols) {
                var propertySymbols = Object.getOwnPropertySymbols(originalObject);
                if (enumerablePropertiesOnly) {
                    propertySymbols = propertySymbols.filter((function(propertyName) {
                        return Object.getOwnPropertyDescriptor(originalObject, propertyName).enumerable;
                    }));
                }

                mappedProperties.push.apply(mappedProperties, propertySymbols);
            }

            return mappedProperties;
        }
        function StreamManager(player) {
            var e = this,
                mediaElementComponent = player.getComponent(n9.d), //media-element
                manifestManagerComponent = player.getComponent(n9.a), //manifest-manager
                timeShift = player.timeShift,
                options = player.options,
                currentSeekPrecision = options.get(n1.Ab), //seekPrecision
                manifest = new Manifest(player),
                streamManagerComponent = new StreamManagerComponent(player),
                p = new n17.a(5e3, (function() {
                    var bufferBehind = options.get(n1.c); //"bufferBehind"

                    if (!bufferBehind || mediaElementComponent.isSeeking()) {
                        return;
                    }

                    var e = mediaElementComponent.getCurrentTime() - bufferBehind;
                    e > 0 && clearBufferF(0, e);
                })),
                mediaElement = null,
                m = !1,
                startTime = 0,
                allAvailableStreamManagers = [],
                videoStreamManager = null,
                audioStreamManager = null,
                audioLanguage = null,
                reconnecting = !1;
            function loadMediaStream(mediaType, mimeTypeAndCodecs) {
                var streamManagerWrapper = new StreamManagerWrapper(player, mediaType, mimeTypeAndCodecs);

                streamManagerWrapper.on("endOfStream", endOfStreamF);
                streamManagerWrapper.on("segmentProgress", (function(t) {
                    e.trigger("segmentProgress", t);
                }));
                streamManagerWrapper.on("segmentDownloaded", (function(t) {
                    doWhenSegmentDownloaded(t);
                }));
                streamManagerWrapper.on("failedToLoadSegment", (function(t, n) {
                    if (reconnecting) {
                        return;
                    }

                    doWhenSegmentDownloaded(t);

                    if (m && getBufferLengthF() < 1) {
                        reconnectF(2e3);
                    }

                    if (t.status !== n10.b) {
                        return;
                    }

                    e.trigger("failedToLoadSegment", t.url, n);
                }));
                streamManagerWrapper.on(n0.b, (function(e) { //audioTrackChanged
                    var currentAudioTrack = getCurrentAudioTrack(e);
                    audioLanguage = currentAudioTrack.lang;
                    player.trigger(n0.b, currentAudioTrack); //audioTrackChanged
                }));
                streamManagerWrapper.on(n0.U, (function(player) { ////"profileChanging"
                    return e.trigger(n0.U, player); //"profileChanging"
                }));

                return streamManagerWrapper;
            }
            function doWhenSegmentDownloaded(e) {
                player.trigger(n0.o, function(obj) { //networkMetric
                    for (let i = 1; i < arguments.length; i++) {
                        var originalObject = null != arguments[i] ? arguments[i] : {};

                        if (i % 2 ) {
                            getMappedProperties(Object(originalObject), !0).forEach((function(property) {
                                Object(n2.a)(obj, property, originalObject[property]);
                            }))
                        } else if (Object.getOwnPropertyDescriptors) {
                            Object.defineProperties(obj, Object.getOwnPropertyDescriptors(originalObject));
                        } else {
                            getMappedProperties(Object(originalObject)).forEach((function(propertyName) {
                                Object.defineProperty(obj, propertyName, Object.getOwnPropertyDescriptor(originalObject, propertyName));
                            }))
                        }
                    }

                    return obj;
                }({}, e, {
                    downloadingBitrate: e.bps,
                    type: "SEGMENT"
                }))
            }
            function switchProfileF(selectedBandwidth, e, r) {
                var a, period = manifestManagerComponent.findPeriodByTime(mediaElementComponent.getCurrentTime());
                manifestManagerComponent.getRepresentationByBandwidth(selectedBandwidth, contentTypes.VIDEO, period);
                p.restart();
                a = videoStreamManager;

                if (a !== null && a !== void 0) {
                    a.switchProfile(selectedBandwidth, e, r);
                }
            }
            function switchAudioTrackF(lang, e) {
                var period = manifestManagerComponent.findPeriodByTime(mediaElementComponent.getCurrentTime()),
                    audioAdaptation = manifestManagerComponent.getAudioAdaptation(lang, period);
                audioStreamManager.switchTrack(audioAdaptation, e);
            }
            function endOfStreamF() {
                var allStreamsEnded = allAvailableStreamManagers.every((function(streamManagerWrapper) {
                    return streamManagerWrapper.isEndOfStream();
                }));

                if ("open" === mediaElement.getReadyState() && allStreamsEnded) {
                    mediaElement.endOfStream();
                }
            }
            function reconnectF() {
                var timeout = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2e3;
                e.trigger(n0.s, timeout); //reconnect
            }
            function clearBufferF(timeFrom, timeTo) {
                "open" === mediaElement.getReadyState() && allAvailableStreamManagers.forEach((function(streamManagerWrapper) {
                    return streamManagerWrapper.clearBuffer(timeFrom, timeTo);
                }))
            }
            function getDurationF() {
                return timeShift.getDvrWindow() >= 0 ? timeShift.getDvrWindow() : timeShift.getStart() >= 0 && timeShift.getStop() < 0 ? timeShift.getLiveNowUTC() < 0 ? 0 : timeShift.getLiveNowUTC() - timeShift.getStart() : timeShift.getStart() >= 0 && timeShift.getStop() >= 0 ? timeShift.getStop() - timeShift.getStart() : mediaElementComponent ? mediaElementComponent.getDuration() : 0;
            }
            function getBufferLengthF() {
                return (null == mediaElementComponent ? void 0 : mediaElementComponent.getBufferLength()) || 0;
            }
            function findStartTime() {
                var startTime = options.get(n1.Eb), //"startTime"
                    latest = 0;

                if (startTime) {
                    options.set(n1.Eb, null); //startTime
                    return startTime;
                }
                if (m) {
                    latest = M(); //breakpoint here
                    allAvailableStreamManagers.forEach((function(streamManagerWrapper) {
                        return streamManagerWrapper.setStartTime(latest);
                    }));
                } else {
                    var possibleStartTimes = [];
                    allAvailableStreamManagers.forEach((function(streamManagerWrapper) {
                        var firstSegment,
                            availableAdaptations = manifestManagerComponent.getAdaptations(streamManagerWrapper.getMediaType()),
                            o = Object(n6.a)(availableAdaptations, 1)[0],
                            segmentList = o.segmentList,
                            nearestSegmentPosition = streamManagerWrapper.getNearestSegmentPosition(segmentList == null || null === (firstSegment = segmentList[0]) || void 0 === firstSegment ? void 0 : firstSegment.start);

                        streamManagerWrapper.setStartTime(nearestSegmentPosition);
                        possibleStartTimes.push(nearestSegmentPosition);
                    }));
                    latest = Math.max.apply(Math, possibleStartTimes);
                }

                return Math.round(1e3 * latest) / 1e3;
            }
            function M() {
                var e = 0,
                    baseTimeStamp = timeShift.getBaseTimeStamp(),
                    startTime = manifestManagerComponent.getStartTime(),
                    lastSegmentEndTime = manifestManagerComponent.getLastSegmentEndTimeByType(contentTypes.VIDEO) || manifestManagerComponent.getLastSegmentEndTimeByType(contentTypes.AUDIO),
                    lastSegmentEndWithDelay = lastSegmentEndTime - manifestManagerComponent.getLiveDelay(),
                    u = timeShift.getPlayStart() - baseTimeStamp,
                    c = timeShift.getStart() - baseTimeStamp,
                    l = player.getLiveNowUTC() - baseTimeStamp - lastSegmentEndTime;

                e = lastSegmentEndWithDelay;

                if (l > 0) {
                    e += l;
                }

                if (timeShift.getMode() === n21.a.LIVE_DELAYED && u >= 0 && c <= u && lastSegmentEndWithDelay >= u) {
                    e = u - c;

                    if (timeShift.getDvrWindow() > 0) {
                        e = u;
                    }
                }

                return Math.max(startTime, e);
            }
            function getCurrentAudioTrack(adaptation) {
                return new n22.a(adaptation);
            }
            p.immediateUpdate = !1;
            streamManagerComponent.on(n0.T, (function(t) { //profileChanged
                return function(t) {
                    e.trigger(n0.T, t); //profileChanged
                }(t);
            }));

            return {
                on: e.on.bind(e),
                off: e.off.bind(e),
                trigger: e.trigger.bind(e),
                getCurrentTime: function() {
                    var currentTime = (null == mediaElementComponent ? void 0 : mediaElementComponent.getCurrentTime()) || 0;
                    return 0 === currentTime || timeShift.isEnabled() && timeShift.isVod() ? currentTime : m && !timeShift.isEnabled() && currentTime > 0 ? currentTime + timeShift.getAvailabilityStartTime() : m && timeShift.isEnabled() ? timeShift.getBaseTimeStamp() + currentTime - timeShift.getStart() : currentTime;
                },
                getDuration: getDurationF,
                destroy: function() {
                    p.stop();
                    allAvailableStreamManagers.forEach((function(streamManagerWrapper) {
                        streamManagerWrapper.stop();
                        streamManagerWrapper = null;
                    }));
                    allAvailableStreamManagers = [];
                },
                reconnect: reconnectF,
                initStreams: function() {
                    allAvailableStreamManagers.forEach((function(streamManagerWrapper) {
                        return streamManagerWrapper.init();
                    }));

                    p.start();
                },
                createStreams: function(newMediaElement, n) {
                    mediaElement = newMediaElement;
                    m = n;
                    reconnecting = !1;

                    var storage, firstAudioProfile, browser, browserConnection, defaultBitrate, cachedBitrate, bandwidth, downlinkBitrate, preferredBitrate,
                        audioMimeTypeAndCodecs = manifestManagerComponent.getAdaptationSetMimeType(contentTypes.AUDIO),
                        videoMimeTypeAndCodecs = manifestManagerComponent.getAdaptationSetMimeType(contentTypes.VIDEO);

                    if (audioMimeTypeAndCodecs) {
                        var defaultAudioLanguage = options.get(n1.Bb); //"defaultAudioLanguage"

                        audioStreamManager = loadMediaStream(contentTypes.AUDIO, audioMimeTypeAndCodecs);
                        allAvailableStreamManagers.push(audioStreamManager);
                        switchAudioTrackF(audioLanguage || defaultAudioLanguage || n11.a.getLanguage());
                    }
                    if (videoMimeTypeAndCodecs) {
                        videoStreamManager = loadMediaStream(contentTypes.VIDEO, videoMimeTypeAndCodecs);
                    }

                    allAvailableStreamManagers.push(videoStreamManager);
                    startTime = findStartTime();

                    if (videoMimeTypeAndCodecs) {
                        var selectedPeriod = manifestManagerComponent.findPeriodByTime(startTime),
                            selectedAdaptationSet = manifestManagerComponent.getAdaptationSetByType(contentTypes.VIDEO, selectedPeriod),
                            averageBandwidth = manifestManagerComponent.getAverageBandwidth(null == selectedAdaptationSet ? void 0 : selectedAdaptationSet.representations),
                            finalBitrate = (defaultBitrate = 1e3 * options.get(n1.Cb), //"defaultBitrate"
                                cachedBitrate = options.get(n1.Db) ? //"lastBitrateCaching"
                                    parseFloat(null === (storage = localStorage) || void 0 === storage ? void 0 : storage.getItem(redgalaxyPlayerBitrateLabel)) : 0,
                                bandwidth = (null === (firstAudioProfile = manifestManagerComponent.getAudioProfiles()[0]) || void 0 === firstAudioProfile ? void 0 : firstAudioProfile.bandwidth) || 0,
                                downlinkBitrate = options.get(n1.v) ? //"useDownlinkBitrate"
                                    1e6 * (null === (browser = navigator) || void 0 === browser || null === (browserConnection = browser.connection) || void 0 === browserConnection ? void 0 : browserConnection.downlink) - bandwidth : 0,
                            (preferredBitrate = defaultBitrate || downlinkBitrate || cachedBitrate) && manifestManagerComponent.getVideoNearestBandwidth(preferredBitrate) || averageBandwidth),
                            selectedRepresentation = manifestManagerComponent.getRepresentationByBandwidth(finalBitrate, contentTypes.VIDEO, selectedPeriod);

                        switchProfileF(finalBitrate);
                        e.trigger(n0.T, selectedRepresentation); //"profileChanged"
                    }
                    streamManagerComponent.observe();
                    manifest.updatePeriod(manifestManagerComponent.findPeriodByTime(startTime), startTime);
                },
                hasActiveStreams: function() {
                    return allAvailableStreamManagers.length;
                },
                getBufferLength: getBufferLengthF,
                getStartTime: function() {
                    return startTime;
                },
                clearBuffer: clearBufferF,
                updatePosition: function(t) {
                    allAvailableStreamManagers.forEach((function(e) {
                        return e.updatePosition(t);
                    }))
                },
                seek: function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : currentSeekPrecision,
                        o = getDurationF() - player.getLiveDelay(),
                        segmentTime = o * e / 100;

                    if (segmentTime > o) {
                        segmentTime = o;
                    }

                    if (timeShift.isEnabled()) {
                        var u = manifestManagerComponent.getStartTime();
                        segmentTime = Math.max(u, player.getLiveStartUTC() + segmentTime - timeShift.getBaseTimeStamp());
                    }

                    if ("time" !== r) {
                        segmentTime = videoStreamManager.getNearestSegmentPosition(segmentTime);
                    }

                    if (100 === e && timeShift.isEnabled()) {
                        timeShift.setLive();
                        p.restart();
                        startTime = findStartTime();
                        return void mediaElementComponent.seek(startTime);
                    }

                    if (segmentTime < 0) {
                        return;
                    }

                    mediaElementComponent.seek(segmentTime);
                },
                seekToHead: function() {
                    mediaElementComponent.seek(M());
                },
                switchProfile: switchProfileF,
                getProfiles: function() {
                    return videoStreamManager.getRepresentations();
                },
                getCurrentProfile: function() {
                    return videoStreamManager.getRepresentation();
                },
                getCurrentAudioTrack: function() {
                    return getCurrentAudioTrack(audioStreamManager.getAdaptation());
                },
                getCurrentPeriod: function() {
                    return null == manifest ? void 0 : manifest.getCurrentPeriod();
                },
                setMaxBufferLength: function(maxBufferLength) {
                    allAvailableStreamManagers.forEach((function(streamManager) {
                        return streamManager.setMaxBufferLength(maxBufferLength);
                    }))
                },
                isReconnecting: function() {
                    return reconnecting;
                },
                isStreamsStarted: function() {
                    return allAvailableStreamManagers.every((function(stream) {
                        return stream.isStreamStarted();
                    }))
                },
                isProcessingRequest: function() {
                    return allAvailableStreamManagers.every((function(stream) {
                        return !stream.isProcessingRequest();
                    }))
                },
                setReconnecting: function() {
                    reconnecting = !0;
                },
                switchAudioTrack: switchAudioTrackF,
                sourceOpen: function() {
                    allAvailableStreamManagers.forEach((function(stream) {
                        return stream.endOfStream(!1);
                    }))
                },
                getAudioStream: function() {
                    return audioStreamManager;
                },
                getVideoStream: function() {
                    return videoStreamManager;
                }
            }
        }
        function isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], (function() {} )));
                return !0;
            } catch (t) {
                return !1;
            }
        }
        StreamManager.prototype = Object.create(n14.a.prototype);
        var findBandwidthsInRepresentations = function(representations) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER,
                    representationsDescendingOrder = representations.sort((function(repr1, repr2) {
                        return repr2.bandwidth - repr1.bandwidth;
                    }));

                if (!representationsDescendingOrder.length) {
                    return [];
                }
                var reps = representationsDescendingOrder.filter((function(representation) {
                    var width = representation.width;
                    return e >= (width || Number.MAX_SAFE_INTEGER);
                }));

                if (!reps.length) {
                    reps = [representationsDescendingOrder[representationsDescendingOrder.length - 1]];
                }

                return reps.map((function(representation) {
                    return representation.bandwidth;
                }))
            },
            AdaptiveBitrateManager = function(args) {
                Object(n4.a)(createAdaptiveBitrateManagerSkeleton, args);
                var e, n = (e = createAdaptiveBitrateManagerSkeleton,
                        function() {
                            var t, n = Object(n4.b)(e);
                            if (isNativeReflectConstruct()) {
                                var constructor = Object(n4.b)(this).constructor;
                                t = Reflect.construct(n, arguments, constructor);
                            } else {
                                t = n.apply(this, arguments);
                            }
                            return Object(n4.c)(this, t);
                        }
                );
                function createAdaptiveBitrateManagerSkeleton(player) {
                    var adaptiveBitrateManager;

                    Object(n5.a)(this, createAdaptiveBitrateManagerSkeleton);
                    adaptiveBitrateManager = n.call(this, player);
                    adaptiveBitrateManager.mediaElement = player.getComponent(n9.d); //"media-element"
                    adaptiveBitrateManager.manifest = player.getComponent(n9.a); //manifest-manager
                    adaptiveBitrateManager.options = player.options;
                    adaptiveBitrateManager.timer = new n17.a(500, (function() {
                        return adaptiveBitrateManager.update();
                    }));
                    adaptiveBitrateManager.droppedFramesTimer = new n17.a(5e3, (function() {
                        return adaptiveBitrateManager.checkDroppedFrames();
                    }));
                    adaptiveBitrateManager.representations = adaptiveBitrateManager.manifest.getVideoProfiles();
                    adaptiveBitrateManager.opts = adaptiveBitrateManager.options.get(n1.Fb); //autoAdaptation
                    adaptiveBitrateManager.supportResolution = adaptiveBitrateManager.opts[n1.Gb]; //resolution
                    adaptiveBitrateManager.minimumBufferLength = adaptiveBitrateManager.opts[n1.Hb]; //bufferLength
                    adaptiveBitrateManager.metrics = [];
                    adaptiveBitrateManager.representation = null;
                    adaptiveBitrateManager.bandwidths = findBandwidthsInRepresentations(adaptiveBitrateManager.representations);
                    adaptiveBitrateManager.minBandwidth = 1e3 * parseFloat(adaptiveBitrateManager.manifest.minAutoBitrate) || null;
                    adaptiveBitrateManager.maxBandwidth = 1e3 * parseFloat(adaptiveBitrateManager.manifest.maxAutoBitrate) || Number.POSITIVE_INFINITY;
                    adaptiveBitrateManager.lastSwitch = 0;
                    adaptiveBitrateManager.droppedFrames = 0;
                    adaptiveBitrateManager.droppedFramesTimeoutId = 0;
                    adaptiveBitrateManager.multiplier = adaptiveBitrateManager.manifest.isLive() ? .7 : .5;
                    adaptiveBitrateManager.updateMaxBandwidthHandler = function() {
                        return adaptiveBitrateManager.updateMaxBandwidth();
                    };
                    player.on(n0.V, (function(t) { //periodChanging
                        return adaptiveBitrateManager.onPeriodChanging(t);
                    }));
                    player.on(n0.U, (function(newRepresentation) { //profileChanging
                        return adaptiveBitrateManager.onProfileChanging(newRepresentation);
                    }));

                    if (adaptiveBitrateManager.supportResolution) {
                        window.addEventListener("resize", adaptiveBitrateManager.updateMaxBandwidthHandler);
                        adaptiveBitrateManager.updateMaxBandwidth();
                    }

                    adaptiveBitrateManager.timer.start();

                    if (adaptiveBitrateManager.options.get(n1.d)) { //considerDroppedFrames
                        adaptiveBitrateManager.droppedFramesTimer.start();
                    }

                    return adaptiveBitrateManager;
                }
                Object(n5.b)(createAdaptiveBitrateManagerSkeleton, [{
                    key: "addMetric",
                    value: function(t) {
                        if (this.representation === null) {
                            return;
                        }

                        if (this.bandwidths.length < 2) {
                            return;
                        }

                        this.metrics.push(t);

                        if (this.metrics.length > 10) {
                            this.metrics.shift();
                        }

                        this.update();
                    }
                },
                    {
                        key: "update",
                        value: function() {
                            var calculatedBandwidth, currentTimestamp = Date.now(), averageBps = this.calculateAvgBps(), r = !1;

                            if (null === this.representation || averageBps < 0) {
                                return;
                            }

                            calculatedBandwidth = this.getTargetBandwidth(averageBps);
                            var i = Object(n22.e)(this.mediaElement.getVideo(), this.mediaElement.getCurrentTime()),
                                currentRepresentation = this.representation,
                                currentBandwidth = currentRepresentation.bandwidth,
                                currentSegmentTemplate = currentRepresentation.segmentTemplate,
                                u = calculatedBandwidth > currentBandwidth;

                            if (calculatedBandwidth === currentBandwidth) {
                                return;
                            }

                            if (u && i < 2) {
                                return void (this.lastSwitch = 0);
                            }
                            var c = currentSegmentTemplate.duration / currentSegmentTemplate.timescale || 0,
                                l = this.minimumBufferLength || Math.max(c, 4) + 2;

                            if (!u) {
                                this.lastSwitch = 0;
                            }

                            if (i > l && currentBandwidth < this.maxBandwidth) {
                                return;
                            }
                            var d = averageBps - averageBps * this.multiplier;
                            if (currentTimestamp - this.lastSwitch <= 5e3) {
                                return;
                            }

                            if (u && d > calculatedBandwidth) {
                                r = !0;
                            }
                            if (!r && u && i < l) {
                                return;
                            }

                            this.change(calculatedBandwidth, r);
                        }
                    },
                    {
                        key: "change",
                        value: function(t, e) {
                            this.trigger(n0.Z, t, e); //profileChangeRequest
                            this.metrics = [];
                            this.lastSwitch = Date.now();
                        }
                    },
                    {
                        key: "calculateAvgBps", //avg bitrate
                        value: function() {
                            if (this.metrics.length <= 4) {
                                var t = this.metrics.slice().reverse(),
                                    e = Object(n6.a)(t, 1)[0];

                                return e && Date.now() - e.started > 3e3 ? e.bps : -1;
                            }

                            return parseInt(this.metrics.slice(this.metrics.length - 4, this.metrics.length).reduce((function(t, e, n) {
                                return t + e.bps;
                            }), 0) / 4);
                        }
                    },
                    {
                        key: "getDownloadSpeed",
                        value: function() {
                            var t = Object(n6.a)(this.metrics, 1)[0];
                            return null == t ? void 0 : t.bps;
                        }
                    },
                    {
                        key: "checkDroppedFrames",
                        value: function() {
                            var adaptiveBitrateManager = this,
                                droppedFrameCount = this.mediaElement.getDroppedFrameCount();

                            if (droppedFrameCount - this.droppedFrames > 20 && this.bandwidths.length > 1 && this.representation) {
                                var n = this.bandwidths.slice().reverse().slice(1),
                                    r = Object(n6.a)(n, 1);
                                this.maxBandwidth = r[0];

                                if (this.representation.bandwidth > this.maxBandwidth) {
                                    this.change(this.maxBandwidth, !0);
                                    this.droppedFramesTimer.stop();
                                    this.droppedFramesTimeoutId = setTimeout((function() {
                                        adaptiveBitrateManager.droppedFramesTimer.start();
                                    }), 1e4);
                                }
                            }

                            this.droppedFrames = droppedFrameCount;
                        }
                    },
                    {
                        key: "getTargetBandwidth",
                        value: function(t) {
                            var maxBandwidth = this.bandwidths[this.bandwidths.length - 1];

                            t -= .15 * t;

                            if (this.minBandwidth && t < this.minBandwidth) {
                                t = this.minBandwidth;
                            }
                            if (this.maxBandwidth && t > this.maxBandwidth) {
                                t = this.maxBandwidth;
                            }

                            return this.bandwidths.find((function(bandwidth) {
                                return t >= bandwidth;
                            })) || maxBandwidth;
                        }
                    },
                    {
                        key: "updateMaxBandwidth",
                        value: function() {
                            var adaptiveBitrateManager = this;
                            setTimeout((function() {
                                var e = findBandwidthsInRepresentations(adaptiveBitrateManager.representations, adaptiveBitrateManager.mediaElement.getWidth()),
                                    n = Object(n6.a)(e, 1);
                                adaptiveBitrateManager.maxBandwidth = n[0];
                            }), 0);
                        }
                    },
                    {
                        key: "onPeriodChanging",
                        value: function(period) {
                            this.representations = this.manifest.getVideoProfiles(period);
                            this.bandwidths = findBandwidthsInRepresentations(this.representations);
                            this.supportResolution && this.updateMaxBandwidth();
                        }
                    },
                    {
                        key: "onProfileChanging",
                        value: function(newRepresentation) {
                            this.metrics = [];
                            this.representation = newRepresentation;
                        }
                    },
                    {
                        key: "destroy",
                        value: function() {
                            var timer = this.timer,
                                droppedFramesTimer = this.droppedFramesTimer;

                            if (timer != null) {
                                timer.stop();
                            }
                            if (droppedFramesTimer != null) {
                                droppedFramesTimer.stop();
                            }
                            clearTimeout(this.droppedFramesTimeoutId);
                            window.removeEventListener("resize", this.updateMaxBandwidthHandler);
                            this.metrics = [];
                        }
                    }]);

                return createAdaptiveBitrateManagerSkeleton;
            }(n14.a);
        function MediaSource(mediaSourceInfo) {
            var mediaSourceManager = this,
                currentMediaSource = new window.MediaSource;
            function doOnSourceClose() {
                mediaSourceManager.trigger("sourceclose");
            }
            function doOnSourceOpen() {
                mediaSourceManager.trigger("sourceopen");
            }
            function doOnSourceEnded() {
                mediaSourceManager.trigger("sourceended");
            }
            function currentState() {
                return currentMediaSource.readyState;
            }
            currentMediaSource.addEventListener("sourceclose", doOnSourceClose);
            currentMediaSource.addEventListener("sourceopen", doOnSourceOpen);
            currentMediaSource.addEventListener("sourceended", doOnSourceEnded);
            mediaSourceInfo.setSource(URL.createObjectURL(currentMediaSource));

            return {
                on: mediaSourceManager.on.bind(mediaSourceManager),
                off: mediaSourceManager.off.bind(mediaSourceManager),
                trigger: mediaSourceManager.trigger.bind(mediaSourceManager),
                addSourceBuffer: function(t) {
                    return currentMediaSource.addSourceBuffer(t)
                },
                destroy: function() {
                    Object(n8.a)(currentMediaSource.sourceBuffers).forEach((function(t) {
                        return function(t) {
                            try {
                                currentMediaSource.removeSourceBuffer(t);
                            } catch (t) {}
                        }(t)
                    }));
                    currentMediaSource.removeEventListener("sourceclose", doOnSourceClose);
                    currentMediaSource.removeEventListener("sourceopen", doOnSourceOpen);
                    currentMediaSource.removeEventListener("sourceended", doOnSourceEnded);
                    mediaSourceManager.off();
                },
                setDuration: function(duration) {
                    currentMediaSource.duration = duration;
                },
                endOfStream: function() {
                    if ("open" === currentState()) {
                        try {
                            currentMediaSource.endOfStream();
                        } catch (t) {}
                    }
                },
                getReadyState: currentState,
                getActiveSourceBuffers: function() {
                    return currentMediaSource.activeSourceBuffers;
                },
                setLiveSeekableRange: function(t, e) {
                    if ("function" == typeof currentMediaSource.setLiveSeekableRange && "function" == typeof currentMediaSource.clearLiveSeekableRange && "open" === currentMediaSource.readyState) {
                        currentMediaSource.clearLiveSeekableRange();
                        currentMediaSource.setLiveSeekableRange(t, e); //breakpoint here
                    }
                }
            }
        }
        function isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], (function() {} )));
                return !0;
            } catch (t) {
                return !1;
            }
        }
        MediaSource.prototype = Object.create(n14.a.prototype);
        MediaSource.isSupported = function(type) {
            return window.MediaSource.isTypeSupported(type);
        };

        var dashRenderer = function(t) {
            Object(n4.a)(createDashRendererSkeleton, t);
            var e, playSourceF, r = (e = createDashRendererSkeleton,
                    function() {
                        var t, n = Object(n4.b)(e);
                        if (isNativeReflectConstruct()) {
                            var constructor = Object(n4.b)(this).constructor;
                            t = Reflect.construct(n, arguments, constructor)
                        } else {
                            t = n.apply(this, arguments);
                        }
                        return Object(n4.c)(this, t)
                    }
            );
            function createDashRendererSkeleton(player, videoComponentInDOM) {
                var dashRenderer;

                Object(n5.a)(this, createDashRendererSkeleton); //just checks if 'this instanceof setupPlayerInDOM'
                dashRenderer = r.call(this, player, videoComponentInDOM);
                dashRenderer.rendererType = createDashRendererSkeleton.id;
                dashRenderer.url = null;
                dashRenderer.isAbr = !0;
                dashRenderer.streams = [];
                dashRenderer.abr = null;
                dashRenderer.currentBandwidth = null;
                dashRenderer.seekingTimeout = 0;
                dashRenderer.manifestManager = new ManifestManager(dashRenderer.mediaElement.getVideo(), dashRenderer.player);
                dashRenderer.manifestManager.on(n0.S, dashRenderer.onManifestUpdated.bind(Object(n4.d)(dashRenderer))); //manifestUpdated
                dashRenderer.manifestManager.on(n0.n, dashRenderer.onManifestUpdateError.bind(Object(n4.d)(dashRenderer))); //manifestUpdateError
                dashRenderer.manifestManager.on(n0.C, dashRenderer.onManifestLoaded.bind(Object(n4.d)(dashRenderer))); //manifestLoaded
                dashRenderer.streamManager = new StreamManager(dashRenderer.player, dashRenderer.manifestManager);
                dashRenderer.player.addComponent(dashRenderer.streamManager, n9.b); //"stream-manager"
                dashRenderer.streamManager.on("segmentProgress", (function(t) {
                    return dashRenderer.abr.addMetric(t);
                }));
                dashRenderer.streamManager.on(n0.T, (function(t) { //profileChanged
                    return dashRenderer.onProfileChanged(t);
                }));
                dashRenderer.streamManager.on(n0.U, (function(newRepresentation) {
                    return dashRenderer.onProfileChanging(newRepresentation);
                }));
                dashRenderer.streamManager.on(n0.s, dashRenderer.reconnect.bind(Object(n4.d)(dashRenderer)));
                dashRenderer.streamManager.on("failedToLoadSegment", dashRenderer.onFailedToLoadSegment.bind(Object(n4.d)(dashRenderer)));
                dashRenderer.streamManager.on(n0.ab, dashRenderer.onEnded.bind(Object(n4.d)(dashRenderer))); //ended
                dashRenderer.player.on(n0.Y, (function(periodInfo) {
                    return dashRenderer.onPeriod(periodInfo);
                }));
                dashRenderer.reconnectTimeout = 0;
                dashRenderer.currentProfile = null;

                return dashRenderer;
            }
            Object(n5.b)(createDashRendererSkeleton, [{
                    key: "onManifestLoaded",
                    value: function() {
                        var manifest = this.manifestManager.manifest;
                        this.player.trigger(n0.C, manifest); //manifestLoaded
                    }
                },
                    {
                        key: "onManifestUpdated",
                        value: function() {
                            var t = this.manifestManager.manifest;
                            this.player.trigger(n0.S, t); //manifestUpdated
                            this.streamManager.clearBuffer(0, this.mediaElement.getCurrentTime() - 60);
                        }
                    },
                    {
                        key: "onManifestUpdateError",
                        value: function() {
                            this.reconnect();
                        }
                    },
                    {
                        key: "onProfileChanged",
                        value: function(newProfile) {
                            if (newProfile) {
                                var bandwidth = newProfile.bandwidth;

                                if (this.currentProfile === newProfile) {
                                    return;
                                }

                                this.currentBandwidth = bandwidth;
                                this.currentProfile = newProfile;
                                this.player.trigger(n0.T, newProfile, this.getCurrentTime(), this.isAbr); //profileChanged
                                this.options.get(n1.Db) && localStorage.setItem(redgalaxyPlayerBitrateLabel, bandwidth); //lastBitrateCaching
                            }
                        }
                    },
                    {
                        key: "onProfileChanging",
                        value: function(newRepresentation) {
                            this.player.trigger(n0.U, newRepresentation, this.getCurrentTime(), this.isAbr); //profileChanging
                            this.player.trigger(n0.bb, this.getCurrentTime(), newRepresentation, this.isAbr); //profile
                        }
                    },
                    {
                        key: "onFailedToLoadSegment",
                        value: function(segmentUrl, xhrData) {
                            this.trigger("failedToLoadSegment", segmentUrl);
                            this.player.trigger(n0.f, { //error
                                code: ERROR_NUMBERS.a[n7.a.LOAD_SEGMENT_ERROR],
                                renderer: "DASH",
                                message: n7.a.LOAD_SEGMENT_ERROR,
                                url: segmentUrl,
                                xhr: xhrData
                            })
                        }
                    },
                    {
                        key: "isIndexMode",
                        value: function() {
                            return this.manifestManager.isIndexMode();
                        }
                    },
                    {
                        key: "setSource",
                        value: function(sourceUrl) {
                            var dashRenderer = this;

                            this.destroy();
                            this.isAbr = !!this.options.get(n1.Fb); //autoAdaptation
                            this.url = sourceUrl;

                            if (null === this.baseUrl) {
                                this.baseUrl = this.url;
                            }

                            this.player.trigger(n0.p, this.url); //source

                            if (this.timeShift.isEnabled()) {
                                this.url = this.timeShift.generateUrl(this.url);
                            }

                            this.manifestManager.load(this.url).then((function(t) {
                                if (dashRenderer.isLive()) {
                                    dashRenderer.player.trigger(n0.cb); //live
                                }

                                if (!t) {
                                    return dashRenderer.player.trigger(n0.f, { //error
                                        code: ERROR_NUMBERS.a[n7.a.PARSE_MANIFEST_ERROR],
                                        renderer: "DASH",
                                        message: n7.a.PARSE_MANIFEST_ERROR
                                    });
                                }

                                dashRenderer.player.trigger(n0.db, dashRenderer.manifestManager.getVideoProfiles()); //profiles
                                dashRenderer.player.trigger(n0.eb, dashRenderer.manifestManager.getAudioTracks()); //audioTracks
                                dashRenderer.playSource();
                            })).catch((function(t) {
                                var error = t.error,
                                    requestUrl = t.url,
                                    xhrData = t.xhr;

                                if ("failedToLoadManifest" !== error) {
                                    return;
                                }

                                if (dashRenderer.isLive()) {
                                    dashRenderer.timeShift.isLive() ? dashRenderer.reconnect(4e3, dashRenderer.baseUrl) : dashRenderer.reconnect(4e3);
                                } else {
                                    dashRenderer.destroy();
                                }

                                dashRenderer.player.trigger(n0.f, { //error
                                    code: ERROR_NUMBERS.a[n7.a.LOAD_MANIFEST_ERROR],
                                    renderer: "DASH",
                                    message: n7.a.LOAD_MANIFEST_ERROR,
                                    url: requestUrl,
                                    xhr: xhrData
                                })
                            }))
                        }
                    },
                    {
                        key: "isLive",
                        value: function() {
                            var namifestManager;
                            return Object(n25.a)(Object(n4.b)(createDashRendererSkeleton.prototype), "isLive", this).call(this) || (null === (namifestManager = this.manifestManager) || void 0 === namifestManager ? void 0 : namifestManager.isLive());
                        }
                    },
                    {
                        key: "destroy",
                        value: function() {
                            var mediaSource, abr;

                            clearTimeout(this.reconnectTimeout);
                            this.manifestManager.destroy();
                            this.streamManager.destroy();
                            mediaSource = this.mediaSource;

                            if (null !== mediaSource && void 0 !== mediaSource) {
                                mediaSource.destroy();
                            }

                            abr = this.abr;

                            if (null !== abr && void 0 !== abr) {
                                abr.destroy();
                            }

                            Object(n25.a)(Object(n4.b)(createDashRendererSkeleton.prototype), "destroy", this).call(this);
                        }
                    },
                    {
                        key: "onPeriod",
                        value: function(periodInfo) {
                            var fullPeriodId = periodInfo.id,
                                period = this.manifestManager.getPeriodById(fullPeriodId),
                                videoProfiles = this.manifestManager.getVideoProfiles(period);

                            this.player.trigger(n0.db, videoProfiles); //"profiles"
                        }
                    },
                    {
                        key: "onEnded",
                        value: function() {
                            Object(n25.a)(Object(n4.b)(createDashRendererSkeleton.prototype), "onEnded", this).call(this);
                            this.destroy();
                        }
                    },
                    {
                        key: "onSeeking",
                        value: function() {
                            var dashRenderer = this;

                            clearTimeout(this.seekingTimeout);
                            this.seekingTimeout = setTimeout((function() {
                                dashRenderer.streamManager.updatePosition(dashRenderer.mediaElement.getCurrentTime());
                            }), 250);
                        }
                    },
                    {
                        key: "onLoadedmetadata",
                        value: function() {
                            this.lastEvent = n0.fb; //metadata
                            this.mediaElement.seek(this.streamManager.getStartTime());
                            this.player.trigger(n0.gb, this.manifestManager.isLive() ? -1 : this.manifestManager.duration); //newMedia
                            this.player.trigger(n0.fb, { //metadata
                                duration: this.manifestManager.duration
                            });
                        }
                    },
                    {
                        key: "reconnect",
                        value: function(timeout, source, n) {
                            var dashRenderer = this;

                            if (!this.streamManager) {
                                return;
                            }
                            if (this.streamManager.getBufferLength() <= 1) {
                                return;
                            }
                            if (!!n) {
                                return;
                            }

                            timeout = timeout || 2e3;
                            source = source || this.url;
                            this.streamManager.setReconnecting();
                            this.options.autoplay = !0;
                            clearTimeout(this.reconnectTimeout);
                            this.player.trigger(n0.x, this.mediaElement.getCurrentTime()); //waiting
                            this.timeShift.isEnabled() && this.timeShift.isLive() && this.timeShift.setLive();
                            this.reconnectTimeout = setTimeout((function() {
                                dashRenderer.setSource(source);
                                dashRenderer.timer.start();
                            }), timeout);
                        }
                    },
                    {
                        key: "switchProfile",
                        value: function(adaptationSet, e, n) {
                            var selectedBandwidth = (null == adaptationSet ? void 0 : adaptationSet.bandwidth) || adaptationSet;

                            if (0 === Math.round(this.getCurrentTime())) {
                                clearTimeout(this.seekingTimeout);
                            }

                            if ("auto" === selectedBandwidth) {
                                this.isAbr = !0;
                                this.player.trigger(n0.T, this.currentProfile, this.getCurrentTime(), this.isAbr); //profileChanged
                            } else {
                                this.isAbr = !1;
                                this.streamManager.switchProfile(selectedBandwidth, e, void 0 !== n ? n : this.options.get(n1.j)); //immediatelySwitch
                            }
                        }
                    },
                    {
                        key: "switchAudioTrack",
                        value: function(t, e) {
                            this.streamManager.switchAudioTrack(t, e); //breakpoint here
                        }
                    },
                    {
                        key: "playSource",
                        value: (playSourceF = Object(n3.a)(n3.b.mark((function t(e) {
                                    var manifestManager, videoAdaptation, audioAdaptation, currentAdaptationSet, beforePlayTaskQueue, tasks, domPlayerWrapper = this;
                                    return n3.b.wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                    case 0:
                                                        clearTimeout(this.reconnectTimeout);
                                                        manifestManager = this.manifestManager;
                                                        videoAdaptation = manifestManager.videoAdaptation;
                                                        audioAdaptation = manifestManager.audioAdaptation;
                                                        currentAdaptationSet = videoAdaptation || audioAdaptation;
                                                        if (null !== currentAdaptationSet) {
                                                            t.next = 6;
                                                            break;
                                                        }
                                                        this.reconnect(5e3);
                                                        return t.abrupt("return");
                                                    case 6:
                                                        if (currentAdaptationSet.representations.length) { //if only 1 representation exist
                                                            t.next = 10;
                                                            break;
                                                        }
                                                        if (currentAdaptationSet.unsupportedCodecs.length) {
                                                            this.player.trigger(n0.f, { //error
                                                                code: ERROR_NUMBERS.a[n7.a.NO_SUPPORTED_CODEC],
                                                                renderer: "DASH",
                                                                message: n7.a.NO_SUPPORTED_CODEC,
                                                                data: currentAdaptationSet.unsupportedCodecs
                                                            })
                                                        }
                                                        this.destroy();
                                                        return t.abrupt("return");
                                                    case 10:
                                                        if (void 0 === e) {
                                                            t.next = 13;
                                                            break;
                                                        }
                                                        this.setSource(e);
                                                        return t.abrupt("return");
                                                    case 13:
                                                        beforePlayTaskQueue = this.player.beforePlayTaskQueue;
                                                        if (!beforePlayTaskQueue.length) {
                                                            t.next = 18;
                                                            break;
                                                        }
                                                        tasks = beforePlayTaskQueue.map((function(task) {
                                                            return task();
                                                        }));
                                                        t.next = 18;
                                                        return Promise.all(tasks);
                                                    case 18:
                                                        if (!this.player.destroyed) {
                                                            t.next = 20;
                                                            break;
                                                        }
                                                        return t.abrupt("return");
                                                    case 20:
                                                        this.abr = new AdaptiveBitrateManager(this.player);
                                                        this.mediaSource = new MediaSource(this.mediaElement);
                                                        this.player.addComponent(this.mediaSource, n9.e); //"media-source"
                                                        this.mediaSource.on("sourceopen", (function() {
                                                            return domPlayerWrapper.onSourceOpen();
                                                        }));
                                                        this.registerEvents();
                                                        this.abr.on(n0.Z, (function(bandwidth, e) { //profileChangeRequest
                                                            setTimeout((function() {
                                                                domPlayerWrapper.isAbr && domPlayerWrapper.streamManager.switchProfile(bandwidth, e); //breakpoint here, this is not bandwidth, right?
                                                            }), 0)
                                                        }));
                                                        if (this.isPaused) {
                                                            this.mediaElement.pause();
                                                            this.player.trigger(n0.hb, this.getCurrentTime()); //paused
                                                        } else {
                                                            this.mediaElement.play();
                                                        }
                                                    case 27:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }
                                    ), t, this)
                                }
                            ))),
                                function(t) {
                                    return playSourceF.apply(this, arguments);
                                }
                        )
                    },
                    {
                        key: "seek",
                        value: function() {
                            this.triggerOnSeekStartEvents();
                            var argsLength = arguments.length,
                                argsArray = new Array(argsLength);

                            for (let i = 0; i < argsLength; i++) {
                                argsArray[i] = arguments[i];
                            }
                            this.streamManager.seek.apply(this.streamManager, argsArray);
                        }
                    },
                    {
                        key: "seekTo",
                        value: function() {
                            var argsLength = arguments.length,
                                argsArray = new Array(argsLength);

                            for (let i = 0; i < argsLength; i++) {
                                argsArray[i] = arguments[i];
                            }

                            var r = argsArray[0];

                            if (this.timeShift.isEnabled()) {
                                argsArray[0] = r / (this.getDuration() - this.player.getLiveDelay()) * 100;
                                void this.streamManager.seek.apply(this.streamManager, argsArray);
                                return this.triggerOnSeekStartEvents();
                            }

                            argsArray[0] = r / this.getDuration() * 100;
                            this.seek.apply(this, argsArray);
                        }
                    },
                    {
                        key: "seekToHead",
                        value: function() {
                            this.triggerOnSeekStartEvents();
                            this.streamManager.seekToHead();
                        }
                    },
                    {
                        key: "getDuration",
                        value: function() {
                            return this.streamManager.getDuration();
                        }
                    },
                    {
                        key: "getCurrentTime",
                        value: function() {
                            return this.streamManager.getCurrentTime();
                        }
                    },
                    {
                        key: "getBufferLength",
                        value: function() {
                            return this.streamManager.getBufferLength();
                        }
                    },
                    {
                        key: "getLiveDelay",
                        value: function() {
                            return this.manifestManager.getLiveDelay();
                        }
                    },
                    {
                        key: "getDownloadSpeed",
                        value: function() {
                            return this.abr.getDownloadSpeed();
                        }
                    },
                    {
                        key: "setMaxBufferLength",
                        value: function(maxBufferLength) {
                            return this.streamManager.setMaxBufferLength(maxBufferLength);
                        }
                    },
                    {
                        key: "getCurrentProfile",
                        value: function() {
                            return this.streamManager.getCurrentProfile();
                        }
                    },
                    {
                        key: "getProfiles",
                        value: function() {
                            return this.streamManager.getProfiles();
                        }
                    },
                    {
                        key: "getProfile",
                        value: function() {
                            return this.currentProfile;
                        }
                    },
                    {
                        key: "getAudioTracks",
                        value: function() {
                            return this.manifestManager.getAudioTracks();
                        }
                    },
                    {
                        key: "getCurrentAudioTrack",
                        value: function() {
                            return this.streamManager.getCurrentAudioTrack();
                        }
                    },
                    {
                        key: "getTextTracks",
                        value: function() {
                            return this.mediaElement.getNativeTextTracks();
                        }
                    },
                    {
                        key: "getCurrentPeriod",
                        value: function() {
                            return this.streamManager.getCurrentPeriod();
                        }
                    },
                    {
                        key: "stop",
                        value: function() {
                            this.player.trigger(n0.t, this.mediaElement.getCurrentTime()); //stopped
                            this.isPaused = !1;
                            this.destroy();
                        }
                    },
                    {
                        key: "resume",
                        value: function() {
                            this.isPaused = !1;
                            this.mediaElement.play();
                        }
                    },
                    {
                        key: "onSourceOpen",
                        value: function() {
                            if (this.streamManager.hasActiveStreams()) {
                                this.streamManager.sourceOpen();
                                return;
                            }

                            var t = this.manifestManager.duration;
                            if (this.timeShift.isEnabled() && this.timeShift.isLive()) {
                                t = Number.MAX_VALUE;
                            }
                            this.mediaSource.setDuration(t);

                            if (this.manifestManager.isLive() && this.options.get(n1.zb)) {
                                this.mediaSource.setLiveSeekableRange(0, Number.MAX_VALUE); //smartTV
                            }

                            this.streamManager.createStreams(this.mediaSource, this.manifestManager.isLive() && !this.timeShift.isVod());

                            if (null !== this.currentBandwidth) {
                                this.streamManager.switchProfile(this.currentBandwidth);
                            }

                            this.streamManager.initStreams();
                        }
                    }],
                [{
                    key: "canPlayType",
                    value: function(t, options) { //n1.g = forceDash, n.Ib = fixAppleSiteSpecificHacks, n.zb = smartTV
                        return !!options.get(n1.g) || (!options.get(n1.Ib) || !n11.a.isSafariWithSiteSpecificHacks()) && (!(n11.a.isSafari() && !options.get(n1.zb)) && (!(!n11.a.isWidevineSupported() && n11.a.isFirefox()) && void 0 !== window.MediaSource));
                    }
                }]);

            return createDashRendererSkeleton;
        }(n22.b);
        dashRenderer.id = "dash";
        dashRenderer.enabled = !0;
        dashRenderer.priority = 100;
        dashRenderer.mediaTypes = {
            DASH: "application/dash+xml"
        };
        var ce = function() {
                return n.e(1).then(n.bind(null, 49));
            },
            le = function() {
                function t() {
                    Object(n5.a)(this, t);
                }
                Object(n5.b)(t, null, [{
                    key: "canPlayType",
                    value: function(t, e) {
                        return !!e.get(n22.c.OPTION_NAME);
                    }
                },
                    {
                        key: "create",
                        value: function() {
                            var argsLength = arguments.length,
                                argsArray = new Array(argsLength);
                            for (let i = 0; i < argsLength; i++) {
                                argsArray[i] = arguments[i];
                            }
                            return new Promise(function() {
                                var t = Object(n3.a)(n3.b.mark((function t(n, r) {
                                        return n3.b.wrap((function(t) {
                                            for (; ; ) {
                                                switch (t.prev = t.next) {
                                                    case 0:
                                                        t.next = 2;
                                                        return ce().then((function(t) {
                                                            return n(Ot(t.default, argsArray));
                                                        })).catch((function() {
                                                            return r();
                                                        }));
                                                    case 2:
                                                    case "end":
                                                        return t.stop();
                                                }
                                            }
                                        }), t)
                                    }
                                )));
                                return function(e, n) {
                                    return t.apply(this, arguments);
                                }
                            }())
                        }
                    }]);

                return t;
            }();
        function defaultGStreamModule(player) {
            var options = player.options,
                playerName = options.get(n1.eb), //"name"
                r = options.get(n1.X); //"gstream" (means Gemius Stream)

            if ("undefined" != typeof gemiusStream && void 0 !== r) {
                var gemiusStreamEvents = [],
                    newStream = !1,
                    playing = !1,
                    waiting = !1,
                    stopped = !0,
                    timeShiftHead = 0,
                    gemiusStreamVariables = n13.a.extend({
                        identifier: "",
                        hitcollector: "https://pro.hit.gemius.pl/gstream.js",
                        materialId: null,
                        customPackage: [],
                        additionalPackage: [],
                        treeId: []
                    }, r);
                player.on(n0.fb, (function() { //metadata
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            mediaDuration = e.duration,
                            live = player.isLive();
                        gemiusStreamEvents.push({
                            name: "new",
                            duration: mediaDuration && !live ? mediaDuration : -1
                        });

                        if (live && !timeShiftHead) {
                            timeShiftHead = player.getLiveNowUTC();
                        }

                        executeGemiusStreamEvents();
                    }
                ));
                player.on(n0.W, (function(time) { //playing
                    if (playing) {
                        return;
                    }

                    stopped = !1;
                    playing = !0;
                    waiting = !1;
                    gemiusStreamEvents.push({
                        name: n0.W, //playing
                        time: calculateNormalizedPlayerTime(time)
                    });
                    executeGemiusStreamEvents();
                }));
                player.on(n0.hb, (function(time) { //paused
                    playing = !1;
                    gemiusStreamEvents.push({
                        name: n0.hb, //paused
                        time: calculateNormalizedPlayerTime(time)
                    });
                    executeGemiusStreamEvents();
                }));
                player.on(n0.x, (function(time) { //waiting
                    if (waiting) {
                        return;
                    }

                    waiting = !0;
                    playing = !1;
                    gemiusStreamEvents.push({
                        name: "buffering",
                        time: calculateNormalizedPlayerTime(time)
                    });
                    executeGemiusStreamEvents();
                }));
                player.on(n0.mb, (function(time) { //seeking
                    waiting = !1;
                    gemiusStreamEvents.push({
                        name: "seekingStarted",
                        time: calculateNormalizedPlayerTime(time)
                    });
                    executeGemiusStreamEvents();
                }));
                player.on(n0.pb, (function() { //seeked
                    waiting = !1;
                }));
                player.on(n0.t, (function(time) { //stopped
                    playing = !1;
                    waiting = !1;

                    if (stopped) {
                        return;
                    }

                    stopped = !0;
                    gemiusStreamEvents.push({
                        name: n0.t, //stopped
                        time: calculateNormalizedPlayerTime(time)
                    });
                    executeGemiusStreamEvents();
                    newStream = !1;
                }));
                player.on(n0.ab, (function(time) { //ended
                    playing = !1;
                    waiting = !1;

                    if (stopped) {
                        return;
                    }

                    stopped = !0;
                    gemiusStreamEvents.push({
                        name: "complete",
                        time: calculateNormalizedPlayerTime(time)
                    });
                    executeGemiusStreamEvents();
                    newStream = !1;
                }));
                player.on(n0.e, (function() { //destroy
                    var currentTime = 0;
                    try {
                        currentTime = parseInt(player.getCurrentTime(), 10);
                    } catch (t) {}

                    gemiusStream.closeStream(playerName, gemiusStreamVariables.materialId, parseInt(calculateNormalizedPlayerTime(currentTime), 10));
                }));
            }
            function executeGemiusStreamEvents() {
                var eventWrapper;
                if (newStream) {
                    while (gemiusStreamEvents.length) {
                        eventWrapper = gemiusStreamEvents.shift();
                        gemiusStream.event(playerName, gemiusStreamVariables.materialId, parseInt(eventWrapper.time, 10), eventWrapper.name);
                    }
                    return;
                }

                for (let i = 0; i < gemiusStreamEvents.length; i++) {
                    if ("new" === gemiusStreamEvents[i].name) {
                        eventWrapper = gemiusStreamEvents[i];
                        gemiusStreamEvents.splice(i, 1);
                        gemiusStream.newStream(playerName, gemiusStreamVariables.materialId, parseInt(eventWrapper.duration, 10), gemiusStreamVariables.customPackage, gemiusStreamVariables.additionalPackage, gemiusStreamVariables.identifier, gemiusStreamVariables.hitcollector, gemiusStreamVariables.treeId);
                        newStream = !0;
                        executeGemiusStreamEvents();

                        break;
                    }
                }
            }
            function calculateNormalizedPlayerTime(currentPlayerTime) {
                if (!player.isLive()) {
                    return currentPlayerTime;
                }

                var timeShift = player.getTimeShift(),
                    timeShiftEnabled = timeShift.isEnabled(),
                    initialStartTime = timeShift.getInitialStart(),
                    dvrWindow = timeShift.getDvrWindow(),
                    currentTimeShiftHead = player.getLiveNowUTC();

                return timeShiftEnabled ? timeShiftEnabled && initialStartTime > 0 && dvrWindow >= 0 ? currentPlayerTime + (currentTimeShiftHead - initialStartTime - dvrWindow) : currentPlayerTime : timeShiftHead ? currentTimeShiftHead - timeShiftHead : 0;
            }
        }
        le.id = n22.c.ID;
        le.priority = n22.c.PRIORITY;
        le.mediaTypes = n22.c.SUPPORTED_MEDIA_TYPES;
        defaultGStreamModule.enabled = !0;
        defaultGStreamModule.moduleId = "gstream";
        var currentGStreamModule = defaultGStreamModule,
            n23 = n(23),
            pe = n.n(n23),
            n24 = n(24),
            me = n.n(n24),
            n33 = n(33),
            ye = n.n(n33),
            n34 = n(34),
            Ee = n.n(n34),
            n35 = n(35),
            _e = n.n(n35),
            n27 = n(27),
            Oe = n.n(n27),
            n28 = n(28),
            we = n.n(n28),
            serializer = new XMLSerializer,
            constructTagIdentifier = function(tagName, xmlSchema) {
                return xmlSchema ? "".concat(xmlSchema, ":").concat(tagName) : tagName;
            },
            defaultTtmlParser = function(input) { //Timed Text Markup Language (TTML)
                var domString = (new DOMParser).parseFromString(input, "text/xml"),
                    xmlSchema = Object(n8.a)(domString.documentElement.attributes).reduce((function(t, e) {
                        return "http://www.w3.org/ns/ttml" === e.value && "xmlns" === e.prefix && e.localName ? e.localName : t;
                    }), ""),
                    ttElement = extractAsClass(domString, constructTagIdentifier("tt", xmlSchema)),
                    bodyElement = extractAsClass(ttElement, constructTagIdentifier("body", xmlSchema)),
                    divElement = extractAsClass(bodyElement, constructTagIdentifier("div", xmlSchema)),
                    pElements = extractElementsFromXML(divElement, constructTagIdentifier("p", xmlSchema)),
                    result = [],
                    processAndIncludeTextCue = function(index) {
                        var currentPElement = pElements[index],
                            startTime = calculateTotalSeconds(currentPElement.getAttribute(constructTagIdentifier("begin", xmlSchema))),
                            endTime = calculateTotalSeconds(currentPElement.getAttribute(constructTagIdentifier("end", xmlSchema))),
                            existingTextCue = result.find((function(t) {
                                return t.begin === startTime && t.end === endTime;
                            })),
                            allLines = [],
                            currentPElementClone = currentPElement.cloneNode(!0);

                        currentPElementClone.removeAttribute("xml:id");
                        currentPElementClone.removeAttribute(constructTagIdentifier("begin", xmlSchema));
                        currentPElementClone.removeAttribute(constructTagIdentifier("end", xmlSchema));

                        for (let i = 0; i < currentPElement.childNodes.length; i++) {
                            var textContent = currentPElement.childNodes[i].textContent;
                            if (textContent) {
                                allLines.push(textContent.trim());
                            }
                        }
                        var stringData = serializer.serializeToString(currentPElementClone);

                        if (existingTextCue) { //replace with new data
                            existingTextCue.line += "\n" + allLines.join("\n");
                            existingTextCue.data += stringData;
                            existingTextCue.lines.concat(allLines);

                            return;
                        }

                        result.push({
                            line: allLines.join("\n"),
                            data: stringData,
                            lines: allLines,
                            begin: startTime,
                            end: endTime
                        })
                    };

                for (let i = 0; i < pElements.length; i++) {
                    processAndIncludeTextCue(i);
                }

                return result;
            },
            subtitleTimeRegex = /\s*(\d*:?[0-5]\d:[0-5]\d\.\d\d\d)\s*-->\s*(\d*:?[0-5]\d:[0-5]\d\.\d\d\d)\s*(.*)/,
            convertToSeconds = function(subtitleCueTimestamp) {
                var e = subtitleCueTimestamp.split(/[:.]/).reverse(),
                    n = Object(n6.a)(e, 4),
                    milliseconds = n[0],
                    seconds = n[1],
                    minutes = n[2],
                    hours = n[3];

                return 3600 * parseInt(void 0 === hours ? 0 : hours) + 60 * parseInt(minutes) + parseInt(seconds) + parseInt(milliseconds) / 1e3;
            },
            processTextTrackCue = function(input) {
                var allLines, currentLine, subtitleTimingCues,
                    result = [],
                    textTrackCue = null;

                if ("\ufeff" === input[0]) {
                    input = input.slice(1, input.length - 1);
                }

                allLines = input.split(/\r\n|\r|\n/);
                for (let i = 0; i < allLines.length; i++) {
                    currentLine = allLines[i];

                    if (subtitleTimingCues = subtitleTimeRegex.exec(currentLine)) {
                        textTrackCue = {
                            begin: parseFloat(convertToSeconds(subtitleTimingCues[1])),
                            end: parseFloat(convertToSeconds(subtitleTimingCues[2])),
                            lines: []
                        };
                        result.push(textTrackCue);
                    } else if ("" === currentLine.trim()) {
                        textTrackCue = null;
                    } else if (textTrackCue) {
                        textTrackCue.lines.push(currentLine);
                    }
                }

                return result;
            };
        function ExternalSubtitleManager(player) {
            var availableTextTracks,
                htmlVideoElement = player.getRendererElm(),
                VideoTextTrackCue = window.VTTCue || window.TextTrackCue,
                cues = {};

            function hideCurrentSubtitleTrackF() {
                var subtitleTracks = player.getActiveSubtitle(),
                    subtitleLanguage = subtitleTracks == null ? void 0 : subtitleTracks.language;

                if (subtitleLanguage) {
                    findTextTrack(subtitleLanguage).mode = "hidden";
                }
            }
            function findTextTrack(subtitleLanguage) {
                return Object(n8.a)(htmlVideoElement.textTracks).find((function(textTrack) {
                    return textTrack.language === subtitleLanguage;
                }))
            }
            player.on(n0.P, (function(e) { //subtitle
                    var lang = e.language;
                    (function(e) {
                            if (cues[e]) {
                                return Promise.resolve(cues[e]); //breakpoint here, is e number or string?
                            }
                            return new Promise((function(resolve, reject) {
                                n10.d.get(e).then(function() {
                                    var a = Object(n3.a)(n3.b.mark((function a(s) {
                                        var data, isXmlDeclarationStatement, customTtmlParser, selectedTtmlParser, newTextTrackCue;
                                        return n3.b.wrap((function(a) {
                                            for (; ; ) {
                                                switch (a.prev = a.next) {
                                                    case 0:
                                                        data = s.data;
                                                        isXmlDeclarationStatement = data.startsWith("<?xml");
                                                        customTtmlParser = player.options.get(n1.J); //customTtmlParser
                                                        selectedTtmlParser = customTtmlParser || defaultTtmlParser;
                                                        newTextTrackCue = isXmlDeclarationStatement ? selectedTtmlParser(data) : processTextTrackCue(data);

                                                        if (newTextTrackCue) {
                                                            cues[e] = newTextTrackCue;
                                                            resolve(newTextTrackCue); //breakpoint here
                                                        } else {
                                                            reject();
                                                        }
                                                    case 6:
                                                    case "end":
                                                        return a.stop();
                                                }
                                            }
                                        }), a);
                                    })));
                                    return function(t) {
                                        return a.apply(this, arguments);
                                    }
                                }())
                            }))
                        }
                    )(e.url).then((function(timedTextCollection) {
                            var textTrack = findTextTrack(lang);

                            if (!textTrack) {
                                return;
                            }

                            if (textTrack.cues) {
                                Object(n8.a)(textTrack.cues).forEach((function(t) {
                                    return textTrack.removeCue(t);
                                }));
                            }

                            var i;
                            var captions = timedTextCollection.captions,
                                styleNode = timedTextCollection.styleNode,
                                mappedProperties = Object.keys(captions || {}).find((function(propertyName) {
                                    return propertyName.split("-")[0] === lang.toLowerCase();
                                })) || "Default",
                                capts = captions && (captions[mappedProperties] || (null === (i = Object.values(captions)) || void 0 === i ? void 0 : i[0]));

                            textTrack.styleNode = styleNode;
                            timedTextCollection.forEach((function(textTrackCue) {
                                var start = textTrackCue.begin,
                                    end = textTrackCue.end,
                                    lines = textTrackCue.lines;

                                if (!start) {
                                    return;
                                }

                                var vttCue = new VideoTextTrackCue(start, end, lines.join("\n"));

                                if (capts) {
                                    vttCue.parsedCaptions = document.createElement("div");
                                    if (capts != null) {
                                        capts.filter((function(capt) {
                                            var start = capt.begin,
                                                end = capt.end;
                                            return textTrackCue.begin === start && textTrackCue.end === end;
                                        })).forEach((function(t) {
                                            var content = t.content;
                                            return vttCue.parsedCaptions.appendChild(content);
                                        }))
                                    }
                                }
                                textTrack.addCue(vttCue);
                            }))
                        }
                    )).catch((function() {} ))
                }
            ));
            availableTextTracks = htmlVideoElement.textTracks;

            if (availableTextTracks != null) {
                availableTextTracks.addEventListener("change", hideCurrentSubtitleTrackF);
            }

            return {
                destroy: function() {
                    var textTracks = htmlVideoElement.textTracks;
                    if (textTracks != null) {
                        textTracks.removeEventListener("change", hideCurrentSubtitleTrackF);
                    }
                }
            }
        }
        var Box = function() {
            function createBoxSkeleton(data) {
                Object(n5.a)(this, createBoxSkeleton);
                this.data = data;
                this.type = this.data.type;
                this.offset = this.data._offset;
            }
            Object(n5.b)(createBoxSkeleton, [{
                key: "getChildBox",
                value: function(type) {
                    return this.boxes.find((function(box) {
                        return box.type === type;
                    }))
                }
            },
                {
                    key: "getChildBoxes",
                    value: function(type) {
                        return this.boxes.reduce((function(result, box) {
                            if (box.type === type) {
                                result.push(box);
                            }

                            return result;
                        }), [])
                    }
                },
                {
                    key: "boxes",
                    get: function() {
                        if (this.data.boxes) {
                            return this.data.boxes.map((function(box) {
                                return new createBoxSkeleton(box);
                            }));
                        }

                        return [];
                    }
                }]);

            return createBoxSkeleton;
        }();
        function SubtitleTrackManager(player) {
            var mediaElementComponent = player.getComponent(n9.d), //media-element
                htmlVideoElement = player.getRendererElm(),
                subtitleManager = new n17.a(300, (function () {
                    segmentManager.resume();
                    segmentManager.next();
                    segmentManager.getQueue().length > 5 && segmentManager.pause();
                    var segmentQueue = segmentManager.getQueue(),
                        firstSegment = Object(n6.a)(segmentQueue, 1)[0];

                    if (!firstSegment) {
                        return;
                    }

                    segmentManager.getQueue().shift();
                    var buffer = firstSegment.data.buffer;
                    if (firstSegment.index < 0) {
                        return;
                    }

                    (function (arrayBuffer) {
                        if (!arrayBuffer || 0 === arrayBuffer.byteLength) {
                            return {
                                sampleList: [],
                                lastSequenceNumber: NaN,
                                totalDuration: NaN,
                                numSequences: NaN
                            };
                        }
                        var fullDuration,
                            parsedFile = we.a.parseBuffer(arrayBuffer),
                            currentSampleList = [],
                            moofBoxes = parsedFile.fetchAll("moof").map((function (moofBox) {
                                return new Box(moofBox);
                            })),
                            mfhdBoxes = parsedFile.fetchAll("mfhd").map((function (mfhdBox) {
                                return new Box(mfhdBox);
                            })),
                            lastMfhdBox = mfhdBoxes[mfhdBoxes.length - 1],
                            lastSequenceNum = lastMfhdBox && lastMfhdBox.data.sequence_number,
                            totalSequences = moofBoxes.length;

                        moofBoxes.forEach((function (moofBox) {
                            moofBox.getChildBoxes("traf").forEach((function (trackFragmentBox) {
                                var trackRunBoxes = trackFragmentBox.getChildBoxes("trun"),
                                    trackFragmentHeaderBox = trackFragmentBox.getChildBox("tfhd"),
                                    trackFragmentDecodeTimeBox = trackFragmentBox.getChildBox("tfdt"),
                                    baseMediaDecodeTime = trackFragmentDecodeTimeBox.data.baseMediaDecodeTime;

                                trackRunBoxes.forEach((function (trunBox) {
                                    trackRunBoxes.forEach((function (trunBox) {
                                        var sampleCount = trunBox.data.sample_count,
                                            additionalOffset = (trackFragmentHeaderBox.data.base_data_offset || 0) + (trunBox.data.data_offset || 0);

                                        for (let i = 0; i < sampleCount; i++) {
                                            var u = trunBox.data.samples[i],
                                                sampleCompositionTimeOffset = void 0 !== u.sample_composition_time_offset ? u.sample_composition_time_offset : 0,
                                                sampleDuration = void 0 !== u.sample_duration ? u.sample_duration : trackFragmentHeaderBox.data.default_sample_duration,
                                                sampleSize = void 0 !== u.sample_size ? u.sample_size : trackFragmentHeaderBox.data.default_sample_size,
                                                sample = {
                                                    dts: baseMediaDecodeTime,
                                                    cts: baseMediaDecodeTime + sampleCompositionTimeOffset,
                                                    duration: sampleDuration,
                                                    offset: moofBox.offset + additionalOffset,
                                                    size: sampleSize,
                                                    subSizes: [sampleSize]
                                                };
                                            currentSampleList.push(sample);
                                            baseMediaDecodeTime += sampleDuration;
                                        }
                                    }));
                                    fullDuration = baseMediaDecodeTime - trackFragmentDecodeTimeBox.data.baseMediaDecodeTime;
                                }))
                            }))
                        }));

                        return {
                            numSequences: totalSequences,
                            lastSequenceNumber: lastSequenceNum,
                            sampleList: currentSampleList,
                            totalDuration: fullDuration
                        };
                    })(buffer).sampleList.forEach((function (sample) {
                            var dataView = new DataView(buffer, sample.offset, sample.subSizes[0]),
                                dataViewBackup = dataView,
                                stringifiedDataView = we.a.Utils.dataViewToString(dataViewBackup, "utf-8"),
                                customTtmlParserF = player.options.get(n1.J), //customTtmlParser
                                timedTextCollection = customTtmlParserF ? customTtmlParserF(stringifiedDataView) : defaultTtmlParser(stringifiedDataView);

                            timedTextCollection.forEach((function (timedTextItem) {
                                if (!textTrack) {
                                    return;
                                }

                                var lang = textTrack.language,
                                    start = timedTextItem.begin,
                                    end = timedTextItem.end,
                                    data = timedTextItem.data,
                                    line = timedTextItem.line,
                                    vttCue = new VideoTextTrackCue(start - offset, end - offset, line);

                                vttCue.data = data;

                                if (!customTtmlParserF) {
                                    textTrack.addCue(vttCue);
                                    return;
                                }

                                var d;
                                vttCue.parsedCaptions = document.createElement("div");
                                var currentLanguage = Object.keys(timedTextCollection.captions || {}).find((function (caption) {
                                        return caption.split("-")[0] === lang;
                                    })) || "Default",
                                    captions = timedTextCollection.captions[currentLanguage] || (null === (d = Object.values(timedTextCollection.captions)) || void 0 === d ? void 0 : d[0]);

                                if (captions != null) {
                                    captions.filter((function (caption) {
                                        var begin = caption.begin,
                                            end = caption.end;
                                        return timedTextItem.begin === begin && timedTextItem.end === end;
                                    })).forEach((function (t) {
                                        var e = t.content;
                                        return vttCue.parsedCaptions.appendChild(e);
                                    }))
                                }

                                vttCue.styleNode = null == timedTextCollection ? void 0 : timedTextCollection.styleNode;
                                textTrack.addCue(vttCue);
                            }))
                        }
                    ))
                })),
                VideoTextTrackCue = window.VTTCue || window.TextTrackCue,
                segmentManager = new SegmentManager(player, contentTypes.TEXT, (function () {
                    return {
                        time: mediaElementComponent.getCurrentTime(),
                        bufferLength: 0
                    }
                })),
                textTrack = Object(n6.a)(htmlVideoElement.textTracks, 1)[0],
                offset = 0;

            function initializeSmthF() {
                subtitleManager.start();
                segmentManager.start();
            }

            function destroyExistingTextTrackCues() {
                if (!textTrack || !textTrack.cues) {
                    return;
                }

                Object(n8.a)(textTrack.cues).forEach((function (cue) {
                    return textTrack.removeCue(cue);
                }))
            }

            player.on(n0.mb, (function () { //seeking
                segmentManager.pause();
            }));
            player.on(n0.pb, (function () { //seeked
                segmentManager.update();
                destroyExistingTextTrackCues();
                segmentManager.resume();
            }));

            return {
                init: initializeSmthF,
                destroy: function () {
                    subtitleManager.stop();
                    segmentManager.stop();
                },
                setAdaptationSet: function (adaptationSet) {
                    var segmentTemplate = Object(n6.a)(adaptationSet.representations, 1)[0].segmentTemplate,
                        presentationOffset = segmentTemplate.presentationTimeOffset,
                        timescale = segmentTemplate.timescale;
                    segmentManager.switchAdaptation(adaptationSet);

                    if (presentationOffset) {
                        offset = presentationOffset / timescale;
                    }

                    textTrack = Object(n8.a)(htmlVideoElement.textTracks).find((function (textTrack) {
                        return textTrack.language === adaptationSet.lang;
                    }))

                    if (!textTrack) {
                        return;
                    }

                    Object(n8.a)(textTrack.cues).forEach((function (cue) {
                        return textTrack.removeCue(cue);
                    }));

                    destroyExistingTextTrackCues();
                    textTrack.mode = "hidden";
                    initializeSmthF();
                }
            }
        }
        function FragmentedSubtitleManager(player, subtitle) {
            var adaptationSet,
                manifestManagerComponent = player.getComponent(n9.a); //manifest-manager

            player.on(n0.P, switchSubtitleF); //subtitle
            player.on(n0.R, subtitleDisabledF); //subtitleDisabled
            player.on(n0.C, (function() { //manifestLoaded
                var activeSubtitle = player.getActiveSubtitle();

                if (activeSubtitle) {
                    switchSubtitleF(activeSubtitle);
                }
            }));
            var subtitleTrackManager = new SubtitleTrackManager(player);

            function switchSubtitleF(subtitle) {
                var textAdaptations = manifestManagerComponent.getTextAdaptations();
                adaptationSet = textAdaptations.find((function(textAdaptation) {
                    return textAdaptation.id === subtitle.trackId;
                }));

                if (!adaptationSet) {
                    return;
                }

                subtitleTrackManager.destroy();
                subtitleTrackManager.setAdaptationSet(adaptationSet);
                subtitleTrackManager.init();
            }

            function subtitleDisabledF() {
                subtitleTrackManager.destroy();
            }

            if (subtitle) {
                switchSubtitleF(subtitle);
            }

            return {
                destroy: function() {
                    player.off(n0.P, switchSubtitleF); //subtitle
                    player.off(n0.R, subtitleDisabledF); //subtitleDisabled
                    subtitleTrackManager.destroy();
                }
            }
        }
        var VideoTextTrackCue = window.VTTCue || window.TextTrackCue,
            external = "external",
            fragmented = "fragmented",
            native = "native",
            disabled = "disabled",
            hidden = "hidden",
            showing = "showing",
            defaultSubtitleModule = function() {
                function createDefaultSubtitleModuleSkeleton(player) {
                    var subtitleModule = this;

                    Object(n5.a)(this, createDefaultSubtitleModuleSkeleton);
                    this.options = player.options;
                    this.player = player;
                    this.active = !!this.options.get(n1.P); //subtitleEnabled
                    this.subtitle = void 0;
                    this.subtitles = void 0;
                    this.initialized = !1;
                    this.source = void 0;
                    this.subtitleManager = void 0;
                    this.onCueChangeRef = function() {
                        return subtitleModule.onCueChange();
                    };
                    this.initNativeTimeout = 0;
                    this.registerEvents();
                    this.exposeApi();
                }
                Object(n5.b)(createDefaultSubtitleModuleSkeleton, [{
                    key: "getDefault",
                    value: function() {
                        var preferredLanguage = this.options.get(n1.Q) || n13.a.getBrowserLanguage(); //defaultSubtitle

                        if (preferredLanguage) {
                            preferredLanguage = preferredLanguage.toLowerCase();
                        }

                        return this.subtitles.find((function(subtitle) {
                            return subtitle.language.toLowerCase() === preferredLanguage;
                        })) || this.subtitles[0];
                    }
                },
                    {
                        key: "registerEvents",
                        value: function() {
                            var subtitleModule = this;
                            this.player.on(n0.r, (function() { //"ready"
                                return subtitleModule.init();
                            }));
                            this.player.on(n0.fb, (function() { //"metadata"
                                return subtitleModule.init();
                            }));
                            this.player.on(n0.h, (function() { //"data"
                                return subtitleModule.init();
                            }));
                            this.player.on(n0.R, (function() { //"subtitleDisabled"
                                return subtitleModule.disable();
                            }));
                            this.player.on(n0.Q, (function(e) { //"subtitles"
                                return subtitleModule.onSubtitles(e);
                            }));
                            this.player.on(n0.P, (function(subtitle) { //"subtitle"
                                return subtitleModule.setSubtitle(subtitle);
                            }));
                            this.player.on(n0.J, (function() { //"subtitleEnableRequest"
                                return subtitleModule.enableSubtitle();
                            }));
                            this.player.on(n0.O, (function() { //"subtitleToggleRequest"
                                return subtitleModule.toggleSubtitle();
                            }));
                            this.player.on(n0.t, (function() { //"stopped"
                                return subtitleModule.destroy();
                            }));
                            this.player.on(n0.ab, (function() { //"ended"
                                return subtitleModule.destroy();
                            }));
                            this.player.on(n0.e, (function() { //"destroy"
                                return subtitleModule.destroy();
                            }));

                            if (n11.a.isSafari()) {
                                this.player.on(n0.kb, (function() { //"nativeTextTracksListAddTrack"
                                    return subtitleModule.initNative();
                                }))
                            }
                        }
                    },
                    {
                        key: "onSubtitles",
                        value: function(selectedSubtitles) {
                            var mediaElementComponent = this.player.getComponent(n9.d), //media-element
                                availableTextTracks = Object(n8.a)(mediaElementComponent.getNativeTextTracks());

                            availableTextTracks.forEach((function(textTrack) {
                                textTrack.mode = disabled;
                            }));

                            if (availableTextTracks.length) {
                                this.initialized = !0;
                            }

                            this.subtitles = selectedSubtitles;

                            if (this.active) {
                                this.subtitle = this.getDefault();
                            }
                        }
                    },
                    {
                        key: "enableSubtitle",
                        value: function() {
                            this.active = !0;

                            if (!this.subtitle) {
                                this.subtitle = this.getDefault();
                            }

                            if (!this.initialized) {
                                this.init();
                                return;
                            }

                            this.player.trigger(n0.P, this.subtitle); //subtitle
                        }
                    },
                    {
                        key: "toggleSubtitle",
                        value: function() {
                            this.player.getActiveSubtitle() ? this.player.disableSubtitle() : this.player.enableSubtitle();
                        }
                    },
                    {
                        key: "setSubtitle",
                        value: function(newSubtitle) {
                            var htmlVideoElement = this.player.getRendererElm(),
                                availableTextTracks = Object(n8.a)(htmlVideoElement.textTracks);

                            availableTextTracks.forEach((function(textTrack) {
                                textTrack.mode = disabled;
                            }));
                            var matchingTrack = availableTextTracks.find((function(textTrack) {
                                return textTrack.language === newSubtitle.language || textTrack.trackId && textTrack.trackId === newSubtitle.trackId;
                            }));

                            if (matchingTrack) {
                                matchingTrack.mode = hidden;
                                this.setActiveTrack(matchingTrack);
                            }

                            this.active = !0;

                            if (this.subtitle === newSubtitle) {
                                return;
                            }

                            this.subtitle = newSubtitle;

                            if (!this.initialized) {
                                this.init();
                            }
                        }
                    },
                    {
                        key: "setActiveTrack",
                        value: function(track) {
                            this.disableActiveTrack();
                            this.activeTrack = track;
                            this.activeTrack.addEventListener("cuechange", this.onCueChangeRef);
                        }
                    },
                    {
                        key: "disableActiveTrack",
                        value: function() {
                            this.activeTrack && this.activeTrack.removeEventListener("cuechange", this.onCueChangeRef);
                        }
                    },
                    {
                        key: "onCueChange",
                        value: function() {
                            var subtitleModule = this;

                            if (!this.activeTrack || !this.activeTrack.activeCues.length) {
                                this.player.trigger(n0.K, new VideoTextTrackCue(0, 0, "")); //subtitleCueChanged
                                return;
                            }

                            var start = -1;
                            Object(n8.a)(this.activeTrack.activeCues).forEach((function(activeCue) {
                                if (start === activeCue.startTime) {
                                    return;
                                }

                                if (subtitleModule.activeTrack.mode === showing) {
                                    subtitleModule.activeTrack.mode = hidden;
                                }

                                start = activeCue.startTime;
                                subtitleModule.player.trigger(n0.K, activeCue); //subtitleCueChanged
                            }));
                        }
                    },
                    {
                        key: "disableSubtitle",
                        value: function() {
                            this.disableActiveTrack();
                            this.player.trigger(n0.R); //subtitleDisabled
                        }
                    },
                    {
                        key: "initNative",
                        value: function() {
                            var subtitleModule = this;
                            this.initNativeTimeout = setTimeout((function() {
                                return subtitleModule.init();
                            }), 100);
                        }
                    },
                    {
                        key: "init",
                        value: function() {
                            var textAdaptations;

                            if (this.initialized) {
                                return;
                            }

                            var subtitleTrackInfo,
                                activeSubtitles = this.player.getMediaItem().getSubtitles() || this.options.get(n1.R), //subtitles
                                currentSubtitleTrackInfo = activeSubtitles == null ? void 0 : activeSubtitles.map((function(subtitle, index) {
                                    return {
                                        language: subtitle.language,
                                        trackId: index + 1,
                                        url: subtitle.url
                                    }
                                })),
                                manifestManagerComponent = this.player.getComponent(n9.a), //manifest-manager
                                textAdaptationWrapper = manifestManagerComponent == null || null === (textAdaptations = manifestManagerComponent.getTextAdaptations()) || void 0 === textAdaptations ? void 0 : textAdaptations.map((function(textAdaptation) {
                                    var currentAccessibilityOptions = textAdaptation.accessibility,
                                        currentTrackId = textAdaptation.id;
                                    return {
                                        accessibility: currentAccessibilityOptions,
                                        language: textAdaptation.lang,
                                        trackId: currentTrackId,
                                        role: textAdaptation.role
                                    }
                                })),
                                supportedTextTrackCategories = ["subtitles", "captions", void 0],
                                mediaElementComponent = this.player.getComponent(n9.d), //media-element
                                availableTextTracks = Object(n8.a)(mediaElementComponent.getNativeTextTracks()).filter((function(textTrack) {
                                    var customCreated = textTrack.customCreated,
                                        textTrackKind = textTrack.kind;

                                    return !customCreated && supportedTextTrackCategories.includes(textTrackKind);
                                })).filter((function(textTrack) {
                                    var id = textTrack.id,
                                        lang = textTrack.language,
                                        label = textTrack.label;

                                    return id || lang || label;
                                })).map((function(textTrack, index) {
                                    textTrack.trackId = index + 1;
                                    return textTrack;
                                }));

                            if (null == currentSubtitleTrackInfo ? void 0 : currentSubtitleTrackInfo.length) {
                                subtitleTrackInfo = currentSubtitleTrackInfo;
                                this.source = external;
                            } else {
                                if (null == textAdaptationWrapper ? void 0 : textAdaptationWrapper.length) {
                                    subtitleTrackInfo = textAdaptationWrapper;
                                    this.source = fragmented;
                                } else if (null == availableTextTracks ? void 0 : availableTextTracks.length) {
                                    subtitleTrackInfo = availableTextTracks;
                                    this.source = native;
                                }
                            }

                            if (!this.subtitles && subtitleTrackInfo) {
                                this.player.trigger(n0.Q, subtitleTrackInfo); //subtitles
                            }

                            if (!this.active || !subtitleTrackInfo) {
                                return;
                            }

                            switch (this.source) {
                                case external:
                                    this.initExternal();
                                    break;
                                case fragmented:
                                    this.initFragmented();
                            }

                            if (this.subtitle) {
                                this.player.trigger(n0.P, this.subtitle); //subtitle
                            }

                            this.initialized = !0;
                        }
                    },
                    {
                        key: "initExternal",
                        value: function() {
                            this.player.getComponent(n9.d).addNativeTextTracks(this.subtitles, !0); //"media-element"
                            this.subtitleManager = new ExternalSubtitleManager(this.player); //from url
                        }
                    },
                    {
                        key: "initFragmented",
                        value: function() {
                            this.player.getComponent(n9.d).addNativeTextTracks(this.subtitles); //"media-element"
                            this.subtitleManager = new FragmentedSubtitleManager(this.player);
                        }
                    },
                    {
                        key: "exposeApi",
                        value: function() {
                            var subtitleModule = this;

                            this.player.setActiveSubtitle = function(e) {
                                return subtitleModule.player.trigger(n0.P, e); //subtitle
                            };
                            this.player.getActiveSubtitle = function() {
                                return subtitleModule.active && subtitleModule.subtitle;
                            };
                            this.player.disableSubtitle = function() {
                                return subtitleModule.player.trigger(n0.R); //subtitleDisabled
                            };
                            this.player.enableSubtitle = function() {
                                return subtitleModule.player.trigger(n0.J); //subtitleEnableRequest
                            };
                            this.player.listSubtitles = function() {
                                return subtitleModule.subtitles;
                            };
                        }
                    },
                    {
                        key: "disable",
                        value: function() {
                            this.active = !1;
                            this.disableActiveTrack();
                        }
                    },
                    {
                        key: "destroy",
                        value: function() {
                            this.initialized = !1;
                            this.subtitle = void 0;
                            clearTimeout(this.initNativeTimeout);
                            this.subtitleManager && this.subtitleManager.destroy();
                        }
                    }]);

                return createDefaultSubtitleModuleSkeleton;
            }();
        function Ye(t) {
            var isNativeReflectConstruct = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {} )));
                    return !0;
                } catch (t) {
                    return !1;
                }
            }();
            return function() {
                var n,
                    r = Oe()(t);
                if (isNativeReflectConstruct) {
                    var constructor = Oe()(this).constructor;
                    n = Reflect.construct(r, arguments, constructor);
                } else {
                    n = r.apply(this, arguments);
                }
                return _e()(this, n);
            }
        }
        defaultSubtitleModule.enabled = !0;
        defaultSubtitleModule.moduleId = "subtitle";
        var remotePlayer,
            remotePlayerController,
            currentSubtitleModule = function(subtitleModule) {
                Ee()(n, subtitleModule); //breakpoint here
                var e = Ye(n); //breakpoint here
                function n() {
                    pe()(this, n); //breakpoint here
                    return e.apply(this, arguments);
                }
                me()(n, [{
                    key: "onSubtitles",
                    value: function(t) {
                        ye()(Oe()(n.prototype), "onSubtitles", this).call(this, t);
                        this.active && this.subtitle || this.player.trigger(n0.I.SUBTITLE_DISABLED); //subtitleDisabled
                    }
                }]);

                return n;
            }(defaultSubtitleModule),
            n36 = n(36),
            Xe = n.n(n36),
            n37 = n(37),
            $e = n.n(n37),
            n29 = n(29),
            tn = n.n(n29),
            en = new Promise((function(resolve, reject) {
                if (window.cast) {
                    resolve();
                    return;
                }

                window.__onGCastApiAvailable = function(n) {
                    if (!n) {
                        reject();
                        return;
                    }

                    if ("complete" === document.readyState) {
                        resolve();
                        return;
                    }

                    window.addEventListener("load", (function e() {
                        resolve();
                        window.removeEventListener("load", e);
                    }))
                }
            })).then((function() {
                    return !0;
                }
            )).catch((function() {
                    return !1;
                }
            )),
            nn = $e()(tn.a.mark((function t() {
                    var e;
                    return tn.a.wrap((function(t) {
                            for (; ; ) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        t.next = 2;
                                        return en;
                                    case 2:
                                        e = t.sent;
                                        return t.abrupt("return", e ? Promise.resolve() : Promise.reject());
                                    case 4:
                                    case "end":
                                        return t.stop();
                                }
                            }
                        }
                    ), t)
                }
            ))),
            ChromecastInfoBar = function() {
                function createChromecastInfoBarSkeleton(player) {
                    var chromecastInfoBar = this;

                    pe()(this, createChromecastInfoBarSkeleton);
                    this.player = player;
                    this.bar = void 0;
                    this.icon = void 0;
                    this.label = void 0;
                    this.gui = this.player.getComponent("gui");

                    if (!this.gui) {
                        return;
                    }

                    player.on(n0.I.CHROMECAST_CONNECTED, (function(t) { //chromecastConnected
                        return chromecastInfoBar.show(t);
                    }));
                    player.on(n0.I.CHROMECAST_DISCONNECTED, (function() { //chromecastDisconnected
                        return chromecastInfoBar.hide();
                    }));
                    this.create();
                }
                me()(createChromecastInfoBarSkeleton, [{
                    key: "create",
                    value: function() {
                        var parentContainer = this.gui.getContainer();

                        this.bar = document.createElement("div");
                        this.bar.classList.add("".concat(this.player.options.get("cssPrefix"), "-cast-bar"));
                        this.icon = document.createElement("span");
                        this.bar.appendChild(this.icon);
                        this.label = document.createElement("p");
                        this.bar.appendChild(this.label);
                        parentContainer.appendChild(this.bar);
                    }
                },
                    {
                        key: "show",
                        value: function(t) {
                            if (!this.bar) {
                                return;
                            }

                            this.bar.classList.add("active");
                            this.label.innerHTML = t.friendlyName;
                        }
                    },
                    {
                        key: "hide",
                        value: function() {
                            if (!this.bar) {
                                return;
                            }

                            this.bar.classList.remove("active");
                        }
                    }]);

                return createChromecastInfoBarSkeleton;
            }(),
            CastPlayerWrapper = function() {
                function createCastPlayerWrapperSkeleton(player) {
                    var castPlayerWrapper = this;

                    pe()(this, createCastPlayerWrapperSkeleton);
                    this.player = player;
                    this.gui = void 0;
                    this.playerState = "IDLE";
                    nn().then((function() {
                        castPlayerWrapper.player.on(cast.framework.CastContextEventType.SESSION_STATE_CHANGED, (function(instance, state) {
                            return castPlayerWrapper.onSessionStateChanged(instance, state);
                        }));
                        castPlayerWrapper.player.on(cast.framework.CastContextEventType.CAST_STATE_CHANGED, (function(castState) {
                            return castPlayerWrapper.onCastStateChanged(castState);
                        }));
                        castPlayerWrapper.player.on(cast.framework.RemotePlayerEventType.PLAYER_STATE_CHANGED, (function(t) {
                            return castPlayerWrapper.onPlayerStateChanged(t); //breakpoint here
                        }));
                        castPlayerWrapper.player.on(cast.framework.RemotePlayerEventType.CURRENT_TIME_CHANGED, (function(t, e) {
                            return castPlayerWrapper.onPlayerTimeChanged(t, e); //breakpoint here
                        }));
                    })).catch((function() {} ));

                    this.init();
                }
                me()(createCastPlayerWrapperSkeleton, [{
                    key: "init",
                    value: function() {
                        var castPlayerWrapper = this;

                        this.gui = this.player.getComponent("gui");
                        this.controls = this.player.getComponent("controls"); //breakpoint here
                        nn().then((function() {
                            return castPlayerWrapper.initCastGui();
                        })).catch((function() {} ))
                    }
                },
                    {
                        key: "initCastGui",
                        value: function() {
                            var castPlayerWrapper = this;

                            this.gui.hidePlayBigButton();
                            this.chromecastInfoBar = new ChromecastInfoBar(this.player);
                            this.castButton = this.controls.createButton("cast");
                            this.castButton.hideClass = "hidden";
                            this.castButton.on("click", (function() {
                                return castPlayerWrapper.player.connect();
                            }));
                            this.controls.addExtraControl(this.castButton);
                            requestAnimationFrame((function() {
                                return castPlayerWrapper.controls.rebuild();
                            }));
                        }
                    },
                    {
                        key: "onSessionStateChanged",
                        value: function(t, e) {
                            var castPlayerWrapper = this;
                            this.showControls();
                            switch (t) {
                                case cast.framework.SessionState.SESSION_RESUMED:
                                    if ("IDLE" === this.playerState) {
                                        this.gui.showPlayBigButton();
                                    }

                                    setTimeout((function() {
                                        var t = e && e.customData && e.customData.options;
                                        t && t.live && castPlayerWrapper.controls.showLive();
                                    }), 100)
                            }
                        }
                    },
                    {
                        key: "onCastStateChanged",
                        value: function(t) {
                            var castPlayerWrapper = this;
                            this.showControls();
                            requestAnimationFrame((function() {
                                return castPlayerWrapper.controls.rebuild();
                            }));
                            switch (t) {
                                case cast.framework.CastState.NO_DEVICES_AVAILABLE:
                                    this.castButton.removeClass("active");
                                    this.castButton.hide();
                                    break;
                                case cast.framework.CastState.NOT_CONNECTED:
                                    this.castButton.removeClass("active");
                                    this.castButton.show();
                                    break;
                                case cast.framework.CastState.CONNECTING:
                                    this.castButton.removeClass("pending");
                                    this.castButton.show();
                                    break;
                                case cast.framework.CastState.CONNECTED:
                                    this.castButton.addClass("active");
                                    this.castButton.show();
                            }
                        }
                    },
                    {
                        key: "onPlayerStateChanged",
                        value: function(t) {
                            var castPlayerWrapper = this;
                            this.playerState = t.value;
                            switch (t.value) {
                                case "PLAYING":
                                    setTimeout((function() {
                                        return castPlayerWrapper.controls.showPause();
                                    }), 0);
                                    this.gui.hidePlayBigButton();
                                    break;
                                case "PAUSED":
                                    this.gui.showPlayBigButton();
                                    break;
                                case "IDLE":
                                    this.gui.showPlayBigButton();
                                    this.controls.showPlay();
                                    this.gui.showPlayBigButton();
                            }
                        }
                    },
                    {
                        key: "onPlayerTimeChanged",
                        value: function(t, e) {
                            var n = t / e * 100;
                            this.gui.controlsBar.progressControl.update(n, e);
                            this.gui.controlsBar.timeDisplay.update(t, e);
                        }
                    },
                    {
                        key: "showControls",
                        value: function() {
                            this.controls.enable();
                        }
                    }]);

                return createCastPlayerWrapperSkeleton;
            }(),
            on = [],
            chromecastSenderModule = function() {
                function createChromecastSenderModule(player) {
                    var chromecastSenderModule = this;

                    pe()(this, createChromecastSenderModule);
                    this.player = player;
                    this.options = this.player.options;
                    this.timeShift = this.player.timeShift;
                    this.id = this.options.get("id");
                    this.player.on(n0.I.DESTROY, (function() { //destroy
                        return chromecastSenderModule.onDestroy();
                    }));
                    this.removeGlobalListeners();
                    this.player.loadCastMedia = function() {
                        return chromecastSenderModule.load();
                    };
                    this.chromecastOpts = this.options.get("chromecast");

                    if (!this.chromecastOpts) {
                        return;
                    }

                    this.appId = this.chromecastOpts.appId;
                    this.sessionState = void 0;
                    this.onRemotePlayerTimeChangedRef = this.onRemotePlayerTimeChanged.bind(this);
                    this.currentTextTrack = void 0;
                    this.currentAudioTrack = void 0;
                    this.stopped = !1;
                    this.currentTime = 0;
                    this._castState = void 0;
                    this._castContext = void 0;
                    this._castSession = void 0;
                    this.initAutoplay = this.options.get("autoplay");
                    this.listeners = [];

                    if (this.chromecastOpts.resumeSession) {
                        this.options.set("autoplay", !1);
                    }

                    this.player.connect = function(t) {
                        return chromecastSenderModule.connect(t);
                    }
                    this.player.stopCasting = function() {
                        return chromecastSenderModule.stopCasting();
                    }
                    this.player.on(n0.I.READY, (function() { //ready
                        return chromecastSenderModule.init();
                    }))
                    this.player.on(n0.I.GUI_READY, (function() { //guiReady
                        return new CastPlayerWrapper(chromecastSenderModule.player);
                    }))
                }
                me()(createChromecastSenderModule, [{
                    key: "removeGlobalListeners",
                    value: function() {
                        while (on.length) {
                            var t = on.pop();
                            t.object.removeEventListener(t.event, t.fn);
                        }
                    }
                },
                    {
                        key: "castState",
                        get: function() {
                            return this._castState;
                        },
                        set: function(castState) {
                            this._castState = castState;
                            castState && this.player.trigger(cast.framework.CastContextEventType.CAST_STATE_CHANGED, castState);
                        }
                    },
                    {
                        key: "castContext",
                        get: function() {
                            return cast && cast.framework.CastContext.getInstance();
                        }
                    },
                    {
                        key: "castSession",
                        get: function() {
                            return cast && this.castContext && this.castContext.getCurrentSession();
                        }
                    }, {
                        key: "isSessionActive",
                        get: function() {
                            return this.castContext && (this.castContext.getSessionState() === cast.framework.SessionState.SESSION_STARTED || this.castContext.getSessionState() === cast.framework.SessionState.SESSION_RESUMED);
                        }
                    },
                    {
                        key: "onDestroy",
                        value: function() {
                            this.removeGlobalListeners();
                            this.sessionState = void 0;
                            this.currentTextTrack = void 0;
                            this.currentAudioTrack = void 0;
                            this.stopped = !1;
                            this.currentTime = 0;
                            this._castState = void 0;
                            this._castContext = void 0;
                            this._castSession = void 0;
                        }
                    },
                    {
                        key: "registerEvents",
                        value: function() {
                            var chromecastSenderModule = this;

                            this.player.on(n0.I.PLAYING, (function() { //playing
                                return chromecastSenderModule.stopped = !1;
                            }));
                            this.player.on(n0.I.SUBTITLE, (function(e) { //subtitle
                                return chromecastSenderModule.onSubtitle(e);
                            }));
                            this.player.on(n0.I.SUBTITLE_DISABLED, (function() { //subtitleDisabled
                                return chromecastSenderModule.onSubtitle();
                            }));
                            this.player.on(n0.I.PAUSE_REQUEST, (function() { //pauseRequest
                                "PAUSED" !== remotePlayer.playerState && chromecastSenderModule.playOrPause();
                            }));
                            this.player.on(n0.I.PLAY_REQUEST, (function() { //playRequest
                                "PLAYING" !== remotePlayer.playerState && chromecastSenderModule.playOrPause();
                            }));
                            this.player.on(n0.I.STOP_REQUEST, (function() { //stopRequest
                                return chromecastSenderModule.stop();
                            }));
                            this.player.on(n0.I.VOLUME_CHANGE_REQUEST, (function(e) { //volumeChangeRequest
                                return chromecastSenderModule.setVolume(e);
                            }));
                            this.player.on(n0.I.AUDIO_TRACK_CHANGE_REQUEST, (function(e) { //audioTrackChangeRequest
                                return chromecastSenderModule.setTrack({
                                    trackId: e,
                                    type: "AUDIO"
                                })
                            }));
                            this.player.on(n0.I.SUBTITLE_ENABLE_REQUEST, (function() { //subtitleEnableRequest
                                if (!chromecastSenderModule.isSessionActive) {
                                    return;
                                }

                                chromecastSenderModule.currentTextTrack = chromecastSenderModule.currentTextTrack || chromecastSenderModule.player.listSubtitles()[0];
                                chromecastSenderModule.player.trigger(n0.I.SUBTITLE, chromecastSenderModule.currentTextTrack); //subtitle
                            }));
                        }
                    },
                    {
                        key: "init",
                        value: function() {
                            var chromecastSenderModule = this;
                            nn().then((function() {
                                chromecastSenderModule.registerEvents();
                                chromecastSenderModule.timeShift = chromecastSenderModule.player.timeShift;
                                chromecastSenderModule.chromecastOpts.resumeSession && setTimeout((function() {
                                    var e = chromecastSenderModule.castSession && chromecastSenderModule.castSession.getMediaSession();

                                    if (e && e.customData && e.customData.options) {
                                        chromecastSenderModule.load();
                                        return;
                                    }
                                    if (chromecastSenderModule.sessionState !== cast.framework.SessionState.SESSION_RESUMED) {
                                        chromecastSenderModule.player.play();
                                    }

                                }), 300);

                                if (!(remotePlayer && remotePlayerController)) {
                                    remotePlayer = new window.cast.framework.RemotePlayer;
                                    remotePlayerController = new window.cast.framework.RemotePlayerController(remotePlayer);
                                }

                                chromecastSenderModule.registerRemotePlayerEvents();
                                chromecastSenderModule.setupContext(chromecastSenderModule.castContext);
                                chromecastSenderModule.player.on(n0.I.SEEK_TO_REQUEST, (function(t) { //seekToRequest
                                    remotePlayer.currentTime = t;
                                    remotePlayerController.seek();
                                }));
                                chromecastSenderModule.player.on(n0.I.SEEK_REQUEST, (function(t) { //seekRequest
                                    remotePlayer.currentTime = t * remotePlayer.duration / 100;
                                    remotePlayerController.seek();
                                }));
                            })).catch((function() {
                                chromecastSenderModule.initAutoplay && chromecastSenderModule.player.play();
                            }));
                        }
                    },
                    {
                        key: "setupContext",
                        value: function(t) {
                            var chromecastSenderModule = this;
                            if (!t) {
                                return;
                            }

                            var onCastStateChangedF = function(t) { return chromecastSenderModule.onCastStateChanged(t); },
                                onSessionStateChangedF = function(t) { return chromecastSenderModule.onSessionStateChanged(t); };

                            t.setOptions({
                                receiverApplicationId: this.appId,
                                autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
                            });
                            on.push({
                                object: t,
                                event: cast.framework.CastContextEventType.CAST_STATE_CHANGED,
                                fn: onCastStateChangedF
                            });
                            on.push({
                                object: t,
                                event: cast.framework.CastContextEventType.SESSION_STATE_CHANGED,
                                fn: onSessionStateChangedF
                            });

                            this.castState = t.getCastState();
                            t.addEventListener(cast.framework.CastContextEventType.CAST_STATE_CHANGED, onCastStateChangedF);
                            t.addEventListener(cast.framework.CastContextEventType.SESSION_STATE_CHANGED, onSessionStateChangedF);
                        }
                    },
                    {
                        key: "setVolume",
                        value: function(t) {
                            if (!remotePlayerController) {
                                return;
                            }

                            remotePlayer.volumeLevel = t / 100;
                            remotePlayerController.setVolumeLevel();
                        }
                    },
                    {
                        key: "onSubtitle",
                        value: function(selectedTextTrack) {
                            this.currentTextTrack = selectedTextTrack;
                            this.setTrack(selectedTextTrack);
                        }
                    },
                    {
                        key: "setTrack",
                        value: function(t) {
                            if (!this.castSession) {
                                return;
                            }

                            var e = {
                                    type: "EDIT_TRACKS_INFO",
                                    requestId: 1,
                                    mediaSessionId: this.castSession.getMediaSession().mediaSessionId,
                                    activeTrackIds: t && t.trackId ? [t.trackId] : []
                                },
                                trackId = this.currentTextTrack && this.currentTextTrack.trackId;

                            if (t && "AUDIO" === t.type) {
                                this.player.trigger(n0.I.AUDIO_TRACK_CHANGED, t); //audioTrackChanged
                                if (trackId) {
                                    e.activeTrackIds.push(trackId);
                                }
                            }

                            this.castSession.sendMessage("urn:x-cast:com.google.cast.media", e);
                        }
                    },
                    {
                        key: "registerRemotePlayerEvents",
                        value: function() {
                            var chromecastSenderModule = this;

                            if (!remotePlayerController) {
                                return;
                            }

                            var e = function(e) { return chromecastSenderModule.onRemotePlayerTimeChanged(e); },
                                n = function(e) { return chromecastSenderModule.onRemotePlayerStateChanged(e); };

                            on.push({
                                object: remotePlayerController,
                                event: cast.framework.RemotePlayerEventType.CURRENT_TIME_CHANGED,
                                fn: e
                            });
                            on.push({
                                object: remotePlayerController,
                                event: cast.framework.RemotePlayerEventType.PLAYER_STATE_CHANGED,
                                fn: n
                            });
                            remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.CURRENT_TIME_CHANGED, e);
                            remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.PLAYER_STATE_CHANGED, n);
                        }
                    },
                    {
                        key: "connect",
                        value: function(currentTrack) {
                            var audioTrack = currentTrack.audio,
                                subtitleTrack = currentTrack.subtitle;

                            this.audioLanguage = audioTrack.lang;
                            this.subtitleLang = subtitleTrack.language;

                            return this.castContext.requestSession();
                        }
                    },
                    {
                        key: "onRemotePlayerStateChanged",
                        value: function(newState) {
                            this.player.trigger(cast.framework.RemotePlayerEventType.PLAYER_STATE_CHANGED, newState);
                        }
                    },
                    {
                        key: "onRemotePlayerTimeChanged",
                        value: function(t) {
                            this.currentTime = remotePlayer.currentTime;
                            var remotePlayerDuration = remotePlayer.duration;

                            if (remotePlayer && remotePlayer.liveSeekableRange) {
                                remotePlayerDuration = remotePlayer.liveSeekableRange.end;
                            }

                            this.player.trigger(cast.framework.RemotePlayerEventType.CURRENT_TIME_CHANGED, this.currentTime, remotePlayerDuration);
                        }
                    },
                    {
                        key: "onCastStateChanged",
                        value: function(t) {
                            this.castState = t.castState;

                            switch (t.castState) {
                                case cast.framework.CastState.NOT_CONNECTED:
                                    this.player.trigger(n0.I.CHROMECAST_DISCONNECTED); //chromecastDisconnected
                                    break;
                                case cast.framework.CastState.CONNECTED:
                                    this.player.trigger(n0.I.CHROMECAST_CONNECTED, this.castSession.getCastDevice()); //chromecastConnected
                                    if (!(this.castSession && this.castSession.getMediaSession())) {
                                        var e = !this.player.isLive() && this.player.getCurrentTime();
                                        this.load(e); //breakpoint here
                                    }
                                    this.player.stop(!0);
                            }
                        }
                    },
                    {
                        key: "onSessionStateChanged",
                        value: function(t) {
                            this.sessionState = t.sessionState;
                            var segmentTemplate = this.castSession && this.castSession.getMediaSession();
                            this.player.trigger(cast.framework.CastContextEventType.SESSION_STATE_CHANGED, t.sessionState, segmentTemplate);

                            switch (t.sessionState) {
                                case cast.framework.SessionState.SESSION_ENDED:
                                    this.unFreezePlayer();
                                    if (!this.stopped) {
                                        var n = this.currentTime || 0;
                                        this.options.set("startTime", n);
                                        this.player.play();
                                    }
                                    break;
                                case cast.framework.SessionState.SESSION_STARTED:
                                    this.freezePlayer();
                                    break;
                                case cast.framework.SessionState.SESSION_RESUMED:
                                    this.freezePlayer();
                                    if (!segmentTemplate || !segmentTemplate.media || !segmentTemplate.media.tracks) {
                                        return;
                                    }
                                    var availableAudioTracks = segmentTemplate.media.tracks.filter((function(track) {
                                            return "AUDIO" === track.type;
                                        })).map((function(audioTrack) {
                                            audioTrack.lang = audioTrack.language;
                                            audioTrack.id = audioTrack.trackId;
                                            return audioTrack;
                                        })),
                                        availableTextTracks = segmentTemplate.media.tracks.filter((function(track) {
                                            return "TEXT" === track.type;
                                        }));

                                    this.currentTextTrack = this.getCurrentTrack("TEXT");
                                    this.currentAudioTrack = this.getCurrentTrack("AUDIO");

                                    if (this.currentTextTrack && !this.currentTextTrack.id) {
                                        this.currentTextTrack.id = this.currentTextTrack.trackId;
                                    }

                                    this.player.trigger(n0.I.AUDIO_TRACK_LIST, availableAudioTracks); //audioTracks

                                    if (availableTextTracks && availableTextTracks.length) {
                                        this.player.trigger(n0.I.SUBTITLES, availableTextTracks); //subtitles

                                        if (this.currentTextTrack) {
                                            this.player.trigger(n0.I.SUBTITLE, this.currentTextTrack); //subtitle
                                        }
                                    }

                                    if (this.currentAudioTrack) {
                                        this.player.trigger(n0.I.AUDIO_TRACK_CHANGED, this.currentAudioTrack); //audioTrackChanged
                                    }
                            }
                        }
                    },
                    {
                        key: "load",
                        value: function(newTime) {
                            var chromecastSenderModule = this,
                                currentMediaItem = this.player.mediaItem, //breakpoint here
                                dashSource = currentMediaItem.getSource().dash || currentMediaItem.getSource().DASH || [{}],
                                i = Xe()(dashSource, 1)[0],
                                drmConfig = currentMediaItem.getDrm(),
                                srcUrl = i.src;

                            if (!srcUrl) {
                                return;
                            }

                            if (this.timeShift && this.timeShift.isEnabled()) {
                                srcUrl = this.timeShift.generateUrl(srcUrl);
                            }

                            var chromecastMediaInfo = new window.chrome.cast.media.MediaInfo(srcUrl, "application/dash+xml");

                            chromecastMediaInfo.metadata = new chrome.cast.media.GenericMediaMetadata;
                            chromecastMediaInfo.customData = {};

                            if (this.options.get("live")) {
                                chromecastMediaInfo.customData.live = !0;
                                chromecastMediaInfo.streamType = chrome.cast.media.StreamType.LIVE
                            }
                            chromecastMediaInfo.customData.options = this.player.getOptions();
                            chromecastMediaInfo.customData.debug = this.chromecastOpts.debug;

                            if (drmConfig && drmConfig.widevine) {
                                var u = drmConfig.widevine;
                                if (this.chromecastOpts.config && this.chromecastOpts.config.videoSessionId) {
                                    u += "&videoSessionId=".concat(this.chromecastOpts.config.videoSessionId);
                                    chromecastMediaInfo.customData.videoSessionId = this.chromecastOpts.config.videoSessionId;
                                }

                                if (this.chromecastOpts.config && this.chromecastOpts.config.videoSession) {
                                    chromecastMediaInfo.customData.videoSession = this.chromecastOpts.config.videoSession;
                                }

                                chromecastMediaInfo.customData.licenseUrl = u;
                                chromecastMediaInfo.metadata.title = this.chromecastOpts.title || "";
                                chromecastMediaInfo.metadata.subtitle = this.chromecastOpts.subtitle || "";

                                if (this.chromecastOpts.image) {
                                    chromecastMediaInfo.metadata.images = [{
                                        url: this.chromecastOpts.image
                                    }]
                                }
                            }
                            var mediaLoadRequest = new window.chrome.cast.media.LoadRequest(chromecastMediaInfo);

                            if (newTime) {
                                mediaLoadRequest.currentTime = newTime;
                            }

                            this.castSession.loadMedia(mediaLoadRequest).then((function() {
                                    var media = chromecastSenderModule.getMedia();
                                    if (null != media && media.tracks) {
                                        var n = media.tracks.find((function(track) {
                                                return track.language === chromecastSenderModule.audioLanguage && "AUDIO" === track.type;
                                            })),
                                            r = media.tracks.find((function(track) {
                                                return track.language === chromecastSenderModule.subtitleLang && "TEXT" === track.type;
                                            }));

                                        if (n) {
                                            chromecastSenderModule.currentAudioTrack = n;
                                        }
                                        if (r) {
                                            chromecastSenderModule.currentTextTrack = r;
                                        }

                                        n ? chromecastSenderModule.setTrack(chromecastSenderModule.currentAudioTrack) : r && chromecastSenderModule.setTrack(chromecastSenderModule.currentTextTrack);
                                    }

                                    chromecastSenderModule.setVolume(chromecastSenderModule.player.getVolume());
                                }),
                                (function(t) {
                                    console.log("loadMedia ERROR: ", t);
                                }))
                        }
                    },
                    {
                        key: "getCurrentTrack",
                        value: function(trackType) {
                            var media = this.getMedia();

                            if (!media) {
                                return;
                            }

                            var n = mediaSession.activeTrackIds.reduce((function(n, trackId) {
                                return media.tracks.find((function(track) {
                                    return track.trackId === trackId && track.type === trackType;
                                })) || n }), void 0);

                            if (n && !n.trackId && "AUDIO" === trackType) {
                                n = media.tracks.find((function(track) {
                                    return track.type === trackType;
                                }))
                            }

                            return n;
                        }
                    },
                    {
                        key: "getMedia",
                        value: function() {
                            var t = this.castSession && this.castSession.getMediaSession();
                            return null == t ? void 0 : t.media;
                        }
                    },
                    {
                        key: "freezePlayer",
                        value: function() {
                            this.player.freeze();
                        }
                    },
                    {
                        key: "unFreezePlayer",
                        value: function() {
                            this.player.unFreeze();
                        }
                    },
                    {
                        key: "playOrPause",
                        value: function() {
                            if (this.player.frozen || this.castSession) {
                                "IDLE" === remotePlayer.playerState ? this.load() : remotePlayerController.playOrPause();
                            }
                        }
                    },
                    {
                        key: "stopCasting",
                        value: function() {
                            this.stopped = !1;
                            this.castSession.endSession(!0);
                        }
                    },
                    {
                        key: "stop",
                        value: function() {
                            if (!this.player.frozen && !this.castSession) {
                                return;
                            }

                            this.stopped = !0;
                            this.player.stop(!0);
                            remotePlayerController.stop();
                            this.castSession.endSession(!0);
                        }
                    }]);

                return createChromecastSenderModule;
            }();
        chromecastSenderModule.enabled = !0;
        chromecastSenderModule.moduleId = "chromecast-sender";

        var currentChromecastSenderModule = chromecastSenderModule,
            errorNumberDrmNoKeyProvided = 503,
            errorNumberDrmGenerateMediaKeysFailed = 504,
            errorNumberGenerateLicenseChallengeFailed = 505,
            errorNumberDrmSessionUpdateFailed = 506,
            errorNumberDrmLoadLicenseKeyFailed = 507,
            errorNumberDrmLoadCertificateFailed = 509,
            errorNumberLicenseResponseRejected = 511,
            contentProtectionSchemeIdUris = Object.freeze({
                __proto__: null,
                CLEARKEY: "1077efec-c0b2-4d02-ace3-3c1e52e2fb4b",
                FAIRPLAY: "94ce86fb-07ff-4f43-adb8-93d2fa968ca2",
                PLAYREADY: "9a04f079-9840-4286-ab92-e65be0885f95",
                WIDEVINE: "edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"
            });
        function findAvailableDrmSchemesAndKIDs(arrayBuffer) {
            if (null === arrayBuffer) {
                return [];
            }
            var dataView = new DataView(arrayBuffer),
                done = !1,
                availableDrmSchemesAndKIDs = [];

            for (let i = 0; !done; ) {
                var end, o,
                    contentProtectionSchemeIdUri = void 0,
                    KID = void 0,
                    start = i;

                if (i >= dataView.buffer.byteLength) {
                    done = !0;
                    break;
                }
                end = i + dataView.getUint32(i);
                i += 4;

                if (1886614376 !== dataView.getUint32(i)) {
                    i = end;
                    continue;
                }

                i += 4;
                o = dataView.getUint8(i);

                if (0 !== o && 1 != o) {
                    i = end;
                    continue;
                }

                i++;
                i += 3;
                contentProtectionSchemeIdUri = extractKidFromByteArray(new Uint8Array(arrayBuffer, i, 16));
                i += 16;
                contentProtectionSchemeIdUri = contentProtectionSchemeIdUri.toLowerCase();
                if (0 === o) {
                    KID = extractKidFromByteArray(new Uint8Array(arrayBuffer, Math.min(i + 8, arrayBuffer.byteLength - 16), 16));
                }
                i += 4;
                availableDrmSchemesAndKIDs.push({
                    id: contentProtectionSchemeIdUri,
                    data: dataView.buffer.slice(start, end),
                    keyId: KID
                });
                i = end;
            }

            return availableDrmSchemesAndKIDs;
        }
        function extractKidFromByteArray(uint8Array) {
            var e = [],
                toHex = function(t) {
                    var result = "";
                    for (let i = 0; i < t.length; ++i) {
                        var r = t[i].toString(16);
                        if (1 == r.length) {
                            r = "0" + r;
                        }

                        result += r;
                    }

                    return result;
                };

            e.push(toHex(uint8Array.subarray(0, 4)));
            e.push(toHex(uint8Array.subarray(4, 6)));
            e.push(toHex(uint8Array.subarray(6, 8)));
            e.push(toHex(uint8Array.subarray(8, 10)));
            e.push(toHex(uint8Array.subarray(10, 16)));

            return e.join("-");
        }
        function findItemByKeyId(cdmRequestData, keyId) {
            for (let i = 0; i < cdmRequestData.length; i++) {
                if (cdmRequestData[i].keyId === keyId) {
                    return cdmRequestData[i];
                }
            }

            return null;
        }
        function getDrmTechnologyByKeySystem(requestedKeySystem) {
            var drmTechnologyAndKeySystem = Object.entries(supportedDrmTechnologies).find((function(drmTechnologyName) {
                    var drmTechnologyAndKeySystemWrapper = Object(n6.a)(drmTechnologyName, 2),
                        keySystem = drmTechnologyAndKeySystemWrapper[1];

                    return requestedKeySystem === keySystem;
                }
            ))
            return drmTechnologyAndKeySystem == null ? void 0 : drmTechnologyAndKeySystem[0];
        }
        function dataBytesMatch(dataBytes1, dataBytes2) {
            if (dataBytes1.byteLength !== dataBytes2.byteLength) {
                return !1;
            }
            var data1 = new Uint8Array(dataBytes1),
                data2 = new Uint8Array(dataBytes2);

            for (let i = 0; i < data1.length; i++) {
                if (data1[i] !== data2[i]) {
                    return !1;
                }
            }

            return !0;
        }
        function getMappedProperties(originalObject, enumerablePropertiesOnly) { //duplicate method
            var mappedProperties = Object.keys(originalObject);
            if (Object.getOwnPropertySymbols) {
                var propertySymbols = Object.getOwnPropertySymbols(originalObject);
                if (enumerablePropertiesOnly) {
                    propertySymbols = propertySymbols.filter((function(propertyName) {
                        return Object.getOwnPropertyDescriptor(originalObject, propertyName).enumerable;
                    }));
                }

                mappedProperties.push.apply(mappedProperties, propertySymbols);
            }
            return mappedProperties;
        }
        function Sn(obj) {
            for (let i = 1; i < arguments.length; i++) {
                var originalObject = null != arguments[i] ? arguments[i] : {};

                if (i % 2) {
                    getMappedProperties(Object(originalObject), !0).forEach((function(property) {
                        Object(n2.a)(obj, property, originalObject[property]);
                    }))
                } else if (Object.getOwnPropertyDescriptors) {
                    Object.defineProperties(obj, Object.getOwnPropertyDescriptors(originalObject));
                } else {
                    getMappedProperties(Object(originalObject)).forEach((function(propertyName) {
                        Object.defineProperty(obj, propertyName, Object.getOwnPropertyDescriptor(originalObject, propertyName));
                    }))
                }
            }

            return obj;
        }
        var mappedDrmPropertiesLowercase = Object.keys(supportedDrmTechnologies).map((function(property) {
            return property.toLowerCase();
        }));
        function kn(t, e) {
            return wn.apply(this, arguments);
        }
        function wn() {
            return (wn = Object(n3.a)(n3.b.mark((function t(player, requestedAudioVideoMimeTypeAndCodecs) {
                    var r, htmlVideoElement, options, drmSessionCachedByKeyId, drmSourcesForAllSupportedTypes, drmConfig, allDrmFormats, availableDrmFormatsInMpd, actuallyAvailableFormats, mediaKeySessions, mediaKeySystemAccess, selectedKeySystem, selectedDRMSystem, mediaKeys, cdmRequestData, cancelRequest, requestDrmKeyAccessWrapper, requestDrmKeyAccess, triggerErrorCommand, showError, encryptedEventListener, isCdmRequestAlreadyInitialized, sendRequestToCdmF, mediaKeySessionMessageEvent, M, F, sendUpdateToCDM, closeAllMediaKeySessionsF;
                    return n3.b.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                    case 0:
                                        closeAllMediaKeySessionsF = function() {
                                            cdmRequestData = [];
                                            mediaKeySessions.forEach((function(session) {
                                                console.log("Closing session: " + session.keyId);
                                                session.close().catch((function() {} ));
                                                session.removeEventListener("message", mediaKeySessionMessageEvent); // removes listener that we will try to customize
                                                session = null;
                                            }));
                                            mediaKeySessions = [];
                                            cancelRequest && cancelRequest();
                                            htmlVideoElement.removeEventListener("encrypted", encryptedEventListener);
                                        };
                                        sendUpdateToCDM = function(mediaKeySession, response) {
                                            mediaKeySession.update(response).then((function() { //keys MUST only be provided to the CDM via an update() call
                                                player.trigger(n0.M); //licenseAcquired
                                            })).catch((function(t) {
                                                var sessionUpdateErrorKey = n7.a.DRM_SESSION_UPDATE_FAILED,
                                                    errorCode = errorNumberDrmSessionUpdateFailed;

                                                if ("Rejected with system code (18)" === t.message) {
                                                    sessionUpdateErrorKey = n7.a.LICENSE_RESPONSE_REJECTED;
                                                    errorCode = errorNumberLicenseResponseRejected;
                                                }

                                                triggerErrorCommand(errorCode, sessionUpdateErrorKey, t);
                                            }))
                                        };
                                        F = function(drmUrl, xhrPostData, resultWrapper) {
                                            var a, c;
                                            player.trigger(n0.N, drmUrl, getDrmTechnologyByKeySystem(mediaKeySystemAccess.keySystem)); //acquiringLicense
                                            var httpConfig = options.get(n1.i), //httpConfig
                                                xhrPostHeaders = Sn({}, resultWrapper, {}, null == httpConfig || null === (a = httpConfig.drm) || void 0 === a ? void 0 : a.headers);

                                            return n10.d.post(drmUrl, {
                                                cancelToken: new n10.d.CancelToken((function(t) {
                                                    return cancelRequest = t;
                                                })),
                                                data: xhrPostData,
                                                responseType: n10.a, //"arraybuffer"
                                                withCredentials: null == httpConfig || null === (c = httpConfig.drm) || void 0 === c ? void 0 : c.withCredentials,
                                                headers: xhrPostHeaders
                                            }).then((function(n) {
                                                    var data = n.data,
                                                        metric = n.metric,
                                                        xhr = n.xhr;
                                                    player.trigger(n0.o, { //"networkMetric"
                                                        duration: metric.duration,
                                                        type: "LICENSE",
                                                        statusCode: xhr.status,
                                                        url: drmUrl,
                                                        timestamp: Date.now()
                                                    });

                                                    return data;
                                                }
                                            )).catch((function(n) {
                                                    var metric = n.metric,
                                                        xhr = n.xhr;
                                                    triggerErrorCommand(errorNumberDrmLoadLicenseKeyFailed, n7.a.DRM_LOAD_LICENSE_KEY_FAILED);
                                                    player.trigger(n0.o, { //networkMetric
                                                        duration: metric.duration,
                                                        type: "LICENSE",
                                                        statusCode: xhr.status,
                                                        url: drmUrl,
                                                        timestamp: Date.now
                                                    });
                                                }
                                            ))
                                        };
                                        M = function() {
                                            return (M = Object(n3.a)(n3.b.mark((function t(mediaKeyMessageEvent) {
                                                    var mediaKeySession, arrayBuffer, ii, uint16ArrayBuffer, o, domParser, document, nameElements, valueElements, url, licenseResponse;
                                                    return n3.b.wrap((function(t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                    case 0:
                                                                        mediaKeySession = mediaKeyMessageEvent.target;
                                                                        arrayBuffer = mediaKeyMessageEvent.message;
                                                                        ii = [];
                                                                        try {
                                                                            uint16ArrayBuffer = new Uint16Array(arrayBuffer);
                                                                            o = String.fromCharCode.apply(null, uint16ArrayBuffer);
                                                                            domParser = new DOMParser;
                                                                            document = domParser.parseFromString(o, "application/xml");

                                                                            if (document.getElementsByTagName("Challenge")[0]) {
                                                                                arrayBuffer = document.getElementsByTagName("Challenge")[0].childNodes[0].nodeValue;
                                                                                if (arrayBuffer) {
                                                                                    arrayBuffer = atob(arrayBuffer); //base-64 decode
                                                                                }
                                                                                nameElements = document.getElementsByTagName("name");
                                                                                valueElements = document.getElementsByTagName("value");
                                                                                for (let i = 0; i < nameElements.length; i++) {
                                                                                    ii[nameElements[i].childNodes[0].nodeValue] = valueElements[i].childNodes[0].nodeValue;
                                                                                }
                                                                            }
                                                                        } catch (t) {}

                                                                        url = drmSourcesForAllSupportedTypes[selectedDRMSystem].multikeySrc || drmSourcesForAllSupportedTypes[selectedDRMSystem].src;
                                                                        t.next = 7;
                                                                        return F(url, arrayBuffer, ii);
                                                                    case 7:
                                                                        licenseResponse = t.sent;
                                                                        if (licenseResponse) {
                                                                            sendUpdateToCDM(mediaKeySession, licenseResponse);
                                                                        }
                                                                    case 9:
                                                                    case "end":
                                                                        return t.stop();
                                                                }
                                                        }
                                                    ), t)
                                                }
                                            )))).apply(this, arguments)
                                        };
                                        mediaKeySessionMessageEvent = function(mediaKeyMessageEvent) {
                                            return M.apply(this, arguments);
                                        };
                                        sendRequestToCdmF = function(mediaKeys, initDataType, initData, keyId) {
                                            var mediaKeySession = mediaKeys.createSession(); //MediaKeySession
                                            //**** add custom listener ****
                                            // session.addEventListener('message', event => {
                                            //     const challenge = event.message;
                                            //     const LICENSE_SERVER_URL = 'https://localhost/';
                                            //     const xhr = new XMLHttpRequest();
                                            //     xhr.open("POST", LICENSE_SERVER_URL, true);
                                            //     xhr.onerror = (err) => {
                                            //         reject(err);
                                            //     };
                                            //     xhr.onload = (evt) => {
                                            //         if (xhr.status >= 200 && xhr.status < 300) {
                                            //             const license = evt.target.response;
                                            //             resolve(license);
                                            //         } else {
                                            //             const error = new Error(
                                            //                 "getLicense request finished with a " + `${xhr.status} HTTP error`
                                            //             );
                                            //             reject(error);
                                            //         }
                                            //     };
                                            //     xhr.responseType = "arraybuffer";
                                            //     xhr.send(challenge);
                                            // })
                                            //*******
                                            mediaKeySession.keyId = keyId;
                                            mediaKeySession.addEventListener("message", mediaKeySessionMessageEvent);
                                            mediaKeySession.generateRequest(initDataType, initData).catch((function() {
                                                triggerErrorCommand(errorNumberGenerateLicenseChallengeFailed, n7.a.DRM_GENERATE_LICENSE_CHALLENGE_FAILED);
                                            }));
                                            mediaKeySessions.push(mediaKeySession);
                                        };
                                        isCdmRequestAlreadyInitialized = function(initData, keyId) {
                                            if (drmSessionCachedByKeyId) {
                                                return !!findItemByKeyId(cdmRequestData, keyId);
                                            }

                                            return cdmRequestData.some((function(requestData) {
                                                return dataBytesMatch(requestData.initData, initData);
                                            }));
                                        };
                                        encryptedEventListener = function(mediaEncryptedEvent) {
                                            if (!htmlVideoElement.mediaKeys) {
                                                return;
                                            }

                                            var availableDrmSchemesAndKIDs = findAvailableDrmSchemesAndKIDs(new Uint8Array(mediaEncryptedEvent.initData).buffer),
                                                selectedContentProtectionScheme = contentProtectionSchemeIdUris[selectedDRMSystem.toUpperCase()].toLowerCase(),
                                                schemeWithKID = availableDrmSchemesAndKIDs.find((function(scheme) {
                                                    return scheme.id === selectedContentProtectionScheme;
                                                })),
                                                KID = (null == schemeWithKID ? void 0 : schemeWithKID.keyId) || selectedContentProtectionScheme;

                                            if (!isCdmRequestAlreadyInitialized(mediaEncryptedEvent.initData, KID)) {
                                                player.trigger(n0.L, mediaEncryptedEvent); //encrypted
                                                var cdmRequestDataItem = new CDMRequestDataItem;
                                                cdmRequestDataItem.keyId = KID;
                                                if (!drmSessionCachedByKeyId) {
                                                    cdmRequestDataItem.initData = mediaEncryptedEvent.initData;
                                                }
                                                cdmRequestData.push(cdmRequestDataItem);
                                                sendRequestToCdmF(htmlVideoElement.mediaKeys, mediaEncryptedEvent.initDataType, mediaEncryptedEvent.initData, KID);
                                            }
                                        };
                                        showError = function() {
                                            triggerErrorCommand(errorNumberDrmGenerateMediaKeysFailed, n7.a.DRM_GENERATE_MEDIA_KEYS_FAILED);
                                        };
                                        triggerErrorCommand = function(errorCode, errorMessage, originalMsg) {
                                            player.trigger(n0.f, { //error
                                                code: errorCode,
                                                message: errorMessage,
                                                type: "DRM_ERROR",
                                                renderer: "DASH",
                                                originalMessage: originalMsg
                                            })
                                        };
                                        requestDrmKeyAccess = function() {
                                            return (requestDrmKeyAccess = Object(n3.a)(n3.b.mark((function t(drmTechnologies) {
                                                    var mediaKeySystemAccess, currentDrmTechnology, a;
                                                    return n3.b.wrap((function(t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                    case 0:
                                                                        mediaKeySystemAccess = void 0;
                                                                    case 1:
                                                                        if (!drmTechnologies.length || mediaKeySystemAccess) {
                                                                            t.next = 9;
                                                                            break;
                                                                        }
                                                                        currentDrmTechnology = drmTechnologies.shift();
                                                                        a = v(requestedAudioVideoMimeTypeAndCodecs, drmConfig[currentDrmTechnology]);
                                                                        t.next = 6;
                                                                        return requestMediaKeySystemAccess(supportedDrmTechnologies[currentDrmTechnology.toUpperCase()], a).catch((function() {} ));
                                                                    case 6:
                                                                        mediaKeySystemAccess = t.sent;
                                                                        t.next = 1;
                                                                        break;
                                                                    case 9:
                                                                        return t.abrupt("return", mediaKeySystemAccess);
                                                                    case 10:
                                                                    case "end":
                                                                        return t.stop();
                                                                }
                                                        }
                                                    ), t)
                                                }
                                            )))).apply(this, arguments)
                                        };
                                        requestDrmKeyAccessWrapper = function(availableDrmTechnologies) {
                                            return requestDrmKeyAccess.apply(this, arguments);
                                        };
                                        htmlVideoElement = player.getRendererElm();
                                        options = player.options;
                                        drmSessionCachedByKeyId = options.get(n1.F); //cacheDrmSessionByKeyId
                                        player.on(n0.e, closeAllMediaKeySessionsF); //destroy
                                        player.on(n0.t, closeAllMediaKeySessionsF); //stopped
                                        player.on(n0.ab, closeAllMediaKeySessionsF); //ended
                                        drmSourcesForAllSupportedTypes = player.mediaItem.getDrm();
                                        drmConfig = options.get(n1.M); //drmConfig
                                        allDrmFormats = options.get(n1.T) || mappedDrmPropertiesLowercase; //drmSystems
                                        availableDrmFormatsInMpd = Object.keys(drmSourcesForAllSupportedTypes);
                                        actuallyAvailableFormats = allDrmFormats.filter((function(t) {
                                            return availableDrmFormatsInMpd.includes(t)
                                        }));
                                        mediaKeySessions = [];

                                        if (0 !== actuallyAvailableFormats.length) {
                                            t.next = 27;
                                            break;
                                        }
                                        triggerErrorCommand(errorNumberDrmNoKeyProvided, n7.a.DRM_NO_KEY_PROVIDED);
                                        return t.abrupt("return", Promise.resolve());
                                    case 27:
                                        t.next = 29;
                                        return requestDrmKeyAccessWrapper(actuallyAvailableFormats.slice());
                                    case 29:
                                        if (mediaKeySystemAccess = t.sent) {
                                            t.next = 33;
                                            break;
                                        }
                                        showError();
                                        return t.abrupt("return", Promise.resolve());
                                    case 33:
                                        selectedKeySystem = mediaKeySystemAccess.keySystem;
                                        r = Object.entries(supportedDrmTechnologies).find((function(drmTechnology) {
                                            var e = Object(n6.a)(drmTechnology, 2);
                                            return e[1] === selectedKeySystem;
                                        }));
                                        selectedDRMSystem = r == null ? void 0 : r[0].toLowerCase();
                                        t.t0 = htmlVideoElement.mediaKeys;

                                        if (t.t0) {
                                            t.next = 40;
                                            break;
                                        }
                                        t.next = 39;
                                        return mediaKeySystemAccess.createMediaKeys().catch(showError);
                                    case 39:
                                        t.t0 = t.sent;
                                    case 40:
                                        mediaKeys = t.t0;
                                        t.next = 43;
                                        return htmlVideoElement.setMediaKeys(mediaKeys).catch(showError);
                                    case 43:
                                        htmlVideoElement.addEventListener("encrypted", encryptedEventListener);
                                        cdmRequestData = [];
                                        cancelRequest = null;
                                        return t.abrupt("return", {
                                            destroy: closeAllMediaKeySessionsF
                                        });
                                    case 47:
                                    case "end":
                                        return t.stop();
                                }
                        }
                    ), t)
                }
            )))).apply(this, arguments)
        }
        function CDMRequestDataItem() {
            this.keyId = null;
            this.initData = null;
        }
        function getMappedProperties(originalObject, enumerablePropertiesOnly) { //duplicate method
            var mappedProperties = Object.keys(originalObject);
            if (Object.getOwnPropertySymbols) {
                var propertySymbols = Object.getOwnPropertySymbols(originalObject);
                if (enumerablePropertiesOnly) {
                    propertySymbols = propertySymbols.filter((function(propertyName) {
                        return Object.getOwnPropertyDescriptor(originalObject, propertyName).enumerable;
                    }));
                }

                mappedProperties.push.apply(mappedProperties, propertySymbols);
            }
            return mappedProperties;
        }
        function xn(player) {
            var options = player.options,
                htmlVideoElement = player.getRendererElm();

            htmlVideoElement.addEventListener("webkitneedkey", (function(e) {
                    var initializationData = e.initData,
                        keySessionContentId = function(initData) {
                            currentInitData = initData;
                            uint16Array = new Uint16Array(currentInitData.buffer);

                            var anchorUrl = (String.fromCharCode.apply(null, uint16Array)),
                                htmlAnchorElement = document.createElement("a"),
                                currentInitData, uint16Array;

                            htmlAnchorElement.href = anchorUrl;

                            return htmlAnchorElement.hostname;
                        }(initializationData);
                    (function() {
                            if (uint8Array) {
                                return Promise.resolve(uint8Array);
                            }
                            return n10.d.getBinary(hasFairplayCert).then((function(t) {
                                return t.data;
                            }))
                        }
                    )().then((function(i) {
                            uint8Array = new Uint8Array(i);
                            initializationData = function(t, inputText, n) {
                                if ("string" !== typeof inputText) {
                                    return;
                                }
                                inputText = function(inputText) {
                                    var arrayBuffer = new ArrayBuffer(2 * inputText.length),
                                        uint16Array = new Uint16Array(arrayBuffer),
                                        r = 0,
                                        i = inputText.length;

                                    for ( ; r < i; r++) {
                                        uint16Array[r] = inputText.charCodeAt(r);
                                    }

                                    return uint16Array
                                }(inputText);
                                var r = 0,
                                    buffer = new ArrayBuffer(t.byteLength + 4 + inputText.byteLength + 4 + n.byteLength),
                                    dataView = new DataView(buffer);

                                new Uint8Array(buffer, r, t.byteLength).set(t);
                                r += t.byteLength;
                                dataView.setUint32(r, inputText.byteLength, !0);
                                r += 4;

                                var uint16Array = new Uint16Array(buffer, r, inputText.length);

                                uint16Array.set(inputText);
                                r += uint16Array.byteLength;
                                dataView.setUint32(r, n.byteLength, !0);
                                r += 4;

                                new Uint8Array(buffer, r, n.byteLength).set(n);

                                return new Uint8Array(buffer, 0, buffer.byteLength);
                            }(initializationData, keySessionContentId, uint8Array);

                            if (!htmlVideoElement.webkitKeys) {
                                htmlVideoElement.webkitSetMediaKeys(new WebKitMediaKeys(supportedDrmTechnologies.FAIRPLAY));
                            }

                            mediaKeySession = htmlVideoElement.webkitKeys.createSession("video/mp4", initializationData);
                            mediaKeySession.contentId = keySessionContentId;
                            player.trigger(n0.L, e); //encrypted
                            mediaKeySession.addEventListener("webkitkeymessage", f);
                        }
                    )).catch((function() {
                        player.trigger(n0.f, { //error
                            code: errorNumberDrmLoadCertificateFailed,
                            type: "DRM_ERROR",
                            renderer: "HLS",
                            message: n7.a.DRM_LOAD_CERTIFICATE_FAILED
                        })
                    }))
                }
            ));
            var mediaKeySession, uint8Array,
                fairplay = player.mediaItem.getDrm().fairplay,
                hasFairplaySource = fairplay && fairplay.src,
                hasFairplayCert = fairplay && fairplay.cert;
            function f(n) {
                player.trigger(n0.N, hasFairplaySource, getDrmTechnologyByKeySystem(supportedDrmTechnologies.FAIRPLAY)), //acquiringLicense
                    function(n, xhrPostData) {
                        var httpConfig = options.get(n1.i), //httpConfig
                            requestHeaders = (null == httpConfig || null === httpConfig.drm || void 0 === httpConfig.drm ? void 0 : httpConfig.drm.headers) || {},
                            createXhrPostHeadersF = function(obj) {
                                for (let i = 1; i < arguments.length; i++) {
                                    var originalObject = null != arguments[i] ? arguments[i] : {};

                                    if (i % 2) {
                                        getMappedProperties(Object(originalObject), !0).forEach((function(property) {
                                            Object(n2.a)(obj, property, originalObject[property]);
                                        }))
                                    } else if (Object.getOwnPropertyDescriptors) {
                                        Object.defineProperties(obj, Object.getOwnPropertyDescriptors(originalObject));
                                    } else {
                                        getMappedProperties(Object(originalObject)).forEach((function(propertyName) {
                                            Object.defineProperty(obj, propertyName, Object.getOwnPropertyDescriptor(originalObject, propertyName));
                                        }))
                                    }
                                }

                                return obj;
                            }({"Content-Type": options.get(n1.V)}, //fairplayContentType
                                requestHeaders);
                        n10.d.post(n, {
                            data: xhrPostData,
                            responseType: n10.a,
                            withCredentials: null == httpConfig || null === httpConfig.drm || void 0 === httpConfig.drm ? void 0 : httpConfig.drm.withCredentials,
                            headers: createXhrPostHeadersF
                        }).then((function(e) {
                            var n, data, metric, xhr;

                            n = e;
                            data = n.data;
                            metric = n.metric;
                            xhr = n.xhr;
                            player.trigger(n0.o, { //networkMetric
                                duration: metric.duration,
                                type: "LICENSE",
                                statusCode: xhr.status,
                                url: hasFairplaySource,
                                timestamp: Date.now()
                            });
                            mediaKeySession.update(new Uint8Array(data)); //keys MUST only be provided to the CDM via an update() call

                            return void player.trigger(n0.M); //licenseAcquired
                        })).catch((function(t) {
                            return h(t);
                        }))
                    }(hasFairplaySource, n.message)
            }
            function h(e) {
                var metric = e.metric,
                    xhr = e.xhr;

                player.trigger(n0.f, { //error
                    code: errorNumberDrmLoadLicenseKeyFailed,
                    renderer: "HLS",
                    type: "DRM_ERROR",
                    message: n7.a.DRM_LOAD_LICENSE_KEY_FAILED
                });
                player.trigger(n0.o, { //networkMetric
                    duration: metric.duration,
                    type: "LICENSE",
                    statusCode: xhr.status,
                    url: url,
                    timestamp: Date.now()
                });
            }
        }
        function defaultDrmModule(player) {
            player.on(n0.r, (function() {
                    var beforePlayTaskQueue = player.beforePlayTaskQueue;
                    player.mediaItem.getDrm() && beforePlayTaskQueue.push((function() {
                            return new Promise(function() {
                                var e = Object(n3.a)(n3.b.mark((function e(n) {
                                    var manifestManagerComponent, selectedMediaContentTypesArray, a;
                                    return n3.b.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    manifestManagerComponent = player.getComponent(n9.a); //manifest-manager
                                                    selectedMediaContentTypesArray = null == manifestManagerComponent ? void 0 : manifestManagerComponent.getAllAdaptationSets().filter((function(t) {
                                                        var mediaContentType = t.contentType,
                                                            n = t.type;
                                                        return mediaContentType && [contentTypes.AUDIO, contentTypes.VIDEO].includes(n);
                                                    })).map((function(t) {
                                                        return {
                                                            contentType: t.contentType,
                                                            type: t.type
                                                        }
                                                    }));
                                                    a = tryRequestMediaKeySystemAccess(player.getRendererElm(), selectedMediaContentTypesArray);
                                                    e.next = 5;
                                                    return new a(player, selectedMediaContentTypesArray);
                                                case 5:
                                                    n();
                                                case 6:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments);
                                }
                            }())
                        }
                    ))
                }
            ))
        }
        function tryRequestMediaKeySystemAccess(htmlVideoElement, selectedMediaContentTypesArray) {
            return void 0 === selectedMediaContentTypesArray ? xn : void 0 !== htmlVideoElement.onencrypted && void 0 !== htmlVideoElement.mediaKeys && void 0 !== navigator.requestMediaKeySystemAccess && "function" == typeof navigator.requestMediaKeySystemAccess ? kn : void 0;
        }
        defaultDrmModule.enabled = !0;
        defaultDrmModule.moduleId = "drm";
        var currentDrmModule = defaultDrmModule,
            trackingModule = function() {
                function createTrackingModuleSkeleton(player) {
                    Object(n5.a)(this, createTrackingModuleSkeleton);
                    this.trackingCollector = window.AtdsTracking;
                    this.player = player;
                    var options = this.player.options;
                    this.config = options.get(n1.S); //tracking
                    if (void 0 === this.trackingCollector) {
                        return;
                    }

                    if (parseFloat(this.trackingCollector.VERSION) < parseFloat("2.0.0")) {
                        console.error("Tracking module requires collector script in version ".concat("2.0.0", " or later"));
                        return;
                    }

                    if (!this.config) {
                        return;
                    }

                    this.eventsQueue = [];
                    this.isNewSent = !1;
                    this.playerId = this.trackingCollector.generatePlayerId();
                    this.rendererType = null;
                    this.mimeType = null;
                    this.currentBitrate = 0;
                    this.appendBitrateToEvent = this.config.appendBitrateToEvent;
                    this.registerEvents();
                }
                Object(n5.b)(createTrackingModuleSkeleton, [{
                    key: "registerEvents",
                    value: function() {
                        var trackingModule = this;
                        [n0.b, n0.e, n0.ab, n0.f, n0.gb, n0.hb, n0.W, n0.T, n0.r, n0.mb, n0.t, n0.P, n0.R, n0.x].forEach((function(event) {
                            trackingModule.player.on(event, (function() {
                                var argsLength = arguments.length,
                                    argsArray = new Array(argsLength);
                                for (let i = 0; i < argsLength; i++) {
                                    argsArray[i] = arguments[i];
                                }
                                return trackingModule.event.apply(trackingModule, [event].concat(argsArray));
                            }))
                        }))
                    }
                },
                    {
                        key: "event",
                        value: function(t) {
                            var argsLength = arguments.length,
                                additionalArgsArray = new Array(argsLength > 1 ? argsLength - 1 : 0);
                            for (let i = 1; i < argsLength; i++) {
                                additionalArgsArray[i - 1] = arguments[i];
                            }
                            if (t === n0.r) { //ready
                                var i = additionalArgsArray[0];
                                this.isNewSent = !1;
                                this.url = i.url;
                                this.rendererType = i.rendererType.toUpperCase();
                                this.mimeType = this.rendererType;
                                switch (this.rendererType) {
                                    case "DASH":
                                        this.mimeType = "DASH";
                                        this.rendererType = "HTML5";
                                }
                            }
                            var a = this.normalizeTime(this.player.getCurrentTime()) || 0;

                            if (this.isNewSent || t === n0.gb) { //newMedia
                                this.sendEvent.apply(this, [t, a].concat(additionalArgsArray));
                            } else {
                                this.eventsQueue.push([t, a].concat(additionalArgsArray));
                            }
                        }
                    },
                    {
                        key: "normalizeTime",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;

                            if (this.player.timeShift.isEnabled()) {
                                t += this.player.getLiveStartUTC();
                            }

                            return parseInt(t, 10);
                        }
                    },
                    {
                        key: "prepareEventData",
                        value: function(t, e) {
                            var n = [this.playerId, t, e];
                            this.appendBitrateToEvent && n.push(this.currentBitrate);

                            return n;
                        }
                    },
                    {
                        key: "sendEvent",
                        value: function(t, e) {
                            var n, r, o, audioTrack, subtitles, l,
                                numArgs = arguments.length,
                                additionalArgsArray = new Array(numArgs > 2 ? numArgs - 2 : 0);

                            for (let i = 2; i < numArgs; i++) {
                                additionalArgsArray[i - 2] = arguments[i];
                            }
                            var mediaDuration = additionalArgsArray[0] || 0;
                            switch (t) {
                                case n0.gb: //newMedia
                                    if (this.isNewSent) {
                                        return;
                                    }
                                    this.isNewSent = !0;
                                    var currentConfig = this.config;

                                    this.trackingCollector.newSession({
                                        playerId: this.playerId,
                                        collector: currentConfig.collector,
                                        customData: currentConfig.customData,
                                        customerId: currentConfig.customerId,
                                        productId: currentConfig.productId,
                                        productTitle: currentConfig.productTitle,
                                        productType: currentConfig.productType,
                                        subscriberId: currentConfig.subscriberId,
                                        subscriberProfileId: currentConfig.subscriberProfileId,
                                        sessionId: currentConfig.sessionId,
                                        url: this.url,
                                        terminal: n11.a.isMobile() ? "PHONE" : "PC",
                                        duration: parseInt(mediaDuration, 10),
                                        rendererType: this.rendererType,
                                        mimeType: this.mimeType,
                                        platform: "BROWSER",
                                        referrer: encodeURIComponent(location.href),
                                        playerVersion: playerInfoWrapper.VERSION
                                    })

                                    while (this.eventsQueue.length) {
                                        this.sendEvent.apply(this, Object(n8.a)(this.eventsQueue.shift()));
                                    }

                                    break;
                                case n0.hb: //paused
                                case n0.W: //playing
                                case n0.mb: //seeking
                                case n0.x: //waiting
                                    (n = this.trackingCollector).event.apply(n, Object(n8.a)(this.prepareEventData(t, e)));
                                    break;
                                case n0.e: //destroy
                                    (r = this.trackingCollector).event.apply(r, Object(n8.a)(this.prepareEventData("closed", e)));
                                    break;
                                case n0.t: //stopped
                                case n0.ab: //ended
                                    (o = this.trackingCollector).event.apply(o, Object(n8.a)(this.prepareEventData(t, e)));
                                    this.isNewSent = !1;
                                    break;
                                case n0.T: //profileChanged
                                    this.currentBitrate = parseInt(additionalArgsArray[0].bandwidth / 1e3) || 0;
                                    this.trackingCollector.event(this.playerId, "trackChanged", e, this.currentBitrate);
                                    break;
                                case n0.b: //audioTrackChanged
                                    audioTrack = additionalArgsArray[0];
                                    var audioTrackLanguage = (audioTrack == null ? void 0 : audioTrack.lang) || 0;
                                    this.trackingCollector.event(this.playerId, n0.b, e, audioTrackLanguage); //audioTrackChanged
                                    break;
                                case n0.P: //subtitle
                                case n0.R: //subtitleDisabled
                                    subtitles = additionalArgsArray[0];
                                    var subtitleLanguage = (subtitles == null ? void 0 : subtitles.language) || -1;
                                    this.trackingCollector.event(this.playerId, "subtitleTrackChanged", e, subtitleLanguage);
                                    break;
                                case n0.f: //error
                                    this.trackingCollector.event(this.playerId, n0.f, e, (null === (l = additionalArgsArray[0]) || void 0 === l ? void 0 : l.code) || ERROR_NUMBERS.a[n7.a.GENERIC_ERROR]);
                            }
                        }
                    }]);

                return createTrackingModuleSkeleton;
            }();
        trackingModule.enabled = !0;
        trackingModule.moduleId = "tracking";
        var playerInfo,
            currentTrackingModule = trackingModule,
            videoInitBytes = new Uint8Array([0, 0, 0, 28, 102, 116, 121, 112, 105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 109, 112, 52, 49, 0, 0, 0, 8, 102, 114, 101, 101, 0, 0, 2, 239, 109, 100, 97, 116, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 2, 194, 109, 111, 111, 118, 0, 0, 0, 108, 109, 118, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 232, 0, 0, 0, 47, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 236, 116, 114, 97, 107, 0, 0, 0, 92, 116, 107, 104, 100, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 101, 100, 116, 115, 0, 0, 0, 28, 101, 108, 115, 116, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 47, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 100, 109, 100, 105, 97, 0, 0, 0, 32, 109, 100, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172, 68, 0, 0, 8, 0, 85, 196, 0, 0, 0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0, 0, 0, 1, 15, 109, 105, 110, 102, 0, 0, 0, 16, 115, 109, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 100, 105, 110, 102, 0, 0, 0, 28, 100, 114, 101, 102, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1, 0, 0, 0, 211, 115, 116, 98, 108, 0, 0, 0, 103, 115, 116, 115, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 87, 109, 112, 52, 97, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0, 172, 68, 0, 0, 0, 0, 0, 51, 101, 115, 100, 115, 0, 0, 0, 0, 3, 128, 128, 128, 34, 0, 2, 0, 4, 128, 128, 128, 20, 64, 21, 0, 0, 0, 0, 1, 244, 0, 0, 1, 243, 249, 5, 128, 128, 128, 2, 18, 16, 6, 128, 128, 128, 1, 2, 0, 0, 0, 24, 115, 116, 116, 115, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 28, 115, 116, 115, 99, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 28, 115, 116, 115, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 115, 0, 0, 1, 116, 0, 0, 0, 20, 115, 116, 99, 111, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 44, 0, 0, 0, 98, 117, 100, 116, 97, 0, 0, 0, 90, 109, 101, 116, 97, 0, 0, 0, 0, 0, 0, 0, 33, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 109, 100, 105, 114, 97, 112, 112, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 105, 108, 115, 116, 0, 0, 0, 37, 169, 116, 111, 111, 0, 0, 0, 29, 100, 97, 116, 97, 0, 0, 0, 1, 0, 0, 0, 0, 76, 97, 118, 102, 53, 54, 46, 52, 48, 46, 49, 48, 49]),

            videoDrmInitBlob = new Blob([videoInitBytes], {
                type: "video/mp4"
            }),
            createNewHtmlVideoComponent = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    htmlVideoElement = document.createElement("video");
                if (t.muted) {
                    htmlVideoElement.volume = 0;
                    htmlVideoElement.muted = !0;
                }

                htmlVideoElement.setAttribute("playsinline", "1");
                htmlVideoElement.setAttribute("src", URL.createObjectURL(videoDrmInitBlob));
                htmlVideoElement.load();

                return htmlVideoElement;
            },
            isIOS = n11.a.isIOS(),
            BrowserDependentFullScreenActions = [["exitFullscreen", "requestFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitExitFullscreen", "webkitRequestFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitCancelFullScreen", "webkitRequestFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozCancelFullScreen", "mozRequestFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msExitFullscreen", "msRequestFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]],
            getHtmlVideoComponent = function(t) {
                return "VIDEO" !== t.tagName ? t.querySelector("video") : t;
            },
            Hn = function(t) {
                return isIOS && t ? !!getHtmlVideoComponent(t).webkitDisplayingFullscreen : getAvailableFullScreenActions ? !!document[getAvailableFullScreenActions.fullscreenElement] : void 0; //breakpoint here, what is t
            },
            getAvailableFullScreenActions = function() {
                var fullScreenActions, result = null;
                for (let i = 0; i < BrowserDependentFullScreenActions.length; i++) {
                    if (BrowserDependentFullScreenActions[i][0] in document) { //if particular 'exitFullScreen' action exists
                        fullScreenActions = BrowserDependentFullScreenActions[i];
                        break;
                    }
                }
                if (fullScreenActions) {
                    result = {};
                    for (let i = 0; i < fullScreenActions.length; i++) {
                        result[BrowserDependentFullScreenActions[0][i]] = fullScreenActions[i];
                    }
                }

                return result;
            }();
        activePlayer.renderers = [dashRenderer, n22.d];
        activePlayer.modules = [currentChromecastSenderModule, currentDrmModule, currentGStreamModule, currentSubtitleModule, currentTrackingModule];
        playerInfoWrapper.Player = activePlayer;
        activePlayer.utils = {
            checkAutoplaySupport: function() {
                var timeout = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 300;
                return new Promise(function() {
                    var autoplaySupportChecker = Object(n3.a)(n3.b.mark((function autoplayIteratorF(iterateF) {
                            var autoplayAllowed, mutedAutoplayAllowed;
                            return n3.b.wrap((function(autoplayIterator) {
                                for (; ; ) {
                                    switch (autoplayIterator.prev = autoplayIterator.next) {
                                        case 0:
                                            setTimeout((function() {
                                                iterateF({
                                                    isAutoplayAllowed: !1,
                                                    isMutedAutoplayAllowed: !1
                                                })
                                            }), timeout);
                                            autoplayIterator.next = 3;
                                            return createNewHtmlVideoComponent().play().then((function() {
                                                return !0;
                                            })).catch((function() {
                                                return !1;
                                            }));
                                        case 3:
                                            autoplayAllowed = autoplayIterator.sent;
                                            autoplayIterator.next = 6;
                                            return createNewHtmlVideoComponent({
                                                muted: !0
                                            }).play().then((function() {
                                                return !0;
                                            })).catch((function() {
                                                return !1;
                                            }));
                                        case 6:
                                            mutedAutoplayAllowed = autoplayIterator.sent;
                                            iterateF({
                                                isAutoplayAllowed: autoplayAllowed,
                                                isMutedAutoplayAllowed: mutedAutoplayAllowed
                                            });
                                        case 8:
                                        case "end":
                                            return autoplayIterator.stop();
                                    }
                                }
                            }), autoplayIteratorF);
                        }
                    )));
                    return function(timeout) {
                        return autoplaySupportChecker.apply(this, arguments);
                    }
                }())
            },
            toggleFullscreen: function(t) {
                if (isIOS) {
                    var htmlVideoComponent = getHtmlVideoComponent(t);
                    Hn(t) ? htmlVideoComponent.webkitExitFullscreen() : htmlVideoComponent.webkitEnterFullScreen();
                }
                if (getAvailableFullScreenActions) {
                    Hn(t) ? document[getAvailableFullScreenActions.exitFullscreen]() : t[getAvailableFullScreenActions.requestFullscreen]();
                }
            }
        };
        playerInfo = "redGalaxy";
        window[playerInfo] = window[playerInfo] || playerInfoWrapper;
        playerInfoKeys.push(playerInfo);
    }
]);
