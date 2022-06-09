(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7110],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(n),f=o,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=l;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},6567:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],p={sidebar_position:60},c="HTTP",s={unversionedId:"import/http",id:"import/http",isDocsHomePage:!1,title:"HTTP",description:"Instead of entering data via copy and paste into the data window you can also automatically import data via HTTP or HTTPS. To set up an automatic import you first need to specify a data source. When the importers runs the data is collected and you can then process the CSV or JSON by adding entries for mapping objects and keys to topics.",source:"@site/docs/import/http.md",sourceDirName:"import",slug:"/import/http",permalink:"/docs/import/http",version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"defaultSidebar",previous:{title:"JSON",permalink:"/docs/import/json"},next:{title:"SSH",permalink:"/docs/import/ssh"}},u=[],d={toc:u};function l(e){var t=e.components,p=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"http"},"HTTP"),(0,a.kt)("p",null,"Instead of entering data via copy and paste into the data window you can also automatically import data via HTTP or HTTPS. To set up an automatic import you first need to specify a data source. When the importers runs the data is collected and you can then process the CSV or JSON by adding entries for mapping objects and keys to topics."),(0,a.kt)("h1",{id:"datasource"},"Datasource"),(0,a.kt)("p",null,"Select options ",(0,a.kt)("inlineCode",{parentName:"p"},"Secrets")," from the sidemenu and create a new entry. Add a field for ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," and set the value to ",(0,a.kt)("inlineCode",{parentName:"p"},"http"),". Add a field ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," and set the value to the http link."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9424).Z})),(0,a.kt)("h1",{id:"importer"},"Importer"),(0,a.kt)("p",null,"Create a new importer and under ",(0,a.kt)("inlineCode",{parentName:"p"},"Datasource")," select the name of the secret that has the details. Select menu option ",(0,a.kt)("inlineCode",{parentName:"p"},"Test")," to retrieve the data. You can now add mappings for the keys. Note that the fields for ",(0,a.kt)("inlineCode",{parentName:"p"},"latitude")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"longitude")," are set to a fixed value that indicate the GPS coordinates of the station. You can automatically run scheduled imports by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"Run")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"Every day"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5173).Z})))}l.isMDXComponent=!0},5173:function(e,t,n){"use strict";t.Z=n.p+"assets/images/importer_weather_csv_http-9efd167176f558f94efb20f0b8060546.png"},9424:function(e,t,n){"use strict";t.Z=n.p+"assets/images/secret_weather_http-636bc50430a2bebfbde444abc18acfa1.png"}}]);