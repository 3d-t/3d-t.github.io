"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2294],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),p=o,m=f["".concat(s,".").concat(p)]||f[p]||d[p]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},23880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(58168),o=(n(96540),n(15680));const a={sidebar_position:310},i="IFC",l={unversionedId:"buildings/ifc",id:"buildings/ifc",title:"IFC",description:"When visualizing IoT data such as temperature or humidity you can use 2D floorplans to show the area where the measurement is taken. A problem with using 2D data is that a building may contain multiple floors so you need many stacked floorplans, one for each floor. Another limitation of using 2D floorplans is that they do not adequately represent building elements that are slanted or rounded. For this reason, we will use 3D representations of building elements like floors, walls and spaces. If you already have a 3D model of your building you can import a BIM model as a GLTF or IFC file.",source:"@site/docs/buildings/ifc.md",sourceDirName:"buildings",slug:"/buildings/ifc",permalink:"/docs/buildings/ifc",draft:!1,tags:[],version:"current",sidebarPosition:310,frontMatter:{sidebar_position:310},sidebar:"defaultSidebar",previous:{title:"Forecasting",permalink:"/docs/analysis/forecasting"},next:{title:"Rooms",permalink:"/docs/buildings/area"}},s={},c=[],u={toc:c},f="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(f,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"ifc"},"IFC"),(0,o.yg)("p",null,"When visualizing IoT data such as temperature or humidity you can use 2D floorplans to show the area where the measurement is taken. A problem with using 2D data is that a building may contain multiple floors so you need many stacked floorplans, one for each floor. Another limitation of using 2D floorplans is that they do not adequately represent building elements that are slanted or rounded. For this reason, we will use 3D representations of building elements like floors, walls and spaces. If you already have a 3D model of your building you can import a BIM model as a GLTF or IFC file.\nIndustry Foundation Classes (IFC) is an open, international standard that enables the exchange of BIM data between different software programs. It is a platform-independent data model that allows users to share BIM content and models between various applications. If you do not have a BIM model you can create a 3D model with the built-in solid modeler. In either case, the structure of the building will be defined as shown below:"),(0,o.yg)("mermaid",{value:'classDiagram\nclass IfcBuilding\nclass IfcStorey\nclass IfcSlab\nclass IfcWall\nclass IfcSpace\nclass Opening\nIfcBuilding --\x3e IfcStorey\nIfcStorey --\x3e IfcSlab\nIfcStorey --\x3e IfcWall\nIfcStorey --\x3e IfcSpace\nIfcSlab --\x3e Opening\nIfcWall --\x3e Opening\nnote for Opening "Doors, windows"\nnote for IfcSlab "Floor, Roof"'}))}d.isMDXComponent=!0}}]);