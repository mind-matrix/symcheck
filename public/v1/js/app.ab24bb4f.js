(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"24b9":function(t,e,a){t.exports=a.p+"img/sagnik.e4ff741c.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("h1",[t._v(" Symptom Checker ")]),n("v-spacer"),n("v-btn",{attrs:{icon:"",outlined:""},on:{click:function(e){t.infobox=!0}}},[n("v-icon",[t._v(" fa-info ")])],1)],1),n("v-content",[n("Checker")],1),n("v-dialog",{attrs:{"max-width":"800"},model:{value:t.infobox,callback:function(e){t.infobox=e},expression:"infobox"}},[n("v-card",[n("v-card-title",[t._v(" About "),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.infobox=!1}}},[n("v-icon",[t._v(" fa-close ")])],1)],1),n("v-card-text",[n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[n("v-img",{attrs:{src:a("24b9"),"max-width":"200"}})],1),n("v-col",{attrs:{cols:"12",md:"6"}},[n("h1",[t._v("Hi, I am Sagnik Modak")]),n("p",[t._v(" I am currently in 3rd year of my B. Tech. degree at National Institute of Technology, Agartala. You can email me at "),n("a",{attrs:{href:"mailto:sagnikmodak1118@gmail.com"}},[t._v("sagnikmodak1118@gmail.com")]),t._v(" or call me on "),n("a",{attrs:{href:"tel:+917005878172"}},[t._v("+917005878172")]),t._v(". ")])])],1)],1)],1)],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-combobox",{attrs:{items:t.items,"item-text":"description","search-input":t.search,"hide-selected":"",label:"Search for symptom(s)",multiple:"","persistent-hint":"","small-chips":"",solo:""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v(' No results matching "'),a("strong",[t._v(t._s(t.search))]),t._v('" ')])],1)],1)]},proxy:!0},{key:"selection",fn:function(e){var n=e.attrs,o=e.item,i=e.parent,r=e.selected;return[o===Object(o)?a("v-chip",t._b({attrs:{color:"primary lighten-3","input-value":r,label:"",small:""}},"v-chip",n,!1),[a("span",{staticClass:"pr-2"},[t._v(" "+t._s(o.description)+" ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return i.selectItem(o)}}},[t._v("fa-close")])],1):t._e()]}}]),model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1),a("v-col",{attrs:{cols:"12"}},[t.diseases.length?[a("v-list",[t._l(t.diseases,(function(e){return[a("v-list-item",{key:e._id},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.name.toProperCase()))])],1),a("v-list-item-action",[a("v-btn",{attrs:{color:"blue",icon:""},on:{click:function(a){return t.expand(e)}}},[a("v-icon",[t._v(" fa-expand ")])],1)],1)],1),a("v-divider",{key:"div-"+e._id})]}))],2)]:[a("v-card",{staticClass:"text-center",attrs:{outlined:""}},[a("v-card-title",[t._v("Search for conditions related to symptoms")]),a("v-card-text",[t._v(" Enter the symptoms from the list of available symptoms in the search box above to find all related conditions. "),a("p",[t._v("Made with "),a("v-icon",{attrs:{color:"brown"}},[t._v("fa-coffee")]),t._v(" and "),a("span",{staticStyle:{"background-color":"rgb(79, 192, 141)",color:"white",padding:"2px 4px","border-radius":"8px 0 0 8px"}},[t._v("Vue")]),a("span",{staticStyle:{"background-color":"rgb(60, 68, 92)",color:"white",padding:"2px 4px","border-radius":"0 8px 8px 0"}},[t._v("JS")]),t._v(".")],1)])],1)]],2)],1),a("v-dialog",{attrs:{"max-width":"800"},model:{value:t.info.dialog,callback:function(e){t.$set(t.info,"dialog",e)},expression:"info.dialog"}},[t.info.disease?[a("v-card",[a("v-card-title",[t._v(" "+t._s(t.info.disease.name.toProperCase())+" "),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.info.dialog=!1}}},[a("v-icon",[t._v(" fa-close ")])],1)],1),a("v-card-text",[t._v(" This disease is indicated by the presence of these symptoms - "),a("v-list",t._l(t.info.disease.symptoms,(function(e){return a("v-list-item",{key:e._id},[a("v-list-item-icon",[a("v-icon",{attrs:{color:"primary"}},[t._v("fa-circle")])],1),a("v-list-item-title",[t._v(" "+t._s(e.description)+" ")])],1)})),1)],1)],1)]:[a("v-card",[a("v-card-text",[t._v(" No disease selected. Please select expand icon "),a("v-icon",[t._v("fa-expand")]),t._v(" besides the disease. ")],1)],1)]],2)],1)},s=[],c=(a("d81d"),a("ac1f"),a("5319"),a("841c"),a("bc3a")),l=a.n(c);String.prototype.toProperCase=function(){return this.replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}))};var d={name:"Checker",methods:{get_diseases:function(t){var e=this;l.a.post("/v1/diseases",{ids:t.map((function(t){return t._id}))}).then((function(t){var a=t.data;e.diseases=a})).catch((function(t){console.log(t)}))},expand:function(t){this.info.disease=t,this.info.dialog=!0}},watch:{model:function(t,e){this.search=null,t.length?this.get_diseases(t):this.diseases=[]}},data:function(){return{items:[],diseases:[],model:[],search:null,info:{dialog:!1,disease:null}}},mounted:function(){var t=this;l.a.get("/v1/symptoms").then((function(e){var a=e.data;t.items=a})).catch((function(e){t.items=[]}))}},u=d,p=a("2877"),v=a("6544"),f=a.n(v),m=a("8336"),h=a("b0af"),b=a("99d9"),_=a("cc20"),g=a("62ad"),x=a("2b5d"),y=a("a523"),V=a("169a"),k=a("ce7e"),w=a("132d"),C=a("8860"),S=a("da13"),I=a("1800"),O=a("5d23"),j=a("34c3"),P=a("0fd9"),T=a("2fa4"),A=Object(p["a"])(u,r,s,!1,null,null,null),F=A.exports;f()(A,{VBtn:m["a"],VCard:h["a"],VCardText:b["a"],VCardTitle:b["b"],VChip:_["a"],VCol:g["a"],VCombobox:x["a"],VContainer:y["a"],VDialog:V["a"],VDivider:k["a"],VIcon:w["a"],VList:C["a"],VListItem:S["a"],VListItemAction:I["a"],VListItemContent:O["a"],VListItemIcon:j["a"],VListItemTitle:O["b"],VRow:P["a"],VSpacer:T["a"]});var L={name:"App",components:{Checker:F},data:function(){return{infobox:!1}}},M=L,B=a("7496"),$=a("40dc"),D=a("a75b"),E=a("adda"),J=Object(p["a"])(M,o,i,!1,null,null,null),N=J.exports;f()(J,{VApp:B["a"],VAppBar:$["a"],VBtn:m["a"],VCard:h["a"],VCardText:b["a"],VCardTitle:b["b"],VCol:g["a"],VContent:D["a"],VDialog:V["a"],VIcon:w["a"],VImg:E["a"],VRow:P["a"],VSpacer:T["a"]});var R=a("f309");n["a"].use(R["a"]);var H=new R["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#3f51b5",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},icons:{iconfont:"fa4"}});a("d5e8"),a("7f10");n["a"].config.productionTip=!1,new n["a"]({vuetify:H,render:function(t){return t(N)}}).$mount("#app")}});
//# sourceMappingURL=app.ab24bb4f.js.map