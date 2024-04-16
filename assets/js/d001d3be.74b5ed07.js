"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3530],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),y=a,m=u["".concat(c,".").concat(y)]||u[y]||d[y]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},35776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const o={sidebar_position:5},i="External access via SSL",s={unversionedId:"installation/ingress",id:"installation/ingress",title:"External access via SSL",description:"Most web browsers and devices require a secure connection over https. You can setup secure access to your Kubernetes cluster using an Kubernetes Ingress. Alternatively you can use Nginx or Apache.",source:"@site/docs/installation/ingress.md",sourceDirName:"installation",slug:"/installation/ingress",permalink:"/docs/installation/ingress",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"Releases",permalink:"/docs/installation/releases"},next:{title:"MQTT",permalink:"/docs/installation/mqtt"}},c={},l=[{value:"Create certificates",id:"create-certificates",level:2},{value:"Deploy ingress",id:"deploy-ingress",level:2},{value:"Update router",id:"update-router",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"external-access-via-ssl"},"External access via SSL"),(0,a.yg)("p",null,"Most web browsers and devices require a secure connection over https. You can setup secure access to your Kubernetes cluster using an Kubernetes Ingress. Alternatively you can use Nginx or Apache."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"If you do not need to provide external access you may skip this section.")),(0,a.yg)("h2",{id:"create-certificates"},"Create certificates"),(0,a.yg)("p",null,"To run a secure server you need a certificate. This certificate validates that your service can be trusted and shows up in the web browser when a user clicks on the lock icon.  You can obtain free SSL certificates from ",(0,a.yg)("a",{parentName:"p",href:"https://letsencrypt.org/"},"LetEncrypt"),". These certificates are valid for 3 months and can be renewed. An easy way to create the certificates is via openssl and certbot."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"sudo apt install openssl\nsudo apt install certbot\n")),(0,a.yg)("p",null,"You need a so called wildcard certificate so you can expose multiple services that are deployed in the kubernetes cluster, such as ",(0,a.yg)("inlineCode",{parentName:"p"},"app.my_domain.com")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"mqtt.my_domain.com"),". You should replace ",(0,a.yg)("inlineCode",{parentName:"p"},"my_domain.com")," with the actual domain name that you want to use.\nTo create the wildcard certificate:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"sudo certbot certonly --manual --agree-tos -d '*.my_domain.com'\n")),(0,a.yg)("p",null,"Answer the questions and wait for the instructions to deploy a text record. When you apply for a wildcard certificate you have to prove that you are the operator of the domain by placing a TXT record. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Please deploy a DNS TXT record under the name\n_acme-challenge.my_domain.com with the following value:\n\nKkfd0s9shC9-eKpYVb601cO1_1OwVEyFsliHRUMSdchI\n\n")),(0,a.yg)("p",null,"You can now configure your domain registration to include a new ",(0,a.yg)("inlineCode",{parentName:"p"},"TXT")," record with name ",(0,a.yg)("inlineCode",{parentName:"p"},"_acme-challenge.my_domain.com")," and value ",(0,a.yg)("inlineCode",{parentName:"p"},"Kkfd0s9shC9-eKpYVb601cO1_1OwVEyFsliHRUMSdchI"),". Before continuing make sure that your domain is updates. This can take several minutes. "),(0,a.yg)("p",null,"You can verify the deployment by entering the domain ",(0,a.yg)("inlineCode",{parentName:"p"},"_acme-challenge.my_domain.com")," in the box on web site ",(0,a.yg)("inlineCode",{parentName:"p"},"http://dnslookup.online/txt.html"),". If the domain is updated you can continue the certbot certification process. The certificates are installed in the directory ",(0,a.yg)("inlineCode",{parentName:"p"},"/etc/letsencrypt/live/my_domain.com"),"."),(0,a.yg)("h2",{id:"deploy-ingress"},"Deploy ingress"),(0,a.yg)("p",null,"The certificate and private key generated by certbot are used to create a Kubernetes Secret called ",(0,a.yg)("inlineCode",{parentName:"p"},"wildcard-tls"),". This secret is then used in the configuration of the ingress."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'sudo cp /etc/letsencrypt/live/my_domain.com/fullchain.pem tls.crt\nsudo cp /etc/letsencrypt/live/my_domain.com/privkey.pem tls.key\nsudo kubectl create secret tls wildcard-tls --key="tls.key" --cert="tls.crt"\n')),(0,a.yg)("p",null,"To configure the Ingress create a file 'ingress.yml' with the following content and replace the name ",(0,a.yg)("inlineCode",{parentName:"p"},"my_domain.com")," with your actual domain. Make sure that the name of the secret matches the name of the secret that you just created."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: tls-example-ingress\nspec:\n  tls:\n  - hosts:\n      - app.my_domain.com\n    secretName: wildcard-tls\n  rules:\n  - host: app.my_domain.com\n    http:\n      paths:\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: app\n            port:\n              number: 3000\n")),(0,a.yg)("p",null,"You can now install the ingress:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"kubectl create -f ingress.yml\n")),(0,a.yg)("p",null,"If you make changes to the configuration you can apply the changes:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"kubectl apply -f ingress.yml\n")),(0,a.yg)("h2",{id:"update-router"},"Update router"),(0,a.yg)("p",null,"On your router add a rule that forwards traffic on port ",(0,a.yg)("inlineCode",{parentName:"p"},"443")," to the IP address of the server where the Kubernetes cluster is deployed. Setting up the forwarding rule is different for each router.  You should now be able to access the service from anywhere on the Internet by opening a web browser or using curl:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"curl -v https://app.my_domain.com\n")))}d.isMDXComponent=!0}}]);