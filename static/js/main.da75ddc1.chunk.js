(this.webpackJsonpcovidreact=this.webpackJsonpcovidreact||[]).push([[0],{12:function(e,t,a){e.exports={body:"NavBar_body__2IKaE",header:"NavBar_header__1WYgd",container:"NavBar_container__Vkp03",links:"NavBar_links__3dj0i",notactive:"NavBar_notactive__23bjy",active:"NavBar_active__Otv9w",iconB:"NavBar_iconB__2y-15",line:"NavBar_line__3WsoH"}},17:function(e,t,a){e.exports={tbl:"ConfirmedTable_tbl__3hb5_",three:"ConfirmedTable_three__mCoyX",head:"ConfirmedTable_head__a03i5",chartR:"ConfirmedTable_chartR__3oyUI",stats:"ConfirmedTable_stats__35Tfi",containL:"ConfirmedTable_containL__21QY-"}},219:function(e,t,a){e.exports=a.p+"static/media/covid.70876784.png"},220:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(88),o=a.n(c),l=a(3),i=a.n(l),u=a(8),d=a(13),s=a(14),m=a(16),h=a(15),f=(a(221),a(243)),v=a(239),E=a(244),p=a(240),b=a(241),y=a(49),g=a.n(y),_=a(50),R=a.n(_),C=a(25),x=a.n(C),N=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:f.b.container},r.a.createElement(v.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(v.a,{item:!0,component:E.a,xs:12,md:3,className:R()(x.a.card,x.a.infected)},r.a.createElement(p.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(v.a,{item:!0,component:E.a,xs:12,md:3,className:R()(x.a.card,x.a.recovered)},r.a.createElement(p.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of recoveries of COVID-19"))),r.a.createElement(v.a,{item:!0,component:E.a,xs:12,md:3,className:R()(x.a.card,x.a.deaths)},r.a.createElement(p.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of deaths as a result of COVID-19"))))):"Loading..."},O=a(48),k=a(20),j=a(51),D=a.n(j),S="https://covid19.mathdro.id/api",I=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,c,o,l,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=S,t&&(a="".concat(S,"/countries/").concat(t)),e.prev=2,e.next=5,D.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,l=r.deaths,u=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:l,lastUpdate:u});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(S,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(S,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(94),U=a.n(B),F=function e(t){var a=t.data,c=a.confirmed,o=a.recovered,l=a.deaths,d=t.country,s=Object(n.useState)({}),m=Object(O.a)(s,2),h=m[0],f=m[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(e);var v=c?r.a.createElement(k.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[c.value,o.value,l.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current situation in ".concat(d)},animation:{duration:1e3,easing:"linear"}}}):null,E=h[0]?r.a.createElement(k.b,{data:{labels:h.map((function(e){return e.date})),datasets:[{data:h.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:h.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]},options:{title:{display:!0,text:"Current situation in the World"},animation:{duration:4e3,easing:"linear"}}}):null;return r.a.createElement("div",{className:U.a.container},d?v:E)},L=a(245),V=a(242),M=a(95),J=a.n(M),P=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(O.a)(a,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,T();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(L.a,{className:J.a.formControl},r.a.createElement(V.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))};console.log(P);var A=P,G=a(17),W=a.n(G),z=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={items:[],isLoaded:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://covid19.mathdro.id/api/confirmed").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.items;if(t){var n=0,c=0,o=0,l=0,i=0,u=0,d=0,s=0,m=0,h=0,f=0,v=0,E=0,p=0,b=0,y=0,g=0,_=[0,0,0,0,0],R=["a","a","a","a","a"],C=0;a.map((function(e){C+=e.confirmed,e.confirmed>_[4]&&(e.confirmed>_[3]?e.confirmed>_[2]?e.confirmed>_[1]?e.confirmed>_[0]?(_[0]=e.confirmed,R[0]=e.countryRegion):(_[1]=e.confirmed,R[1]=e.countryRegion):(_[2]=e.confirmed,R[2]=e.countryRegion):(_[3]=e.confirmed,R[3]=e.countryRegion):(_[4]=e.confirmed,R[4]=e.countryRegion)),"Russia"===e.countryRegion&&(n+=e.confirmed),"China"===e.countryRegion&&(c+=e.confirmed),"Brazil"===e.countryRegion&&(o+=e.confirmed),"Sweden"===e.countryRegion&&(l+=e.confirmed),"Germany"===e.countryRegion&&(i+=e.confirmed),"Italy"===e.countryRegion&&(u+=e.confirmed),"Japan"===e.countryRegion&&(d+=e.confirmed),"Peru"===e.countryRegion&&(s+=e.confirmed),"Chile"===e.countryRegion&&(m+=e.confirmed),"Canada"===e.countryRegion&&(h+=e.confirmed),"Mexico"===e.countryRegion&&(f+=e.confirmed),"Spain"===e.countryRegion&&(v+=e.confirmed),"Ukraine"===e.countryRegion&&(E+=e.confirmed),"Colombia"===e.countryRegion&&(p+=e.confirmed),"US"===e.countryRegion&&(b+=e.confirmed),"India"===e.countryRegion&&(g+=e.confirmed),"United Kingdom"===e.countryRegion&&(y+=e.confirmed)})),a.map((function(e){for(var t=[n,c,o,l,i,u,d,s,m,h,f,v,E,p,b,y,g],a=["Russia","China","Brazil","Sweden","Germany","Italy","Japan","Peru","Chile","Canada","Mexico","Spain","Ukraine","Colombia","United States","United Kingdom","India"],r=0;r<t.length;r++)t[r]>_[4]&&t[r]!==_[0]&&t[r]!==_[1]&&t[r]!==_[2]&&t[r]!==_[3]&&(t[r]>_[3]?t[r]>_[2]?t[r]>_[1]?t[r]>_[0]?(_[4]=_[3],R[4]=R[3],_[3]=_[2],R[3]=R[2],_[2]=_[1],R[2]=R[1],_[1]=_[0],R[1]=R[0],_[0]=t[r],R[0]=a[r]):(_[4]=_[3],R[4]=R[3],_[3]=_[2],R[3]=R[2],_[2]=_[1],R[2]=R[1],_[1]=t[r],R[1]=a[r]):(_[4]=_[3],R[4]=R[3],_[3]=_[2],R[3]=R[2],_[2]=t[r],R[2]=a[r]):(_[4]=_[3],R[4]=R[3],_[3]=t[r],R[3]=a[r]):(_[4]=t[r],R[4]=a[r]))}));var x=r.a.createElement(k.c,{data:{labels:[R[0],R[1],R[2],R[3],R[4],"Rest of the World"],datasets:[{data:[_[0]/C*100,_[1]/C*100,_[2]/C*100,_[3]/C*100,_[4]/C*100,100-(_[0]/C*100+_[1]/C*100+_[2]/C*100+_[3]/C*100+_[4]/C*100)],backgroundColor:["rgba(220, 20, 60, 0.7)","rgba(72, 61, 139, 0.7)","rgba(34, 139, 34, 0.7)","rgba(255, 215, 0, 0.7)","rgba(218, 112, 214, 0.7)","rgba(30, 144, 255, 0.7)"]}]}});return r.a.createElement("div",{className:W.a.india},r.a.createElement("div",{className:W.a.stats},r.a.createElement("h3",{className:W.a.three},"Most COVID-19 Infections"),r.a.createElement("div",{className:W.a.containL},r.a.createElement("table",{className:W.a.tbl},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:W.a.head},"Country"),r.a.createElement("th",{className:W.a.head},"COVID-19 Cases"),r.a.createElement("th",{className:W.a.head},"% of World Cases"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,R[0]),r.a.createElement("td",null,_[0]),r.a.createElement("td",null,(_[0]/C*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,R[1]),r.a.createElement("td",null,_[1]),r.a.createElement("td",null,(_[1]/C*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,R[2]),r.a.createElement("td",null,_[2]),r.a.createElement("td",null,(_[2]/C*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,R[3]),r.a.createElement("td",null,_[3]),r.a.createElement("td",null,(_[3]/C*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,R[4]),r.a.createElement("td",null,_[4]),r.a.createElement("td",null,(_[4]/C*100).toFixed(2)))))),r.a.createElement("div",{className:W.a.chartR}," ",x)))}return r.a.createElement("div",null,"Loading...")}}]),a}(n.Component),K=(a(87),a(26)),Y=a.n(K),H=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={items:[],isLoaded:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://covid19.mathdro.id/api/recovered").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.items;if(t){var n=0,c=0,o=0,l=0,i=0,u=0,d=0,s=0,m=0,h=0,f=0,v=0,E=0,p=0,b=0,y=[0,0,0,0,0],g=["a","a","a","a","a"],_=0;a.map((function(e){_+=e.recovered,e.recovered>y[4]&&(e.recovered>y[3]?e.recovered>y[2]?e.recovered>y[1]?e.recovered>y[0]?(y[0]=e.recovered,g[0]=e.countryRegion):(y[1]=e.recovered,g[1]=e.countryRegion):(y[2]=e.recovered,g[2]=e.countryRegion):(y[3]=e.recovered,g[3]=e.countryRegion):(y[4]=e.recovered,g[4]=e.countryRegion)),"Russia"===e.countryRegion&&(n+=e.recovered),"China"===e.countryRegion&&(c+=e.recovered),"Brazil"===e.countryRegion&&(o+=e.recovered),"Sweden"===e.countryRegion&&(l+=e.recovered),"Germany"===e.countryRegion&&(i+=e.recovered),"Italy"===e.countryRegion&&(u+=e.recovered),"Japan"===e.countryRegion&&(d+=e.recovered),"Peru"===e.countryRegion&&(s+=e.recovered),"Chile"===e.countryRegion&&(m+=e.recovered),"Canada"===e.countryRegion&&(h+=e.recovered),"Mexico"===e.countryRegion&&(f+=e.recovered),"Spain"===e.countryRegion&&(v+=e.recovered),"Ukraine"===e.countryRegion&&(E+=e.recovered),"Colombia"===e.countryRegion&&(p+=e.recovered),"United Kingdom"===e.countryRegion&&(b+=e.recovered)})),a.map((function(e){for(var t=[n,c,o,l,i,u,d,s,m,h,f,v,E,p,b],a=["Russia","China","Brazil","Sweden","Germany","Italy","Japan","Peru","Chile","Canada","Mexico","Spain","Ukraine","Colombia","United Kingdom"],r=0;r<t.length;r++)t[r]>y[4]&&t[r]!==y[0]&&t[r]!==y[1]&&t[r]!==y[2]&&t[r]!==y[3]&&(t[r]>y[3]?t[r]>y[2]?t[r]>y[1]?t[r]>y[0]?(y[4]=y[3],g[4]=g[3],y[3]=y[2],g[3]=g[2],y[2]=y[1],g[2]=g[1],y[1]=y[0],g[1]=g[0],y[0]=t[r],g[0]=a[r]):(y[4]=y[3],g[4]=g[3],y[3]=y[2],g[3]=g[2],y[2]=y[1],g[2]=g[1],y[1]=t[r],g[1]=a[r]):(y[4]=y[3],g[4]=g[3],y[3]=y[2],g[3]=g[2],y[2]=t[r],g[2]=a[r]):(y[4]=y[3],g[4]=g[3],y[3]=t[r],g[3]=a[r]):(y[4]=t[r],g[4]=a[r]))}));var R=r.a.createElement(k.c,{data:{labels:[g[0],g[1],g[2],g[3],g[4],"Rest of the World"],datasets:[{data:[y[0]/_*100,y[1]/_*100,y[2]/_*100,y[3]/_*100,y[4]/_*100,100-(y[0]/_*100+y[1]/_*100+y[2]/_*100+y[3]/_*100+y[4]/_*100)],backgroundColor:["rgba(220, 20, 60, 0.7)","rgba(72, 61, 139, 0.7)","rgba(34, 139, 34, 0.7)","rgba(255, 215, 0, 0.7)","rgba(218, 112, 214, 0.7)","rgba(30, 144, 255, 0.7)"]}]}});return r.a.createElement("div",{className:Y.a.india},r.a.createElement("div",{className:Y.a.stat},r.a.createElement("h3",{className:Y.a.hthree},"Most COVID-19 Recoveries"),r.a.createElement("div",{className:Y.a.contain},r.a.createElement("table",{className:Y.a.tabl},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"COVID-19 Recoveried"),r.a.createElement("th",null,"% of World Recoveries"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,g[0]),r.a.createElement("td",null,y[0]),r.a.createElement("td",null,(y[0]/_*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,g[1]),r.a.createElement("td",null,y[1]),r.a.createElement("td",null,(y[1]/_*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,g[2]),r.a.createElement("td",null,y[2]),r.a.createElement("td",null,(y[2]/_*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,g[3]),r.a.createElement("td",null,y[3]),r.a.createElement("td",null,(y[3]/_*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,g[4]),r.a.createElement("td",null,y[4]),r.a.createElement("td",null,(y[4]/_*100).toFixed(2)))))),r.a.createElement("div",{className:Y.a.chart},R)))}return r.a.createElement("div",null,"Loading...")}}]),a}(n.Component),q=a(27),Q=a.n(q),X=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={items:[],isLoaded:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://covid19.mathdro.id/api/deaths").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.items;if(t){var n=0,c=0,o=0,l=0,i=0,u=0,d=0,s=0,m=0,h=0,f=0,v=0,E=0,p=0,b=0,y=[0,0,0,0,0],g=["a","a","a","a","a"],_=0;a.map((function(e){_+=e.deaths,e.deaths>y[4]&&(e.deaths>y[3]?e.deaths>y[2]?e.deaths>y[1]?e.deaths>y[0]?(y[0]=e.deaths,g[0]=e.countryRegion):(y[1]=e.deaths,g[1]=e.countryRegion):(y[2]=e.deaths,g[2]=e.countryRegion):(y[3]=e.deaths,g[3]=e.countryRegion):(y[4]=e.deaths,g[4]=e.countryRegion)),"Russia"===e.countryRegion&&(n+=e.deaths),"China"===e.countryRegion&&(c+=e.deaths),"Brazil"===e.countryRegion&&(o+=e.deaths),"Sweden"===e.countryRegion&&(l+=e.deaths),"Germany"===e.countryRegion&&(i+=e.deaths),"Italy"===e.countryRegion&&(u+=e.deaths),"Japan"===e.countryRegion&&(d+=e.deaths),"Peru"===e.countryRegion&&(s+=e.deaths),"Chile"===e.countryRegion&&(m+=e.deaths),"Canada"===e.countryRegion&&(h+=e.deaths),"Mexico"===e.countryRegion&&(f+=e.deaths),"Spain"===e.countryRegion&&(v+=e.deaths),"Ukraine"===e.countryRegion&&(E+=e.deaths),"Colombia"===e.countryRegion&&(p+=e.deaths),"US"===e.countryRegion&&(b+=e.deaths)})),a.map((function(e){for(var t=[n,c,o,l,i,u,d,s,m,h,f,v,E,p,b],a=["Russia","China","Brazil","Sweden","Germany","Italy","Japan","Peru","Chile","Canada","Mexico","Spain","Ukraine","Colombia","United States"],r=0;r<t.length;r++)t[r]>y[4]&&t[r]!==y[0]&&t[r]!==y[1]&&t[r]!==y[2]&&t[r]!==y[3]&&(t[r]>y[3]?t[r]>y[2]?t[r]>y[1]?t[r]>y[0]?(y[4]=y[3],g[4]=g[3],y[3]=y[2],g[3]=g[2],y[2]=y[1],g[2]=g[1],y[1]=y[0],g[1]=g[0],y[0]=t[r],g[0]=a[r]):(y[4]=y[3],g[4]=g[3],y[3]=y[2],g[3]=g[2],y[2]=y[1],g[2]=g[1],y[1]=t[r],g[1]=a[r]):(y[4]=y[3],g[4]=g[3],y[3]=y[2],g[3]=g[2],y[2]=t[r],g[2]=a[r]):(y[4]=y[3],g[4]=g[3],y[3]=t[r],g[3]=a[r]):(y[4]=t[r],g[4]=a[r]))}));var R=r.a.createElement(k.c,{data:{labels:[g[0],g[1],g[2],g[3],g[4],"Rest of the World"],datasets:[{data:[y[0]/_*100,y[1]/_*100,y[2]/_*100,y[3]/_*100,y[4]/_*100,100-(y[0]/_*100+y[1]/_*100+y[2]/_*100+y[3]/_*100+y[4]/_*100)],backgroundColor:["rgba(220, 20, 60, 0.7)","rgba(72, 61, 139, 0.7)","rgba(34, 139, 34, 0.7)","rgba(255, 215, 0, 0.7)","rgba(218, 112, 214, 0.7)","rgba(30, 144, 255, 0.7)"]}]}});return r.a.createElement("div",{className:Q.a.india},r.a.createElement("div",{className:Q.a.stats},r.a.createElement("h3",{className:Q.a.three},"Most COVID-19 Deaths"),r.a.createElement("div",{className:Q.a.containR},r.a.createElement("table",{className:Q.a.tble},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"COVID-19 Deaths"),r.a.createElement("th",null,"% of World Deaths"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,g[0]),r.a.createElement("td",null,y[0]),r.a.createElement("td",null,(y[0]/_*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,g[1]),r.a.createElement("td",null,y[1]),r.a.createElement("td",null,(y[1]/_*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,g[2]),r.a.createElement("td",null,y[2]),r.a.createElement("td",null,(y[2]/_*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,g[3]),r.a.createElement("td",null,y[3]),r.a.createElement("td",null,(y[3]/_*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,g[4]),r.a.createElement("td",null,y[4]),r.a.createElement("td",null,(y[4]/_*100).toFixed(2)))))),r.a.createElement("div",{className:Q.a.charts},R)))}return r.a.createElement("div",null,"Loading...")}}]),a}(n.Component),Z=a(12),$=a.n(Z),ee=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:$.a.body},r.a.createElement("nav",null,r.a.createElement("input",{id:"nav-toggle",type:"checkbox"}),r.a.createElement("div",{className:$.a.header},"COVID",r.a.createElement("strong",null,"Tracker")),r.a.createElement("ul",{className:$.a.links},r.a.createElement("li",{className:$.a.active},r.a.createElement("a",{href:"#"},"Home")),r.a.createElement("li",{className:$.a.notactive},r.a.createElement("a",{href:"https://curiousexpert24.github.io/covidtacker_about/"},"About")),r.a.createElement("li",{className:$.a.notactive},r.a.createElement("a",{href:"https://curiousexpert24.github.io/covidtacker_about/safetypage.html"},"Safety Tips"))),r.a.createElement("label",{htmlFor:"nav-toggle",className:$.a.iconB},r.a.createElement("div",{className:$.a.line}),r.a.createElement("div",{className:$.a.line}),r.a.createElement("div",{className:$.a.line}))),r.a.createElement("div",{className:$.a.container},r.a.createElement("h2",null,"COVID Tracker"),r.a.createElement("h4",null,"A reliable way to track COVID-19 Cases, Recoveries, and Deaths")))}}]),a}(n.Component),te=a(96),ae=a.n(te),ne=(a(219),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:ae.a.totalContain},r.a.createElement(ee,null),r.a.createElement(N,{data:t}),r.a.createElement(A,{handleCountryChange:this.handleCountryChange}),r.a.createElement(F,{data:t,country:a}),r.a.createElement(z,null),r.a.createElement(H,null),r.a.createElement(X,null))}}]),a}(r.a.Component));o.a.render(r.a.createElement(ne,null),document.getElementById("root"))},25:function(e,t,a){e.exports={container:"Cards_container__2GHc8",card:"Cards_card__1Pv1h",infected:"Cards_infected__7CPsk",recovered:"Cards_recovered__39yoV",deaths:"Cards_deaths__1f48A"}},26:function(e,t,a){e.exports={chart:"RecoveredTable_chart__3yLKh",stat:"RecoveredTable_stat__2yc4O",contain:"RecoveredTable_contain__1GNJp",three:"RecoveredTable_three__2pCFz",table:"RecoveredTable_table__2WK84"}},27:function(e,t,a){e.exports={tble:"DeathsTable_tble__1OEJn",charts:"DeathsTable_charts__RGCOq",stats:"DeathsTable_stats__37tyg",containR:"DeathsTable_containR__2xAA7",three:"DeathsTable_three__1x_JR",tbl:"DeathsTable_tbl__1J-Cq"}},87:function(e,t){},94:function(e,t,a){e.exports={container:"Chart_container__1OuVY"}},95:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__1hd4Q"}},96:function(e,t,a){e.exports={totalContain:"App_totalContain__IUYPM",image:"App_image__1Zn0t",float:"App_float__29VT7",fadeIn:"App_fadeIn__20D5s"}},99:function(e,t,a){e.exports=a(220)}},[[99,1,2]]]);
//# sourceMappingURL=main.da75ddc1.chunk.js.map