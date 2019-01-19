(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/logo.f9ebcc13.png"},31:function(e,t,a){e.exports=a(60)},49:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(24),o=a.n(r),l=a(6),i=(a(46),a(48),a(4)),c=a(5),m=function(){function e(){Object(i.a)(this,e)}return Object(c.a)(e,null,[{key:"authenticateUser",value:function(e,t){localStorage.setItem("token",e),localStorage.setItem("email",t)}},{key:"isUserAuthenticated",value:function(){return null!==localStorage.getItem("token")}},{key:"deauthenticateUser",value:function(){localStorage.removeItem("token"),localStorage.removeItem("email")}},{key:"getToken",value:function(){return localStorage.getItem("token")}},{key:"getEmail",value:function(){return localStorage.getItem("email")}}]),e}(),u=(a(49),function(e){var t=e.children;return s.a.createElement("div",null,s.a.createElement("nav",{className:"nav-bar indigo lighten-1"},s.a.createElement("div",{className:"nav-wrapper"},s.a.createElement("a",{href:"/",className:"brand-logo"},"Tap News"),s.a.createElement("ul",{id:"nav-mobile",className:"right"},m.isUserAuthenticated()?s.a.createElement("div",null,s.a.createElement("li",null,m.getEmail()),s.a.createElement("li",null,s.a.createElement(l.a,{to:"/logout"},"Log out"))):s.a.createElement("div",null,s.a.createElement("li",null,s.a.createElement(l.a,{to:"/login"},"Log in")),s.a.createElement("li",null,s.a.createElement(l.a,{to:"/signup"},"Sign up")))))),s.a.createElement("br",null),t)}),d=a(8),p=a(7),h=a(9),w=a(1),g=a.n(w),v=(a(51),function(e){var t=e.onSubmit,a=e.onChange,n=e.errors;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"card-panel login-panel"},s.a.createElement("form",{className:"col s12",action:"/",onSubmit:t},s.a.createElement("h4",{className:"center-align"},"Login"),n.summary&&s.a.createElement("div",{className:"row"},s.a.createElement("p",{className:"error-message"},n.summary)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{className:"validate",id:"email",type:"email",name:"email",onChange:a}),s.a.createElement("label",{htmlFor:"email"},"Email"))),n.email&&s.a.createElement("div",{className:"row"},s.a.createElement("p",{className:"error-message"},n.email)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{className:"validate",id:"password",type:"password",name:"password",onChange:a}),s.a.createElement("label",{htmlFor:"password"},"Password"))),n.password&&s.a.createElement("div",{className:"row"},s.a.createElement("p",{className:"error-message"},n.password)),s.a.createElement("div",{className:"row right-align"},s.a.createElement("input",{type:"submit",className:"waves-effect waves-light btn indigo lighten-1",value:"Log in"})),s.a.createElement("div",{className:"row"},s.a.createElement("p",{className:"right-align"}," New to Tap News?  ",s.a.createElement(l.a,{to:"/signup"},"Sign Up"))))))}),E=function(e){function t(e,a){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e,a))).state={errors:{},user:{email:"",password:""}},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"processForm",value:function(e){var t=this;e.preventDefault();var a=this.state.user.email,n=this.state.user.password;console.log("email",a),console.log("password",n);var s="http://"+window.location.hostname+":3000/auth/login",r=new Request(s,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:this.state.user.email,password:this.state.user.password})});fetch(r).then(function(e){200===e.status?(t.setState({errors:{}}),e.json().then(function(e){console.log(e),m.authenticateUser(e.token,a),t.context.router.replace("/")})):(console.log("Login failed"),e.json().then(function(e){var a=e.errors?e.errors:{};a.summary=e.message,t.setState({errors:a})}))})}},{key:"changeUser",value:function(e){var t=e.target.name,a=this.state.user;a[t]=e.target.value,this.setState({user:a})}},{key:"render",value:function(){var e=this;return s.a.createElement(v,{onSubmit:function(t){return e.processForm(t)},onChange:function(t){return e.changeUser(t)},errors:this.state.errors})}}]),t}(s.a.Component);E.contextTypes={router:g.a.object.isRequired};var f=E,N=(a(53),function(e){var t=e.onSubmit,a=e.onChange,n=e.errors;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"card-panel signup-panel"},s.a.createElement("form",{className:"col s12",action:"/",onSubmit:t},s.a.createElement("h4",{className:"center-align"},"SignUp"),n.summary&&s.a.createElement("div",{className:"row"},s.a.createElement("p",{className:"error-message"},n.summary)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{className:"validate",id:"email",type:"email",name:"email",onChange:a}),s.a.createElement("label",{htmlFor:"email"},"Email"))),n.email&&s.a.createElement("div",{className:"row"},s.a.createElement("p",{className:"error-message"},n.email)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{className:"validate",id:"password",type:"password",name:"password",onChange:a}),s.a.createElement("label",{htmlFor:"password"},"Password"))),n.password&&s.a.createElement("div",{className:"row"},s.a.createElement("p",{className:"error-message"},n.password)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{id:"confirm_password",type:"password",name:"confirm_password",className:"validate",onChange:a}),s.a.createElement("label",{htmlFor:"confirm_password"},"Conform Password"))),s.a.createElement("div",{className:"row right-align"},s.a.createElement("input",{type:"submit",className:"waves-effect waves-light btn indigo lighten-1",value:"Sign Up"})),s.a.createElement("div",{className:"row"},s.a.createElement("p",{className:"right-align"}," Already have an account?  ",s.a.createElement(l.a,{to:"/login"},"Login"))))))}),b=function(e){function t(e,a){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e,a))).state={errors:{},user:{email:"",password:"",confirm_password:""}},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"processForm",value:function(e){var t=this;e.preventDefault();var a=this.state.user.email,n=this.state.user.password,s=this.state.user.confirm_password;console.log("email",a),console.log("password",n),console.log("confirm_password",s);var r="http://"+window.location.hostname+":3000/auth/signup",o=new Request(r,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:this.state.user.email,password:this.state.user.password})});fetch(o).then(function(e){200===e.status?(t.setState({errors:{}}),t.context.router.replace("/login")):e.json().then(function(e){var a=e.errors?e.errors:{};a.summary=e.message,console.log(t.state.errors),t.setState({errors:a})})})}},{key:"changeUser",value:function(e){var t=e.target.name,a=this.state.user;a[t]=e.target.value,this.setState({user:a});var n=this.state.errors;this.state.user.password!==this.state.user.confirm_password?n.password="Password and Confirm Password don't match":n.password="",this.setState({errors:n})}},{key:"render",value:function(){var e=this;return s.a.createElement(N,{onSubmit:function(t){return e.processForm(t)},onChange:function(t){return e.changeUser(t)},errors:this.state.errors})}}]),t}(s.a.Component);b.contextTypes={router:g.a.object.isRequired};var y=b,j=(a(55),a(57),function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"redirectToUrl",value:function(e,t){t.preventDefault(),window.open(e,"_blank")}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"news-container",onClick:function(t){return e.redirectToUrl(e.props.news.url,t)}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s4 fill"},s.a.createElement("img",{src:this.props.news.urlToImage,alt:"news"})),s.a.createElement("div",{className:"col s8"},s.a.createElement("div",{className:"news-intro-col"},s.a.createElement("div",{className:"news-intro-panel"},s.a.createElement("h4",null,this.props.news.title),s.a.createElement("div",{className:"news-description"},s.a.createElement("p",null,this.props.news.description),s.a.createElement("div",null,null!=this.props.news.source&&s.a.createElement("div",{className:"chip light-blue news-chip"},this.props.news.source),null!=this.props.news.reason&&s.a.createElement("div",{className:"chip light-green news-chip"},this.props.news.reason),null!=this.props.news.time&&s.a.createElement("div",{className:"chip amber news-chip"},this.props.news.time))))))))}}]),t}(s.a.Component)),S=a(29),k=a.n(S),O=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).state={news:null,pageNum:1,loadedAll:!1},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.loadMoreNews("componentDidMount"),this.loadMoreNews=k.a.debounce(this.loadMoreNews,1e3),window.addEventListener("scroll",function(){return e.handleScroll()})}},{key:"handleScroll",value:function(){var e=window.scrollY||window.pageYOffset||document.documentElement.scrollTop;window.innerHeight+e>=document.body.offsetHeight-50&&(console.log("Handle Scroll."),this.loadMoreNews("handleScroll"))}},{key:"renderNews",value:function(){var e=this.state.news.map(function(e){return s.a.createElement("div",{className:"list-group-item",key:e.digest},s.a.createElement(j,{news:e}))});return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",null,e))}},{key:"loadMoreNews",value:function(){var e=this;console.log("loadAll? "+this.state.loadedAll),this.state.loadedAll||console.log("Loading more news!");var t="http://"+window.location.hostname+":3000/news/userId="+m.getEmail()+"&pageNum="+this.state.pageNum,a=new Request(encodeURI(t),{method:"GET",headers:{Authorization:"bearer "+m.getToken()}});fetch(a).then(function(e){return e.json()}).then(function(t){t&&0!==t.length||e.setState({loadedAll:!0}),e.setState({news:e.state.news?e.state.news.concat(t):t,pageNum:e.state.pageNum+1})})}},{key:"render",value:function(){return this.state.news?s.a.createElement("div",null,this.renderNews()):s.a.createElement("div",null,"Loading...")}}]),t}(s.a.Component),C=a(30),U=a.n(C),T=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("img",{className:"logo",src:U.a,alt:"logo"}),s.a.createElement("div",{className:"container"},s.a.createElement(O,null)))}}]),t}(s.a.Component),A={component:u,childRoutes:[{path:"/",getComponent:function(e,t){m.isUserAuthenticated()?t(null,T):t(null,f)}},{path:"/login",component:f},{path:"/signup",component:y},{path:"/logout",onEnter:function(e,t){m.deauthenticateUser(),t("/")}}]};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(l.b,{history:l.c,routes:A}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.1d4c467b.chunk.js.map