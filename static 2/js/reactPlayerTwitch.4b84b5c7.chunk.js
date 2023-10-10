"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[6216],{58140:function(e,t,n){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(72791)),a=n(52737),i=n(17709);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=y(e);if(t){var a=y(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;return s(e)}(this,n)}}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h="twitch-player-",b=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(y,e);var t,n,r,u=f(y);function y(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return d(s(e=u.call.apply(u,[this].concat(n))),"callPlayer",a.callPlayer),d(s(e),"playerID",e.props.config.playerId||"".concat(h).concat((0,a.randomString)())),d(s(e),"mute",(function(){e.callPlayer("setMuted",!0)})),d(s(e),"unmute",(function(){e.callPlayer("setMuted",!1)})),e}return t=y,n=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e,t){var n=this,r=this.props,o=r.playsinline,u=r.onError,l=r.config,p=r.controls,f=i.MATCH_URL_TWITCH_CHANNEL.test(e),s=f?e.match(i.MATCH_URL_TWITCH_CHANNEL)[1]:e.match(i.MATCH_URL_TWITCH_VIDEO)[1];t?f?this.player.setChannel(s):this.player.setVideo("v"+s):(0,a.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then((function(t){n.player=new t.Player(n.playerID,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({video:f?"":s,channel:f?s:"",height:"100%",width:"100%",playsinline:o,autoplay:n.props.playing,muted:n.props.muted,controls:!!f||p,time:(0,a.parseStartTime)(e)},l.options));var r=t.Player,i=r.READY,u=r.PLAYING,y=r.PAUSE,h=r.ENDED,b=r.ONLINE,v=r.OFFLINE,O=r.SEEK;n.player.addEventListener(i,n.props.onReady),n.player.addEventListener(u,n.props.onPlay),n.player.addEventListener(y,n.props.onPause),n.player.addEventListener(h,n.props.onEnded),n.player.addEventListener(O,n.props.onSeek),n.player.addEventListener(b,n.props.onLoaded),n.player.addEventListener(v,n.props.onLoaded)}),u)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.callPlayer("pause")}},{key:"seekTo",value:function(e){this.callPlayer("seek",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){return o.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}],n&&l(t.prototype,n),r&&l(t,r),y}(o.Component);t.default=b,d(b,"displayName","Twitch"),d(b,"canPlay",i.canPlay.twitch),d(b,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerTwitch.4b84b5c7.chunk.js.map