(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6723],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},573:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:50},c="Relationships",p={unversionedId:"analysis/relationships",id:"analysis/relationships",isDocsHomePage:!1,title:"Relationships",description:"A key element in understanding the patterns in data is comparing values from different topics. For example, when predicting the required power for heating or cooling a building you may want to observe the outside temperature and wind conditions. When predicting the number of visitors to a theme park you may want to take into account the weather forecast and vacation calendar.",source:"@site/docs/analysis/relationships.md",sourceDirName:"analysis",slug:"/analysis/relationships",permalink:"/docs/analysis/relationships",version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"defaultSidebar",previous:{title:"Aggregation",permalink:"/docs/analysis/aggregation"},next:{title:"Forecasting",permalink:"/docs/analysis/forecasting"}},l=[{value:"Merging multiple topics",id:"merging-multiple-topics",children:[]},{value:"Predicting values",id:"predicting-values",children:[]}],u={toc:l};function d(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"relationships"},"Relationships"),(0,a.kt)("p",null,"A key element in understanding the patterns in data is comparing values from different topics. For example, when predicting the required power for heating or cooling a building you may want to observe the outside temperature and wind conditions. When predicting the number of visitors to a theme park you may want to take into account the weather forecast and vacation calendar."),(0,a.kt)("h2",{id:"merging-multiple-topics"},"Merging multiple topics"),(0,a.kt)("p",null,"A first approach to find relationships is to show multiple values in a singe map.  To show the timeline of multiple topics in a single chart go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Forecast")," and create a new dataset. Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Add")," to add one or more topics and specify the time interval. If the dataset is large or if the topics are sampled at different intervals you need to specify a period. This ensures that the time ranges of the different topic values are synchronized. For example, if one value is sampled every 5 minutes and another value every hour you specify the period as ",(0,a.kt)("inlineCode",{parentName:"p"},"Hour"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8391).Z})),(0,a.kt)("h2",{id:"predicting-values"},"Predicting values"),(0,a.kt)("p",null,"To predict the value of one topic based on several other topics create a dataset and enter the name of the topic you want to predict. Add one or more other topics that may have a relationship. In this case the topic to predict is ",(0,a.kt)("inlineCode",{parentName:"p"},"themepark.visitors")," and we add an other topic ",(0,a.kt)("inlineCode",{parentName:"p"},"calendar.weekend"),". Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Train")," to train the network. The predictions are shown by a red line."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8516).Z})),(0,a.kt)("p",null,"By adding more features such as ",(0,a.kt)("inlineCode",{parentName:"p"},"weekend")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"vacation")," the prediction may become more accurate. Once the prediction is good enough this can be used to forecast. For example, if want to predict the number of visitors next saturday it is already known that this is a weekend and whether or not the date falls in a vacation period. If you add the weather forecast the prediction may be quite accurate. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5053).Z})))}d.isMDXComponent=!0},5053:function(e,t,n){"use strict";t.Z=n.p+"assets/images/analysis_inputs_all-0c1fc8bf94069fa8b0bee3f59d7ff323.png"},8516:function(e,t,n){"use strict";t.Z=n.p+"assets/images/analysis_inputs_some-875cff6fcb60ef92dffe7ba372235544.png"},8391:function(e,t,n){"use strict";t.Z=n.p+"assets/images/analysis_merge-d06e0caa44259c7f3c77fe845261d5e9.png"}}]);