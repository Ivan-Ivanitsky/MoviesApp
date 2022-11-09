(function(t){function e(e){for(var o,r,n=e[0],c=e[1],l=e[2],m=0,v=[];m<n.length;m++)r=n[m],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&v.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(v.length)v.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],o=!0,n=1;n<s.length;n++){var c=s[n];0!==i[c]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=s[0]))}return t}var o={},i={app:0},a=[];function r(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=o,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(s,o,function(e){return t[e]}.bind(null,o));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/app-movies/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"095a":function(t,e,s){"use strict";s("fea5")},"234a":function(t,e,s){},"354a":function(t,e,s){},"3d4b":function(t,e,s){},"4cfc":function(t,e,s){},"566b":function(t,e,s){"use strict";s("3d4b")},"56d7":function(t,e,s){"use strict";s.r(e);var o=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("header-app",{on:{onSearch:t.search}}),s("notification"),t.Loaded?s("loader-app"):t._e(),s("movies-bg"),s("movies-list",{attrs:{list:t.moviesList}}),t.listPagination?s("pagination-movies",{attrs:{currentPage:t.currentPage,moviesPerPages:t.moviesPerPages,moviesLimit:t.moviesLimit},on:{onChangePage:t.onChangePage}}):t._e()],1)},a=[],r=s("2f62"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("B-container",[s("B-row",[t.isExist?t._l(t.list,(function(e,o){return s("B-col",{key:o,attrs:{sm:"6",md:"4",lg:"3"}},[s("movies",{attrs:{movie:e},on:{removeItem:t.onRemoveItem,showInfoModals:t.showInfoMovies},nativeOn:{mouseover:function(s){return t.bgMovies(e.Poster)}}})],1)})):t._e()],2),s("b-modal",{staticClass:"movie-modal-body",attrs:{id:t.showInfoModalFilms,size:"xl","hide-footer":"","hide-header":""}},[s("modal-info-movie",{attrs:{movie:t.modalInfo},on:{closeModal:t.onCloseModal}})],1)],1)},c=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"movies-items mb-3"},[s("div",{staticClass:"movies-item-poster",style:t.posterBg}),s("div",{staticClass:"movies-info-wrapper d-flex justify-content-between flex-column"},[s("div",{staticClass:"movies-info-item"},[s("h3",{staticClass:"movies-title"},[t._v(" "+t._s(t.movie.Title)+" ")]),s("span",{staticClass:"movies-year"},[t._v(" "+t._s(t.movie.Year)+" ")])]),s("div",{staticClass:"movies-control-wrapper"},[s("div",{staticClass:"col"},[s("B-button",{staticClass:"btn btn-light",attrs:{size:"md",block:""},on:{click:t.showInfoMovie}},[t._v("Info")])],1),s("div",{staticClass:"col"},[s("B-button",{staticClass:"btn btn-light",attrs:{size:"md",block:""},on:{click:t.remove}},[t._v("Remove")])],1)])])])},u=[],m={name:"movie",props:{movie:{type:Object,require:!0}},computed:{posterBg(){return`background-image:url(${this.movie.Poster})`}},methods:{remove(){this.$emit("removeItem",{id:this.movie.imdbID,title:this.movie.Title})},showInfoMovie(){this.$emit("showInfoModals",this.movie.imdbID)}}},v=m,d=(s("566b"),s("2877")),h=Object(d["a"])(v,l,u,!1,null,"2f360adf",null),f=h.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-wrapp"},[s("div",{staticClass:"modal-header"},[s("h6",[t._v("Movie-Info")]),s("b-icon",{staticClass:"modal-close",attrs:{id:"modal-close",icon:"x-lg"},on:{click:t.close}})],1),s("div",{staticClass:"modal-info-wrapp"},[s("B-col",{attrs:{cols:"12",md:"5",lg:"5"}},[s("div",{staticClass:"modal-pic",style:t.poster})]),s("B-col",{attrs:{cols:"12",md:"7",lg:"7"}},[s("h2",[t._v(t._s(t.movie.Title?t.movie.Title:"Uups "))]),s("b-form-rating",{staticClass:"modal-rating",attrs:{id:"rating-readonly",value:t.movie.imdbRating?t.movie.imdbRating:t.raitingRandom,readonly:"",stars:"10","show-value":"",variant:"warning"}}),s("p",{staticClass:"modal-movie-description"},[t._v(" "+t._s(t.readMore?t.readMore:t.movieDescrNotFound)+" ")]),s("div",{staticClass:"mt-3 mb-4"},[s("b-badge",{staticClass:"mr-2",attrs:{href:"#",variant:"success"}},[t._v(t._s(t.movie.Year))]),s("b-badge",{staticClass:"mr-2",attrs:{href:"#",variant:"success"}},[t._v(t._s(t.movie.Runtime?t.movie.Runtime:"not info"))]),s("b-badge",{staticClass:"mr-2",attrs:{href:"#",variant:"success"}},[t._v(t._s(t.movie.Genre?t.movie.Genre:"not info"))]),s("b-badge",{staticClass:"mr-2",attrs:{href:"#",variant:"success"}},[t._v(t._s(t.movie.Language?t.movie.Language:"English"))])],1),s("table",{staticClass:"table small"},[s("tr",[s("th",[t._v("Production")]),s("td",[t._v(t._s(t.movie.Production?t.movie.Production:t.movieInfoFalse))])]),s("tr",[s("th",[t._v("Country")]),s("td",[t._v(t._s(t.movie.Country?t.movie.Country:t.movieInfoFalse))])]),s("tr",[s("th",[t._v("Director")]),s("td",[t._v(t._s(t.movie.Director?t.movie.Director:t.movieInfoFalse))])]),s("tr",[s("th",[t._v("Writer")]),s("td",[t._v(t._s(t.movie.Writer?t.movie.Writer:t.movieInfoFalse))])]),s("tr",[s("th",[t._v("Actors")]),s("td",[t._v(t._s(t.movie.Actors?t.movie.Actors:t.movieInfoFalse))])]),s("tr",[s("th",[t._v("Awards")]),s("td",[t._v(t._s(t.movie.Awards?t.movie.Awards:t.movieInfoFalse))])])])],1)],1)])},g=[],b={props:{movie:{type:Object,required:!0}},data(){return{defaultPoster:"linear-gradient(0deg, rgb(35 28 35 / 83%), rgb(19 8 16))",raitingRandom:Math.floor(10*Math.random()+3),movieDescrNotFound:"Description this film not found",movieInfoFalse:"Not found  "}},computed:{movieInfo(){return this.movie},...Object(r["d"])({bgPoste:t=>t.movies.bgPoster}),poster(){return{"background-image":this.bgPoste?`url(${this.bgPoste})`:this.defaultPoster}},readMore(){return void 0!==this.movie.Plot?this.movie.Plot.substring(0,200)+" ...":"Movie info: "+this.movieInfoFalse}},methods:{close(){this.$emit("closeModal")}}},_=b,P=(s("8de8"),Object(d["a"])(_,p,g,!1,null,"7d94e920",null)),C=P.exports,M={name:"ListMovies",components:{movies:f,modalInfoMovie:C},props:{list:{type:Object,required:!0}},data(){return{showInfoModalFilms:"show-modal",selectedInfoId:null}},computed:{isExist(){return Boolean(Object.keys(this.list).length)},modalInfo(){return this.selectedInfoId?this.list[this.selectedInfoId]:null}},methods:{...Object(r["b"])(["removeItemMovie","moviesFetch"]),bgMovies(t){this.$store.dispatch("changePoster",t)},async onRemoveItem(t){const e=await this.$bvModal.msgBoxConfirm(t.title+" Remove ?");e&&(this.removeItemMovie(t),this.moviesFetch())},showInfoMovies(t){this.selectedInfoId=t,this.$bvModal.show(this.showInfoModalFilms)},onCloseModal(){this.$bvModal.hide(this.showInfoModalFilms)}}},y=M,I=(s("eec6"),s("b44f"),Object(d["a"])(y,n,c,!1,null,"d70adaf0",null)),w=I.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"movies-bg-wrapper"},[s("div",{staticClass:"movie-bg",style:t.stylePoster},[t.error?s("div",{staticClass:"errorMessage",staticStyle:{color:"#fff"}},[t._v(" "+t._s(t.error)+" ")]):t._e()])])},j=[],E={data(){return{bgDefault:"linear-gradient(0deg, rgb(35 28 35 / 83%), rgb(19 8 16))"}},computed:{...Object(r["d"])({bgPoster:t=>t.movies.bgPoster,error:t=>t.movies.error}),stylePoster(){return{"background-image":this.bgPoster?`url(${this.bgPoster})`:this.bgDefault}}}},L=E,x=(s("db3d"),Object(d["a"])(L,O,j,!1,null,"f901e5b6",null)),$=x.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pagination"},[s("ul",{staticClass:"pagination-items"},[s("div",{staticClass:"arrow prew",on:{click:function(e){return t.onPrew()}}},[t._v("❮")]),s("div",{staticClass:"pagination-items-wrapper"},t._l(t.button,(function(e,o){return s("li",{key:o,staticClass:"pagination-item-btn",class:{active:e===t.currentPage},on:{click:function(s){return t.onChangePage(e)}}},[t._v(" "+t._s(e)+" ")])})),0),s("div",{staticClass:"arrow next",on:{click:function(e){return t.onNext()}}},[t._v("❯")])])])},S=[],A={data(){return{button:Math.round(this.moviesLimit/5),count:1,endCount:null}},props:{currentPage:{type:Number,default:1},moviesPerPages:{type:Number,default:1},moviesLimit:{type:Number,default:1}},methods:{onChangePage(t){this.$emit("onChangePage",t)},onPrew(){const t=Math.round(this.moviesLimit/5),e=t*(this.count-1)-t,s=e+t;let o=[];for(let i=0;i<this.endCount;i++)o[i]=i+1;e<0?console.log(this.count):(o=o.slice(e,s),Object.values(o).map(()=>{this.button=o}),this.count--)},onNext(){if(!(this.button>=this.moviesLimit)){const t=Math.round(this.moviesLimit/5),e=t*(this.count+1)-t,s=t+e;let o=[];for(let i=0;i<this.moviesLimit;i++)o[i]=i+1;o=o.slice(e,s),Object.values(o).map(t=>{this.endCount=t,this.button=o}),this.count++}}}},k=A,N=(s("095a"),Object(d["a"])(k,F,S,!1,null,null,null)),R=N.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loader-wrapper"},[s("span",{staticClass:"loader"})])}],B={computed:{...Object(r["c"])(["Loaded"])}},V=B,q=(s("9c79"),Object(d["a"])(V,T,D,!1,null,"c1fd36ac",null)),z=q.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-navbar",{staticClass:"navbar",attrs:{toggleable:"lg",type:"dark",variant:"info"}},[s("B-container",{},[s("b-navbar-brand",{attrs:{href:"#"}},[s("ul",{staticClass:"list-title"},[s("li",{staticClass:"letter"},[t._v("M")]),s("li",{staticClass:"letter"},[t._v("O")]),s("li",{staticClass:"letter"},[t._v("V")]),s("li",{staticClass:"letter"},[t._v("I")]),s("li",{staticClass:"letter"},[t._v("E")]),s("li",{staticClass:"letter"},[t._v("S")])])]),s("b-nav-form",[s("b-form-input",{staticClass:"mr-sm-2 search-input",attrs:{size:"sm",placeholder:"Search"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),s("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"},on:{click:function(e){return t.search(t.input)}}},[t._v("Search")])],1)],1)],1)],1)},H=[],Y={name:"HeaderApp",data(){return{input:""}},methods:{search(t){this.$emit("onSearch",t)}}},U=Y,W=(s("780a"),Object(d["a"])(U,G,H,!1,null,"1596aec9",null)),J=W.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{color:"#fff"}})},Q=[],X={name:"notifications",computed:{...Object(r["c"])(["loadMesseges"])},methods:{showNotifyMessage({msg:t,title:e,variant:s}){this.$bvToast.toast(t,{title:e,variant:s})}},watch:{loadMesseges:"showNotifyMessage"}},Z=X,tt=Object(d["a"])(Z,K,Q,!1,null,null,null),et=tt.exports,st={components:{MoviesList:w,MoviesBg:$,PaginationMovies:R,LoaderApp:z,HeaderApp:J,Notification:et},mounted(){this.changeCurrentPage(Number(this.$route.query.page)||1),this.moviesFetch()},computed:{...Object(r["c"])(["moviesList","moviesPerPages","currentPage","moviesLimit","Loaded","listPagination"])},methods:{...Object(r["b"])(["moviesFetch","changeCurrentPage","searchMovie"]),onChangePage(t){this.$router.push({query:{page:t}}).catch(()=>{}),this.changeCurrentPage(t),this.moviesFetch()},search(t){this.searchMovie(t),t?this.$router.push({query:{input:t}}).catch(()=>{}):this.moviesFetch()}}},ot=st,it=(s("034f"),Object(d["a"])(ot,i,a,!1,null,null,null)),at=it.exports,rt=(s("d9e2"),s("bc3a")),nt=s.n(rt);function ct(t){const e=t.params||{};return t.params=Object.assign(e,{apikey:"a8570df7",plot:"full"}),t}function lt(t){return t.data}var ut=function(t){t.interceptors.request.use(ct),t.interceptors.response.use(lt)};const mt=nt.a.create({baseURL:"http://www.omdbapi.com/"});ut(mt);var vt=mt,dt=["tt0111161","tt0068646","tt0071562","tt0468569","tt0050083","tt0108052","tt0167260","tt0110912","tt0060196","tt0137523","tt0120737","tt0109830","tt0080684","tt1375666","tt0167261","tt0073486","tt0099685","tt0133093","tt0047478","tt0114369","tt0317248","tt0076759","tt0102926","tt0038650","tt0118799","tt4633694","tt0114814","tt0245429","tt0120815","tt0110413","tt0120689","tt0816692","tt0054215","tt0120586","tt0021749","tt0064116","tt0034583","tt0027977","tt0253474","tt1675434","tt0407887","tt0088763","tt0103064","tt2582802","tt0047396","tt0082971","tt0110357","tt0172495","tt0482571","tt0078788","tt0209144","tt0078748","tt0095765","tt0032553","tt0095327","tt0043014","tt0405094","tt0057012","tt4154756","tt0050825","tt0081505","tt1853728","tt0910970","tt0119698","tt0051201","tt0364569","tt1345836","tt0169547","tt0090605","tt0087843","tt2380307","tt0082096","tt0033467","tt0112573","tt0052357","tt0053125","tt0105236","tt0086190","tt5311514","tt0022100","tt0086879","tt5074352","tt0180093","tt0986264","tt0056172","tt1187043","tt0338013","tt0062622","tt0066921","tt0114709","tt0211915","tt0036775","tt0045152","tt0075314","tt0361748","tt0093058","tt0040522","tt0056592","tt0012349","tt0070735","tt0119217","tt0435761","tt2106476","tt0208092","tt0086250","tt0071853","tt0059578","tt0053604","tt0017136","tt0119488","tt1832382","tt0097576","tt0042876","tt1049413","tt0042192","tt0372784","tt0055630","tt0053291","tt0105695","tt0363163","tt0095016","tt0040897","tt0113277","tt8108198","tt0044741","tt1255953","tt0081398","tt0057115","tt0118849","tt0457430","tt0476735","tt0071315","tt0041959","tt0096283","tt0347149","tt0089881","tt0055031","tt1305806","tt0015864","tt0050212","tt0268978","tt1727824","tt0120735","tt0112641","tt0047296","tt5027774","tt0050976","tt2096673","tt0080678","tt0993846","tt3170832","tt0434409","tt0031679","tt1291584","tt0083658","tt0046912","tt0050986","tt0017925","tt0477348","tt0117951","tt0469494","tt0167404","tt0031381","tt0084787","tt0116282","tt1205489","tt0077416","tt0266543","tt0091251","tt0015324","tt0118715","tt1130884","tt0266697","tt0061512","tt0032976","tt0046438","tt0978762","tt2119532","tt2267998","tt0892769","tt0018455","tt3011894","tt0107290","tt0758758","tt0120382","tt0107207","tt2278388","tt0025316","tt0079470","tt0092005","tt0091763","tt0079944","tt0116231","tt0074958","tt0353969","tt0060827","tt0052618","tt0395169","tt2024544","tt0405159","tt0060107","tt0019254","tt0046268","tt0112471","tt1979320","tt1392190","tt0053198","tt1392214","tt1028532","tt1895587","tt3315342","tt0245712","tt0405508","tt0093779","tt0264464","tt0087544","tt1201607","tt0064115","tt0075148","tt0072684","tt0198781","tt0032551","tt0033870","tt0097165","tt0088247","tt0246578","tt0083987","tt0046911","tt0113247","tt0107048","tt0050783","tt0032138","tt0118694","tt0073195","tt1454029","tt4016934","tt2991224","tt4430212","tt0056443","tt0381681","tt0070510","tt0087884","tt0092067","tt1954470","tt0036868","tt0083922","tt2338151","tt2015381","tt0169102","tt0056801"],ht={MOVIES:"MOVIES",PAGINATION_MOVIES:"PAGINATION_MOVIES",LOADER:"LOADER",REMOVE:"REMOVE",SEARCH:"SEARCH",NOTIFY:"NOTIFY"};function ft(t){return t.reduce((t,e)=>(t[e.imdbID]=e,t),{})}const{MOVIES:pt,PAGINATION_MOVIES:gt,REMOVE:bt,SEARCH:_t}=ht,Pt={state:{paginationItem:!1,bgPoster:null,moviesTop:dt,currentPage:1,moviesPerPages:12,movies:{},searchMovie:"",error:null},getters:{listPagination:({paginationItem:t})=>t,moviesList:({movies:t})=>t,slicePage:({moviesTop:t})=>(e,s)=>t.slice(e,s),currentPage:({currentPage:t})=>t,moviesPerPages:({moviesPerPages:t})=>t,moviesLimit:({moviesTop:t})=>Math.round(Object.keys(t).length/12)},mutations:{[pt](t,e){t.movies=e,t.paginationItem=!0,t.error=null},[gt](t,e){t.currentPage=e},[bt](t,e){t.moviesTop=t.moviesTop.filter(t=>t!=e.id)},[_t](t,e){t.searchMovie=e,t.error=null},onChangePoster(t,e){t.bgPoster=e}},actions:{async moviesFetch({getters:t,commit:e,state:s}){try{this.dispatch("togglLoader",!0);const{currentPage:s,moviesPerPages:o,slicePage:i}=t,a=s*o-o,r=s*o,n=i(a,r),c=n.map(t=>vt.get("/",{params:{i:""+t}})),l=await Promise.all(c),u=ft(l);e(pt,u)}catch(o){s.error=o.message+" !"}finally{this.dispatch("togglLoader",!1)}},changePoster(t,e){try{t.commit("onChangePoster",e)}catch(s){return s}},changeCurrentPage(t,e){try{t.commit(gt,e)}catch(s){return s}},removeItemMovie(t,e){t.commit(bt,e)},async searchMovie(t,e){try{this.dispatch("togglLoader",!0);const o=await vt.get("/?s="+e);if(!o.Search)throw Error(o.Error);o.Search.map(t=>{if("N/A"==t.Poster)return t.Poster=s("ef6a")});const i=ft(o.Search);t.commit(_t,i),t.commit(pt,i),this.dispatch("showMesseges",{msg:"Found a movie "+e.toUpperCase(),title:"movie succses",variant:"success"})}catch(o){this.dispatch("showMesseges",{msg:o.message,title:"The movie was not found",variant:"danger"})}finally{this.dispatch("togglLoader",!1)}}}};var Ct=Pt;const{LOADER:Mt}=ht,yt={state:{spinner:!0},getters:{Loaded:({spinner:t})=>t},mutations:{[Mt](t,e){t.spinner=e}},actions:{togglLoader(t,e){t.commit("LOADER",e)}}};var It=yt;const{NOTIFY:wt}=ht,Ot={state:{messages:[]},getters:{loadMesseges:({messages:t})=>t[t.length-1]},mutations:{[wt](t,e){t.messages.push(e)}},actions:{showMesseges(t,e){t.commit(wt,e)}}};var jt=Ot;o["default"].use(r["a"]);var Et=new r["a"].Store({state:{},mutations:{},actions:{},modules:{movies:Ct,loader:It,notify:jt}}),Lt=s("8c4f");o["default"].use(Lt["a"]);const xt=[{path:"/",name:"paginations",component:R}],$t=new Lt["a"]({routes:xt});var Ft=$t,St=s("5f5b"),At=s("b1e0");s("f9e3"),s("2dd8");o["default"].use(St["a"]),o["default"].use(At["a"]),o["default"].config.productionTip=!1,new o["default"]({router:Ft,store:Et,render:t=>t(at)}).$mount("#app")},7620:function(t,e,s){},"780a":function(t,e,s){"use strict";s("4cfc")},"85ec":function(t,e,s){},"8de8":function(t,e,s){"use strict";s("fe94")},"9c79":function(t,e,s){"use strict";s("7620")},b44f:function(t,e,s){"use strict";s("354a")},db3d:function(t,e,s){"use strict";s("234a")},eec6:function(t,e,s){"use strict";s("fbce")},ef6a:function(t,e,s){t.exports=s.p+"img/notFound.bf934f18.jpg"},fbce:function(t,e,s){},fe94:function(t,e,s){},fea5:function(t,e,s){}});
//# sourceMappingURL=app.cd4aadfa.js.map