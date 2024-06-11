"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3541],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},49557:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(58168),o=(t(96540),t(15680));const i={sidebar_position:10},a="GLTF Rewriting",s={unversionedId:"visualization/concept",id:"visualization/concept",title:"GLTF Rewriting",description:"IoT data from sensors, devices, or humans is acquired via MQTT, REST, or manual import of JSON or CSV files. If necessary the values are transformed by the connector. For example, temperatures in Fahrenheit may be converted to Celcius, or numerical values may be translated into text.",source:"@site/docs/visualization/concept.md",sourceDirName:"visualization",slug:"/visualization/concept",permalink:"/docs/visualization/concept",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"Parts",permalink:"/docs/solids/parts"},next:{title:"Fixed color",permalink:"/docs/visualization/color"}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"gltf-rewriting"},"GLTF Rewriting"),(0,o.yg)("p",null,"IoT data from sensors, devices, or humans is acquired via MQTT, REST, or manual import of JSON or CSV files. If necessary the values are transformed by the connector. For example, temperatures in Fahrenheit may be converted to Celcius, or numerical values may be translated into text. "),(0,o.yg)("p",null,"The geometry of the digital twin buildings and structures can be imported as an IFC file from BIM products such as Revit or ArchiCAD. Mechanical parts can be imported from CAD (Computer-Aided Design) products such as SolidWorks or AutoCAD. If you do not have any geometry you can use the built-in solid modeler to create buildings with rooms and spaces and parametric mechanical parts."),(0,o.yg)("p",null,"The information in the topics is then visualized in a 3D model based on the information stored in the topics. This can happen in various ways. For example, spaces in a 3D building can dynamically be colored to show the temperature or occupancy. The status of a door can be visualized by transforming parts of the 3D model so that the door is rotated or lifted into an open position. The actual position of vehicles in a factory or building site can be visualized by showing a 3D model of the vehicle. The state of an engine or fan can be visualized by showing an animation of a spinning object."),(0,o.yg)("mermaid",{value:"flowchart LR\nsubgraph IoT\nSensors --\x3e Import\nDevices --\x3e Import\nHumans --\x3e Import\nImport[Transformation] --\x3e Topics\nend\nDT[GLTF]\nsubgraph Geometry\nBIM --\x3e IFC\nCAD --\x3e GLTF1[GLTF]\nSolid --\x3e GLTF2[GLTF]\nSolid\nend\nIFC --\x3e DT\nGLTF1 --\x3e DT\nGLTF2 --\x3e DT\nTopics --\x3e Rewriting\nDT --\x3e Rewriting\nRewriting --\x3e GLTF3[GLTF] \nsubgraph Visualization\nColor\nLight\nPosition\nTransformation\nAnimation\nend\nGLTF3 --\x3e Color\nGLTF3 --\x3e Light\nGLTF3 --\x3e Position\nGLTF3 --\x3e Transformation\nGLTF3 --\x3e Animation"}))}d.isMDXComponent=!0}}]);