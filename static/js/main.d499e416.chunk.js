(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(8),a=n.n(r),c=(n(15),n(10)),o=n(2),s=n(3),i=n(5),j=n(4),u=n(1),b=n(0),h=function(){return Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Job"}),Object(b.jsx)("th",{children:"Remove"})]})})},l=function(e){var t=e.userInfo.map((function(t,n){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.name}),Object(b.jsx)("td",{children:t.job}),Object(b.jsx)("td",{children:Object(b.jsx)("button",{onClick:function(){e.removeUserInfo(n)},children:"DELETE"})})]},n)}));return Object(b.jsx)("tbody",{children:t})},f=function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.userInfo,n=e.removeUserInfo;return Object(b.jsxs)("table",{children:[Object(b.jsx)(h,{}),Object(b.jsx)(l,{userInfo:t,removeUserInfo:n})]})}}]),n}(u.Component),d=n(6),O=n(9),m=function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).initState={name:"",job:""},e.state=Object(O.a)({},e.initState),e.handleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(d.a)({},r,a))},e.submitForm=function(){e.props.addUserInfo(e.state),e.setState(e.initState)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.job;return Object(b.jsxs)("form",{action:"#",children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name"}),Object(b.jsx)("input",{type:"text",name:"name",id:"name",value:t,onChange:this.handleChange}),Object(b.jsx)("label",{htmlFor:"job",children:"job"}),Object(b.jsx)("input",{type:"text",name:"job",id:"job",value:n,onChange:this.handleChange}),Object(b.jsx)("input",{type:"button",value:"Submit",onClick:this.submitForm})]})}}]),n}(u.Component),v=function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={userInfo:[{name:"Charlie",job:"Janitor"},{name:"Mac",job:"Bouncer"},{name:"Dee",job:"Aspring actress"},{name:"Dennis",job:"Bartender"}]},e.removeUserInfo=function(t){var n=e.state.userInfo;e.setState({userInfo:n.filter((function(e,n){return t!==n}))})},e.addUserInfo=function(t){e.setState({userInfo:[].concat(Object(c.a)(e.state.userInfo),[t])})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.userInfo;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(f,{userInfo:e,removeUserInfo:this.removeUserInfo}),Object(b.jsx)(m,{addUserInfo:this.addUserInfo})]})}}]),n}(u.Component);a.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d499e416.chunk.js.map