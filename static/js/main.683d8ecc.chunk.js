(this["webpackJsonpcustomer-list"]=this["webpackJsonpcustomer-list"]||[]).push([[0],{103:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(8),i=a.n(s),r=(a(75),a(76),a(45)),l=a.n(r),o=a(23),d=a(48),j=a(58),u=a(21),m=a(137),b=a(140),h=a(142),x=a(143),O=a(144),v=a(145),p=a(146),f=a(151),g=a(147),N=a(148),M=(a(78),a(59)),_=a.n(M),P=a(11),y=a(150),S=a(4),w=Object(m.a)({table:{minWidth:650}});var C=function(){var e=w(),t=Object(n.useState)([]),a=Object(u.a)(t,2),s=a[0],i=a[1],r=Object(n.useState)([]),m=Object(u.a)(r,2),M=m[0],C=m[1],k=Object(P.f)();Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("https://intense-tor-76305.herokuapp.com/merchants");case 3:t=e.sent,C(null===t||void 0===t?void 0:t.data),a=null===t||void 0===t?void 0:t.data.map((function(e){if(e.bids.length>0)return e;return Object(d.a)(Object(d.a)({},e),{},{bids:[{amount:0}]})})),n=a.sort((function(e,t){return Math.max.apply(Math,Object(o.a)(null===e||void 0===e?void 0:e.bids.map((function(e){return e.amount}))))-Math.max.apply(Math,Object(o.a)(null===t||void 0===t?void 0:t.bids.map((function(e){return e.amount}))))})),i(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var L=Object(n.useState)("asc"),q=Object(u.a)(L,2),B=q[0],D=q[1],A=function(e,t,a){return"max"===a?Math.max.apply(Math,Object(o.a)(null===e||void 0===e?void 0:e.bids.map((function(e){return e.amount}))))-Math.max.apply(Math,Object(o.a)(null===t||void 0===t?void 0:t.bids.map((function(e){return e.amount})))):"min"===a?Math.min.apply(Math,Object(o.a)(null===e||void 0===e?void 0:e.bids.map((function(e){return e.amount}))))-Math.min.apply(Math,Object(o.a)(null===t||void 0===t?void 0:t.bids.map((function(e){return e.amount})))):void 0},E=function(e,t){"asc"===e?"max"===t?s.sort((function(e,t){return A(t,e,"max")})):s.sort((function(e,t){return A(t,e,"min")})):"max"===t?s.sort((function(e,t){return A(e,t,"max")})):s.sort((function(e,t){return A(e,t,"min")}))},R=Object(n.useState)("max"),J=Object(u.a)(R,2),T=J[0],W=J[1],F=function(e,t){e.target.dataset.minmax&&("min"===t?(E("asc"===B?"desc":"asc","min"),W(t),document.querySelector(".max").classList.remove("active"),document.querySelector(".min").classList.add("active")):"max"===t&&(E("asc"===B?"desc":"asc","max"),W(t),document.querySelector(".min").classList.remove("active"),document.querySelector(".max").classList.add("active")))},I=c.a.useState(0),U=Object(u.a)(I,2),Y=U[0],z=U[1],G=c.a.useState(5),H=Object(u.a)(G,2),K=H[0],Q=H[1];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(b.a,{component:h.a,children:Object(S.jsxs)(x.a,{className:e.table,"aria-label":"simple table",children:[Object(S.jsx)(O.a,{children:Object(S.jsxs)(v.a,{children:[Object(S.jsx)(p.a,{className:"th__data",children:"Customer name"}),Object(S.jsx)(p.a,{className:"th__data",children:"Email"}),Object(S.jsx)(p.a,{className:"th__data",children:"Phone"}),Object(S.jsx)(p.a,{className:"th__data",children:"Premium"}),Object(S.jsx)(p.a,{className:"th__data",align:"right",children:Object(S.jsxs)(f.a,{active:!0,direction:B,onClick:function(e){return t=B,void(e.target.dataset.minmax||(D("asc"===t?"desc":"asc"),E(t,T)));var t},children:[Object(S.jsx)("div",{style:{marginLeft:"10px"},children:"Bid"}),Object(S.jsxs)("span",{children:[Object(S.jsx)("span",{"data-minmax":!0,className:"max active",onClick:function(e){return F(e,"max")},children:"Max"})," ","/"," ",Object(S.jsx)("span",{"data-minmax":!0,className:"min common",onClick:function(e){return F(e,"min")},children:"Min"})]})]})})]})}),Object(S.jsx)(g.a,{children:null===s||void 0===s?void 0:s.slice(Y*K,Y*K+K).map((function(e){return Object(S.jsxs)(v.a,{className:"tablRow",onClick:function(){return function(e){var t=M.filter((function(t){return t.id===e}));t[0].bids.length>0?k.push("/bids-details",t):alert("No Data")}(e.id)},children:[Object(S.jsx)(p.a,{component:"th",className:"name",scope:"row",children:Object(S.jsxs)("div",{className:"customer",children:[Object(S.jsx)("div",{className:"avatar",children:Object(S.jsx)(y.a,{alt:e.firstname,src:e.avatarUrl})}),Object(S.jsxs)("div",{className:"custname",children:[e.firstname," ",e.lastname]})]})}),Object(S.jsx)(p.a,{children:e.email}),Object(S.jsx)(p.a,{children:e.phone}),Object(S.jsx)(p.a,{children:e.hasPremium?"Yes":"No"}),Object(S.jsx)(p.a,{align:"right",children:"max"===T?(null===e||void 0===e?void 0:e.bids.length)>0?Math.max.apply(Math,Object(o.a)(null===e||void 0===e?void 0:e.bids.map((function(e){return e.amount})))):"0":(null===e||void 0===e?void 0:e.bids.length)>0?Math.min.apply(Math,Object(o.a)(null===e||void 0===e?void 0:e.bids.map((function(e){return e.amount})))):"0"})]},e.id)}))})]})}),Object(S.jsx)(N.a,{rowsPerPageOptions:[5,10,20],component:"div",count:null===s||void 0===s?void 0:s.length,rowsPerPage:K,page:Y,onChangePage:function(e,t){z(t)},onChangeRowsPerPage:function(e){Q(+e.target.value),z(0)}})]})},k=a(37),L=(a(103),a(64)),q=a.n(L),B=Object(m.a)({table:{minWidth:650}});var D=function(e){var t=B(),a=Object(P.g)(),n=a.state[0].bids;console.log(a.state);var s=c.a.useState(0),i=Object(u.a)(s,2),r=i[0],l=i[1],o=c.a.useState(5),d=Object(u.a)(o,2),j=d[0],m=d[1];return Object(S.jsxs)("div",{className:"BidsDetails",children:[Object(S.jsx)("h2",{children:"Bids Details"}),Object(S.jsxs)(b.a,{component:h.a,children:[Object(S.jsxs)("div",{className:"cuname",children:[a.state[0].firstname," ",a.state[0].lastname]}),Object(S.jsxs)(x.a,{className:t.table,"aria-label":"simple table",children:[Object(S.jsx)(O.a,{children:Object(S.jsxs)(v.a,{children:[Object(S.jsx)(p.a,{className:"th__data",children:"Car Title"}),Object(S.jsx)(p.a,{className:"th__data",children:"Amount"}),Object(S.jsx)(p.a,{className:"th__data",children:"Date"})]})}),Object(S.jsx)(g.a,{children:null===n||void 0===n?void 0:n.slice(r*j,r*j+j).map((function(e){return Object(S.jsxs)(v.a,{children:[Object(S.jsx)(p.a,{children:e.carTitle}),Object(S.jsx)(p.a,{children:e.amount}),Object(S.jsx)(p.a,{children:q()(e.created,"x").format("ll")})]},e.id)}))})]})]}),Object(S.jsx)(N.a,{rowsPerPageOptions:[5,10,20],component:"div",count:null===n||void 0===n?void 0:n.length,rowsPerPage:j,page:r,onChangePage:function(e,t){l(t)},onChangeRowsPerPage:function(e){m(+e.target.value),l(0)}})]})};var A=function(){return Object(S.jsx)(k.a,{children:Object(S.jsxs)(P.c,{children:[Object(S.jsx)(P.a,{exact:!0,path:"/",children:Object(S.jsx)("div",{className:"App",children:Object(S.jsx)("div",{className:"customer__list",children:Object(S.jsx)(C,{})})})}),Object(S.jsx)(P.a,{exact:!0,path:"/bids-details",children:Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(D,{})})})]})})};i.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(A,{})}),document.getElementById("root"))},75:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){}},[[105,1,2]]]);
//# sourceMappingURL=main.683d8ecc.chunk.js.map