(this["webpackJsonphooks-snake-game"]=this["webpackJsonphooks-snake-game"]||[]).push([[0],{18:function(t,n,e){},24:function(t,n,e){"use strict";e.r(n);var c=e(0),i=e(2),a=e.n(i),s=e(12),r=e.n(s),o=(e(18),e(11)),u=e(3),l=function(t){var n=t.length,e=t.difficulty,i=void 0===e?3:e,a=t.onChangeDifficulty,s=i<5?"":"is-hidden",r=i>1?"":"is-hidden";return Object(c.jsxs)("div",{className:"navigation",children:[Object(c.jsxs)("div",{className:"navigation-item",children:[Object(c.jsx)("span",{className:"navigation-label",children:"Length: "}),Object(c.jsx)("div",{className:"navigation-item-number-container",children:Object(c.jsx)("div",{className:"num-board",children:n})})]}),Object(c.jsxs)("div",{className:"navigation-item",children:[Object(c.jsx)("span",{className:"navigation-label",children:"Difficulty: "}),Object(c.jsxs)("div",{className:"navigation-item-number-container",children:[Object(c.jsx)("span",{className:"num-board",children:i}),Object(c.jsxs)("div",{className:"difficulty-button-container",children:[Object(c.jsx)("div",{className:"difficulty-button difficulty-up ".concat(s),onClick:function(){return a(i+1)}}),Object(c.jsx)("div",{className:"difficulty-button difficulty-down ".concat(r),onClick:function(){return a(i-1)}})]})]})]})]})},b=function(t){var n=t.fields;return Object(c.jsx)("div",{className:"field",children:n.map((function(t){return t.map((function(t){return Object(c.jsx)("div",{className:"dots ".concat(t)})}))}))})},j=function(t){var n=t.status,e=t.onStop,i=t.onStart,a=t.onRestart;return Object(c.jsxs)("div",{children:["gameover"===n&&Object(c.jsx)("button",{className:"btn btn-gameover",onClick:a,children:"gameover"}),"init"===n&&Object(c.jsx)("button",{className:"btn btn-init",onClick:i,children:"start"}),"suspended"===n&&Object(c.jsx)("button",{className:"btn btn-suspended",onClick:i,children:"start"}),"playing"===n&&Object(c.jsx)("button",{className:"btn btn-playing",onClick:e,children:"stop"})]})},d=e(5),f=e(7),h=function(t){var n=t.onChange;return Object(c.jsxs)("div",{className:"manipulation-panel",children:[Object(c.jsx)("button",{className:"manipulation-btn btn btn-left",onClick:function(){return n("left")},children:Object(c.jsx)(d.a,{icon:f.b})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:"manipulation-btn btn btn-up",onClick:function(){return n("up")},children:Object(c.jsx)(d.a,{icon:f.d})}),Object(c.jsx)("button",{className:"manipulation-btn btn btn-down",onClick:function(){return n("down")},children:Object(c.jsx)(d.a,{icon:f.a})})]}),Object(c.jsx)("button",{className:"manipulation-btn btn btn-right",onClick:function(){return n("right")},children:Object(c.jsx)(d.a,{icon:f.c})})]})},O=function(t,n){for(var e=function(){var e=Math.floor(Math.random()*(t-1-1))+1,c=Math.floor(Math.random()*(t-1-1))+1;if(!n.some((function(t){return t.x===e&&t.y===c})))return{v:{x:e,y:c}}};;){var c=e();if("object"===typeof c)return c.v}},m=function(t,n){for(var e=[],c=0;c<t;c++){var i=new Array(t).fill("");e.push(i)}e[n.y][n.x]="snake";var a=O(t,[n]);return e[a.y][a.x]="food",e},v={x:17,y:17},x=m(35,v),p=[1e3,500,100,50,10],g=Object.freeze({init:"init",playing:"playing",suspended:"suspended",gameover:"gameover"}),y=Object.freeze({up:"up",right:"right",left:"left",down:"down"}),N=Object.freeze({up:"down",right:"left",left:"right",down:"up"}),k=Object.freeze({up:{x:0,y:-1},right:{x:1,y:0},left:{x:-1,y:0},down:{x:0,y:1}}),C=Object.freeze({37:y.left,38:y.up,39:y.right,40:y.down}),w=void 0,S=function(){w&&clearInterval(w)};var E=function(){var t=Object(i.useState)(x),n=Object(u.a)(t,2),e=n[0],a=n[1],s=Object(i.useState)([]),r=Object(u.a)(s,2),d=r[0],f=r[1],E=Object(i.useState)(g.init),z=Object(u.a)(E,2),I=z[0],L=z[1],M=Object(i.useState)(y.up),D=Object(u.a)(M,2),F=D[0],A=D[1],B=Object(i.useState)(3),J=Object(u.a)(B,2),P=J[0],R=J[1],T=Object(i.useState)(0),G=Object(u.a)(T,2),q=G[0],H=G[1];Object(i.useEffect)((function(){return f(new Array(15).fill("").map((function(t,n){return{x:17,y:17+n}}))),w=setInterval((function(){H((function(t){return t+1}))}),p[P-1]),S}),[P]),Object(i.useEffect)((function(){0!==d.length&&I===g.playing&&(K()||L(g.gameover))}),[q]);var K=function(){var t,n,c=d[0],i=c.x,s=c.y,r=k[F],u={x:i+r.x,y:s+r.y};if(t=e.length,(n=u).y<0||n.x<0||n.y>t-1||n.x>t-1||function(t,n){return"snake"===t[n.y][n.x]}(e,u))return S(),!1;var l=Object(o.a)(d);if("food"!==e[u.y][u.x]){var b=l.pop();e[b.y][b.x]=""}else{var j=O(e.length,[].concat(Object(o.a)(l),[u]));e[j.y][j.x]="food"}return e[u.y][u.x]="snake",l.unshift(u),f(l),a(e),!0},Q=Object(i.useCallback)((function(t){if(I!==g.playing)return F;N[F]!==t&&A(t)}),[F,I]);Object(i.useEffect)((function(){var t=function(t){var n=C[t.keyCode];n&&Q(n)};return document.addEventListener("keydown",t),function(){return document.removeEventListener("keydown",t)}}),[Q]);var U=Object(i.useCallback)((function(t){I===g.init&&(t<1||t>p.length||R(t))}),[I,P]);return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("div",{className:"title-container",children:Object(c.jsx)("h1",{className:"title",children:"Snake Game"})}),Object(c.jsx)(l,{length:d.length,difficulty:P,onChangeDifficulty:U})]}),Object(c.jsx)("main",{className:"main",children:Object(c.jsx)(b,{fields:e})}),Object(c.jsxs)("footer",{className:"footer",children:[Object(c.jsx)(j,{status:I,onStop:function(){return L(g.suspended)},onStart:function(){return L(g.playing)},onRestart:function(){w=setInterval((function(){H((function(t){return t+1}))}),100),A(y.up),L(g.init),f([v]),a(m(35,v))}}),Object(c.jsx)(h,{onChange:Q})]})]})},z=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,25)).then((function(n){var e=n.getCLS,c=n.getFID,i=n.getFCP,a=n.getLCP,s=n.getTTFB;e(t),c(t),i(t),a(t),s(t)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(E,{})}),document.getElementById("root")),z()}},[[24,1,2]]]);
//# sourceMappingURL=main.0b3c3753.chunk.js.map