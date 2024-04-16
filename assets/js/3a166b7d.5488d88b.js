"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4595],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>f});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,f=p["".concat(l,".").concat(h)]||p[h]||m[h]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},16986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(58168),i=(n(96540),n(15680));const r={sidebar_position:20},o="GLTF models",s={unversionedId:"digitaltwin/gltf",id:"digitaltwin/gltf",title:"GLTF models",description:"GLTF is a royalty-free specification for the efficient transmission and loading of 3D scenes and models. The format can be compared to JPEG for images or MP4 for video transfer. GLTF models can be downloaded from web sites such as Sketchfab or can be exported from Computer Aided Design (CAD) applications such as Blender, Autodesk Fusion 360 or Solid Edge. GLTF models include capabilities for animation and can be used to visualize IoT parameters.",source:"@site/docs/digitaltwin/gltf.md",sourceDirName:"digitaltwin",slug:"/digitaltwin/gltf",permalink:"/docs/digitaltwin/gltf",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"defaultSidebar",previous:{title:"BIM models",permalink:"/docs/digitaltwin/ifc"},next:{title:"Cesium",permalink:"/docs/digitaltwin/cesium"}},l={},c=[{value:"Create model",id:"create-model",level:2},{value:"Import  GLTF",id:"import--gltf",level:2},{value:"Visualize parameters",id:"visualize-parameters",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.yg)(p,(0,a.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"gltf-models"},"GLTF models"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.khronos.org/gltf/"},"GLTF")," is a royalty-free specification for the efficient transmission and loading of 3D scenes and models. The format can be compared to ",(0,i.yg)("inlineCode",{parentName:"p"},"JPEG")," for images or ",(0,i.yg)("inlineCode",{parentName:"p"},"MP4")," for video transfer. GLTF models can be downloaded from web sites such as ",(0,i.yg)("a",{parentName:"p",href:"https://sketchfab.com/"},"Sketchfab")," or can be exported from Computer Aided Design (CAD) applications such as ",(0,i.yg)("a",{parentName:"p",href:"https://www.blender.org"},"Blender"),", ",(0,i.yg)("a",{parentName:"p",href:"https://www.autodesk.com/"},"Autodesk Fusion 360")," or ",(0,i.yg)("a",{parentName:"p",href:"https://solidedge.siemens.com/"},"Solid Edge"),". GLTF models include capabilities for animation and can be used to visualize IoT parameters."),(0,i.yg)("h2",{id:"create-model"},"Create model"),(0,i.yg)("p",null,"In this example we create a 3D schematic representation of an electric vehicle with the free and open source software Blender for rendering, modeling and animation. The creation of the 3D model is beyond the scope of this documentation but various videos and tutorials can be found online. The electric vehicle model includes a set of 4 wheels and a chassis. The chassis, or body, includes a transparent plate, 4 dampers and a green battery. It has its own coordinate system named ",(0,i.yg)("inlineCode",{parentName:"p"},"Chassis")," with translation of 0.5 meter in z-direction. Linked to the chassis is a battery, modeled by a green block, with its own local coordinate system named ",(0,i.yg)("inlineCode",{parentName:"p"},"Battery"),". We will show how the transformations of these coordinate systems can be driven by IoT parameters. After the model is completed it is exported to GLTF 2.0 with name 'ev.glb'."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(13952).A,width:"2460",height:"1674"})),(0,i.yg)("h2",{id:"import--gltf"},"Import  GLTF"),(0,i.yg)("p",null,"The file ",(0,i.yg)("inlineCode",{parentName:"p"},"ev.glb")," is imported via the ",(0,i.yg)("inlineCode",{parentName:"p"},"Files")," menu or it can be uploaded by creating a new topic ",(0,i.yg)("inlineCode",{parentName:"p"},"vehicle.A_12_BC.geometry"),". The topics for the state of ",(0,i.yg)("inlineCode",{parentName:"p"},"suspension")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"charge_level")," can be obtained real time via a connector such as for ",(0,i.yg)("a",{parentName:"p",href:"/docs/integrations/tesla"},"Tesla integration"),". "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"vehicle.A_12_BC.geometry=ev.glb\nvehicle.A_12_BC.suspension=0\nvehicle.A_12_BC.charge_level=10\n\nvehicle.A_12_BD.geometry=ev.glb\nvehicle.A_12_BD.suspension=0\nvehicle.A_12_BD.charge_level=10\n...\n")),(0,i.yg)("p",null,"Next we create two topics to link the charge level and suspension to the transformations of the coordinate systems in the GLTF model created in Blender. The link to the transformation in the GLTF is defined by using the prefix ",(0,i.yg)("inlineCode",{parentName:"p"},"node")," followed by the name of the node with the transformation. For example, to raise the suspesion with ",(0,i.yg)("inlineCode",{parentName:"p"},"0.2 meter")," and set the charge level to ",(0,i.yg)("inlineCode",{parentName:"p"},"80%")," you can create the following topics:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"vehicle.A_12_BC.node.battery.scale.y=0.8\nvehicle.A_12_BC.node.chassis.position.z=0.2\n")),(0,i.yg)("p",null,"The scale in y-direction will result in a shorter green box that indicates the state of the battery."),(0,i.yg)("h2",{id:"visualize-parameters"},"Visualize parameters"),(0,i.yg)("p",null,"Instead of using a fixed number for the node transformations you can also use the value of another topic in combination with any Javascrip expression. If the suspension parameter is a range from 0 to 2 you can limit the maximum elevation of the chassis to 20 centimeter by using a ",(0,i.yg)("inlineCode",{parentName:"p"},"Math.max")," expression."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"vehicle.A_12_BC.node.battery.scale.y=vehicle.A_12_BC.charge_level/100\nvehicle.A_12_BC.node.chassis.position.z=Math.min(vehicle.A_12_BC.suspension / 2)*0.1\n")),(0,i.yg)("p",null,"To show the suspension we create a new model and add the topics for the three different vehicles with topics ",(0,i.yg)("inlineCode",{parentName:"p"},"vehicel.A_12_BC"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"vehicle.A_12_BD")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"vehicle.B_12_CF"),". The image shows three different GLTF models with transformation that set the scale of the battery and height of the chassis."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(78252).A,width:"2732",height:"1802"})),(0,i.yg)("p",null,"Using GLTF models to visualize IoT parameters opens new ways to create advanced user interface components. Unlike 2D user interface elements created with HTML, CSS or SVG these components can visualize values in 3D, or even 4D if you slide across the time range for the parameters."))}m.isMDXComponent=!0},13952:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/modeler_gltf_blender-123fd1201fe47a91c322d5a28643db73.png"},78252:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/modeler_gltf_vehicle-74828efe8ee68e5f3237f8166ead2755.png"}}]);