"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2204],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82512:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const i={sidebar_position:7},o="Zwave",s={unversionedId:"installation/zwave",id:"installation/zwave",title:"Zwave",description:"Z-Wave is a wireless communications protocol used primarily for home automation. It is a mesh network using low-energy radio waves to communicate from appliance to appliance, allowing for wireless control of residential appliances and other devices, such as lighting control, security systems, thermostats, windows, locks, swimming pools, and garage door openers. For integration of Zwave you need a [Zwave USB stick] (https://aeotec.com/z-wave-usb-stick/index.html) and one or more devices. The advantage of Zwave compared to Wifi is larger distance and less power consumption. A Zwave sensor can run several years on a single battery.",source:"@site/docs/installation/zwave.md",sourceDirName:"installation",slug:"/installation/zwave",permalink:"/docs/installation/zwave",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"defaultSidebar",previous:{title:"MQTT",permalink:"/docs/installation/mqtt"},next:{title:"Zigbee",permalink:"/docs/installation/zigbee"}},l={},c=[{value:"Zwave2MQTT",id:"zwave2mqtt",level:2},{value:"Subscribe",id:"subscribe",level:2},{value:"Publish",id:"publish",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.yg)(d,(0,n.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"zwave"},"Zwave"),(0,r.yg)("p",null,"Z-Wave is a wireless communications protocol used primarily for home automation. It is a mesh network using low-energy radio waves to communicate from appliance to appliance, allowing for wireless control of residential appliances and other devices, such as lighting control, security systems, thermostats, windows, locks, swimming pools, and garage door openers. For integration of Zwave you need a ","[Zwave USB stick]"," (",(0,r.yg)("a",{parentName:"p",href:"https://aeotec.com/z-wave-usb-stick/index.html"},"https://aeotec.com/z-wave-usb-stick/index.html"),") and one or more devices. The advantage of Zwave compared to Wifi is larger distance and less power consumption. A Zwave sensor can run several years on a single battery."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Raspberry PI"),(0,r.yg)("th",{parentName:"tr",align:null},"Zwave stick"),(0,r.yg)("th",{parentName:"tr",align:null},"ZWave device"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{src:a(11569).A,width:"1280",height:"753"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{src:a(73029).A,width:"500",height:"500"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{src:a(21469).A,width:"500",height:"500"}))))),(0,r.yg)("h2",{id:"zwave2mqtt"},"Zwave2MQTT"),(0,r.yg)("p",null,"For communication with Zwave devices you can use a Raspberry Pi or other computer with a Zwave stick and Zwave2MQTT software, which can be downloaded free of charge.\nFor integration of Zwave connect the stick to a USB port and check the name of the device. Instead of using ",(0,r.yg)("inlineCode",{parentName:"p"},"/dev/ttyACM0")," is it better to use the ",(0,r.yg)("inlineCode",{parentName:"p"},"serial/by-id")," device because this is independent on the USB slot in which the stick is inserted. On a Raspberry Pi this is something like ",(0,r.yg)("inlineCode",{parentName:"p"},"/dev/serial/by-id/usb-0658_0200-if00"),".  "),(0,r.yg)("p",null,"Follow the installation instructions for ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenZWave/Zwave2Mqtt"},"zwave2mqtt")," or start a docker container:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"docker run --name zwave2mqtt -d -it -p 8091:8091 --device=/dev/serial/by-id/usb-0658_0200-if00 -v /home/pi/zwave2mqtt/store:/usr/src/app/store robertslando/zwave2mqtt:latest\n")),(0,r.yg)("p",null,"Open a web browser and login:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"http://localhost:8091\n")),(0,r.yg)("p",null,"Go to the ",(0,r.yg)("inlineCode",{parentName:"p"},"settings")," section and enter the device ",(0,r.yg)("inlineCode",{parentName:"p"},"/dev/serial/by-id/usb-0658_0200-if00")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Zwave")," section. In the ",(0,r.yg)("inlineCode",{parentName:"p"},"Mqtt")," section enter the details of the MQTT host where the data should be sent to and select ",(0,r.yg)("inlineCode",{parentName:"p"},"retain"),". In the ",(0,r.yg)("inlineCode",{parentName:"p"},"Gateway")," section you can map the Zwave device information to MQTT topic."),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(67324).A,width:"1000",height:"755"})),(0,r.yg)("h2",{id:"subscribe"},"Subscribe"),(0,r.yg)("p",null,"The raw MQTT data sent by the Zwave2MQTT service includes a topic and a JSON body with the time and a value:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mosquitto_sub -h [HOSTNAME] -u [Username] -P [password] -v -t zwave/#\n\n")),(0,r.yg)("p",null,"The output looks as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'zwave/office/printer/voltage {"time":1637850956331,"value":226.79}\nzwave/office/lamp/kwh {"time":1637851022338,"value":96.44}\nzwave/office/2/50/1/256 {"time":1637851022343,"value":false}\nzwave/office/pir/temperature {"time":1637850316964,"value":68}\nzwave/office/lamp/on {"time":1637851320475,"value":true}\nzwave/office/lamp/voltage {"time":1637851024324,"value":233.59}\n')),(0,r.yg)("h2",{id:"publish"},"Publish"),(0,r.yg)("p",null,"To update an MQTT device you can publish a message to the topic with suffice ",(0,r.yg)("inlineCode",{parentName:"p"},"/set"),". For example, to turn on a lamp you can use the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mosquitto_sub -h [HOSTNAME] -u [Username] -P [password] -v -t 'zwave/office/lamp/on/set' -m '{\"value\": true}'\n\n")))}u.isMDXComponent=!0},21469:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/philio-47becd9449883e8bdcca3fa44cabe394.jpeg"},11569:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/raspberry-669dd45519e2401535e4ff50ec6c3752.jpg"},67324:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/zwave2mqtt-ecb9bd046f26eb84786d5d137a500a4f.png"},73029:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/zwavestick-015f04c0092943d61b97ed94e7149f79.jpeg"}}]);