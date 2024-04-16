"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3106],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(t),d=a,m=g["".concat(l,".").concat(d)]||g[d]||h[d]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[g]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},70763:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const o={sidebar_position:20},i="Tesla",s={unversionedId:"integrations/tesla",id:"integrations/tesla",title:"Tesla",description:"Tesla car owners can access their car via the Tesla app, for example to open doors, set the temperature or start charging. There is unoffical API that is used by the Android and IOS apps. The Tesla integration allows you to read all information from a car and send commands such as turning on the climate or start charging. With the integration of the Tesla API you can implement an intelligent charging system that starts charging when you have enough power from solar panels.",source:"@site/docs/integrations/tesla.md",sourceDirName:"integrations",slug:"/integrations/tesla",permalink:"/docs/integrations/tesla",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"defaultSidebar",previous:{title:"Concept",permalink:"/docs/integrations/concept"},next:{title:"Home Assistant",permalink:"/docs/integrations/homeassistant"}},l={},c=[{value:"Web service",id:"web-service",level:2},{value:"Datasource",id:"datasource",level:2},{value:"Connector",id:"connector",level:2},{value:"Form",id:"form",level:2}],p={toc:c},g="wrapper";function h(e){let{components:n,...o}=e;return(0,a.yg)(g,(0,r.A)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"tesla"},"Tesla"),(0,a.yg)("p",null,"Tesla car owners can access their car via the Tesla app, for example to open doors, set the temperature or start charging. There is ",(0,a.yg)("a",{parentName:"p",href:"https://tesla-api.timdorr.com/"},"unoffical API")," that is used by the Android and IOS apps. The Tesla integration allows you to read all information from a car and send commands such as turning on the climate or start charging. With the integration of the Tesla API you can implement an intelligent charging system that starts charging when you have enough power from solar panels."),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(11388).A,width:"2732",height:"1802"})),(0,a.yg)("h2",{id:"web-service"},"Web service"),(0,a.yg)("p",null,"This docker web service for the Tesla integration uses the Python open source ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/tdorssers/TeslaPy"},"TeslaPy")," package. To install the Tesla web service on your local cluster run: "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"helm install 3d-t/tesla tesla\n")),(0,a.yg)("p",null,"Perform a one-time manual authentication by listing the name of the tesla pod and executing a command with the email adress for your Tesla account:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"kubectl get pods\nkubectl exec -it <tesla> python3 register.py <your_email>\n")),(0,a.yg)("p",null,"Copy the URL into a web browser and enter your username and password. Copy the URL and paste to the command line.\nVerify that the authentication is succesful:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"}," kubectl exec -it <tesla> cat cache.json\n")),(0,a.yg)("h2",{id:"datasource"},"Datasource"),(0,a.yg)("p",null,"In the field ",(0,a.yg)("inlineCode",{parentName:"p"},"service")," enter the hostname of where the Tesla webservice is running locally, such as ",(0,a.yg)("inlineCode",{parentName:"p"},"tesla.mydomain.com"),". The field ",(0,a.yg)("inlineCode",{parentName:"p"},"username")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"password")," enter the same information as used in the app."),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(87431).A,width:"2732",height:"792"})),(0,a.yg)("h2",{id:"connector"},"Connector"),(0,a.yg)("p",null,"In the connector specify the secret that contains the Tesla data source. Add an object mapping for each device. The object ID is the VIN (Vehicle Identification Number) of the car. There is a custom field ",(0,a.yg)("inlineCode",{parentName:"p"},"charging")," which is not supplied by the input data but is set to ",(0,a.yg)("inlineCode",{parentName:"p"},"0")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"1")," depending on the charging power. This field will be used to start or stop the charging process. The field ",(0,a.yg)("inlineCode",{parentName:"p"},"charge_level_soc"),", which indicates the user selected charging level, is renamed to ",(0,a.yg)("inlineCode",{parentName:"p"},"charge_level"),". Furthermore, the ",(0,a.yg)("inlineCode",{parentName:"p"},"odometer")," field has a conversion factor from miles to kilometers."),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(61910).A,width:"2732",height:"1802"})),(0,a.yg)("p",null,"The exporter contains an entry for setting the ",(0,a.yg)("inlineCode",{parentName:"p"},"charge_level")," and for starting and stopping the charging process via the key ",(0,a.yg)("inlineCode",{parentName:"p"},"charging"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"climate")," to turn on the climate system. For security reasons some commands like opening the doors and starting the car are not enabled in the API but these can be added if necessary."),(0,a.yg)("h2",{id:"form"},"Form"),(0,a.yg)("p",null,"To control the Tesla create a form with three pages and open the item ",(0,a.yg)("inlineCode",{parentName:"p"},"tesla.model_s"),". The first page has some overall information but does not include any controls."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Tesla\n\nSpeed\n<speed\n[000 kmh]\n\nPower\n<power\n[000 kW]\n\nOdometer\n<odometer\n[000000]\n\nDrive\n<shift_state\n\nBattery level\n<battery_level\n[0|10:red,11|20:orange,21|100:green]\n\nBattery range\n<battery_range\n[0|50:red,50|100:orange,100|600:green 000]\n\n")),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(40270).A,width:"2732",height:"1802"})),(0,a.yg)("p",null,"The second and third pages include controls for the climate and charging. To modify any of the parameters open the item ",(0,a.yg)("inlineCode",{parentName:"p"},"tesla.model_s")," and click on the ",(0,a.yg)("inlineCode",{parentName:"p"},"edit")," button. After making changes click on ",(0,a.yg)("inlineCode",{parentName:"p"},"save")," to execute the changes.  "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"--\x3e\nClimate\n[powerbutton]\n|6\n\nDefrost\n<is_preconditioning\n[powerbutton]\n|6\n\nThermostat driver\n[15|25]\n\nThermostat passenger\n[15|25]\n\nseat_heater_left\n[0|3]\n\nseat_heater_right\n[0|3]\n\nseat_heater_rear_left\n[0|3]\n|4\n\nseat_heater_rear_center\n[0|3]\n|4\n\nseat_heater_rear_right\n[0|3]\n|4\n\nOutside temp\n<exterior_temperature\n[0|10:purple,11|17:blue,18|21:green,22|25:red]\n\nInside temp\n<interior_temperature\n[0|10:purple,11|17:blue,18|21:green,22|25:red]\n\n--\x3e\n\nBattery level\n<battery_level\n[0|10:red,11|20:orange,21|100:green]\n\nBattery range\n<battery_range\n[0|50:red,50|100:orange,100|600:green 000]\n\nCharge limit\n[50|100]\n|12\n\nCharge amps\n[0|20]\n|12\n\nPower\n<charger_power\n[000 kWh]\n|4\n\nVoltage\n<charger_voltage\n[000 V]\n|4\n\nCurrent\n<charger_current\n[00.0 A]\n|4\n\nCharging state\n<charging_state\n|6\n\nCharging\n[powerbutton]\n|6\n")),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(94277).A,width:"2732",height:"1802"})))}h.isMDXComponent=!0},61910:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/connector_tesla-f5357b2a79a59f8df7764158d625ab37.png"},40270:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/item_tesla_1-fa5f921b9096c8008d7ddec08eac766b.png"},94277:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/item_tesla_2-b22c3ce0f7c84bed5365828f7fe17e06.png"},11388:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/item_tesla_3-0539a59d9841fb85218e9482b2b989a6.png"},87431:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/secret_tesla-758c6d91be9f05ee289efd58b7b89e95.png"}}]);