"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3059],{15680:(e,t,i)=>{i.d(t,{xA:()=>d,yg:()=>b});var n=i(96540);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(i),y=o,b=p["".concat(l,".").concat(y)]||p[y]||u[y]||a;return i?n.createElement(b,r(r({ref:t},d),{},{components:i})):n.createElement(b,r({ref:t},d))}));function b(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}y.displayName="MDXCreateElement"},8454:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=i(58168),o=(i(96540),i(15680));const a={sidebar_position:38},r="Visibility",s={unversionedId:"visualization/visibile",id:"visualization/visibile",title:"Visibility",description:"When viewing aspects of a larger digital twin it is often necessary to hide certain parts of the model. For example, to show the location of an asset on a floor in a building it may be beneficial to hide the floors above so that the asset becomes fully visible. Hiding or showing parts of the model can also be used to display changes in the model during the building life cycle. Certain areas may be expanded or renovated and these changes may only become visible at a certain point in time. This allows you to go back in time and see the digital twin in an earlier state, such as at the start of its construction.",source:"@site/docs/visualization/visibile.md",sourceDirName:"visualization",slug:"/visualization/visibile",permalink:"/docs/visualization/visibile",draft:!1,tags:[],version:"current",sidebarPosition:38,frontMatter:{sidebar_position:38},sidebar:"defaultSidebar",previous:{title:"Textures",permalink:"/docs/visualization/textures"},next:{title:"Transformation",permalink:"/docs/visualization/transformation"}},l={},c=[{value:"Topics",id:"topics",level:2},{value:"Model",id:"model",level:2},{value:"Explanation",id:"explanation",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.yg)(p,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"visibility"},"Visibility"),(0,o.yg)("p",null,"When viewing aspects of a larger digital twin it is often necessary to hide certain parts of the model. For example, to show the location of an asset on a floor in a building it may be beneficial to hide the floors above so that the asset becomes fully visible. Hiding or showing parts of the model can also be used to display changes in the model during the building life cycle. Certain areas may be expanded or renovated and these changes may only become visible at a certain point in time. This allows you to go back in time and see the digital twin in an earlier state, such as at the start of its construction."),(0,o.yg)("h2",{id:"topics"},"Topics"),(0,o.yg)("p",null,"A small apartment building has three floors, or storeys, a basement and a roof. We create a topic for each storey that links to the node in the GLTF/IFC file. The subtopic ",(0,o.yg)("inlineCode",{parentName:"p"},"visible")," specifies if the floor is visible. Value ",(0,o.yg)("inlineCode",{parentName:"p"},"1")," represents visible, and ",(0,o.yg)("inlineCode",{parentName:"p"},"0")," represents invisible. A value between ",(0,o.yg)("inlineCode",{parentName:"p"},"0")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"1")," could be used to set the transparency, so that the objects linked to the node become somewhat visible."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"units.B03.geometry = Apartments.gltf\nunits.B03.storey_1.node = IfcStorey_1\nunits.B03.storey_1.visible = 1\nunits.B03.storey_2.node = IfcStorey_2\nunits.B03.storey_2.visible = 1\n")),(0,o.yg)("h2",{id:"model"},"Model"),(0,o.yg)("p",null,"A model is created by including the main topic ",(0,o.yg)("inlineCode",{parentName:"p"},"units.B03"),", which loads all the subtopics for the storeys as well. To change the visibility, you can click on one of the floors in the 3D model, and then change the visibility to ",(0,o.yg)("inlineCode",{parentName:"p"},"0"),"."),(0,o.yg)("p",null,(0,o.yg)("img",{src:i(62781).A,width:"1200",height:"750"})),(0,o.yg)("h2",{id:"explanation"},"Explanation"),(0,o.yg)("p",null,"When the GLTF of the apartment building is rendered, the database of topics is searched for a subtopic ",(0,o.yg)("inlineCode",{parentName:"p"},".node")," with a value equal to the name of the node. If found, the database is searched for a subtopic ",(0,o.yg)("inlineCode",{parentName:"p"},".visible"),". If found, the visibility of the node is set to the value. If the visibility is set to ",(0,o.yg)("inlineCode",{parentName:"p"},"0"),", all nodes below the selected node are invisible as well."),(0,o.yg)("mermaid",{value:"flowchart \n    subgraph Topics\n    direction TB\n        Units[units.B03] --\x3e Storey1[.storey_01]\n        Units[units.B03] --\x3e Storey2[.storey_02]\n        Storey1 --\x3e Node1[.node]\n        Storey1 --\x3e Visible1[.visible]\n        Storey2 --\x3e Node2[.node]\n        Storey2 --\x3e Visible2[.visible]\n    end\n    subgraph GLTF\n        direction TB\n        ApartmentsGL[Apartments] --\x3e StoreyGL1[IfcStorey_1]\n        ApartmentsGL[Apartments] --\x3e StoreyGL2[IfcStorey_2]\n        Node1 --\x3e StoreyGL1\n        Visible1 --\x3e StoreyGL1\n        Node2 --\x3e StoreyGL2\n        Visible2 --\x3e StoreyGL2\n    end"}))}u.isMDXComponent=!0},62781:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/visualization_model_units-dba745cbde1e4a9e775b51c6a58f4dbf.png"}}]);