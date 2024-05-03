"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4365],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>u});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=o,u=d["".concat(l,".").concat(g)]||d[g]||m[g]||r;return t?a.createElement(u,i(i({ref:n},p),{},{components:t})):a.createElement(u,i({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},39210:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(58168),o=(t(96540),t(15680));const r={sidebar_position:320},i="Rooms",s={unversionedId:"solids/area",id:"solids/area",title:"Rooms",description:"To create an area, select the option Solids from the menu and click on + to add a new solid. Select the mode Advanced.  In the workspace click on + to show the side menu with blocks.",source:"@site/docs/solids/area.md",sourceDirName:"solids",slug:"/solids/area",permalink:"/docs/solids/area",draft:!1,tags:[],version:"current",sidebarPosition:320,frontMatter:{sidebar_position:320},sidebar:"defaultSidebar",previous:{title:"Buildings",permalink:"/docs/solids/ifc"},next:{title:"Units",permalink:"/docs/solids/unit"}},l={},c=[],p={toc:c},d="wrapper";function m(e){let{components:n,...r}=e;return(0,o.yg)(d,(0,a.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"rooms"},"Rooms"),(0,o.yg)("p",null,"To create an area, select the option ",(0,o.yg)("inlineCode",{parentName:"p"},"Solids")," from the menu and click on ",(0,o.yg)("inlineCode",{parentName:"p"},"+")," to add a new solid. Select the mode ",(0,o.yg)("inlineCode",{parentName:"p"},"Advanced"),".  In the workspace click on ",(0,o.yg)("inlineCode",{parentName:"p"},"+")," to show the side menu with blocks. "),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(37915).A,width:"1200",height:"600"})),(0,o.yg)("p",null,"Select the ",(0,o.yg)("inlineCode",{parentName:"p"},"wall")," element, drag it into the workspace and set the ",(0,o.yg)("inlineCode",{parentName:"p"},"height")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"width"),". From the ",(0,o.yg)("inlineCode",{parentName:"p"},"transformation")," menu select the block ",(0,o.yg)("inlineCode",{parentName:"p"},"Point")," and drag it into the ",(0,o.yg)("inlineCode",{parentName:"p"},"wall")," element as shown below. Each point represents a coordinate on a floor plan. To add more points you can copy a point by clicking with the mouse and selecting ",(0,o.yg)("inlineCode",{parentName:"p"},"Duplicate"),". "),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(57163).A,width:"1200",height:"600"})),(0,o.yg)("p",null,"To create the floor you can drag a ",(0,o.yg)("inlineCode",{parentName:"p"},"Slab")," element, include the same set of points and then repeat the same to create a ",(0,o.yg)("inlineCode",{parentName:"p"},"Space")," element. An easier alternative is to use the ",(0,o.yg)("inlineCode",{parentName:"p"},"Area")," block which creates a slab for the floor, a wall and a 3D space."),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(43344).A,width:"1200",height:"600"})),(0,o.yg)("p",null,"Openings such as doors and windows are created by extracting volumes from the walls and/or slabs. To make openings in the walls you can use any solid, in this case, a ",(0,o.yg)("inlineCode",{parentName:"p"},"Block"),". Specify the dimensions of the block and add ",(0,o.yg)("inlineCode",{parentName:"p"},"move")," commands to position the block at the center of the wall. When positioning the elements for creating openings make sure you check off the ",(0,o.yg)("inlineCode",{parentName:"p"},"openings")," box. When you are done click on the ",(0,o.yg)("inlineCode",{parentName:"p"},"openings")," checkbox. The elements defined in the ",(0,o.yg)("inlineCode",{parentName:"p"},"openings")," section are now subtracted from the walls and a space volume element is created. "),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(33241).A,width:"1200",height:"600"})))}m.isMDXComponent=!0},37915:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/building_elements-4aade49f51e2ed545d0e4485286737f1.png"},57163:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/building_living_1-a7a333fa49085bef9c6319f2aace8c1a.png"},43344:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/building_living_2-99063e98d64c0aadd29c1c45e5b57087.png"},33241:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/building_living_3-cfdc3bece071cffa145b144cd3d8edc2.png"}}]);