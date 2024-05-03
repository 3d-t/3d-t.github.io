"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1576],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),g=r,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return t?a.createElement(m,l(l({ref:n},c),{},{components:t})):a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},25485:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const o={sidebar_position:3},l="Releases",i={unversionedId:"installation/releases",id:"installation/releases",title:"Releases",description:"If you have a kubernetes installation running you can install and upgrade releases. The only mandatory components are the mongo database, the server and the web application. Other components such as for web crawling and for connecting to external services are optional and can be added in a later stage.",source:"@site/docs/installation/releases.md",sourceDirName:"installation",slug:"/installation/releases",permalink:"/docs/installation/releases",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Kubernetes",permalink:"/docs/installation/kubernetes"},next:{title:"External access via SSL",permalink:"/docs/installation/ingress"}},s={},p=[{value:"Add helm repository",id:"add-helm-repository",level:2},{value:"Install mongo database",id:"install-mongo-database",level:2},{value:"Install server and web app",id:"install-server-and-web-app",level:2},{value:"Upgrade server and web app",id:"upgrade-server-and-web-app",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"releases"},"Releases"),(0,r.yg)("p",null,"If you have a kubernetes installation running you can install and upgrade releases. The only mandatory components are the mongo database, the server and the web application. Other components such as for web crawling and for connecting to external services are optional and can be added in a later stage. "),(0,r.yg)("h2",{id:"add-helm-repository"},"Add helm repository"),(0,r.yg)("p",null,"Information about releases are stored in a repository. After installing helm you need to add the repository for downloading and installing new releases. You can request access to the chart repository by contacting us by email with a request for access. After you have received an URL for ",(0,r.yg)("inlineCode",{parentName:"p"},"CHAR_REPO_URL")," enter:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"helm repo add 3d-t [CHART_REPO_URL] \n")),(0,r.yg)("p",null,"You can now view the available releases in the repository "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"helm search repo 3d-t\nNAME            CHART VERSION   APP VERSION DESCRIPTION                   \n3d-t/app        1.0.0           latest      Web front-end application     \n3d-t/crawler    1.0.0           latest      Web crawler engine            \n3d-t/mongo      1.0.0           4.4         3d-t mongo database standalone\n3d-t/nefit      1.0.0           latest      Nefit-Bosch HVAC              \n3d-t/server     1.0.0           latest      Server back-end               \n3d-t/qnap       1.0.0           latest      QNAP NAS                      \n3d-t/tesla      1.0.0           latest      Tesla Owners API    \n")),(0,r.yg)("h2",{id:"install-mongo-database"},"Install mongo database"),(0,r.yg)("p",null,"All configurations and sensor data are stored in a ",(0,r.yg)("a",{parentName:"p",href:"https://www.mongodb.com/"},"mongo")," database."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"helm install mongo 3d-t/mongo\n")),(0,r.yg)("p",null,"You can check the deployment of the mongo database by the following kubernetes command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"kubectl get pods\nNAME      READY   STATUS    RESTARTS   AGE\nmongo-0   1/1     Running   0          111s\n")),(0,r.yg)("p",null,"To verify that you can connect to the database you can run the ",(0,r.yg)("inlineCode",{parentName:"p"},"mongo")," command in the ",(0,r.yg)("inlineCode",{parentName:"p"},"mongo-0")," pod."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"kubectl exec -it mongo-0 -- mongo\n")),(0,r.yg)("h2",{id:"install-server-and-web-app"},"Install server and web app"),(0,r.yg)("p",null,"After the database is running you can install the main components."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"helm install server 3d-t/server\nhelm install portal 3d-t/portal\nhelm install forms 3d-t/forms\nhelm install modeler 3d-t/modeler\n")),(0,r.yg)("p",null,"Verify that the releases have been deployed."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"kubectl get pods\nNAME                    READY   STATUS    RESTARTS   AGE\nmongo-0                 1/1     Running   0          6m39s\nsvclb-server-rslr5        1/1     Running   0          118s\nsvclb-app-8497d         1/1     Running   0          113s\napp-c6d57c999-fdpsq     1/1     Running   0          113s\nserver-5df6fb9cbc-25t9m   0/1     Running   0          118s\n")),(0,r.yg)("p",null,"Check the log file of the ",(0,r.yg)("inlineCode",{parentName:"p"},"server")," server application:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"kubectl logs server-5df6fb9cbc-25t9m\n2021-08-10 16:18:34.214 info: Connecting to mongodb://mongo-0.mongo/idata\n2021-08-10 16:18:34.299 info: Connected to mongodb://mongo-0.mongo/idata\n2021-08-10 16:18:34.306 info: Run importer scheduler every 10000 ms \n2021-08-10 16:18:34.308 info: Waiting 5.69 seconds for automation scheduler to align with 10 second clock interval\n2021-08-10 16:18:34.311 info: Waiting 5.69 seconds for contract scheduler to align with 10 second clock interval\n2021-08-10 16:18:34.324 info: Server running at http://localhost:8010 in production mode with log level debug 12\n2021-08-10 16:18:40.011 info: Started automation scheduler at 2021-08-10T14:18:40.005Z to run every 10 seconds\n2021-08-10 16:18:40.015 info: Started contract scheduler at 2021-08-10T14:18:40.015Z to run every 10 seconds\n")),(0,r.yg)("p",null,"Check that the application is accessible via http by opening a browser or connect via curl: "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'curl http://portal.localhost\n<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=...\n')),(0,r.yg)("h2",{id:"upgrade-server-and-web-app"},"Upgrade server and web app"),(0,r.yg)("p",null,"You can upgrade to the latest version:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"helm upgrade server 3d-t/server\nhelm upgrade portal 3d-t/portal\n")),(0,r.yg)("p",null,"This completes the minimal installation. You can proceed with optional additional configuration or login and start the ",(0,r.yg)("a",{parentName:"p",href:"/docs/tutorial/registration"},"Registration")," section of the tutorial."))}u.isMDXComponent=!0}}]);