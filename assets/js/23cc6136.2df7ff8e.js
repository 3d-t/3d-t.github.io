"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2008],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(58168),a=(n(96540),n(15680));const r={sidebar_position:8},i="Documents",l={unversionedId:"tutorial/documents",id:"tutorial/documents",title:"Documents",description:"The value of a topic can be a document, such as a PDF or an image. This can be used to store information such as instruction manuals, photos, 3D models and structured text. There are built-in viewers for JPG, PNG, PDF, MARKDOWN and GLTF.",source:"@site/docs/tutorial/documents.md",sourceDirName:"tutorial",slug:"/tutorial/documents",permalink:"/docs/tutorial/documents",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"defaultSidebar",previous:{title:"Topic",permalink:"/docs/tutorial/topic"},next:{title:"Time",permalink:"/docs/tutorial/time"}},p={},s=[{value:"Upload",id:"upload",level:2},{value:"Update",id:"update",level:2},{value:"Versions",id:"versions",level:2},{value:"Delete",id:"delete",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,o.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"documents"},"Documents"),(0,a.yg)("p",null,"The value of a topic can be a document, such as a PDF or an image. This can be used to store information such as instruction manuals, photos, 3D models and structured text. There are built-in viewers for ",(0,a.yg)("inlineCode",{parentName:"p"},"JPG"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"PNG"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"PDF"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"MARKDOWN")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"GLTF"),"."),(0,a.yg)("h2",{id:"upload"},"Upload"),(0,a.yg)("p",null,"To upload a document create a new topic and enter a name such as ",(0,a.yg)("inlineCode",{parentName:"p"},"asset.hvac.bosch.photo"),".  Click on the ",(0,a.yg)("inlineCode",{parentName:"p"},"Upload")," icon or select the ",(0,a.yg)("inlineCode",{parentName:"p"},"Upload")," options from the menu. If you are running on a mobile device you can make a picture with the camera or select a photo from your library. If you are running on a computer you can select a file. After the file is uploaded to the server the value of the topic is set to the name of the file. Other topics can now also use this file by entering the same name in the value of the topic. "),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(76227).A,width:"2732",height:"1800"})),(0,a.yg)("h2",{id:"update"},"Update"),(0,a.yg)("p",null,"You can update documents for topics in two ways. One way is to change the document for a specific topic and the other way to update the current version of a document for all topics. For example, if you have three solar panels of 370 Watt they all link to the same document ",(0,a.yg)("inlineCode",{parentName:"p"},"solar_370.png"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"property.home.solarpanel_01.photo = solar_370.png \nproperty.home.solarpanel_02.photo = solar_370.png \nproperty.home.solarpanel_03.photo = solar_370.png \n")),(0,a.yg)("p",null,"If you want to change the document for a specific topic you can open the topic details, click ",(0,a.yg)("inlineCode",{parentName:"p"},"Upload")," and select a document with another name. In this case only the current topic will be affected. For example, if for some reason the first solar panel is replaced with a different brand you can open ",(0,a.yg)("inlineCode",{parentName:"p"},"solarpanel_01.photo")," and upload a new image ",(0,a.yg)("inlineCode",{parentName:"p"},"hyundai_390.png"),". The result is as follows: "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"property.home.solarpanel_01.photo = hyunday_390.png \nproperty.home.solarpanel_02.photo = solar_370.png \nproperty.home.solarpanel_03.photo = solar_370.png \n")),(0,a.yg)("p",null,"If you want to change the document for all topics you can upload a new image with the same name ",(0,a.yg)("inlineCode",{parentName:"p"},"solar_370.png"),". The new version will replace the current document and all topics that link to this document will point to the new version. "),(0,a.yg)("h2",{id:"versions"},"Versions"),(0,a.yg)("p",null,"When a document is uploaded with a name that is already in the system a new version is created. This enables you to create a timeline where you can review changes in photos over time. For example, you can see a photo of a person by date or the condition of a roof over time. To manage document versions click on ",(0,a.yg)("inlineCode",{parentName:"p"},"Documents")," in the side menu and enter a search term and press ",(0,a.yg)("inlineCode",{parentName:"p"},"Enter"),". Click on an item in the list to open the image and version viewer."),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(74680).A,width:"2732",height:"1800"})),(0,a.yg)("p",null,"To upload a new version of the document click ",(0,a.yg)("inlineCode",{parentName:"p"},"Upload")," and select a document from your computer or image library. The document may have a different file name and is automatically renamed to the current document name.\nTo view a different version of a document click on one of the versions listed below the image. You can ",(0,a.yg)("inlineCode",{parentName:"p"},"Download")," the version that is currently displayed.  To add comments select ",(0,a.yg)("inlineCode",{parentName:"p"},"Edit")," from the menu, enter a comment and ",(0,a.yg)("inlineCode",{parentName:"p"},"Save"),". When you upload a document the time is set to the current date. You can change the date and time of a document version manually, for example if you upload an image of a person or device from a few years ago."),(0,a.yg)("h2",{id:"delete"},"Delete"),(0,a.yg)("p",null,"To delete a file and all versions select ",(0,a.yg)("inlineCode",{parentName:"p"},"Delete")," from the menu. To delete all versions of a file except the latest select ",(0,a.yg)("inlineCode",{parentName:"p"},"Purge"),". To delete multiple files enter a search term and click ",(0,a.yg)("inlineCode",{parentName:"p"},"Enter"),". Select ",(0,a.yg)("inlineCode",{parentName:"p"},"Delete")," from the list menu and confirm that all displayed files should be deleted."))}u.isMDXComponent=!0},74680:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/documents_version-b1b0d44e7e48cfe8f1da0ee1ae739e47.png"},76227:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/topic_photo-0dbd5baa8dd0a21c578514286bf7e194.png"}}]);