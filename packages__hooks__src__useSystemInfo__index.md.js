(self["webpackChunk"]=self["webpackChunk"]||[]).push([[8136],{36081:function(){},63263:function(e,t,l){"use strict";var n=l(67294),r=l(4649),a=l(96089);l(36081);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},c.apply(this,arguments)}function m(e,t){return i(e)||E(e,t)||o(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return d(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}function E(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,r,a=[],c=!0,m=!1;try{for(l=l.call(e);!(c=(n=l.next()).done);c=!0)if(a.push(n.value),t&&a.length===t)break}catch(u){m=!0,r=u}finally{try{c||null==l["return"]||l["return"]()}finally{if(m)throw r}}return a}}function i(e){if(Array.isArray(e))return e}t["Z"]=function(e){var t=e.code,l=e.lang,u=e.showCopy,o=void 0===u||u,d=(0,a.useCopy)(),E=m(d,2),i=E[0],s=E[1];return n.createElement("div",{className:"__dumi-default-code-block"},n.createElement(r.ZP,c({},r.lG,{code:t,language:l,theme:void 0}),(function(e){var l=e.className,r=e.style,a=e.tokens,c=e.getLineProps,m=e.getTokenProps;return n.createElement("pre",{className:l,style:r},o&&n.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":s,onClick:function(){return i(t)}}),a.map((function(e,t){return n.createElement("div",c({line:e,key:t}),e.map((function(e,t){return n.createElement("span",m({token:e,key:t}))})))})))})))}},46082:function(e,t,l){"use strict";l.r(t);var n=l(67294),r=l(96089),a=l(27832),c=l(63263),m=l(98780),u=n.memo(m.default["pages-usesysteminfo"].component);t["default"]=e=>(n.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.createElement(n.Fragment,null,n.createElement(n.Fragment,null,n.createElement("div",{className:"markdown"},n.createElement("h1",{id:"usesysteminfo"},n.createElement(r.AnchorLink,{to:"#usesysteminfo","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"useSystemInfo"),n.createElement("p",null,"\u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f"),n.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},n.createElement(r.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),n.createElement("p",null,"\u5f53\u9700\u8981\u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f\u505a\u4e00\u4e9b\u5224\u65ad\u65f6"),n.createElement("h2",{id:"api"},n.createElement(r.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"API"),n.createElement(c.Z,{code:"() => SystemInfo;",lang:"jsx"}),n.createElement("h2",{id:"\u53c2\u6570\u8bf4\u660e"},n.createElement(r.AnchorLink,{to:"#\u53c2\u6570\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u8bf4\u660e"),n.createElement("p",null,"\u65e0"),n.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},n.createElement(r.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),n.createElement("h3",{id:"systeminfo"},n.createElement(r.AnchorLink,{to:"#systeminfo","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"systemInfo"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u53c2\u6570"),n.createElement("th",null,"\u7c7b\u578b"),n.createElement("th",null,"\u8bf4\u660e"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"SDKVersion"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"\u5ba2\u6237\u7aef\u57fa\u7840\u5e93\u7248\u672c")),n.createElement("tr",null,n.createElement("td",null,"albumAuthorized"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u5141\u8bb8\u5fae\u4fe1\u4f7f\u7528\u76f8\u518c\u7684\u5f00\u5173\uff08\u4ec5 iOS \u6709\u6548\uff09")),n.createElement("tr",null,n.createElement("td",null,"benchmarkLevel"),n.createElement("td",null,n.createElement("code",null,"number")),n.createElement("td",null,"\u8bbe\u5907\u6027\u80fd\u7b49\u7ea7\uff08\u4ec5 Android \u5c0f\u6e38\u620f\uff09\u3002\u53d6\u503c\u4e3a\uff1a-2 \u6216 0\uff08\u8be5\u8bbe\u5907\u65e0\u6cd5\u8fd0\u884c\u5c0f\u6e38\u620f\uff09\uff0c-1\uff08\u6027\u80fd\u672a\u77e5\uff09\uff0c>=1\uff08\u8bbe\u5907\u6027\u80fd\u503c\uff0c\u8be5\u503c\u8d8a\u9ad8\uff0c\u8bbe\u5907\u6027\u80fd\u8d8a\u597d\uff0c\u76ee\u524d\u6700\u9ad8\u4e0d\u5230 50\uff09")),n.createElement("tr",null,n.createElement("td",null,"bluetoothEnabled"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u84dd\u7259\u7684\u7cfb\u7edf\u5f00\u5173")),n.createElement("tr",null,n.createElement("td",null,"brand"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"\u8bbe\u5907\u54c1\u724c")),n.createElement("tr",null,n.createElement("td",null,"cameraAuthorized"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u5141\u8bb8\u5fae\u4fe1\u4f7f\u7528\u6444\u50cf\u5934\u7684\u5f00\u5173")),n.createElement("tr",null,n.createElement("td",null,"fontSizeSetting"),n.createElement("td",null,n.createElement("code",null,"number")),n.createElement("td",null,"\u7528\u6237\u5b57\u4f53\u5927\u5c0f\uff08\u5355\u4f4d px\uff09\u3002\u4ee5\u5fae\u4fe1\u5ba2\u6237\u7aef\u300c\u6211-\u8bbe\u7f6e-\u901a\u7528-\u5b57\u4f53\u5927\u5c0f\u300d\u4e2d\u7684\u8bbe\u7f6e\u4e3a\u51c6")),n.createElement("tr",null,n.createElement("td",null,"language"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"\u5fae\u4fe1\u8bbe\u7f6e\u7684\u8bed\u8a00")),n.createElement("tr",null,n.createElement("td",null,"locationAuthorized"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u5141\u8bb8\u5fae\u4fe1\u4f7f\u7528\u5b9a\u4f4d\u7684\u5f00\u5173")),n.createElement("tr",null,n.createElement("td",null,"locationEnabled"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u5730\u7406\u4f4d\u7f6e\u7684\u7cfb\u7edf\u5f00\u5173")),n.createElement("tr",null,n.createElement("td",null,"microphoneAuthorized"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u5141\u8bb8\u5fae\u4fe1\u4f7f\u7528\u9ea6\u514b\u98ce\u7684\u5f00\u5173")),n.createElement("tr",null,n.createElement("td",null,"model"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"\u8bbe\u5907\u578b\u53f7")),n.createElement("tr",null,n.createElement("td",null,"notificationAlertAuthorized"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u5141\u8bb8\u5fae\u4fe1\u901a\u77e5\u5e26\u6709\u63d0\u9192\u7684\u5f00\u5173\uff08\u4ec5 iOS \u6709\u6548\uff09")),n.createElement("tr",null,n.createElement("td",null,"notificationAuthorized"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u5141\u8bb8\u5fae\u4fe1\u901a\u77e5\u7684\u5f00\u5173")),n.createElement("tr",null,n.createElement("td",null,"notificationBadgeAuthorized"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u5141\u8bb8\u5fae\u4fe1\u901a\u77e5\u5e26\u6709\u6807\u8bb0\u7684\u5f00\u5173\uff08\u4ec5 iOS \u6709\u6548\uff09")),n.createElement("tr",null,n.createElement("td",null,"notificationSoundAuthorized"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u5141\u8bb8\u5fae\u4fe1\u901a\u77e5\u5e26\u6709\u58f0\u97f3\u7684\u5f00\u5173\uff08\u4ec5 iOS \u6709\u6548\uff09")),n.createElement("tr",null,n.createElement("td",null,"pixelRatio"),n.createElement("td",null,n.createElement("code",null,"number")),n.createElement("td",null,"\u8bbe\u5907\u50cf\u7d20\u6bd4")),n.createElement("tr",null,n.createElement("td",null,"platform"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"\u5ba2\u6237\u7aef\u5e73\u53f0")),n.createElement("tr",null,n.createElement("td",null,"safeArea"),n.createElement("td",null,n.createElement("code",null,"SafeAreaResult")),n.createElement("td",null,"\u5728\u7ad6\u5c4f\u6b63\u65b9\u5411\u4e0b\u7684\u5b89\u5168\u533a\u57df")),n.createElement("tr",null,n.createElement("td",null,"screenHeight"),n.createElement("td",null,n.createElement("code",null,"number")),n.createElement("td",null,"\u5c4f\u5e55\u9ad8\u5ea6\uff0c\u5355\u4f4d px")),n.createElement("tr",null,n.createElement("td",null,"screenWidth"),n.createElement("td",null,n.createElement("code",null,"number")),n.createElement("td",null,"\u5c4f\u5e55\u5bbd\u5ea6\uff0c\u5355\u4f4d px")),n.createElement("tr",null,n.createElement("td",null,"statusBarHeight"),n.createElement("td",null,n.createElement("code",null,"number")),n.createElement("td",null,"\u72b6\u6001\u680f\u7684\u9ad8\u5ea6\uff0c\u5355\u4f4d px")),n.createElement("tr",null,n.createElement("td",null,"system"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"\u64cd\u4f5c\u7cfb\u7edf\u53ca\u7248\u672c")),n.createElement("tr",null,n.createElement("td",null,"version"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"\u5fae\u4fe1\u7248\u672c\u53f7")),n.createElement("tr",null,n.createElement("td",null,"wifiEnabled"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"Wi-Fi \u7684\u7cfb\u7edf\u5f00\u5173")),n.createElement("tr",null,n.createElement("td",null,"windowHeight"),n.createElement("td",null,n.createElement("code",null,"number")),n.createElement("td",null,"\u53ef\u4f7f\u7528\u7a97\u53e3\u9ad8\u5ea6\uff0c\u5355\u4f4d px")),n.createElement("tr",null,n.createElement("td",null,"windowWidth"),n.createElement("td",null,n.createElement("code",null,"number")),n.createElement("td",null,"\u53ef\u4f7f\u7528\u7a97\u53e3\u5bbd\u5ea6\uff0c\u5355\u4f4d px")),n.createElement("tr",null,n.createElement("td",null,"errMsg"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"\u8c03\u7528\u7ed3\u679c")))),n.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},n.createElement(r.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),n.createElement(a.default,m.default["pages-usesysteminfo"].previewerProps,n.createElement(u,null)),n.createElement("div",{className:"markdown"},n.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},n.createElement(r.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),n.createElement("th",{align:"center"},"H5"),n.createElement("th",{align:"center"},"ReactNative"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",{align:"center"},"\u2714\ufe0f"),n.createElement("td",{align:"center"},"\u2714\ufe0f"),n.createElement("td",{align:"center"},"\u2714\ufe0f")))),n.createElement("h2",{id:"faq"},n.createElement(r.AnchorLink,{to:"#faq","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"FAQ"),n.createElement("h3",{id:"1-\u66f4\u591a\u8bf4\u660e"},n.createElement(r.AnchorLink,{to:"#1-\u66f4\u591a\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"1. \u66f4\u591a\u8bf4\u660e"),n.createElement("p",null,"\u89c1",n.createElement(r.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html"},"\u5c0f\u7a0b\u5e8f\u76f8\u5173\u6587\u6863"))))))}}]);