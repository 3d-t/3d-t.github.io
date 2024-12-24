"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8152],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,y=d["".concat(s,".").concat(u)]||d[u]||g[u]||a;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},60184:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(58168),o=(t(96540),t(15680));const a={sidebar_position:110},i="SolarEdge",l={unversionedId:"integrations/solaredge",id:"integrations/solaredge",title:"SolarEdge",description:"SolarEdge is a provider of three phase inverters to convert power from solar panels to alternating current. SolarEdge supports a app where you can view current power and history and they also support an API. The connection can be setup with a single API call. You can use the information from the inverter to read the current power and use this information to start charging an electric vehicle.",source:"@site/docs/integrations/solaredge.md",sourceDirName:"integrations",slug:"/integrations/solaredge",permalink:"/docs/integrations/solaredge",draft:!1,tags:[],version:"current",sidebarPosition:110,frontMatter:{sidebar_position:110},sidebar:"defaultSidebar",previous:{title:"Fritzbox",permalink:"/docs/integrations/fritzbox"},next:{title:"Smart meter",permalink:"/docs/integrations/smartmeter"}},s={},c=[{value:"Datasource",id:"datasource",level:2},{value:"Connector",id:"connector",level:2},{value:"Form",id:"form",level:2}],p={toc:c},d="wrapper";function g(e){let{components:n,...a}=e;return(0,o.yg)(d,(0,r.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"solaredge"},"SolarEdge"),(0,o.yg)("p",null,"SolarEdge is a provider of three phase inverters to convert power from solar panels to alternating current. SolarEdge supports a app where you can view current power and history and they also support an API. The connection can be setup with a single API call. You can use the information from the inverter to read the current power and use this information to start charging an electric vehicle. "),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(93613).A,width:"2732",height:"1802"})),(0,o.yg)("h2",{id:"datasource"},"Datasource"),(0,o.yg)("p",null,"To set up the connection you need a ",(0,o.yg)("inlineCode",{parentName:"p"},"SITE ID")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"API KEY")," for your installation. You can obtain this information by logging in to your solar edge account. Then click on ",(0,o.yg)("inlineCode",{parentName:"p"},"Admin")," and tab ",(0,o.yg)("inlineCode",{parentName:"p"},"Site Access"),". Enable the ",(0,o.yg)("inlineCode",{parentName:"p"},"API Access")," and copy the ",(0,o.yg)("inlineCode",{parentName:"p"},"APIKEY")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"SITE ID"),". Create a new secret with type ",(0,o.yg)("inlineCode",{parentName:"p"},"http")," and the following ",(0,o.yg)("inlineCode",{parentName:"p"},"url"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"name: SolarEdge\nfields:\n    - type: http\n      url: https://monitoringapi.solaredge.com/site/[SITE ID]/overview?api_key=[API KEY]\n")),(0,o.yg)("h2",{id:"connector"},"Connector"),(0,o.yg)("p",null,"Create a new connector and add a new topic ",(0,o.yg)("inlineCode",{parentName:"p"},"home.energy.solar"),". Add keys for mapping the fields to subtopics and click on ",(0,o.yg)("inlineCode",{parentName:"p"},"test"),":"),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(99794).A,width:"2732",height:"1802"})),(0,o.yg)("h2",{id:"form"},"Form"),(0,o.yg)("p",null,"The data can be viewed via timesharts and gauges in a form:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Energy Solar\n\nPower\n<Math.round(power)/1000\n[0|1:lightgreen,1|:green,2|8:red 0.00 kW]\n\nPower\n[timeline]\n\nToday\n<day/1000\n[0.00 kWh]\n\nThis Month\n<month/1000\n[0 kWh]\n\nThis Year\n<year/1000\n[0 kWh]\n\nTotal Energy\n<total/1000\n[0 kWh]\n\nTotal Revenue\n<revenue\n[0 EUR]\n|12\n")),(0,o.yg)("p",null,"To show the form go to ",(0,o.yg)("inlineCode",{parentName:"p"},"Items"),", search for ",(0,o.yg)("inlineCode",{parentName:"p"},"home.energy.soloar")," and click on the item."))}g.isMDXComponent=!0},99794:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/connector_solaredge-309bf68d1279c2dff6648df59f98c633.png"},93613:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/connector_solaredge_form-e9e412e56760f57a60d5f2cbd05a9507.png"}}]);