(this.webpackJsonplearnreactthehardway=this.webpackJsonplearnreactthehardway||[]).push([[15],{125:function(e,a,t){"use strict";t.d(a,"b",(function(){return c})),t.d(a,"c",(function(){return m})),t.d(a,"a",(function(){return h}));var n=t(7),r=t(61),l=t.n(r),c=function(e){return function(a){a(s());var t="https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=".concat(e);l.a.get(t).then((function(e){a(i(e.data))})).catch((function(e){a(o(e))}))}},s=function(){return{type:n.h}},i=function(e){return{type:n.i,payload:e}},o=function(e){return{type:n.g,payload:e}},m=function(e,a){return function(t){var n="";localStorage.getItem("user")&&(n=JSON.parse(localStorage.getItem("user")).accessToken,t(u()),l()({url:"https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc",method:"POST",headers:{Authorization:"Bearer ".concat(n)},data:e}).then((function(e){t(d(e.data)),alert("\u0110\u0103ng k\xfd th\xe0nh c\xf4ng"),a.push("/user")})).catch((function(e){t(f(e))})))}},u=function(){return{type:n.e}},d=function(e){return{type:n.f,payload:e}},f=function(e){return{type:n.d,payload:e}},h=function(e){return function(a){var t="";localStorage.getItem("user")&&(t=JSON.parse(localStorage.getItem("user")).accessToken);a(p()),l()({url:"https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh",method:"POST",headers:{Authorization:"Bearer ".concat(t)},data:e}).then((function(e){a(E(e.data)),alert("H\u1ee7y \u0111\u0103ng k\xfd th\xe0nh c\xf4ng"),window.location.href=window.location.pathname+window.location.search+window.location.hash})).catch((function(e){a(g(e))}))}},p=function(){return{type:n.b}},E=function(e){return{type:n.c,payload:e}},g=function(e){return{type:n.a,payload:e}}},258:function(e,a,t){},334:function(e,a,t){"use strict";t.r(a);var n=t(56),r=t(57),l=t(59),c=t(58),s=t(0),i=t.n(s),o=t(125),m=t(26),u=t(28),d=(t(258),function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).dangKyKhoaHoc=function(){var a=e.props.data;if(localStorage.getItem("user")){var t=JSON.parse(localStorage.getItem("user")),n={maKhoaHoc:a.maKhoaHoc,taiKhoan:t.taiKhoan};e.props.fetchCourseResign(n,e.props.history)}else alert("Please login before register"),e.props.history.push("/signin")},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.fetchCourseDetail(e)}},{key:"render",value:function(){var e=this.props,a=e.data,t=e.loading;e.error;return t?i.a.createElement(u.a,null):i.a.createElement("div",{className:"detail"},i.a.createElement("section",{className:"introduction"},i.a.createElement("div",{className:"introduction-content"},i.a.createElement("div",{className:"topic mb-3"},i.a.createElement("h6",null,"Business > Strategy > Digital Marketing")),i.a.createElement("div",{className:"header mb-3"},a&&i.a.createElement("h1",null,a.tenKhoaHoc||"No name")),i.a.createElement("div",{className:"lead-header mb-3"},a&&a.moTa),i.a.createElement("div",{className:"rating mb-3"},i.a.createElement("span",{className:"bestseller mr-2"},"Bestseller"),i.a.createElement("span",{className:"mr-2"},"4.5"),i.a.createElement("i",{className:"fa fa-star"}),i.a.createElement("i",{className:"fa fa-star"}),i.a.createElement("i",{className:"fa fa-star"}),i.a.createElement("i",{className:"fa fa-star"}),i.a.createElement("i",{className:"fa fa-star"}),a&&i.a.createElement("span",null,"(",a.luotXem," ratings) ",a.soLuongHocVien," students")),i.a.createElement("div",{className:"intructor mb-3"},i.a.createElement("span",null,"Created by"),i.a.createElement("a",null,"Robin Jesper")),i.a.createElement("div",{className:"last-update mb-3"},i.a.createElement("i",{className:"fa fa-cog "}),a&&i.a.createElement("span",null,"Last updated ",a.ngayTao),i.a.createElement("i",{className:"fa fa-globe "}),i.a.createElement("span",null,"English")),i.a.createElement("div",{className:"share-and-gift mb-3"},i.a.createElement("button",{className:"btn btn-success mr-3"},"Wishlist"),i.a.createElement("button",{className:"btn btn-success mr-3"},"Share"),i.a.createElement("button",{className:"btn btn-success mr-3"},"Gift this course")))),i.a.createElement("section",{className:"sidebar"},i.a.createElement("div",{className:"sidebar-content"},i.a.createElement("div",{className:"preview mb-3"},a&&i.a.createElement("img",{src:a.hinhAnh}))),i.a.createElement("div",{className:"price mb-3 pl-3"},i.a.createElement("span",null,"$18.99"),i.a.createElement("span",null,"$129.99"),i.a.createElement("p",null,i.a.createElement("i",{className:"fa fa-adjust"}),"1 day left at this price")),i.a.createElement("div",{className:"button-action mb-3 pl-3"},i.a.createElement("button",{className:"btn btn-danger mb-3",onClick:this.dangKyKhoaHoc},"\u0110\u0103ng k\xfd"),i.a.createElement("p",{className:"text-center"},"30-Day Money-Back Guarantee")),i.a.createElement("div",{className:"course-includes mb-3 pl-3"},i.a.createElement("h5",null,"This courses includes:"),i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-asterisk mr-2"}),"84 hours on-demand video"),i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-file mr-2"}),"46 articles"),i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-download mr-2"}),"83 downloadable resources"),i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-audio-description mr-2"}),"Full lifetime access"),i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-american-sign-language-interpreting mr-2"}),"Access on mobile and TV"),i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-address-book mr-2"}),"Certificate of completion")),i.a.createElement("h6",{className:"text-center text-primary"},"Appy Coupon"),i.a.createElement("hr",null),i.a.createElement("div",{className:"training pl-3"},i.a.createElement("h4",null,"Training 5 or more people"),i.a.createElement("p",null,"Get your team access to 5,000+ top Udemy courses anytime, anywhere."),i.a.createElement("button",{className:"btn btn-success"},"Try Udemy"))),i.a.createElement("section",{className:"learn"},i.a.createElement("h5",null,"What you'll learn"),i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-check mr-2"}),i.a.createElement("span",{className:!0},"Set up Your Website, Design It & Post Content on Your Blog."))),i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-check mr-2"}),i.a.createElement("span",null,"Create Converting Facebook Ads."))),i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-check mr-2"}),i.a.createElement("span",null,"Optimize Your Website & YouTube Videos with SEO (Search Engine Optimization)."))),i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-check mr-2"}),i.a.createElement("span",null,"Create Facebook Messenger Chatbots."))),i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-check mr-2"}),i.a.createElement("span",null,"Do Market Research to See What Markets are Most Profitable.")))),i.a.createElement("section",{className:"require-and-description"},i.a.createElement("div",{className:"require"},i.a.createElement("h3",null,"Requirements"),i.a.createElement("ul",null,i.a.createElement("li",null,"Basic Stock Market or Trading Knowledge"),i.a.createElement("li",null,'This is a follow up course to the course "Foundation Stock Trading Course"'))),i.a.createElement("div",{className:"description"},i.a.createElement("h3",null,"Description"),i.a.createElement("p",null,"This course includes comprehensive advanced material that is required to start trading confidently and effectively. You learn the complete theory behind trading and even better, how to put theory into action. I will teach you how our full time traders are making independent market decisions to produce profitable consistent results. You will get an"," ",i.a.createElement("span",{style:{fontWeight:600}},"excellent understanding of the Tools and Techniques used by Professional Traders.")," "),i.a.createElement("p",null,"You will be learning from Mohsen Hassan, who is the Founder of Bloom Trading"),i.a.createElement("p",null,"This course covers Intermediary and advanced level information to breakthrough your path to becoming a profitable trader in your own trading abilities.",i.a.createElement("span",{style:{fontWeight:600}},"You're going to take away a different approach at analyzing the data, an approach that isn\u2019t just based on theory."," ")," ","We will also cover in depth 2 Strategies from the ground up that we currently run at our office. On top of all the material thought, I will be giving you our personal tricks, techniques and views on the stock market that have tremendously fast-tracked our success."),i.a.createElement("p",null,i.a.createElement("span",{style:{fontWeight:600}},"Trading can be a very rewarding career if done correctly.")," ","So whether you want to generate some side income by trading stocks or if you want to make trading your only source of income (like our Traders), then this course is for you."),i.a.createElement("p",null,"This is a full course separated in 2 parts, this is the 2nd part of the series.")),i.a.createElement("div",{className:"target"},i.a.createElement("h3",null,"Who this course is for"),i.a.createElement("ul",null,i.a.createElement("li",{className:"mb-2"},"Intermediate Investors who want to improve their performance & build a strong knowledge on how to plan their trades and execute them."),i.a.createElement("li",{className:"mb-2"},"Individuals who want to learn advanced concepts to gain full comprehensive knowledge of financial markets."),i.a.createElement("li",{className:"mb-2"},"Suited for traders having trouble applying a profitable trading strategy to earn consistent profits through stock trading."),i.a.createElement("li",{className:"mb-2"},"Beginner/Intermediary level traders looking for tools and techniques used by professional traders."),i.a.createElement("li",{className:"mb-2"},"People who want to generate income through the stock market by Day Trading or Swing Trading.")))),i.a.createElement("section",{className:"review"},i.a.createElement("div",{className:"review-items "},i.a.createElement("h3",null,"Featured review"),i.a.createElement("div",{className:"review-image mb-3"},i.a.createElement("img",{src:"https://img-a.udemycdn.com/user/75x75/33215668_7035.jpg?ZrL2SfxE03pMshFHt_ENEdwFDJKBMHbaFrOT9mIZ3ms8bD5qT7_pGv0FwiGTVATORAewN2lTIqjfMhUb5ja560qbSanOm3bPfxCLsPcVZHkaqH54_E-1YrH2oQ",alt:!0})),i.a.createElement("div",{className:"review-information mb-3"},i.a.createElement("h6",null,"Dharmendra Mani"),i.a.createElement("span",null,"43 courses"),i.a.createElement("span",null," 6 reviews")),i.a.createElement("div",{className:"review-rating mb-3"},i.a.createElement("span",null,i.a.createElement("i",{className:"fa fa-star"}),i.a.createElement("i",{className:"fa fa-star"}),i.a.createElement("i",{className:"fa fa-star"}),i.a.createElement("i",{className:"fa fa-star"}),i.a.createElement("i",{className:"fa fa-star"}),i.a.createElement("span",null,"5 months ago"))),i.a.createElement("div",{className:"review-content mb-3"},i.a.createElement("p",null,"This Advance course is great and it covers the techniques, approach , strategy, indicators and what not. The best part is the way it is been taught and most of the questions about the lecture are replied by the tutor. Now i am on to part 3 of the course (Day and Swing Trading). Happy Learning!")),i.a.createElement("div",{className:"review-button mb-3"},i.a.createElement("button",{className:"btn btn-success mr-2"},"Like"),i.a.createElement("button",{className:"btn btn-danger mr-2"},"Dislike"),i.a.createElement("a",null,"Report"))),i.a.createElement("div",{className:"review-items"},i.a.createElement("h3",null,"Featured review"),i.a.createElement("div",{className:"review-image mb-3"},i.a.createElement("img",{src:"https://img-a.udemycdn.com/user/75x75/2602294_150c.jpg?S01oGkIA-vzPQj5ZhFGBn56U83cNEcCnQ4zczrgXDFpPASY7Kzw3errh7LSON9M8tsEzmro5-nSoWIddMLFRv1EocDu0TJGzvNJIvKUGYR8Sn2GoWig1kxVQ",alt:!0})),i.a.createElement("div",{className:"review-information mb-3"},i.a.createElement("h6",null,"Harish Sharma"),i.a.createElement("span",null,"43 courses"),i.a.createElement("span",null," 6 reviews")),i.a.createElement("div",{className:"review-rating mb-3"},i.a.createElement("span",null,i.a.createElement("i",{className:"fa fa-star"}),i.a.createElement("i",{className:"fa fa-star"}),i.a.createElement("i",{className:"fa fa-star"}),i.a.createElement("i",{className:"fa fa-star"}),i.a.createElement("i",{className:"fa fa-star"}),i.a.createElement("span",null,"5 months ago"))),i.a.createElement("div",{className:"review-content mb-3"},i.a.createElement("p",null,"This Advance course is great and it covers the techniques, approach , strategy, indicators and what not. The best part is the way it is been taught and most of the questions about the lecture are replied by the tutor. Now i am on to part 3 of the course (Day and Swing Trading). Happy Learning!")),i.a.createElement("div",{className:"review-button mb-3"},i.a.createElement("button",{className:"btn btn-success mr-2"},"Like"),i.a.createElement("button",{className:"btn btn-danger mr-2"},"Dislike"),i.a.createElement("a",null,"Report")))),i.a.createElement("section",{className:"instructor"},i.a.createElement("h3",null,"Instructor"),i.a.createElement("h3",{style:{color:"aqua"}},"Robin & Jesper"),i.a.createElement("span",null,"Best-Selling Instructors in Digital Marketing & Business"),i.a.createElement("div",{className:"instructor-image mb-3"},i.a.createElement("img",{src:"https://img-a.udemycdn.com/user/75x75/36921905_7a32_6.jpg?8rbOpu_ll6NDkvKcnmscCrs60XudmeWLLkCClAxNUwAXHBbiWMcQA014wLAQxXKT9J888Hv2t18x2JzMMPwfhLuQUCX0EOnPDwOJDDujyllsslg73Kq0TfYHuFpt",alt:!0})),i.a.createElement("div",{className:"instructor-information mb-3"},i.a.createElement("p",null,i.a.createElement("i",{className:"fa fa-star",style:{color:"orange"}}),"4.5 Instructor Rating"),i.a.createElement("p",null,i.a.createElement("i",{className:"fa fa-adjust"}),"18,434 Reviews"),i.a.createElement("p",null,i.a.createElement("i",{className:"fa fa-users"}),"98,953 Students"),i.a.createElement("p",null,i.a.createElement("i",{className:"fa fa-play-circle"}),"41 Courses")),i.a.createElement("div",{className:"instructor-content mb-3"},i.a.createElement("p",null,"We're passionate about teaching.",i.a.createElement("span",{style:{fontWeight:600}},"There's no greater joy than watching beautiful testimonials of people achieving their goals and dreams"),". That's why we STRONGLY believe in full and constant support. With ALL of our courses you can expect:"),i.a.createElement("p",null,"\u2713 ",i.a.createElement("span",{style:{fontWeight:600}},"Practical Courses")," - Hands-on Teaching for Real World Results."),i.a.createElement("p",null,"\u2713"," ",i.a.createElement("span",{style:{fontWeight:600}},"Unlimited Premium Support Within 24 Hours")," ","- Guaranteed Learning."),i.a.createElement("p",null,"If you're interested in learning"," ",i.a.createElement("span",{style:{fontWeight:600}},"Digital Marketing or Business Startup...")),i.a.createElement("i",null,"We're at your service."),i.a.createElement("h6",null,"Love"),i.a.createElement("h6",null,"Robin & Jesper"))),i.a.createElement("div",{className:"average-user-rating row"},i.a.createElement("div",{className:"col-sm-3"},i.a.createElement("div",{className:"rating-block"},i.a.createElement("h4",null,"Average user rating"),i.a.createElement("h2",{className:"bold padding-bottom-7"},"4.3 ",i.a.createElement("small",null,"/ 5")),i.a.createElement("button",{type:"button",className:"btn btn-warning btn-sm","aria-label":"Left Align"},i.a.createElement("span",{className:"glyphicon glyphicon-star","aria-hidden":"true"},i.a.createElement("i",{style:{color:"white"},className:"fa fa-star"}))),i.a.createElement("button",{type:"button",className:"btn btn-warning btn-sm","aria-label":"Left Align"},i.a.createElement("span",{className:"glyphicon glyphicon-star","aria-hidden":"true"},i.a.createElement("i",{style:{color:"white"},className:"fa fa-star"}))),i.a.createElement("button",{type:"button",className:"btn btn-warning btn-sm","aria-label":"Left Align"},i.a.createElement("span",{className:"glyphicon glyphicon-star","aria-hidden":"true"},i.a.createElement("i",{style:{color:"white"},className:"fa fa-star"}))),i.a.createElement("button",{type:"button",className:"btn btn-light btn-grey btn-sm","aria-label":"Left Align"},i.a.createElement("span",{className:"glyphicon glyphicon-star","aria-hidden":"true"},i.a.createElement("i",{style:{color:"black"},className:"fa fa-star"}))),i.a.createElement("button",{type:"button",className:"btn btn-light btn-grey btn-sm","aria-label":"Left Align"},i.a.createElement("span",{className:"glyphicon glyphicon-star","aria-hidden":"true"},i.a.createElement("i",{style:{color:"black"},className:"fa fa-star"})))))))}}]),t}(s.Component));a.default=Object(m.b)((function(e){return{loading:e.courseDetailReducer.loading,data:e.courseDetailReducer.data,error:e.courseDetailReducer.error}}),(function(e){return{fetchCourseDetail:function(a){e(Object(o.b)(a))},fetchCourseResign:function(a,t){e(Object(o.c)(a,t))}}}))(d)},56:function(e,a,t){"use strict";function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}t.d(a,"a",(function(){return n}))},57:function(e,a,t){"use strict";function n(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,a,t){return a&&n(e.prototype,a),t&&n(e,t),e}t.d(a,"a",(function(){return r}))},58:function(e,a,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,a){return!a||"object"!==l(a)&&"function"!==typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function s(e){return function(){var a,t=n(e);if(r()){var l=n(this).constructor;a=Reflect.construct(t,arguments,l)}else a=t.apply(this,arguments);return c(this,a)}}t.d(a,"a",(function(){return s}))},59:function(e,a,t){"use strict";function n(e,a){return(n=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function r(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&n(e,a)}t.d(a,"a",(function(){return r}))}}]);
//# sourceMappingURL=15.79895565.chunk.js.map