"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[21],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6644:function(e,t,n){n.d(t,{ZP:function(){return l}});var a=n(3117),o=n(102),i=(n(7294),n(4137)),r=n(4463),c=["components"],s={toc:[]};function l(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,(0,a.Z)({},n,{mdxType:"Row"})))}l.isMDXComponent=!0},4367:function(e,t,n){n.d(t,{ga:function(){return a}});var a={};n.r(a),n.d(a,{CATEGORIES:function(){return i},sendEvent:function(){return o}});var o=function(e){var t=e.category,n=e.action,a=e.label,o=e.value;if(void 0!==typeof window&&window.ga)return window.ga("send",{hitType:"event",eventCategory:t,eventAction:n,eventLabel:a,eventValue:o})},i={full:"Feedback 1.2 (full)",mixed:"Feedback 1.2 (mixed)",short:"Feedback 1.2 (short)"}},4463:function(e,t,n){n.d(t,{X:function(){return s},Z:function(){return d}});var a=n(7294),o=n(6010),i=n(2511),r=n(4367),c={root:"root_3See",rootDisabled:"rootDisabled_1JKe",details:"details_4eET",detailsTags:"detailsTags_1PjI",icon:"icon_3Id-",title:"title_35mm",description:"description_1Z1k"},s=function(e){var t=e.title,n=e.description,s=e.to,d=e.Icon,p=e.tags,m=e.className,u=e.disabled,f=(0,a.useCallback)((function(){r.ga.sendEvent({category:r.ga.CATEGORIES.full,action:"NavRow:Click",label:s})}),[s]);return a.createElement(i.Z,{className:(0,o.Z)(c.root,m,u&&c.rootDisabled),to:s,onClick:f},a.createElement(l,{Icon:d}),a.createElement("div",{className:c.details},a.createElement("div",{className:c.detailsMain},a.createElement("span",{className:c.title},t),a.createElement("p",{className:c.description},n)),p&&a.createElement("div",{className:c.detailsTags},p.join(" \u2022 "))))},l=function(e){var t=e.Icon;return t?"string"==typeof t?a.createElement("span",{className:c.icon},t):a.createElement(t,{className:c.icon}):null},d=s},3909:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(3117),o=n(102),i=(n(7294),n(4137)),r=n(6644),c=(n(2511),["components"]),s={sidebar_position:1,pagination_next:"get-started/index"},l="\ud83d\udd0e Intro",d={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"\ud83d\udd0e Intro",description:"OVERVIEW-ORIENTED",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/en/docs/intro",editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/intro.mdx",tags:[],version:"current",lastUpdatedAt:1645650958,formattedLastUpdatedAt:"2/23/2022",sidebarPosition:1,frontMatter:{sidebar_position:1,pagination_next:"get-started/index"},next:{title:"\ud83d\ude80 Get Started",permalink:"/en/docs/get-started"}},p=[{value:"Basics",id:"basics",children:[],level:2},{value:"Motivation",id:"motivation",children:[],level:2},{value:"Overview",id:"overview",children:[{value:"Explicit business logic",id:"explicit-business-logic",children:[],level:3},{value:"Adaptation to new conditions",id:"adaptation-to-new-conditions",children:[],level:3},{value:"Technical debt and refactoring",id:"technical-debt-and-refactoring",children:[],level:3},{value:"Scaling the project and the team",id:"scaling-the-project-and-the-team",children:[],level:3},{value:"Controlled reuse of logic",id:"controlled-reuse-of-logic",children:[],level:3}],level:2},{value:"What&#39;s next?",id:"whats-next",children:[],level:2}],m={toc:p};function u(e){var t=e.components,s=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-intro"},"\ud83d\udd0e Intro"),(0,i.kt)("span",{class:"badge badge--secondary margin-bottom--md"},"OVERVIEW-ORIENTED"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"feature-sliced-banner",src:n(5432).Z})),(0,i.kt)("p",null,"FeatureSliced is an architectural design methodology for ",(0,i.kt)("em",{parentName:"p"},"frontend projects"),". It aims to ",(0,i.kt)("strong",{parentName:"p"},"divide an application according to business logic and scopes of responsibility.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provides ",(0,i.kt)("a",{parentName:"li",href:"/docs/concepts/architecture#requirements"},(0,i.kt)("strong",{parentName:"a"},"explicitness, controllability and adaptability"))," of architecture"),(0,i.kt)("li",{parentName:"ul"},"Based on ",(0,i.kt)("a",{parentName:"li",href:"/docs/about/motivation#why-are-there-not-enough-existing-solutions"},(0,i.kt)("strong",{parentName:"a"},"time-tested"))," design practices and concepts",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"SOLID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"GRASP"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DDD"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Separation of Concerns"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Vertical Slices"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Public API"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Isolation")))),(0,i.kt)("li",{parentName:"ul"},"Suggests dividing the project according to ",(0,i.kt)("a",{parentName:"li",href:"https://thedomaindrivendesign.io/developing-the-ubiquitous-language"},(0,i.kt)("strong",{parentName:"a"},"business units")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The methodology is not tied to a specific tech stack and is applicable ",(0,i.kt)("em",{parentName:"p"},"to any frontend projects")," in general."),(0,i.kt)("p",{parentName:"div"},"But the current version is based on and provides examples for ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaScript")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"React")," stack."))),(0,i.kt)("h2",{id:"basics"},"Basics"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"schema-themed--scheme",src:n(5366).Z})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"More details: ",(0,i.kt)("a",{parentName:"p",href:"/docs/get-started/basics"},'"Concepts, Abstractions, Structure"'))),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"Usually, approaches to building the frontend architecture from project to project are ",(0,i.kt)("a",{parentName:"p",href:"/docs/about/motivation"},"re-invented from scratch"),", thereby adding ",(0,i.kt)("a",{parentName:"p",href:"/docs/about/knowledge-types"},'"project knowledge"')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Despite the fact that the specifics of frontend projects do not differ so much")),(0,i.kt)("p",null,"At the same time, incorrectly made decisions often lead ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/architecture#problems"},"to problems of scalability of the project and the team"),"."),(0,i.kt)("p",null,"And therefore, instead of inventing and documenting it every time, it is better to ",(0,i.kt)("strong",{parentName:"p"},"summarize the experience and form a working, battle-tested and documented methodology")," for designing the frontend architecture."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Yes, there are many practices and patterns (",(0,i.kt)("inlineCode",{parentName:"em"},"SOLID"),", ",(0,i.kt)("inlineCode",{parentName:"em"},"GRASP"),", ",(0,i.kt)("inlineCode",{parentName:"em"},"DDD"),", ...)")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"But for the frontend ",(0,i.kt)("a",{parentName:"em",href:"/docs/about/motivation"},"it is highly difficult to find")," well-established and specific approaches")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The methodology is designed to ",(0,i.kt)("strong",{parentName:"p"},"simplify and standardize the decomposition of logic for large and long-lived projects.")),(0,i.kt)("p",null,"To do this, it introduces a number of ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts"},"concepts")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/app-splitting"},"abstractions"),", on which the architecture ",(0,i.kt)("em",{parentName:"p"},"can be based")," from project to project - from here we get ",(0,i.kt)("em",{parentName:"p"},"a number of advantages")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"/docs/reference/glossary#module"},"Module")," - the structural unit of the project (file / directory)"))),(0,i.kt)("h3",{id:"explicit-business-logic"},"Explicit business logic"),(0,i.kt)("p",null,"Modules are distributed according to ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/app-splitting"},"scope of influence, business responsibility and technical purpose")),(0,i.kt)("p",null,"Thanks to this, ",(0,i.kt)("em",{parentName:"p"},"the architecture is standardized and becomes easier to read")),(0,i.kt)("h3",{id:"adaptation-to-new-conditions"},"Adaptation to new conditions"),(0,i.kt)("p",null,"Each component of the architecture has its own purpose and does not affect the others"),(0,i.kt)("p",null,"Thanks to this ",(0,i.kt)("em",{parentName:"p"},"it is possible to independently modify the functionality of the application to meet new requirements without unforeseen consequences")),(0,i.kt)("h3",{id:"technical-debt-and-refactoring"},"Technical debt and refactoring"),(0,i.kt)("p",null,"Each module is independent and self-sufficient"),(0,i.kt)("p",null,"Thanks to this ",(0,i.kt)("em",{parentName:"p"},"you can rewrite it from scratch without unexpected side effects")),(0,i.kt)("h3",{id:"scaling-the-project-and-the-team"},"Scaling the project and the team"),(0,i.kt)("p",null,"The increase in functionality leads to significantly less complexity of the project, since all the logic is distributed deterministically and in isolation"),(0,i.kt)("p",null,"Thanks to this ",(0,i.kt)("em",{parentName:"p"},"it is easy to add and onboard new people to the team, as well as expand the functionality of the project")),(0,i.kt)("h3",{id:"controlled-reuse-of-logic"},"Controlled reuse of logic"),(0,i.kt)("p",null,"Each module has its own limitations and recommendations for reuse according to ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/app-splitting#group-layers"},"its layer")),(0,i.kt)("p",null,"Thanks to this, ",(0,i.kt)("em",{parentName:"p"},"a balance is maintained between compliance with the ",(0,i.kt)("inlineCode",{parentName:"em"},"DRY")," principle and the ability to customize the module logic without overhead overrides")),(0,i.kt)("h2",{id:"whats-next"},"What's next?"),(0,i.kt)(r.ZP,{title:"Get Started",description:"Quick dive into the methodology",to:"/docs/get-started",Icon:"\ud83d\ude80",tags:["Basics","QuickStart","Motivation"],mdxType:"Row"}),(0,i.kt)(r.ZP,{title:"Guides",description:"Practical guides and application examples",to:"/docs/guides",Icon:"\ud83c\udfaf",tags:["From v1","From legacy","Examples"],mdxType:"Row"}),(0,i.kt)(r.ZP,{title:"Concepts",description:"Core concepts for better understanding and application",to:"/docs/concepts",Icon:"\ud83e\udde9",tags:["Decomposition","Isolation","Public API"],mdxType:"Row"}),(0,i.kt)(r.ZP,{title:"Reference",description:"Reference details of core concepts",to:"/docs/reference",Icon:"\ud83d\udcda",tags:["Glossary","Layers","Segments"],mdxType:"Row"}),(0,i.kt)(r.ZP,{title:"About",description:"The philosophy of methodology, its goals and place in the modern frontend",to:"/docs/about",Icon:"\ud83c\udf70",tags:["Mission","Promote & Integration"],mdxType:"Row"}),(0,i.kt)(r.ZP,{title:"Community",description:"Community resources, additional materials",to:"/docs/community",Icon:"\ud83d\udcab",tags:["Awesome","Team","Contributing"],mdxType:"Row"}),(0,i.kt)(r.ZP,{title:"Examples",description:"Examples of projects built with Feature Sliced",to:"/examples",Icon:"\ud83d\udee0",mdxType:"Row"}))}u.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})},5432:function(e,t,n){t.Z=n.p+"assets/images/banner-b424b0c083d6fabf1be3ec261b0438c6.jpg"},5366:function(e,t,n){t.Z=n.p+"assets/images/visual_schema-fa51213f196388fb59e00826f097cef4.jpg"}}]);