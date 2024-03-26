"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2982],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var i=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?i.createElement(g,r(r({ref:n},c),{},{components:t})):i.createElement(g,r({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6453:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=t(9668),a=(t(6540),t(5680));const o={sidebar_position:30},r="Cesium",s={unversionedId:"digitaltwin/cesium",id:"digitaltwin/cesium",title:"Cesium",description:"Cesium is a platform for displaying 3D geospatial data like Google Earth. It is designed to combine Geographical Information Systems (GIS) with Architecture Engineering and Construction (AEC) applications. This means that you can navigate a digital map and zoom in to a building downs to the level of building elements such as doors and equipment.",source:"@site/docs/digitaltwin/cesium.md",sourceDirName:"digitaltwin",slug:"/digitaltwin/cesium",permalink:"/docs/digitaltwin/cesium",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"defaultSidebar",previous:{title:"GLTF models",permalink:"/docs/digitaltwin/gltf"},next:{title:"Solids",permalink:"/docs/digitaltwin/solids"}},l={},p=[{value:"Topics",id:"topics",level:2},{value:"Model",id:"model",level:2},{value:"Form",id:"form",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...o}=e;return(0,a.yg)(u,(0,i.A)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"cesium"},"Cesium"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.cesium.com"},"Cesium")," is a platform for displaying 3D geospatial data like Google Earth. It is designed to combine Geographical Information Systems (GIS) with Architecture Engineering and Construction (AEC) applications. This means that you can navigate a digital map and zoom in to a building downs to the level of building elements such as doors and equipment.\nYou can use Cesium to show 3D object on a map where their color and shape depend on IoT parameters. For example, you can show the building occupancy in a campus using colors or show the location of street lights that have a defect. Cesium can be applied for complex 3D structures such as refineries, plants and smart cities. "),(0,a.yg)("h2",{id:"topics"},"Topics"),(0,a.yg)("p",null,"In this example we create 5 buildings with some properties and a geographical location. Instead of using a file with a GLTF or IFC model we now use the build-in geometric primitives like ",(0,a.yg)("inlineCode",{parentName:"p"},"box"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"cylinder")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"sphere"),". We also define a topic for the ",(0,a.yg)("inlineCode",{parentName:"p"},"position")," in GPS coordinates and the ",(0,a.yg)("inlineCode",{parentName:"p"},"orientation")," of the building."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"campus.parking.p1.name = blue\ncampus.parking.p1.geometry = box(61, 32, 50)\ncampus.parking.p1.position = 51.412549786755015,5.454481803707153,0\ncampus.parking.p1.orientation = 17\n\ncampus.parking.p2.name = blue\ncampus.parking.p2.geometry = box(61, 32, 50)\ncampus.parking.p2.position = 51.41277531843427,5.455779596874186, 0\n...\n")),(0,a.yg)("h2",{id:"model"},"Model"),(0,a.yg)("p",null,"Next we create a new model with name ",(0,a.yg)("inlineCode",{parentName:"p"},"Campus")," and add three topics ",(0,a.yg)("inlineCode",{parentName:"p"},"campus.parking"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"campus.office")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"campus.restaurant"),". Since we want to show the location on the earth surface we select the ",(0,a.yg)("inlineCode",{parentName:"p"},"Cesium")," viewer. x"),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(686).A,width:"2732",height:"1802"})),(0,a.yg)("p",null,"You can toggle the switches for the topics to turn the display on or of or change the transparency with the slider. "),(0,a.yg)("h2",{id:"form"},"Form"),(0,a.yg)("p",null,"To display the basic information on the builings you can add the following form:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Campus\n\nName\n\nType\n\nOrientation\n[000]\n")),(0,a.yg)("p",null,"If you click on a building the form is displayed and you can change the values such as the orientation."))}d.isMDXComponent=!0},686:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/modeler_cesium_campus-0f048af75c16c5188aef0cc1ed587276.png"}}]);