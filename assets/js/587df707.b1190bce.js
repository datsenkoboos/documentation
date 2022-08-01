"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[2153],{4137:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return n?i.createElement(h,o(o({ref:t},m),{},{components:n})):i.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8611:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var i=n(3117),a=n(102),r=(n(7294),n(4137)),o=["components"],l={sidebar_position:6},s="Naming adaptability",p={unversionedId:"concepts/naming-adaptability",id:"concepts/naming-adaptability",isDocsHomePage:!1,title:"Naming adaptability",description:"Problem",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/concepts/naming-adaptability.md",sourceDirName:"concepts",slug:"/concepts/naming-adaptability",permalink:"/docs/concepts/naming-adaptability",editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/concepts/naming-adaptability.md",tags:[],version:"current",lastUpdatedAt:1659341125,formattedLastUpdatedAt:"8/1/2022",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"conceptsSidebar",previous:{title:"Decouple entities",permalink:"/docs/concepts/decouple-entities"},next:{title:"Abstractions",permalink:"/docs/concepts/abstractions"}},m=[{value:"Problem",id:"problem",children:[],level:2},{value:"Naming in FSD",id:"naming-in-fsd",children:[],level:2},{value:"When can naming interfere?",id:"when-can-naming-interfere",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],c={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"naming-adaptability"},"Naming adaptability"),(0,r.kt)("h2",{id:"problem"},"Problem"),(0,r.kt)("p",null,"Due to the fact that each developer has his own experience and development context - ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/documentation/discussions/16"},"we are used to calling the same entities differently"),", which can lead to misunderstandings within the team."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Components to be displayed - ",(0,r.kt)("inlineCode",{parentName:"em"},"ui")," / ",(0,r.kt)("inlineCode",{parentName:"em"},"components")," / ",(0,r.kt)("inlineCode",{parentName:"em"},"ui-kit")," / ",(0,r.kt)("inlineCode",{parentName:"em"},"views")," / ...")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Code reusable in all parts of the application - the ",(0,r.kt)("inlineCode",{parentName:"em"},"core"),"/ ",(0,r.kt)("inlineCode",{parentName:"em"},"shared")," / ",(0,r.kt)("inlineCode",{parentName:"em"},"app")," / ...")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Code business logic ",(0,r.kt)("inlineCode",{parentName:"em"},"store")," / ",(0,r.kt)("inlineCode",{parentName:"em"},"model")," / ",(0,r.kt)("inlineCode",{parentName:"em"},"state")," / ..."))),(0,r.kt)("h2",{id:"naming-in-fsd"},"Naming in FSD"),(0,r.kt)("p",null,"The methodology uses such terms as"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"process"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"page"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"feature"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"entity"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"shared")," - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"/docs/reference/layers/overview"},"layers"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ui"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"model"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"lib"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"api")," - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"/docs/reference/segments"},"segments")))),(0,r.kt)("p",null,"Within the framework of the methodology, each of these terms has a ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference"},"clear definition")),(0,r.kt)("p",null,"When developing a project using the ",(0,r.kt)("strong",{parentName:"p"},"Feature-Sliced Design")," methodology, it is very important ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/documentation/discussions/16"},"to adhere to the original naming, in order to avoid misunderstandings")," both among the team members and outside of it."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If a new developer comes to the project who is familiar with the methodology, ",(0,r.kt)("strong",{parentName:"li"},"he should see the terms already familiar to him")),(0,r.kt)("li",{parentName:"ul"},"If you ask for help in the community, you will get an answer to your question faster, ",(0,r.kt)("strong",{parentName:"li"},"if you use the same terminology"))),(0,r.kt)("h2",{id:"when-can-naming-interfere"},"When can naming interfere?"),(0,r.kt)("p",null,"When developing a project for displaying/building/modeling any processes, or developing an application for the layout of magazine pages, you may face the problem that ",(0,r.kt)("strong",{parentName:"p"},"the terms used in the methodology overlap with the terms that your business operates"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FSD#process")," vs simulated process in your application"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FSD#page")," vs magazine page"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FSD#model")," vs car model")),(0,r.kt)("p",null,"Such name collisions can negatively affect the development process."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The developer, seeing the word ",(0,r.kt)("inlineCode",{parentName:"p"},"process")," in the code, will spend extra time understanding which process is being discussed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When communicating within the development team, saying the word ",(0,r.kt)("inlineCode",{parentName:"p"},"process"),", all participants in the conversation should clearly understand what is being discussed, about the process as a business entity or about the process from ",(0,r.kt)("strong",{parentName:"p"},"Feature-Sliced Design"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When communicating with business, developers sometimes use technical terms that the business is not familiar with. So the developer, using the term ",(0,r.kt)("inlineCode",{parentName:"p"},"process"),", referring to the process from ",(0,r.kt)("strong",{parentName:"p"},"Feature-Sliced Design"),", will introduce a misunderstanding into the conversation, which may require additional time for clarification"))),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/16"},"(Discussion) Naming adaptability")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Discussions on naming entities"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/31#discussioncomment-464894"},"Naming survey")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/20"},(0,r.kt)("inlineCode",{parentName:"a"},"processes")," vs ",(0,r.kt)("inlineCode",{parentName:"a"},"flows")," vs ...")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/68"},(0,r.kt)("inlineCode",{parentName:"a"},"model")," vs ",(0,r.kt)("inlineCode",{parentName:"a"},"store")," vs ..."))))))}u.isMDXComponent=!0}}]);