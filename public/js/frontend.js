"use strict";(self.webpackChunkwp_serverless_grid=self.webpackChunkwp_serverless_grid||[]).push([[568],{1403:function(e,t,n){Object.defineProperty(t,"X",{value:!0});var r=n(311);t.Z=(0,r.defineComponent)({name:"AppOne"})},9860:function(e,t,n){t.s=void 0;var r=n(311),o={class:"main-wrapper"};t.s=function(e,t,n,a,l,s){var i=(0,r.resolveComponent)("router-view");return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[((0,r.openBlock)(),(0,r.createBlock)(i,{key:e.$route.path}))])}},1372:function(e,t,n){var r=function(e){return e&&e.__esModule?e:{default:e}};var o=n(311),a=r(n(8154)),l=r(n(4554));n(4498);var s=r(n(2346)),i=(0,r(n(5859)).default)(window),c=(0,o.createApp)(a.default);c.config.globalProperties.$win=i,(0,r(n(4589)).default)(c),c.use(l.default).use(s.default,i.$appConfig.axios),c.mount("#vue-frontend-app")},4554:function(e,t,n){var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(2119),a=[{path:"/",component:r(n(404)).default}],l=(0,o.createRouter)({history:(0,o.createWebHashHistory)(),routes:a});t.default=l},1043:function(e,t,n){var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(9669)).default.create({baseURL:"/",withCredentials:!1,headers:{Accept:"application/json; charset=utf-8","Content-Type":"application/json; charset=utf-8","X-Requested-With":"XMLHttpRequest"}});o.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",o.interceptors.response.use((function(e){return e.headers["X-WP-Nonce"]&&(window.$appConfig.nonce=e.headers["X-WP-Nonce"]),e})),o.interceptors.request.use((function(e){return e.headers["X-WP-Nonce"]=window.$appConfig.nonce,e})),t.default=o},5859:function(e,t,n){var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(1043)),a=r(n(3279));t.default=function(e){return e.$appConfig={},e.$appConfig.axios=o.default,e.$appConfig.debounce=a.default,e}},4498:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(5859),n(1043)},3153:function(e,t,n){var r=n(5318);Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var o=r(n(7757)),a=r(n(8926));n(1539),n(4747),n(9600),n(6699),n(2023),n(4916),n(4765),n(8674),n(7941),n(2707),n(2222);var l=n(311),s=r(n(3633)),i=(0,l.defineComponent)({components:{Multiselect:s.default},setup:function(e,t){var n=(0,l.reactive)({categories:[],cuisines:[],cookm:0,prepm:0,totalm:0}),r=(0,l.ref)([]);return{dsSearch:(0,l.ref)(""),recipes:r,filters:n,categories:(0,l.ref)({}),cuisines:(0,l.ref)({}),recipeTimes:[{text:"Please select one",value:0},{text:"< 15 minutes",value:14},{text:"< 30 minutes",value:29},{text:"< 60 minutes",value:59},{text:">= 60 minutes",value:60}]}},methods:{getCourses:function(e){var t=this;if(e.length<=0)return"";var n=[];return e.forEach((function(e){n.push(t.categories[e])})),"Course "+n.join(", ")},filterByUrl:function(){this.$route.query.category&&this.filters.categories.push(this.$route.query.category),this.$route.query.s&&(this.dsSearch=this.$route.query.s)},filterCategories:function(e){return this.filters.categories.length<=0||this.filters.categories.some((function(t){return e.includes(t)}))},filterCuisines:function(e){return this.filters.cuisines.length<=0||this.filters.cuisines.some((function(t){return e.includes(t)}))},filterPrepTime:function(e){return this.filterTime(e,this.filters.prepm)},filterCookTime:function(e){return this.filterTime(e,this.filters.cookm)},filterTotalTime:function(e){return this.filterTime(e,this.filters.totalm)},filterTime:function(e,t){if(t<=0)return!0;var n=parseInt(e);return t<60?n<=t:n>=60},clearFilters:function(){this.filters.categories.length=0,this.filters.cuisines.length=0,this.filters.cookm=0,this.filters.prepm=0,this.filters.totalm=0},doLoad:function(){var e=this;this.handleSearch=this.$win.$appConfig.debounce((function(t){e.$refs.myds.search(t)}),300),(0,l.watchEffect)((function(){e.handleSearch(e.dsSearch)}));var t=this.$win.vue_wp_plugin_config_frontend.taxonomies,n=t.wprm_course,r=t.wprm_cuisine;n.forEach((function(t){e.categories[t.value]=t.text})),r.forEach((function(t){e.cuisines[t.value]=t.text})),fetch(this.$win.vue_wp_plugin_config_frontend.indexFileUrl).then((function(e){return e.json()})).then((function(t){var n=[],r=[];Object.keys(t).forEach((function(e){var o=t[e];o.img?n.push(o):r.push(o)}));n.sort((function(e,t){var n=e.title,r=t.title;return(n>r)-(r>n)})),r.sort((function(e,t){var n=e.title,r=t.title;return(n>r)-(r>n)})),e.recipes=n.concat(r),e.filterByUrl()}))}},beforeMount:function(){var e=this;e.$win&&e.$win.vue_wp_plugin_config_admin?e.doLoad():document.onreadystatechange=(0,a.default)(o.default.mark((function t(){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"complete"==document.readyState&&e.doLoad();case 1:case"end":return t.stop()}}),t)})))}});t.Z=i},521:function(e,t,n){t.s=function(e,t,n,Z,R,W){var H=(0,r.resolveComponent)("Multiselect"),A=(0,r.resolveComponent)("dataset-info"),z=(0,r.resolveComponent)("dataset-item"),G=(0,r.resolveComponent)("dataset-pager"),J=(0,r.resolveComponent)("dataset");return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("div",a,[l,(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("div",i,[c,(0,r.createVNode)(H,{modelValue:e.filters.categories,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.filters.categories=t}),mode:"tags",searchable:!0,"close-on-select":!1,"create-option":!0,options:e.categories},null,8,["modelValue","options"])]),(0,r.createElementVNode)("div",u,[d,(0,r.createVNode)(H,{modelValue:e.filters.cuisines,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.filters.cuisines=t}),mode:"tags",searchable:!0,"close-on-select":!1,"create-option":!0,options:e.cuisines},null,8,["modelValue","options"])]),(0,r.createElementVNode)("div",f,[m,(0,r.withDirectives)((0,r.createElementVNode)("select",{class:"form-select","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.filters.prepm=t})},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.recipeTimes,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("option",{value:e.value},(0,r.toDisplayString)(e.text),9,p)})),256))],512),[[r.vModelSelect,e.filters.prepm]])]),(0,r.createElementVNode)("div",h,[v,(0,r.withDirectives)((0,r.createElementVNode)("select",{class:"form-select","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.filters.cookm=t})},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.recipeTimes,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("option",{value:e.value},(0,r.toDisplayString)(e.text),9,g)})),256))],512),[[r.vModelSelect,e.filters.cookm]])]),(0,r.createElementVNode)("div",w,[V,(0,r.withDirectives)((0,r.createElementVNode)("select",{class:"form-select","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.filters.totalm=t})},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.recipeTimes,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("option",{value:e.value},(0,r.toDisplayString)(e.text),9,E)})),256))],512),[[r.vModelSelect,e.filters.totalm]])]),(0,r.createElementVNode)("div",N,[_,(0,r.createElementVNode)("button",{type:"button",class:"btn btn-outline-primary",onClick:t[5]||(t[5]=function(){return e.clearFilters&&e.clearFilters.apply(e,arguments)})},"Clear all filters")])])]),(0,r.createVNode)(J,{"ds-data":e.recipes,"ds-filter-fields":{wprm_course:e.filterCategories,wprm_cuisine:e.filterCuisines,wprm_cook_time:e.filterCookTime,wprm_prep_time:e.filterPrepTime,wprm_total_time:e.filterTotalTime},"ds-search-in":["title","cnt"],ref:"myds"},{default:(0,r.withCtx)((function(n){var o=n.ds;return[(0,r.createElementVNode)("div",{class:"row","data-page-count":o.dsPagecount},[(0,r.createElementVNode)("div",b,[x,k,(0,r.createVNode)(A,{class:"mb-2 mb-md-0"})]),(0,r.createElementVNode)("div",C,[(0,r.createElementVNode)("div",T,[(0,r.withDirectives)((0,r.createElementVNode)("input",{name:"searchInput",id:"searchInput",type:"text",placeholder:"Type to search...",class:"form-control","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.dsSearch=t})},null,512),[[r.vModelText,e.dsSearch]]),D])])],8,y),B,(0,r.createVNode)(z,{class:"row search-font",style:{"overflow-y":"auto","max-height":"600px"}},{default:(0,r.withCtx)((function(t){var n=t.row;t.rowIndex;return[(0,r.createElementVNode)("a",{class:"recipe-item scale-down col-sm-12 col-md-6 col-lg-4",href:n.src,title:n.title},[(0,r.createElementVNode)("div",S,[(0,r.createElementVNode)("div",$,[(0,r.createElementVNode)("img",{src:n.img?"https://www.ucook.com/"+n.img:"https://www.ucook.com/wp-content/uploads/2021/05/UCook-official-logo.png",class:"card-img-top",alt:n.title},null,8,P)]),(0,r.createElementVNode)("div",j,[(0,r.createElementVNode)("div",O,[(0,r.createElementVNode)("h5",U,(0,r.toDisplayString)(n.title),1)]),(0,r.createElementVNode)("div",X,[(0,r.createElementVNode)("p",q,(0,r.toDisplayString)(e.getCourses(n.wprm_course)),1)])])])],8,M)]})),noDataFound:(0,r.withCtx)((function(){return[F]})),_:1}),I,(0,r.createElementVNode)("div",L,[(0,r.createVNode)(A,{class:"mb-2 mb-md-0"}),(0,r.createVNode)(G)])]})),_:1},8,["ds-data","ds-filter-fields"])])};var r=n(311),o={class:"app-home"},a={class:"row filter-font"},l=(0,r.createElementVNode)("h3",null,"Filters",-1),s={class:"row"},i={class:"col-md-6 mb-3"},c=(0,r.createElementVNode)("label",{style:{"text-transform":"uppercase"}},"Category",-1),u={class:"col-md-6 mb-3"},d=(0,r.createElementVNode)("label",{style:{"text-transform":"uppercase"}},"Cuisines",-1),f={class:"col-md-3 mb-3"},m=(0,r.createElementVNode)("label",{style:{"text-transform":"uppercase"}},"Preparation Time (minutes)",-1),p=["value"],h={class:"col-md-3 mb-3"},v=(0,r.createElementVNode)("label",{style:{"text-transform":"uppercase"}},"Cook Time (minutes)",-1),g=["value"],w={class:"col-md-3 mb-3"},V=(0,r.createElementVNode)("label",{style:{"text-transform":"uppercase"}},"Total Time (minutes)",-1),E=["value"],N={class:"col-md-3 mb-3"},_=(0,r.createElementVNode)("br",null,null,-1),y=["data-page-count"],b={class:"col-md-6 search-font"},x=(0,r.createElementVNode)("br",null,null,-1),k=(0,r.createElementVNode)("br",null,null,-1),C={class:"col-md-6"},T={class:"form-floating"},D=(0,r.createElementVNode)("label",{for:"searchInput"},"Type to search...",-1),B=(0,r.createElementVNode)("hr",null,null,-1),M=["href","title"],S={class:"card",style:{}},$={style:{"margin-bottom":"20px"}},P=["src","alt"],j={class:"card-body"},O={class:"cut-off-2",style:{"margin-bottom":"20px"}},U={class:"card-title"},X={class:"cut-off-2",style:{"margin-bottom":"20px"}},q={class:"card-text text-truncate"},F=(0,r.createElementVNode)("div",{class:"col-md-12 search-font"},[(0,r.createElementVNode)("p",{class:"text-center"},"No results found")],-1),I=(0,r.createElementVNode)("hr",null,null,-1),L={class:"d-flex flex-md-row flex-column justify-content-between align-items-center search-font",style:{"text-decoration":"none !important"}}},4589:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.component("Dataset",r.Dataset),e.component("DatasetItem",r.DatasetItem),e.component("DatasetInfo",r.DatasetInfo),e.component("DatasetPager",r.DatasetPager),e.component("DatasetSearch",r.DatasetSearch),e.component("DatasetShow",r.DatasetShow)};var r=n(3570)},8154:function(e,t,n){n.r(t),n.d(t,{__esModule:function(){return o.X},default:function(){return a}});var r=n(9860),o=n(1403);var a=(0,n(3744).Z)(o.Z,[["render",r.s]])},404:function(e,t,n){n.r(t),n.d(t,{__esModule:function(){return o.X},default:function(){return a}});var r=n(521),o=n(3153);var a=(0,n(3744).Z)(o.Z,[["render",r.s]])},311:function(e){e.exports=Vue}},function(e){e.O(0,[898],(function(){return t=1372,e(e.s=t);var t}));e.O()}]);
//# sourceMappingURL=frontend.js.map