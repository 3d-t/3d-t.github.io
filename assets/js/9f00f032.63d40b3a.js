"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9363],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var o=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(9668),r=(n(6540),n(5680));const a={sidebar_position:6},i="MQTT",s={unversionedId:"installation/mqtt",id:"installation/mqtt",title:"MQTT",description:"MQTT is a lightweight protocol for sending IoT data and messages over the internet. It is a publish and subscribe protocol where a device publishes a message to a topic on an MQTT broker. Other clients can subscribe to the topic and receive updates. The concept of topics can be compared to channels on a radio.",source:"@site/docs/installation/mqtt.md",sourceDirName:"installation",slug:"/installation/mqtt",permalink:"/docs/installation/mqtt",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"External access via SSL",permalink:"/docs/installation/ingress"},next:{title:"Zwave",permalink:"/docs/installation/zwave"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Authentication",id:"authentication",level:2},{value:"External access",id:"external-access",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,o.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"mqtt"},"MQTT"),(0,r.yg)("p",null,"MQTT is a lightweight protocol for sending IoT data and messages over the internet. It is a publish and subscribe protocol where a device publishes a message to a topic on an MQTT broker. Other clients can subscribe to the topic and receive updates. The concept of topics can be compared to channels on a radio.\nThere are various public MQTT brokers such as ",(0,r.yg)("a",{parentName:"p",href:"http://mqtt.eclipse.org"},"mqtt.eclipse.org"),", ",(0,r.yg)("a",{parentName:"p",href:"https://test.mosquitto.org"},"test.mosquitto.org")," and ",(0,r.yg)("a",{parentName:"p",href:"https://broker.emqx.io"},"broker.emqx.io"),". These can be used for testing purposes but are insecure: anybody can subscribe to the information that is broadcasted. Setting up a private MQTT broker can be done without much efforts by deploying a chart on your Kubernetes cluster."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"If you have access to a private MQTT broker you can skip this section.")),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("p",null,"You can download and install an MQTT broker from the ",(0,r.yg)("a",{parentName:"p",href:"https://mosquitto.org/"},"Eclipse Mosquitto")," site and install it as a native service on your server. Alternatively you can use the Kubernetes helm chart to deploy the broker in your Kubernetes cluster:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"helm install mqtt 3d-t/mqtt\n")),(0,r.yg)("p",null,"After the service has been deployed you can test the MQTT on the local system. You can use a MQTT client such as ",(0,r.yg)("a",{parentName:"p",href:"https://mosquitto.org/download/"},"mosquitto"),". To install the client run:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"sudo apt install mosquitto_clients\n")),(0,r.yg)("p",null,"Open a command line end subscribe to a topic 'room/temperature' on the local system:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mosquitto_sub -t room/temperature\n")),(0,r.yg)("p",null,"Open a second window on the local host and publish a message on the topic 'test':"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mosquitto_pub -t room/temperature -m 22\n")),(0,r.yg)("p",null,"The message ",(0,r.yg)("inlineCode",{parentName:"p"},"22")," should now appear in the terminal with the subscription."),(0,r.yg)("h2",{id:"authentication"},"Authentication"),(0,r.yg)("p",null,"To avoid that anybody can publish and subscribe to messages you can setup username and password authentication. Generate a password file ",(0,r.yg)("inlineCode",{parentName:"p"},"mqtt.yml")," using the ",(0,r.yg)("inlineCode",{parentName:"p"},"mosquitto_passwd")," utility:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mosquitto_passwd -c mqtt.yml bob\nPassword: \nReenter password: \n")),(0,r.yg)("p",null,"The content of the mqtt.yml file includes a single line with the name of the user and the password:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"bob:$7$101$v3NUpaLlRvxX/P9t$URFgmd5n4kPhRW5772...\n")),(0,r.yg)("p",null,"Change this password file into a Helm configuration file: "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"config:\n  anonymous: false\n  passwd: bob:$7$101$v3NUpaLlRvxX/P9t$URFgmd5n4kPhRW5772...\n")),(0,r.yg)("p",null,"Deploy the mqtt service with the configuration file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"helm uninstall mqtt\nhelm install -f mqtt.yml mqtt 3d-t/mqtt\n")),(0,r.yg)("p",null,"You can now test that you can not publish without password:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mosquitto_pub -t room/temperature -m 22\nConnection Refused: not authorised.\n")),(0,r.yg)("p",null,"And test you can publish with the password:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mosquitto_pub -u bob -P secret -t room/temperature -m 22\n")),(0,r.yg)("h2",{id:"external-access"},"External access"),(0,r.yg)("p",null,"To make the MQTT server accessible to the outside open a forwarding rule on the router and link the port ",(0,r.yg)("inlineCode",{parentName:"p"},"1883")," to same port on the node where the cluster runs."))}m.isMDXComponent=!0}}]);