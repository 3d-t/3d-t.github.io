"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7545],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>f});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(58168),o=(n(96540),n(15680));const a={sidebar_position:90},i="SSH",s={unversionedId:"import/ssh",id:"import/ssh",title:"SSH",description:"SSH can be used to download a file from a server or to execute remote commands on a server, for example to get the current workload or disk usage. The authentication for the SSH connection are defined in a secret.",source:"@site/docs/import/ssh.md",sourceDirName:"import",slug:"/import/ssh",permalink:"/docs/import/ssh",draft:!1,tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"defaultSidebar",previous:{title:"HTTP",permalink:"/docs/import/http"},next:{title:"MQTT",permalink:"/docs/import/mqtt"}},c={},p=[{value:"Datasource",id:"datasource",level:2},{value:"Importer",id:"importer",level:2},{value:"Executing remote commands",id:"executing-remote-commands",level:2}],l={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,o.yg)(d,(0,r.A)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"ssh"},"SSH"),(0,o.yg)("p",null,"SSH can be used to download a file from a server or to execute remote commands on a server, for example to get the current workload or disk usage. The authentication for the SSH connection are defined in a secret."),(0,o.yg)("h2",{id:"datasource"},"Datasource"),(0,o.yg)("p",null,"Create a new secret with field ",(0,o.yg)("inlineCode",{parentName:"p"},"type")," set to ",(0,o.yg)("inlineCode",{parentName:"p"},"ssh"),". Define the other parameters such as the IP address or name of ",(0,o.yg)("inlineCode",{parentName:"p"},"host"),", the ",(0,o.yg)("inlineCode",{parentName:"p"},"username")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"password")," and optionally a specific port number. In the field ",(0,o.yg)("inlineCode",{parentName:"p"},"filename")," enter the path to the file. You can protect confidential information in the secret by clicking on the lock."),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(38617).A,width:"2732",height:"1122"})),(0,o.yg)("h2",{id:"importer"},"Importer"),(0,o.yg)("p",null,"In the importer enter the name of the secret under ",(0,o.yg)("inlineCode",{parentName:"p"},"Datasource")," and select ",(0,o.yg)("inlineCode",{parentName:"p"},"Test")," to retrieve the data. Note that this may take a few seconds for setting up an SSH connection and logging in to the host."),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(8982).A,width:"2732",height:"1802"})),(0,o.yg)("h2",{id:"executing-remote-commands"},"Executing remote commands"),(0,o.yg)("p",null,"You can also use an SSH connection to execute remote commands. In the example below the keys are mapped to a JavaScript function ",(0,o.yg)("inlineCode",{parentName:"p"},"exec(command, options)"),". The command is a linux command that is executed on the server to get the load and disk usage."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"top -b -n 2 | grep 'Cpu' | cat | awk '{print $2}'|tail -1\ndf /dev/vda3 | awk '{print $5}'| tail -1 | sed s/%//\n")),(0,o.yg)("p",null," The field ",(0,o.yg)("inlineCode",{parentName:"p"},"options")," is mapped to the column ",(0,o.yg)("inlineCode",{parentName:"p"},"secret")," in the data source. "),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(170).A,width:"2732",height:"1802"})))}m.isMDXComponent=!0},170:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/importer_ssh_server-95d0cc4d2d8e251f0acd84bf67bef885.png"},8982:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/importer_weather_csv_ssh-b9fc8083268f56e860b60f1ecaaf0267.png"},38617:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/secret_weather_ssh-fa63573cbf43d74301ce05cd7353dda1.png"}}]);