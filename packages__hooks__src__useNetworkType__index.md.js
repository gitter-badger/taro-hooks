(self["webpackChunk"]=self["webpackChunk"]||[]).push([[1335],{33986:function(){},36081:function(){},35713:function(e,t,n){"use strict";var l=n(67294);n(33986);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},r.apply(this,arguments)}t["Z"]=function(e){return l.createElement("div",r({className:"__dumi-default-alert"},e))}},63263:function(e,t,n){"use strict";var l=n(67294),r=n(4649),a=n(96089);n(36081);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(this,arguments)}function o(e,t){return E(e)||d(e,t)||i(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,r,a=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(a.push(l.value),t&&a.length===t)break}catch(u){o=!0,r=u}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw r}}return a}}function E(e){if(Array.isArray(e))return e}t["Z"]=function(e){var t=e.code,n=e.lang,u=e.showCopy,i=void 0===u||u,m=(0,a.useCopy)(),d=o(m,2),E=d[0],s=d[1];return l.createElement("div",{className:"__dumi-default-code-block"},l.createElement(r.ZP,c({},r.lG,{code:t,language:n,theme:void 0}),(function(e){var n=e.className,r=e.style,a=e.tokens,c=e.getLineProps,o=e.getTokenProps;return l.createElement("pre",{className:n,style:r},i&&l.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":s,onClick:function(){return E(t)}}),a.map((function(e,t){return l.createElement("div",c({line:e,key:t}),e.map((function(e,t){return l.createElement("span",o({token:e,key:t}))})))})))})))}},82923:function(e,t,n){"use strict";n.r(t);var l=n(67294),r=n(96089),a=n(27832),c=n(63263),o=n(35713),u=n(99142),i=l.memo(u.default["pages-usenetworktype"].component);t["default"]=e=>(l.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(l.Fragment,null,l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("p",null,l.createElement(o.Z,null,"\u7531\u4e8e\u83b7\u53d6\u7f51\u7edc\u4fe1\u606f\u4e3a\u5f02\u6b65, \u6545\u521d\u59cb\u503c\u4e3a",l.createElement("code",null,"undefined"),"\u3002\u82e5\u4e1a\u52a1\u4e2d\u53ef\u505a\u521d\u59cb\u5224\u7a7a\u5904\u7406\u3002 \u6b64\u5916\u6539 hook \u4f1a\u81ea\u52a8\u76d1\u542c\u5f53\u524d\u73af\u5883 networkType")),l.createElement("h1",{id:"usenetworktype"},l.createElement(r.AnchorLink,{to:"#usenetworktype","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"useNetworkType"),l.createElement("p",null,"\u83b7\u53d6\u7f51\u7edc\u7c7b\u578b"),l.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.createElement(r.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.createElement("p",null,"\u5f53\u9700\u8981\u6839\u636e\u5f53\u524d\u7f51\u7edc\u7c7b\u578b\u505a\u5224\u65ad\u65f6"),l.createElement("h2",{id:"api"},l.createElement(r.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"API"),l.createElement(c.Z,{code:"const networkType: NetworkType = useNetworkType();",lang:"jsx"}),l.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},l.createElement(r.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u8fd4\u56de\u503c"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"networkType"),l.createElement("td",null,"\u5f53\u524d\u7f51\u7edc\u7c7b\u578b"),l.createElement("td",null,l.createElement("code",null,"NetworkType"))))),l.createElement("h3",{id:"networktype"},l.createElement(r.AnchorLink,{to:"#networktype","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"NetworkType"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u7c7b\u578b"),l.createElement("th",null,"\u503c"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"wifi"),l.createElement("td",null,"wifi")),l.createElement("tr",null,l.createElement("td",null,"2g"),l.createElement("td",null,"2g")),l.createElement("tr",null,l.createElement("td",null,"3g"),l.createElement("td",null,"3g")),l.createElement("tr",null,l.createElement("td",null,"4g"),l.createElement("td",null,"4g")),l.createElement("tr",null,l.createElement("td",null,"5g"),l.createElement("td",null,"5g")),l.createElement("tr",null,l.createElement("td",null,"unknown"),l.createElement("td",null,"unknown")),l.createElement("tr",null,l.createElement("td",null,"none"),l.createElement("td",null,"none")))),l.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.createElement(r.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),l.createElement(a.default,u.default["pages-usenetworktype"].previewerProps,l.createElement(i,null)),l.createElement("div",{className:"markdown"},l.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},l.createElement(r.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),l.createElement("th",{align:"center"},"H5"),l.createElement("th",{align:"center"},"ReactNative"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"},"\u2714\ufe0f"))))))))}}]);