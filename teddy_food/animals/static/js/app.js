webpackJsonp([1],{"26Ca":function(t,s){},"8iZu":function(t,s){},Erax:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),n=a("Dd8w"),i=a.n(n),o=a("UlOv"),c=o.c.reactiveProp,l={extends:o.a,mixins:[c,o.c],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},r=o.c.reactiveProp,u={extends:o.b,mixins:[r,o.c],props:["options","type"],mounted:function(){this.renderChart(this.chartData,this.options)}},h={name:"Popup",props:{active:{type:Boolean,default:!1}},data:function(){return{activeInner:!1}},watch:{active:function(){var t=this;this.active&&setTimeout(function(){return t.activeInner=!0},800)}},methods:{closePopup:function(){this.$emit("popup-close"),this.activeInner=!1}}},d={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{class:["popup",{_active:t.active}]},[a("div",{staticClass:"popup__overlay"}),t._v(" "),a("div",{staticClass:"popup__close",on:{click:t.closePopup}}),t._v(" "),a("div",{class:["popup__inner",{_active:t.activeInner}]},[t.activeInner?t._t("default"):t._e()],2)])},staticRenderFns:[]};var p=a("VU/8")(h,d,!1,function(t){a("qONI")},null,null).exports,_={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("button",{staticClass:"btn",on:{click:function(s){return t.$emit("btn-click")}}},[t._t("default")],2)},staticRenderFns:[]};var v=a("VU/8")({name:"Btn"},_,!1,function(t){a("Erax")},null,null).exports,j={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"container"},[this._t("default")],2)},staticRenderFns:[]};var b=a("VU/8")({name:"Section"},j,!1,function(t){a("rlTd")},null,null).exports,m={name:"Header",components:{cont:b},methods:{scrollTo:function(t){this.$emit("scroll-to",t)}}},g={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("header",{staticClass:"header"},[a("cont",{staticClass:"header__container"},[a("a",{staticClass:"header__logo-link",attrs:{href:"/"}},[a("img",{staticClass:"header__logo",attrs:{src:"https://raw.githubusercontent.com/praktikum-hackathon/hackathon/dev/Research/logo/logo.png",alt:"Котаны против Кис"}})]),t._v(" "),a("nav",{staticClass:"header__nav"},[a("button",{staticClass:"header__btn",on:{click:function(s){return t.scrollTo(0)}}},[t._v("Гипотеза 1")]),t._v(" "),a("button",{staticClass:"header__btn",on:{click:function(s){return t.scrollTo(1)}}},[t._v("Гипотеза 2")]),t._v(" "),a("button",{staticClass:"header__btn",on:{click:function(s){return t.scrollTo(2)}}},[t._v("Гипотеза 3")])])])],1)},staticRenderFns:[]};var f={components:{Popup:p,BarChart:l,DCharts:u,MyBtn:v,"my-header":a("VU/8")(m,g,!1,function(t){a("8iZu")},null,null).exports,cont:b},data:function(){return{datacollection:{},first:!0,graphType:"pie",content:"content",popupOpened:!1,tabTitle:"Общее количество",sections:"",categories:"",activePopup:0,initialOptions:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}}},mounted:function(){this.loadHomeStats("/data"),this.loadCategories("/sex"),this.sections=document.querySelectorAll(".js-section")},methods:{loadHomeStats:function(t){var s=this;fetch(t).then(function(t){return t.json()}).then(function(t){return s.homeStats=t}).then(function(t){return s.datacollection=s.getHomeGraph("Общее количество")})},loadCategories:function(t){var s=this;fetch(t).then(function(t){return t.json()}).then(function(t){return s.categories=t}).then(function(t){return s.datacollection=s.getCategoriesGraph("Общее количество")})},scrollTo:function(t){var s=this.sections[t].getBoundingClientRect(),a=window.pageYOffset||document.documentElement.scrollTop;window.scrollTo({top:s.top+a,behavior:"smooth"})},fillData:function(t,s){this.datacollection=s(t),this.tabTitle=t},getHomeGraph:function(t){return"Общее количество"===t?i()({},this.initialOptions,{offset:!1,labels:["Мальчики","Девочки"],datasets:[{label:"Забрали домой",backgroundColor:["#5E81F4","#00C4B4"],data:[this.homeStats[1].home,this.homeStats[0].home]},{label:"Еще не забрали",backgroundColor:["#FFAE33","#0CC3E7"],data:[this.homeStats[1].total-this.homeStats[1].home,this.homeStats[0].total-this.homeStats[0].home]}]}):"Мальчики"===t?i()({},this.initialOptions,{labels:["Мальчики"],datasets:[{label:"Забрали домой",backgroundColor:["#5E81F4"],data:[this.homeStats[0].home]},{label:"Еще не забрали",backgroundColor:["#FFAE33"],data:[this.homeStats[0].total-this.homeStats[0].home]}]}):"Девочки"===t?i()({},this.initialOptions,{offset:!1,labels:["Девочки"],datasets:[{label:"Забрали домой",backgroundColor:"#00C4B4",data:[this.homeStats[1].home]},{label:"Еще не забрали",backgroundColor:["#0CC3E7"],data:[this.homeStats[1].total-this.homeStats[1].home]}]}):void 0},getCategoriesGraph:function(t){return"Общее количество"===t?i()({},this.initialOptions,{offset:!1,labels:["Мальчики","Девочки"],datasets:[{label:"На медицину",backgroundColor:["#5E81F4","#00C4B4"],data:[this.categories[0].meds,this.categories[1].meds]},{label:"На игрушки",backgroundColor:["#FFAE33","#0CC3E7"],data:[this.categories[0].toys,this.categories[1].toys]}]}):"Мальчики"===t?i()({},this.initialOptions,{labels:["Мальчики"],datasets:[{label:"На игрушки",backgroundColor:["#5E81F4"],data:[this.categories[0].toys]},{label:"На медицину",backgroundColor:["#FFAE33"],data:[this.categories[0].meds]}]}):"Девочки"===t?i()({},this.initialOptions,{offset:!1,labels:["Девочки"],datasets:[{label:"На игрушки",backgroundColor:"#00C4B4",data:[this.categories[1].toys]},{label:"На медицину",backgroundColor:["#0CC3E7"],data:[this.categories[1].meds]}]}):void 0},showPopup:function(t){this.popupOpened=!0,this.activePopup=t,this.datacollection=1===t?this.getHomeGraph("Общее количество"):this.getCategoriesGraph("Общее количество")}}},C={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{ref:"page",staticClass:"page"},[a("my-header",{on:{"scroll-to":t.scrollTo}}),t._v(" "),a("div",{staticClass:"page__section _bg"},[a("cont",[a("section",{staticClass:"section js-section"},[a("div",{staticClass:"section__text-content"},[a("h1",{staticClass:"section__title title"},[t._v('Исследование на тему "Котики или кисы?"')]),t._v(" "),a("p",{staticClass:"section__subtitle"},[t._v("Разрушаем гендерные стереотипы о животных")]),t._v(" "),a("my-btn",{staticClass:"section__btn",on:{"btn-click":function(s){return t.showPopup(1)}}},[t._v("Результат")])],1),t._v(" "),a("img",{staticClass:"section__img",attrs:{src:"https://i.ibb.co/wd6ZFgS/Artboard-3-2x.png",alt:"Иллюстрация"}})])])],1),t._v(" "),a("div",{staticClass:"page__section"},[a("cont",[a("section",{staticClass:"section js-section"},[a("div",{staticClass:"section__text-content"},[a("h1",{staticClass:"section__title title"},[t._v("Что же важнее?")]),t._v(" "),a("p",{staticClass:"section__subtitle"},[t._v("Для выстраивания маркетинговой стратегии")]),t._v(" "),a("my-btn",{staticClass:"section__btn",on:{"btn-click":function(s){return t.showPopup(2)}}},[t._v("Результат")])],1),t._v(" "),a("img",{staticClass:"section__img",attrs:{src:"https://i.ibb.co/1f01w9L/Artboard-2-2x.png",alt:"Иллюстрация"}})])])],1),t._v(" "),a("div",{staticClass:"page__section _bg"},[a("cont",[a("section",{staticClass:"section js-section"},[a("div",{staticClass:"section__text-content"},[a("h1",{staticClass:"section__title title"},[t._v("Еще немного аналитики")]),t._v(" "),a("p",{staticClass:"section__subtitle"},[t._v("Лучше посмотрите результат")]),t._v(" "),a("my-btn",{staticClass:"section__btn",on:{"btn-click":function(s){return t.showPopup(3)}}},[t._v("Результат")])],1),t._v(" "),a("img",{staticClass:"section__img",attrs:{src:"https://i.ibb.co/PFpsjWQ/Artboard-4-2x.png",alt:"Иллюстрация"}})])])],1),t._v(" "),a("Popup",{attrs:{active:t.popupOpened},on:{"popup-close":function(s){t.popupOpened=!1}}},[a("cont",[1===t.activePopup?a("section",{staticClass:"stats"},[a("div",{staticClass:"stats__text-content"},[a("h2",{staticClass:"stats__title"},[t._v("Котов-мальчиков берут реже, чем кошечек")]),t._v(" "),a("p",{staticClass:"stats__subtitle"},[t._v("Для разрушения гендерных стереотипов о животных: например, можно писать информационные статьи, рассказывающие, что метят территорию не только коты. И что стерилизация в большинстве случаев решает вопрос. Это будет повышать информированность общества и снижать их страх перед котами (особенно, если они кастрированные)\n\n          ")])]),t._v(" "),a("div",{staticClass:"graphs"},[a("div",{staticClass:"tabs"},[a("button",{class:["tabs__tab",{_active:"Мальчики"===t.tabTitle}],attrs:{"data-title":"Мальчики"},on:{click:function(s){return t.fillData(s.currentTarget.dataset.title,t.getHomeGraph)}}},[t._v("Показать мальчиков\n            ")]),t._v(" "),a("button",{class:["tabs__tab",{_active:"Девочки"===t.tabTitle}],attrs:{"data-title":"Девочки"},on:{click:function(s){return t.fillData(s.currentTarget.dataset.title,t.getHomeGraph)}}},[t._v("Показать девочек\n            ")]),t._v(" "),a("button",{class:["tabs__tab",{_active:"Общее количество"===t.tabTitle}],attrs:{"data-title":"Общее количество"},on:{click:function(s){return t.fillData(s.currentTarget.dataset.title,t.getHomeGraph)}}},[t._v("Показать всех\n            ")])]),t._v(" "),a("div",{staticClass:"graphs__graphs"},[a("bar-chart",{attrs:{"chart-data":t.datacollection,options:t.initialOptions}})],1)])]):t._e(),t._v(" "),2===t.activePopup?a("section",{staticClass:"stats"},[a("div",{staticClass:"stats__text-content"},[a("h2",{staticClass:"stats__title"},[t._v("Девчонкам дарят цацки, тогда как пацанам - полезные подарки (например, полис ДМС на мед. услуги)\n          ")]),t._v(" "),a("p",{staticClass:"stats__subtitle"},[t._v("Для выстраивания маркетинговой стратегии: например, если коту Гаврюше уже сделали все необходимые операции, а игрушки у него так и нет, то можно устроить кампанию по сбору средств под слоганом “Гаврюша тоже хочет немного веселья”\n\n          ")])]),t._v(" "),a("div",{staticClass:"graphs"},[a("div",{staticClass:"tabs"},[a("div",{staticClass:"tabs"},[a("button",{class:["tabs__tab",{_active:"Мальчики"===t.tabTitle}],attrs:{"data-title":"Мальчики"},on:{click:function(s){return t.fillData(s.currentTarget.dataset.title,t.getCategoriesGraph)}}},[t._v("Показать мальчиков\n              ")]),t._v(" "),a("button",{class:["tabs__tab",{_active:"Девочки"===t.tabTitle}],attrs:{"data-title":"Девочки"},on:{click:function(s){return t.fillData(s.currentTarget.dataset.title,t.getCategoriesGraph)}}},[t._v("Показать девочек\n              ")]),t._v(" "),a("button",{class:["tabs__tab",{_active:"Общее количество"===t.tabTitle}],attrs:{"data-title":"Общее количество"},on:{click:function(s){return t.fillData(s.currentTarget.dataset.title,t.getCategoriesGraph)}}},[t._v("Показать всех\n              ")])])]),t._v(" "),a("div",{staticClass:"graphs__graphs"},[a("bar-chart",{attrs:{"chart-data":t.datacollection,options:t.initialOptions}})],1)])]):t._e(),t._v(" "),3===t.activePopup?a("section",{staticClass:"stats"},[a("div",{staticClass:"stats__text-content"},[a("h2",{staticClass:"stats__title"},[t._v("Занимательная статистика")]),t._v(" "),a("p",{staticClass:"stats__subtitle"},[t._v("Если немного изменить сам запрос к нашей чудесной БД, то можно собрать разную аналитику:\n\n            "),a("span",[t._v("например, во время анализа был замечен интересный момент, что среди топ-20 питомцев обоих видов, добавленных в избранное, только у 5 уже есть дом, их можно так и отображать, топ-20 всеобщих любимчиков без дома, если добавить еще пятерых, и помогать им таким образом его обрести.")]),t._v(" "),a("span",[t._v("есть всего 6 городов из 13 (Самара, Пермь, Москва, Санкт-Петербург, Казань, Волгоград), где число питомцев, перечисленных на сайте, превысило 100. И всего лишь в 3 приюта активно добавляют своих питомцев, потому что сумма кошек и собак в этих трех приютах от всех питомцев на сайте составляет 53%, другим городам и приютам стоило бы присоединиться к этому движению.")])])]),t._v(" "),a("div",{staticClass:"graphs"},[a("img",{staticClass:"graphs__img",attrs:{src:"https://i.ibb.co/hMmZNxH/Artboard-1-2x.png",alt:"Котики"}})])]):t._e()])],1)],1)},staticRenderFns:[]};var k=a("VU/8")(f,C,!1,function(t){a("26Ca")},null,null).exports,y=a("/ocq");e.a.use(y.a),e.a.config.productionTip=!1,new e.a({el:"#app",components:{App:k},template:"<App/>"})},qONI:function(t,s){},rlTd:function(t,s){},uslO:function(t,s,a){var e={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn-bd":"1C9R","./bn-bd.js":"1C9R","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-in":"yJfC","./en-in.js":"yJfC","./en-nz":"dyB6","./en-nz.js":"dyB6","./en-sg":"NYST","./en-sg.js":"NYST","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-mx":"USNP","./es-mx.js":"USNP","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fil":"rMbQ","./fil.js":"rMbQ","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-deva":"VGQH","./gom-deva.js":"VGQH","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./oc-lnc":"KOFO","./oc-lnc.js":"KOFO","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tk":"+WRH","./tk.js":"+WRH","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-mo":"+WA1","./zh-mo.js":"+WA1","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return a(i(t))}function i(t){var s=e[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}n.keys=function(){return Object.keys(e)},n.resolve=i,t.exports=n,n.id="uslO"}},["NHnr"]);