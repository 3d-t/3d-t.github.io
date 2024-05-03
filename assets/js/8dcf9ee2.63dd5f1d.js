"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7759],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,f=p["".concat(l,".").concat(g)]||p[g]||u[g]||i;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},54657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const i={sidebar_position:90},s="Slant",o={unversionedId:"buildings/slanted",id:"buildings/slanted",title:"Slant",description:"To make slanted areas you can define a slant angle. This angle defines the slope in the x-direction starting at the part of the wall with the largest x-value. Angles more than 180 degrees have a negative angle.",source:"@site/docs/buildings/slanted.md",sourceDirName:"buildings",slug:"/buildings/slanted",permalink:"/docs/buildings/slanted",draft:!1,tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"defaultSidebar",previous:{title:"Layers",permalink:"/docs/buildings/filters"},next:{title:"Curves",permalink:"/docs/buildings/round"}},l={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...i}=e;return(0,a.yg)(p,(0,r.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"slant"},"Slant"),(0,a.yg)("p",null,"To make slanted areas you can define a slant angle. This angle defines the slope in the x-direction starting at the part of the wall with the largest x-value. Angles more than 180 degrees have a negative angle. "),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(56513).A,width:"1200",height:"600"})),(0,a.yg)("p",null,"You can combine areas that are slanted on both sides by combining two areas. In the example below both parts have a slant angle of 35 degrees but one area is rotated 180 degrees around the z-axis."),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(20143).A,width:"1200",height:"600"})),(0,a.yg)("p",null,"To make a slanted roof you can specify a slab with a height and an offset. The height represents the thickness of the roof. The offset is the height of the slab at the point where the slab starts in the x-direction."),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(81609).A,width:"1200",height:"600"})))}u.isMDXComponent=!0},20143:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/building_slant_attick-8e9f72712a5ea21d995c695b90fc17f1.png"},56513:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/building_slant_hvac-853174c46fb941e3ac5dbf6f8ebbbc46.png"},81609:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/building_slant_roof-6c51c6015c6df0eeab4517c9c44cb5ca.png"}}]);