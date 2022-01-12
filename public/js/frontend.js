"use strict";(self.webpackChunkvue_wp_plugin_starter=self.webpackChunkvue_wp_plugin_starter||[]).push([[568],{1403:function(e,t,n){Object.defineProperty(t,"X",{value:!0});var r=n(311);t.Z=(0,r.defineComponent)({name:"AppOne"})},9860:function(e,t,n){t.s=void 0;var r=n(311),o={class:"main-wrapper"};t.s=function(e,t,n,s,i,l){var a=(0,r.resolveComponent)("router-view");return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[((0,r.openBlock)(),(0,r.createBlock)(a,{key:e.$route.path}))])}},1372:function(e,t,n){var r=function(e){return e&&e.__esModule?e:{default:e}};var o=n(311),s=r(n(8154)),i=r(n(4554));n(4498);var l=r(n(4589)),a=r(n(2346)),c=(0,r(n(5859)).default)(window),u=(0,o.createApp)(s.default);u.config.globalProperties.$win=c,(0,l.default)(u),u.use(i.default).use(a.default,c.$appConfig.axios),u.mount("#vue-frontend-app")},4554:function(e,t,n){var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(2119),s=[{path:"/",component:r(n(2798)).default}],i=(0,o.createRouter)({history:(0,o.createWebHashHistory)(),routes:s});t.default=i},1043:function(e,t,n){var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(9669)).default.create({baseURL:"/",withCredentials:!1,headers:{Accept:"application/json; charset=utf-8","Content-Type":"application/json; charset=utf-8","X-Requested-With":"XMLHttpRequest"}});o.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",o.interceptors.response.use((function(e){return e.headers["X-WP-Nonce"]&&(window.$appConfig.nonce=e.headers["X-WP-Nonce"]),e})),o.interceptors.request.use((function(e){return e.headers["X-WP-Nonce"]=window.$appConfig.nonce,e})),t.default=o},5859:function(e,t,n){var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(1043)),s=r(n(3279));t.default=function(e){return e.$appConfig={},e.$appConfig.axios=o.default,e.$appConfig.debounce=s.default,e}},4498:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(5859),n(1043)},3153:function(e,t,n){var r=n(5318);Object.defineProperty(t,"X",{value:!0}),t.Z=void 0,n(1539),n(6699),n(2023),n(4916),n(4765),n(4747),n(8674),n(7941),n(2707),n(2222);var o=n(311),s=r(n(3633)),i=(0,o.defineComponent)({components:{Multiselect:s.default},setup:function(e,t){var n=(0,o.reactive)({categories:[],cuisines:[],cookm:0,prepm:0,totalm:0}),r=(0,o.ref)([]);return{dsSearch:(0,o.ref)(""),recipes:r,filters:n,categories:(0,o.ref)({}),cuisines:(0,o.ref)({}),recipeTimes:[{text:"Please select one",value:0},{text:"< 15 minutes",value:14},{text:"< 30 minutes",value:29},{text:"< 60 minutes",value:59},{text:">= 60 minutes",value:60}]}},methods:{filterByUrl:function(){this.$route.query.category&&this.filters.categories.push(this.$route.query.category),this.$route.query.s&&(this.dsSearch=this.$route.query.s)},filterCategories:function(e){return this.filters.categories.length<=0||this.filters.categories.some((function(t){return e.includes(t)}))},filterCuisines:function(e){return this.filters.cuisines.length<=0||this.filters.cuisines.some((function(t){return e.includes(t)}))},filterPrepTime:function(e){return this.filterTime(e,this.filters.prepm)},filterCookTime:function(e){return this.filterTime(e,this.filters.cookm)},filterTotalTime:function(e){return this.filterTime(e,this.filters.totalm)},filterTime:function(e,t){if(t<=0)return!0;var n=parseInt(e);return t<60?n<=t:n>=60},clearFilters:function(){this.filters.categories.length=0,this.filters.cuisines.length=0,this.filters.cookm=0,this.filters.prepm=0,this.filters.totalm=0}},beforeCreate:function(){var e=this;document.onreadystatechange=function(){if("complete"==document.readyState){e.handleSearch=e.$win.$appConfig.debounce((function(t){e.$refs.myds.search(t)}),300),(0,o.watchEffect)((function(){e.handleSearch(e.dsSearch)}));var t=e.$win.vue_wp_plugin_config.taxonomies,n=t.wprm_course,r=t.wprm_cuisine;n.forEach((function(t){e.categories[t.value]=t.text})),r.forEach((function(t){e.cuisines[t.value]=t.text})),fetch(e.$win.vue_wp_plugin_config.indexFileUrl).then((function(e){return e.json()})).then((function(t){var n=[],r=[];Object.keys(t).forEach((function(e){var o=t[e];o.img?n.push(o):r.push(o)}));n.sort((function(e,t){var n=e.title,r=t.title;return(n>r)-(r>n)})),r.sort((function(e,t){var n=e.title,r=t.title;return(n>r)-(r>n)})),e.recipes=n.concat(r),e.filterByUrl()}))}}}});t.Z=i},3320:function(e,t,n){t.s=function(e,t,n,U,O,X){var Z=(0,r.resolveComponent)("Multiselect"),R=(0,r.resolveComponent)("dataset-info"),L=(0,r.resolveComponent)("dataset-item"),W=(0,r.resolveComponent)("dataset-pager"),H=(0,r.resolveComponent)("dataset");return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("div",s,[i,(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("div",a,[c,(0,r.createVNode)(Z,{modelValue:e.filters.categories,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.filters.categories=t}),mode:"tags",searchable:!0,"close-on-select":!1,"create-option":!0,options:e.categories},null,8,["modelValue","options"])]),(0,r.createElementVNode)("div",u,[m,(0,r.createVNode)(Z,{modelValue:e.filters.cuisines,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.filters.cuisines=t}),mode:"tags",searchable:!0,"close-on-select":!1,"create-option":!0,options:e.cuisines},null,8,["modelValue","options"])]),(0,r.createElementVNode)("div",d,[f,(0,r.withDirectives)((0,r.createElementVNode)("select",{class:"form-select","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.filters.prepm=t})},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.recipeTimes,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("option",{value:e.value},(0,r.toDisplayString)(e.text),9,p)})),256))],512),[[r.vModelSelect,e.filters.prepm]])]),(0,r.createElementVNode)("div",h,[v,(0,r.withDirectives)((0,r.createElementVNode)("select",{class:"form-select","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.filters.cookm=t})},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.recipeTimes,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("option",{value:e.value},(0,r.toDisplayString)(e.text),9,g)})),256))],512),[[r.vModelSelect,e.filters.cookm]])]),(0,r.createElementVNode)("div",w,[b,(0,r.withDirectives)((0,r.createElementVNode)("select",{class:"form-select","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.filters.totalm=t})},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.recipeTimes,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("option",{value:e.value},(0,r.toDisplayString)(e.text),9,C)})),256))],512),[[r.vModelSelect,e.filters.totalm]])]),(0,r.createElementVNode)("div",x,[y,(0,r.createElementVNode)("button",{type:"button",class:"btn btn-outline-primary",onClick:t[5]||(t[5]=function(){return e.clearFilters&&e.clearFilters.apply(e,arguments)})},"Clear all filters")])])]),(0,r.createVNode)(H,{"ds-data":e.recipes,"ds-filter-fields":{wprm_course:e.filterCategories,wprm_cuisine:e.filterCuisines,wprm_cook_time:e.filterCookTime,wprm_prep_time:e.filterPrepTime,wprm_total_time:e.filterTotalTime},"ds-search-in":["title","cnt"],ref:"myds"},{default:(0,r.withCtx)((function(n){var o=n.ds;return[(0,r.createElementVNode)("div",{class:"row","data-page-count":o.dsPagecount},[(0,r.createElementVNode)("div",V,[A,_,(0,r.createVNode)(R,{class:"mb-2 mb-md-0"})]),(0,r.createElementVNode)("div",k,[(0,r.createElementVNode)("div",N,[(0,r.withDirectives)((0,r.createElementVNode)("input",{name:"searchInput",id:"searchInput",type:"text",placeholder:"Type to search...",class:"form-control","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.dsSearch=t})},null,512),[[r.vModelText,e.dsSearch]]),T])])],8,E),B,(0,r.createVNode)(L,{class:"row search-font",style:{"overflow-y":"auto","max-height":"600px"}},{default:(0,r.withCtx)((function(e){var t=e.row;e.rowIndex;return[(0,r.createElementVNode)("a",{class:"recipe-item scale-down col-sm-12 col-md-6 col-lg-4",href:t.src,title:t.title},[(0,r.createElementVNode)("div",$,[(0,r.createElementVNode)("img",{src:t.img?"https://www.ucook.com/"+t.img:"https://www.ucook.com/wp-content/uploads/2021/05/UCook-official-logo.png",class:"card-img-top",alt:t.title},null,8,D),(0,r.createElementVNode)("div",M,[(0,r.createElementVNode)("h5",P,(0,r.toDisplayString)(t.title),1),(0,r.createElementVNode)("p",F,(0,r.toDisplayString)(t.cnt),1)])])],8,S)]})),noDataFound:(0,r.withCtx)((function(){return[I]})),_:1}),q,(0,r.createElementVNode)("div",j,[(0,r.createVNode)(R,{class:"mb-2 mb-md-0"}),(0,r.createVNode)(W)])]})),_:1},8,["ds-data","ds-filter-fields"])])};var r=n(311),o={class:"app-home"},s={class:"row filter-font"},i=(0,r.createElementVNode)("h3",null,"Filters",-1),l={class:"row"},a={class:"col-md-6 mb-3"},c=(0,r.createElementVNode)("label",{style:{"text-transform":"uppercase"}},"Category",-1),u={class:"col-md-6 mb-3"},m=(0,r.createElementVNode)("label",{style:{"text-transform":"uppercase"}},"Cuisines",-1),d={class:"col-md-3 mb-3"},f=(0,r.createElementVNode)("label",{style:{"text-transform":"uppercase"}},"Preparation Time (minutes)",-1),p=["value"],h={class:"col-md-3 mb-3"},v=(0,r.createElementVNode)("label",{style:{"text-transform":"uppercase"}},"Cook Time (minutes)",-1),g=["value"],w={class:"col-md-3 mb-3"},b=(0,r.createElementVNode)("label",{style:{"text-transform":"uppercase"}},"Total Time (minutes)",-1),C=["value"],x={class:"col-md-3 mb-3"},y=(0,r.createElementVNode)("br",null,null,-1),E=["data-page-count"],V={class:"col-md-6 search-font"},A=(0,r.createElementVNode)("br",null,null,-1),_=(0,r.createElementVNode)("br",null,null,-1),k={class:"col-md-6"},N={class:"form-floating"},T=(0,r.createElementVNode)("label",{for:"searchInput"},"Type to search...",-1),B=(0,r.createElementVNode)("hr",null,null,-1),S=["href","title"],$={class:"card",style:{}},D=["src","alt"],M={class:"card-body"},P={class:"card-title"},F={class:"card-text text-truncate"},I=(0,r.createElementVNode)("div",{class:"col-md-12 search-font"},[(0,r.createElementVNode)("p",{class:"text-center"},"No results found")],-1),q=(0,r.createElementVNode)("hr",null,null,-1),j={class:"d-flex flex-md-row flex-column justify-content-between align-items-center search-font",style:{"text-decoration":"none !important"}}},4589:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.component("Dataset",r.Dataset),e.component("DatasetItem",r.DatasetItem),e.component("DatasetInfo",r.DatasetInfo),e.component("DatasetPager",r.DatasetPager),e.component("DatasetSearch",r.DatasetSearch),e.component("DatasetShow",r.DatasetShow)};var r=n(3570)},2778:function(e,t,n){var r=n(7897),o=n.n(r),s=n(1519),i=n.n(s)()(o());i.push([e.id,"a.recipe-item{transition:.2s ease-in;-webkit-transition:.2s ease-in}.card{-webkit-box-shadow:0 0 10px 0 rgba(0,0,0,.5);box-shadow:0 0 10px 0 rgba(0,0,0,.5);height:300px;margin-top:10px;overflow:hidden}.scale-down:hover{transform:scale(.95);-webkit-transform:scale(.95)}.app-home a{text-decoration:none!important}.search-font{font-size:16px;font-weight:400;line-height:1.5}.filter-font h3,.filter-font label{font-weight:700}.card-img-top{height:220px}.search-font .page-link{text-decoration:none!important}","",{version:3,sources:["webpack://./src/frontend/views/Home.vue"],names:[],mappings:"AAqPA,cACE,sBAAuB,CACvB,8BACF,CAEA,MACE,4CAAqC,CAArC,oCAAqC,CACrC,YAAa,CAEb,eAAe,CADf,eAEF,CAEA,kBACE,oBAAqB,CACrB,4BACF,CAEA,YACE,8BACF,CAEA,aACE,cAAe,CACf,eAAgB,CAChB,eACF,CAEA,mCACE,eACF,CAEA,cACE,YACF,CAEA,wBACE,8BACF",sourcesContent:['<template>\n  <div class="app-home">\n    <div class="row filter-font">\n      <h3>Filters</h3>\n      <div class="row">\n        <div class="col-md-6 mb-3">\n          <label style="text-transform: uppercase;">Category</label>\n          <Multiselect\n            v-model="filters.categories"\n            mode="tags"\n            :searchable="true"\n            :close-on-select="false"\n            :create-option="true"\n            :options="categories"\n          />\n        </div>\n        <div class="col-md-6 mb-3">\n          <label style="text-transform: uppercase;">Cuisines</label>\n          <Multiselect\n            v-model="filters.cuisines"\n            mode="tags"\n            :searchable="true"\n            :close-on-select="false"\n            :create-option="true"\n            :options="cuisines"\n          />\n        </div>\n        <div class="col-md-3 mb-3">\n          <label style="text-transform: uppercase;">Preparation Time (minutes)</label>\n          <select class="form-select" v-model="filters.prepm">\n            <option v-for="option in recipeTimes" :value="option.value">\n              {{ option.text }}\n            </option>\n          </select>\n        </div>\n        <div class="col-md-3 mb-3">\n          <label style="text-transform: uppercase;">Cook Time (minutes)</label>\n          <select class="form-select" v-model="filters.cookm">\n            <option v-for="option in recipeTimes" :value="option.value">\n              {{ option.text }}\n            </option>\n          </select>\n        </div>\n        <div class="col-md-3 mb-3">\n          <label style="text-transform: uppercase;">Total Time (minutes)</label>\n          <select class="form-select" v-model="filters.totalm">\n            <option v-for="option in recipeTimes" :value="option.value">\n              {{ option.text }}\n            </option>\n          </select>\n        </div>\n        <div class="col-md-3 mb-3">\n          <br /><button type="button" class="btn btn-outline-primary" @click="clearFilters">Clear all filters</button>\n        </div>\n      </div>\n    </div>\n    <dataset\n      v-slot="{ ds }"\n      :ds-data="recipes"\n      :ds-filter-fields="{ wprm_course: filterCategories, wprm_cuisine: filterCuisines, wprm_cook_time: filterCookTime, wprm_prep_time: filterPrepTime, wprm_total_time: filterTotalTime }"\n      :ds-search-in="[\'title\', \'cnt\']"\n      ref="myds"\n    >\n      <div class="row" :data-page-count="ds.dsPagecount">\n        <div class="col-md-6 search-font">\n          <br /><br />\n          <dataset-info class="mb-2 mb-md-0" />\n        </div>\n        <div class="col-md-6">\n          <div class="form-floating">\n            <input name="searchInput" id="searchInput" type="text" placeholder="Type to search..." class="form-control" v-model="dsSearch">\n            <label for="searchInput">Type to search...</label>\n          </div>\n        </div>\n      </div>\n      <hr />\n      <dataset-item class="row search-font" style="overflow-y: auto; max-height: 600px">\n        <template #default="{ row, rowIndex }">\n          <a class="recipe-item scale-down col-sm-12 col-md-6 col-lg-4" :href="row.src" :title="row.title">\n            <div class="card" style="">\n              <img :src="row.img ? \'https://www.ucook.com/\' + row.img : \'https://www.ucook.com/wp-content/uploads/2021/05/UCook-official-logo.png\'" class="card-img-top" :alt="row.title">\n              <div class="card-body">\n                <h5 class="card-title">{{ row.title }}</h5>\n                <p class="card-text text-truncate">{{ row.cnt }}</p>\n              </div>\n            </div>\n          </a>\n        </template>\n        <template #noDataFound>\n          <div class="col-md-12 search-font">\n            <p class="text-center">No results found</p>\n          </div>\n        </template>\n      </dataset-item>\n      <hr />\n      <div class="d-flex flex-md-row flex-column justify-content-between align-items-center search-font" style="text-decoration: none !important">\n        <dataset-info class="mb-2 mb-md-0" />\n        <dataset-pager />\n      </div>\n    </dataset>\n  </div>\n</template>\n\n<script>\nimport { defineComponent, reactive, ref, watchEffect } from \'vue\'\nimport Multiselect from \'@vueform/multiselect\'\n\n\nexport default defineComponent({\n  components: {\n    Multiselect\n  },\n  setup(props, context) {\n    const filters = reactive({ categories: [], cuisines: [], cookm: 0, prepm: 0, totalm: 0 })\n    const recipes = ref([])\n    const dsSearch = ref(\'\')\n\n    return {\n      dsSearch,\n      recipes,\n      filters,\n      categories: ref({}),\n      cuisines: ref({}),\n      recipeTimes: [\n        { text: \'Please select one\', value: 0 },\n        { text: \'< 15 minutes\', value: 14 },\n        { text: \'< 30 minutes\', value: 29 },\n        { text: \'< 60 minutes\', value: 59 },\n        { text: \'>= 60 minutes\', value: 60 }\n      ]\n    }\n  },\n  methods: {\n    filterByUrl() {\n      if (this.$route.query.category) {\n        this.filters.categories.push(this.$route.query.category)\n      }\n\n      if (this.$route.query.s) {\n        this.dsSearch = this.$route.query.s\n      }\n    },\n    filterCategories(value) {\n      if (this.filters.categories.length <= 0) {\n        return true\n      }\n\n      return this.filters.categories.some(r => value.includes(r))\n    },\n    filterCuisines(value) {\n      if (this.filters.cuisines.length <= 0) {\n        return true\n      }\n\n      return this.filters.cuisines.some(r => value.includes(r))\n    },\n    filterPrepTime(value) {\n      return this.filterTime(value, this.filters.prepm)\n    },\n    filterCookTime(value) {\n      return this.filterTime(value, this.filters.cookm)\n    },\n    filterTotalTime(value) {\n      return this.filterTime(value, this.filters.totalm)\n    },\n    filterTime(value, selectedValue) {\n      if (selectedValue <= 0) {\n        return true\n      }\n\n      const intVal = parseInt(value)\n      if (selectedValue < 60) {\n        return intVal <= selectedValue\n      } else {\n        return intVal >= 60\n      }\n    },\n    clearFilters() {\n      this.filters.categories.length = 0\n      this.filters.cuisines.length = 0\n      this.filters.cookm = 0\n      this.filters.prepm = 0\n      this.filters.totalm = 0\n    }\n  },\n  beforeCreate() {\n    document.onreadystatechange = () => {\n      if (document.readyState == "complete") {\n        this.handleSearch = this.$win.$appConfig.debounce((value) => {\n          this.$refs.myds.search(value)\n        }, 300)\n\n        watchEffect(() => {\n          this.handleSearch(this.dsSearch)\n        })\n\n        const tax = this.$win.vue_wp_plugin_config.taxonomies\n        const courses = tax[\'wprm_course\']\n        const cuisines = tax[\'wprm_cuisine\']\n        courses.forEach((item) => {\n          this.categories[item.value] = item.text\n        })\n        cuisines.forEach((item) => {\n          this.cuisines[item.value] = item.text\n        })\n\n        fetch(this.$win.vue_wp_plugin_config.indexFileUrl)\n          .then(response => response.json())\n          .then(recipes => {\n            const hasImage = []\n            const noImage = []\n            const items = Object.keys(recipes).forEach((key) => {\n              const item = recipes[key]\n              if (item.img) {\n                hasImage.push(item)\n              } else {\n                noImage.push(item)\n              }\n            })\n\n            // sort by title asc\n            hasImage.sort(function(x, y) {\n              let a = x.title, b = y.title\n\n              return ((a > b) - (b > a))\n            });\n            noImage.sort(function(x, y) {\n              let a = x.title, b = y.title\n\n              return ((a > b) - (b > a))\n            });\n\n            this.recipes = hasImage.concat(noImage)\n\n            // auto filter by url\n            this.filterByUrl()\n          })\n      }\n    }\n  }\n})\n<\/script>\n\n\x3c!-- Add "scoped" attribute to limit CSS to this component only --\x3e\n<style>\na.recipe-item {\n  transition: .2s ease-in;\n  -webkit-transition: .2s ease-in;\n}\n\n.card {\n  box-shadow: 0 0 10px 0 rgba(0,0,0,.5);\n  height: 300px;\n  overflow: hidden;\n  margin-top: 10px\n}\n\n.scale-down:hover {\n  transform: scale(.95);\n  -webkit-transform: scale(.95);\n}\n\n.app-home a {\n  text-decoration: none !important;\n}\n\n.search-font {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n}\n\n.filter-font label, .filter-font h3 {\n  font-weight: bold;\n}\n\n.card-img-top {\n  height: 220px;\n}\n\n.search-font .page-link {\n  text-decoration: none !important;\n}\n</style>\n\n<style src="@vueform/multiselect/themes/default.css"></style>\n'],sourceRoot:""}]),t.Z=i},8154:function(e,t,n){n.r(t),n.d(t,{__esModule:function(){return o.X},default:function(){return s}});var r=n(9860),o=n(1403);var s=(0,n(3744).Z)(o.Z,[["render",r.s]])},2798:function(e,t,n){n.r(t),n.d(t,{__esModule:function(){return o.X},default:function(){return c}});var r=n(3320),o=n(3153),s=n(3379),i=n.n(s),l=n(2778),a={insert:"head",singleton:!1};i()(l.Z,a),l.Z.locals,n(1280);var c=(0,n(3744).Z)(o.Z,[["render",r.s]])},311:function(e){e.exports=Vue}},function(e){e.O(0,[898],(function(){return t=1372,e(e.s=t);var t}));e.O()}]);
//# sourceMappingURL=frontend.js.map