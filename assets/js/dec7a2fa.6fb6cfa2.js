(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5194],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2878:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:80},s="Markdown",u={unversionedId:"reference/markdown",id:"reference/markdown",isDocsHomePage:!1,title:"Markdown",description:"Markdown is a simple and easy to use markup language for format documents. The key concept is making the syntax for formatting as simple as possible and make the the unformatted text easy to read.",source:"@site/docs/reference/markdown.md",sourceDirName:"reference",slug:"/reference/markdown",permalink:"/docs/reference/markdown",version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80},sidebar:"defaultSidebar",previous:{title:"Special topics",permalink:"/docs/reference/topics"},next:{title:"JavaScript",permalink:"/docs/reference/javascript"}},p=[{value:"Character formatting",id:"character-formatting",children:[]},{value:"Sections",id:"sections",children:[]},{value:"Heading 2",id:"heading-2",children:[{value:"Heading 3",id:"heading-3",children:[]}]},{value:"Tables",id:"tables",children:[]},{value:"Lists",id:"lists",children:[]},{value:"Images",id:"images",children:[]}],d={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"markdown"},"Markdown"),(0,i.kt)("p",null,"Markdown is a simple and easy to use markup language for format documents. The key concept is making the syntax for formatting as simple as possible and make the the unformatted text easy to read."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"character-formatting"},"Character formatting"),(0,i.kt)("p",null,"To emphasis words you can use the asterix and back tick characters."),(0,i.kt)("p",null,"Markdown:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"This is **bold** text\n\nThis is *italic* text\n\nThis is `special` text\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("p",null,"This is ",(0,i.kt)("strong",{parentName:"p"},"bold")," text"),(0,i.kt)("p",null,"This is ",(0,i.kt)("em",{parentName:"p"},"italic")," text"),(0,i.kt)("p",null,"This is ",(0,i.kt)("inlineCode",{parentName:"p"},"special")," text"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"sections"},"Sections"),(0,i.kt)("p",null,"Sections have a level defined by the number of ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," characters before the section name. Lower level sections are displayed in a smaller font."),(0,i.kt)("p",null,"Markdown:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"# Heading 1\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n##  Heading 2\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n### Heading 3\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("h1",{id:"heading-1"},"Heading 1"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),(0,i.kt)("h2",{id:"heading-2"},"Heading 2"),(0,i.kt)("p",null,"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "),(0,i.kt)("h3",{id:"heading-3"},"Heading 3"),(0,i.kt)("p",null,"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"tables"},"Tables"),(0,i.kt)("p",null,"The first line of a table contains the column names separated by ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," and is followed by a second line with ",(0,i.kt)("inlineCode",{parentName:"p"},"---")," separated by ",(0,i.kt)("inlineCode",{parentName:"p"},"|"),". The following lines represent the cells in the body of the table."),(0,i.kt)("p",null,"Markdown:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"Description|Quantity|Price\n---|---|---\nM10 bolts|5|0,50\nM10 nuts|5|0,40\nSteel wire|5 meter| 2,45\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Quantity"),(0,i.kt)("th",{parentName:"tr",align:null},"Price"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"M10 bolts"),(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},"0,50")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"M10 nuts"),(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},"0,40")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Steel wire"),(0,i.kt)("td",{parentName:"tr",align:null},"5 meter"),(0,i.kt)("td",{parentName:"tr",align:null},"2,45")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"lists"},"Lists"),(0,i.kt)("p",null,"Markdown supports ordered and unordered list. Ordered lists are defined by a digit followed by a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," and unordered list start with a ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"-"),"."),(0,i.kt)("p",null,"Markdown"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Installation procedure:\n1. Unlock the screw.\n1. Open the battery case.\n1. Replace batteries.\n\nNeeded:\n* One philips screwdriver\n* 3 AA batteries\n* Battery charger\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("p",null,"Installation procedure:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Unlock the screw."),(0,i.kt)("li",{parentName:"ol"},"Open the battery case."),(0,i.kt)("li",{parentName:"ol"},"Replace batteries.")),(0,i.kt)("p",null,"Needed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"One philips screwdriver"),(0,i.kt)("li",{parentName:"ul"},"3 AA batteries"),(0,i.kt)("li",{parentName:"ul"},"Battery charger")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"images"},"Images"),(0,i.kt)("p",null,"You can insert images using a URL or name of uploaded file."),(0,i.kt)("p",null,"Markdown:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"![Image name](https://mysite/myimage.png)\n![Image name](image.png)\n")))}c.isMDXComponent=!0}}]);