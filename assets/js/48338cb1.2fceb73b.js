"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>h});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const o={sidebar_position:5},i="Topic",c={unversionedId:"tutorial/topic",id:"tutorial/topic",title:"Topic",description:"All information is stored in a 'topics'. A topic has a name, a value and an optional unit. The name of the topic may include one or more '.' to group topics that belong to the same object. An object can be anything such as a person, a property, a location or an asset. The value of a topic can be a number, a text, a document or an image. Some values like a serial number may be static and need to be entered once. Other topics like temperature or pressure may change over time and can be changed manually or automatically. The idea behind topics is that all static and dynamic life cycle information can be store in a uniform way. The structure of topics and subtopics can be compared to organizing documents in folders and subfolders.  For example:",source:"@site/docs/tutorial/topic.md",sourceDirName:"tutorial",slug:"/tutorial/topic",permalink:"/docs/tutorial/topic",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"User interface",permalink:"/docs/tutorial/ui"},next:{title:"Documents",permalink:"/docs/tutorial/documents"}},l={},p=[{value:"Create",id:"create",level:2},{value:"Search",id:"search",level:2},{value:"Update",id:"update",level:2},{value:"Delete",id:"delete",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.yg)(u,(0,a.A)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"topic"},"Topic"),(0,r.yg)("p",null,"All information is stored in a 'topics'. A topic has a ",(0,r.yg)("inlineCode",{parentName:"p"},"name"),", a ",(0,r.yg)("inlineCode",{parentName:"p"},"value")," and an optional ",(0,r.yg)("inlineCode",{parentName:"p"},"unit"),". The name of the topic may include one or more '.' to group topics that belong to the same object. An object can be anything such as a person, a property, a location or an asset. The value of a topic can be a number, a text, a document or an image. Some values like a serial number may be static and need to be entered once. Other topics like temperature or pressure may change over time and can be changed manually or automatically. The idea behind topics is that all static and dynamic life cycle information can be store in a uniform way. The structure of topics and subtopics can be compared to organizing documents in folders and subfolders.  For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"asset.hvac.bosch.serial = 3290-559-001538\nasset.hvac.bosch.pressure = 2 bar\nasset.hvac.bosch.supplier = Nefit\nasset.hvac.bosch.photo = nefit.jpg\norganization.nefit.name = Nefit GmbH\norganization.nefit.registernumber = 312421 \nweather.paris.temperature = 15 C\nweather.paris.wind.speed = 3 m/s\n")),(0,r.yg)("h2",{id:"create"},"Create"),(0,r.yg)("p",null,"To create a new topic, navigate to the list of topics under the ",(0,r.yg)("inlineCode",{parentName:"p"},"Acquire")," menu option. Enter ",(0,r.yg)("inlineCode",{parentName:"p"},"+")," to create a new topic. Enter the name of the topic and the value and click ",(0,r.yg)("inlineCode",{parentName:"p"},"Update"),". "),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(11413).A,width:"2732",height:"1800"})),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Tip: You can also create a new topic by entering ",(0,r.yg)("inlineCode",{parentName:"p"},"asset.hvac.bosch.temperature = 21 C")," in the search bar and press ",(0,r.yg)("inlineCode",{parentName:"p"},"return"),".")),(0,r.yg)("h2",{id:"search"},"Search"),(0,r.yg)("p",null,"To find a topic enter a search term in the list view. All topics where the name or value matches are displayed. A maximum of 100 items are displayed to avoid long download times. If there are too many results you can enter a more specific search term. For example if there is a topic with name ",(0,r.yg)("inlineCode",{parentName:"p"},"asset.phone.bobsIhone.serialnumber")," with a value ",(0,r.yg)("inlineCode",{parentName:"p"},"12-cd-56")," you can find the topic via search terms ",(0,r.yg)("inlineCode",{parentName:"p"},"bob"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"serial")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"cd-56"),"."),(0,r.yg)("h2",{id:"update"},"Update"),(0,r.yg)("p",null,"To update the value of a topic first find the topic by entering a search term in the ",(0,r.yg)("inlineCode",{parentName:"p"},"search")," box. Click on a topic in the list to open the topic details screen. Change the value and click ",(0,r.yg)("inlineCode",{parentName:"p"},"Update"),". To view the history of all changes click on ",(0,r.yg)("inlineCode",{parentName:"p"},"Log"),". "),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(26710).A,width:"2732",height:"1800"})),(0,r.yg)("h2",{id:"delete"},"Delete"),(0,r.yg)("p",null,"To delete a specific topic you can click on the three dots in the list and select ",(0,r.yg)("inlineCode",{parentName:"p"},"delete")," from the menu. To delete multiple topic enter a search term to select the topics. Next, click on the ",(0,r.yg)("inlineCode",{parentName:"p"},"more")," icon in the menu bar and select ",(0,r.yg)("inlineCode",{parentName:"p"},"delete"),"."))}d.isMDXComponent=!0},11413:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/topic_pressure-8af3a8218334583eddc0e4147cd83173.png"},26710:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/topic_pressure_log-ac1fa855be6eb46f33970f20c964b951.png"}}]);