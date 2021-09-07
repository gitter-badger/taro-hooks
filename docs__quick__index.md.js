(self["webpackChunk"]=self["webpackChunk"]||[]).push([[3867],{36081:function(){},63263:function(e,t,n){"use strict";var a=n(67294),r=n(4649),l=n(96089);n(36081);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function c(e,t){return d(e)||s(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){c=!0,r=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function d(e){if(Array.isArray(e))return e}t["Z"]=function(e){var t=e.code,n=e.lang,i=e.showCopy,u=void 0===i||i,m=(0,l.useCopy)(),s=c(m,2),d=s[0],h=s[1];return a.createElement("div",{className:"__dumi-default-code-block"},a.createElement(r.ZP,o({},r.lG,{code:t,language:n,theme:void 0}),(function(e){var n=e.className,r=e.style,l=e.tokens,o=e.getLineProps,c=e.getTokenProps;return a.createElement("pre",{className:n,style:r},u&&a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":h,onClick:function(){return d(t)}}),l.map((function(e,t){return a.createElement("div",o({line:e,key:t}),e.map((function(e,t){return a.createElement("span",c({token:e,key:t}))})))})))})))}},46203:function(e,t,n){"use strict";n.r(t);var a=n(67294),r=n(96089),l=n(27832),o=n(63263),c=n(27906),i=a.memo(c.default["pages-index"].component);t["default"]=e=>(a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.createElement(a.Fragment,null,a.createElement(a.Fragment,null,a.createElement("div",{className:"markdown"},a.createElement("h2",{id:"\u4ec0\u4e48\u662f-taro-hooks"},a.createElement(r.AnchorLink,{to:"#\u4ec0\u4e48\u662f-taro-hooks","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u4ec0\u4e48\u662f Taro-hooks?"),a.createElement("p",null,a.createElement("code",null,"Taro-hooks")," - \u4e00\u6b3e\u5bf9\u6807",a.createElement("code",null,"Taro API"),"\u5f00\u53d1\u7684",a.createElement("code",null,"Hooks Library"),". \u8986\u76d6\u51e0\u4e4e\u6240\u6709",a.createElement("code",null,"Taro API"),"\u4ee5\u53ca\u65b9\u6cd5."),a.createElement("h2",{id:"\u7279\u6027"},a.createElement(r.AnchorLink,{to:"#\u7279\u6027","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u7279\u6027"),a.createElement("ul",null,a.createElement("li",null,"\u5168\u9762\u5339\u914d",a.createElement("code",null,"Taro API"),"."),a.createElement("li",null,"\u7ed3\u5408",a.createElement("code",null,"ahooks"),"\u6269\u5c55\u5e38\u7528",a.createElement("code",null,"hook"),"."),a.createElement("li",null,"\u5b8c\u6574\u7684\u7c7b\u578b\u5b9a\u4e49\u6587\u4ef6"),a.createElement("li",null,"\u66f4\u6613\u7528\u7684\u65b9\u5f0f")),a.createElement("h2",{id:"\u5feb\u901f\u4e0a\u624b"},a.createElement(r.AnchorLink,{to:"#\u5feb\u901f\u4e0a\u624b","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u5feb\u901f\u4e0a\u624b"),a.createElement("h3",{id:"\u73af\u5883\u51c6\u5907"},a.createElement(r.AnchorLink,{to:"#\u73af\u5883\u51c6\u5907","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u73af\u5883\u51c6\u5907"),a.createElement("p",null,"\u9700\u8981\u51c6\u5907",a.createElement(r.Link,{to:"https://nodejs.org/en/"},"node")),a.createElement(o.Z,{code:"$ node -v\n# \u786e\u4fddnode\u7248\u672c\u4e3a12+\n$ v12.22.1",lang:"bash"}),a.createElement("h3",{id:"\u811a\u624b\u67b6\u521d\u59cb\u5316taro"},a.createElement(r.AnchorLink,{to:"#\u811a\u624b\u67b6\u521d\u59cb\u5316taro","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u811a\u624b\u67b6\u521d\u59cb\u5316",a.createElement("code",null,"Taro")),a.createElement("p",null,a.createElement("code",null,"Taro-hooks"),"\u662f\u4ee5",a.createElement("code",null,"React"),"\u6a21\u677f\u7f16\u5199\u7684. \u6240\u4ee5\u4ec5\u9002\u7528\u4e8e",a.createElement("code",null,"React"),"."),a.createElement(o.Z,{code:"$ npx @tarojs/cli init taro-hooks-app\n# \u9009\u62e9react\u6a21\u677f\n$ cd taro-hooks-app\n$ npm i taro-hooks --save\n$ npm run dev:weapp --watch",lang:"bash"}),a.createElement("h3",{id:"\u6784\u5efa\u53ca\u90e8\u7f72"},a.createElement(r.AnchorLink,{to:"#\u6784\u5efa\u53ca\u90e8\u7f72","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u6784\u5efa\u53ca\u90e8\u7f72"),a.createElement("p",null,"\u53c2\u8003",a.createElement(r.Link,{to:"https://taro-docs.jd.com/taro/docs/config"},"taro build"))),a.createElement(l.default,c.default["pages-index"].previewerProps,a.createElement(i,null)))))}}]);