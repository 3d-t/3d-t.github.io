"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[290],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>u});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(t),h=a,u=m["".concat(s,".").concat(h)]||m[h]||c[h]||o;return t?i.createElement(u,r(r({ref:n},p),{},{components:t})):i.createElement(u,r({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<o;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},814:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(58168),a=(t(96540),t(15680));const o={sidebar_position:100},r="Animation",l={unversionedId:"visualization/animations",id:"visualization/animations",title:"Animation",description:"So far we have seen how we can set the shape and geometry of 3D objects based on IoT parameters. In this example, we use the built-in animation capabilities to create a rotating windmill on a 3D map. The direction of the windmill and rotation speed are based on real-time weather parameters.",source:"@site/docs/visualization/animations.md",sourceDirName:"visualization",slug:"/visualization/animations",permalink:"/docs/visualization/animations",draft:!1,tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"defaultSidebar",previous:{title:"Location",permalink:"/docs/visualization/location"},next:{title:"Documentation",permalink:"/docs/api/intro"}},s={},d=[{value:"Solids",id:"solids",level:2},{value:"Topics",id:"topics",level:2},{value:"Model",id:"model",level:2},{value:"Explanation",id:"explanation",level:2}],p={toc:d},m="wrapper";function c(e){let{components:n,...o}=e;return(0,a.yg)(m,(0,i.A)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"animation"},"Animation"),(0,a.yg)("p",null,"So far we have seen how we can set the shape and geometry of 3D objects based on IoT parameters. In this example, we use the built-in animation capabilities to create a rotating windmill on a 3D map. The direction of the windmill and rotation speed are based on real-time weather parameters."),(0,a.yg)("h2",{id:"solids"},"Solids"),(0,a.yg)("p",null,"The axis of the rotor is created by a cylinder and a sphere, which are rotated 90 degrees along the X-axis. The blade is created by a cone with a bottom diameter of ",(0,a.yg)("inlineCode",{parentName:"p"},"2")," and a top diameter of ",(0,a.yg)("inlineCode",{parentName:"p"},"0.5"),". The cone is scaled to simulate a flat rotor blade and it has a variable rotation defined by parameter ",(0,a.yg)("inlineCode",{parentName:"p"},"angle"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(5902).A,width:"1200",height:"750"})),(0,a.yg)("p",null,"The windmill pole is created by a cone and the rotor is attached to the top, together with a box and a flashlight. The rotor is placed inside an animation block which rotates the part along the Y-axis in a number of seconds. The parameter ",(0,a.yg)("inlineCode",{parentName:"p"},"seconds")," is calculated from the parameter ",(0,a.yg)("inlineCode",{parentName:"p"},"windspeed")," and the parameter ",(0,a.yg)("inlineCode",{parentName:"p"},"direction")," is used to rotate the whole part. "),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(78776).A,width:"1200",height:"750"})),(0,a.yg)("h2",{id:"topics"},"Topics"),(0,a.yg)("p",null,"We can now link a topic to control the animation defined in the GLTF model created by the solid. The animations are named sequentially ",(0,a.yg)("inlineCode",{parentName:"p"},"animation_1"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"animation_2"),", etc. The topic ",(0,a.yg)("inlineCode",{parentName:"p"},"windmill.A01.B.animation")," contains the name of the animation and the sibling topic ",(0,a.yg)("inlineCode",{parentName:"p"},"speed")," defines the speed multiplier for the animation. For example, if ",(0,a.yg)("inlineCode",{parentName:"p"},"0.5")," the animation of the rotor rotates at 50% of the speed defined in the solid. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"windmill.A01.A.geometry = Windmill.gltf\nwindmill.A01.B.geometry = Windmill.gltf\nwindmill.A01.B.animation = animation_1\nwindmill.A01.B.speed = 2\nwindmill.A01.B.rotation = 0,0,90\n")),(0,a.yg)("p",null,"Instead of setting the speed manually, you can also enter a JavaScript expression that sets the speed depending on the actual wind speed obtained via a connector to OpenWeather. For example, the expression below sets the speed of the rotor to 10% of the wind speed with a maximum of 5."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"windmill.A01.B.speed = Math.max(weather.amsterdam.windspeed/10, 5)\n")),(0,a.yg)("h2",{id:"model"},"Model"),(0,a.yg)("p",null,"A model is created by including the topics for the dike and the two windmills. If you click on the windmill you can edit the value of the topics to control the direction and speed of the rotor."),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(78382).A,width:"1200",height:"750"})),(0,a.yg)("p",null,"The chart below shows how the topics and subtopics are linked to the nodes in the GLTF model."),(0,a.yg)("h2",{id:"explanation"},"Explanation"),(0,a.yg)("p",null,"A GLTF model contains a scene with a 3D object and a list of animations. Each animation has a name and associated data such as a list of times and transformations (keyframes) and a parameter ",(0,a.yg)("inlineCode",{parentName:"p"},"timeScale"),". In this example, we set the ",(0,a.yg)("inlineCode",{parentName:"p"},"timeScale")," variable of the animation with a name defined in the ",(0,a.yg)("inlineCode",{parentName:"p"},".animation"),". The ",(0,a.yg)("inlineCode",{parentName:"p"},"timeScale")," value is set by defining a sibling topic ",(0,a.yg)("inlineCode",{parentName:"p"},"speed"),". When the speed is ",(0,a.yg)("inlineCode",{parentName:"p"},"1")," the animation runs at the original speed."),(0,a.yg)("mermaid",{value:"flowchart \n    direction TB\n    subgraph Topics\n        WindmillA[windmill.A01.A]\n        WindmillA --\x3e GeometryA[.geometry \\n Windmill.gltf]\n        WindmillB[windmill.A01.B]\n        WindmillB --\x3e Geometry[.geometry \\n Windmill.gltf]\n        WindmillB --\x3e Animation[.animation \\n animation_1]\n        WindmillB --\x3e Speed[.speed\\n 2]\n    end\n    subgraph GLTF\n        direction TB\n        Gltf --\x3e Scene\n        Scene --\x3e GLTFWindmill[Windmill]\n        Gltf --\x3e Animations --\x3e Actions\n        Actions[Action\\nanimation_1] --\x3e timeScale \n    end\n    Geometry --\x3e Gltf\n    GeometryA --\x3e Gltf\n    Speed --\x3e timeScale "}))}c.isMDXComponent=!0},78382:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/visualization_model_windmill-735d0b40c37ef043e13424f73f13262b.png"},5902:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/visualization_solid_rotor-a504df5b7787d01a3b582f376ecc4f71.png"},78776:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/visualization_solid_windmill-ebd64455529486632312bebdddf599c8.png"}}]);