(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},18:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),l=a.n(r),c=(a(17),a(8)),s=a(4),i=a(5),u=a(6),m=a(9),h=a(7),d=a(1),b=a(10);var v=function(e){var t=e.name,a=e.ounces,n=e.abv,r=e.carbCount,l=e.calories;return o.a.createElement("div",{className:"card"},o.a.createElement("h2",null,t),o.a.createElement("hr",null),o.a.createElement("div",{className:"card-row"},o.a.createElement("span",null,"Calories"),o.a.createElement("span",null,"Ounces"),o.a.createElement("span",null,"ABV"),o.a.createElement("span",null,"CARBS")),o.a.createElement("div",{className:"card-row"},o.a.createElement("span",null,l),o.a.createElement("span",null,a),o.a.createElement("span",null,n),o.a.createElement("span",null,r)))},p=(a(18),a(19),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={name:"",ounces:null,abv:null,calories:null,carbCount:0,caloriesFromAlcohol:0,beers:[],showHistory:!1},e.convertOzToMils=e.convertOzToMils.bind(Object(d.a)(e)),e.handleInput=e.handleInput.bind(Object(d.a)(e)),e.getAlcoholCalories=e.getAlcoholCalories.bind(Object(d.a)(e)),e.clearForm=e.clearForm.bind(Object(d.a)(e)),e.toggleHistory=e.toggleHistory.bind(Object(d.a)(e)),e.addToHistory=e.addToHistory.bind(Object(d.a)(e)),e}return Object(b.a)(t,e),Object(u.a)(t,[{key:"convertOzToMils",value:function(){return 2957*+this.state.ounces}},{key:"handleInput",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(s.a)({},a,n))}},{key:"addToHistory",value:function(e){var t=e.name,a=e.ounces,n=e.abv,o=e.carbCount,r=e.calories,l=new Date(Date.now()).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),s="Unnamed: ".concat(l);t=t.length>0?t:s;var i=Object(c.a)(this.state.beers),u={name:t,ounces:a,abv:n,carbCount:o,calories:r};i.push(u);var m=JSON.stringify(i);localStorage.setItem("beers",m),this.setState({beers:i})}},{key:"toggleHistory",value:function(){this.setState({showHistory:!this.state.showHistory})}},{key:"clearForm",value:function(){this.setState({name:"",ounces:"",abv:"",calories:""})}},{key:"getAlcoholCalories",value:function(e){e.preventDefault();var t=this.state,a=t.name,n=t.ounces,o=t.calories,r=this.convertOzToMils(),l=+this.state.abv,c=(7*(r*+l.toFixed(2).split(".").join("")*8/1e6)/10).toFixed(2),s=((+o-c)/4).toFixed(1);this.setState({caloriesFromAlcohol:c}),this.setState({carbCount:s}),this.addToHistory({abv:l,calories:o,carbCount:s,name:a,ounces:n}),this.clearForm()}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("beers");e&&this.setState({beers:JSON.parse(e)})}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.ounces,n=e.abv,r=e.calories,l=e.carbCount,c=e.caloriesFromAlcohol,s=e.beers,i=e.showHistory;return o.a.createElement("div",{className:"app"},o.a.createElement("div",{style:{transform:i?"scale(1, 1)":"scale(0,0)"},className:"history"},s.length>0?s.map(function(e){return v(e)}):o.a.createElement("h1",null,"No beers here!")),o.a.createElement("i",{onClick:this.toggleHistory,className:"fa fa-history"}),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"centered-text"},o.a.createElement("h1",null,"CarbApproximator"),o.a.createElement("h2",{className:"sub-heading"},"for Craft Beer")),o.a.createElement("form",null,o.a.createElement("input",{className:"form-elements",name:"name",type:"text",placeholder:"Beer name",value:t,onChange:this.handleInput,"aria-label":"Name input"}),o.a.createElement("input",{className:"form-elements",name:"ounces",type:"number",placeholder:"How many ounces",value:a,onChange:this.handleInput,"aria-label":"Ounces input",required:!0}),o.a.createElement("input",{className:"form-elements",name:"abv",type:"number",placeholder:"ABV%",value:n,onChange:this.handleInput,"aria-label":"ABV input",required:!0}),o.a.createElement("input",{className:"form-elements",name:"calories",type:"number",placeholder:"Listed calories",value:r,onChange:this.handleInput,"aria-label":"Calories input",required:!0}),o.a.createElement("button",{className:"form-elements button",onClick:this.getAlcoholCalories,"aria-label":"Calculate Carbs Button",disabled:!(a&&n&&r)},"Get Estimate")),o.a.createElement("div",null,o.a.createElement("h2",null,"Calories from Alcohol: ".concat(c," kcal")),o.a.createElement("h2",null,"Estimated Carb Count: ".concat(l," g")))))}}]),t}(o.a.Component)),f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(p,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/carb_approximator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/carb_approximator","/service-worker.js");f?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):g(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):g(t,e)})}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.9766f638.chunk.js.map