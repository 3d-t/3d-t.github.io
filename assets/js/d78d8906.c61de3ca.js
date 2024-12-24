"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6463],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var o=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,m=d["".concat(c,".").concat(u)]||d[u]||h[u]||a;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(58168),i=(n(96540),n(15680));const a={sidebar_position:18},r="Fixed color",l={unversionedId:"visualization/color",id:"visualization/color",title:"Fixed color",description:"With dynamic coloring, we convert the values in the topics to a color and then apply to color to elements in the model. For example, you can show all rooms that are occupied in red or show the temperature inside a room with colors from blue to red.  To connect the topics to the 3D model we need to specify the name of the 3D model and the node in the 3D model to which the value applies. The model is a GLTF file that is either created with the built-in modeler or can be imported from CAD software such as Blender.",source:"@site/docs/visualization/color.md",sourceDirName:"visualization",slug:"/visualization/color",permalink:"/docs/visualization/color",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"defaultSidebar",previous:{title:"glTF Rewriting",permalink:"/docs/visualization/concept"},next:{title:"Dynamic coloring",permalink:"/docs/visualization/colormap"}},c={},s=[{value:"Solid",id:"solid",level:2},{value:"Topics",id:"topics",level:2},{value:"Model",id:"model",level:2},{value:"Explanation",id:"explanation",level:2}],p={toc:s},d="wrapper";function h(e){let{components:t,...a}=e;return(0,i.yg)(d,(0,o.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"fixed-color"},"Fixed color"),(0,i.yg)("p",null,"With dynamic coloring, we convert the values in the topics to a color and then apply to color to elements in the model. For example, you can show all rooms that are ",(0,i.yg)("inlineCode",{parentName:"p"},"occupied")," in ",(0,i.yg)("inlineCode",{parentName:"p"},"red")," or show the temperature inside a room with colors from blue to red.  To connect the topics to the 3D model we need to specify the name of the 3D model and the node in the 3D model to which the value applies. The model is a GLTF file that is either created with the built-in modeler or can be imported from CAD software such as Blender. "),(0,i.yg)("h2",{id:"solid"},"Solid"),(0,i.yg)("p",null,"In this example, we create an apartment building using the built-in solid modeler. The building includes 9 stories, a basement, and a roof."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(40163).A,width:"1200",height:"600"})),(0,i.yg)("h2",{id:"topics"},"Topics"),(0,i.yg)("p",null,"The main topic for this example if ",(0,i.yg)("inlineCode",{parentName:"p"},"site.B02"),". In the subtopic ",(0,i.yg)("inlineCode",{parentName:"p"},"site.B02.geometry")," we specify the name of the GLTF file. Then for each space in the building, we create three topics: the value of the temperature, the name of the node in the GLTF file, and the color. "),(0,i.yg)("p",null,"The topics can be imported from a file or created manually.  You need to specify the name of the model in a topic that ends with ",(0,i.yg)("inlineCode",{parentName:"p"},"geometry"),". All subtopics will automatically inherit the reference to the model. For each area we want to visualize we need to add a topic that ends with ",(0,i.yg)("inlineCode",{parentName:"p"},"node")," and enter the name of the node in the model that represents the building element that needs to be colored. In this case, we will use the nodes whose name includes ",(0,i.yg)("inlineCode",{parentName:"p"},"IfcSpace"),".    "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"site.B02.geometry = Building.gltf\nsite.B02.area_1_a_Living.temperature = 24\nsite.B02.area_1_a_Living.node = IcfSpace_1_a_Unit_Living\nsite.B02.area_1_a_Living.color = ['blue', 'green', 'red'][Math.ceil((site.B02.area_1_a_Living.temperature - 15) / 3)]\n")),(0,i.yg)("p",null,"Note that the color of the node is defined by a JavaScript expression. The expression contains an array of color and the actual color is defined by the index in the array. For example,"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Javascript"},"['blue', 'green', 'red'][0] // 'blue'\n['blue', 'green', 'red'][2] // 'red'\n")),(0,i.yg)("p",null,"The index in the array of colors is defined by the value of the topic ",(0,i.yg)("inlineCode",{parentName:"p"},"site.B02.area_1_a_Living.temperature"),", in this example it is ",(0,i.yg)("inlineCode",{parentName:"p"},"24"),". Since all temperatures in this example are between 15 and 25 degrees Celcius we first subtract the value ",(0,i.yg)("inlineCode",{parentName:"p"},"15")," and then divide by ",(0,i.yg)("inlineCode",{parentName:"p"},"3")," and then use the JavaScript ",(0,i.yg)("inlineCode",{parentName:"p"},"Math.ceil()")," function to convert this to an integer number."),(0,i.yg)("p",null,"Instead of using a JavaScript expression, you can also specify the color directly as a text or hexadecimal value. The value of the color can be set by a JavaScript expression in the import connector, depending on the value of the ",(0,i.yg)("inlineCode",{parentName:"p"},"temperature")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"humidity")," field. "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"site.B02.area_1_a_Living.color = blue\nsite.B02.area_1_b_Living.color = #FF0000 \n")),(0,i.yg)("h2",{id:"model"},"Model"),(0,i.yg)("p",null,"Create a new model and specify the topics you want to visualize, for example, ",(0,i.yg)("inlineCode",{parentName:"p"},"site.B02"),".  All subtopics that contain the references to the geometry and nodes are included. "),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(29542).A,width:"1200",height:"750"})),(0,i.yg)("h2",{id:"explanation"},"Explanation"),(0,i.yg)("p",null,"To apply dynamic coloring the topics are connected to the GLTF model and the nodes in the model. The ",(0,i.yg)("inlineCode",{parentName:"p"},"geometry")," subtopic defines the name of the model and the ",(0,i.yg)("inlineCode",{parentName:"p"},"node")," subtopic defines the name of the node. When displaying the GTLF model the topic database is queried for a topic that ends with ",(0,i.yg)("inlineCode",{parentName:"p"},".node")," and has the name of the node in the GLTF file as a value. If this is the case, then the database is queried for a ",(0,i.yg)("inlineCode",{parentName:"p"},".color")," subtopic. If this exists, the color of the mesh is set to the value of the ",(0,i.yg)("inlineCode",{parentName:"p"},".color")," topic. "),(0,i.yg)("mermaid",{value:"flowchart \n    direction RL\n    subgraph Topics\n        Parent[building.b01]\n        Topic[unit_1_a]\n        Geometry[.geometry \\n A.gltf]\n        Temperature[.temperature\\n22 C]\n        Color[.color\\n 66%]\n        Node[.node \\n1_A]\n        Parent --\x3e Topic\n        Parent --\x3e Geometry\n        Topic --\x3e Node\n        Topic --\x3e Color\n        Topic --\x3e Temperature\n    end\n    subgraph GLTF\n        Building[Building \\nA] --\x3e Storey[Storey \\n1]\n        Storey --\x3e Unit[Unit \\n1_A]\n        Unit --\x3e Space\n        Unit --\x3e Wall\n        Unit --\x3e Slab\n    end\n    Node --\x3e Space\n    Color --\x3e Space\n    Geometry --\x3e Building\n    style Parent fill:#fcc\n    style Topic fill:#fcc\n    style Geometry fill:#fcc\n    style Node fill:#fcc\n    style Temperature fill:#fcc\n    style Color fill:#fcc"}))}h.isMDXComponent=!0},29542:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/building_colorexpression_1-1ef6e2ca7d7b5556682113c3b1bdb3ba.png"},40163:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/building_high-rise-5bf895df45539f935130b6c619211878.png"}}]);