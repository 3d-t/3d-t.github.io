(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2701],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9891:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:10},c="Fritzbox",l={unversionedId:"integrations/fritzbox",id:"integrations/fritzbox",isDocsHomePage:!1,title:"Fritzbox",description:"A router can be used to detect if somebody is present at a location with a WIFI network. The Fritzbox integration connects to the router and retreives a list of devices that are connected. You can use this integration to show a screen at the office that automatically shows who is present based on the WIFI connection of their phone. This may help to comply to legal requirements in some buildings that mandate that at all times a list of all persons in the building should be maintained. The information about presence can also be used to automatically turn on heating, cooling, lights and other devices based on current building occupancy.",source:"@site/docs/integrations/fritzbox.md",sourceDirName:"integrations",slug:"/integrations/fritzbox",permalink:"/docs/integrations/fritzbox",version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"Concept",permalink:"/docs/integrations/concept"},next:{title:"OpenWeather",permalink:"/docs/integrations/openweather"}},p=[{value:"Script",id:"script",children:[]},{value:"Datasource",id:"datasource",children:[]},{value:"Importer",id:"importer",children:[]},{value:"Form",id:"form",children:[]}],d={toc:p};function u(e){var t=e.components,s=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fritzbox"},"Fritzbox"),(0,i.kt)("p",null,"A router can be used to detect if somebody is present at a location with a WIFI network. The Fritzbox integration connects to the router and retreives a list of devices that are connected. You can use this integration to show a screen at the office that automatically shows who is present based on the WIFI connection of their phone. This may help to comply to legal requirements in some buildings that mandate that at all times a list of all persons in the building should be maintained. The information about presence can also be used to automatically turn on heating, cooling, lights and other devices based on current building occupancy."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8652).Z})),(0,i.kt)("h2",{id:"script"},"Script"),(0,i.kt)("p",null,"Create a new script with name ",(0,i.kt)("inlineCode",{parentName:"p"},"Fritzbox"),". The script shows how you can implement a more complex multi pass authentication for accessing the device information. The script first connects to the router with the username to request a token called ",(0,i.kt)("inlineCode",{parentName:"p"},"Challenge"),". This token is combined with the password and encoded to a UTF-16LE string. This is used to request a token and the response is an XML file. The XML is converted to JSON and the session is ",(0,i.kt)("inlineCode",{parentName:"p"},"SID")," is obtained. In a third call the state of the router is requested via an HTTP request. If the object passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," functions is found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"net.devices")," JSON array the value is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", or else ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const get = async (object, context) => {\n    let connected = await objects(context)\n    let home = connected.find(item => item.name === object) ? 1: 0\n    return {object: object, home: home}\n}\n\nconst objects = async (context) => {\n    let sid = await SID(context);\n    let res = await http.get(context.host + '/data.lua?sid=' + sid, \"1 minute\")\n    let devices = res.data.net.devices;\n    return devices\n}\n\nconst SID = async (context) => {\n    let response = await http.get(context.host + '/login_sid.lua?username=' + context.username, \"1 minute\");\n      let json = await xml.toJson(response).then(result => {return(result)}).catch(err=>error(err));\n    let challenge = json.SessionInfo.Challenge;\n    let token = encryption.encode(challenge + '-' + context.password, \"UTF-16LE\");\n    token = encryption.md5(token)\n    response = await http.get(context.host + '/login_sid.lua?username=' + context.username + '&response='+challenge+'-'+token, \"1 minute\");\n    json = await xml.toJson(response).then(result => {return(result)}).catch(err=>error(err));\n    return json.SessionInfo.SID\n}\n")),(0,i.kt)("p",null,"Note that you can test the script before running the importer. To paste the code below in the ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," field of the script and click ",(0,i.kt)("inlineCode",{parentName:"p"},"Run"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"let context = await encryption.secret('Fritzbox');\nlet home = await get('iPhoneGary', context)\nprint(JSON.stringify(home))\n")),(0,i.kt)("h2",{id:"datasource"},"Datasource"),(0,i.kt)("p",null,"Create a new secret with a ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"script")," and fields for the ",(0,i.kt)("inlineCode",{parentName:"p"},"host"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"host")," should be the URL to the admin port of the router, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"https://fritzbox.mydomain.com:1443"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(362).Z})),(0,i.kt)("h2",{id:"importer"},"Importer"),(0,i.kt)("p",null,"Create a new importer and set the ",(0,i.kt)("inlineCode",{parentName:"p"},"Datasource")," to the secret that defines the Fritzbox connection. Add one or more objects for which the script should be called. The field ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")," should contain the name of the device as it is registed with the router, typically the name of the smartphone."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7330).Z})),(0,i.kt)("h2",{id:"form"},"Form"),(0,i.kt)("p",null,"Create a new form with the definition below. The form has three 'led' like symbols that turn green if the person is home and grey if not. The form has tree items where the ",(0,i.kt)("inlineCode",{parentName:"p"},"<")," symbol is used to define an input formula for displaying the value. The ",(0,i.kt)("inlineCode",{parentName:"p"},"[led]")," field indicates that the form control should be a led and the ",(0,i.kt)("inlineCode",{parentName:"p"},"|4")," means that each control should take 4 of 12 columns in a row."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Home presence\n\nAlice\n<alic.home\n[led]\n|4\n\nBob\n<bob.home\n[led]\n|4\n\nCharlie\n<charlie.home\n[led]\n|4\n")),(0,i.kt)("p",null,"After running the connector go to ",(0,i.kt)("inlineCode",{parentName:"p"},"items")," and search for the item ",(0,i.kt)("inlineCode",{parentName:"p"},"home.presence"),". If you open the item the newly created form with be used"))}u.isMDXComponent=!0},7330:function(e,t,n){"use strict";t.Z=n.p+"assets/images/importer_fritzbox-bd8a752a99ddca8cea8900e83c2d0d5f.png"},8652:function(e,t,n){"use strict";t.Z=n.p+"assets/images/item_presence-0adb2551d856dfef25eacf7d042733d1.png"},362:function(e,t,n){"use strict";t.Z=n.p+"assets/images/secret_fritzbox-dda4929c84ca10d6c2842eb912415e79.png"}}]);