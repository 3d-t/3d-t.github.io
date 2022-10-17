(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2934],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return p}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,m=d["".concat(c,".").concat(p)]||d[p]||f[p]||r;return n?i.createElement(m,a(a({ref:t},l),{},{components:n})):i.createElement(m,a({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1087:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var i=n(2122),o=n(9756),r=(n(7294),n(3905)),a=["components"],s={sidebar_position:50},c="Notifications",u={unversionedId:"monitoring/notifications",id:"monitoring/notifications",isDocsHomePage:!1,title:"Notifications",description:"By default notifications are sent to the system administator. You can also log notifications in the database for futher processing and analysis.",source:"@site/docs/monitoring/notifications.md",sourceDirName:"monitoring",slug:"/monitoring/notifications",permalink:"/docs/monitoring/notifications",version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"defaultSidebar",previous:{title:"Dead sensor detection",permalink:"/docs/monitoring/updated"},next:{title:"BIM models",permalink:"/docs/digitaltwin/ifc"}},l=[{value:"Conditions",id:"conditions",children:[]},{value:"Notifications",id:"notifications-1",children:[]}],f={toc:l};function d(e){var t=e.components,s=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"notifications"},"Notifications"),(0,r.kt)("p",null,"By default notifications are sent to the system administator. You can also log notifications in the database for futher processing and analysis."),(0,r.kt)("h2",{id:"conditions"},"Conditions"),(0,r.kt)("p",null,"Sometimes the assertions on sensor values are only applicable during a certain period, such as during business hours or during business hours. You can specify these conditions using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Assert when")," block. You can combine two or more criteria with AND or OR using the logic blocks. They can be nested to an arbritrary level."),(0,r.kt)("h2",{id:"notifications-1"},"Notifications"),(0,r.kt)("p",null,"You can drag and drop one or more assertions in the body of the statement. You may combine assertions of sensor values and update time as needed. If one or more assertions fail the statements in the ",(0,r.kt)("inlineCode",{parentName:"p"},"else")," part are executed. In this case a notification is logged and an email is created. The notifications can be filtered by topic, date and value."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2511).Z})))}d.isMDXComponent=!0},2511:function(e,t,n){"use strict";t.Z=n.p+"assets/images/monitoring_business_hours-6bc0dff842510b7654b3e92ba1f62492.png"}}]);