"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[553],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),g=o,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||r;return t?a.createElement(d,i(i({ref:n},c),{},{components:t})):a.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},77339:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(58168),o=(t(96540),t(15680));const r={sidebar_position:60},i="Zwave",l={unversionedId:"integrations/zwave",id:"integrations/zwave",title:"Zwave",description:"This integration uses a script for subscribing and publishing to an MQTT server connected to the Zwave2Mqtt bridge. The integration is bi-directional, which means you can read values but also set values, for example to turn on a switch. The example below shows the integration of two Zwave power switches and a Philio Technology multi-sensor for temperature, luminance and motion detection.",source:"@site/docs/integrations/zwave.md",sourceDirName:"integrations",slug:"/integrations/zwave",permalink:"/docs/integrations/zwave",draft:!1,tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"defaultSidebar",previous:{title:"MQTT",permalink:"/docs/integrations/mqtt"},next:{title:"Fritzbox",permalink:"/docs/integrations/fritzbox"}},s={},p=[{value:"Datasource",id:"datasource",level:2},{value:"Script",id:"script",level:2},{value:"Connector",id:"connector",level:2},{value:"Form",id:"form",level:2}],c={toc:p},u="wrapper";function m(e){let{components:n,...r}=e;return(0,o.yg)(u,(0,a.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"zwave"},"Zwave"),(0,o.yg)("p",null,"This integration uses a script for subscribing and publishing to an MQTT server connected to the ",(0,o.yg)("a",{parentName:"p",href:"/docs/installation/zwave"},"Zwave2Mqtt bridge"),". The integration is bi-directional, which means you can read values but also set values, for example to turn on a switch. The example below shows the integration of two Zwave power switches and a ",(0,o.yg)("a",{parentName:"p",href:"https://www.zwavetaiwan.com.tw/pst02"},"Philio Technology")," multi-sensor for temperature, luminance and motion detection."),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(4883).A,width:"2732",height:"1312"})),(0,o.yg)("h2",{id:"datasource"},"Datasource"),(0,o.yg)("p",null,"Create a new secret but instead of setting the type to ",(0,o.yg)("inlineCode",{parentName:"p"},"mqtt")," we now set the type to ",(0,o.yg)("inlineCode",{parentName:"p"},"script")," and let the script handle the MQTT interaction."),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(96289).A,width:"2732",height:"1122"})),(0,o.yg)("h2",{id:"script"},"Script"),(0,o.yg)("p",null,"Instead of using a JavaScript ",(0,o.yg)("inlineCode",{parentName:"p"},"mqtt.set()")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"mqtt.get()")," call we use a script that extracts the MQTT message and displays the data. The script also handles publishing MQTT topics to control devices by appending a ",(0,o.yg)("inlineCode",{parentName:"p"},"/set")," postfix to the topic and wrapping the value in a JSON object."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"const get = async (object, context) => {\n    let event = await mqtt.get(object)\n    return event.message\n}\n\nconst set = async (object, key, value, context) => {\n    var topic = object + '/' + key + '/set';\n    var message = '{\"value\":' + value + '}';\n    mqtt.publish(topic, message, context)\n}\n")),(0,o.yg)("p",null,"To test the script enter the code below and select ",(0,o.yg)("inlineCode",{parentName:"p"},"Run"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"let context = await encryption.secret(\"ZwaveSwitch\")\nlet event = await get('zwave/office', context)\nprint('State ' + JSON.stringify(event,null,2))\nawait set('zwave/office/lamp','on', false, context)\n")),(0,o.yg)("p",null,"When the test is run the output should look as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "pir": {\n    "temperature": {\n      "time": 1654609986703,\n      "value": 72\n    },\n    "illuminance": {\n      "time": 1654601135119,\n      "value": 36\n    },\n    "security": {\n      "time": 1654601135124,\n      "value": "Motion Detected at Unknown Location"\n    },\n  },\n  "printer": {\n    "voltage": {\n      "time": 1654610509073,\n      "value": 228.43\n    },\n    "ampere": {\n      "time": 1654610510075,\n      "value": 0\n    },\n    "kwh": {\n      "time": 1654610507086,\n      "value": 56.67\n    },\n    "on": {\n      "time": 1654609902578,\n      "value": true,\n      "set": {\n        "value": true\n      }\n    },\n  },\n  "lamp": {\n    "kwh": {\n      "time": 1654610714063,\n      "value": 96.55\n    },\n    "voltage": {\n      "time": 1654610715215,\n      "value": 234.42\n    },\n    "ampere": {\n      "time": 1654610716215,\n      "value": 0\n    },\n    "on": {\n      "time": 1654610709085,\n      "value": false,\n      "set": {\n        "value": false\n      }\n    },\n  }\n}\n')),(0,o.yg)("h2",{id:"connector"},"Connector"),(0,o.yg)("p",null,"The importer shows how the main topic ",(0,o.yg)("inlineCode",{parentName:"p"},"office.htc")," is mapped to the MQTT topic ",(0,o.yg)("inlineCode",{parentName:"p"},"zwave/office"),". This means that all subtopics are includes, such as ",(0,o.yg)("inlineCode",{parentName:"p"},"zwave/office/pir/temperature")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"zwave/office/lamp/voltage"),". The value of the field ",(0,o.yg)("inlineCode",{parentName:"p"},"zwave/office/lamp/on")," with value ",(0,o.yg)("inlineCode",{parentName:"p"},"true")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"false")," is mapped to the topic ",(0,o.yg)("inlineCode",{parentName:"p"},"office.htc.room.lamp.on")," with value ",(0,o.yg)("inlineCode",{parentName:"p"},"0")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"1"),". The MQTT also allows setting the value. The export is mapped to the topic ",(0,o.yg)("inlineCode",{parentName:"p"},"zwave/office/lamp/on"),". The ",(0,o.yg)("inlineCode",{parentName:"p"},"set")," function appends ",(0,o.yg)("inlineCode",{parentName:"p"},"/set")," to the topic so the MQTT topic becomes ",(0,o.yg)("inlineCode",{parentName:"p"},"zwave/office/lamp/on/set")," and the message becomes ",(0,o.yg)("inlineCode",{parentName:"p"},"{value: true}")),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(19216).A,width:"2732",height:"1802"})),(0,o.yg)("h2",{id:"form"},"Form"),(0,o.yg)("p",null,"To view the data and control the switches you can manually load the state for ",(0,o.yg)("inlineCode",{parentName:"p"},"office.htc.room.lamp.on")," and change the value from ",(0,o.yg)("inlineCode",{parentName:"p"},"0")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"1"),", or this can be done automatically by an automation script. To control the switch manually you can create a new form."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Room panel\n\nlamp.on:Lamp\n[powerbutton]\n\nprinter.on:Printer\n[powerbutton]\n\nLamp\n<lamp.power\n[000 W]\n\nPrinter\n<printer.power\n[000 W]\n\nTemperature\n<Math.round((temperature-32)*5/9)\n[16|18:magenta,18|22:green,22|25:red C]\n\nLuminance\n<luminance\n[0|30:grey,30|80:green,90|100:red %]\n")),(0,o.yg)("p",null,"After creating the form go to ",(0,o.yg)("inlineCode",{parentName:"p"},"Items")," and search for ",(0,o.yg)("inlineCode",{parentName:"p"},"office.htc.room"),". In this form you can view the data and press the switches."))}m.isMDXComponent=!0},19216:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/connector_zwave_office-546cc0e938c39ed0acbe2cdc4b4bdc67.png"},4883:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/item_room-0334bee2c4fd12a593aa0ac66e895faf.png"},96289:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/secret_zwave_switch-96254e51b933bb0ff0102d33a25ca127.png"}}]);