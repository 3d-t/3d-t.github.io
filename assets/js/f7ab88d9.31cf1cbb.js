"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8262],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,y=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(9668),r=(n(6540),n(5680));const i={sidebar_position:10},o="Concept",l={unversionedId:"integrations/concept",id:"integrations/concept",title:"Concept",description:"Simple integrations can be created as discussed in the importer section. You can make more complex integrations that include complex authentication, custom data processing or invokation of other web services. These integrations can be created with JavaScript or by creating a web service that supports a standard API. When the web service is deployed on the Kubernetes cluster it can be used by importers and automations.",source:"@site/docs/integrations/concept.md",sourceDirName:"integrations",slug:"/integrations/concept",permalink:"/docs/integrations/concept",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"MQTT",permalink:"/docs/import/mqtt"},next:{title:"Tesla",permalink:"/docs/integrations/tesla"}},s={},p=[{value:"JavaScript",id:"javascript",level:2},{value:"Webservice",id:"webservice",level:2},{value:"Authorization",id:"authorization",level:3},{value:"Read",id:"read",level:3},{value:"Update",id:"update",level:3},{value:"JavaScript or Web Service",id:"javascript-or-web-service",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"concept"},"Concept"),(0,r.yg)("p",null,"Simple integrations can be created as discussed in the ",(0,r.yg)("inlineCode",{parentName:"p"},"importer")," section. You can make more complex integrations that include complex authentication, custom data processing or invokation of other web services. These integrations can be created with JavaScript or by creating a web service that supports a standard API. When the web service is deployed on the Kubernetes cluster it can be used by importers and automations."),(0,r.yg)("h2",{id:"javascript"},"JavaScript"),(0,r.yg)("p",null,"Scripts are used for relatively simple integrations that do not require intermediate caching of data or third-party integration libraries.  A script has an ",(0,r.yg)("inlineCode",{parentName:"p"},"init")," function that is called automatically to pass an encrypted secret. The secret may have fields for username, password or an URL. The secret is a JSON object that it created from the fields in the definition of the secret. The script should also support a ",(0,r.yg)("inlineCode",{parentName:"p"},"get")," function that has an object as a parameter. It should return a JSON object with information about the value of the object. You can optionally define a ",(0,r.yg)("inlineCode",{parentName:"p"},"set")," function. This takes the object, key and value and does something like calling another web service or sending a message. The scripts are executed an a sandbox environment on Node.js and support the ECMAScript (ECMA-262) language specification. Note that the ",(0,r.yg)("inlineCode",{parentName:"p"},"get")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"set")," functions should be marked as ",(0,r.yg)("inlineCode",{parentName:"p"},"async")," so that they are non-blocking."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},"\nclass Example {\n\n    init(secret) {\n        this.secret = secret\n    }\n\n    async get(object){\n        let result = await http.get(secret.url)\n        return {object: object, temperature: result.t, humidity: result.h}\n    }\n\n    async set(object, key, value){\n        // do something\n    }\n}\n\n")),(0,r.yg)("h2",{id:"webservice"},"Webservice"),(0,r.yg)("p",null,"Web services can be created in any framework such a Python, NodeJs, Go or Java. You can use third-party packages and libraries. The service is packaged in a Docker container and a Helm chart is provided for easy installation and upgrades by users.  A web service should support the following APIs."),(0,r.yg)("h3",{id:"authorization"},"Authorization"),(0,r.yg)("p",null,"This call returns a list of fields that are required by the service for authentication and configuration."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"GET\n/authorization\n\ncurl http://localhost:3090/authorization\n")),(0,r.yg)("p",null,"Response:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "serialnumber":"Serial number of the device",\n    "accesscode":"Access code",\n    "password":"Password that you use in the app"\n}\n')),(0,r.yg)("p",null,"With this call you pass the authorization information in a JSON body and an access token is returned. This token should be included in subsequent ",(0,r.yg)("inlineCode",{parentName:"p"},"get")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"set")," requests."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'POST\n/token\n\ncurl -X POST -H \'Content-Type: application/json\' -i http://localhost:3090/token --data \'{"serialnumber":"112","accesscode":"123-1212","password":"secret"}\'\n')),(0,r.yg)("p",null,"Response:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "Authorization":"eyJzZXJpYWxudW1iZXIiOiIxMTIiLCJhY2Nlc3Njb2RlIjoiMTIzLTEyMTIiLCJwYXNzd29yZCI6InNlY3JldCJ9"\n}\n')),(0,r.yg)("h3",{id:"read"},"Read"),(0,r.yg)("p",null,"To get the values of an object use a ",(0,r.yg)("inlineCode",{parentName:"p"},"GET")," request where the object id is include as a path parameter and the token is included in a header called ",(0,r.yg)("inlineCode",{parentName:"p"},"Authorization"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"GET\n/:object\n\ncurl -X GET -H 'Content-Type: application/json' -H 'Authorization: eyJzZXJpYWxudW1iZXIiOiIxMTIiLCJhY2Nlc3Njb2RlIjoiMTIzLTEyMTIiLCJwYXNzd29yZCI6InNlY3JldCJ9' -i http://localhost:3090/112\n")),(0,r.yg)("p",null,"Response:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "object": "559911827",\n    "thermostat": 15,\n    "hot_water_active": 1,\n    "outside_temperature": 19,\n    "interior_temperature": 20.3,\n    "pressure": 1.4,\n    "display": "0H-203 Standby"\n}\n')),(0,r.yg)("h3",{id:"update"},"Update"),(0,r.yg)("p",null,"To set the values of an object use a ",(0,r.yg)("inlineCode",{parentName:"p"},"PUT")," request where the object id is include as a path parameter and keys and values are included as a JSON object in the body:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"PUT\n/:object\n\ncurl -X POST -H 'Content-Type: application/json' -H 'Authorization: eyJzZXJpYWxudW1iZXIiOiIxMTIiLCJhY2Nlc3Njb2RlIjoiMTIzLTEyMTIiLCJwYXNzd29yZCI6InNlY3JldCJ9' -i http://localhost:3090/112 --data '{\"thermostat\": \"19\"}'\n\n")),(0,r.yg)("h2",{id:"javascript-or-web-service"},"JavaScript or Web Service"),(0,r.yg)("p",null,"The table below helps you to choose between the standard connector, JavaScript engine or Web service for integrating functionality. For example, if you need to make an HTTP request with basic authentication you can do this with the standard importer in combination with a secret that contains information about the authorization header that is sent with the request. If the integration requires multi pass authentication where a JSON web token is obtained this can be implemented with a script of web service. A script does not allow you to share or store any information between sessions except what is specified in a secret."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Aspect"),(0,r.yg)("th",{parentName:"tr",align:null},"Standard connector"),(0,r.yg)("th",{parentName:"tr",align:null},"JavaScript"),(0,r.yg)("th",{parentName:"tr",align:null},"Web service"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Ease of implementation"),(0,r.yg)("td",{parentName:"tr",align:null},"+"),(0,r.yg)("td",{parentName:"tr",align:null},"+"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Ease to making changes"),(0,r.yg)("td",{parentName:"tr",align:null},"+"),(0,r.yg)("td",{parentName:"tr",align:null},"+"),(0,r.yg)("td",{parentName:"tr",align:null},"o")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MQTT"),(0,r.yg)("td",{parentName:"tr",align:null},"+"),(0,r.yg)("td",{parentName:"tr",align:null},"+"),(0,r.yg)("td",{parentName:"tr",align:null},"+")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"HTTP"),(0,r.yg)("td",{parentName:"tr",align:null},"+"),(0,r.yg)("td",{parentName:"tr",align:null},"+"),(0,r.yg)("td",{parentName:"tr",align:null},"+")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Use Node.js"),(0,r.yg)("td",{parentName:"tr",align:null},"+"),(0,r.yg)("td",{parentName:"tr",align:null},"+"),(0,r.yg)("td",{parentName:"tr",align:null},"+")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Simple authentication"),(0,r.yg)("td",{parentName:"tr",align:null},"+"),(0,r.yg)("td",{parentName:"tr",align:null},"+"),(0,r.yg)("td",{parentName:"tr",align:null},"+")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Multi step authentication"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"+"),(0,r.yg)("td",{parentName:"tr",align:null},"+")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Multi step authentication"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"+"),(0,r.yg)("td",{parentName:"tr",align:null},"+")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Caching and data storage"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"+")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Integration with libraries"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"+")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Use Python, C, Rust, Go, Java"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"+")))),(0,r.yg)("p",null,"In the next sections some example integrations with scripts and web services are discussed."))}d.isMDXComponent=!0}}]);