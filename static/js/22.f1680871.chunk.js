(this.webpackJsonplearnreactthehardway=this.webpackJsonplearnreactthehardway||[]).push([[22],{260:function(e,a,t){},349:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(0),s=t.n(r),l=t(114),c=(t(260),t(16)),i=t(61),m=t.n(i),o=function(){return{type:c.b}},u=function(e){return{type:c.c,payload:e}},p=function(e){return{type:c.a,payload:e}},d=t(26),g=t(27);a.default=Object(d.b)((function(e){return{loading:e.signupReducer.loading,data:e.signupReducer.data,error:e.signupReducer.error}}),(function(e){return{Signup:function(a,t){e(function(e,a){return function(t){t(o()),m()({url:"https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",method:"POST",data:e}).then((function(e){t(u(e.data)),a.push("/signin")})).catch((function(e){switch(e.response.status){case 500:case 401:console.log(e.response.data),alert(e.response.status+": "+e.response.data)}t(p(e))}))}}(a,t))}}}))((function(e){var a=Object(l.a)(),t=a.register,r=a.handleSubmit,c=a.errors;return s.a.createElement("section",{className:"signup"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"signup-content"},s.a.createElement("div",{className:"signup-form"},s.a.createElement("h1",null,"Sign up"),s.a.createElement("form",{action:"",onSubmit:r((function(a){var t=Object(n.a)(Object(n.a)({},a),{},{maLoaiNguoiDung:"HV",maNhom:"GP01"});console.log(t),e.Signup(t,e.history)}))},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"hoTen"},s.a.createElement("i",{className:"fa fa-user"})),s.a.createElement("input",{ref:t({required:" Required"}),type:"text",name:"hoTen",id:"",placeholder:"H\u1ecd t\xean"}),c.hoTen&&s.a.createElement("span",{className:"text-danger"},c.hoTen.message)),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"email"},s.a.createElement("i",{className:"fa fa-envelope"})),s.a.createElement("input",{ref:t({required:" Required"}),type:"email",name:"email",id:"",placeholder:"Email"}),c.email&&s.a.createElement("span",{className:"text-danger"},c.email.message)),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"taiKhoan"},s.a.createElement("i",{className:"fa fa-asterisk"})),s.a.createElement("input",{type:"text",name:"taiKhoan",id:"",placeholder:"T\xe0i kho\u1ea3n",ref:t({required:" Required"})}),c.taiKhoan&&s.a.createElement("span",{className:"text-danger"},c.taiKhoan.message)),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"matKhau"},s.a.createElement("i",{className:"fa fa-key"})),s.a.createElement("input",{type:"password",name:"matKhau",id:"",placeholder:"M\u1eadt kh\u1ea9u",ref:t({required:" Required"})}),c.matKhau&&s.a.createElement("span",{className:"text-danger"},c.matKhau.message)),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"soDT"},s.a.createElement("i",{className:"fa fa-key"})),s.a.createElement("input",{type:"number",name:"soDT",id:"",placeholder:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",ref:t({required:" Required"})}),c.soDT&&s.a.createElement("span",{className:"text-danger"},c.soDT.message)),s.a.createElement("div",{className:"form-group"},s.a.createElement("span",null,"B\u1ea1n \u0111\xe3 c\xf3 t\xe0i kho\u1ea3n ? ",s.a.createElement(g.b,{to:"/signin"},"\u0110\u0103ng nh\u1eadp"))),s.a.createElement("button",{className:"btn btn-primary"},"\u0110\u0103ng k\xfd"))),s.a.createElement("div",{className:"signup-image"},s.a.createElement("img",{style:{width:"100%",height:"100%"},src:"/images/signup-image.jpg",alt:""})))))}))}}]);
//# sourceMappingURL=22.f1680871.chunk.js.map