"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3588],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>f});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},66733:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(58168),i=(a(96540),a(15680));const r={sidebar_position:400},o="SpaceTime data",l={unversionedId:"mapping/values",id:"mapping/values",title:"SpaceTime data",description:"Maps can also be used to create 4D visualizations of geospatial data. Geospatial data combines geospatial information with a temporal component, allowing for the analysis of geographic phenomena over time. This type of data is crucial for tracking and understanding how spatial elements change or move across different time intervals.",source:"@site/docs/mapping/values.md",sourceDirName:"mapping",slug:"/mapping/values",permalink:"/docs/mapping/values",draft:!1,tags:[],version:"current",sidebarPosition:400,frontMatter:{sidebar_position:400},sidebar:"defaultSidebar",previous:{title:"Level of Detail",permalink:"/docs/mapping/lod"},next:{title:"Introduction",permalink:"/docs/video"}},s={},p=[{value:"Data collection",id:"data-collection",level:2},{value:"Data display",id:"data-display",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.yg)(d,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"spacetime-data"},"SpaceTime data"),(0,i.yg)("p",null,"Maps can also be used to create 4D visualizations of geospatial data. Geospatial data combines geospatial information with a temporal component, allowing for the analysis of geographic phenomena over time. This type of data is crucial for tracking and understanding how spatial elements change or move across different time intervals. "),(0,i.yg)("h2",{id:"data-collection"},"Data collection"),(0,i.yg)("p",null,"Examples of geospatial data are movements or airplanes or water heights in rivers. Live aircraft data can be downloaded from different sources such as ",(0,i.yg)("a",{parentName:"p",href:"https://openskynetwork.github.io/opensky-api/rest.html"},"OpenSky"),". The example below shows an CVS import of data collected with a mobile phone during a test flight."),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(2e4).A,width:"1200",height:"750"})),(0,i.yg)("h2",{id:"data-display"},"Data display"),(0,i.yg)("p",null,"Create a new model and add the main topic ",(0,i.yg)("inlineCode",{parentName:"p"},"airplane.phzlv"),". Click on the ",(0,i.yg)("inlineCode",{parentName:"p"},"Chart")," tab and enter the timeframe for displaying the data. Since this example contains a very limited set we set the interval so that it collects the data from the last decade. "),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(33500).A,width:"1200",height:"750"})),(0,i.yg)("p",null,"The chart tab includes an editor to define a script for representing each entry in the log file. In the script you can use any of the subtopics that have been imported such as ",(0,i.yg)("inlineCode",{parentName:"p"},"speed"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"acceleration")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"heading"),", as well as the ",(0,i.yg)("inlineCode",{parentName:"p"},"latitude, longitude, altitude"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"time")," information.  In the script we create a red block with the height equal to the altitude of the airplane defined by the altitude. A ",(0,i.yg)("inlineCode",{parentName:"p"},"sprite(text, size, fontSize)")," function is used to display the value of the height in feet and the speed in knots."),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(35957).A,width:"1200",height:"750"})))}m.isMDXComponent=!0},33500:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/map_airport-36c428b75278b43344518f82558d9d6b.png"},35957:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/map_airport_chart-5f1cb82dd978bb4605bf4c0922486c17.png"},2e4:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/map_airport_connector-709f3106c3504f24c4ff8e362ec5eaf1.png"}}]);