"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5990],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var o=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,m=p["".concat(c,".").concat(u)]||p[u]||h[u]||i;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(9668),r=(n(6540),n(5680));const i={sidebar_position:70},a="Fritzbox",s={unversionedId:"integrations/fritzbox",id:"integrations/fritzbox",title:"Fritzbox",description:"A router can be used to detect if somebody is present at a location with a WIFI network. The Fritzbox integration connects to the router and retreives a list of devices that are connected. You can use this integration to show a screen at the office that automatically shows who is present based on the WIFI connection of their phone. This may help to comply to legal requirements in some buildings that mandate that at all times a list of all persons in the building should be maintained. The information about presence can also be used to automatically turn on heating, cooling, lights and other devices based on current building occupancy.",source:"@site/docs/integrations/fritzbox.md",sourceDirName:"integrations",slug:"/integrations/fritzbox",permalink:"/docs/integrations/fritzbox",draft:!1,tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70},sidebar:"defaultSidebar",previous:{title:"Zwave",permalink:"/docs/integrations/zwave"},next:{title:"SolarEdge",permalink:"/docs/integrations/solaredge"}},c={},l=[{value:"Script",id:"script",level:2},{value:"Datasource",id:"datasource",level:2},{value:"Importer",id:"importer",level:2},{value:"Form",id:"form",level:2}],d={toc:l},p="wrapper";function h(e){let{components:t,...i}=e;return(0,r.yg)(p,(0,o.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"fritzbox"},"Fritzbox"),(0,r.yg)("p",null,"A router can be used to detect if somebody is present at a location with a WIFI network. The Fritzbox integration connects to the router and retreives a list of devices that are connected. You can use this integration to show a screen at the office that automatically shows who is present based on the WIFI connection of their phone. This may help to comply to legal requirements in some buildings that mandate that at all times a list of all persons in the building should be maintained. The information about presence can also be used to automatically turn on heating, cooling, lights and other devices based on current building occupancy."),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(6344).A,width:"2732",height:"512"})),(0,r.yg)("h2",{id:"script"},"Script"),(0,r.yg)("p",null,"Create a new script with name ",(0,r.yg)("inlineCode",{parentName:"p"},"Fritzbox"),". The script shows how you can implement a more complex multi pass authentication for accessing the device information. The script first connects to the router with the username to request a token called ",(0,r.yg)("inlineCode",{parentName:"p"},"Challenge"),". This token is combined with the password and encoded to a UTF-16LE string. This is used to request a token and the response is an XML file. The XML is converted to JSON and the session is ",(0,r.yg)("inlineCode",{parentName:"p"},"SID")," is obtained. In a third call the state of the router is requested via an HTTP request. If the object passed to the ",(0,r.yg)("inlineCode",{parentName:"p"},"get")," functions is found in the ",(0,r.yg)("inlineCode",{parentName:"p"},"net.devices")," JSON array the value is set to ",(0,r.yg)("inlineCode",{parentName:"p"},"1"),", or else ",(0,r.yg)("inlineCode",{parentName:"p"},"0"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},"const get = async (object, context) => {\n    let connections = await devices(context)\n    let connected = connections.find(item => item.name === object) ? 1: 0\n    return {object, connected}\n}\n\nconst devices = async (context) => {\n    let sid = await SID(context);\n    let res = await http.get(context.host + '/data.lua?sid=' + sid, \"1 minute\")\n    let devices = res.data.net.devices;\n    return devices\n}\n\nconst SID = async (context) => {\n    let response = await http.get(context.host + '/login_sid.lua?username=' + context.username, \"1 minute\");\n      let json = await xml.toJson(response).then(result => {return(result)}).catch(err=>error(err));\n    let challenge = json.SessionInfo.Challenge;\n    let token = encryption.encode(challenge + '-' + context.password, \"UTF-16LE\");\n    token = encryption.md5(token)\n    response = await http.get(context.host + '/login_sid.lua?username=' + context.username + '&response='+challenge+'-'+token, \"1 minute\");\n    json = await xml.toJson(response).then(result => {return(result)}).catch(err=>error(err));\n    return json.SessionInfo.SID\n}\n")),(0,r.yg)("p",null,"Note that you can test the script before running the importer. To paste the code below in the ",(0,r.yg)("inlineCode",{parentName:"p"},"test")," field of the script and click ",(0,r.yg)("inlineCode",{parentName:"p"},"Run"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},"let context = await encryption.secret('Fritzbox');\nlet home = await get('iPhoneGary', context)\nprint(JSON.stringify(home))\n")),(0,r.yg)("h2",{id:"datasource"},"Datasource"),(0,r.yg)("p",null,"Create a new secret with a ",(0,r.yg)("inlineCode",{parentName:"p"},"type")," set to ",(0,r.yg)("inlineCode",{parentName:"p"},"script")," and fields for the ",(0,r.yg)("inlineCode",{parentName:"p"},"host"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"username")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"password"),". The ",(0,r.yg)("inlineCode",{parentName:"p"},"host")," should be the URL to the admin port of the router, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"https://fritzbox.mydomain.com:1443"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(5238).A,width:"2732",height:"1122"})),(0,r.yg)("h2",{id:"importer"},"Importer"),(0,r.yg)("p",null,"Create a new importer and set the ",(0,r.yg)("inlineCode",{parentName:"p"},"Datasource")," to the secret that defines the Fritzbox connection. Add one or more objects for which the script should be called. The field ",(0,r.yg)("inlineCode",{parentName:"p"},"Object")," should contain the name of the device as it is registed with the router, typically the name of the smartphone."),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(2452).A,width:"2732",height:"1802"})),(0,r.yg)("h2",{id:"form"},"Form"),(0,r.yg)("p",null,"Create a new form with the definition below. The form has three 'led' like symbols that turn green if the person is home and grey if not. The form has tree items where the ",(0,r.yg)("inlineCode",{parentName:"p"},"<")," symbol is used to define an input formula for displaying the value. The ",(0,r.yg)("inlineCode",{parentName:"p"},"[led]")," field indicates that the form control should be a led and the ",(0,r.yg)("inlineCode",{parentName:"p"},"|4")," means that each control should take 4 of 12 columns in a row."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Presence\n\nAlice Wood\n<alice.present\n[led]\n|4\n\nBob Smith\n<bob.present\n[led]\n|4\n\nCharlie Green\n<charlie.present\n[led]\n|4\n\n")),(0,r.yg)("p",null,"After running the connector go to ",(0,r.yg)("inlineCode",{parentName:"p"},"items")," and search for the item ",(0,r.yg)("inlineCode",{parentName:"p"},"home.presence"),". If you open the item the newly created form with be used"))}h.isMDXComponent=!0},2452:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/importer_fritzbox-bd8a752a99ddca8cea8900e83c2d0d5f.png"},6344:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/item_presence-0adb2551d856dfef25eacf7d042733d1.png"},5238:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/secret_fritzbox-dda4929c84ca10d6c2842eb912415e79.png"}}]);