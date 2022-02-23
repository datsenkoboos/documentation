"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[9332],{2263:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]},name:"star",theme:"outlined"},a=n(755),i=function(e,t){return r.createElement(a.Z,Object.assign({},e,{ref:t,icon:o}))};i.displayName="StarOutlined";var c=r.forwardRef(i)},4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,p=f["".concat(s,".").concat(m)]||f[m]||d[m]||a;return n?r.createElement(p,i(i({ref:t},u),{},{components:n})):r.createElement(p,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6644:function(e,t,n){n.d(t,{ZP:function(){return l}});var r=n(3117),o=n(102),a=(n(7294),n(4137)),i=n(4463),c=["components"],s={toc:[]};function l(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,(0,r.Z)({},n,{mdxType:"Row"})))}l.isMDXComponent=!0},4367:function(e,t,n){n.d(t,{ga:function(){return r}});var r={};n.r(r),n.d(r,{CATEGORIES:function(){return a},sendEvent:function(){return o}});var o=function(e){var t=e.category,n=e.action,r=e.label,o=e.value;if(void 0!==typeof window&&window.ga)return window.ga("send",{hitType:"event",eventCategory:t,eventAction:n,eventLabel:r,eventValue:o})},a={full:"Feedback 1.2 (full)",mixed:"Feedback 1.2 (mixed)",short:"Feedback 1.2 (short)"}},4463:function(e,t,n){n.d(t,{X:function(){return s},Z:function(){return u}});var r=n(7294),o=n(6010),a=n(2511),i=n(4367),c={root:"root_3See",rootDisabled:"rootDisabled_1JKe",details:"details_4eET",detailsTags:"detailsTags_1PjI",icon:"icon_3Id-",title:"title_35mm",description:"description_1Z1k"},s=function(e){var t=e.title,n=e.description,s=e.to,u=e.Icon,d=e.tags,f=e.className,m=e.disabled,p=(0,r.useCallback)((function(){i.ga.sendEvent({category:i.ga.CATEGORIES.full,action:"NavRow:Click",label:s})}),[s]);return r.createElement(a.Z,{className:(0,o.Z)(c.root,f,m&&c.rootDisabled),to:s,onClick:p},r.createElement(l,{Icon:u}),r.createElement("div",{className:c.details},r.createElement("div",{className:c.detailsMain},r.createElement("span",{className:c.title},t),r.createElement("p",{className:c.description},n)),d&&r.createElement("div",{className:c.detailsTags},d.join(" \u2022 "))))},l=function(e){var t=e.Icon;return t?"string"==typeof t?r.createElement("span",{className:c.icon},t):r.createElement(t,{className:c.icon}):null},u=s},7636:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return b},default:function(){return h},frontMatter:function(){return p},metadata:function(){return v},toc:function(){return y}});var r=n(3117),o=n(102),a=n(7294),i=n(4137),c=n(6644),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 00-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 00-44-44zM184 352V232h64v207.6a91.99 91.99 0 01-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z"}}]},name:"trophy",theme:"outlined"},l=n(755),u=function(e,t){return a.createElement(l.Z,Object.assign({},e,{ref:t,icon:s}))};u.displayName="TrophyOutlined";var d=a.forwardRef(u),f=n(2263),m=["components"],p={sidebar_position:0,sidebar_class_name:"sidebar-item--root",hide_table_of_contents:!0,slug:"/about",pagination_prev:"reference/index"},b="\ud83c\udf70 About",v={unversionedId:"about/index",id:"about/index",isDocsHomePage:!1,title:"\ud83c\udf70 About",description:"BACKGROUND-ORIENTED",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/about/index.mdx",sourceDirName:"about",slug:"/about",permalink:"/en/docs/about",editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/about/index.mdx",tags:[],version:"current",lastUpdatedAt:1645650958,formattedLastUpdatedAt:"2/23/2022",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_class_name:"sidebar-item--root",hide_table_of_contents:!0,slug:"/about",pagination_prev:"reference/index"},sidebar:"aboutSidebar",previous:{title:"\ud83d\udcda Reference",permalink:"/en/docs/reference"},next:{title:"Mission",permalink:"/en/docs/about/mission"}},y=[{value:"Main",id:"main",children:[],level:2}],g={toc:y};function h(e){var t=e.components,n=(0,o.Z)(e,m);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-about"},"\ud83c\udf70 About"),(0,i.kt)("span",{class:"badge badge--violet margin-bottom--md"},"BACKGROUND-ORIENTED"),(0,i.kt)("p",{class:"summary"},"General information about methodology, team, community and development history"),(0,i.kt)("h2",{id:"main"},"Main"),(0,i.kt)(c.ZP,{title:"Mission",description:"Goals and limitations of the methodology",to:"/docs/about/mission",Icon:d,mdxType:"Row"}),(0,i.kt)(c.ZP,{title:"Motivation",description:"Reasons for the creation and development of the methodology",to:"/docs/about/motivation",Icon:f.Z,mdxType:"Row"}))}h.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);