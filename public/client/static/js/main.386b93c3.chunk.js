(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{41:function(e){e.exports=JSON.parse('{"posts":[{"user":{"name":"Joe Mockery","id":1},"title":"Thoughts on JavaScript","content":"I love a hot cuppa Java with my donuts. Particularly when I\'m reading the script for my new movie. Java and Script, mmmm, delicious!","createdAt":"2019-11-28T11:01:45.948Z","_id":1},{"user":{"name":"Joe Mockery","id":1},"title":"Why React??","content":"Why do you have to React to everything? I mean all I said was that the reactor was gonna blow. What\'s the fuss about?","createdAt":"2019-11-28T11:04:06.440Z","_id":2}],"authors":[{"password":"$2b$10$/MR28AAVtvOL4eQkMimtvezwTzOve4BSDxNtd9ST9rYYjnhfp9Ayi","email":"homer@springfield.com","name":"Homer Simpson","dateJoined":"2019-11-28T10:59:49.437Z","id":1}],"categories":[{"id":1,"title":"JavaScript"},{"id":2,"title":"React"},{"id":3,"title":"Node.js"},{"id":4,"title":"React Router"},{"id":5,"title":"Redux"},{"id":6,"title":"GraphQL"},{"id":7,"title":"HTML5"},{"id":8,"title":"CSS3"},{"id":9,"title":"Java"},{"id":10,"title":"Python"},{"id":11,"title":"Movies"}]}')},57:function(e,t,n){e.exports=n(70)},62:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),o=n.n(c),u=(n(62),n(13)),l=n(4),i=n(1),s=function(e){if(!e.ok)throw e;return e},m=function(){return new Promise((function(e,t){try{e({token:window.localStorage.getItem("blogChefJWTToken")})}catch(n){t()}}))},E=function(){return fetch("/api/posts").then(s).then((function(e){return e.json()}))},p=function(e,t,n,a){return function(r){return function(e,t){return new Promise((function(n,a){return fetch("/api/login",{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(s).then((function(e){return e.json()})).then((function(e){var t=e.token,a=e.user;window.localStorage.setItem("blogChefJWTToken",t),window.localStorage.setItem("blogChefJWTUser",JSON.stringify(a)),n(a)})).catch((function(e){e.json().then((function(e){var t=e.error;return a(t)}))}))}))}(e,t).then((function(e){r({type:"SIGNIN_SUCCESS",user:e});var t=(a.state||{from:{pathname:"/"}}).from;n.replace(t)})).catch((function(){r({type:"SIGNIN_FAILURE"})}))}},f=function(e,t,n,a){return function(r){return function(e,t,n){return new Promise((function(a,r){return fetch("/api/signup",{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,password:n})}).then(s).then((function(e){return e.json()})).then((function(e){var t=e.token,n=e.user;window.localStorage.setItem("blogChefJWTToken",t),window.localStorage.setItem("blogChefJWTUser",JSON.stringify(n)),a(n)})).catch((function(e){e.json().then((function(e){var t=e.error;return r(t)}))}))}))}(e,t,n).then((function(e){r({type:"SIGNUP_SUCCESS",user:e}),a.push("/")})).catch((function(){return r({type:"SIGNUP_FAILURE"})}))}},h=function(){return function(e){return new Promise((function(e,t){try{window.localStorage.removeItem("blogChefJWTToken"),window.localStorage.removeItem("blogChefJWTUser"),e(!0)}catch(n){t(!1)}})).then((function(){return e({type:"SIGNOUT_SUCCESS"})})).catch((function(){return e({type:"SIGNOUT_FAILURE"})}))}},d=function(){return function(e){return new Promise((function(e,t){try{var n=window.localStorage.getItem("blogChefJWTToken"),a=JSON.parse(window.localStorage.getItem("blogChefJWTUser"));if(n)return fetch("/api/verify",{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:n})}).then(s).then((function(e){return e.json()})).then((function(){return e(a)})).catch((function(){window.localStorage.removeItem("blogChefJWTToken"),window.localStorage.removeItem("blogChefJWTUser"),t("User state could not be initialized")}))}catch(r){e({})}})).then((function(t){return e({type:"INIT_SUCCESS",user:t})})).catch((function(){e({type:"INIT_FAILURE"})}))}},S=function(e){return function(t){return function(e){return fetch("/api/post/".concat(e)).then(s).then((function(e){return e.json()}))}(e).then((function(e){var n=e.post;t({type:"GET_POST_SUCCESS",post:n})})).catch((function(){return t({type:"GET_POST_FAILURE"})}))}},b=function(e,t){return function(n){return function(e){return m().then((function(t){var n=t.token;return fetch("/api/post",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(n)},cache:"no-cache",body:JSON.stringify({post:e})})})).then(s).then((function(e){return e.json()}))}(e).then((function(e){var a=e.post;n({type:"ADD_POST_SUCCESS",post:a}),t.push("/")})).catch((function(){n({type:"ADD_POST_FAILURE"}),n(h())}))}},v=function(e){return function(t){return function(e){return m().then((function(t){var n=t.token;return fetch("/api/post/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(n)},cache:"no-cache"})})).then(s).then((function(e){return e.json()})).then((function(){return E()}))}(e).then((function(e){var n=e.posts;return t({type:"DELETE_POSTS_SUCCESS",posts:n})})).catch((function(){t({type:"DELETE_POST_FAILURE"}),t(h())}))}},O=Object(a.memo)((function(){var e=Object(i.d)((function(e){return e.users}),i.b).user,t=Object(i.c)();return r.a.createElement("div",{className:"account-nav"},e?r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,e.name),r.a.createElement("ul",null,r.a.createElement("li",{onClick:function(){return t(h())}},"Signout"))):r.a.createElement("ul",null,r.a.createElement(l.b,{to:"/signin"},r.a.createElement("li",null,"Signin")),r.a.createElement(l.b,{to:"/signup"},r.a.createElement("li",null,"Signup"))))})),g=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"app-title"},"BlogChef"),r.a.createElement("div",{className:"app-nav"},r.a.createElement("ul",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("li",null,"Home")),r.a.createElement(l.b,{to:"/add"},r.a.createElement("li",null,"New Post")))),r.a.createElement(O,null))},j=n(24),T=n.n(j),C=n(6),I=function(e){var t=e.onConfirm,n=Object(a.useState)(!1),c=Object(C.a)(n,2),o=c[0],u=c[1];return r.a.createElement("div",{className:"delete-post-btn"},o?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"delete-btn-yes",onClick:t},"Yes"),r.a.createElement("button",{className:"delete-btn-no",onClick:function(){return u(!1)}},"No")):r.a.createElement("button",{className:"delete-btn",onClick:function(){return u(!0)}},"Delete?"))};I.defaultProps={onConfirm:function(){}};var y=I,_=Object(a.memo)((function(e){var t=e.post,n=t._id,a=t.title,c=t.user,o=t.content,u=t.createdAt,s=Object(i.d)((function(e){return e.users}),i.b).user,m=Object(i.c)();return r.a.createElement("div",{className:"post"},r.a.createElement(l.b,{to:"/post/".concat(n)},r.a.createElement("h1",null,a)),r.a.createElement("h3",null,"by ",c.name," | ",T()(u).format("ddd, MMM Do YY, h:mm a")),r.a.createElement("p",null,o.substring(0,100),"..."),s&&c._id===s.id?r.a.createElement(y,{onConfirm:function(){return m(v(n))}}):null)})),N=Object(a.memo)((function(e){var t=e.type,n=Object(i.c)(),c=Object(i.d)((function(e){return e.posts}),i.b).posts;return Object(a.useEffect)((function(){!t&&n((function(e){return E().then((function(t){var n=t.posts;e({type:"GET_POSTS_SUCCESS",posts:n})})).catch((function(){return e({type:"GET_POSTS_FAILURE"})}))}))}),[n,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},c&&c.map((function(e){return r.a.createElement(_,{post:e,key:e.id})})),!c||0===c.length&&r.a.createElement("h2",null,"No posts found :(")))})),w=function(e){var t=e.label,n=e.type,a=e.onInput,c=e.value,o=e.hasError;return r.a.createElement("div",{className:o?"input-box hasError":"input-box"},r.a.createElement("span",{className:"label"},t),r.a.createElement("input",{type:n,onChange:a,value:c}))};w.defaultProps={label:"Default",type:"text",hasError:!1};var U=w,P=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),l=Object(C.a)(o,2),s=l[0],m=l[1],E=Object(i.d)((function(e){return e.errors}),i.b).error,f=Object(i.c)(),h=Object(u.g)(),d=Object(u.h)();return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"Signin"),r.a.createElement("div",{className:"signin-form"},r.a.createElement(U,{label:"E-Mail",type:"text",onInput:function(e){return c(e.target.value)},value:n,hasError:E}),r.a.createElement(U,{label:"Password",type:"password",onInput:function(e){return m(e.target.value)},value:s,hasError:E}),r.a.createElement("button",{onClick:function(){n&&s&&(f(p(n,s,h,d)),c(""),m(""))}},"Go!")))},A=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),l=Object(C.a)(o,2),s=l[0],m=l[1],E=Object(a.useState)(""),p=Object(C.a)(E,2),h=p[0],d=p[1],S=Object(a.useState)(""),b=Object(C.a)(S,2),v=b[0],O=b[1],g=Object(i.d)((function(e){return e.errors}),i.b).error,j=Object(i.c)(),T=Object(u.g)();return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",null,"Signup"),r.a.createElement("div",{className:"signup-form"},r.a.createElement(U,{type:"text",label:"Name",onInput:function(e){return c(e.target.value)},value:n,hasError:g}),r.a.createElement(U,{type:"text",label:"E-Mail",onInput:function(e){return m(e.target.value)},value:s,hasError:g}),r.a.createElement(U,{type:"password",label:"Password",onInput:function(e){return d(e.target.value)},value:h,hasError:g}),r.a.createElement(U,{type:"password",label:"Retype Password",onInput:function(e){return O(e.target.value)},value:v,hasError:g}),r.a.createElement("button",{onClick:function(){n&&s&&h&&h===v&&j(f(n,s,h,T))}},"Done!")))},R=function(e){var t=e.label,n=e.onUpdate,a=e.value,c=e.hasError;return r.a.createElement("div",{className:c?"text-box hasError":"text-box"},r.a.createElement("span",{className:"label"},t),r.a.createElement("textarea",{onChange:function(e){return n(e.target.value.replace(/(?:\r)/g,"\n\n"))},value:a}))};R.defaultProps={label:"Text",hasError:!1};var J=R,k=Object(a.memo)((function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),l=Object(C.a)(o,2),s=l[0],m=l[1],E=Object(i.d)((function(e){return e.errors}),i.b).error,p=Object(i.d)((function(e){return e.users}),i.b).user,f=Object(u.g)(),h=Object(i.c)();return r.a.createElement("div",{className:"add-post"},r.a.createElement("h2",null,"New Post"),r.a.createElement("div",{className:"add-post-form"},r.a.createElement(U,{label:"Title",onInput:function(e){return c(e.target.value)},value:n,hasError:E}),r.a.createElement(J,{label:"Type in your thoughts",onUpdate:function(e){return m(e)},value:s,hasError:E}),r.a.createElement("div",{className:"char-count"},s.length," Characters"),r.a.createElement("button",{id:"add-post-btn",onClick:function(){if(n&&0!==s){var e={user:p.id,title:n,content:s,createdAt:new Date};h(b(e,f))}}},"+ Add")))})),G=n(26),L=function(e){var t=e.children,n=Object(G.a)(e,["children"]),a=Object(i.d)((function(e){return e.users}),i.b).user;return r.a.createElement(u.b,Object.assign({},n,{render:function(e){var n=e.location;return a?t:r.a.createElement(u.a,{to:{pathname:"/signin",state:{from:n}}})}}))},D=Object(a.memo)((function(){var e=Object(u.i)().postId,t=Object(i.c)(),n=Object(i.d)((function(e){return e.posts}),i.b).post;return Object(a.useEffect)((function(){t(S(e))}),[t,e]),n.title?r.a.createElement("div",{className:"read-post"},r.a.createElement("h1",null,n.title),r.a.createElement("h3",null,"by ",n.user.name," |"," ",n.createdAt&&T()(n.createdAt).format("dddd, MMMM Do YYYY, h:mm a")),r.a.createElement("p",null,n.content)):null})),F=Object(a.memo)((function(e){var t=e.children,n=Object(G.a)(e,["children"]),a=Object(i.d)((function(e){return e.users}),i.b).user;return r.a.createElement(u.b,Object.assign({},n,{render:function(){return a?r.a.createElement(u.a,{to:{pathname:"/"}}):t}}))})),x=function(){var e=Object(i.c)();return Object(a.useEffect)((function(){e(d())}),[e]),r.a.createElement("div",{className:"app"},r.a.createElement(g,null),r.a.createElement("div",{className:"main"},r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/"},r.a.createElement(N,null)),r.a.createElement(u.b,{type:"id",path:"/post/:postId"},r.a.createElement(D,null)),r.a.createElement(F,{path:"/signin"},r.a.createElement(P,null)),r.a.createElement(F,{path:"/signup"},r.a.createElement(A,null)),r.a.createElement(L,{path:"/add"},r.a.createElement(k,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=n(15),M=n(46),Y=n(56),B=n(10),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{posts:[],post:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POST_SUCCESS":return Object(B.a)(Object(B.a)({},e),{},{post:t.post});case"GET_POSTS_SUCCESS":case"DELETE_POSTS_SUCCESS":return Object(B.a)(Object(B.a)({},e),{},{posts:t.posts,post:{}});case"ADD_POST_SUCCESS":return Object(B.a)(Object(B.a)({},e),{},{posts:t.post.isApproved?[].concat(Object(Y.a)(e.posts),[t.post]):e.posts,post:{}});default:return Object(B.a)({},e)}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNIN_SUCCESS":case"SIGNUP_SUCCESS":case"INIT_SUCCESS":return{user:t.user};case"INIT_FAILURE":case"SIGNUP_FAILURE":case"SIGNOUT_SUCCESS":return{};default:return Object(B.a)({},e)}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{error:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POSTS_FAILURE":case"GET_POST_FAILURE":case"GET_CATEGORIES_FAILURE":case"SIGNIN_FAILURE":case"SIGNUP_FAILURE":case"INIT_FAILURE":case"ADD_POST_FAILURE":case"DELETE_POST_FAILURE":return{error:!0};case"GET_POSTS_SUCCESS":case"GET_CATEGORIES_SUCCESS":case"SIGNIN_SUCCESS":case"INIT_SUCCESS":case"ADD_POST_SUCCESS":case"DELETE_POST_SUCCESS":case"RESET_ERROR":return{error:!1};default:return e}},Z=Object(W.c)({posts:z,users:$,errors:H}),Q=Object(W.d)(Z,Object(W.a)(M.a));n(42),n(41);o.a.render(r.a.createElement(i.a,{store:Q},r.a.createElement(l.a,null,r.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.386b93c3.chunk.js.map