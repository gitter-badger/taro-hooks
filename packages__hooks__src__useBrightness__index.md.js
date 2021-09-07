(self["webpackChunk"]=self["webpackChunk"]||[]).push([[9791],{36081:function(){},63263:function(e,t,n){"use strict";var l=n(67294),r=n(4649),a=n(96089);n(36081);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(this,arguments)}function o(e,t){return d(e)||s(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,r,a=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(a.push(l.value),t&&a.length===t)break}catch(i){o=!0,r=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw r}}return a}}function d(e){if(Array.isArray(e))return e}t["Z"]=function(e){var t=e.code,n=e.lang,i=e.showCopy,u=void 0===i||i,m=(0,a.useCopy)(),s=o(m,2),d=s[0],E=s[1];return l.createElement("div",{className:"__dumi-default-code-block"},l.createElement(r.ZP,c({},r.lG,{code:t,language:n,theme:void 0}),(function(e){var n=e.className,r=e.style,a=e.tokens,c=e.getLineProps,o=e.getTokenProps;return l.createElement("pre",{className:n,style:r},u&&l.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":E,onClick:function(){return d(t)}}),a.map((function(e,t){return l.createElement("div",c({line:e,key:t}),e.map((function(e,t){return l.createElement("span",o({token:e,key:t}))})))})))})))}},48115:function(e,t,n){"use strict";n.r(t);var l=n(67294),r=n(96089),a=n(27832),c=n(63263),o=n(27906),i=l.memo(o.default["pages-usebrightness"].component);t["default"]=e=>(l.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(l.Fragment,null,l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"usebrightness"},l.createElement(r.AnchorLink,{to:"#usebrightness","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"useBrightness"),l.createElement("p",null,"\u5c4f\u5e55\u4eae\u5ea6"),l.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.createElement(r.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.createElement("p",null,"\u5f53\u9700\u8981\u83b7\u53d6\u6216\u8bbe\u7f6e\u5c4f\u5e55\u4eae\u5ea6"),l.createElement("h2",{id:"api"},l.createElement(r.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"API"),l.createElement(c.Z,{code:"const [brightness, setBrightness] = useBrightness(keepon?: boolean);",lang:"jsx"}),l.createElement("h2",{id:"\u53c2\u6570\u8bf4\u660e"},l.createElement(r.AnchorLink,{to:"#\u53c2\u6570\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u8bf4\u660e"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u53c2\u6570"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"),l.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"keepon"),l.createElement("td",null,"\u662f\u5426\u5e38\u4eae"),l.createElement("td",null,l.createElement("code",null,"boolean")),l.createElement("td",null,"-")))),l.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},l.createElement(r.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u8fd4\u56de\u503c"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"brightness"),l.createElement("td",null,"\u5c4f\u5e55\u4eae\u5ea6\u503c\uff0c\u8303\u56f4 0 ~ 1\uff0c0 \u6700\u6697\uff0c1 \u6700\u4eae"),l.createElement("td",null,l.createElement("code",null,"number"))),l.createElement("tr",null,l.createElement("td",null,"setBrightness"),l.createElement("td",null,"\u8bbe\u7f6e\u5c4f\u5e55\u4eae\u5ea6\u503c(0~1)"),l.createElement("td",null,l.createElement("code",null,"(value) => Promise<General.CallbackResult>"))))),l.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.createElement(r.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),l.createElement(a.default,o.default["pages-usebrightness"].previewerProps,l.createElement(i,null)),l.createElement("div",{className:"markdown"},l.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},l.createElement(r.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),l.createElement("th",{align:"center"},"H5"),l.createElement("th",{align:"center"},"ReactNative"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"}),l.createElement("td",{align:"center"},"\u2714\ufe0f"))))))))}}]);