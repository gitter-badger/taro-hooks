(self["webpackChunk"]=self["webpackChunk"]||[]).push([[6419],{36081:function(){},63263:function(e,t,n){"use strict";var l=n(67294),a=n(4649),r=n(96089);n(36081);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(this,arguments)}function o(e,t){return d(e)||s(e,t)||m(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,a,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(r.push(l.value),t&&r.length===t)break}catch(i){o=!0,a=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw a}}return r}}function d(e){if(Array.isArray(e))return e}t["Z"]=function(e){var t=e.code,n=e.lang,i=e.showCopy,m=void 0===i||i,u=(0,r.useCopy)(),s=o(u,2),d=s[0],E=s[1];return l.createElement("div",{className:"__dumi-default-code-block"},l.createElement(a.ZP,c({},a.lG,{code:t,language:n,theme:void 0}),(function(e){var n=e.className,a=e.style,r=e.tokens,c=e.getLineProps,o=e.getTokenProps;return l.createElement("pre",{className:n,style:a},m&&l.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":E,onClick:function(){return d(t)}}),r.map((function(e,t){return l.createElement("div",c({line:e,key:t}),e.map((function(e,t){return l.createElement("span",o({token:e,key:t}))})))})))})))}},73940:function(e,t,n){"use strict";n.r(t);var l=n(67294),a=n(96089),r=n(27832),c=n(63263),o=n(99142),i=l.memo(o.default["pages-usepromise"].component);t["default"]=e=>(l.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(l.Fragment,null,l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"usepromise"},l.createElement(a.AnchorLink,{to:"#usepromise","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"usePromise"),l.createElement("p",null,"\u63d0\u4f9b",l.createElement("code",null,"Promise"),"\u5316\u65b9\u5f0f"),l.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.createElement(a.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.createElement("p",null,"\u60f3\u5f02\u6b65\u5f62\u5f0f\u8c03\u7528\u5f53\u524d\u65b9\u6cd5\u65f6"),l.createElement("h2",{id:"api"},l.createElement(a.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"API"),l.createElement("p",null,"\u4e3b\u8981\u9002\u7528\u4e8e\u539f\u5148\u7531\u4ee5\u4e0b\u65b9\u5f0f\u8c03\u7528\u7684\u65b9\u6cd5:"),l.createElement(c.Z,{code:"xx.xxx({\n  ....options,\n  success: void,\n  fail: void,\n  complete: void\n});",lang:"javascript"}),l.createElement("p",null,"\u8f6c\u6362\u540e\u4f7f\u7528\u65b9\u5f0f:"),l.createElement(c.Z,{code:"const methodPromise = usePromise(options, methodName);\nmethodPromise.then(success).catch(fail).finally(complete);",lang:"jsx"}),l.createElement("h2",{id:"\u53c2\u6570\u8bf4\u660e"},l.createElement(a.AnchorLink,{to:"#\u53c2\u6570\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u8bf4\u660e"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u53c2\u6570"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"),l.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"options"),l.createElement("td",null,"\u5bf9\u5e94\u65b9\u6cd5\u9664\u5bf9\u5e94\u4e8b\u4ef6\u5916\u7684\u6240\u6709\u53c2\u6570"),l.createElement("td",null,l.createElement("code",null,"General.IAnyObject")),l.createElement("td",null,"-")),l.createElement("tr",null,l.createElement("td",null,"methodName"),l.createElement("td",null,"\u5bf9\u5e94\u65b9\u6cd5\u540d\u79f0"),l.createElement("td",null,l.createElement("code",null,"String")),l.createElement("td",null,"-")))),l.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},l.createElement(a.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u8fd4\u56de\u503c"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"methodPromise"),l.createElement("td",null,l.createElement("code",null,"\u6267\u884c\u7ed3\u679c")),l.createElement("td",null,l.createElement("code",null,"Promise<General.CallbackResult>"))))),l.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.createElement(a.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),l.createElement(r.default,o.default["pages-usepromise"].previewerProps,l.createElement(i,null)),l.createElement("div",{className:"markdown"},l.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},l.createElement(a.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),l.createElement("th",{align:"center"},"H5"),l.createElement("th",{align:"center"},"ReactNative"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"},"\u2714\ufe0f")))),l.createElement("h2",{id:"faq"},l.createElement(a.AnchorLink,{to:"#faq","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"FAQ"),l.createElement("h3",{id:"1-\u66f4\u591a\u8bf4\u660e"},l.createElement(a.AnchorLink,{to:"#1-\u66f4\u591a\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"1. \u66f4\u591a\u8bf4\u660e"),l.createElement("p",null,"\u89c1",l.createElement(a.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html"},"\u5c0f\u7a0b\u5e8f\u76f8\u5173\u6587\u6863"),l.createElement("br",null),"\u89c1",l.createElement(a.Link,{to:"https://taro-docs.jd.com/taro/docs/hooks#userouter"},"Taro \u6587\u6863"))))))}}]);