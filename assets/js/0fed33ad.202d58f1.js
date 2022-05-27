(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4655],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3701:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:30},u="Survey",c={unversionedId:"forms/survey",id:"forms/survey",isDocsHomePage:!1,title:"Survey",description:"A survey or questionnaire is a way to get information from suppliers, customers or employees. Surveys work in the same ways as inspections but they do not require authentication. You can create a survey and then distribute a link to the survey. Surveys can be useful to get input on customer satisfaction or can be part of an employee selection procedure.",source:"@site/docs/forms/survey.md",sourceDirName:"forms",slug:"/forms/survey",permalink:"/docs/forms/survey",version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"defaultSidebar",previous:{title:"Checklist",permalink:"/docs/forms/checklist"},next:{title:"Assessment",permalink:"/docs/forms/assessment"}},l=[{value:"Particate",id:"particate",children:[]},{value:"Create",id:"create",children:[]},{value:"Anonymous link",id:"anonymous-link",children:[]},{value:"Individual link",id:"individual-link",children:[]}],p={toc:l};function d(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"survey"},"Survey"),(0,o.kt)("p",null,"A survey or questionnaire is a way to get information from suppliers, customers or employees. Surveys work in the same ways as inspections but they do not require authentication. You can create a survey and then distribute a link to the survey. Surveys can be useful to get input on customer satisfaction or can be part of an employee selection procedure."),(0,o.kt)("h2",{id:"particate"},"Particate"),(0,o.kt)("p",null,"Surveys run in a web browser and have a simplified interface and may include additional help text. No menus and navigation tools are displayed. Users just need to enter the information and click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Submit")," button.  To participate in a survey users can click on a link or scan a QR code."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2377).Z})),(0,o.kt)("h2",{id:"create"},"Create"),(0,o.kt)("p",null,"Below is the definition for this survey. Help text on how to fill out the form is entered between ",(0,o.kt)("inlineCode",{parentName:"p"},"---")," dividers. You can use plain text or use markdown in case you want to include some basic formatting. There is a drop down menu linked to the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"reference")," and the options buttons now have a value in addition to a label. The value is specified as ",(0,o.kt)("inlineCode",{parentName:"p"},"numerical_value:label"),". When the form is submitted the value is using instead of the text of the button. This enables analysis, time charts and aggregation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Customer Survey\n\n---\nDear Customer,\n\nThank you for participating in our customer survey. This helps us to improve our\nproducts and services. Filling out this survey will take less than 5 minutes. \nPlease enter the register number at the chamber of commerce and the name of your\ncompany.\n---\n\nreference:Register number\n\nCompany Name\n\nsource:How dit you find us?\n[\ninternet\nphone\nnewspaper\n]\n\n---\nPlease rate our product quality, service and price.\n---\n\nProduct quality\n[excellent:10,good:8,acceptable:6,mediocre:3,bad:0]\n\nPrice\n[excellent:10,good:8,acceptable:6,mediocre:3,bad:0]\n\nService\n[excellent:10,good:8,acceptable:6,mediocre:3,bad:0]\n\n---\nPlease enter any comments or suggestions to improve our products and services.\nWhen completed please click on the __submit__ button.\nThank you very much for participating in this survey.\n---\n\nComments\n")),(0,o.kt)("h2",{id:"anonymous-link"},"Anonymous link"),(0,o.kt)("p",null,"To invite users to participate in a survey you can create a link on your web site or send an invitation with a link via mail or other social media. The URL is the URL of your server followed by ",(0,o.kt)("inlineCode",{parentName:"p"},"survey/")," and the name of your survey.\nTo invite users to complete a form with name ",(0,o.kt)("inlineCode",{parentName:"p"},"Customer survey")," you can send the following invitation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Dear Bob,\n\nPlease find below the link to partipate in our customer satisfaction survey.\n\nhttp://app.mydomain.com/survey/customer\n")),(0,o.kt)("p",null,"Alternatively you can generate a QR code with this URL and post the QR code on your web site, flyer or poster at an event."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3280).Z})),(0,o.kt)("h2",{id:"individual-link"},"Individual link"),(0,o.kt)("p",null,"The survey has a ",(0,o.kt)("inlineCode",{parentName:"p"},"reference")," field that is used for creating the topics. In this case the reference field is displayed as ",(0,o.kt)("inlineCode",{parentName:"p"},"Register Number"),". So if the user enters ",(0,o.kt)("inlineCode",{parentName:"p"},"nl2342")," and rates the price as ",(0,o.kt)("inlineCode",{parentName:"p"},"Acceptable")," the topic for this question will be ",(0,o.kt)("inlineCode",{parentName:"p"},"customer.nl2342.price=6"),". It may be important that the reference field is correctly entered because if you have other information related to ",(0,o.kt)("inlineCode",{parentName:"p"},"customer.nl2342")," you want the survey information to be stored under the same main topic. Like with inspections where the link includes a specific reference for a device you can include the reference field in the specific URL for this customer. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Dear Alice,\n\nPlease find below the link to partipate in our customer satisfaction survey.\n\nhttp://app.mydomain.com/survey/customer/nl2342\n")))}d.isMDXComponent=!0},3280:function(e,t,n){"use strict";t.Z=n.p+"assets/images/survey_qr_code-d4b5eaeb77da008470a596fa264db748.png"},2377:function(e,t,n){"use strict";t.Z=n.p+"assets/images/survey_customer-94900774007fb43d040fb42cd529ec34.png"}}]);