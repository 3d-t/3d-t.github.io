(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2472],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return n?i.createElement(f,a(a({ref:t},d),{},{components:n})):i.createElement(f,a({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2196:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var i=n(2122),o=n(9756),r=(n(7294),n(3905)),a=["components"],s={sidebar_position:40},p="Solids",l={unversionedId:"digitaltwin/solids",id:"digitaltwin/solids",isDocsHomePage:!1,title:"Solids",description:"In the previous examples we have imported GTLF and IFC models created in CAD systems and shown how we can place simple blocks on a map. With the build-in solid modeler you can make 3D objects and animations without the need for a third-party CAD package. 3D objects are created with a visual programming language similar to the one used for automation and monitoring.",source:"@site/docs/digitaltwin/solids.md",sourceDirName:"digitaltwin",slug:"/digitaltwin/solids",permalink:"/docs/digitaltwin/solids",version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"defaultSidebar",previous:{title:"Cesium",permalink:"/docs/digitaltwin/cesium"},next:{title:"Parts",permalink:"/docs/digitaltwin/parts"}},d=[{value:"Primitives",id:"primitives",children:[]},{value:"Transformations",id:"transformations",children:[]},{value:"Boolean operations",id:"boolean-operations",children:[]}],c={toc:d};function m(e){var t=e.components,s=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"solids"},"Solids"),(0,r.kt)("p",null,"In the previous examples we have imported GTLF and IFC models created in CAD systems and shown how we can place simple blocks on a map. With the build-in solid modeler you can make 3D objects and animations without the need for a third-party CAD package. 3D objects are created with a visual programming language similar to the one used for automation and monitoring.   "),(0,r.kt)("h2",{id:"primitives"},"Primitives"),(0,r.kt)("p",null,"Click on the sidemenu ",(0,r.kt)("inlineCode",{parentName:"p"},"Solids")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Admin")," section and create a new solid. Click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"primitives")," and drag and drop one of the basic shapes into the workspace. You can set the dimensions by changing the numbers. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7683).Z})),(0,r.kt)("h2",{id:"transformations"},"Transformations"),(0,r.kt)("p",null,"To define the position of shapes you can use transformations and rotations.  Click on the menu ",(0,r.kt)("inlineCode",{parentName:"p"},"Transform")," and drag and drop commands for ",(0,r.kt)("inlineCode",{parentName:"p"},"move")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"turn")," to move or rotate relative to the current position. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"position")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"rotation")," to specify a fixed value in 3D space."),(0,r.kt)("h2",{id:"boolean-operations"},"Boolean operations"),(0,r.kt)("p",null,"You can combine primitives into more complex shapes by using ",(0,r.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"subtract")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"intersect")," operations. In the example below we added a box and a cube. Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Combine")," and drag the operation to the workspace. In the upper position drag a box and in the lower position drag a ",(0,r.kt)("inlineCode",{parentName:"p"},"material"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"move")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sphere")," block. You can now select one of the combine operations. The ",(0,r.kt)("inlineCode",{parentName:"p"},"intersect")," takes the common part of the two basic shapes. This shape looks like a dice. The ",(0,r.kt)("inlineCode",{parentName:"p"},"subtract")," operations subtracts the sphere from the block and looks like the third shape. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3371).Z})))}m.isMDXComponent=!0},3371:function(e,t,n){"use strict";t.Z=n.p+"assets/images/modeler_solids_boolean-41968f7059bc618e05822286c8a2dfb4.png"},7683:function(e,t,n){"use strict";t.Z=n.p+"assets/images/modeler_solids_shapes-ecf83d8ef25828d849828d6810fd57a9.png"}}]);