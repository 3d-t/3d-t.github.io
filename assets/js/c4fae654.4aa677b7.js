(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7699],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),b=i,m=u["".concat(l,".").concat(b)]||u[b]||d[b]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8555:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:8},l="Zigbee",c={unversionedId:"installation/zigbee",id:"installation/zigbee",isDocsHomePage:!1,title:"Zigbee",description:"Zigbee is a wireless communication protocol designed for use in low-power and low-data-rate applications such as home automation, wireless sensor networks, and personal area networks. One of the key features of Zigbee is its low power consumption, which makes it well-suited for use in battery-powered devices. Zigbee devices can run for several years on a single coin cell battery. Zigbee also has a mesh networking capability which allows devices to extend the network by relaying messages through intermediate devices. This allows for creating networks with a large number of devices and providing a reliable communication path even in the case of device failures.",source:"@site/docs/installation/zigbee.md",sourceDirName:"installation",slug:"/installation/zigbee",permalink:"/docs/installation/zigbee",version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"defaultSidebar",previous:{title:"Zwave",permalink:"/docs/installation/zwave"},next:{title:"Backup",permalink:"/docs/installation/backup"}},p=[{value:"Zigbee2MQTT",id:"zigbee2mqtt",children:[]},{value:"Login",id:"login",children:[]},{value:"Pair device",id:"pair-device",children:[]},{value:"Test",id:"test",children:[]}],d={toc:p};function u(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zigbee"},"Zigbee"),(0,a.kt)("p",null,"Zigbee is a wireless communication protocol designed for use in low-power and low-data-rate applications such as home automation, wireless sensor networks, and personal area networks. One of the key features of Zigbee is its low power consumption, which makes it well-suited for use in battery-powered devices. Zigbee devices can run for several years on a single coin cell battery. Zigbee also has a mesh networking capability which allows devices to extend the network by relaying messages through intermediate devices. This allows for creating networks with a large number of devices and providing a reliable communication path even in the case of device failures."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry PI"),(0,a.kt)("th",{parentName:"tr",align:null},"Zigbee USB stick"),(0,a.kt)("th",{parentName:"tr",align:null},"Zigbee device"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:n(4488).Z})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:n(5622).Z})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:n(1293).Z}))))),(0,a.kt)("h2",{id:"zigbee2mqtt"},"Zigbee2MQTT"),(0,a.kt)("p",null,"For communication with Zigbee devices you can use a Raspberry Pi or other computer with a ",(0,a.kt)("a",{parentName:"p",href:"https://sonoff.tech/product/gateway-and-sensors/sonoff-zigbee-3-0-usb-dongle-plus-e/"},"Zigbee USB stick")," and Zigbee2MQTT software, which can be downloaded free of charge.\nCreate a directory ",(0,a.kt)("inlineCode",{parentName:"p"},"zigbee2mqtt")," with a subdirectory ",(0,a.kt)("inlineCode",{parentName:"p"},"zigbee2mqtt-data"),". In the subdirectory create a file ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration.yaml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"permit_join: true\nmqtt:\n  base_topic: zigbee2mqtt\n  server: mqtt://[HOSTNAME]\n  user: [USERNAME]\n  password: [PASSWORD]\nserial:\n  port: /dev/ttyUSB0\nfrontend:\n  port: 8080\nadvanced:\n  network_key: GENERATE\n")),(0,a.kt)("p",null,"Find the device for the dongle:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ls  /dev/serial/by-id/\n\nusb-ITead_Sonoff_Zigbee_3.0_USB_Dongle_Plus_5a045d5b2e86ec11b055571719c2d21c-if00-port0\n")),(0,a.kt)("p",null,"Start the docker container with the device found for the dongle:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -d --name zigbee2mqtt --restart=unless-stopped  --device=/dev/serial/by-id/usb-ITead_Sonoff_Zigbee_3.0_USB_Dongle_Plus_5a045d5b2e86ec11b055571719c2d21c-if00-port0:/dev/ttyUSB0 -p 8080:8080  -v /home/devops/zigbee2mqtt/zigbee2mqtt-data:/app/data -v /run/udev:/run/udev:ro  -e TZ=Europe/Amsterdam  koenkk/zigbee2mqtt\n")),(0,a.kt)("h2",{id:"login"},"Login"),(0,a.kt)("p",null,"Open a web browser to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://[IP_ADDRESS]:8080\n")),(0,a.kt)("h2",{id:"pair-device"},"Pair device"),(0,a.kt)("p",null,"Insert a paperclip into the reset hole and wait until the green light blinks. The device will automatically be detected."),(0,a.kt)("h2",{id:"test"},"Test"),(0,a.kt)("p",null,"To control a zigbee device use the topic of the device followed by ",(0,a.kt)("inlineCode",{parentName:"p"},"set"),", for example, to turn of a led strip:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'mosquitto_pub -t \'zigbee2mqtt/ledstrip/set\' -m \'{ "state": "OFF" }\'\n mosquitto_pub -h 3d-t.it -u idata -P 5656ae -t \'zigbee2mqtt/ledstrip/set\' -m \'{ "color":{"x":0.0, "y":0.4 }}\'\n\n')))}u.isMDXComponent=!0},4488:function(e,t,n){"use strict";t.Z=n.p+"assets/images/raspberry-669dd45519e2401535e4ff50ec6c3752.jpg"},5622:function(e,t,n){"use strict";t.Z=n.p+"assets/images/sonoff-zigbee-11cd83bb00bf24b70749ac013fedea78.jpeg"},1293:function(e,t,n){"use strict";t.Z=n.p+"assets/images/zigbee-motion-4a75f693f6ecb6386d1b9113028d4a8b.jpeg"}}]);