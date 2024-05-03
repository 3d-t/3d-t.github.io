"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5389],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=i,y=h["".concat(s,".").concat(d)]||h[d]||g[d]||o;return n?a.createElement(y,r(r({ref:t},p),{},{components:n})):a.createElement(y,r({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(58168),i=(n(96540),n(15680));const o={sidebar_position:30},r="Light",l={unversionedId:"visualization/lights",id:"visualization/lights",title:"Light",description:"In this example, we show how you can visualize IoT parameters by setting the intensity and color of lights. You can use this to visualize traffic signs in a smart city or show warning signs.",source:"@site/docs/visualization/lights.md",sourceDirName:"visualization",slug:"/visualization/lights",permalink:"/docs/visualization/lights",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"defaultSidebar",previous:{title:"Color",permalink:"/docs/visualization/color"},next:{title:"Transformation",permalink:"/docs/visualization/transformation"}},s={},c=[{value:"Solids",id:"solids",level:2},{value:"Topics",id:"topics",level:2},{value:"Form",id:"form",level:2},{value:"Model",id:"model",level:2},{value:"Explanation",id:"explanation",level:2}],p={toc:c},h="wrapper";function g(e){let{components:t,...o}=e;return(0,i.yg)(h,(0,a.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"light"},"Light"),(0,i.yg)("p",null,"In this example, we show how you can visualize IoT parameters by setting the intensity and color of lights. You can use this to visualize traffic signs in a smart city or show warning signs."),(0,i.yg)("h2",{id:"solids"},"Solids"),(0,i.yg)("p",null,"If you do not have a GLTF model of a railway sign you can create one with the built-in solid modeler. First, create the lamp from two flat cylinders and a flat block. The slanted cylinders are created by subtracting a cylinder from a slightly larger cylinder. The result, a hollow cylinder, is combined with a ",(0,i.yg)("inlineCode",{parentName:"p"},"Wegde")," using the ",(0,i.yg)("inlineCode",{parentName:"p"},"Intersect")," operation."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(92994).A,width:"1200",height:"750"})),(0,i.yg)("p",null,"The three lights are created with a repeat statement that includes the text ",(0,i.yg)("inlineCode",{parentName:"p"},"top, center, bottom"),". This creates three objects that are named ",(0,i.yg)("inlineCode",{parentName:"p"},"top"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"center"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"bottom"),". These names are used to link the topics to the geometry in the solid. The final solid is stored as ",(0,i.yg)("inlineCode",{parentName:"p"},"Lamp"),"."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(7001).A,width:"1200",height:"750"})),(0,i.yg)("p",null,"The signal is created by adding the ",(0,i.yg)("inlineCode",{parentName:"p"},"Lamp")," to a tall cylinder that represents the pole. The stairs are created by a repeat statement that creates steps. The new object is saved as ",(0,i.yg)("inlineCode",{parentName:"p"},"Signal"),"."),(0,i.yg)("p",null,"The\n",(0,i.yg)("img",{src:n(28748).A,width:"1200",height:"750"})),(0,i.yg)("p",null,"The railway station is created by two large blocks that form the platforms on both sides. The street lights and tracks are created separately and are included. The ",(0,i.yg)("inlineCode",{parentName:"p"},"move")," blocks are used to arrange the parts on the platform. Finally, the part ",(0,i.yg)("inlineCode",{parentName:"p"},"Signal")," is included and positioned in the front. Note that the signal only shows the default colors that have been defined in the model. Next, we will connect the color of the lights to the value of the topics."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(67006).A,width:"1200",height:"750"})),(0,i.yg)("h2",{id:"topics"},"Topics"),(0,i.yg)("p",null,"The main topic ",(0,i.yg)("inlineCode",{parentName:"p"},"railway.station")," has a subtopic ",(0,i.yg)("inlineCode",{parentName:"p"},"geometry")," that includes the name of the GLTF file. It also has a subtopic ",(0,i.yg)("inlineCode",{parentName:"p"},"signal")," that indicates the color of the signal. The signal has three sub topics, that represent the top, center and bottom lights. Each light is connected to a node in the GLTF model that has the geometry of the light, in this case a small cylinder that emits light. Each light also has a subtopic that contains the value of the color of the light. You can specify the color of each light by entering a JavaScript expression that may include values of other topics. In this case, we use a ternary expression that looks up the value of the topic ",(0,i.yg)("inlineCode",{parentName:"p"},"railway.station.signal"),". If the value matches the color defined in the topic the light will emit that color, otherwise it is turned to black. "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"railway.station.name = Station L01\nrailway.station.geometry = Station.gltf\nrailway.station.signal = orange\n\nrailway.station.signal.top.node = Signal_Lamp_top\nrailway.station.signal.top.emissive = railway.station.signal === 'green' ? 'green' : 'black'\n\nrailway.station.signal.top.node = Signal_Lamp_center\nrailway.station.signal.top.emissive = railway.station.signal === 'orange' ? 'orange' : 'black'\n\nrailway.station.signal.top.node = Signal_Lamp_bottom\nrailway.station.signal.top.emissive = railway.station.signal === 'green' ? 'green' : 'black'\n")),(0,i.yg)("h2",{id:"form"},"Form"),(0,i.yg)("p",null,"To control the value of the signal we create a form for the railway station that includes the color of the signal. "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"Station\n\nName\n\nSignal\n[\nred,\norange,\ngreen\n]\n")),(0,i.yg)("h2",{id:"model"},"Model"),(0,i.yg)("p",null,"Create a new model and include the main topic ",(0,i.yg)("inlineCode",{parentName:"p"},"railway.station"),". The model opens and the three lights of the signal are recolored so that only the center light shows orange. When you double-click on the sign the form opens. Select the ",(0,i.yg)("inlineCode",{parentName:"p"},"edit")," icon and change the value to ",(0,i.yg)("inlineCode",{parentName:"p"},"red")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"green"),". When you update the model the center light turns off and one of the other lights will be activated."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(48826).A,width:"1200",height:"750"})),(0,i.yg)("h2",{id:"explanation"},"Explanation"),(0,i.yg)("p",null,"To apply dynamic coloring the topics are connected to the GLTF model and the nodes in the model. The ",(0,i.yg)("inlineCode",{parentName:"p"},"geometry")," subtopic defines the name of the model and the ",(0,i.yg)("inlineCode",{parentName:"p"},"node")," subtopic defines the name of the node. You can then specify the subtopics that you want to visualize. For example, occupancy, CO2 level, or temperature. The parameter values are converted to colors by using a form that includes color mapping."),(0,i.yg)("mermaid",{value:"flowchart \n    direction TB\n    subgraph Topics\n        Station[railway.station]\n        Signal[.signal \\n orange]\n        Geometry[.geometry \\n A.gltf]\n        Station --\x3e Signal\n        Station --\x3e Geometry\n    end\n    subgraph GLTF\n        direction TB\n        GLTFStation[Station] --\x3e GLTFSignal\n        GLTFSignal[Signal] --\x3e Lamp\n        Lamp --\x3e Top\n        Lamp --\x3e Center\n        Lamp --\x3e Bottom\n    end\n    Geometry --\x3e GLTFStation\n    Top --JavaScript expression--\x3e Signal\n    Center --JavaScript expression--\x3e Signal\n    Bottom --JavaScript expression--\x3e Signal\n    style Station fill:#fcc\n    style Signal fill:#fcc\n    style Geometry fill:#fcc"}))}g.isMDXComponent=!0},92994:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/visualization_solid_lamp_1-118aab1957b0f7581c541baeedd54c87.png"},7001:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/visualization_solid_lamp_2-4fe918803a8e1a259d88fa8c401c1482.png"},28748:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/visualization_solid_signal-523efbd8e629bd5ff4a508d9e1ede67b.png"},67006:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/visualization_solid_station-c7fb6708a0bffeee7dbe5167843e0bd3.png"},48826:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/visualization_station-246d8dcf49a1065dc7f1f40b45e08f86.png"}}]);