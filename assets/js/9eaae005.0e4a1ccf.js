"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4045],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>b});var i=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),g=r,b=p["".concat(s,".").concat(g)]||p[g]||u[g]||a;return t?i.createElement(b,o(o({ref:n},c),{},{components:t})):i.createElement(b,o({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},38632:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(58168),r=(t(96540),t(15680));const a={sidebar_position:400},o="Curves",l={unversionedId:"buildings/round",id:"buildings/round",title:"Curves",description:"The default building elements are efficient for modeling simple building shapes. To make more complex buildings with curved walls or walls that are slanted in x-, or y-direction you can use the power of solid modeling. Complex models are made by adding, subtracting or uniting basic shapes like cylinders, spheres, and curved surfaces.",source:"@site/docs/buildings/round.md",sourceDirName:"buildings",slug:"/buildings/round",permalink:"/docs/buildings/round",draft:!1,tags:[],version:"current",sidebarPosition:400,frontMatter:{sidebar_position:400},sidebar:"defaultSidebar",previous:{title:"Slant",permalink:"/docs/buildings/slanted"},next:{title:"Primitives",permalink:"/docs/solids/primitives"}},s={},d=[],c={toc:d},p="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(p,(0,i.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"curves"},"Curves"),(0,r.yg)("p",null,"The default building elements are efficient for modeling simple building shapes. To make more complex buildings with curved walls or walls that are slanted in x-, or y-direction you can use the power of solid modeling. Complex models are made by adding, subtracting or uniting basic shapes like cylinders, spheres, and curved surfaces."),(0,r.yg)("p",null,"In the example below we create a semi-circular area by adding a cylinder and a block, and subtracting a cylinder and a block with a smaller size. For this, we use the operation ",(0,r.yg)("inlineCode",{parentName:"p"},"Combine"),". "),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(74193).A,width:"1200",height:"600"})),(0,r.yg)("p",null,"If we change the ",(0,r.yg)("inlineCode",{parentName:"p"},"Combine")," operation from ",(0,r.yg)("inlineCode",{parentName:"p"},"None")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"Substract")," a hollow shape is formed. We now add the ",(0,r.yg)("inlineCode",{parentName:"p"},"Type")," block to indicate that this object is a wall. We also added another cylinder and a block with a height of 0.2 meters to indicate that this is a ",(0,r.yg)("inlineCode",{parentName:"p"},"Slab"),". Alternatively, we could have added a ",(0,r.yg)("inlineCode",{parentName:"p"},"move")," transformation of ",(0,r.yg)("inlineCode",{parentName:"p"},"0.2")," in the z-direction of the block and the cylinder in the example above. The floor then would be a part of the wall."),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(49530).A,width:"1200",height:"600"})),(0,r.yg)("p",null,"To cut rounded openings in the wall we create a new object that is big enough to cut through both walls. We save this object as ",(0,r.yg)("inlineCode",{parentName:"p"},"Openings"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(51877).A,width:"1200",height:"600"})),(0,r.yg)("p",null,"The openings are now included in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Combine")," block by adding a ",(0,r.yg)("inlineCode",{parentName:"p"},"Part")," block and selecting the object ",(0,r.yg)("inlineCode",{parentName:"p"},"Openings"),". We have also added a repeat block to move the part 4 times in the x-direction."),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(207).A,width:"1200",height:"600"})),(0,r.yg)("p",null,"A doubly-curved hollow roof is constructed by subtracting a cylinder and a sphere from a slightly larger cylinder and sphere. The roof is flattened by applying a ",(0,r.yg)("inlineCode",{parentName:"p"},"Scale")," operation in the z-direction."),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(6487).A,width:"1200",height:"600"})),(0,r.yg)("p",null,"Finally, the two elements are combined into a building with two storeys. This will allow the user to view the building without the roof in the viewer by turning off the ",(0,r.yg)("inlineCode",{parentName:"p"},"Roof"),". "),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(98592).A,width:"1200",height:"600"})))}u.isMDXComponent=!0},207:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/building_hall_first-200a8ebadb7ad26ade5beb10454e3a37.png"},98592:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/building_hall_hall-f5103b6cebafaa2df9bfda79bdb3acdd.png"},51877:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/building_hall_opening-b98d59509e348aa6d4b6062dd87f05de.png"},6487:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/building_hall_roof-c125002b51b3ba1082de0fef68dc0af7.png"},74193:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/building_hall_round_1-45f7d68661ca09bff23bc68a4c81b78e.png"},49530:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/building_hall_round_2-d43cfe8ab6c879db40346531fbde97c9.png"}}]);