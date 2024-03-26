"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2141],{5680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>u});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=l(r),p=a,u=d["".concat(s,".").concat(p)]||d[p]||g[p]||o;return r?n.createElement(u,i(i({ref:t},m),{},{components:r})):n.createElement(u,i({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3884:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(9668),a=(r(6540),r(5680));const o={sidebar_position:120},i="Smart meter",c={unversionedId:"integrations/smartmeter",id:"integrations/smartmeter",title:"Smart meter",description:"Smart meter is a device that can be connected to your gas and electricity meter. It gives real-time feedback on gas and electricity usage. You can use the smart meter to monitor energy use over time and trigger alerts in case of access use.",source:"@site/docs/integrations/smartmeter.md",sourceDirName:"integrations",slug:"/integrations/smartmeter",permalink:"/docs/integrations/smartmeter",draft:!1,tags:[],version:"current",sidebarPosition:120,frontMatter:{sidebar_position:120},sidebar:"defaultSidebar",previous:{title:"SolarEdge",permalink:"/docs/integrations/solaredge"},next:{title:"Crawler",permalink:"/docs/integrations/crawler"}},s={},l=[{value:"Secret",id:"secret",level:2},{value:"Connector",id:"connector",level:2},{value:"Form",id:"form",level:2}],m={toc:l},d="wrapper";function g(e){let{components:t,...o}=e;return(0,a.yg)(d,(0,n.A)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"smart-meter"},"Smart meter"),(0,a.yg)("p",null,"Smart meter is a device that can be connected to your gas and electricity meter. It gives real-time feedback on gas and electricity usage. You can use the smart meter to monitor energy use over time and trigger alerts in case of access use."),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(9544).A,width:"2732",height:"1802"})),(0,a.yg)("h2",{id:"secret"},"Secret"),(0,a.yg)("p",null,"Create a secret with the access information to your smart meter. The format is described below and you need to enter you own ",(0,a.yg)("inlineCode",{parentName:"p"},"HOST")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"PORT")," information."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"name: SmartReader\nfields:\n    - type: http\n      url: http://[HOST]:[PORT]/smartmeter/api/read\n")),(0,a.yg)("h2",{id:"connector"},"Connector"),(0,a.yg)("p",null,"In the connector specify the secret that contains the datasource and add the mappings. In this case all topics are prefixed with ",(0,a.yg)("inlineCode",{parentName:"p"},"home.energy"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(4569).A,width:"2732",height:"1802"})),(0,a.yg)("h2",{id:"form"},"Form"),(0,a.yg)("p",null,"To show the energy use in gauges and graphs you can add the following form."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Home Energy\n\nElectricity\n<electricity.delivered.hour\n[-8|-2:green,-2|0:lightgreen,0|1:orange,1|8:red 0.00 kWh]\n\nelectricity.delivered.hour:Electricity\n[timeline]\n\nGas\n<gas.delivered.hour\n[0|1:green,1|2:yellow,2|8:red 0.00 m3/h]\n\ngas.delivered.hour:Gas\n[timeline]\n\nGrid Power\n<Math.round(electricity.delivered.netto)/1000\n[-8|-2:green,-2|0:lightgreen,0|1:orange,1|8:red 0.00 kW]\n\nelectricity.delivered.netto:Grid power\n[timeline]\n\nSolar Power\n<solar.power/1000\n[0|1:yellow,1|:lightgreen,2|8:green 0.00 kW]\n\nsolar.power\n[timeline]\n\nToday\n<solar.day/1000\n[0.00 kWh]\n\nThis Month\n<solar.month/1000\n[0 kWh]\n\nThis Year\n<solar.year/1000\n[0 kWh]\n\nTotal Energy\n<solar.total/1000\n[0 kWh]\n\nTotal Revenue\n<solar.revenue\n[0 EUR]\n|12\n\n")),(0,a.yg)("p",null,"To show the form go to ",(0,a.yg)("inlineCode",{parentName:"p"},"Items"),", search for ",(0,a.yg)("inlineCode",{parentName:"p"},"home.energy")," and click on the item."))}g.isMDXComponent=!0},4569:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/connector_smartmeter-f101b428b86f46505529d2b9fadc79ec.png"},9544:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/connector_smartmeter_form-4db6ba8bada56f7c2f45571e55b5e3e8.png"}}]);