"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6510],{15680:(e,t,i)=>{i.d(t,{xA:()=>l,yg:()=>h});var n=i(96540);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(i),m=r,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return i?n.createElement(h,o(o({ref:t},l),{},{components:i})):n.createElement(h,o({ref:t},l))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},63832:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=i(58168),r=(i(96540),i(15680));const a={sidebar_position:55},o="MQTT",s={unversionedId:"integrations/mqtt",id:"integrations/mqtt",title:"MQTT",description:"MQTT (Message Queuing Telemetry Transport) is a lightweight, publish-subscribe network protocol that is designed for sending data from Internet of Things (IoT) devices. It is particularly well-suited for communication between devices with limited resources, such as microcontrollers, sensors, and embedded systems. The MQTT integration uses a combination of push and pull. When data is published by a device the last received data is stored. This can either be imported immediately or it can be imported at scheduled times.",source:"@site/docs/integrations/mqtt.md",sourceDirName:"integrations",slug:"/integrations/mqtt",permalink:"/docs/integrations/mqtt",draft:!1,tags:[],version:"current",sidebarPosition:55,frontMatter:{sidebar_position:55},sidebar:"defaultSidebar",previous:{title:"Tuya",permalink:"/docs/integrations/tuya"},next:{title:"Zwave",permalink:"/docs/integrations/zwave"}},c={},d=[{value:"Datasource",id:"datasource",level:2},{value:"Scheduled import",id:"scheduled-import",level:2},{value:"Immediate import",id:"immediate-import",level:2},{value:"Testing",id:"testing",level:2}],l={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"mqtt"},"MQTT"),(0,r.yg)("p",null,"MQTT (Message Queuing Telemetry Transport) is a lightweight, publish-subscribe network protocol that is designed for sending data from Internet of Things (IoT) devices. It is particularly well-suited for communication between devices with limited resources, such as microcontrollers, sensors, and embedded systems. The MQTT integration uses a combination of push and pull. When data is published by a device the last received data is stored. This can either be imported immediately or it can be imported at scheduled times. "),(0,r.yg)("h2",{id:"datasource"},"Datasource"),(0,r.yg)("p",null,"Create a new secret and set the field ",(0,r.yg)("inlineCode",{parentName:"p"},"type")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"mqtt"),". Enter the MQTT host and optionally a username and password if the MQTT server needs authentication. Create a field ",(0,r.yg)("inlineCode",{parentName:"p"},"topic")," and enter the name of the topic to subscribe to:"),(0,r.yg)("p",null,(0,r.yg)("img",{src:i(4807).A,width:"2732",height:"792"})),(0,r.yg)("h2",{id:"scheduled-import"},"Scheduled import"),(0,r.yg)("p",null,"Create a new connector and enter the name of the secrets in the field ",(0,r.yg)("inlineCode",{parentName:"p"},"Datasource"),". Create a new ",(0,r.yg)("inlineCode",{parentName:"p"},"Object")," and map the topic to the MQTT topic, in this case ",(0,r.yg)("inlineCode",{parentName:"p"},"office/room_112"),". Create a key to map the value of the topic and add a key ",(0,r.yg)("inlineCode",{parentName:"p"},"time")," to use the time that the topic was updated. If no field ",(0,r.yg)("inlineCode",{parentName:"p"},"time")," is specified the current time at the moment of import is used, which may be later than the time that the data was received. Click on ",(0,r.yg)("inlineCode",{parentName:"p"},"test")," to check the data is imported. "),(0,r.yg)("p",null,(0,r.yg)("img",{src:i(5432).A,width:"2732",height:"1802"})),(0,r.yg)("p",null,"You can now set a schedule for importing the date, for example ",(0,r.yg)("inlineCode",{parentName:"p"},"Every minute"),". This means that data is imported every minute regardless of the frequency that the MQTT data is received. This prevents that large amounts of logging data is created when an MQTT device publishes at high frequency and also prevents data overload. Scheduled imports are suitable for data that does not change frequencly, such as room temperature or humidity."),(0,r.yg)("h2",{id:"immediate-import"},"Immediate import"),(0,r.yg)("p",null,"To immediately process incoming data you can set the schedule to ",(0,r.yg)("inlineCode",{parentName:"p"},"Continuous"),". In this case the connector is run immediately when data is published to the topic and subtopics specified in the datasource. This option is most suited for device input that needs immediate action such as intrusion detection devices."),(0,r.yg)("p",null,(0,r.yg)("img",{src:i(82850).A,width:"2732",height:"1802"})),(0,r.yg)("h2",{id:"testing"},"Testing"),(0,r.yg)("p",null,"To test the connector you can use a MQTT client to publish data."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mosquitto_pub \nmosquitto_pub -h [HOST] -u [USERNAME] -P [PASSWORD] -t 'office/room_112/temperature' -m 19\nmosquitto_pub -h [HOST] -u [USERNAME] -P [PASSWORD] -t 'office/room_112/humidity' -m 30\n")))}u.isMDXComponent=!0},5432:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/connector_mqtt_single_value-6132d8e5cd4081d4714de1dfdc6d65af.png"},82850:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/connector_mqtt_single_value_immediate-44cb6461dc78c8466fb39bbaa6026880.png"},4807:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/secret_mqtt_office-86eee0536c056c1e4b01b5ee7c54def5.png"}}]);