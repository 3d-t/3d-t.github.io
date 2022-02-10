(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8617],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(n),p=r,m=h["".concat(c,".").concat(p)]||h[p]||u[p]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5749:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return h}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:5},c="Machine learning",l={unversionedId:"concepts/ml",id:"concepts/ml",isDocsHomePage:!1,title:"Machine learning",description:"Machine learning is a form of artificial intelligence (AI) where algoritms can detect trends and make forecast based on data. An example is a greenhouse farmer who needs to predict the amount of energy that is needed for the coming three days based on the forecasted number of sun hours, outside temperature and month in the year.",source:"@site/docs/concepts/ml.md",sourceDirName:"concepts",slug:"/concepts/ml",permalink:"/docs/concepts/ml",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"Internet Of Things",permalink:"/docs/concepts/iot"},next:{title:"Digital Twin",permalink:"/docs/concepts/digitaltwin"}},d=[{value:"Trend analysis",id:"trend-analysis",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Cyclic patterns",id:"cyclic-patterns",children:[]}],u={toc:d};function h(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"machine-learning"},"Machine learning"),(0,i.kt)("p",null,"Machine learning is a form of artificial intelligence (AI) where algoritms can detect trends and make forecast based on data. An example is a greenhouse farmer who needs to predict the amount of energy that is needed for the coming three days based on the forecasted number of sun hours, outside temperature and month in the year."),(0,i.kt)("h2",{id:"trend-analysis"},"Trend analysis"),(0,i.kt)("p",null,"A relatively simple form of data analysis is to aggregrate data to extract the minimum, maximum and average values. The chart below shows a CPU load of a server where the green line is the minimum load, the blue line the average load and the red line the maximum load. The values are calculated by aggregating hourly CPU loads by week. The forecast for the average for the coming month is shown in the extended blue line and is calculated by so called 'polynomial regression'. The algorithm tries to fit a straight line, parabola or third-order polynomial in the historical data and extends this functions to the future."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8037).Z})),(0,i.kt)("p",null,"The chart below shows the result of a trend analysis with exponential growth, for example in the case of virus infections."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7515).Z})),(0,i.kt)("h2",{id:"relationships"},"Relationships"),(0,i.kt)("p",null,"For short term forecast the use of trend analysis is not good enough since it is unable to predict irregular patterns. In the example below the blue lines in the top chart shows the number of visitors in a theme park. The red line shows the predicted number of visitors per day. The prediction is calculated by a neural network that is trained by a single input feature, wheather day is in the weekend or not. The predictions match the higher number of visitors but do not expain the higher number of visitors in the summer month or the irregular drops of visitors."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6122).Z})),(0,i.kt)("p",null,"By adding more input features the prediction becomes much more accurate. In the example below the machine learning algorithm also takes into account wheather a day is a summer holiday and wheather it has rained or not."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5528).Z})),(0,i.kt)("p",null,"The value of such an analysis is that management of a theme park can predict the number of visitors in the future based on the weather information and days in the year. The estimate can be used to schedule the number of employees that are required to host the quests. "),(0,i.kt)("h2",{id:"cyclic-patterns"},"Cyclic patterns"),(0,i.kt)("p",null,"Another example of the application of machine learning is detecting cyclic trends. The example below shows the CPU load of a server per hour of the week. The peak load is between 9:00 and 17:00 on work days but the load is also dependent on the day of the week. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9603).Z})),(0,i.kt)("p",null,"The example above shows that the hourly and daily patterns are detected quite well but there seems to be an upward trend as well that is not detected. This may be caused by an overall increase in CPU load over time as more users sign up for the service. The prediction can be made more accurate by adding a new input which is the number of days that the system is running. The predicted use now includes both the hourly and daily cyclic trend and the overall load increase."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4401).Z})),(0,i.kt)("p",null,"Understanding cyclic trends can be helpful for anomaly detection. Instead of generating an alarm when the load is over a certain value the system can take into account the time of day and day of week to predict is this is normal. In this case a high load on monday at 11:00 may not trigger an alarm but a high load on sunday at 05:00 will. Likewise, a low load on monday morning may trigger an alarm because it is not predicted and may be caused by users unable to log in. The prediction model can be further refined by taking into account annual holidays or scheduled maintenance events."))}h.isMDXComponent=!0},7515:function(e,t,n){"use strict";t.Z=n.p+"assets/images/covid_regression-6fcf47a7422a71eb4b7dadde3af5d311.png"},8037:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cpu_regression-cbd983aaeec45a92c45b2395a5e10a18.png"},9603:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cpu_weekday_hour-ee1abb93748f50bfdf8c8745685168a1.png"},4401:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cpu_weekhour-24f473d2dead05b5615d73bb5c13b219.png"},5528:function(e,t,n){"use strict";t.Z=n.p+"assets/images/visitors_multi-676d30a5fdd063f859df1750f886c14d.png"},6122:function(e,t,n){"use strict";t.Z=n.p+"assets/images/visitors_single-9cc5343c9888b2edf0039fcb9b57e5b4.png"}}]);