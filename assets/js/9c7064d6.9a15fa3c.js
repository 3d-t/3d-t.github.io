"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[290],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>u});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,u=p["".concat(s,".").concat(h)]||p[h]||m[h]||r;return n?i.createElement(u,o(o({ref:t},c),{},{components:n})):i.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(58168),a=(n(96540),n(15680));const r={sidebar_position:100},o="Animation",l={unversionedId:"visualization/animations",id:"visualization/animations",title:"Animation",description:"So far we have seen how we can set the shape and geometry of 3D objects based on IoT parameters. In this example, we use the built-in animation capabilities to create a rotating windmill on a 3D map. The direction of the windmill and rotation speed are based on real-time weather parameters.",source:"@site/docs/visualization/animations.md",sourceDirName:"visualization",slug:"/visualization/animations",permalink:"/docs/visualization/animations",draft:!1,tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"defaultSidebar",previous:{title:"Scaling",permalink:"/docs/visualization/scaling"},next:{title:"Documentation",permalink:"/docs/api/intro"}},s={},d=[{value:"Rotor",id:"rotor",level:2},{value:"Windmill",id:"windmill",level:2},{value:"Topics",id:"topics",level:2},{value:"Model",id:"model",level:2}],c={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,i.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"animation"},"Animation"),(0,a.yg)("p",null,"So far we have seen how we can set the shape and geometry of 3D objects based on IoT parameters. In this example, we use the built-in animation capabilities to create a rotating windmill on a 3D map. The direction of the windmill and rotation speed are based on real-time weather parameters."),(0,a.yg)("h2",{id:"rotor"},"Rotor"),(0,a.yg)("p",null,"The axis of the rotor is created by a cylinder and a sphere, which are rotated 90 degrees along the X-axis. The blade is created by a cone with a bottom diameter of ",(0,a.yg)("inlineCode",{parentName:"p"},"2")," and a top diameter of ",(0,a.yg)("inlineCode",{parentName:"p"},"0.5"),". The cone is scaled to simulate a flat rotor blade and it has a variable rotation defined by parameter ",(0,a.yg)("inlineCode",{parentName:"p"},"angle"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(14611).A,width:"2732",height:"1802"})),(0,a.yg)("h2",{id:"windmill"},"Windmill"),(0,a.yg)("p",null,"The windmill pole is created by a cone and the rotor is attached to the top, together with a box and a flashlight. The rotor is placed inside an animation block which rotates the part along the Y-axis in a number of seconds. The parameter ",(0,a.yg)("inlineCode",{parentName:"p"},"seconds")," is calculated from the parameter ",(0,a.yg)("inlineCode",{parentName:"p"},"windspeed")," and the parameter ",(0,a.yg)("inlineCode",{parentName:"p"},"direction")," is used to rotate the whole part."),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(3695).A,width:"2732",height:"1802"})),(0,a.yg)("h2",{id:"topics"},"Topics"),(0,a.yg)("p",null,"We can now link the rotation speed and orientation of the windmill based on the actual wind speed and wind direction obtained by the integration with OpenWeather."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"windmill.wm_01.geometry = Windmill(weather.eindhoven.wind_speed, weather.eindhoven.wind_direction)\nwindmill.wm_01.position = 51.607268, 4.053661,0\n\nwindmill.wm_02.geometry = Windmill(weather.eindhoven.wind_speed, weather.eindhoven.wind_direction)\nwindmill.wm_02.position = 51.605886, 4.051398,0\n")),(0,a.yg)("h2",{id:"model"},"Model"),(0,a.yg)("p",null,"The live animation of the windmills in the Cesium environment is created by adding the topics for the three windmills and selecting the `Cesium`` viewer."),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(35865).A,width:"2732",height:"1802"})))}m.isMDXComponent=!0},35865:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/modeler_cesium_windmill-a4e28c4692466bab1c41324651da71f5.png"},14611:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/modeler_solids_rotor-3c16c2c371bab37edef306b74cb11770.png"},3695:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/modeler_solids_windmill-f24285b4bff4c5dc6afd5c87747ffd8f.png"}}]);