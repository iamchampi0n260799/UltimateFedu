(this.webpackJsonplearnreactthehardway=this.webpackJsonplearnreactthehardway||[]).push([[16],{343:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(56),r=a(57),l=a(59),c=a(58),o=a(0),s=a.n(o),i=a(3),u=a(61),m=a.n(u),f=(a(66),a(27)),p=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleClickToPush=function(e){r.props.history.push("/categories/".concat(e))},r.renderCategoies=function(){return r.state.categories.map((function(e,t){return s.a.createElement(f.b,{style:{cursor:"pointer"},key:t,onClick:function(){r.handleClickToPush(e.maDanhMuc)},className:"dropdown-item",to:"/courses/".concat(e.maDanhMuc)},e.tenDanhMuc)}))},r.shortUserName=function(e){for(var t=e.split(" "),a="",n=0;n<=t.length-1;n++)a+=t[n].charAt(0).toUpperCase();return a},r.state={categories:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;m.a.get("https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc").then((function(t){e.setState({categories:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("user"));return console.log(e),s.a.createElement("header",{className:"header__home"},s.a.createElement("nav",{className:"navbar navbar-expand-lg  header__content"},s.a.createElement("div",{className:"col-sm-6"},s.a.createElement("div",{className:"header__left"},s.a.createElement(f.b,{className:"navbar-brand",to:"/"},s.a.createElement("img",{src:"/images/logo.png",className:"img-fluid",alt:"ELearning Cybersoft"})),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})))),s.a.createElement("div",{className:"col-sm-6"},s.a.createElement("div",{className:"header__right"},s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},s.a.createElement("ul",{className:"navbar-nav ml-auto"},s.a.createElement("li",{className:"nav-item active"},s.a.createElement(f.b,{className:"nav-link",to:"/"},"TRANG CH\u1ee6")),s.a.createElement("li",{className:"nav-item dropdown"},s.a.createElement(f.b,{className:"nav-link",to:"/course"},"C\xc1C KH\xd3A H\u1eccC"),s.a.createElement("div",{className:"dropdown-menu"})),s.a.createElement("li",{className:"nav-item"},s.a.createElement(f.b,{className:"nav-link",to:"#"},"S\u1ef0 KI\u1ec6N")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(f.b,{className:"nav-link",to:"#"},"BLOG")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(f.b,{className:"nav-link",to:"#"},"LI\xcaN H\u1ec6")),s.a.createElement("li",{className:"nav-item"},e?s.a.createElement(f.b,{className:"nav-link logoUser",to:"/user"},this.shortUserName(e.hoTen)):s.a.createElement(f.b,{className:"nav-link",to:"/signin"},"\u0110\u0102NG NH\u1eacP"))))))))}}]),a}(o.Component),h=Object(i.i)(p);function E(){return s.a.createElement("footer",null,s.a.createElement("div",{className:"row first-footer"},s.a.createElement("div",{className:"footer-links col-9"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("a",{href:"#",className:"bold"},"Cybersoft for Business")),s.a.createElement("li",null,s.a.createElement("a",{href:"#",className:"bold"},"Teach on Cybersoft")),s.a.createElement("li",null,s.a.createElement("a",{href:"#"},"Cybersoft app")),s.a.createElement("li",null,s.a.createElement("a",{href:"#"},"About us")),s.a.createElement("li",null,s.a.createElement("a",{href:"#"},"Contact us")),s.a.createElement("li",null,s.a.createElement("a",{href:"#"},"Career")),s.a.createElement("li",null,s.a.createElement("a",{href:"#"},"Blog")),s.a.createElement("li",null,s.a.createElement("a",{href:"#"},"Help and Support")),s.a.createElement("li",null,s.a.createElement("a",{href:"#"},"Affiliate")),s.a.createElement("li",null,s.a.createElement("a",{href:"#"},"Site map")),s.a.createElement("li",null,s.a.createElement("a",{href:"#"},"Featured courses")))),s.a.createElement("div",{className:"language col-3"},s.a.createElement("button",{type:"button",className:"language-btn"},s.a.createElement("i",{className:"fa fa-globe"})," Select language ",s.a.createElement("i",{className:"fa fa-arrow-up"})))),s.a.createElement("div",{className:"row second-footer"},s.a.createElement("div",{className:"col-6 second-footer-left"},s.a.createElement("span",null,"Copyright \xa9 2020 Cybersoft, Inc.")),s.a.createElement("div",{className:"col-6 second-footer-right"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("a",{href:"#"},"Terms")),s.a.createElement("li",null,s.a.createElement("a",{href:"#"},"Privacy Policy and Cookie Policy"))))),s.a.createElement("div",{className:"headerBorderTop"}))}var b=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(h,null),this.props.children,s.a.createElement(E,null))}}]),a}(o.Component),d=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement(b,null,s.a.createElement(i.b,{path:this.props.path,component:this.props.component,exact:this.props.exact}))}}]),a}(o.Component)},56:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return n}))},57:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,"a",(function(){return r}))},58:function(e,t,a){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e){return function(){var t,a=n(e);if(r()){var l=n(this).constructor;t=Reflect.construct(a,arguments,l)}else t=a.apply(this,arguments);return c(this,t)}}a.d(t,"a",(function(){return o}))},59:function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}a.d(t,"a",(function(){return r}))},66:function(e,t,a){}}]);
//# sourceMappingURL=16.bd9222dd.chunk.js.map