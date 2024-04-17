"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[624],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,y=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return n?r.createElement(y,i(i({ref:t},m),{},{components:n})):r.createElement(y,i({ref:t},m))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const o={sidebar_position:10},i="BIM models",l={unversionedId:"digitaltwin/ifc",id:"digitaltwin/ifc",title:"BIM models",description:"Building Information Models (BIM) are 3D digital representations of building including geometry and life cycle information on assets and materials. BIM models can be created with Computer Aided Design (CAD) systems such as from Autodesk, Bentley or Nemetschek. BIM models can be used to visualize data from IoT devices, such as room temperature, building climate or occupancy.",source:"@site/docs/digitaltwin/ifc.md",sourceDirName:"digitaltwin",slug:"/digitaltwin/ifc",permalink:"/docs/digitaltwin/ifc",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"Curves",permalink:"/docs/buildings/round"},next:{title:"GLTF models",permalink:"/docs/digitaltwin/gltf"}},p={},s=[{value:"Import geometry",id:"import-geometry",level:2},{value:"Import areas and volumes",id:"import-areas-and-volumes",level:2},{value:"Visualize IoT parameters",id:"visualize-iot-parameters",level:2}],m={toc:s},d="wrapper";function c(e){let{components:t,...o}=e;return(0,a.yg)(d,(0,r.A)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"bim-models"},"BIM models"),(0,a.yg)("p",null,"Building Information Models (BIM) are 3D digital representations of building including geometry and life cycle information on assets and materials. BIM models can be created with Computer Aided Design (CAD) systems such as from ",(0,a.yg)("a",{parentName:"p",href:"https://www.autodesk.com"},"Autodesk"),", ",(0,a.yg)("a",{parentName:"p",href:"https://www.bentley.com"},"Bentley")," or ",(0,a.yg)("a",{parentName:"p",href:"https://www.nemetschek.com/"},"Nemetschek"),". BIM models can be used to visualize data from IoT devices, such as room temperature, building climate or occupancy. "),(0,a.yg)("h2",{id:"import-geometry"},"Import geometry"),(0,a.yg)("p",null,"Information on BIM is exchanged via Industry Foundation Classes (IFC) files. An IFC file is an object oriented data format which includes information on areas, volumes and materials. To import an IFC model create a new topic\n",(0,a.yg)("inlineCode",{parentName:"p"},"property.apartment.east.geometry")," and select ",(0,a.yg)("inlineCode",{parentName:"p"},"upload")," to import an IFC file."),(0,a.yg)("p",null,"To view the IFC file, select ",(0,a.yg)("inlineCode",{parentName:"p"},"Models")," from the side menu and create a new model. Add a new topic you want to display in the 3D view, in this example ",(0,a.yg)("inlineCode",{parentName:"p"},"propery.apartment.east"),". The IFC model is displayed. You can turn on or off elements such as ",(0,a.yg)("inlineCode",{parentName:"p"},"walls"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"slabs"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"doors")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"windows")," in the tab ",(0,a.yg)("inlineCode",{parentName:"p"},"IFC"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(6927).A,width:"2732",height:"1802"})),(0,a.yg)("h2",{id:"import-areas-and-volumes"},"Import areas and volumes"),(0,a.yg)("p",null,"After the model is displayed select the option ",(0,a.yg)("inlineCode",{parentName:"p"},"extract")," from the details menu. This generates a JSON file with all the spaces and their associated information such as the ",(0,a.yg)("inlineCode",{parentName:"p"},"name"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"area")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"volume"),". You can now create a new connector to import the JSON file and map to topics. The key ",(0,a.yg)("inlineCode",{parentName:"p"},"expressid")," is used to link the volume element in the BIM model to the topics. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"property.apartment.east.room_119411.name=ZIMMER-4-2\nproperty.apartment.east.room_119411.area=15.08\nproperty.apartment.east.room_119411.volume=38.01\nproperty.apartment.east.room_119411.expressid=119411\n")),(0,a.yg)("p",null,"You can create additional connectors to import temperature and other parameters, for example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"property.apartment.east.room_119411.temperature=17\nproperty.apartment.east.room_119411.luminance=50\n")),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(60176).A,width:"2732",height:"1802"})),(0,a.yg)("h2",{id:"visualize-iot-parameters"},"Visualize IoT parameters"),(0,a.yg)("p",null,"In this example we use colors to visualize the temperature and luminance in the 3D model, for example ",(0,a.yg)("inlineCode",{parentName:"p"},"blue")," in case the temperature is between ",(0,a.yg)("inlineCode",{parentName:"p"},"0")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"15")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"red")," if between ",(0,a.yg)("inlineCode",{parentName:"p"},"24")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"30"),". The ranges are defined in a form with the following content: "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Apartment Room\n\nReference\n|6\n\nName\n|6\n\nTemperature\n[0|15:blue,15|18:green,18|21:grey,21|24:orange,24|30:red 00]\n\nLuminance\n[0|10:black,10|50:grey,50|80:lightgrey,80|100:white 00]\n\nVolume\n[0.00 m3]\n\nArea\n[0.00 m2]\n")),(0,a.yg)("p",null,"We can now link this form to the model we just created by selecting the form ",(0,a.yg)("inlineCode",{parentName:"p"},"Apartment Room")," in the ",(0,a.yg)("inlineCode",{parentName:"p"},"Form")," field of the model. When you select the parameter ",(0,a.yg)("inlineCode",{parentName:"p"},"Temperature")," and click on ",(0,a.yg)("inlineCode",{parentName:"p"},"Update")," the rooms will be colored according to the ranges defined in the form. If you click on a room in the model the form opened so that all parameters can be inspected."))}c.isMDXComponent=!0},60176:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/modeler_ifc_connector-0150f42e81df8bfef6f5f68054abdfea.png"},6927:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/modeler_ifc_temperature-9361b8b7c6dbcd9c319d2a62c478cbcc.png"}}]);