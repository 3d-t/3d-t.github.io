(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7542],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1809:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:500},s="People counter",l={unversionedId:"integrations/counter",id:"integrations/counter",isDocsHomePage:!1,title:"People counter",description:"People counter is a microservice that takes a URL with image in JPG or PNG format and returns the number of people in the image. This service can be used to process images from a web cam to monitor waiting lines or occupancy of a room. To use the service in a real invironment you need to setup a web cam that can expose a PNG or JPG image as a URL. A standard importer can the be used to call the counting service with this URL as described below. The counted number of people can be used to analyze trends over time or to trigger a notification if an area becomes too crowded.",source:"@site/docs/integrations/counter.md",sourceDirName:"integrations",slug:"/integrations/counter",permalink:"/docs/integrations/counter",version:"current",sidebarPosition:500,frontMatter:{sidebar_position:500},sidebar:"defaultSidebar",previous:{title:"Fritzbox Router",permalink:"/docs/integrations/fritzbox"},next:{title:"Arduino",permalink:"/docs/integrations/arduino"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Testing",id:"testing",children:[]},{value:"Importer",id:"importer",children:[]}],u={toc:p};function d(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"people-counter"},"People counter"),(0,a.kt)("p",null,"People counter is a microservice that takes a URL with image in JPG or PNG format and returns the number of people in the image. This service can be used to process images from a web cam to monitor waiting lines or occupancy of a room. To use the service in a real invironment you need to setup a web cam that can expose a PNG or JPG image as a URL. A standard importer can the be used to call the counting service with this URL as described below. The counted number of people can be used to analyze trends over time or to trigger a notification if an area becomes too crowded."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(431).Z}),"\nExample image from ShanghaiTech dataset with estimated count of 117 people."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1836).Z}),"\nExample image from ShanghaiTech dataset with estimated count of 682 people."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"The technology used is based on Convolutional Neural Network as described in ",(0,a.kt)("a",{parentName:"p",href:"https://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/Zhang_Single-Image_Crowd_Counting_CVPR_2016_paper.pdf"},"this paper"),". The network has been trained on 1198 images with 330.000 heads.  The microservice is implemented with ",(0,a.kt)("inlineCode",{parentName:"p"},"PyTorch")," as described in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CommissarMa/CSRNet-pytorch"},"this")," GitHub page and takes advantage of GPU accelleration if Cuda is installed on the server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm install count 3d-t/count\n")),(0,a.kt)("p",null,"Since the microservice is quite large it make take several minutes to install. You can check the status of the installation and deployment with the kubernetes command line tools."),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("p",null,"To test the service enter open a web browser or use ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," to send a test request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl http://count.localhost/test\n")),(0,a.kt)("p",null,"This converts a test image on the server and should provide the following response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{'count': 870}\n")),(0,a.kt)("p",null,"To convert a real image find an image on the internet by searching for ",(0,a.kt)("inlineCode",{parentName:"p"},"crowd")," and enter the URL of the image as a query parameter. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl http://count.localhost/?url=https://www.agnarchy.com/wp-content/uploads/2015/01/vail.jpeg\n")),(0,a.kt)("h2",{id:"importer"},"Importer"),(0,a.kt)("p",null,"You can now automatically import the number of people from a web image with an importer that runs every hour. The data field includes the topic and the url where the image is stored. You can replace this with the location of your web cam image.\nThe topic ",(0,a.kt)("inlineCode",{parentName:"p"},"station.people.count")," is set by\nsending an http ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," request to the count service for a URL defined in the data section. The ",(0,a.kt)("inlineCode",{parentName:"p"},"count")," field of the json response is set to the value of the topic. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"name: 'Crowd counter'\ncron: '0 0 * * * *'\ndata: `\ntopic, url\nstadion.people, https://cdn.wallpapersafari.com/58/93/G5gkKT.jpg\n`\nmappings:\n  - key: count\n    formula: 'http.get(''http://count.localhost/?url='' + url).count'\n")))}d.isMDXComponent=!0},431:function(e,t,n){"use strict";t.Z=n.p+"assets/images/crowd-117-8d12dacce3dd34b8dd6547c42dae6ead.jpg"},1836:function(e,t,n){"use strict";t.Z=n.p+"assets/images/crowd-682-7c032967afd95af51c839ebf44dbceea.jpg"}}]);