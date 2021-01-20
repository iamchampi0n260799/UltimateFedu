(this.webpackJsonplearnreactthehardway=this.webpackJsonplearnreactthehardway||[]).push([[19],{105:function(e,t,n){"use strict";var a=n(51),i=n(2),r=n(0),o=(n(10),n(52)),c=n(53),s=r.forwardRef((function(e,t){var n=e.classes,c=e.className,s=e.component,l=void 0===s?"div":s,d=e.square,x=void 0!==d&&d,u=e.elevation,f=void 0===u?1:u,g=e.variant,p=void 0===g?"elevation":g,m=Object(a.a)(e,["classes","className","component","square","elevation","variant"]);return r.createElement(l,Object(i.a)({className:Object(o.a)(n.root,c,"outlined"===p?n.outlined:n["elevation".concat(f)],!x&&n.rounded),ref:t},m))}));t.a=Object(c.a)((function(e){var t={};return e.shadows.forEach((function(e,n){t["elevation".concat(n)]={boxShadow:e}})),Object(i.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(s)},283:function(e,t,n){"use strict";var a=n(51),i=n(2),r=n(0),o=(n(10),n(52)),c=n(53),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var x=r.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,x=e.className,u=e.component,f=void 0===u?"div":u,g=e.container,p=void 0!==g&&g,m=e.direction,v=void 0===m?"row":m,b=e.item,h=void 0!==b&&b,w=e.justify,j=void 0===w?"flex-start":w,y=e.lg,S=void 0!==y&&y,C=e.md,O=void 0!==C&&C,E=e.sm,W=void 0!==E&&E,N=e.spacing,k=void 0===N?0:N,M=e.wrap,z=void 0===M?"wrap":M,I=e.xl,D=void 0!==I&&I,G=e.xs,R=void 0!==G&&G,B=e.zeroMinWidth,q=void 0!==B&&B,H=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),J=Object(o.a)(d.root,x,p&&[d.container,0!==k&&d["spacing-xs-".concat(String(k))]],h&&d.item,q&&d.zeroMinWidth,"row"!==v&&d["direction-xs-".concat(String(v))],"wrap"!==z&&d["wrap-xs-".concat(String(z))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==j&&d["justify-xs-".concat(String(j))],!1!==R&&d["grid-xs-".concat(String(R))],!1!==W&&d["grid-sm-".concat(String(W))],!1!==O&&d["grid-md-".concat(String(O))],!1!==S&&d["grid-lg-".concat(String(S))],!1!==D&&d["grid-xl-".concat(String(D))]);return r.createElement(f,Object(i.a)({className:J,ref:t},H))})),u=Object(c.a)((function(e){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(a){var i=e.spacing(a);0!==i&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(i,2)),width:"calc(100% + ".concat(d(i),")"),"& > $item":{padding:d(i,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(i.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(x);t.a=u},336:function(e,t,n){"use strict";n.r(t);var a=n(326),i=n(283),r=n(105),o=n(0),c=n.n(o),s=n(52),l=Object(a.a)((function(e){return{paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));t.default=function(){var e=l(),t=Object(s.a)(e.paper,e.fixedHeight);return c.a.createElement(i.a,{container:!0,spacing:3},c.a.createElement(i.a,{item:!0,xs:12,md:8,lg:9},c.a.createElement(r.a,{className:t},"chart")),c.a.createElement(i.a,{item:!0,xs:12,md:4,lg:3},c.a.createElement(r.a,{className:t},"deposit")),c.a.createElement(i.a,{item:!0,xs:12},c.a.createElement(r.a,{className:e.paper},"orders")))}}}]);
//# sourceMappingURL=19.41bd5174.chunk.js.map