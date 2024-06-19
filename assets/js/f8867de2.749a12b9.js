"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8739],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>h});var o=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return t?o.createElement(h,i(i({ref:n},p),{},{components:t})):o.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77652:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=t(58168),a=(t(96540),t(15680));const r={sidebar_position:40},i="Transformation",s={unversionedId:"visualization/transformation",id:"visualization/transformation",title:"Transformation",description:"In this section, we explain how you can apply transformations to 3D objects and how you can use expressions to implement geometric constraints between nodes in a GLTF model.  Transformations on 3D objects can be used to visualize the state of an object depending on IoT parameters. For example, you can show the location of an elevator in a building or the position of the arm of a robot in a factory.",source:"@site/docs/visualization/transformation.md",sourceDirName:"visualization",slug:"/visualization/transformation",permalink:"/docs/visualization/transformation",draft:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"defaultSidebar",previous:{title:"Visibility",permalink:"/docs/visualization/visibile"},next:{title:"Scaling",permalink:"/docs/visualization/scaling"}},l={},c=[{value:"Solids",id:"solids",level:2},{value:"Topics",id:"topics",level:2},{value:"Model",id:"model",level:2},{value:"Explanation",id:"explanation",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...r}=e;return(0,a.yg)(d,(0,o.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"transformation"},"Transformation"),(0,a.yg)("p",null,"In this section, we explain how you can apply transformations to 3D objects and how you can use expressions to implement geometric constraints between nodes in a GLTF model.  Transformations on 3D objects can be used to visualize the state of an object depending on IoT parameters. For example, you can show the location of an elevator in a building or the position of the arm of a robot in a factory."),(0,a.yg)("h2",{id:"solids"},"Solids"),(0,a.yg)("p",null,"This example shows how IoT parameters stored in topics can be used to translate and rotate objects in a small crane, or cherry picker. The body of the crane is constructed from a block and a raised cylinder near the edge as shown below. The two objects are shrink-wrapped into a new body using the ",(0,a.yg)("inlineCode",{parentName:"p"},"Hull")," operation."),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(533).A,width:"1200",height:"750"})),(0,a.yg)("p",null,"The crane object includes a part ",(0,a.yg)("inlineCode",{parentName:"p"},"Arm")," that can be rotated in two directions and that can be extended so that the grey inner shaft moves out of the yellow outer shaft. The ",(0,a.yg)("inlineCode",{parentName:"p"},"Basket")," is included as a part in the ",(0,a.yg)("inlineCode",{parentName:"p"},"Extension"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(27669).A,width:"1200",height:"750"})),(0,a.yg)("h2",{id:"topics"},"Topics"),(0,a.yg)("p",null,"The example shows how you can control the angle and extension of the arm. First, we create a topic to link to the GLTF file, a topic to set the angle of the arm, and a topic to set the extension."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"crane.T01.geometry = Crane.gltf\ncrane.T01.angle = 0\ncrane.T01.extension = 0\n")),(0,a.yg)("p",null,"Next, we create two topics to control the extension of the arm. The first topic links to the node that controls the extension. The second topic sets a constraint on the maximum extension to ",(0,a.yg)("inlineCode",{parentName:"p"},"3")," units, by using the JavaScript ",(0,a.yg)("inlineCode",{parentName:"p"},"Math.min()")," function."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"crane.T01.extension.node = Extension\ncrane.T01.extension.translation.y = Math.min(3, crane.T01.extension)\n")),(0,a.yg)("p",null,"For the rotation of the arm we link the rotation in z-direction to the ",(0,a.yg)("inlineCode",{parentName:"p"},"angle")," topic of the crane. Note that if the arm rotates in one direction, the basket should rotate in the opposite direction to ensure it stays horizontal."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"crane.T01.arm.node = Arm\ncrane.T01.arm.rotation.z = crane.T01.angle\ncrane.T01.basket.node = Basket\ncrane.T01.basket.rotation.z = -crane.T01.angle\n")),(0,a.yg)("p",null,"You can now control the crane by setting the value of the ",(0,a.yg)("inlineCode",{parentName:"p"},"extension")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"angle")," topics."),(0,a.yg)("h2",{id:"model"},"Model"),(0,a.yg)("p",null,"Create a new model and include the topic for the crane. If you click on the crane a list of topics is displayed. To change the value of the topics click on the ",(0,a.yg)("inlineCode",{parentName:"p"},"edit")," icon, set the values, and click ",(0,a.yg)("inlineCode",{parentName:"p"},"update"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(33651).A,width:"1200",height:"750"})),(0,a.yg)("h2",{id:"explanation"},"Explanation"),(0,a.yg)("p",null,"A GLTF model has an internal hierarchy, a so-called tree of nodes. When applying a translation or rotation to a node all child nodes are translated or rotated as well. For example, when a translation is applied to the whole model is moved. When a rotation is applied to the arm, the extension and basket are also rotated because they are part of the arm. "),(0,a.yg)("mermaid",{value:"flowchart \n    direction TB\n    subgraph Topics\n        Crane[crane.T01]\n        Arm[.arm]\n        Extension[.extension]\n        Crane --\x3e Arm\n        Crane --\x3e Extension\n        Crane --\x3e Basket[.basket]\n        Arm --\x3e Rotation[.rotation.z]\n        Extension --\x3e Translation[.translation.y]\n        Basket --\x3e RotationB[.rotation.z]\n    end\n    subgraph GLTF\n        direction TB\n        GLTFCrane[Crane]\n        GLTFArm[Arm]\n        GLTFExtension[Extension]\n        GLTFBasket[Basket]\n        GLTFCrane --\x3e GLTFArm\n        GLTFArm --\x3e GLTFExtension\n        GLTFExtension --\x3e GLTFBasket\n    end\n    Translation --\x3e GLTFExtension\n    Rotation --\x3e GLTFArm\n    RotationB --\x3e GLTFBasket"}))}u.isMDXComponent=!0},33651:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/visualization_model_crane-565fdaf80ea563ca079082179b834297.png"},27669:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/visualization_solid_crane-d5cde48d585c6b7f1a4b1cb6264fa379.png"},533:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/visualization_solid_hull-2455ef1cd7b961fda4b3c3b901796870.png"}}]);