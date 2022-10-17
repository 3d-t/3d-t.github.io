(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7537],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=r,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return n?o.createElement(m,i(i({ref:t},l),{},{components:n})):o.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6956:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return f}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:35},p="Loops",c={unversionedId:"automation/loops",id:"automation/loops",isDocsHomePage:!1,title:"Loops",description:"Loops can be used to iterate over a collection of topics that match a pattern. Click on the Loops section to drag a loop block into the workspace. The loop has two fields00.",source:"@site/docs/automation/loops.md",sourceDirName:"automation",slug:"/automation/loops",permalink:"/docs/automation/loops",version:"current",sidebarPosition:35,frontMatter:{sidebar_position:35},sidebar:"defaultSidebar",previous:{title:"Conditional statements",permalink:"/docs/automation/conditionals"},next:{title:"Timers",permalink:"/docs/automation/timers"}},l=[],u={toc:l};function f(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"loops"},"Loops"),(0,a.kt)("p",null,"Loops can be used to iterate over a collection of topics that match a pattern. Click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Loops")," section to drag a loop block into the workspace. The loop has two fields: a field for a ",(0,a.kt)("inlineCode",{parentName:"p"},"Variable")," name and a field to specify a pattern for a ",(0,a.kt)("inlineCode",{parentName:"p"},"Topic"),".  In this example we first define a variable ",(0,a.kt)("inlineCode",{parentName:"p"},"somebodyPresent")," and set this to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". Then we are looping over all topics defined by the pattern ",(0,a.kt)("inlineCode",{parentName:"p"},"office.htc.presense.*.present")," which define which people are currently connected to the WIFI router. If there is anybody present the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"somebodyPresent")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". A second loop is used to iterate over all all topics that have an ",(0,a.kt)("inlineCode",{parentName:"p"},"on")," field, such as switches or lights. These are all turned off if there is nobody present and if it is after 18:00."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6297).Z})))}f.isMDXComponent=!0},6297:function(e,t,n){"use strict";t.Z=n.p+"assets/images/automation_loop_presence-5d1d487acd91df9364e891f10a60afe4.png"}}]);