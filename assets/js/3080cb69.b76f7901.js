(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7333],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},215:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:10},u="Tesla",s={unversionedId:"integrations/tesla",id:"integrations/tesla",isDocsHomePage:!1,title:"Tesla",description:"Perform a one-time manual authentication.",source:"@site/docs/integrations/tesla.md",sourceDirName:"integrations",slug:"/integrations/tesla",permalink:"/docs/integrations/tesla",version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"Zwave",permalink:"/docs/integrations/zwave"},next:{title:"Tuya",permalink:"/docs/integrations/tuya"}},l=[],p={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tesla"},"Tesla"),(0,a.kt)("p",null,"Perform a one-time manual authentication. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl exec -it tesla-89cc68f55-d2jm9 python3 register.py\n")),(0,a.kt)("p",null,"Copy the URL into a web browser and enter your username and password. Copy the URL and paste to the command line.\nVerify that the authentication is succesful:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," kubectl exec -it tesla-89cc68f55-rmb2n cat cache.json\n")))}f.isMDXComponent=!0}}]);