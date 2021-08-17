(this["webpackJsonpweather-api"]=this["webpackJsonpweather-api"]||[]).push([[0],{18:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(11),r=c.n(n),l=(c(18),c(7)),i=c(8),o=c(0);var d=function(){return Object(o.jsx)("footer",{className:"bg-dark text-white",children:Object(o.jsxs)(l.a,{fluid:!0,children:[Object(o.jsx)(i.a,{className:"text-center pt-3",children:Object(o.jsxs)("ul",{className:"list-unstyled",children:[Object(o.jsx)("li",{children:"Mark Angus,"}),Object(o.jsx)("li",{children:"23 Tupman Close,"}),Object(o.jsx)("li",{children:"Rochester, Kent,"}),Object(o.jsx)("li",{children:"ME1 1RS"})]})}),Object(o.jsx)(i.a,{className:"border-top text-center pt-3",children:Object(o.jsxs)("ul",{className:"icon-list list-unstyled md-3 d-flex justify-content-center",children:[Object(o.jsx)("li",{children:"07907483215"}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"mailto:markrangus@outlook.com?subject",children:Object(o.jsx)("i",{className:"fas fa-at"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/mark-angus-6a75bb211/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("i",{className:"fab fa-linkedin"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://github.com/mark-a97",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("i",{className:"fab fa-github"})})})]})}),Object(o.jsx)(i.a,{className:" mt-0 text-center text-secondary",children:Object(o.jsx)("p",{children:"\xa9Mark Angus"})})]})})},j=c(10),h=c(13),m=c(12),u=c.n(m),b=c(6),x={searched:!1,value:""},O=function(){var e="f180253d03ad43ba851194056211408",t="https://api.weatherapi.com/v1/",c=Object(a.useState)(),s=Object(j.a)(c,2),n=s[0],r=s[1],d=Object(a.useState)({}),m=Object(j.a)(d,2),O=m[0],f=m[1],p=function(e){return e=e.substring(0,e.length-3)},y="undefined"!=typeof O.location?O.current.condition.text:null;return Object(o.jsx)("div",{className:null!=y&&y.includes("rain")?"main-rain":null!=y&&y.includes("Clear")?"main-clear":null!=y&&y.includes("Sunny")?"main-sunny":null!=y&&y.includes("Fog")?"main-fog":null!=y&&y.includes("Overcast")?"main-overcast":null!=y&&y.includes("Partly")?"main-partly-cloudy":"main",children:Object(o.jsxs)(l.a,{className:!1===x.searched?"main-container":"main-container-searched",children:[Object(o.jsx)("div",{className:"search-box",children:Object(o.jsx)("input",{type:"text",className:"search-bar",placeholder:"search location...",onChange:function(e){return r(e.target.value)},value:n||"",onKeyPress:function(c){"Enter"===c.key&&(fetch(t+"forecast.json?key="+e+"&q="+n+"&days=5&aqi=no&alerts=no").then((function(e){return e.json()})).then((function(e){f(e),r(""),console.log(e)})).catch((function(e){console.log("Error "+e)})),x.searched=!0,x.value=n)}})}),Object(o.jsxs)(b.a.Title,{className:"text-center text-white mb-5 text-location",children:["undefined"!=typeof O.location?Object(o.jsxs)("p",{children:[O.location.name,",\xa0",O.location.country]}):""," "]}),Object(o.jsx)(i.a,{md:6,className:"text-center",children:"undefined"!=typeof O.location?O.forecast.forecastday.map((function(e,t){return Object(o.jsxs)(h.a,{className:"card-color m-auto card-style col-md-6",sm:12,md:6,children:[Object(o.jsx)(b.a.Title,{className:"p-2",children:(c=e.date,c=u()(c,"mmmm dS"))}),Object(o.jsx)(b.a.Img,{className:"bg-light weather-img",style:{height:"30%",width:"30%"},variant:"top",src:e.day.condition.icon}),0===t?Object(o.jsxs)("div",{className:"current-temp-div",children:[Object(o.jsxs)("p",{className:"current-temp",children:[O.current.temp_c,"\u2103"]}),Object(o.jsxs)("p",{className:"current-temp",children:["Feels like ",O.current.feelslike_c,"\u2103"]})]}):Object(o.jsx)("div",{className:"avg-temp-div",children:Object(o.jsxs)("p",{className:"avg-temp",children:["Average temp: ",Math.round(e.day.avgtemp_c),"\u2103"]})}),Object(o.jsxs)(b.a.Body,{className:"card-body",children:[Object(o.jsxs)("div",{className:"sun-container",children:[Object(o.jsx)("i",{style:{color:"yellow"},className:"icon far fa-sun"}),Object(o.jsx)(b.a.Text,{className:"weather-sun",children:p(e.astro.sunrise)}),"\xa0\xa0\xa0"]}),Object(o.jsxs)("div",{className:"sun-container",style:{float:"right"},children:[Object(o.jsx)("i",{style:{color:"black"},className:"far fa-moon"}),Object(o.jsx)(b.a.Text,{className:"weather-sun",children:p(e.astro.sunset)})]}),Object(o.jsxs)("div",{className:"temp-container",children:[Object(o.jsx)("i",{style:{color:"red"},className:"fab fa-hotjar"}),Object(o.jsxs)(b.a.Text,{children:[Math.round(e.day.maxtemp_c),"\u2103"]}),"\xa0\xa0\xa0"]}),Object(o.jsxs)("div",{className:"temp-container",style:{float:"right"},children:[Object(o.jsx)("i",{style:{color:"blue"},className:"fas fa-thermometer-empty"}),Object(o.jsxs)(b.a.Text,{children:[Math.round(e.day.mintemp_c),"\u2103"]})]})]}),Object(o.jsx)(b.a.Footer,{children:Object(o.jsxs)("small",{children:[e.day.daily_chance_of_rain>1?e.day.daily_chance_of_rain+"%":"","(",e.day.condition.text,")"]})})]},t);var c})):""}),!0===x.searched&&"undefined"===typeof O.location?Object(o.jsxs)("p",{className:"search-header",children:['Search: "',x.value,'" returned false']}):"",!1===x.searched&&Object(o.jsx)("p",{className:"search-header",children:"Search a country or city to begin"})]})})};var f=function(){return Object(o.jsxs)(l.a,{className:"p-0",fluid:!0,children:[Object(o.jsx)(O,{}),Object(o.jsx)(d,{})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};c(20);r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),p()}},[[21,1,2]]]);
//# sourceMappingURL=main.c855d4f8.chunk.js.map