"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8450],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>h});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=i,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68665:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(58168),i=(a(96540),a(15680));const o={sidebar_position:1},r="Digital Twin",s={unversionedId:"concepts/controlcycle",id:"concepts/controlcycle",title:"Digital Twin",description:"A digital twin is a virtual representation of a physical object with automatic and real-time data exchange.  Digital Twins have applications in manufacturing, automotive, construction, real estate, agriculture, utilities, healthcare, smart cities, retail, and mining. Their main purpose is to consolidate life cycle information, visualize trends and issues, analyze performance, assist in training, and make predictions.  The growth of Digital Twin technology is driven by the widespread availability of cloud computing, Internet of Things, and Artifical Intelligence. Digital Twins are often considered complex and expensive because they require expensive CAD or BIM software, sensors, and data connections. This platform aims to reduce cost and complexity by introducing a fully web-based architecture for data acquisition, analysis, visualization, and control. Data is acquired by people, sensors, and systems. The data is analyzed and visualized in 2D dashboards and 3D models. Custom rules defined with visual programming can be used to update the physical model through actuators connected to the internet.",source:"@site/docs/concepts/controlcycle.md",sourceDirName:"concepts",slug:"/concepts/controlcycle",permalink:"/docs/concepts/controlcycle",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Topic",permalink:"/docs/concepts/topic"}},c={},l=[{value:"Acquire",id:"acquire",level:2},{value:"Analyze",id:"analyze",level:2},{value:"Act",id:"act",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...o}=e;return(0,i.yg)(u,(0,n.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"digital-twin"},"Digital Twin"),(0,i.yg)("p",null,"A digital twin is a virtual representation of a physical object with automatic and real-time data exchange.  Digital Twins have applications in manufacturing, automotive, construction, real estate, agriculture, utilities, healthcare, smart cities, retail, and mining. Their main purpose is to consolidate life cycle information, visualize trends and issues, analyze performance, assist in training, and make predictions.  The growth of Digital Twin technology is driven by the widespread availability of cloud computing, Internet of Things, and Artifical Intelligence. Digital Twins are often considered complex and expensive because they require expensive CAD or BIM software, sensors, and data connections. This platform aims to reduce cost and complexity by introducing a fully web-based architecture for data acquisition, analysis, visualization, and control. Data is acquired by people, sensors, and systems. The data is analyzed and visualized in 2D dashboards and 3D models. Custom rules defined with visual programming can be used to update the physical model through actuators connected to the internet. "),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(23608).A,width:"1371",height:"686"})),(0,i.yg)("h2",{id:"acquire"},"Acquire"),(0,i.yg)("p",null,"Low-cost devices connected to the internet can push information about temperature, humidity or pressure. They are like the eyes and ears of a living creature. Information can also be pulled from other systems such as for weather forecasting, enterprise resource management (ERP) or customer relationship managment (CRM). Similarly to nerves in a living creature, signals\ncan be transported over wired connections, WIFI, bluetooth, 4G, Zwave or ZigBee. Data formats includes text messages, structured data in JSON format, images or documents. In case there are no sensors, people may manually gather the data by completing checklists and inspections. Data may also acquired by asking people for opinions via surveys or assessing their qualifications with a test or quiz.\nThe acquired data is converted into a common format for long term storage in memory. This memory may help to detect trends and make better decisions in the future."),(0,i.yg)("h2",{id:"analyze"},"Analyze"),(0,i.yg)("p",null,"The analysis part can be compared to the autonomous nerve system and brain of living creatures. They sense that pressure is too high or temperature is too low or recognize danger based on past experience. In buildings information from temperature sensors and presence detection can be combined to analyze whether or not the temperature is too low. In enterprise systems the rate of sales per month can be used to forecast and project, taking into account various parameters such as seasonality and marketing investments. Visualization of data in dashboard, time-charts, maps or 3D digital models helps to understand how parameters change per location and over time.\nThe availability of open source machine learning technology facilitates automatic trend analysis and find relationships between input parameters."),(0,i.yg)("h2",{id:"act"},"Act"),(0,i.yg)("p",null,"The basis for acting is a set of rules that describe the desired state of the system. When dealing with systems, acting may involve the activation of a control such as a thermostat, valve or motor. When dealing with people acting may involve sending a notification about anomalies or non-compliance with the request to take action. Sometimes a combination of acting and notfication is used.\nFor example, with self-driving cars the car should remain in the lane with a constant speed. When a deviation from the desired state is detected the car takes action by sending a signal to a motor that controls the steering system. However, when the car does not know how to handle a situation a notification is sent to the driver to take immediate action. In biology, the autonomous nervous system immediately triggers a muscle to retract your hand when the surface is too hot. When the body can not automatically solve the problem is sends a message like a pain signal to force you to slow down and inspect the problem."))}p.isMDXComponent=!0},23608:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/concept-cce60a4995b0835caa5fba248f9d11fe.png"}}]);