"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1406],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>d});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var A=n.createContext({}),p=function(e){var a=n.useContext(A),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(A.Provider,{value:a},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,A=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(t),g=r,d=s["".concat(A,".").concat(g)]||s[g]||u[g]||o;return t?n.createElement(d,l(l({ref:a},c),{},{components:t})):n.createElement(d,l({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var A in a)hasOwnProperty.call(a,A)&&(i[A]=a[A]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},69909:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>A,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(58168),r=(t(96540),t(15680));const o={sidebar_position:2},l="Topic",i={unversionedId:"concepts/topic",id:"concepts/topic",title:"Topic",description:"Information used for analysis and control is stored as 'key-value' combinations, called 'topics'.",source:"@site/docs/concepts/topic.md",sourceDirName:"concepts",slug:"/concepts/topic",permalink:"/docs/concepts/topic",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Control cycle",permalink:"/docs/concepts/controlcycle"},next:{title:"Spacetime",permalink:"/docs/concepts/spacetime"}},A={},p=[{value:"Keys",id:"keys",level:2},{value:"Values",id:"values",level:2},{value:"Documents",id:"documents",level:2}],c={toc:p},s="wrapper";function u(e){let{components:a,...o}=e;return(0,r.yg)(s,(0,n.A)({},c,o,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"topic"},"Topic"),(0,r.yg)("p",null,"Information used for analysis and control is stored as 'key-value' combinations, called 'topics'.\nThe concept of topics can be found in other systems such as ",(0,r.yg)("a",{parentName:"p",href:"https://mqtt.org/"},"MQTT")," or ",(0,r.yg)("a",{parentName:"p",href:"https://kafka.apache.org/"},"Apache Kafka"),".\nThe key is the name of the topic and the value can be a text, a number, a photo, document or 3D model. By defining a set of key value combinations, or topics, users can describe all properties of an asset or process. Since there is no fixed format, or database schema, users can add additional topics for the same object as required without any system changes or database changes. The value for each topic can be manually entered by a user or can be automatically updated via IoT sensors. The combination of manual and automatic data collection provides an up to date and complete digital representation of the asset life cycle. It also provides a data repository for analysis and troubleshooting.  "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Source"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Voltage"),(0,r.yg)("td",{parentName:"tr",align:null},"230"),(0,r.yg)("td",{parentName:"tr",align:null},"IoT sensor")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Power"),(0,r.yg)("td",{parentName:"tr",align:null},"1000"),(0,r.yg)("td",{parentName:"tr",align:null},"IoT sensor")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Supplier"),(0,r.yg)("td",{parentName:"tr",align:null},"WaterHead Solutions"),(0,r.yg)("td",{parentName:"tr",align:null},"User input")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Photo"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{src:t(44496).A,width:"279",height:"200"})),(0,r.yg)("td",{parentName:"tr",align:null},"User upload")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Chart"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{src:t(83922).A,width:"132",height:"100"})),(0,r.yg)("td",{parentName:"tr",align:null},"User upload")))),(0,r.yg)("h2",{id:"keys"},"Keys"),(0,r.yg)("p",null,"The name of the topic, or key, can be defined at different levels and can have sublevels, separated by a '.'. For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"computer.cpu.type\nweather.berlin.wind.speed = 10\nroom321.photo = IMG_2345.png\n")),(0,r.yg)("p",null,"Information about a specific entity can be stored by using a seperate topic for each type of information.\nFor example to store information about a supplier the following topics can be defined:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"supplier.abc.name = ABC Computing\nsupplier.abc.address.country = UK\nsupplier.abc.address.zipcode = 1234 XP\nsupplier.abc.credit = 10000\n")),(0,r.yg)("p",null,"This information can be represented as an object or JSON value:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'supplier: {\n    name: "ABC computing"\n    address: {\n        country: "UK"\n        zipcode: "1234 XP"\n    }\n    credit: 1000\n}\n')),(0,r.yg)("p",null,"Or alternatively as a YAML file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"supplier:\n    name: ABC computing\n    address:\n        country: UK\n        zipcode: 1234 XP\n    credit: 1000\n")),(0,r.yg)("h2",{id:"values"},"Values"),(0,r.yg)("p",null,"A topic can have a text or numeric value but can also refer to a document or other topic. For example, the value of ",(0,r.yg)("inlineCode",{parentName:"p"},"supplier")," refers to another topic and the photo refers to an uploaded image:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"computer.mac.type = MacBook Pro\ncomputer.mac.cpuload = 60\ncomputer.mac.photo = IMG000.png\ncomputer.mac.supplier = supplier.amazon\ncomputer.qnap.type = Qnap TS\n")),(0,r.yg)("p",null,"Some topics such as the name of an asset may be static and others such as ",(0,r.yg)("inlineCode",{parentName:"p"},"cpuload")," may be dynamic.\nAll changes to values are automatically logged. This enables you to see when a value has been changed and who has changed the value. "),(0,r.yg)("h2",{id:"documents"},"Documents"),(0,r.yg)("p",null,"Any type of document can be uploaded or imported. A document is identied by a unique file name and extension. When a document with the same name is uploaded multiple times, a new version of the document is created. Older versions can be viewed or deleted if necessary. There are built-in viewer for various document types such as JPG, PNG, PDF and GLTF."))}u.isMDXComponent=!0},44496:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/pump-c8bf479fb1352e01ae85565e8449f9b2.jpg"},83922:(e,a,t)=>{t.d(a,{A:()=>n});const n="data:image/png;base64,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"}}]);