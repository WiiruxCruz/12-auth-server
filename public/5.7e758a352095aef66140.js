(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{UJ0D:function(t,n,o){"use strict";o.r(n),o.d(n,"ProtectedModule",(function(){return a}));var r=o("ofXK"),e=o("tyNb"),s=o("fXoL"),c=o("N/25");const u=[{path:"",children:[{path:"",component:(()=>{class t{constructor(t,n){this.router=t,this.authService=n}get usuario(){return this.authService.usuario}logout(){this.router.navigateByUrl("/auth"),this.authService.logout()}}return t.\u0275fac=function(n){return new(n||t)(s.Hb(e.a),s.Hb(c.a))},t.\u0275cmp=s.Bb({type:t,selectors:[["app-dashboard"]],decls:12,vars:3,consts:[[3,"click"]],template:function(t,n){1&t&&(s.Kb(0,"h1"),s.Yb(1,"Dashboard"),s.Jb(),s.Ib(2,"hr"),s.Kb(3,"p"),s.Yb(4," Esta p\xe1gina s\xf3lo funciona si est\xe1s autenticado\n"),s.Jb(),s.Kb(5,"h4"),s.Yb(6,"User info"),s.Jb(),s.Kb(7,"pre"),s.Yb(8),s.Sb(9,"json"),s.Jb(),s.Kb(10,"button",0),s.Qb("click",(function(){return n.logout()})),s.Yb(11," Logout\n"),s.Jb()),2&t&&(s.xb(8),s.Zb(" ",s.Tb(9,1,n.usuario)," "))},pipes:[r.e],styles:["*[_ngcontent-%COMP%] {\n\t\t\t\tmargin: 15px;\n\t\t\t}"]}),t})()},{path:"**",redirectTo:""}]}];let i=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(n){return new(n||t)},imports:[[e.c.forChild(u)],e.c]}),t})(),a=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(n){return new(n||t)},imports:[[r.b,i]]}),t})()}}]);