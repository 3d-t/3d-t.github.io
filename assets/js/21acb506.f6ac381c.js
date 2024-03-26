"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2537],{5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>m});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},584:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(9668),a=(r(6540),r(5680));const o={sidebar_position:220},i="Crawler",s={unversionedId:"integrations/crawler",id:"integrations/crawler",title:"Crawler",description:"For static web sites you can use a HTTP request to get the page content in HTML and then use JavaScript to extract the information. Most websites use JavaScript to dynamically create HTML and on those sites this approach does not work. This integration uses the Google Puppeteer library for Node to emulate a web driver with JavaScript support.",source:"@site/docs/integrations/crawler.md",sourceDirName:"integrations",slug:"/integrations/crawler",permalink:"/docs/integrations/crawler",draft:!1,tags:[],version:"current",sidebarPosition:220,frontMatter:{sidebar_position:220},sidebar:"defaultSidebar",previous:{title:"Smart meter",permalink:"/docs/integrations/smartmeter"},next:{title:"People counter",permalink:"/docs/integrations/counter"}},c={},p=[{value:"Script",id:"script",level:2},{value:"Secret",id:"secret",level:2},{value:"Importer",id:"importer",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.yg)(u,(0,n.A)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"crawler"},"Crawler"),(0,a.yg)("p",null,"For static web sites you can use a HTTP request to get the page content in HTML and then use JavaScript to extract the information. Most websites use JavaScript to dynamically create HTML and on those sites this approach does not work. This integration uses the Google ",(0,a.yg)("a",{parentName:"p",href:"https://puppeteer.github.io/puppeteer/"},"Puppeteer")," library for Node to emulate a web driver with JavaScript support.  "),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Usage: Extract data from a web site")),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(4368).A,width:"2026",height:"1246"})),(0,a.yg)("h2",{id:"script"},"Script"),(0,a.yg)("p",null,"The script below is a standard puppeteer script. You can develop and test the script in nodejs. Create a new ",(0,a.yg)("inlineCode",{parentName:"p"},"Script")," and add the following to the definition:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"const get = async (url) => {\n    const browser = await puppeteer.launch({ args: ['--no-sandbox'] })\n    const page = await browser.newPage()\n    const navigationPromise = page.waitForNavigation()\n\n\n    await page.setViewport({ width: 1386, height: 878 })\n    await page.goto(url)\n\n    await navigationPromise\n\n\n    var forecast = {\n        precipitation: { next_hour: -1, tomorrow: -1, day_after_tomorrow: -1 },\n        temperature: {\n            min: { tomorrow: -30, day_after_tomorrow: -30 },\n            max: { tomorrow: -30, day_after_tomorrow: -30 }\n        }\n    }\n\n    var selector = '.forecast:nth-child(1) tr > td:nth-child(8)'\n    await page.waitForSelector(selector)\n    forecast.precipitation.next_hour = await page.$eval(selector, data => { return data.innerText })\n    var i = 1;\n    for (let field of Object.keys(forecast.precipitation)) {\n        selector = '.forecast:nth-child(' + i + ') tr > td:nth-child(8)'\n        var rainPerHour = await page.$$eval(selector, anchors => {\n            return anchors.map(anchor => {\n                return parseFloat(anchor.textContent.split(' ')[0].replace(',', '.'))\n            })\n        })\n        var total = 0;\n        print(rainPerHour)\n        if (i === 1) {\n            forecast.precipitation[field] = rainPerHour[0];\n        } else {\n            rainPerHour.forEach(p => { total += p })\n            forecast.precipitation[field] = Math.round(10 * total) / 10\n        }\n        ++i\n    }\n    i = 2\n    for (let field of Object.keys(forecast.temperature.min)) {\n        selector = '.forecast:nth-child(' + i + ') tr > td:nth-child(3)'\n        var tempPerHour = await page.$$eval(selector, anchors => {\n            return anchors.map(anchor => parseInt(anchor.textContent.split('\xb0')[0])\n            )\n        })\n        var max = -30\n        var min = 50\n        console.log(tempPerHour)\n        tempPerHour.forEach(p => { max = Math.max(max, p), min = Math.min(min, p) })\n        forecast.temperature.max[field] = Math.round(max)\n        forecast.temperature.min[field] = Math.round(min)\n        ++i\n    }\n    await browser.close()\n    return forecast\n}\n")),(0,a.yg)("p",null,"To test the script enter the code below in the ",(0,a.yg)("inlineCode",{parentName:"p"},"test")," section and select ",(0,a.yg)("inlineCode",{parentName:"p"},"Run"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"var forecast = await get('https://www.buienradar.nl/weer/eersel/nl/2756342/5daagse')\nprint(\"Forecast:\" + JSON.stringify(forecast))\n")),(0,a.yg)("h2",{id:"secret"},"Secret"),(0,a.yg)("p",null,"Create a new secret to set this script as the data source."),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(2123).A,width:"2732",height:"502"})),(0,a.yg)("h2",{id:"importer"},"Importer"),(0,a.yg)("p",null,"Create a new importer and set the ",(0,a.yg)("inlineCode",{parentName:"p"},"Datasource")," to the name of the secret. In the object mapping you can link to topic to the URL that is passed to the script. The key mapping extracts the data from the returned JSON objects."),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(5709).A,width:"2732",height:"1802"})))}d.isMDXComponent=!0},4368:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/buienradar-78e472636842b171de82fc543226a2f4.png"},5709:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/importer_weather_radar-03061c9861b50bb9f6f75556553613e6.png"},2123:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/secret_weather_radar-f04e35c2cecf14e23985e1ddd27c67cc.png"}}]);