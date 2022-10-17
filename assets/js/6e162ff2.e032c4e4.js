(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7646],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(n),f=r,m=l["".concat(c,".").concat(f)]||l[f]||u[f]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}l.displayName="MDXCreateElement"},37:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return l}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:20},c="Dead sensor detection",d={unversionedId:"monitoring/updated",id:"monitoring/updated",isDocsHomePage:!1,title:"Dead sensor detection",description:"A precondition for effective monitoring is to ensure that sensor data is actually received. The sensor data is obtained via connectors that can pull data via REST or process MQTT push messages. If for some reason the connection fails the current state is not updated and monitoring will not be correct. Every time a topic value is updated the time and location of the topic are updated as well. This information can be used to check when data was updated last.",source:"@site/docs/monitoring/updated.md",sourceDirName:"monitoring",slug:"/monitoring/updated",permalink:"/docs/monitoring/updated",version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"defaultSidebar",previous:{title:"Assertions",permalink:"/docs/monitoring/compliance"},next:{title:"Notifications",permalink:"/docs/monitoring/notifications"}},p=[{value:"Assert updated",id:"assert-updated",children:[]},{value:"Wildcards",id:"wildcards",children:[]}],u={toc:p};function l(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dead-sensor-detection"},"Dead sensor detection"),(0,a.kt)("p",null,"A precondition for effective monitoring is to ensure that sensor data is actually received. The sensor data is obtained via connectors that can pull data via REST or process MQTT push messages. If for some reason the connection fails the current state is not updated and monitoring will not be correct. Every time a topic value is updated the time and location of the topic are updated as well. This information can be used to check when data was updated last."),(0,a.kt)("h2",{id:"assert-updated"},"Assert updated"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Asset updated")," block has one input for the name of the topic and one input for a date and time. Instead of using a fixed date you can use the running date control found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Variables")," section. For example, to check the update time of all weather topics you can drag a loop block with variable ",(0,a.kt)("inlineCode",{parentName:"p"},"topic")," and pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"topic")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Assert updated")," block. The time control specifies the maximum age of the topic state, in this case ",(0,a.kt)("inlineCode",{parentName:"p"},"3 hours"),".\n",(0,a.kt)("img",{src:n(130).Z})),(0,a.kt)("h2",{id:"wildcards"},"Wildcards"),(0,a.kt)("p",null,"Using a loop to iterate over topics makes it possible to add ",(0,a.kt)("inlineCode",{parentName:"p"},"If")," statements. You can for instance add a conditional statement in the loop that checks if the name of the topic includes something like ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," and based on that specify a diffent value that with a topic that includes ",(0,a.kt)("inlineCode",{parentName:"p"},"notebook"),". If all topics need to comply to the same value you can use a wildcard."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7308).Z})))}l.isMDXComponent=!0},130:function(e,t,n){"use strict";t.Z=n.p+"assets/images/monitoring_update_loop-d48c875c3e181e628573f56a06335f68.png"},7308:function(e,t,n){"use strict";t.Z=n.p+"assets/images/monitoring_update_wildcard-1b977a16dc434f94417b9ae50bc72ee3.png"}}]);