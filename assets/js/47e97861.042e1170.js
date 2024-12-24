"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1700],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>h});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),u=i,h=c["".concat(o,".").concat(u)]||c[u]||g[u]||a;return t?r.createElement(h,l(l({ref:n},d),{},{components:t})):r.createElement(h,l({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[c]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},93185:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(58168),i=(t(96540),t(15680));const a={sidebar_position:700},l="ESP32 - GPS Tracker",s={unversionedId:"integrations/esp32",id:"integrations/esp32",title:"ESP32 - GPS Tracker",description:"ESP32 is a series of low-cost and low-power microcontrollers with integrated Wi-Fi and dual-mode Bluetooth. In this integration we create a GSP tracker with onboard data caching and synchronization via Wi-Fi. This provides a low cost alternative to using a 4G network for streaming real-time data. As soon as the ESP is powered, for example by starting a vehicle, the location, speed and heading data is cached on the SD card. When the vehicle is within reach of the configured Wi-Fi access point the data is synchronized with the server.",source:"@site/docs/integrations/esp32.md",sourceDirName:"integrations",slug:"/integrations/esp32",permalink:"/docs/integrations/esp32",draft:!1,tags:[],version:"current",sidebarPosition:700,frontMatter:{sidebar_position:700},sidebar:"defaultSidebar",previous:{title:"Arduino - MQTT",permalink:"/docs/integrations/arduino"},next:{title:"Controlling devices",permalink:"/docs/automation/control"}},o={},p=[{value:"Hardware",id:"hardware",level:2},{value:"Software",id:"software",level:2},{value:"Setup",id:"setup",level:3},{value:"Read GPS sensor",id:"read-gps-sensor",level:3},{value:"HTTP server",id:"http-server",level:3},{value:"Wi-Fi client",id:"wi-fi-client",level:3},{value:"Post to server",id:"post-to-server",level:3},{value:"Main loop",id:"main-loop",level:3},{value:"Flash",id:"flash",level:2}],d={toc:p},c="wrapper";function g(e){let{components:n,...a}=e;return(0,i.yg)(c,(0,r.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"esp32---gps-tracker"},"ESP32 - GPS Tracker"),(0,i.yg)("p",null,"ESP32 is a series of low-cost and low-power microcontrollers with integrated Wi-Fi and dual-mode Bluetooth. In this integration we create a GSP tracker with onboard data caching and synchronization via Wi-Fi. This provides a low cost alternative to using a 4G network for streaming real-time data. As soon as the ESP is powered, for example by starting a vehicle, the location, speed and heading data is cached on the SD card. When the vehicle is within reach of the configured Wi-Fi access point the data is synchronized with the server. "),(0,i.yg)("h2",{id:"hardware"},"Hardware"),(0,i.yg)("p",null,"The ESP32 series employs either a Tensilica Xtensa LX6 microprocessor in both dual-core and single-core variations. In this example we use a ESP32-WROOM-32 dual-core development board which is available for around 5 EUR.  The pin layout is displayed below. "),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(33979).A,width:"985",height:"810"})),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"GPS"),(0,i.yg)("th",{parentName:"tr",align:null},"MicroSD"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("img",{src:t(9983).A,width:"1208",height:"1022"})),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("img",{src:t(2079).A,width:"1024",height:"1024"}))))),(0,i.yg)("p",null,"The ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-GPS-Air530/"},"Grove GPS")," sends signals over NMEA. We use the D2 and D2 ports instead of the ESP RX and TX ports so that the standard RX and TX ports remain available for flashing the software."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"ESP32-WROOM-32"),(0,i.yg)("th",{parentName:"tr",align:null},"Grove GPS"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"D2"),(0,i.yg)("td",{parentName:"tr",align:null},"TX")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"D4"),(0,i.yg)("td",{parentName:"tr",align:null},"RX")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"VCC"),(0,i.yg)("td",{parentName:"tr",align:null},"VCC")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"GND"),(0,i.yg)("td",{parentName:"tr",align:null},"GND")))),(0,i.yg)("p",null,"Make sure you connect the Micro SD VCC to the 5V because when connecting to 3.3V it is unstable."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"ESP32-WROOM-32"),(0,i.yg)("th",{parentName:"tr",align:null},"MicroSD"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"23"),(0,i.yg)("td",{parentName:"tr",align:null},"MOSI")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"18"),(0,i.yg)("td",{parentName:"tr",align:null},"SCK")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"19"),(0,i.yg)("td",{parentName:"tr",align:null},"MISO")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"5"),(0,i.yg)("td",{parentName:"tr",align:null},"CS")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"VCC"),(0,i.yg)("td",{parentName:"tr",align:null},"VCC")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"GND"),(0,i.yg)("td",{parentName:"tr",align:null},"GND")))),(0,i.yg)("p",null,"For testing purposes you can use a breadbord with jumpers. An example is displayed below."),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(83889).A,width:"1755",height:"759"})),(0,i.yg)("h2",{id:"software"},"Software"),(0,i.yg)("p",null,"The software is written in C++ using the platform.io extension in Visual Studio code. After installing the ",(0,i.yg)("inlineCode",{parentName:"p"},"platform.io")," extension create a new project and add the ",(0,i.yg)("inlineCode",{parentName:"p"},"ArduinoJson")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"TinyGPSPlus")," libraries. Make sure you set insert the following line in the ",(0,i.yg)("inlineCode",{parentName:"p"},"platformio.ini")," file:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"monitor_speed = 115200\n")),(0,i.yg)("h3",{id:"setup"},"Setup"),(0,i.yg)("p",null," Open the file ",(0,i.yg)("inlineCode",{parentName:"p"},"src/main.cpp"),". Include the libraties and complete the setup function to intialize the devices:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-c"},'#include <Arduino.h>\n#include <ArduinoJson.h>\n#include <HTTPClient.h>\n#include <HardwareSerial.h>\n#include <Preferences.h>\n#include <SD.h>\n#include <TinyGPSPlus.h>\n#include <WiFi.h>\n#include <time.h>\n\nconst char* ACCESSPOINT_SSID = "3D-T Logger";\nconst char* ACCESSPOINT_PASSWORD = "23571113";\nWiFiServer server(80);\nString token = "";\nTinyGPSPlus gps;\nHardwareSerial SerialGPS(2);\nPreferences preferences;\nint counter = 0;\n\nvoid setup() {\n    Serial.begin(115200); // Monitor\n    SerialGPS.begin(9600, SERIAL_8N1, 2, 4); //GPS\n    SD.begin();\n    delay(2000);\n    if (!SD.begin()) {\n        Serial.println("Initialization SD card failed!");\n        while (1)\n            ;\n    }\n    Serial.println("SD card initialized.");\n    SD.remove("/cache.txt");\n    WiFi.mode(Wi-Fi_AP_STA);\n    delay(100);\n    WiFi.softAP(ACCESSPOINT_SSID, ACCESSPOINT_PASSWORD);\n    IPAddress IP = WiFi.softAPIP();\n    Serial.print("Wifi accesspoint ");\n    Serial.print(ACCESSPOINT_SSID);\n    Serial.print("  ");\n    Serial.println(IP);\n    server.begin(); // Start local wifi access point\n    preferences.begin("tracker");\n}\n')),(0,i.yg)("h3",{id:"read-gps-sensor"},"Read GPS sensor"),(0,i.yg)("p",null,"Now we can read the GSP information and log the time, position, altitude, speed and heading to the SD card in JSOn format: "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-c"},'\nvoid readGps() {\n    while (SerialGPS.available()) {\n        gps.encode(SerialGPS.read());\n    }\n}\n\nString read() {\n    String date = "";\n    date += gps.date.year();\n    date += "-";\n    date += gps.date.month() < 10 ? "0" : "";\n    date += gps.date.month();\n    date += "-";\n    date += gps.date.day() < 10 ? "0" : "";\n    date += gps.date.day();\n    date += gps.time.hour() < 10 ? " 0" : " ";\n    date += gps.time.hour();\n    date += ":";\n    date += gps.time.minute() < 10 ? "0" : "";\n    date += gps.time.minute();\n    date += ":";\n    date += gps.time.second() < 10 ? "0" : "";\n    date += gps.time.second();\n\n    String payload = "{";\n    payload += "\\"topic\\":\\"";\n    payload += preferences.getString("topic");\n    payload += "\\"";\n    payload += ", \\"spacetime\\": [";\n    payload += gps.location.lat();\n    payload += ", ";\n    payload += gps.location.lng();\n    payload += ", ";\n    payload += gps.altitude.meters();\n    payload += ", \\"";\n    payload += date;\n    payload += "\\"]";\n    payload += ", \\"value\\": {";\n    payload += "\\"speed\\": ";\n    payload += gps.speed.mps();\n    payload += ", \\"course\\": ";\n    payload += gps.course.deg();\n    payload += "}}";\n    return payload;\n}\n\nvoid log(String payload) {\n    File dataFile = SD.open("/cache.txt", FILE_APPEND);\n    if (dataFile) {\n        dataFile.println(payload);\n    } else {\n        Serial.println("error opening cache.txt");\n    }\n    dataFile.close();\n    File logFile = SD.open("/log.txt", FILE_APPEND);\n    if (logFile) {\n        logFile.println(payload);\n    } else {\n        Serial.println("error opening log.txt");\n    }\n    logFile.close();\n    Serial.print("Log: ");\n    Serial.println(payload);\n}\n')),(0,i.yg)("h3",{id:"http-server"},"HTTP server"),(0,i.yg)("p",null,"Next we run a local HTTP server so that you can connect to the onboard ESP wifi network ",(0,i.yg)("inlineCode",{parentName:"p"},"3D-T Logger")," with password ",(0,i.yg)("inlineCode",{parentName:"p"},"23571113"),".  Open a web browser and connect to the IP adress listed in the monitor (",(0,i.yg)("a",{parentName:"p",href:"http://192.168.1.4"},"http://192.168.1.4"),"). The ESP should display a web page to enter the credentials for the local Wi-Fi network and the server. The information entered in the form is stored in the ESP32 ",(0,i.yg)("inlineCode",{parentName:"p"},"preferences"),". This is a persistent key value map that persists through restarts and flashing new code."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-c"},'\nvoid process_parameters(String currentLine) {\n    Serial.print("Creditials:");\n    Serial.println(currentLine);\n    currentLine = urldecode(currentLine);\n    const int index = currentLine.indexOf("wifi_ssid");\n    if (index > 0) {\n        String query = currentLine.substring(index + 10);\n        String wifi_ssid = query.substring(0, query.indexOf("&"));\n        query = query.substring(query.indexOf("&") + 15);\n        String wifi_password = query.substring(0, query.indexOf("&"));\n        query = query.substring(query.indexOf("&") + 12);\n        String server_url = query.substring(0, query.indexOf("&"));\n        query = query.substring(query.indexOf("&") + 17);\n        String server_username = query.substring(0, query.indexOf("&"));\n        query = query.substring(query.indexOf("&") + 17);\n        String server_password = query.substring(0, query.indexOf("&"));\n        query = query.substring(query.indexOf("=") + 1);\n        String topic = query.substring(0, query.indexOf(" "));\n        Serial.println(wifi_ssid);\n        Serial.println(wifi_password);\n        Serial.println(server_url);\n        Serial.println(server_username);\n        Serial.println(server_password);\n        Serial.println(topic);\n        preferences.putString("wifi_ssid", wifi_ssid);\n        preferences.putString("wifi_password", wifi_password);\n        preferences.putString("server_url", server_url);\n        preferences.putString("server_username", server_username);\n        preferences.putString("server_password", server_password);\n        preferences.putString("topic", topic);\n    }\n}\nvoid serve_clients() {\n    WiFiClient client = server.available();\n    if (client) {\n        Serial.println("New Client.");\n        String currentLine = "";\n        while (client.connected()) {\n            if (client.available()) {\n                char c = client.read();\n                Serial.write(c);\n                header += c;\n                if (c == \'\\n\') {\n                    // if the current line is blank, you got two newline characters in a row.\n                    // that\'s the end of the client HTTP request, so send a response:\n                    if (currentLine.length() == 0) {\n                        client.println("HTTP/1.1 200 OK");\n                        client.println("Content-type:text/html");\n                        client.println("Connection: close");\n                        client.println();\n\n                        client.println("<!DOCTYPE html><html>");\n                        client.println("<head><meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1\\">");\n                        client.println("<link rel=\\"icon\\" href=\\"data:,\\">");\n                        client.println("<body><div align=\\"center\\">");\n                        client.println("<h1>3D-T Logger</h1>");\n                        client.println("<p>Enter the network name (SSID) and password of the Wi-Fi router:</p>");\n                        client.println("<form>");\n                        client.println("<table border=0 >");\n                        client.print("<tr><td><label>SSID</label></td><td><input type=\\"text\\" id=\\"ssid\\" name=\\"wifi_ssid\\" value=\\"");\n                        client.print(preferences.getString("wifi_ssid", ""));\n                        client.println("\\"></td></tr>");\n                        client.println("<tr><td><label>Password</label></td><td><input type=\\"password\\" id=\\"password\\" name=\\"wifi_password\\" value=\\"");\n                        client.print(preferences.getString("wifi_password", ""));\n                        client.println("\\"></td></tr>");\n                        client.println("</table><br><br>");\n                        client.println("<p>Enter the information of the server for posting the data:</p>");\n                        client.println("<table border=0 >");\n                        client.println("<tr><td><label>Server</label></td><td><input type=\\"text\\" id=\\"server\\" name=\\"server_url\\" value=\\"");\n                        client.print(preferences.getString("server_url", ""));\n                        client.println("\\"></td></tr>");\n                        client.println("<tr><td><label>Username</label></td><td><input type=\\"username\\" id=\\"username\\" name=\\"server_username\\" value=\\"");\n                        client.print(preferences.getString("server_username", ""));\n                        client.println("\\"></td></tr>");\n                        client.println("<tr><td><label>Password</label></td><td><input type=\\"password\\" id=\\"password\\" name=\\"server_password\\" value=\\"");\n                        client.print(preferences.getString("server_password", ""));\n                        client.println("\\"></td></tr>");\n                        client.println("<tr><td><label>Topic</label></td><td><input type=\\"text\\" id=\\"topic\\" name=\\"topic\\" value=\\"");\n                        client.print(preferences.getString("topic", ""));\n                        client.println("\\"></td></tr>");\n                        client.println("<tr><td></td><td><input type=\\"submit\\" ></td></tr>");\n                        client.println("</table>");\n                        client.println("</form><br><br>");\n                        if (WiFi.status() != WL_CONNECTED) {\n                            client.println("Not connected");\n                        } else {\n                            client.print("Connected to ");\n                            client.println(preferences.getString("wifi_ssid"));\n                        }\n                        client.println("</div></body></html>");\n                        client.println();\n                        break;\n                    } else {\n                        if (currentLine.startsWith("GET")) {\n                            process_parameters(currentLine);\n                        }\n                        currentLine = "";\n                    }\n                } else if (c != \'\\r\') {\n                    currentLine += c;\n                }\n            }\n        }\n        header = "";\n        client.stop();\n        Serial.println("Client disconnected.");\n        Serial.println("");\n    }\n}\n\n')),(0,i.yg)("h3",{id:"wi-fi-client"},"Wi-Fi client"),(0,i.yg)("p",null,"When the local Wi-Fi ",(0,i.yg)("inlineCode",{parentName:"p"},"ssid")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"password")," are entered the connection to the local Wi-Fi network is established. The IP adress of the ESP in the local network is printed on the monitor. "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-c"},'void wifi() {\n    String ssid = preferences.getString("wifi_ssid");\n    String password = preferences.getString("wifi_password");\n    Serial.print("Try wifi");\n    Serial.print(ssid);\n    Serial.println(password);\n    if (ssid == "" || password == "") {\n        return;\n    }\n    Serial.print("Connecting to ");\n    Serial.println(ssid);\n    WiFi.begin(ssid.c_str(), password.c_str());\n\n    for (int i = 0; i < 5; i++) {\n        if (WiFi.status() != WL_CONNECTED) {\n            Serial.print(".");\n            delay(1000);\n        }\n    }\n    if (WiFi.status() != WL_CONNECTED) {\n        Serial.println("Connection failed");\n    } else {\n        Serial.print("Connected with IP address ");\n        Serial.println(WiFi.localIP());\n    }\n}\n')),(0,i.yg)("h3",{id:"post-to-server"},"Post to server"),(0,i.yg)("p",null,"Once the Wi-Fi connection is established the authentication token can be requested from the server using the ",(0,i.yg)("inlineCode",{parentName:"p"},"username")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"password")," entered in the web page. The response is parsed and the token is stored."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-c"},'\nvoid get_token() {\n    if (preferences.getString("server_url", "") == "") {\n        return;\n    }\n    HTTPClient http;\n    String url = "http://" + preferences.getString("server_url") + "/login";\n    String body = "{\\"userName\\":\\"" + preferences.getString("server_username") + "\\",\\"password\\":\\"" +\n                  preferences.getString("server_password") + "\\"}";\n    Serial.print("Get token from " + url);\n    Serial.print("Body " + body);\n    http.begin(url);\n    http.addHeader("Content-Type", "application/json");\n    int httpResponseCode = http.POST(body);\n    if (httpResponseCode > 0) {\n        String response = http.getString();\n        Serial.println(httpResponseCode);\n        Serial.println(response);\n        DynamicJsonDocument doc(1024);\n        deserializeJson(doc, response);\n        const char* auth = doc["Authorization"];\n        token = auth;\n        Serial.print("Token ");\n        Serial.println(token);\n    } else {\n        Serial.print("Error on sending PUT Request: ");\n        Serial.println(httpResponseCode);\n    }\n    http.end();\n}\n')),(0,i.yg)("p",null,"If a Wi-Fi connection is available the information from the SD card is synchronized with the server via a HTTP post request. The token is stored in the header and the JSON payload in the body"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-c"},'int post(String body) {\n    int result = -1;\n    if (preferences.getString("server_url", "") == "") {\n        return result;\n    }\n    HTTPClient http;\n    String url = "http://" + preferences.getString("server_url") + "/states";\n    Serial.print("Post: " + url);\n    Serial.print("Body: " + body);\n    http.begin(url);\n    http.addHeader("Content-Type", "application/json");\n    http.addHeader("Authorization", "Bearer " + token);\n    int httpResponseCode = http.POST(body);\n    if (httpResponseCode > 0) {\n        String response = http.getString();\n        Serial.println(response);\n        result = 1;\n    } else {\n        Serial.print("Error on sending POST Request: ");\n        Serial.println(httpResponseCode);\n        String response = http.getString();\n        Serial.println(response);\n    }\n    http.end();\n    return result;\n}\n\nvoid sync() {\n    File dataFile = SD.open("/cache.txt", FILE_READ);\n    String line = "";\n    int index = 0;\n    while (dataFile.available()) {\n        char c = dataFile.read();\n        if (c != \'\\n\' && c != \'\\r\') {\n            line += c;\n            index++;\n        } else {\n            if (index > 0) {\n                Serial.print("Publish ");\n                delay(200);\n                if (post(line) != -1) {\n                    Serial.print("Posted ");\n                    Serial.println(line);\n                } else {\n                    return;\n                }\n            }\n            index = 0;\n        }\n    }\n    dataFile.close();\n    bool removed = SD.remove("/cache.txt");\n    Serial.println("Cleared cache");\n}\n\n')),(0,i.yg)("h3",{id:"main-loop"},"Main loop"),(0,i.yg)("p",null,"The event loop listens for incomming connections on the local web server and tries to setup a Wi-Fi connection for synchronizing the data. In this example the GPS is read every 100 milliseconds and the data is stored every 10 seconds.  "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-c"},'void loop() {\n    if (WiFi.status() != WL_CONNECTED) {\n        wifi();\n    } else if (token.length() == 0) {\n        get_token();\n    }\n    serve_clients();\n    readGps();\n    if (counter > 100) {\n        String payload = read();\n        log(payload);\n        if (token != "" && WiFi) {\n            sync();\n        }\n        counter = 0;\n    }\n    delay(100);\n    ++counter;\n}\n')),(0,i.yg)("h2",{id:"flash"},"Flash"),(0,i.yg)("p",null,"Connect the board with a USB cable  and click on the ",(0,i.yg)("inlineCode",{parentName:"p"},"PlatformIO: Upload")," icon in the bottom bar. This will compile and flash the code and starts a serial monitor. Connect your Wi-Fi to the Accesspoint ",(0,i.yg)("inlineCode",{parentName:"p"},"3D-T Logger")," and enter the password. "),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(93721).A,width:"1600",height:"910"})),(0,i.yg)("p",null,"You can now configure the connection to your Wi-Fi router and enter the credentials of the server that the data should be posted to."))}g.isMDXComponent=!0},33979:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/esp32_wroom_32_pin-8b044d225684e1caf499a0f498c2e327.png"},93721:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/esp_webpage-eb55e6c2d10870cc47d5c0a1d5772704.png"},83889:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/gps_logger_bb-2bf4a1eb65415d1a5dc0455674b07987.png"},9983:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/grove_gps-16a4ead99115ebe541765aa7c547ea84.png"},2079:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/micro_sdcard-abb8990d5a73445a19837288e9ebced0.png"}}]);