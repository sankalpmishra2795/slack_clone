(this["webpackJsonpsprint-4"]=this["webpackJsonpsprint-4"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(7),r=t.n(c),s=(t(13),t(1)),m=t(2),o=t(4),i=t(3),d=t(5),u=(t(14),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).emailHandler=function(e){t.setState({email:e.target.value})},t.passHandler=function(e){console.log(e.target.value),t.setState({pass:e.target.value})},t.authenticate=function(e){e.preventDefault(),t.props.email===t.state.email&&t.props.pass===t.state.pass&&t.setState({status:!0})},t.state={email:"",pass:"",status:!1},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e;return e=this.state.status?n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3"}),n.a.createElement("div",{className:"col-6 rounded p-5 my-5 border border-dark "},n.a.createElement("p",null,"SIGN-IN SUCCESSFUL"))),n.a.createElement("div",{className:"col-3"})):n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3"}),n.a.createElement("div",{className:"col-6 rounded p-5 my-5 border border-dark "},n.a.createElement("pre",null,"Email : admin ",n.a.createElement("p",null,"Pass : admin")),n.a.createElement("h1",{className:"p-2"},"Login : "),n.a.createElement("form",null,n.a.createElement("div",{class:"form-group"},n.a.createElement("label",null,"Email address"),n.a.createElement("input",{value:this.state.email,onChange:this.emailHandler,type:"text",class:"form-control",id:"emailInput","aria-describedby":"emailHelp"})),n.a.createElement("div",{class:"form-group"},n.a.createElement("label",{for:"exampleInputPassword1"},"Password"),n.a.createElement("input",{value:this.state.pass,onChange:this.passHandler,type:"password",class:"form-control",id:"passInput"})),n.a.createElement("button",{type:"submit",class:"w-25 btn btn-outline-dark",onClick:this.authenticate},"Submit")))),n.a.createElement("div",{className:"col-3"})),n.a.createElement("div",{className:"container  "},e)}}]),a}(l.Component));l.Component;var p=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"container-fluid"},n.a.createElement("nav",{className:"container navbar navbar-expand-lg navbar-light "},n.a.createElement("div",{className:"col-10"},n.a.createElement("a",{className:"py-2 px-3",href:"#"},n.a.createElement("img",{src:"./logo.png",alt:"",className:"img-fluid",width:"120px"})),n.a.createElement("a",{className:"py-2 px-3",href:"#"},"Why Slack?"),n.a.createElement("a",{className:"py-2 px-3",href:"#"},"Solutions"),n.a.createElement("a",{className:"py-2 px-3",href:"#"},"Resources"),n.a.createElement("a",{className:"py-2 px-3",href:"#"},"Enterprise"),n.a.createElement("a",{className:"py-2 px-3",href:"#"},"Pricing")),n.a.createElement("div",{className:"col-2"},n.a.createElement("button",{type:"button",class:"btn btn-primary workspace-color p-2"},"Your workspaces")))))};var E=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"container-fluid poster "},n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col-md-6 p-5 m-4"},n.a.createElement("h1",{className:"dark-title"}," ","Slack replaces email inside your company"),n.a.createElement("h5",null,"Keep conversations organised in Slack, the smart ",n.a.createElement("br",null),"alternative to email."),n.a.createElement("button",{type:"button",class:"btn btn-primary workspace-color p-3 m-2"},"Your workspaces"),n.a.createElement("button",{type:"button",class:"btn btn-outline-dark workspace-light  p-3 m-2"},"Your workspaces"),n.a.createElement("p",null," ",n.a.createElement("small",null,"Already using Slack? ",n.a.createElement("span",{className:"blueColor"},"Sign in.")))),n.a.createElement("div",{className:"col-md-6 "}))))};var v=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"container text-center"},n.a.createElement("h1",{className:"dark-title-2 mt-5 pt-5"},"Break out of the inbox"),n.a.createElement("p",{className:"px-2 dark"},"Working in channels gives everyone in your team a shared view of progress and purpose.")),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"center m-auto"},n.a.createElement("div",{className:"video-card col-6"},n.a.createElement("video",{width:"840",height:"640",playsinline:"playsinline",autoplay:"autoplay",muted:"muted",loop:"loop"},n.a.createElement("source",{src:"https://slack.com/marketing/img/homepage/video/brand-campaign_inline-video.mp4",type:"video/mp4"})))))))};var h=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"container "},n.a.createElement("div",{className:"row"},n.a.createElement("div",{class:"card-deck"},n.a.createElement("div",{class:"card border-0"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-4"},n.a.createElement("img",{src:"./ico.png",class:"card-img-top",className:"img-fluid",clasalt:"..."}))),n.a.createElement("div",{class:"card-body"},n.a.createElement("h5",{class:"card-title"},"Conversations, organised"),n.a.createElement("p",{class:"card-text"},"Instead of a single overstuffed inbox, conversations in Slack happen in dedicated spaces called channels."))),n.a.createElement("div",{class:"card border-0"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-4"},n.a.createElement("img",{src:"./ico1.png",class:"card-img-top",className:"img-fluid",clasalt:"..."}))),n.a.createElement("div",{class:"card-body"},n.a.createElement("h5",{class:"card-title"},"Stay in the loop, not out"),n.a.createElement("p",{class:"card-text"},"Slack makes it simple to follow conversations or find important information in an easily searchable archive."))),n.a.createElement("div",{class:"card border-0"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-4"},n.a.createElement("img",{src:"./ico2.png",class:"card-img-top",className:"img-fluid",clasalt:"..."}))),n.a.createElement("div",{class:"card-body pb-5"},n.a.createElement("h5",{class:"card-title"},"Give focus a chance"),n.a.createElement("p",{class:"card-text"},"Unlike email, Slack lets you choose which conversations are most important \u2013 and which can wait.")))))))};var g=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"container py-4"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 p-5"},n.a.createElement("h1",{className:"dark-title-2"},"Make the change to channels"),n.a.createElement("p",{className:"lead"},"Productive teamwork happens in channels \u2013 organised spaces for everything related to a project, topic or team."),n.a.createElement("p",{className:"blueColor"},"Learn more about channels --\x3e")),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"video-card "},n.a.createElement("video",{width:"100%",height:"100%",playsinline:"playsinline",autoplay:"autoplay",muted:"muted",loop:"loop"},n.a.createElement("source",{src:"https://a.slack-edge.com/085e3/marketing/img/channels/vid/channels-inline1.en-IN.mp4"})))))),n.a.createElement("div",{className:"container py-4"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"video-card "},n.a.createElement("video",{width:"100%",height:"100%",playsinline:"playsinline",autoplay:"autoplay",muted:"muted",loop:"loop"},n.a.createElement("source",{src:"https://a.slack-edge.com/085e3/marketing/img/shared-channels/vid/shared-channels-inline3.en-IN.mp4"})))),n.a.createElement("div",{className:"col-md-6 p-5"},n.a.createElement("h1",{className:"dark-title-2"},"Shared channels bring companies together"),n.a.createElement("p",{className:"lead"},"Now channels can help you work as closely with external partners and clients as you do with teams down the corridor."),n.a.createElement("p",{className:"blueColor"},"See how with shared channels --\x3e")))),n.a.createElement("div",{className:"container-fluid text-center bg-light"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"dark-title-2"},"Trusted the world over"),n.a.createElement("p",{className:"lead"},"Teams of every size, shape and sort have already made Slack the place where their work happens."),n.a.createElement("p",{className:"colorBlue"},"See all customer stories ---\x3e")),n.a.createElement("div",{className:"container"},n.a.createElement("div",{id:"carouselExampleIndicators",class:"carousel slide","data-ride":"carousel"},n.a.createElement("ol",{class:"carousel-indicators"},n.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",class:"active"}),n.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),n.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"})),n.a.createElement("div",{class:"carousel-inner"},n.a.createElement("div",{class:"carousel-item active"},n.a.createElement("div",{className:"col-4"},n.a.createElement("img",{class:"d-block w-100",src:"https://a.slack-edge.com/80588/marketing/img/stories/shopify/slack-customer-shopify.jpg",alt:"First slide"}),n.a.createElement("div",{className:"col-8"}))),n.a.createElement("div",{class:"carousel-item"},n.a.createElement("div",{className:"col-4"},n.a.createElement("img",{class:"d-block w-100",src:"https://a.slack-edge.com/80588/marketing/img/stories/intuit/slack-customer-intuit.jpg",alt:"Second slide"})),n.a.createElement("div",{className:"col-8"})),n.a.createElement("div",{class:"carousel-item"},n.a.createElement("div",{className:"col-4"},n.a.createElement("img",{class:"d-block w-100",src:"https://a.slack-edge.com/80588/marketing/img/stories/everlane/slack-customer-everlane.jpg",alt:"Third slide"})),n.a.createElement("div",{className:"col-8 bg-white"}))),n.a.createElement("a",{class:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},n.a.createElement("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),n.a.createElement("span",{class:"sr-only"},"Previous")),n.a.createElement("a",{class:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},n.a.createElement("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),n.a.createElement("span",{class:"sr-only"},"Next"))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row m-5 py-5"},n.a.createElement("div",{className:"col-md-3"},n.a.createElement("img",{src:"https://a.slack-edge.com/80588/marketing/img/logos/company/_color/trivago-logo.png",alt:""})),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("img",{src:"https://a.slack-edge.com/80588/marketing/img/logos/company/_color/vodafone-logo.png",alt:""})),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("img",{src:"https://a.slack-edge.com/80588/marketing/img/logos/company/_color/shopify-logo.png",alt:""})),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("img",{src:"https://a.slack-edge.com/80588/marketing/img/logos/company/_color/treebo-logo.png",alt:""})))))))};var b=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"container text-center"},n.a.createElement("h1",{className:"dark-title-2"},"What\u2019s new at Slack"),n.a.createElement("div",{className:"row m-5"},n.a.createElement("div",{className:"col-4 px-4"},n.a.createElement("div",{class:"card"},n.a.createElement("img",{class:"card-img-top",src:"https://a.slack-edge.com/b4782/marketing/img/promos/2019-10-10-engagement.jpg",alt:"Card image cap"}),n.a.createElement("div",{class:"card-body"},n.a.createElement("p",{class:"card-text"},"Blog Not all Daily Active Users are created equal: Work is fueled by true engagement"),n.a.createElement("p",null,"READ STORY")))),n.a.createElement("div",{className:"col-4 px-4"},n.a.createElement("div",{class:"card"},n.a.createElement("img",{class:"card-img-top",src:"https://a.slack-edge.com/ebeb3/marketing/img/promos/shared-channels-hp-promo.png",alt:"Card image cap"}),n.a.createElement("div",{class:"card-body"},n.a.createElement("p",{class:"card-text"},"Blog Shared channels: A better way to work with people outside your company"),n.a.createElement("p",null," READ STORY")))),n.a.createElement("div",{className:"col-4 px-4"},n.a.createElement("div",{class:"card"},n.a.createElement("img",{class:"card-img-top",src:"https://a.slack-edge.com/80588/marketing/img/promos/gsuite-calendar-email-files.png",alt:"Card image cap"}),n.a.createElement("div",{class:"card-body"},n.a.createElement("p",{class:"card-text"},"Blog Slack and G Suite bring productivity to your everyday work"),n.a.createElement("p",null,"LEARN MORE")))))),n.a.createElement("div",{className:"container-fluid text-center p-5 bg-purple"},n.a.createElement("div",{className:"container pb-5"},n.a.createElement("h1",{className:"light-title-2 p-5"},"Choose a better way to work"),n.a.createElement("button",{type:"button",class:"btn btn-primary light-btn p-3 m-2"},"Your workspaces"),n.a.createElement("button",{type:"button",class:"btn btn-primary light-outline-btn p-3 m-2"},"Your workspaces"))),n.a.createElement("div",{className:"container py-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-4"},n.a.createElement("img",{src:"./btm-logo.png",className:"img-fluid",width:"50px",alt:""})),n.a.createElement("div",{className:"col-8"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("th",null,"PRODUCTS"),n.a.createElement("th",null,"SLACK FOR TEAMS"),n.a.createElement("th",null,"RESOURCES"),n.a.createElement("th",null,"COMPANY")),n.a.createElement("tr",null,n.a.createElement("td",null,"Why Slack?"),n.a.createElement("td",null,"Engineering"),n.a.createElement("td",null,"Slack Tips"),n.a.createElement("td",null,"About us")),n.a.createElement("tr",null,n.a.createElement("td",null,"Enterprise"),n.a.createElement("td",null,"Financial services"),n.a.createElement("td",null,"Blog"),n.a.createElement("td",null,"Leadership")),n.a.createElement("tr",null,n.a.createElement("td",null,"Security"),n.a.createElement("td",null,"Sales"),n.a.createElement("td",null,"Slack Certified programme"),n.a.createElement("td",null,"News")),n.a.createElement("tr",null,n.a.createElement("td",null,"Customer stories"),n.a.createElement("td",null,"IT"),n.a.createElement("td",null,"Help Centre"),n.a.createElement("td",null,"Media kit")),n.a.createElement("tr",null,n.a.createElement("td",null,"Pricing"),n.a.createElement("td",null,"Marketing"),n.a.createElement("td",null,"API"),n.a.createElement("td",null,"Careers")),n.a.createElement("tr",null,n.a.createElement("td",null,"Slack demo"),n.a.createElement("td",null,"Customer support"),n.a.createElement("td",null,"App Directory")),n.a.createElement("tr",null,n.a.createElement("td",null,"Human resources"),n.a.createElement("td",null,"Download Slack")),n.a.createElement("tr",null,n.a.createElement("td",null,"Project management"),n.a.createElement("td",null,"Partners")),n.a.createElement("tr",null,n.a.createElement("td",null,"Media")))))),n.a.createElement("div",{className:"container-fluid bg-light p-3"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("a",{className:"p-2",href:""},"Status"),n.a.createElement("a",{className:"p-2",href:""},"Privacy & terms"),n.a.createElement("a",{className:"p-2",href:""},"Contact us"),n.a.createElement("a",{className:"p-2",href:""},"Change region"),"\xa9"),n.a.createElement("div",{className:"col-md-4 text-right"},n.a.createElement("a",{href:""},n.a.createElement("i",{class:"fab fa-linkedin p-2"})),n.a.createElement("a",{href:""},n.a.createElement("i",{class:"fab fa-twitter p-2"})),n.a.createElement("a",{href:""},n.a.createElement("i",{class:"fab fa-facebook-square p-2"})),n.a.createElement("a",{href:""},n.a.createElement("i",{class:"fab fa-youtube p-2"})))))))},N=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(p,null),n.a.createElement(E,null),n.a.createElement(v,null),n.a.createElement(h,null),n.a.createElement("hr",null),n.a.createElement(g,null),n.a.createElement(b,null))}}]),a}(l.Component);var f=function(e){return console.log(e.itemsData),n.a.createElement("div",null,n.a.createElement("table",{class:"table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Item"),n.a.createElement("th",{scope:"col"},"Name"),n.a.createElement("th",{scope:"col"},"Description"),n.a.createElement("th",{scope:"col"},"Category"),n.a.createElement("th",{scope:"col"},"Price"))),n.a.createElement("tbody",null,e.itemsData.map((function(e){return n.a.createElement("tr",null,n.a.createElement("td",null),n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.desc),n.a.createElement("td",null,e.cat),n.a.createElement("td",null,e.price))})),n.a.createElement("tr",null,n.a.createElement("td",null,"Demo #"),n.a.createElement("td",null,"Demo"),n.a.createElement("td",null,"Demo"),n.a.createElement("td",null,"Demmo"),n.a.createElement("td",null,"Demo")))))},y=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).nameInputHandler=function(e){t.setState({name:e.target.value})},t.descInputHandler=function(e){t.setState({desc:e.target.value})},t.catInputHandler=function(e){t.setState({cat:e.target.value})},t.priceInputHandler=function(e){t.setState({price:e.target.value})},t.addItems=function(e){e.preventDefault();var a={name:t.state.name,desc:t.state.desc,cat:t.state.cat,price:t.state.price};t.state.data.push(a)},t.state={name:"",desc:"",cat:"",price:"",total:"",data:[]},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container justify-content-center p-5"},n.a.createElement("form",null,n.a.createElement("div",{class:"form-group"},n.a.createElement("label",{for:"exampleInputEmail1"},"Name"),n.a.createElement("input",{value:this.state.name,onChange:this.nameInputHandler,type:"text",class:"form-control",id:"nameInput","aria-describedby":"emailHelp"})),n.a.createElement("div",{class:"form-group"},n.a.createElement("label",{for:"exampleInputPassword1"},"Description"),n.a.createElement("input",{type:"password",value:this.state.desc,onChange:this.descInputHandler,class:"form-control",id:"descInput"})),n.a.createElement("div",{class:"form-group"},n.a.createElement("label",{for:"exampleInputPassword1"},"Category"),n.a.createElement("select",{class:"form-control",value:this.state.cat,onChange:this.catInputHandler,id:"catInput"},n.a.createElement("option",null,"Toys"),n.a.createElement("option",null,"Game"),n.a.createElement("option",null,"Drink"),n.a.createElement("option",null,"Gadgets"),n.a.createElement("option",null,"Tools"))),n.a.createElement("div",{class:"form-group"},n.a.createElement("label",{for:"exampleInputPassword1"},"Price"),n.a.createElement("input",{type:"text",value:this.state.price,onChange:this.priceInputHandler,class:"form-control",id:"priceInput"})),n.a.createElement("button",{onClick:this.addItems,type:"submit",class:"btn btn-primary"},"Submit")),n.a.createElement(f,{itemsData:this.state.data}))}}]),a}(l.Component),k=(l.Component,function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(N,null))}}]),a}(l.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.d0021784.chunk.js.map