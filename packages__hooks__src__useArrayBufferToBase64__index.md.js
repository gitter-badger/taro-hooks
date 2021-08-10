(self["webpackChunk"]=self["webpackChunk"]||[]).push([[7227],{36081:function(){},63263:function(e,t,n){"use strict";var r=n(67294),a=n(4649),l=n(96089);n(36081);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function o(e,t){return d(e)||s(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(r=n.next()).done);c=!0)if(l.push(r.value),t&&l.length===t)break}catch(i){o=!0,a=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw a}}return l}}function d(e){if(Array.isArray(e))return e}t["Z"]=function(e){var t=e.code,n=e.lang,i=e.showCopy,u=void 0===i||i,m=(0,l.useCopy)(),s=o(m,2),d=s[0],E=s[1];return r.createElement("div",{className:"__dumi-default-code-block"},r.createElement(a.ZP,c({},a.lG,{code:t,language:n,theme:void 0}),(function(e){var n=e.className,a=e.style,l=e.tokens,c=e.getLineProps,o=e.getTokenProps;return r.createElement("pre",{className:n,style:a},u&&r.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":E,onClick:function(){return d(t)}}),l.map((function(e,t){return r.createElement("div",c({line:e,key:t}),e.map((function(e,t){return r.createElement("span",o({token:e,key:t}))})))})))})))}},39976:function(e,t,n){"use strict";n.r(t);var r=n(67294),a=n(96089),l=n(27832),c=n(63263),o=n(99142),i=r.memo(o.default["pages-usearraybuffertobase64"].component);t["default"]=e=>(r.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.createElement(r.Fragment,null,r.createElement(r.Fragment,null,r.createElement("div",{className:"markdown"},r.createElement("h1",{id:"usearraybuffertobase64"},r.createElement(a.AnchorLink,{to:"#usearraybuffertobase64","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"useArrayBufferToBase64"),r.createElement("p",null,"\u5c06 ArrayBuffer \u5bf9\u8c61\u8f6c\u6210 Base64 \u5b57\u7b26\u4e32"),r.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},r.createElement(a.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),r.createElement("p",null,"\u9700\u8981\u5c06 ArrayBuffer \u548c Base64 \u8f6c\u6362\u65f6"),r.createElement("h2",{id:"api"},r.createElement(a.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"API"),r.createElement(c.Z,{code:"const [base64, setArrayBuffer] = useArrayBufferToBase64(ArrayBuffer);",lang:"jsx"}),r.createElement("h2",{id:"\u53c2\u6570\u8bf4\u660e"},r.createElement(a.AnchorLink,{to:"#\u53c2\u6570\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u8bf4\u660e"),r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"\u53c2\u6570"),r.createElement("th",null,"\u8bf4\u660e"),r.createElement("th",null,"\u7c7b\u578b"),r.createElement("th",null,"\u9ed8\u8ba4\u503c"))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,"arrayBuffer"),r.createElement("td",null,"\u5fc5\u586b\uff0carrayBuffer"),r.createElement("td",null,r.createElement("code",null,"ArrayBuffer")),r.createElement("td",null,"-")))),r.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},r.createElement(a.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"\u8fd4\u56de\u503c"),r.createElement("th",null,"\u8bf4\u660e"),r.createElement("th",null,"\u7c7b\u578b"))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,"base64"),r.createElement("td",null,"\u8f6c\u6362\u7684 base64"),r.createElement("td",null,r.createElement("code",null,"string"))),r.createElement("tr",null,r.createElement("td",null,"setArrayBuffer"),r.createElement("td",null,"\u66f4\u6539\u5f53\u524d\u8f6c\u6362\u7684 ArrayBuffer"),r.createElement("td",null,r.createElement("code",null,"(arrayBuffer: ArrayBuffer) => void"))))),r.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.createElement(a.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),r.createElement(l.default,o.default["pages-usearraybuffertobase64"].previewerProps,r.createElement(i,null)),r.createElement("div",{className:"markdown"},r.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},r.createElement(a.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),r.createElement("th",{align:"center"},"H5"),r.createElement("th",{align:"center"},"ReactNative"))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",{align:"center"},"\u2714\ufe0f"),r.createElement("td",{align:"center"},"\u2714\ufe0f"),r.createElement("td",{align:"center"},"\u2714\ufe0f")))),r.createElement("h2",{id:"faq"},r.createElement(a.AnchorLink,{to:"#faq","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"FAQ"),r.createElement("h3",{id:"1-\u66f4\u591a\u8bf4\u660e"},r.createElement(a.AnchorLink,{to:"#1-\u66f4\u591a\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"1. \u66f4\u591a\u8bf4\u660e"),r.createElement("p",null,"\u89c1",r.createElement(a.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.arrayBufferToBase64.html"},"\u5c0f\u7a0b\u5e8f\u76f8\u5173\u6587\u6863"))))))}}]);