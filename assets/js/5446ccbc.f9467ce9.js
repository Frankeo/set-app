"use strict";(self.webpackChunk_set_app_docs=self.webpackChunk_set_app_docs||[]).push([[654],{876:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1734:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(7896),r=(a(2784),a(876));const o={sidebar_position:1},l="Basic Info",p={unversionedId:"basic-info",id:"basic-info",title:"Basic Info",description:"Let's discover SetApp in less than 5 minutes.",source:"@site/docs/basic-info.md",sourceDirName:".",slug:"/basic-info",permalink:"/set-app/docs/basic-info",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Advance Functionality",permalink:"/set-app/docs/category/advance-functionality"}},i={},s=[{value:"Getting Started",id:"getting-started",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Generate a new project",id:"generate-a-new-project",level:2},{value:"Example Site",id:"example-site",level:2},{value:"Your site commands",id:"your-site-commands",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basic-info"},"Basic Info"),(0,r.kt)("p",null,"Let's discover ",(0,r.kt)("strong",{parentName:"p"},"SetApp in less than 5 minutes"),"."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js")," version 16.14 or above:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When installing Node.js, you are recommended to check all checkboxes related to dependencies."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"Git")," basic features are used so any version since 2015 are recommended"))),(0,r.kt)("h2",{id:"generate-a-new-project"},"Generate a new project"),(0,r.kt)("p",null,"Please, Run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @set-app/cli test-react\n")),(0,r.kt)("p",null,"And just don't forget to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"test-react")," for your project name."),(0,r.kt)("p",null,"The basic template will generate a new ",(0,r.kt)("strong",{parentName:"p"},"react")," project with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eslint.org"},"EsLint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://prettier.io"},"Prettier")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org"},"Typescript")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://vitejs.dev"},"Vite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://vitest.dev"},"Vitest")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org"},"React")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://react-query-v3.tanstack.com"},"React-Query")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactrouter.com/en/main"},"React-Router")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/capricorn86/happy-dom"},"Happy-DOM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@vitest/coverage-c8"},"Coverage-C8"))),(0,r.kt)("admonition",{title:"Have in mind \ud83d\ude09",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The command also setups a GIT project with a ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore")," too. And of course, a beautiful ",(0,r.kt)("inlineCode",{parentName:"p"},"README.md"))),(0,r.kt)("admonition",{title:"Full transparency",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"All preconfigure with the correspondant files and ready to be change as you may need")),(0,r.kt)("h2",{id:"example-site"},"Example Site"),(0,r.kt)("p",null,"The example project generated contains a basic example of some of the functionality that you could use and get inspire for your site:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Error Boundary"),(0,r.kt)("li",{parentName:"ul"},"Vitest Unit Tests"),(0,r.kt)("li",{parentName:"ul"},"React Portals"),(0,r.kt)("li",{parentName:"ul"},"React Context"),(0,r.kt)("li",{parentName:"ul"},"React Router"),(0,r.kt)("li",{parentName:"ul"},"React-Query"),(0,r.kt)("li",{parentName:"ul"},"React-Router"),(0,r.kt)("li",{parentName:"ul"},"Controlled Forms"),(0,r.kt)("li",{parentName:"ul"},"Lazy Loading")),(0,r.kt)("p",null,"Please, check it out ",(0,r.kt)("a",{parentName:"p",href:"https://stupendous-meerkat-980ca8.netlify.app"},"here")),(0,r.kt)("h2",{id:"your-site-commands"},"Your site commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn dev\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn dev")," command serves your project through a development server, ready for you to view at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:5173"},"http://localhost:5173")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn build")," command builds your project locally and leave you the posibility to deploy it in: ",(0,r.kt)("a",{parentName:"p",href:"https://www.netlify.com"},"Netlify"),", ",(0,r.kt)("a",{parentName:"p",href:"https://vercel.com"},"Vercel"),", etc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn format\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn format")," command will format your ",(0,r.kt)("strong",{parentName:"p"},"ts")," and ",(0,r.kt)("strong",{parentName:"p"},"tsx")," according to prettier default configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn lint\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn lint")," command outputs any Eslint error detected in your ",(0,r.kt)("strong",{parentName:"p"},"ts")," and ",(0,r.kt)("strong",{parentName:"p"},"tsx")," files in a friendly way."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn typecheck\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn typecheck")," command outputs any Typescript error detected in your ",(0,r.kt)("strong",{parentName:"p"},"ts")," and ",(0,r.kt)("strong",{parentName:"p"},"tsx")," files that not going to let you build your project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn test\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn test")," command will run Vitest example tests or any tests that has the extension ",(0,r.kt)("strong",{parentName:"p"},".test.ts")," or ",(0,r.kt)("strong",{parentName:"p"},".spec.ts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn test:coverage\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn test:coverage")," command runs Vitest coverage generator (",(0,r.kt)("strong",{parentName:"p"},"C8"),") to generate a coverage report of your project."))}m.isMDXComponent=!0}}]);