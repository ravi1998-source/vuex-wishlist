(function(t){function e(e){for(var i,c,r=e[0],a=e[1],u=e[2],d=0,h=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&h.push(s[c][0]),s[c]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var a=n[r];0!==s[a]&&(i=!1)}i&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},s={app:0},o=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=a;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),s=n.n(i);s.a},"189f":function(t,e,n){},"3adf":function(t,e,n){"use strict";var i=n("189f"),s=n.n(i);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("TodoInput"),n("TodoStatus"),n("TodoList")],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Drop your wish:")]),n("div",{staticClass:"row"},[n("input",{staticClass:"col form-control mr-2",attrs:{type:"text"},domProps:{value:t.wishText},on:{change:t.wishTextChange}}),n("button",{staticClass:"btn btn-primary",on:{click:t.addWishI}},[t._v("Add")])])])},r=[],a=n("5530"),u=n("2f62"),l=n("c50a"),d={data:function(){return{wishText:""}},methods:Object(a["a"])(Object(a["a"])({},Object(u["b"])(["addWish"])),{},{wishTextChange:function(t){this.wishText=t.target.value},addWishI:function(){this.addWish({id:Object(l["a"])(),title:this.wishText,complete:!1}),this.wishText=""}})},h=d,p=n("2877"),f=Object(p["a"])(h,c,r,!1,null,"355b989a",null),m=f.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.allWWishes,(function(t){return n("div",{key:t.id},[n("TodoItem",{attrs:{wish:t}})],1)})),0)},b=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row my-3 justify-content-between align-items-center"},[t.editing?n("div",{staticClass:"mr-2 row justify-content-between align-items-center col"},[n("input",{staticClass:"col-7 form-control",attrs:{type:"text"},domProps:{value:t.wishText},on:{change:t.wishTextChange}})]):n("h3",[t._v(t._s(t.wish.title))]),n("div",{staticClass:"row align-items-center"},[n("button",{staticClass:"btn btn-primary mx-2",on:{click:function(e){return t.updateWishI(t.wish)}}},[t._v(t._s(t.editing?"Update":"Edit"))]),n("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.deleteWish(t.wish.id)}}},[t._v("Delete")])])])])},g=[],_={props:{wish:{}},data:function(){return{wishText:"",editing:!1,completed:!1}},methods:Object(a["a"])(Object(a["a"])({},Object(u["b"])(["deleteWish","updateWish","changeCompleted"])),{},{onCompleted:function(){this.completed=1!=this.completed},wishTextChange:function(t){this.wishText=t.target.value},updateWishI:function(t){this.editing=1!=this.editing,this.editing?(this.wishText=t.title,this.updateWish(t)):(t.title=this.wishText,t.complete=this.completed,this.changeCompleted())}})},j=_,O=Object(p["a"])(j,v,g,!1,null,"7df40b70",null),x=O.exports,y={components:{TodoItem:x},computed:Object(a["a"])({},Object(u["c"])(["allWWishes","completed"]))},T=y,C=Object(p["a"])(T,w,b,!1,null,"7541ceb4",null),W=C.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"row justify-content-center my-3"})])}],S={computed:Object(a["a"])({},Object(u["c"])(["completed"])),methods:Object(a["a"])(Object(a["a"])({},Object(u["b"])(["changeCompleted"])),{},{changeTab:function(){this.changeCompleted()}})},k=S,E=(n("3adf"),Object(p["a"])(k,I,P,!1,null,"6d75167f",null)),$=E.exports,M={name:"App",components:{TodoInput:m,TodoList:W,TodoStatus:$}},A=M,D=(n("034f"),Object(p["a"])(A,s,o,!1,null,null,null)),J=D.exports;n("f9e3"),n("4de4"),n("c740");i["a"].use(u["a"]);var L=new u["a"].Store({state:{completed:!0,wwishes:[],wishes:[]},getters:{allWWishes:function(t){return t.wwishes},allWishes:function(t){return t.wishes},completed:function(t){return t.completed}},actions:{changeCompleted:function(t){var e=t.commit;e("change_complete")},addWish:function(t,e){var n=t.commit;n("add_wish",e)},deleteWish:function(t,e){var n=t.commit;n("delete_wish",e)},updateWish:function(t,e){var n=t.commit;n("update_wish",e)}},mutations:{add_wish:function(t,e){t.wishes.push(e),t.wwishes=t.wishes},delete_wish:function(t,e){t.wishes=t.wishes.filter((function(t){return t.id!=e})),t.wwishes=t.wishes},update_wish:function(t,e){var n=t.wishes.findIndex((function(t){return t.id==e.id}));-1!=n&&(t.wishes[n]=e)},change_complete:function(t){t.wwishes=t.wishes,t.completed=1!=t.completed,t.wwishes=t.wwishess.filter((function(e){return e.complete==t.completed}))}},modules:{}});i["a"].config.productionTip=!1,new i["a"]({store:L,render:function(t){return t(J)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.93c80a8c.js.map