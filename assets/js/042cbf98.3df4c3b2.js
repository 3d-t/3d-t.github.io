"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9149],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),y=r,g=p["".concat(s,".").concat(y)]||p[y]||u[y]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},54729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const o={sidebar_position:330},i="Units",l={unversionedId:"solids/unit",id:"solids/unit",title:"Units",description:"A floor, or storey, can be created by adding separate rooms and building elements such as balconies or galleries. To create a balcony a Slab and Wall object is used. They both include the same set of points that define the outline. Note that the wall is not closed.",source:"@site/docs/solids/unit.md",sourceDirName:"solids",slug:"/solids/unit",permalink:"/docs/solids/unit",draft:!1,tags:[],version:"current",sidebarPosition:330,frontMatter:{sidebar_position:330},sidebar:"defaultSidebar",previous:{title:"Rooms",permalink:"/docs/solids/area"},next:{title:"Floors",permalink:"/docs/solids/storeys"}},s={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.yg)(p,(0,a.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"units"},"Units"),(0,r.yg)("p",null,"A floor, or storey, can be created by adding separate rooms and building elements such as balconies or galleries. To create a balcony a ",(0,r.yg)("inlineCode",{parentName:"p"},"Slab")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Wall")," object is used. They both include the same set of points that define the outline. Note that the wall is not closed."),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(68298).A,width:"1200",height:"600"})),(0,r.yg)("p",null,"A bathroom is defined as an ",(0,r.yg)("inlineCode",{parentName:"p"},"Area")," with a square floor surface. In this case we only define three wall segments because the bathroom will be aligned to the living room wall."),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(66758).A,width:"1200",height:"600"})),(0,r.yg)("p",null,"The hallway is defined as an ",(0,r.yg)("inlineCode",{parentName:"p"},"Area")," with openings for two doors and a window. It will also be aligned with the wall of the living room."),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(97225).A,width:"1200",height:"600"})),(0,r.yg)("p",null,"After a building element is created you can specify a name and optionally a library. The library helps you to navigate through large sets of objects that may have the same name. In this case we specify the library ",(0,r.yg)("inlineCode",{parentName:"p"},"B01"),"."),(0,r.yg)("p",null,"You can now create a new solid and select the ",(0,r.yg)("inlineCode",{parentName:"p"},"Part")," block from the ",(0,r.yg)("inlineCode",{parentName:"p"},"Objects")," section. In the block you can enter the name of the library, in this case ",(0,r.yg)("inlineCode",{parentName:"p"},"B01"),". The dropdown menu now only shows solids that belong to this library. Select ",(0,r.yg)("inlineCode",{parentName:"p"},"Living")," to include the living room. Duplicate this block and change the name to ",(0,r.yg)("inlineCode",{parentName:"p"},"Hall")," to add the hall. Repeat this for the bathroon, balcony and gallery."),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(36810).A,width:"1200",height:"600"})))}u.isMDXComponent=!0},68298:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/building_balcony-8eb7f5e959775905496f2c6ca27f686b.png"},66758:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/building_bathroom-40bb0355fccf4477c16670f8c43fb29b.png"},97225:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/building_hall-81140b76a6302aba5804d549f05ac963.png"},36810:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/building_unit-f36a874b39e222fb39589770440b5cc7.png"}}]);