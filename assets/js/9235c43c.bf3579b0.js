(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6445],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8947:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:20},c="Zwave",p={unversionedId:"integrations/zwave",id:"integrations/zwave",isDocsHomePage:!1,title:"Zwave",description:"This integration uses a script for subscribing and publishing to an MQTT server connected to the Zwave2Mqtt bridge. The integration is bi-directional, which means you can read values but also set values, for example to turn on a switch.",source:"@site/docs/integrations/zwave.md",sourceDirName:"integrations",slug:"/integrations/zwave",permalink:"/docs/integrations/zwave",version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"defaultSidebar",previous:{title:"OpenWeather",permalink:"/docs/integrations/openweather"},next:{title:"Tuya",permalink:"/docs/integrations/tuya"}},l=[{value:"Secret",id:"secret",children:[]},{value:"Script",id:"script",children:[]},{value:"Importer",id:"importer",children:[]},{value:"Exporter",id:"exporter",children:[]}],u={toc:l};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"zwave"},"Zwave"),(0,o.kt)("p",null,"This integration uses a script for subscribing and publishing to an MQTT server connected to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/installation/zwave"},"Zwave2Mqtt bridge"),". The integration is bi-directional, which means you can read values but also set values, for example to turn on a switch. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Usage: Read and control wireless Zwave devices such as sensors and controllers.")),(0,o.kt)("h2",{id:"secret"},"Secret"),(0,o.kt)("p",null,"Create a new secret but instead of setting the type to ",(0,o.kt)("inlineCode",{parentName:"p"},"mqtt")," we now set the type to ",(0,o.kt)("inlineCode",{parentName:"p"},"script")," and let the script handle the MQTT interaction."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2900).Z})),(0,o.kt)("h2",{id:"script"},"Script"),(0,o.kt)("p",null,"The Zwave2MQTT bridge returns the value in a JSON object with the format ",(0,o.kt)("inlineCode",{parentName:"p"},'{"value": 100, "time": 1653474051550}')," The script gets the last value from the MQTT topic and returns an object with the topic, value and time of the last message."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const get = async (object, context) => {\n    let event = await mqtt.get(object)\n    return {object: object, value: event.message.value, time: event.message.time}\n}\n\nconst set = async (object, key, value, context) => {\n    var topic = object + '/set';\n    var message = '{\"value\":' + value + '}';\n    mqtt.publish(topic, message, context)\n}\n")),(0,o.kt)("p",null,"To test the script enter the code below and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Run"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let context = await encryption.secret(\"ZwaveSwitch\")\nlet event = await get('zwave/office/lamp/voltage', context)\nprint('State ' + JSON.stringify(event))\n")),(0,o.kt)("h2",{id:"importer"},"Importer"),(0,o.kt)("p",null,"The importer shows how three topics are mapped to MQTT topics. Note that the formula field has an expression that converts the ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," values to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),". "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(236).Z})),(0,o.kt)("h2",{id:"exporter"},"Exporter"),(0,o.kt)("p",null,"To send messages back to the MQTT server select ",(0,o.kt)("inlineCode",{parentName:"p"},"Exporters")," from the menu and create a new exporter. In the mapping the value of the field ",(0,o.kt)("inlineCode",{parentName:"p"},"on")," is converted back to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," and mapped to the MQTT topic ",(0,o.kt)("inlineCode",{parentName:"p"},"on"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1705).Z})),(0,o.kt)("p",null,"To test the connection select ",(0,o.kt)("inlineCode",{parentName:"p"},"States")," from the menu and search for the state of topic ",(0,o.kt)("inlineCode",{parentName:"p"},"office.htc.lamp.on")," and change the value from ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," or vice versa. The switch should then be turned on or off."))}d.isMDXComponent=!0},1705:function(e,t,n){"use strict";t.Z=n.p+"assets/images/exporter_zwave_switch-71f34e185b0bc31b9a93ec35ef554a76.png"},236:function(e,t,n){"use strict";t.Z=n.p+"assets/images/importer_zwave_switch-dd453f559ed4ce0f8fc7aa9031c0160b.png"},2900:function(e,t,n){"use strict";t.Z=n.p+"assets/images/secret_zwave_switch-96254e51b933bb0ff0102d33a25ca127.png"}}]);