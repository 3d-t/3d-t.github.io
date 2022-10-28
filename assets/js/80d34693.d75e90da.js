(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4753],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?i.createElement(f,a(a({ref:t},l),{},{components:n})):i.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2446:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var i=n(2122),r=n(9756),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:17},c="Cesium",p={unversionedId:"digitaltwin/cesium",id:"digitaltwin/cesium",isDocsHomePage:!1,title:"Cesium",description:"Cesium is a platform for displaying 3D geospatial data like Google Earth. It is intended to combine Geographical Information Systems (GIS) with Architecture Engineering and Construction (AEC) applications. You can use Cesium to show 3D object on a map where their color and shape depend on IoT parameters. For example, you can show the building occupancy in a campus using colors or show the location of street lights that have a defect. Cesium can be applied for complex 3D structures such as refineries, plants and smart cities.",source:"@site/docs/digitaltwin/cesium.md",sourceDirName:"digitaltwin",slug:"/digitaltwin/cesium",permalink:"/docs/digitaltwin/cesium",version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"defaultSidebar",previous:{title:"Booleans",permalink:"/docs/digitaltwin/booleans"},next:{title:"Transformations",permalink:"/docs/digitaltwin/transformations"}},l=[{value:"Topics",id:"topics",children:[]},{value:"Model",id:"model",children:[]},{value:"Form",id:"form",children:[]}],u={toc:l};function m(e){var t=e.components,s=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cesium"},"Cesium"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.cesium.com"},"Cesium")," is a platform for displaying 3D geospatial data like Google Earth. It is intended to combine Geographical Information Systems (GIS) with Architecture Engineering and Construction (AEC) applications. You can use Cesium to show 3D object on a map where their color and shape depend on IoT parameters. For example, you can show the building occupancy in a campus using colors or show the location of street lights that have a defect. Cesium can be applied for complex 3D structures such as refineries, plants and smart cities. "),(0,o.kt)("h2",{id:"topics"},"Topics"),(0,o.kt)("p",null,"In this example we create 5 buildings with some properties and a geographical location. Instead of using a file with a GLTF or IFC model we now use the build-in geometric primitives like ",(0,o.kt)("inlineCode",{parentName:"p"},"box"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"cylinder")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sphere"),". We also define a topic for the ",(0,o.kt)("inlineCode",{parentName:"p"},"position")," in GPS coordinates and the ",(0,o.kt)("inlineCode",{parentName:"p"},"orientation")," of the building."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"campus.parking.p1.name = blue\ncampus.parking.p1.geometry = box(61, 32, 50)\ncampus.parking.p1.position = 51.412549786755015,5.454481803707153,0\ncampus.parking.p1.orientation = 17\n\ncampus.parking.p2.name = blue\ncampus.parking.p2.geometry = box(61, 32, 50)\ncampus.parking.p2.position = 51.41277531843427,5.455779596874186, 0\n...\n")),(0,o.kt)("h2",{id:"model"},"Model"),(0,o.kt)("p",null,"Next we create a new model with name ",(0,o.kt)("inlineCode",{parentName:"p"},"Campus")," and add three topics ",(0,o.kt)("inlineCode",{parentName:"p"},"campus.parking"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"campus.office")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"campus.restaurant"),". Since we want to show the location on the earth surface we select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cesium")," viewer. x"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6082).Z})),(0,o.kt)("p",null,"You can toggle the switches for the topics to turn the display on or of or change the transparency with the slider. "),(0,o.kt)("h2",{id:"form"},"Form"),(0,o.kt)("p",null,"To display the basic information on the builings you can add the following form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Campus\n\nName\n\nType\n\nOrientation\n[000]\n")),(0,o.kt)("p",null,"If you click on a building the form is displayed and you can change the values such as the orientation."))}m.isMDXComponent=!0},6082:function(e,t,n){"use strict";t.Z=n.p+"assets/images/modeler_cesium_campus-0f048af75c16c5188aef0cc1ed587276.png"}}]);