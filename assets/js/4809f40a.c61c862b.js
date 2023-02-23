"use strict";(self.webpackChunk_set_app_docs=self.webpackChunk_set_app_docs||[]).push([[48],{876:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7321:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7896),r=(a(2784),a(876));const o={slug:"default-values",title:"Default Values",authors:"fran",tags:["npm","config","Readme"]},l=void 0,i={permalink:"/set-app/blog/default-values",source:"@site/blog/2023-02-23-default-values/index.md",title:"Default Values",description:"NPM",date:"2023-02-23T00:00:00.000Z",formattedDate:"February 23, 2023",tags:[{label:"npm",permalink:"/set-app/blog/tags/npm"},{label:"config",permalink:"/set-app/blog/tags/config"},{label:"Readme",permalink:"/set-app/blog/tags/readme"}],readingTime:1.625,hasTruncateMarker:!1,authors:[{name:"Francisco Leonel Moreno Eraso",title:"Maintainer of SetApp",url:"https://github.com/Frankeo",imageURL:"https://github.com/Frankeo.png",key:"fran"}],frontMatter:{slug:"default-values",title:"Default Values",authors:"fran",tags:["npm","config","Readme"]}},p={authorsImageUrls:[void 0]},s=[{value:"NPM",id:"npm",level:2},{value:"Author Url",id:"author-url",level:3},{value:"License",id:"license",level:3},{value:"Intial Version",id:"intial-version",level:3},{value:"Author Email",id:"author-email",level:3},{value:"Author Name",id:"author-name",level:3},{value:"README",id:"readme",level:2},{value:"Before",id:"before",level:3},{value:"After",id:"after",level:3},{value:"Full Example App",id:"full-example-app",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"npm"},"NPM"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@set-app/cli"},"SetApp")," we focus on build the tools around technologies that we already use.\nOne of them is ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com"},"NPM")," who is in charge of generate our ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", so in a fresh machine with the default config, it would look like:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Default package.json",src:a(641).Z,width:"882",height:"490"})),(0,r.kt)("p",null,"There is some config, like the ",(0,r.kt)("strong",{parentName:"p"},"description")," that is different between projects and because of that, it's taken care with our tool"),(0,r.kt)("admonition",{title:"Please Check the Docs \ud83d\ude4f\ud83c\udffb",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please, check the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cli Commands")," documentation section for more info about this topic")),(0,r.kt)("p",null,"On the other hand we have common info that we could be shared between projects, for some of them, like the ",(0,r.kt)("inlineCode",{parentName:"p"},"License")," or the ",(0,r.kt)("inlineCode",{parentName:"p"},"Version")," we have default values (",(0,r.kt)("strong",{parentName:"p"},"ISC")," and ",(0,r.kt)("strong",{parentName:"p"},"1.0.0"),"). Other values like the ",(0,r.kt)("inlineCode",{parentName:"p"},"Author")," are not even set."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This default behaviour could be changed! The following list of values could be set, and in fact, we recommend that!")),(0,r.kt)("h3",{id:"author-url"},"Author Url"),(0,r.kt)("p",null,"You could set your personal webpage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm config set init-author-url="<URL>"\n')),(0,r.kt)("h3",{id:"license"},"License"),(0,r.kt)("p",null,"You could set a default license (",(0,r.kt)("strong",{parentName:"p"},"current default value: ",(0,r.kt)("inlineCode",{parentName:"strong"},"ISC")),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm config set init-license="<LICENSE>"\n')),(0,r.kt)("h3",{id:"intial-version"},"Intial Version"),(0,r.kt)("p",null,"You could set a default version (",(0,r.kt)("strong",{parentName:"p"},"current default value: ",(0,r.kt)("inlineCode",{parentName:"strong"},"1.0.0")),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm config set init-version="<VERSION>"\n')),(0,r.kt)("h3",{id:"author-email"},"Author Email"),(0,r.kt)("p",null,"You could set an author email to contact"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm config set init-author-email="<EMAIL>"\n')),(0,r.kt)("h3",{id:"author-name"},"Author Name"),(0,r.kt)("p",null,"You could set a default author name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm config set init-author-name"<NAME>"\n')),(0,r.kt)("p",null,"If we execute those commands the result will be a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," similar to the next one:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Full package.json",src:a(1382).Z,width:"1534",height:"536"})),(0,r.kt)("h2",{id:"readme"},"README"),(0,r.kt)("p",null,"Not only that, other tools used in ",(0,r.kt)("inlineCode",{parentName:"p"},"SetApp")," use these values, for example our README generator: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kefranabg/readme-md-generator"},"readme-md-generator"),"."),(0,r.kt)("h3",{id:"before"},"Before"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"README",src:a(6977).Z,width:"1104",height:"536"})),(0,r.kt)("h3",{id:"after"},"After"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"README-FULL",src:a(8666).Z,width:"1152",height:"718"})),(0,r.kt)("h2",{id:"full-example-app"},"Full Example App"),(0,r.kt)("p",null,"Running a command similar to:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example command",src:a(1143).Z,width:"690",height:"232"})),(0,r.kt)("p",null,"The README generated would look like:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example README",src:a(8840).Z,width:"1136",height:"1172"})),(0,r.kt)("admonition",{title:"Have in mind \ud83d\ude4f\ud83c\udffb",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"More info will be added when we integrate with a ",(0,r.kt)("inlineCode",{parentName:"p"},"Github repo"),", so the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"README")," would have even more content")))}m.isMDXComponent=!0},8840:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/README-EXAMPLE-1aea2c969b639b1d9d173a5ca4ef016d.png"},8666:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/README-FULL-6edc75b4f3018b3419dd338c5807690f.png"},6977:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/README-5eae1eee814296f745bbd6ed71d6399f.png"},1143:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example-command-1dbf98bea91e436cdd3e6456665dfc33.png"},1382:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/package-json-full-bbc05d070580fd7aeb2d899d262838f1.png"},641:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/package-json-ce3ef5ceae62c989cb78ba6a5f648041.png"}}]);