(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{190:function(t,j,e){"use strict";e.r(j);var n=e(329);j.default={extends:n.a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}}},328:function(t,j,e){var map={"./af":191,"./af.js":191,"./ar":192,"./ar-dz":193,"./ar-dz.js":193,"./ar-kw":194,"./ar-kw.js":194,"./ar-ly":195,"./ar-ly.js":195,"./ar-ma":196,"./ar-ma.js":196,"./ar-sa":197,"./ar-sa.js":197,"./ar-tn":198,"./ar-tn.js":198,"./ar.js":192,"./az":199,"./az.js":199,"./be":200,"./be.js":200,"./bg":201,"./bg.js":201,"./bm":202,"./bm.js":202,"./bn":203,"./bn-bd":204,"./bn-bd.js":204,"./bn.js":203,"./bo":205,"./bo.js":205,"./br":206,"./br.js":206,"./bs":207,"./bs.js":207,"./ca":208,"./ca.js":208,"./cs":209,"./cs.js":209,"./cv":210,"./cv.js":210,"./cy":211,"./cy.js":211,"./da":212,"./da.js":212,"./de":213,"./de-at":214,"./de-at.js":214,"./de-ch":215,"./de-ch.js":215,"./de.js":213,"./dv":216,"./dv.js":216,"./el":217,"./el.js":217,"./en-au":218,"./en-au.js":218,"./en-ca":219,"./en-ca.js":219,"./en-gb":220,"./en-gb.js":220,"./en-ie":221,"./en-ie.js":221,"./en-il":222,"./en-il.js":222,"./en-in":223,"./en-in.js":223,"./en-nz":224,"./en-nz.js":224,"./en-sg":225,"./en-sg.js":225,"./eo":226,"./eo.js":226,"./es":227,"./es-do":228,"./es-do.js":228,"./es-mx":229,"./es-mx.js":229,"./es-us":230,"./es-us.js":230,"./es.js":227,"./et":231,"./et.js":231,"./eu":232,"./eu.js":232,"./fa":233,"./fa.js":233,"./fi":234,"./fi.js":234,"./fil":235,"./fil.js":235,"./fo":236,"./fo.js":236,"./fr":237,"./fr-ca":238,"./fr-ca.js":238,"./fr-ch":239,"./fr-ch.js":239,"./fr.js":237,"./fy":240,"./fy.js":240,"./ga":241,"./ga.js":241,"./gd":242,"./gd.js":242,"./gl":243,"./gl.js":243,"./gom-deva":244,"./gom-deva.js":244,"./gom-latn":245,"./gom-latn.js":245,"./gu":246,"./gu.js":246,"./he":247,"./he.js":247,"./hi":248,"./hi.js":248,"./hr":249,"./hr.js":249,"./hu":250,"./hu.js":250,"./hy-am":251,"./hy-am.js":251,"./id":252,"./id.js":252,"./is":253,"./is.js":253,"./it":254,"./it-ch":255,"./it-ch.js":255,"./it.js":254,"./ja":256,"./ja.js":256,"./jv":257,"./jv.js":257,"./ka":258,"./ka.js":258,"./kk":259,"./kk.js":259,"./km":260,"./km.js":260,"./kn":261,"./kn.js":261,"./ko":262,"./ko.js":262,"./ku":263,"./ku.js":263,"./ky":264,"./ky.js":264,"./lb":265,"./lb.js":265,"./lo":266,"./lo.js":266,"./lt":267,"./lt.js":267,"./lv":268,"./lv.js":268,"./me":269,"./me.js":269,"./mi":270,"./mi.js":270,"./mk":271,"./mk.js":271,"./ml":272,"./ml.js":272,"./mn":273,"./mn.js":273,"./mr":274,"./mr.js":274,"./ms":275,"./ms-my":276,"./ms-my.js":276,"./ms.js":275,"./mt":277,"./mt.js":277,"./my":278,"./my.js":278,"./nb":279,"./nb.js":279,"./ne":280,"./ne.js":280,"./nl":281,"./nl-be":282,"./nl-be.js":282,"./nl.js":281,"./nn":283,"./nn.js":283,"./oc-lnc":284,"./oc-lnc.js":284,"./pa-in":285,"./pa-in.js":285,"./pl":286,"./pl.js":286,"./pt":287,"./pt-br":288,"./pt-br.js":288,"./pt.js":287,"./ro":289,"./ro.js":289,"./ru":290,"./ru.js":290,"./sd":291,"./sd.js":291,"./se":292,"./se.js":292,"./si":293,"./si.js":293,"./sk":294,"./sk.js":294,"./sl":295,"./sl.js":295,"./sq":296,"./sq.js":296,"./sr":297,"./sr-cyrl":298,"./sr-cyrl.js":298,"./sr.js":297,"./ss":299,"./ss.js":299,"./sv":300,"./sv.js":300,"./sw":301,"./sw.js":301,"./ta":302,"./ta.js":302,"./te":303,"./te.js":303,"./tet":304,"./tet.js":304,"./tg":305,"./tg.js":305,"./th":306,"./th.js":306,"./tk":307,"./tk.js":307,"./tl-ph":308,"./tl-ph.js":308,"./tlh":309,"./tlh.js":309,"./tr":310,"./tr.js":310,"./tzl":311,"./tzl.js":311,"./tzm":312,"./tzm-latn":313,"./tzm-latn.js":313,"./tzm.js":312,"./ug-cn":314,"./ug-cn.js":314,"./uk":315,"./uk.js":315,"./ur":316,"./ur.js":316,"./uz":317,"./uz-latn":318,"./uz-latn.js":318,"./uz.js":317,"./vi":319,"./vi.js":319,"./x-pseudo":320,"./x-pseudo.js":320,"./yo":321,"./yo.js":321,"./zh-cn":322,"./zh-cn.js":322,"./zh-hk":323,"./zh-hk.js":323,"./zh-mo":324,"./zh-mo.js":324,"./zh-tw":325,"./zh-tw.js":325};function n(t){var j=r(t);return e(j)}function r(t){if(!e.o(map,t)){var j=new Error("Cannot find module '"+t+"'");throw j.code="MODULE_NOT_FOUND",j}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=328},330:function(t,j,e){"use strict";e.r(j);var n=e(190),r="rgb(255, 99, 132)",o="rgb(255, 159, 64)",l="rgb(255, 205, 86)",h={data:function(){return{second:!0,barChartData:{labels:["Jan","Feb","Mar"],datasets:[{label:"Income",backgroundColor:[r,o,l],data:[10,15,20]}]},barChartOptions:{responsive:!0,legend:{display:!1},title:{display:!0,text:"Monthly Income"},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}}},components:{BarChart:n.default}},c=e(28),component=Object(c.a)(h,(function(){var t=this.$createElement,j=this._self._c||t;return j("div",{staticClass:"container"},[j("bar-chart",{attrs:{data:this.barChartData,options:this.barChartOptions,height:200}}),this._v(" "),this.second?j("bar-chart",{attrs:{data:this.barChartData,options:this.barChartOptions,height:200}}):this._e()],1)}),[],!1,null,null,null);j.default=component.exports;installComponents(component,{BarChart:e(190).default})}}]);