(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6445],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8947:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:60},s="Zwave",p={unversionedId:"integrations/zwave",id:"integrations/zwave",isDocsHomePage:!1,title:"Zwave",description:"This integration uses a script for subscribing and publishing to an MQTT server connected to the Zwave2Mqtt bridge. The integration is bi-directional, which means you can read values but also set values, for example to turn on a switch. The example below shows the integration of two Zwave power switches and a Philio Technology multi-sensor for temperature, luminance and motion detection.",source:"@site/docs/integrations/zwave.md",sourceDirName:"integrations",slug:"/integrations/zwave",permalink:"/docs/integrations/zwave",version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"defaultSidebar",previous:{title:"MQTT",permalink:"/docs/integrations/mqtt"},next:{title:"Fritzbox",permalink:"/docs/integrations/fritzbox"}},l=[{value:"Datasource",id:"datasource",children:[]},{value:"Script",id:"script",children:[]},{value:"Connector",id:"connector",children:[]},{value:"Form",id:"form",children:[]}],u={toc:l};function m(e){var t=e.components,c=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"zwave"},"Zwave"),(0,o.kt)("p",null,"This integration uses a script for subscribing and publishing to an MQTT server connected to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/installation/zwave"},"Zwave2Mqtt bridge"),". The integration is bi-directional, which means you can read values but also set values, for example to turn on a switch. The example below shows the integration of two Zwave power switches and a ",(0,o.kt)("a",{parentName:"p",href:"https://www.zwavetaiwan.com.tw/pst02"},"Philio Technology")," multi-sensor for temperature, luminance and motion detection."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3348).Z})),(0,o.kt)("h2",{id:"datasource"},"Datasource"),(0,o.kt)("p",null,"Create a new secret but instead of setting the type to ",(0,o.kt)("inlineCode",{parentName:"p"},"mqtt")," we now set the type to ",(0,o.kt)("inlineCode",{parentName:"p"},"script")," and let the script handle the MQTT interaction."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2900).Z})),(0,o.kt)("h2",{id:"script"},"Script"),(0,o.kt)("p",null,"Instead of using a JavaScript ",(0,o.kt)("inlineCode",{parentName:"p"},"mqtt.set()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mqtt.get()")," call we use a script that extracts the MQTT message and displays the data. The script also handles publishing MQTT topics to control devices by appending a ",(0,o.kt)("inlineCode",{parentName:"p"},"/set")," postfix to the topic and wrapping the value in a JSON object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const get = async (object, context) => {\n    let event = await mqtt.get(object)\n    return event.message\n}\n\nconst set = async (object, key, value, context) => {\n    var topic = object + '/' + key + '/set';\n    var message = '{\"value\":' + value + '}';\n    mqtt.publish(topic, message, context)\n}\n")),(0,o.kt)("p",null,"To test the script enter the code below and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Run"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let context = await encryption.secret(\"ZwaveSwitch\")\nlet event = await get('zwave/office', context)\nprint('State ' + JSON.stringify(event,null,2))\nawait set('zwave/office/lamp','on', false, context)\n")),(0,o.kt)("p",null,"When the test is run the output should look as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pir": {\n    "temperature": {\n      "time": 1654609986703,\n      "value": 72\n    },\n    "illuminance": {\n      "time": 1654601135119,\n      "value": 36\n    },\n    "security": {\n      "time": 1654601135124,\n      "value": "Motion Detected at Unknown Location"\n    },\n  },\n  "printer": {\n    "voltage": {\n      "time": 1654610509073,\n      "value": 228.43\n    },\n    "ampere": {\n      "time": 1654610510075,\n      "value": 0\n    },\n    "kwh": {\n      "time": 1654610507086,\n      "value": 56.67\n    },\n    "on": {\n      "time": 1654609902578,\n      "value": true,\n      "set": {\n        "value": true\n      }\n    },\n  },\n  "lamp": {\n    "kwh": {\n      "time": 1654610714063,\n      "value": 96.55\n    },\n    "voltage": {\n      "time": 1654610715215,\n      "value": 234.42\n    },\n    "ampere": {\n      "time": 1654610716215,\n      "value": 0\n    },\n    "on": {\n      "time": 1654610709085,\n      "value": false,\n      "set": {\n        "value": false\n      }\n    },\n  }\n}\n')),(0,o.kt)("h2",{id:"connector"},"Connector"),(0,o.kt)("p",null,"The importer shows how the main topic ",(0,o.kt)("inlineCode",{parentName:"p"},"office.htc")," is mapped to the MQTT topic ",(0,o.kt)("inlineCode",{parentName:"p"},"zwave/office"),". This means that all subtopics are includes, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"zwave/office/pir/temperature")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"zwave/office/lamp/voltage"),". The value of the field ",(0,o.kt)("inlineCode",{parentName:"p"},"zwave/office/lamp/on")," with value ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," is mapped to the topic ",(0,o.kt)("inlineCode",{parentName:"p"},"office.htc.room.lamp.on")," with value ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),". The MQTT also allows setting the value. The export is mapped to the topic ",(0,o.kt)("inlineCode",{parentName:"p"},"zwave/office/lamp/on"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"set")," function appends ",(0,o.kt)("inlineCode",{parentName:"p"},"/set")," to the topic so the MQTT topic becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"zwave/office/lamp/on/set")," and the message becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"{value: true}")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9922).Z})),(0,o.kt)("h2",{id:"form"},"Form"),(0,o.kt)("p",null,"To view the data and control the switches you can manually load the state for ",(0,o.kt)("inlineCode",{parentName:"p"},"office.htc.room.lamp.on")," and change the value from ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),", or this can be done automatically by an automation script. To control the switch manually you can create a new form."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Room panel\n\nlamp.on:Lamp\n[powerbutton]\n\nprinter.on:Printer\n[powerbutton]\n\nLamp\n<lamp.power\n[000 W]\n\nPrinter\n<printer.power\n[000 W]\n\nTemperature\n<Math.round((temperature-32)*5/9)\n[16|18:magenta,18|22:green,22|25:red C]\n\nLuminance\n<luminance\n[0|30:grey,30|80:green,90|100:red %]\n")),(0,o.kt)("p",null,"After creating the form go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Items")," and search for ",(0,o.kt)("inlineCode",{parentName:"p"},"office.htc.room"),". In this form you can view the data and press the switches."))}m.isMDXComponent=!0},9922:function(e,t,n){"use strict";t.Z=n.p+"assets/images/connector_zwave_office-546cc0e938c39ed0acbe2cdc4b4bdc67.png"},3348:function(e,t,n){"use strict";t.Z=n.p+"assets/images/item_room-0334bee2c4fd12a593aa0ac66e895faf.png"},2900:function(e,t,n){"use strict";t.Z=n.p+"assets/images/secret_zwave_switch-96254e51b933bb0ff0102d33a25ca127.png"}}]);