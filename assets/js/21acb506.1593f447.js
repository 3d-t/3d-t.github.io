(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6936],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7862:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:220},s="Crawler",p={unversionedId:"integrations/crawler",id:"integrations/crawler",isDocsHomePage:!1,title:"Crawler",description:"For static web sites you can use a HTTP request to get the page content in HTML and then use JavaScript to extract the information. Most websites use JavaScript to dynamically create HTML and on those sites this approach does not work. This integration uses the Google Puppeteer library for Node to emulate a web driver with JavaScript support.",source:"@site/docs/integrations/crawler.md",sourceDirName:"integrations",slug:"/integrations/crawler",permalink:"/docs/integrations/crawler",version:"current",sidebarPosition:220,frontMatter:{sidebar_position:220},sidebar:"defaultSidebar",previous:{title:"Tesla",permalink:"/docs/integrations/tesla"},next:{title:"People counter",permalink:"/docs/integrations/counter"}},l=[{value:"Script",id:"script",children:[]},{value:"Secret",id:"secret",children:[]},{value:"Importer",id:"importer",children:[]}],u={toc:l};function d(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"crawler"},"Crawler"),(0,o.kt)("p",null,"For static web sites you can use a HTTP request to get the page content in HTML and then use JavaScript to extract the information. Most websites use JavaScript to dynamically create HTML and on those sites this approach does not work. This integration uses the Google ",(0,o.kt)("a",{parentName:"p",href:"https://puppeteer.github.io/puppeteer/"},"Puppeteer")," library for Node to emulate a web driver with JavaScript support.  "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Usage: Extract data from a web site")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(7041).Z})),(0,o.kt)("h2",{id:"script"},"Script"),(0,o.kt)("p",null,"The script below is a standard puppeteer script. You can develop and test the script in nodejs. Create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Script")," and add the following to the definition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const get = async (url) => {\n    const browser = await puppeteer.launch({ args: ['--no-sandbox'] })\n    const page = await browser.newPage()\n    const navigationPromise = page.waitForNavigation()\n\n\n    await page.setViewport({ width: 1386, height: 878 })\n    await page.goto(url)\n\n    await navigationPromise\n\n\n    var forecast = {\n        precipitation: { next_hour: -1, tomorrow: -1, day_after_tomorrow: -1 },\n        temperature: {\n            min: { tomorrow: -30, day_after_tomorrow: -30 },\n            max: { tomorrow: -30, day_after_tomorrow: -30 }\n        }\n    }\n\n    var selector = '.forecast:nth-child(1) tr > td:nth-child(8)'\n    await page.waitForSelector(selector)\n    forecast.precipitation.next_hour = await page.$eval(selector, data => { return data.innerText })\n    var i = 1;\n    for (let field of Object.keys(forecast.precipitation)) {\n        selector = '.forecast:nth-child(' + i + ') tr > td:nth-child(8)'\n        var rainPerHour = await page.$$eval(selector, anchors => {\n            return anchors.map(anchor => {\n                return parseFloat(anchor.textContent.split(' ')[0].replace(',', '.'))\n            })\n        })\n        var total = 0;\n        print(rainPerHour)\n        if (i === 1) {\n            forecast.precipitation[field] = rainPerHour[0];\n        } else {\n            rainPerHour.forEach(p => { total += p })\n            forecast.precipitation[field] = Math.round(10 * total) / 10\n        }\n        ++i\n    }\n    i = 2\n    for (let field of Object.keys(forecast.temperature.min)) {\n        selector = '.forecast:nth-child(' + i + ') tr > td:nth-child(3)'\n        var tempPerHour = await page.$$eval(selector, anchors => {\n            return anchors.map(anchor => parseInt(anchor.textContent.split('\xb0')[0])\n            )\n        })\n        var max = -30\n        var min = 50\n        console.log(tempPerHour)\n        tempPerHour.forEach(p => { max = Math.max(max, p), min = Math.min(min, p) })\n        forecast.temperature.max[field] = Math.round(max)\n        forecast.temperature.min[field] = Math.round(min)\n        ++i\n    }\n    await browser.close()\n    return forecast\n}\n")),(0,o.kt)("p",null,"To test the script enter the code below in the ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," section and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Run"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var forecast = await get('https://www.buienradar.nl/weer/eersel/nl/2756342/5daagse')\nprint(\"Forecast:\" + JSON.stringify(forecast))\n")),(0,o.kt)("h2",{id:"secret"},"Secret"),(0,o.kt)("p",null,"Create a new secret to set this script as the data source."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(4653).Z})),(0,o.kt)("h2",{id:"importer"},"Importer"),(0,o.kt)("p",null,"Create a new importer and set the ",(0,o.kt)("inlineCode",{parentName:"p"},"Datasource")," to the name of the secret. In the object mapping you can link to topic to the URL that is passed to the script. The key mapping extracts the data from the returned JSON objects."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(2680).Z})))}d.isMDXComponent=!0},7041:function(e,t,r){"use strict";t.Z=r.p+"assets/images/buienradar-78e472636842b171de82fc543226a2f4.png"},2680:function(e,t,r){"use strict";t.Z=r.p+"assets/images/importer_weather_radar-03061c9861b50bb9f6f75556553613e6.png"},4653:function(e,t,r){"use strict";t.Z=r.p+"assets/images/secret_weather_radar-f04e35c2cecf14e23985e1ddd27c67cc.png"}}]);