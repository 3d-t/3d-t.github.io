"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7363],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=r,y=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return t?a.createElement(y,i(i({ref:n},p),{},{components:t})):a.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8334:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(9668),r=(t(6540),t(5680));const o={sidebar_position:80},i="Forecasting",s={unversionedId:"analysis/forecasting",id:"analysis/forecasting",title:"Forecasting",description:"In the previous example we have shown how you can forecast a value based on the value of other topics. Another way of forecasting is by interpolation of historical values. This can be done via regression or a neural network.",source:"@site/docs/analysis/forecasting.md",sourceDirName:"analysis",slug:"/analysis/forecasting",permalink:"/docs/analysis/forecasting",draft:!1,tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80},sidebar:"defaultSidebar",previous:{title:"Relationships",permalink:"/docs/analysis/relationships"},next:{title:"BIM models",permalink:"/docs/digitaltwin/ifc"}},l={},c=[{value:"Regression",id:"regression",level:2},{value:"Neural network",id:"neural-network",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...o}=e;return(0,r.yg)(d,(0,a.A)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"forecasting"},"Forecasting"),(0,r.yg)("p",null,"In the previous example we have shown how you can forecast a value based on the value of other topics. Another way of forecasting is by interpolation of historical values. This can be done via regression or a neural network."),(0,r.yg)("h2",{id:"regression"},"Regression"),(0,r.yg)("p",null,"In this example we show the data of the number of infections. The actual data is shown by selecting ",(0,r.yg)("inlineCode",{parentName:"p"},"Now")," as the end date."),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(3576).A,width:"2732",height:"912"})),(0,r.yg)("p",null,"If we change the ",(0,r.yg)("inlineCode",{parentName:"p"},"Until")," from ",(0,r.yg)("inlineCode",{parentName:"p"},"Now")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"Next quarter")," we see the prediction based on so-called polynomial interpolation. This is done by trying to fit a line, parabola or third-order polynomial function."),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(7105).A,width:"2732",height:"912"})),(0,r.yg)("h2",{id:"neural-network"},"Neural network"),(0,r.yg)("p",null,"More advanced forecasting can be obtained by using the neural network capacilities, often referred to as machine learning. This forecasting can also take into account cycles.\nThe blue line shows the actual data of a CPU load of a server. We see that there is a daily cycle with peaks around 10.00 and a weekly cycle where load is lower on saturday and sunday."),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(2756).A,width:"2732",height:"1802"})),(0,r.yg)("p",null,"When you add an input ",(0,r.yg)("inlineCode",{parentName:"p"},"calendar.hour")," this will be used as an input for the forecast. The red line shows that it has detected the daily pattern. "),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(5491).A,width:"2732",height:"1802"})),(0,r.yg)("p",null,"Note that this prediction does not take in to account the increased load during the course of the year and the week. When these features are added the prediction becomes more accurate."),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(7334).A,width:"2732",height:"1802"})),(0,r.yg)("p",null,"Forecasting is implemented with a ",(0,r.yg)("a",{parentName:"p",href:"https://www.tensorflow.org/"},"TensorFlow")," multilayer perceptron neural network.\nUsers familiar with TensorFlow networks can finetune the machine learning parameters by clicking on the ",(0,r.yg)("inlineCode",{parentName:"p"},"Parameters")," tab and then click ",(0,r.yg)("inlineCode",{parentName:"p"},"Train"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(3034).A,width:"2732",height:"1802"})))}u.isMDXComponent=!0},2756:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/analysis_neural_cpu-abd149b1654eb058f0fcee2d646819c3.png"},7334:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/analysis_neural_cpu_forecast-78404d0948e77e3d3946f24d8fa656a4.png"},5491:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/analysis_neural_cpu_forecast_some-0bc4b557ec3459b0cc70ff4da0feb725.png"},3034:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/analysis_neural_cpu_settings-0c475c0cff2fee3d819dec3e317d89dd.png"},7105:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/analysis_regression_forecast-656a02ce1ba4382e4b62c2c25d0dc69d.png"},3576:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/analysis_regression_now-5a3863ffcbe7aca274e481b041dc3bd1.png"}}]);