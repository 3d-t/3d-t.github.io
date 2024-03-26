(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8206],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(v,o(o({ref:t},p),{},{components:n})):a.createElement(v,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9945:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:7},l="Zwave",c={unversionedId:"installation/zwave",id:"installation/zwave",isDocsHomePage:!1,title:"Zwave",description:"Z-Wave is a wireless communications protocol used primarily for home automation. It is a mesh network using low-energy radio waves to communicate from appliance to appliance, allowing for wireless control of residential appliances and other devices, such as lighting control, security systems, thermostats, windows, locks, swimming pools, and garage door openers. For integration of Zwave you need a [Zwave USB stick] (https://aeotec.com/z-wave-usb-stick/index.html) and one or more devices. The advantage of Zwave compared to Wifi is larger distance and less power consumption. A Zwave sensor can run several years on a single battery.",source:"@site/docs/installation/zwave.md",sourceDirName:"installation",slug:"/installation/zwave",permalink:"/docs/installation/zwave",version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"defaultSidebar",previous:{title:"MQTT",permalink:"/docs/installation/mqtt"},next:{title:"Zigbee",permalink:"/docs/installation/zigbee"}},p=[{value:"Zwave2MQTT",id:"zwave2mqtt",children:[]},{value:"Subscribe",id:"subscribe",children:[]},{value:"Publish",id:"publish",children:[]}],u={toc:p};function d(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"zwave"},"Zwave"),(0,i.kt)("p",null,"Z-Wave is a wireless communications protocol used primarily for home automation. It is a mesh network using low-energy radio waves to communicate from appliance to appliance, allowing for wireless control of residential appliances and other devices, such as lighting control, security systems, thermostats, windows, locks, swimming pools, and garage door openers. For integration of Zwave you need a ","[Zwave USB stick]"," (",(0,i.kt)("a",{parentName:"p",href:"https://aeotec.com/z-wave-usb-stick/index.html"},"https://aeotec.com/z-wave-usb-stick/index.html"),") and one or more devices. The advantage of Zwave compared to Wifi is larger distance and less power consumption. A Zwave sensor can run several years on a single battery."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry PI"),(0,i.kt)("th",{parentName:"tr",align:null},"Zwave stick"),(0,i.kt)("th",{parentName:"tr",align:null},"ZWave device"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{src:n(4488).Z})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{src:n(3291).Z})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{src:n(4047).Z}))))),(0,i.kt)("h2",{id:"zwave2mqtt"},"Zwave2MQTT"),(0,i.kt)("p",null,"For communication with Zwave devices you can use a Raspberry Pi or other computer with a Zwave stick and Zwave2MQTT software, which can be downloaded free of charge.\nFor integration of Zwave connect the stick to a USB port and check the name of the device. Instead of using ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/ttyACM0")," is it better to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"serial/by-id")," device because this is independent on the USB slot in which the stick is inserted. On a Raspberry Pi this is something like ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/serial/by-id/usb-0658_0200-if00"),".  "),(0,i.kt)("p",null,"Follow the installation instructions for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenZWave/Zwave2Mqtt"},"zwave2mqtt")," or start a docker container:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run --name zwave2mqtt -d -it -p 8091:8091 --device=/dev/serial/by-id/usb-0658_0200-if00 -v /home/pi/zwave2mqtt/store:/usr/src/app/store robertslando/zwave2mqtt:latest\n")),(0,i.kt)("p",null,"Open a web browser and login:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"http://localhost:8091\n")),(0,i.kt)("p",null,"Go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings")," section and enter the device ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/serial/by-id/usb-0658_0200-if00")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Zwave")," section. In the ",(0,i.kt)("inlineCode",{parentName:"p"},"Mqtt")," section enter the details of the MQTT host where the data should be sent to and select ",(0,i.kt)("inlineCode",{parentName:"p"},"retain"),". In the ",(0,i.kt)("inlineCode",{parentName:"p"},"Gateway")," section you can map the Zwave device information to MQTT topic."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2347).Z})),(0,i.kt)("h2",{id:"subscribe"},"Subscribe"),(0,i.kt)("p",null,"The raw MQTT data sent by the Zwave2MQTT service includes a topic and a JSON body with the time and a value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mosquitto_sub -h [HOSTNAME] -u [Username] -P [password] -v -t zwave/#\n\n")),(0,i.kt)("p",null,"The output looks as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'zwave/office/printer/voltage {"time":1637850956331,"value":226.79}\nzwave/office/lamp/kwh {"time":1637851022338,"value":96.44}\nzwave/office/2/50/1/256 {"time":1637851022343,"value":false}\nzwave/office/pir/temperature {"time":1637850316964,"value":68}\nzwave/office/lamp/on {"time":1637851320475,"value":true}\nzwave/office/lamp/voltage {"time":1637851024324,"value":233.59}\n')),(0,i.kt)("h2",{id:"publish"},"Publish"),(0,i.kt)("p",null,"To update an MQTT device you can publish a message to the topic with suffice ",(0,i.kt)("inlineCode",{parentName:"p"},"/set"),". For example, to turn on a lamp you can use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mosquitto_sub -h [HOSTNAME] -u [Username] -P [password] -v -t 'zwave/office/lamp/on/set' -m '{\"value\": true}'\n\n")))}d.isMDXComponent=!0},4047:function(e,t,n){"use strict";t.Z=n.p+"assets/images/philio-47becd9449883e8bdcca3fa44cabe394.jpeg"},4488:function(e,t,n){"use strict";t.Z=n.p+"assets/images/raspberry-669dd45519e2401535e4ff50ec6c3752.jpg"},2347:function(e,t,n){"use strict";t.Z=n.p+"assets/images/zwave2mqtt-ecb9bd046f26eb84786d5d137a500a4f.png"},3291:function(e,t,n){"use strict";t.Z=n.p+"assets/images/zwavestick-015f04c0092943d61b97ed94e7149f79.jpeg"}}]);