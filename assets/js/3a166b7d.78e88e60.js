(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5903],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,h=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return n?i.createElement(h,a(a({ref:t},d),{},{components:n})):i.createElement(h,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6511:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var i=n(2122),r=n(9756),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:10},l="GLTF models",c={unversionedId:"digitaltwin/gltf",id:"digitaltwin/gltf",isDocsHomePage:!1,title:"GLTF models",description:"GLTF is a royalty-free specification for the efficient transmission and loading of 3D scenes and models. The format can be compared to JPEG for images or MP4 for video transfer. GLTF models can be downloaded from web sites such as Sketchfab or can be exported from Computer Aided Design (CAD) applications such as Blender, Autodesk Fusion 360 or Solid Edge. GLTF models include capabilities for animation and can be used to visualize IoT parameters.",source:"@site/docs/digitaltwin/gltf.md",sourceDirName:"digitaltwin",slug:"/digitaltwin/gltf",permalink:"/docs/digitaltwin/gltf",version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"BIM models",permalink:"/docs/digitaltwin/ifc"},next:{title:"Booleans",permalink:"/docs/digitaltwin/booleans"}},d=[{value:"Create model",id:"create-model",children:[]},{value:"Import  GLTF",id:"import--gltf",children:[]},{value:"Visualize parameters",id:"visualize-parameters",children:[]}],p={toc:d};function m(e){var t=e.components,s=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gltf-models"},"GLTF models"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.khronos.org/gltf/"},"GLTF")," is a royalty-free specification for the efficient transmission and loading of 3D scenes and models. The format can be compared to ",(0,o.kt)("inlineCode",{parentName:"p"},"JPEG")," for images or ",(0,o.kt)("inlineCode",{parentName:"p"},"MP4")," for video transfer. GLTF models can be downloaded from web sites such as ",(0,o.kt)("a",{parentName:"p",href:"https://sketchfab.com/"},"Sketchfab")," or can be exported from Computer Aided Design (CAD) applications such as ",(0,o.kt)("a",{parentName:"p",href:"https://www.blender.org"},"Blender"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.autodesk.com/"},"Autodesk Fusion 360")," or ",(0,o.kt)("a",{parentName:"p",href:"https://solidedge.siemens.com/"},"Solid Edge"),". GLTF models include capabilities for animation and can be used to visualize IoT parameters."),(0,o.kt)("h2",{id:"create-model"},"Create model"),(0,o.kt)("p",null,"In this example we create a 3D schematic representation of an electric vehicle with the free and open source software Blender for rendering, modeling and animation. The creation of the 3D model is beyond the scope of this documentation but various videos and tutorials can be found online. The electric vehicle model includes a set of 4 wheels and a chassis. The chassis, or body, includes a transparent plate, 4 dampers and a green battery. It has its own coordinate system named ",(0,o.kt)("inlineCode",{parentName:"p"},"Chassis")," with translation of 0.5 meter in z-direction. Linked to the chassis is a battery, modeled by a green block, with its own local coordinate system named ",(0,o.kt)("inlineCode",{parentName:"p"},"Battery"),". We will show how the transformations of these coordinate systems can be driven by IoT parameters. After the model is completed it is exported to GLTF 2.0 with name 'ev.glb'."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6412).Z})),(0,o.kt)("h2",{id:"import--gltf"},"Import  GLTF"),(0,o.kt)("p",null,"The file ",(0,o.kt)("inlineCode",{parentName:"p"},"ev.glb")," is imported via the ",(0,o.kt)("inlineCode",{parentName:"p"},"Files")," menu or it can be uploaded by creating a new topic ",(0,o.kt)("inlineCode",{parentName:"p"},"vehicle.A_12_BC.geometry.file"),". The topics for the state of ",(0,o.kt)("inlineCode",{parentName:"p"},"suspension")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"charge_level")," can be obtained real time via a connector such as for ",(0,o.kt)("a",{parentName:"p",href:"/docs/integrations/tesla"},"Tesla integration"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vehicle.A_12_BC.geometry.file=ev.glb\nvehicle.A_12_BC.suspension=0\nvehicle.A_12_BC.charge_level=10\n\nvehicle.A_12_BD.geometry.file=ev.glb\nvehicle.A_12_BD.suspension=0\nvehicle.A_12_BD.charge_level=10\n...\n")),(0,o.kt)("p",null,"Next we create two topics to link the charge level and suspension to the transformations of the coordinate systems in the GLTF model created in Blender. The link to the transformation in the GLTF is defined by using the prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"geometry.node")," followed by the name of the node with the transformation. For example, to raise the suspesion with ",(0,o.kt)("inlineCode",{parentName:"p"},"0.2 meter")," and set the charge level to ",(0,o.kt)("inlineCode",{parentName:"p"},"80%")," you can create the following topics:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vehicle.A_12_BC.geometry.node.battery.scale.y=0.8\nvehicle.A_12_BC.geometry.node.chassis.position.z=0.2\n")),(0,o.kt)("p",null,"The scale in y-direction will result in a shorter green box that indicates the state of the battery."),(0,o.kt)("h2",{id:"visualize-parameters"},"Visualize parameters"),(0,o.kt)("p",null,"Instead of using a fixed number for the node transformations you can also use the value of another topic in combination with any Javascrip expression. If the suspension parameter is a range from 0 to 2 you can limit the maximum elevation of the chassis to 20 centimeter by using a ",(0,o.kt)("inlineCode",{parentName:"p"},"Math.max")," expression."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vehicle.A_12_BC.geometry.node.battery.scale.y=vehicle.A_12_BC.charge_level/100\nvehicle.A_12_BC.geometry.node.chassis.position.z=Math.min(vehicle.A_12_BC.suspension / 2)*0.1\n")),(0,o.kt)("p",null,"To show the suspension we create a new model and add the topics for the three different vehicles with topics ",(0,o.kt)("inlineCode",{parentName:"p"},"vehicel.A_12_BC"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"vehicle.A_12_BD")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"vehicle.B_12_CF"),". The image shows three different GLTF models with transformation that set the scale of the battery and height of the chassis."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4981).Z})),(0,o.kt)("p",null,"Using GLTF models to visualize IoT parameters opens new ways to create advanced user interface components. Unlike 2D user interface elements created with HTML, CSS or SVG these components can visualize values in 3D, or even 4D if you slide across the time range for the parameters."))}m.isMDXComponent=!0},6412:function(e,t,n){"use strict";t.Z=n.p+"assets/images/modeler_gltf_blender-123fd1201fe47a91c322d5a28643db73.png"},4981:function(e,t,n){"use strict";t.Z=n.p+"assets/images/modeler_gltf_vehicle-74828efe8ee68e5f3237f8166ead2755.png"}}]);