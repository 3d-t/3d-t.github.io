"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8450],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>h});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(58168),o=(n(96540),n(15680));const r={sidebar_position:2},i="Data exchange",s={unversionedId:"concepts/controlcycle",id:"concepts/controlcycle",title:"Data exchange",description:"Data is acquired by people, sensors, and systems. The data is analyzed and visualized in 2D dashboards and 3D models. Custom rules defined with visual programming can be used to update the physical model through actuators connected to the internet.",source:"@site/docs/concepts/controlcycle.md",sourceDirName:"concepts",slug:"/concepts/controlcycle",permalink:"/docs/concepts/controlcycle",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Digital Twin in a Box",permalink:"/docs/concepts/twin"},next:{title:"Topic",permalink:"/docs/concepts/topic"}},c={},l=[{value:"Acquire",id:"acquire",level:2},{value:"Analyze",id:"analyze",level:2},{value:"Act",id:"act",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,a.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"data-exchange"},"Data exchange"),(0,o.yg)("p",null,"Data is acquired by people, sensors, and systems. The data is analyzed and visualized in 2D dashboards and 3D models. Custom rules defined with visual programming can be used to update the physical model through actuators connected to the internet. "),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(23608).A,width:"1371",height:"686"})),(0,o.yg)("h2",{id:"acquire"},"Acquire"),(0,o.yg)("p",null,"Low-cost devices connected to the internet can push information about temperature, humidity or pressure. They are like the eyes and ears of a living creature. Information can also be pulled from other systems such as for weather forecasting, enterprise resource management (ERP) or customer relationship managment (CRM). Similarly to nerves in a living creature, signals\ncan be transported over wired connections, WIFI, bluetooth, 4G, Zwave or ZigBee. Data formats includes text messages, structured data in JSON format, images or documents. In case there are no sensors, people may manually gather the data by completing checklists and inspections. Data may also acquired by asking people for opinions via surveys or assessing their qualifications with a test or quiz.\nThe acquired data is converted into a common format for long term storage in memory. This memory may help to detect trends and make better decisions in the future."),(0,o.yg)("h2",{id:"analyze"},"Analyze"),(0,o.yg)("p",null,"The analysis part can be compared to the autonomous nerve system and brain of living creatures. They sense that pressure is too high or temperature is too low or recognize danger based on past experience. In buildings information from temperature sensors and presence detection can be combined to analyze whether or not the temperature is too low. In enterprise systems the rate of sales per month can be used to forecast and project, taking into account various parameters such as seasonality and marketing investments. Visualization of data in dashboard, time-charts, maps or 3D digital models helps to understand how parameters change per location and over time.\nThe availability of open source machine learning technology facilitates automatic trend analysis and find relationships between input parameters."),(0,o.yg)("h2",{id:"act"},"Act"),(0,o.yg)("p",null,"The basis for acting is a set of rules that describe the desired state of the system. When dealing with systems, acting may involve the activation of a control such as a thermostat, valve or motor. When dealing with people acting may involve sending a notification about anomalies or non-compliance with the request to take action. Sometimes a combination of acting and notfication is used.\nFor example, with self-driving cars the car should remain in the lane with a constant speed. When a deviation from the desired state is detected the car takes action by sending a signal to a motor that controls the steering system. However, when the car does not know how to handle a situation a notification is sent to the driver to take immediate action. In biology, the autonomous nervous system immediately triggers a muscle to retract your hand when the surface is too hot. When the body can not automatically solve the problem is sends a message like a pain signal to force you to slow down and inspect the problem."))}p.isMDXComponent=!0},23608:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/concept-cce60a4995b0835caa5fba248f9d11fe.png"}}]);