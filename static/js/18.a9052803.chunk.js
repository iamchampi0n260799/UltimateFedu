(this.webpackJsonplearnreactthehardway=this.webpackJsonplearnreactthehardway||[]).push([[18],{282:function(e,a,t){},335:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u}));var n=t(1),c=t(71),o=t(0),r=t.n(o),l=t(114),m=(t(282),t(61)),i=t.n(m);function u(e){var a=Object(o.useState)([]),t=Object(c.a)(a,2),m=t[0],u=t[1],s=Object(o.useState)([]),h=Object(c.a)(s,2),d=h[0],p=h[1],g=Object(o.useState)({})||"Cao Chi Hieu",f=Object(c.a)(g,2),E=f[0],b=f[1],v=Object(o.useState)({})||"L\u1eadp tr\xecnh Backend",N=Object(c.a)(v,2),T=N[0],y=N[1],H=Object(l.a)(),K=H.register,O=H.handleSubmit,S=H.errors;H.getValues;return Object(o.useEffect)((function(){Promise.all([i()("https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01"),i()("https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc")]).then((function(e){var a=e[0].data.filter((function(e){return"GV"===e.maLoaiNguoiDung}));p(a),u(e[1].data)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("section",{className:"signup"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"signup-content"},r.a.createElement("div",{className:"signup-form"},r.a.createElement("h1",null,"Th\xeam kh\xf3a h\u1ecdc"),r.a.createElement("form",{action:"",onSubmit:O((function(e){var a=Object(n.a)(Object(n.a)({},e),{},{maNhom:"GP01",luotXem:3151,danhgia:0,taiKhoanNguoiTao:E,maDanhMucKhoaHoc:T});console.log(a);var t="";localStorage.getItem("user")&&(t=JSON.parse(localStorage.getItem("user")).accessToken);i()({url:"http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc",method:"POST",data:a,headers:{"Access-Control-Allow-Origin":"http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS",Authorization:"Bearer ".concat(t)}}).then((function(e){console.log("Success"),console.log(e.data)})).catch((function(e){console.log(e)}))}))},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"maKhoaHoc"}),r.a.createElement("input",{ref:K({required:" Required"}),type:"text",name:"maKhoaHoc",id:"maKhoaHoc",placeholder:"M\xe3 kh\xf3a h\u1ecdc"}),S.maKhoaHoc&&r.a.createElement("span",{className:"text-danger"},S.maKhoaHoc.message)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"tenKhoaHoc"}),r.a.createElement("input",{ref:K({required:" Required"}),type:"text",name:"tenKhoaHoc",id:"tenKhoaHoc",placeholder:"T\xean kh\xf3a h\u1ecdc"}),S.tenKhoaHoc&&r.a.createElement("span",{className:"text-danger"},S.tenKhoaHoc.message)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"moTa"}),r.a.createElement("input",{ref:K({required:" Required"}),type:"text",name:"moTa",id:"",placeholder:"M\xf4 t\u1ea3"}),S.moTa&&r.a.createElement("span",{className:"text-danger"},S.moTa.message)),r.a.createElement("div",{className:"mb-4"},r.a.createElement("label",{htmlFor:"hinhAnh"}),r.a.createElement("div",null,r.a.createElement("input",{ref:K({required:" Required"}),name:"hinhAnh",type:"file",onChange:function(){var e=document.querySelector("img"),a=document.querySelector("input[type=file]").files[0],t=new FileReader;t.onloadend=function(){e.src=t.result},a?t.readAsDataURL(a):e.src=""}}),r.a.createElement("br",null),r.a.createElement("img",{src:"",width:"100%",height:"100%",alt:"Image preview..."}))),r.a.createElement("p",null,"M\xe3 danh m\u1ee5c kh\xf3a h\u1ecdc"),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{onChange:function(e){y(e.target.value)},name:"maDanhMucKhoaHoc",className:"p-3 select-option"},function(){if(m)return m.map((function(e,a){return r.a.createElement("option",{value:e.tenDanhMuc,name:e.tenDanhMuc,key:a},e.tenDanhMuc)}))}())),r.a.createElement("p",null,"T\xe0i kho\u1ea3n ng\u01b0\u1eddi t\u1ea1o"),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{onChange:function(e){b(e.target.value)},name:"taiKhoanNguoiTao",id:"",className:"p-3 select-option"},function(){if(m)return d.map((function(e,a){return r.a.createElement("option",{value:e.hoTen,name:e.hoTen,key:a},e.hoTen)}))}())),r.a.createElement("button",{className:"btn btn-primary"},"Th\xeam")))))))}}}]);
//# sourceMappingURL=18.a9052803.chunk.js.map