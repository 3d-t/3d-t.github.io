"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7877],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>h});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,r(r({ref:t},l),{},{components:n})):a.createElement(h,r({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(58168),i=(n(96540),n(15680));const o={sidebar_position:3},r="Spacetime",s={unversionedId:"concepts/spacetime",id:"concepts/spacetime",title:"Spacetime",description:"A topic has a name and a value. The current value of the topic is called state.  To analyze trends and make predections is is necessary to store the history of all value changes in time and by location. For example, to monitor the trend in viral infections you want to see on a map where it has originated and how the number of infections vary by region and over time.",source:"@site/docs/concepts/spacetime.md",sourceDirName:"concepts",slug:"/concepts/spacetime",permalink:"/docs/concepts/spacetime",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Topic",permalink:"/docs/concepts/topic"},next:{title:"Internet Of Things",permalink:"/docs/concepts/iot"}},c={},p=[{value:"Where and when",id:"where-and-when",level:3},{value:"Representation",id:"representation",level:3},{value:"Example",id:"example",level:3}],l={toc:p},d="wrapper";function m(e){let{components:t,...o}=e;return(0,i.yg)(d,(0,a.A)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"spacetime"},"Spacetime"),(0,i.yg)("p",null,"A topic has a name and a value. The current value of the topic is called ",(0,i.yg)("inlineCode",{parentName:"p"},"state"),".  To analyze trends and make predections is is necessary to store the history of all value changes in time and by location. For example, to monitor the trend in viral infections you want to see on a map where it has originated and how the number of infections vary by region and over time. "),(0,i.yg)("h3",{id:"where-and-when"},"Where and when"),(0,i.yg)("p",null,"The combination of a spatial and time component is referred to as  'spacetime'.  In the example below the speed of a car is captured in spacetime, so for every speed data point there is information about the 3D position and time. Spacetime information can be visualized in 2D maps, 3D earth models and time charts."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(33973).A,width:"1658",height:"874"})),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(77198).A,width:"1680",height:"782"})),(0,i.yg)("h3",{id:"representation"},"Representation"),(0,i.yg)("p",null,"Spacetime information is stored together with the value of a topic. Spacetime is a 4D value, 3D location and time (3D-T), and is represented by an array with four values. These values represent latitude, longitude, altitude and time. The latitude and longitude are defined in decimal degrees similar to GPS coordinates. The altitude is defined in meters above ground and the time is defined in UTC. When the ",(0,i.yg)("inlineCode",{parentName:"p"},"state")," of a topic is updated, the value and spacetime information is saved as ",(0,i.yg)("inlineCode",{parentName:"p"},"log")," entries. "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'[\n{\n    topic: car.saab.speed\n    value: 104\n    spacetime: [51.37391,5.325942,0,"2019-10-19T15:15:35.000Z"]\n},\n{\n    topic: car.saab.speed\n    value: 107\n    spacetime: [[51.374336,5.327016,0,"2019-10-19T15:15:30.000Z"]\n},\n...\n]\n')),(0,i.yg)("p",null,"For some objects like buildings or rooms the geographic component of the spacetime information may be static. Still, the geographic information is important to locate the object and visualize in 2D or 3D space. The altitude component of spacetime is important when objects are stacked, such as in multi-story buildings or plants. When capturing a flight path of an airplane all four components of spacetime are important. "),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("p",null,"A good example of a practical application of spacetime is air traffic control. Air traffic controllers need to prevent collissions between airplanes and they do this by ensuring that at least one of the four components on spacetime is always different for each plane. For example, they can allow two planes at the same time at the same latitude and longitude as long as there is a vertical separation of 300 meters. When two planes need to be at the same geographical location, for example when landing on a runway, their 3D position is the same but they ensure a time separation of 2 minutes. "),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(28822).A,width:"1346",height:"508"})))}m.isMDXComponent=!0},28822:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/spacetime-eaade0a08c802c1891d45967b25488d9.png"},33973:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/speed_map-2aee745f0551f2e7d1921430b4064839.png"},77198:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/speed_timeline-082b3dd9c27ec90ab84120744de1628e.png"}}]);