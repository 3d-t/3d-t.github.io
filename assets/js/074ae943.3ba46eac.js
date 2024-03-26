"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4896],{5680:(e,t,o)=>{o.d(t,{xA:()=>c,yg:()=>m});var n=o(6540);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(o),f=r,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},7263:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(9668),r=(o(6540),o(5680));const a={sidebar_position:35},i="Loops",s={unversionedId:"automation/loops",id:"automation/loops",title:"Loops",description:"Loops can be used to iterate over a collection of topics that match a pattern. Click on the Loops section to drag a loop block into the workspace. The loop has two fields00.",source:"@site/docs/automation/loops.md",sourceDirName:"automation",slug:"/automation/loops",permalink:"/docs/automation/loops",draft:!1,tags:[],version:"current",sidebarPosition:35,frontMatter:{sidebar_position:35},sidebar:"defaultSidebar",previous:{title:"Conditional statements",permalink:"/docs/automation/conditionals"},next:{title:"Timers",permalink:"/docs/automation/timers"}},p={},l=[],c={toc:l},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"loops"},"Loops"),(0,r.yg)("p",null,"Loops can be used to iterate over a collection of topics that match a pattern. Click on the ",(0,r.yg)("inlineCode",{parentName:"p"},"Loops")," section to drag a loop block into the workspace. The loop has two fields: a field for a ",(0,r.yg)("inlineCode",{parentName:"p"},"Variable")," name and a field to specify a pattern for a ",(0,r.yg)("inlineCode",{parentName:"p"},"Topic"),".  In this example we first define a variable ",(0,r.yg)("inlineCode",{parentName:"p"},"somebodyPresent")," and set this to ",(0,r.yg)("inlineCode",{parentName:"p"},"false"),". Then we are looping over all topics defined by the pattern ",(0,r.yg)("inlineCode",{parentName:"p"},"office.htc.presense.*.present")," which define which people are currently connected to the WIFI router. If there is anybody present the variable ",(0,r.yg)("inlineCode",{parentName:"p"},"somebodyPresent")," is set to ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),". A second loop is used to iterate over all all topics that have an ",(0,r.yg)("inlineCode",{parentName:"p"},"on")," field, such as switches or lights. These are all turned off if there is nobody present and if it is after 18:00."),(0,r.yg)("p",null,(0,r.yg)("img",{src:o(4857).A,width:"2732",height:"1152"})))}u.isMDXComponent=!0},4857:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/automation_loop_presence-5d1d487acd91df9364e891f10a60afe4.png"}}]);