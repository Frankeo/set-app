"use strict";(self.webpackChunk_set_app_docs=self.webpackChunk_set_app_docs||[]).push([[771],{876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||h[d]||r;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var o=n(7896),a=(n(2784),n(876));const r={sidebar_position:3},i="Upcoming Features",p={unversionedId:"advance-functionality/upcoming-features",id:"advance-functionality/upcoming-features",title:"Upcoming Features",description:"It's a freshly new tool coming out, so we have a lot of opportunities to improve!",source:"@site/docs/advance-functionality/upcoming-features.md",sourceDirName:"advance-functionality",slug:"/advance-functionality/upcoming-features",permalink:"/set-app/docs/advance-functionality/upcoming-features",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Cli Commands",permalink:"/set-app/docs/advance-functionality/cli-comands"},next:{title:"Changelogs",permalink:"/set-app/docs/advance-functionality/changelogs"}},s={},l=[{value:"Github Project Generation",id:"github-project-generation",level:2},{value:"Github Action Workflow",id:"github-action-workflow",level:2},{value:"E2E Cypress Generation",id:"e2e-cypress-generation",level:2},{value:"Console Project Generation",id:"console-project-generation",level:2},{value:"Firebase Project Generation",id:"firebase-project-generation",level:2}],c={toc:l},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upcoming-features"},"Upcoming Features"),(0,a.kt)("admonition",{title:"Please remember \ud83d\ude4f\ud83c\udffb",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"It's a freshly new tool coming out, so we have a lot of opportunities to improve!")),(0,a.kt)("p",null,"In our head right now, we have a list of features coming out soon:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#github-project-generation"},"Github Project Generation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#github-action-workflow"},"Github Action Workflow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#e2e-cypress-generation"},"E2E Cypress Generation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#console-project-generation"},"Console Project Generation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#firebase-project-generation"},"Firebase Project Generation"))),(0,a.kt)("h2",{id:"github-project-generation"},"Github Project Generation"),(0,a.kt)("p",null,"The main idea is to generate a ",(0,a.kt)("strong",{parentName:"p"},"public project")," on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/"},"Github")," on your behalf when you are using the tool,\nso you don't have the need to go to your ",(0,a.kt)("em",{parentName:"p"},"browser")," and you can do this all with one tool in one place! \ud83d\ude09"),(0,a.kt)("p",null,"The default functionality will be generate a github project, but if you want to avoid this,\nuse the flag: ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-github")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"When the flag ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-github")," is present, the ",(0,a.kt)("strong",{parentName:"p"},"github action workflow")," is going to be disable too!")),(0,a.kt)("h2",{id:"github-action-workflow"},"Github Action Workflow"),(0,a.kt)("p",null,"We already have the ",(0,a.kt)("strong",{parentName:"p"},"github actions")," neccesary for doing this when we deploy to ",(0,a.kt)("a",{parentName:"p",href:"https://www.netlify.com"},"Netlify")," the examples, You are able to watch the final result in the projects ",(0,a.kt)("a",{parentName:"p",href:"https://stupendous-meerkat-980ca8.netlify.app"},"React")," and ",(0,a.kt)("a",{parentName:"p",href:"https://jocular-kringle-b9193b.netlify.app"},"React-Redux"),"."),(0,a.kt)("p",null,"So, by default the ",(0,a.kt)("inlineCode",{parentName:"p"},".github/workflows")," folder would contain the correct action to do so. There's going to be an option to not doing so,\nwith the flag: ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-deploy")),(0,a.kt)("admonition",{title:"Just a thought \ud83e\udde0",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Just as a reminder the presence of the flag ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-deploy"),", only affects the ",(0,a.kt)("strong",{parentName:"p"},"github action workflow")," generation, no other feature is affected or disable with the use!")),(0,a.kt)("h2",{id:"e2e-cypress-generation"},"E2E Cypress Generation"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.cypress.io"},"Cypress E2E")," are going to be used to check the stability and integrity of changes and dependency updates on the example projects.\nBased on that, we could extract the dependencies and the process installation need it and added to the ",(0,a.kt)("em",{parentName:"p"},"projects generated")," with the ",(0,a.kt)("strong",{parentName:"p"},"cli"),"."),(0,a.kt)("p",null,"So, by default the ",(0,a.kt)("a",{parentName:"p",href:"https://www.cypress.io"},"Cypress E2E")," are going to be generated but if you don't need this, you could disable so using the flag: ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-e2e")),(0,a.kt)("h2",{id:"console-project-generation"},"Console Project Generation"),(0,a.kt)("p",null,"By the lessons learning created this ",(0,a.kt)("strong",{parentName:"p"},"cli"),", the core process configuration and installation are going to be extracted to generate a new type of project,\navailable on the ",(0,a.kt)("strong",{parentName:"p"},"cli")," with the option ",(0,a.kt)("inlineCode",{parentName:"p"},"-t console")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--type console")),(0,a.kt)("admonition",{title:"Just a thought \ud83e\udde0",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The previous features (",(0,a.kt)("strong",{parentName:"p"},"github project generation")," and ",(0,a.kt)("strong",{parentName:"p"},"github action workflow"),") are going to be available and present for this new type of project")),(0,a.kt)("h2",{id:"firebase-project-generation"},"Firebase Project Generation"),(0,a.kt)("p",null,"One of the most interesting new features is the generation and integration with the ",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com"},"firebase cloud"),".\nWhen this config is activated the ",(0,a.kt)("em",{parentName:"p"},"workflow")," and even the ",(0,a.kt)("em",{parentName:"p"},"file project structre")," would be adapted to support the ",(0,a.kt)("strong",{parentName:"p"},"firebase projects"),".\nIt's going to make possible that our projects have ",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com/products/auth"},"authentication"),", ",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com/products/storage"},"storage")," and a ton more features by the hand of ",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com"},"firebase")),(0,a.kt)("p",null,"This behaviour must be activated using the flag ",(0,a.kt)("inlineCode",{parentName:"p"},"--firebase")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"For now this will be not present in the ",(0,a.kt)("inlineCode",{parentName:"p"},"console")," projects and if we try, we are going to receive an error")))}h.isMDXComponent=!0}}]);