(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7218],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4390:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),o=["components"],s={sidebar_position:160},c="MQTT",p={unversionedId:"import/mqtt",id:"import/mqtt",isDocsHomePage:!1,title:"MQTT",description:"MQTT is a lightweight protocol for publishing and subscribing to messages. It is often used in IoT applications. The IoT devices publish their data to an MQTT server, which can be public or private. Importers subscribe to a topic defined in the datasource and when a message is received the content is stored on the server. The content, time and topic of the message can be imported with an importer at regular scheduled intervals, or immediately if data is received. By using an importer to pull MQTT data you can avoid system overload when MQTT devices publish information at a very high rate. When MQTT data is received the last value stored in the cache is updated so that the importer always reads the most recent value.",source:"@site/docs/import/mqtt.md",sourceDirName:"import",slug:"/import/mqtt",permalink:"/docs/import/mqtt",version:"current",sidebarPosition:160,frontMatter:{sidebar_position:160},sidebar:"defaultSidebar",previous:{title:"SSH",permalink:"/docs/import/ssh"},next:{title:"Concept",permalink:"/docs/integrations/concept"}},l=[{value:"Datasource",id:"datasource",children:[]},{value:"Importer",id:"importer",children:[]}],d={toc:l};function u(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mqtt"},"MQTT"),(0,a.kt)("p",null,"MQTT is a lightweight protocol for publishing and subscribing to messages. It is often used in IoT applications. The IoT devices publish their data to an MQTT server, which can be public or private. Importers subscribe to a topic defined in the datasource and when a message is received the content is stored on the server. The content, time and topic of the message can be imported with an importer at regular scheduled intervals, or immediately if data is received. By using an importer to pull MQTT data you can avoid system overload when MQTT devices publish information at a very high rate. When MQTT data is received the last value stored in the cache is updated so that the importer always reads the most recent value. "),(0,a.kt)("h2",{id:"datasource"},"Datasource"),(0,a.kt)("p",null,"The data source for an MQTT connection is defined as a secret. Create a new secret and set type to ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt"),". Enter the name of IP address in the field ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," and optionally enter fields for ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"password")," in case the MQTT server requires authentication. Specify the MQTT topic in the ",(0,a.kt)("inlineCode",{parentName:"p"},"topic")," field. Make sure you add ",(0,a.kt)("inlineCode",{parentName:"p"},"/#")," to include all sub topic if necessary."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9438).Z})),(0,a.kt)("h2",{id:"importer"},"Importer"),(0,a.kt)("p",null,"Create a new importer and set the secret as the data source. When you ",(0,a.kt)("inlineCode",{parentName:"p"},"Run")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Test")," the importer the most recent topics are loaded. Define one or more objects to map the MQTT topics to topics. In the ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," field you enter the name of the original MQTT topic. All MQTT entries include a ",(0,a.kt)("inlineCode",{parentName:"p"},"time")," field for when the event was received. Note that in this example the key is left blank because in the object mapping there is already a seperate topic for each MQTT value."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9064).Z})),(0,a.kt)("p",null,"An MQTT value can be a single value like ",(0,a.kt)("inlineCode",{parentName:"p"},"100")," or a JSON object like ",(0,a.kt)("inlineCode",{parentName:"p"},'{"temperature": 100, "color": "red"}'),"."))}u.isMDXComponent=!0},9064:function(e,t,r){"use strict";t.Z=r.p+"assets/images/importer_mqtt_office-3d4f793244f871271c9d1bde10738e30.png"},9438:function(e,t,r){"use strict";t.Z=r.p+"assets/images/secret_zwave_office-56a8670353d8c46ea8e03b9f259d9cb2.png"}}]);