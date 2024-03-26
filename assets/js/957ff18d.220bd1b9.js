"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3589],{5680:(e,t,i)=>{i.d(t,{xA:()=>p,yg:()=>f});var n=i(6540);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(i),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return i?n.createElement(f,o(o({ref:t},p),{},{components:i})):n.createElement(f,o({ref:t},p))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},5188:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=i(9668),a=(i(6540),i(5680));const r={sidebar_position:6},o="Digital Twin",s={unversionedId:"concepts/digitaltwin",id:"concepts/digitaltwin",title:"Digital Twin",description:"A Digital Twin is a simplified model of a real world object such as an engine, a building or city. It can be used as a tool for visualizing IoT parameters, locating the position of objects in complex 3D structures and retrieving asset information by point and click in a 3D model.",source:"@site/docs/concepts/digitaltwin.md",sourceDirName:"concepts",slug:"/concepts/digitaltwin",permalink:"/docs/concepts/digitaltwin",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"Machine learning",permalink:"/docs/concepts/ml"},next:{title:"Use cases",permalink:"/docs/concepts/usecases"}},l={},c=[{value:"Parameter visualization",id:"parameter-visualization",level:2},{value:"Asset location",id:"asset-location",level:2},{value:"Smart City",id:"smart-city",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"digital-twin"},"Digital Twin"),(0,a.yg)("p",null,"A Digital Twin is a simplified model of a real world object such as an engine, a building or city. It can be used as a tool for visualizing IoT parameters, locating the position of objects in complex 3D structures and retrieving asset information by point and click in a 3D model. "),(0,a.yg)("h2",{id:"parameter-visualization"},"Parameter visualization"),(0,a.yg)("p",null,"Some times parameters can be visualized with gauges, line charts or 2D maps. However, for complex 3D structures like buildings and plants a 3D model is more appropriate. Unlike 2D maps or 2D engineering drawings, 3D models allow users to navigate in all dimensions and view the model from different directions. For example, a 3D model of an office can be used to show temperature or area occupancy by using a color scheme."),(0,a.yg)("p",null,(0,a.yg)("img",{src:i(4882).A,width:"1540",height:"974"})),(0,a.yg)("h2",{id:"asset-location"},"Asset location"),(0,a.yg)("p",null,"If there is a problem with an asset, like an overheated or leaking pump, it is important to quickly location the position of the asset. A digital twin helps user to locate the asset. For example, a schematic representation of a pump in a transparent contrasting color can be merged with a 3D model of the plant in IFC or GLTF format."),(0,a.yg)("p",null,(0,a.yg)("img",{src:i(9421).A,width:"1528",height:"966"})),(0,a.yg)("h2",{id:"smart-city"},"Smart City"),(0,a.yg)("p",null,"By combining 3D models with geographica information systems (GIS) is is possible to visualize sensor data in an earth view. Users can select a schematic street view or a realistic satelite image. The 3D models are automatically placed in the model based on their current GPS location. Different predefined views allow visualization of data of interest such as building occupancy, status of traffic lights or traffic density. "),(0,a.yg)("p",null,(0,a.yg)("img",{src:i(6805).A,width:"1540",height:"832"})))}d.isMDXComponent=!0},6805:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/campus-3bdf54e127768f27e00e010bf6819d7c.png"},4882:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/office-49c771fe2fbc6da4eb642a69767c8777.png"},9421:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/refinery_pump-1bd4958e9dc708f69b33eeca6a4d42e7.png"}}]);