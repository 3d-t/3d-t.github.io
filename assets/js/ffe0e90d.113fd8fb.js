"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[253],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98819:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const o={sidebar_position:10},i="Colors",l={unversionedId:"animation/colors",id:"animation/colors",title:"Colors",description:"You can view the historical data of a property such as temperature of a room in a table or a line chart.  The example below shows how the temperature of a room changes during the day. The temperature of the room may also be dependent on the level in a building.",source:"@site/docs/animation/colors.md",sourceDirName:"animation",slug:"/animation/colors",permalink:"/docs/animation/colors",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"Garden",permalink:"/docs/twin/garden"},next:{title:"Camera",permalink:"/docs/animation/camera"}},c={},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.yg)(u,(0,n.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"colors"},"Colors"),(0,a.yg)("p",null,"You can view the historical data of a property such as temperature of a room in a table or a line chart.  The example below shows how the temperature of a room changes during the day. The temperature of the room may also be dependent on the level in a building."),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(23578).A,width:"2090",height:"1512"})),(0,a.yg)("p",null,"To show how the temperature of all areas change during the day you can click on the ",(0,a.yg)("inlineCode",{parentName:"p"},"time")," tab. Add one of more topics that you want to animate. The topics may include wildcards, for example ",(0,a.yg)("inlineCode",{parentName:"p"},"site.S05.*.temperature")," loads the temperature topics of all areas. Next, specify a start time and end time and optionally a period for aggregation. If temperature data is available per minute and you want to see the changes per hour you enter the period ",(0,a.yg)("inlineCode",{parentName:"p"},"hour"),". Click on ",(0,a.yg)("inlineCode",{parentName:"p"},"animate")," to show a 3D animation of the temperatures during the day."),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(87611).A,width:"1200",height:"750"})))}m.isMDXComponent=!0},23578:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/animation_history_temperature-fec1d2fd45e059b0a5fc2f9eb7ff962d.png"},87611:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/animation_site_frames-81de03ce27652b60981924c68f40a3ae.png"}}]);