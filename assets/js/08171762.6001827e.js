"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4211],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>y});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),g=i,y=c["".concat(p,".").concat(g)]||c[g]||m[g]||r;return a?n.createElement(y,o(o({ref:t},d),{},{components:a})):n.createElement(y,o({ref:t},d))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},59600:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(58168),i=(a(96540),a(15680));const r={sidebar_position:300},o="Level of Detail",l={unversionedId:"mapping/lod",id:"mapping/lod",title:"Level of Detail",description:"Level of Detail (LOD) management involves adjusting the complexity of 3D model representations based on their distance from the viewer. The primary goal of LOD is to optimize rendering performance while maintaining visual quality.",source:"@site/docs/mapping/lod.md",sourceDirName:"mapping",slug:"/mapping/lod",permalink:"/docs/mapping/lod",draft:!1,tags:[],version:"current",sidebarPosition:300,frontMatter:{sidebar_position:300},sidebar:"defaultSidebar",previous:{title:"Positioning",permalink:"/docs/mapping/positioning"},next:{title:"SpaceTime data",permalink:"/docs/mapping/values"}},p={},s=[{value:"Geometry",id:"geometry",level:2},{value:"Solids",id:"solids",level:2},{value:"Topics",id:"topics",level:2},{value:"Zoom",id:"zoom",level:2}],d={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,i.yg)(c,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"level-of-detail"},"Level of Detail"),(0,i.yg)("p",null,"Level of Detail (LOD) management involves adjusting the complexity of 3D model representations based on their distance from the viewer. The primary goal of LOD is to optimize rendering performance while maintaining visual quality."),(0,i.yg)("h2",{id:"geometry"},"Geometry"),(0,i.yg)("p",null,"To implement the level of detail you can use multiple representations of the same object, depending on the distance of the viewer. For example, a glTF detailed model of a maple tree can be replaced by a simple abstract tree shape when viewed from far."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Far"),(0,i.yg)("th",{parentName:"tr",align:null},"Near"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("img",{src:a(73463).A,width:"652",height:"585"})),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("img",{src:a(11502).A,width:"758",height:"746"}))))),(0,i.yg)("h2",{id:"solids"},"Solids"),(0,i.yg)("p",null,"The simplified representation of a maple tree is defined by a cone and a cylinder."),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(18093).A,width:"1200",height:"750"})),(0,i.yg)("p",null,"A semi detailed representation of the main building is defined by a solid with repetition statements which create floors and walls."),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(44197).A,width:"1200",height:"750"})),(0,i.yg)("h2",{id:"topics"},"Topics"),(0,i.yg)("p",null,"To specify a level of detail you need to specify a distance and a geometry for each level of detail. The distance is specified in meters and the geometry can be a solid, a script of a glTF file. You can specify multiple entries separated by a ",(0,i.yg)("inlineCode",{parentName:"p"},"|")," character."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-JavaScript"},"[DISTANCE]:[GEOMETRY] | [DISTANCE]:[GEOMETRY]\n")),(0,i.yg)("p",null,"In the example below the geometry changes from a detailed ",(0,i.yg)("inlineCode",{parentName:"p"},"maple_tree.glb")," to a simple ",(0,i.yg)("inlineCode",{parentName:"p"},"ConeTree.gltf")," when the distance is more than 500 meter. The geometry of the parking is replaced by a simple block when viewed from more than 1000 meters."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-JavaScript"},"htc.landscape.tree_1.geometry = maple_tree.glb | 500:ConeTree.gltf\nhtc.buildings.parking.p1.geometry = campus.Parking.gltf|1000:block(61, 32, 50)\n")),(0,i.yg)("h2",{id:"zoom"},"Zoom"),(0,i.yg)("p",null,"From a far distance all geometry is displayed by simple geometry, enabling fast zooming and panning."),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(19168).A,width:"1200",height:"750"})),(0,i.yg)("p",null,"When clicking on the ",(0,i.yg)("inlineCode",{parentName:"p"},"+")," icon the camera zooms in and a more detailed representation of the buildings is displayed.\n",(0,i.yg)("img",{src:a(97638).A,width:"1200",height:"750"})),(0,i.yg)("p",null,"After zooming in further the detailed model of the tree is displayed."),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(56141).A,width:"1200",height:"750"})))}m.isMDXComponent=!0},97638:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/map_campus_lod-7532f5282bc1a860187cdd16b72052b9.png"},19168:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/map_campus_lod_far-74e32bfb0fb665a81bab5af2d37e2c5f.png"},56141:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/map_campus_lod_near-9c237f7e3d17d58578b5669d0f7b3061.png"},44197:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/map_lod_building-b3cf7da35e62bff38309791936adf62e.png"},11502:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/map_lod_detail-5f860770a961c9850a49c09c1ccffe39.png"},73463:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/map_lod_simple-baa93efcd30e919d496935d897461e1c.png"},18093:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/map_lod_tree-368f6641108aa81278abeea24a14f624.png"}}]);