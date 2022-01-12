"use strict";(self.webpackChunkvue_wp_plugin_starter=self.webpackChunkvue_wp_plugin_starter||[]).push([[467],{2277:function(e,t,n){var o=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"X",{value:!0});var a=n(311),i=o(n(5097));t.Z=(0,a.defineComponent)({mounted:function(){(0,i.default)("vue-app")}})},9154:function(e,t,n){t.s=void 0;var o=n(311),a=(0,o.createElementVNode)("h3",null,"Backend App",-1),i={class:"main-wrapper"};t.s=function(e,t,n,r,l,s){var p=(0,o.resolveComponent)("router-view");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[a,(0,o.createElementVNode)("div",i,[((0,o.openBlock)(),(0,o.createBlock)(p,{key:e.$route.path}))])],64)}},81:function(e,t,n){var o=function(e){return e&&e.__esModule?e:{default:e}};var a=n(311),i=o(n(6003)),r=o(n(5915)),l=o(n(2346)),s=(0,o(n(5859)).default)(window),p=(0,a.createApp)(i.default);p.config.globalProperties.$win=s,p.use(r.default).use(l.default,s.$appConfig.axios),p.mount("#vue-admin-app")},5915:function(e,t,n){var o=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(2119),i=o(n(8745)),r=o(n(3269)),l=[{path:"/",component:i.default},{path:"/settings",component:r.default}],s=(0,a.createRouter)({history:(0,a.createWebHashHistory)(),routes:l});t.default=s},1043:function(e,t,n){var o=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(9669)).default.create({baseURL:"/",withCredentials:!1,headers:{Accept:"application/json; charset=utf-8","Content-Type":"application/json; charset=utf-8","X-Requested-With":"XMLHttpRequest"}});a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",a.interceptors.response.use((function(e){return e.headers["X-WP-Nonce"]&&(window.$appConfig.nonce=e.headers["X-WP-Nonce"]),e})),a.interceptors.request.use((function(e){return e.headers["X-WP-Nonce"]=window.$appConfig.nonce,e})),t.default=a},5859:function(e,t,n){var o=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(1043));t.default=function(e){return e.$appConfig={},e.$appConfig.axios=a.default,e}},6505:function(e,t,n){Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var o=(0,n(311).defineComponent)({name:"Dashboard",props:{msg:{type:String,required:!1,default:"Welcome to Your Vue.js Backend App"}}});t.Z=o},4561:function(e,t,n){Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var o=(0,n(311).defineComponent)({name:"Settings",data:function(){return{}},methods:{goto:function(){document.querySelector("#scrollspyHeading2").scrollIntoView({behavior:"smooth"})}}});t.Z=o},2374:function(e,t,n){t.s=function(e,t,n,i,r,l){return(0,o.openBlock)(),(0,o.createElementBlock)("div",a,[(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(e.msg),1)])};var o=n(311),a={class:"app-dashboard"}},8607:function(e,t,n){t.s=function(e,t,n,a,m,f){return(0,o.openBlock)(),(0,o.createElementBlock)("div",i,[(0,o.createElementVNode)("nav",r,[l,(0,o.createElementVNode)("ul",s,[(0,o.createElementVNode)("li",p,[(0,o.createElementVNode)("a",{class:"nav-link active",href:"#scrollspyHeading1",onClick:t[0]||(t[0]=(0,o.withModifiers)((function(){return e.goto&&e.goto.apply(e,arguments)}),["prevent"]))},"Main")]),(0,o.createElementVNode)("li",d,[(0,o.createElementVNode)("a",{class:"nav-link",href:"#scrollspyHeading2",onClick:t[1]||(t[1]=(0,o.withModifiers)((function(){return e.goto&&e.goto.apply(e,arguments)}),["prevent"]))},"Layout")]),(0,o.createElementVNode)("li",c,[(0,o.createElementVNode)("a",{class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown",href:"#",role:"button","aria-expanded":"false",onClick:t[2]||(t[2]=(0,o.withModifiers)((function(){return e.goto&&e.goto.apply(e,arguments)}),["prevent"]))},"Advanced"),(0,o.createElementVNode)("ul",h,[(0,o.createElementVNode)("li",null,[(0,o.createElementVNode)("a",{class:"dropdown-item",href:"#scrollspyHeading3",onClick:t[3]||(t[3]=(0,o.withModifiers)((function(){return e.goto&&e.goto.apply(e,arguments)}),["prevent"]))},"Custom Code")]),(0,o.createElementVNode)("li",null,[(0,o.createElementVNode)("a",{class:"dropdown-item",href:"#scrollspyHeading4",onClick:t[4]||(t[4]=(0,o.withModifiers)((function(){return e.goto&&e.goto.apply(e,arguments)}),["prevent"]))},"Debugging")]),u,(0,o.createElementVNode)("li",null,[(0,o.createElementVNode)("a",{class:"dropdown-item",href:"#scrollspyHeading5",onClick:t[5]||(t[5]=(0,o.withModifiers)((function(){return e.goto&&e.goto.apply(e,arguments)}),["prevent"]))},"Permissions")])])])])]),g])};var o=n(311),a=function(e){return(0,o.pushScopeId)("data-v-a1e569a6"),e=e(),(0,o.popScopeId)(),e},i={class:"app-settings"},r={id:"navbar-example2",class:"navbar navbar-light bg-light px-3"},l=a((function(){return(0,o.createElementVNode)("a",{class:"navbar-brand",href:"#"},"Navbar",-1)})),s={class:"nav nav-pills"},p={class:"nav-item"},d={class:"nav-item"},c={class:"nav-item dropdown"},h={class:"dropdown-menu"},u=a((function(){return(0,o.createElementVNode)("li",null,[(0,o.createElementVNode)("hr",{class:"dropdown-divider"})],-1)})),g=(0,o.createStaticVNode)('<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0" data-v-a1e569a6><h4 id="scrollspyHeading1" data-v-a1e569a6>Main settings</h4><p data-v-a1e569a6>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It&#39;s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p><h4 id="scrollspyHeading2" data-v-a1e569a6>Layout settings</h4><p data-v-a1e569a6>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It&#39;s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p><h4 id="scrollspyHeading3" data-v-a1e569a6>Custom Code settings</h4><p data-v-a1e569a6>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It&#39;s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p><h4 id="scrollspyHeading4" data-v-a1e569a6>Debugging settings</h4><p data-v-a1e569a6>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It&#39;s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p><h4 id="scrollspyHeading5" data-v-a1e569a6>Permission settings</h4><p data-v-a1e569a6>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It&#39;s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p></div>',1)},5097:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){var t=document.querySelector("#toplevel_page_".concat(e)),n=window.location.href,o=n.substr(n.indexOf("admin.php"));if(t){t.addEventListener("click",(function(e){for(var t=e.target,n=this.querySelectorAll("li"),o=0;o<n.length;o++){var a=n[o];a!==e.target.parentElement?a.classList.remove("current"):t.parentElement.classList.add("current")}}));var a=t.querySelector('.wp-submenu a[href="'.concat(o,'"'));a&&a.parentElement.classList.add("current")}};t.default=n},6773:function(e,t,n){var o=n(7897),a=n.n(o),i=n(1519),r=n.n(i)()(a());r.push([e.id,".scrollspy-example[data-v-a1e569a6]{height:200px;margin-top:.5rem;overflow:auto;position:relative}","",{version:3,sources:["webpack://./src/admin/views/Settings.vue"],names:[],mappings:"AAuDA,oCAEE,YAAa,CACb,gBAAiB,CACjB,aAAc,CAHd,iBAIF",sourcesContent:['<template>\n  <div class="app-settings">\n  <nav id="navbar-example2" class="navbar navbar-light bg-light px-3">\n    <a class="navbar-brand" href="#">Navbar</a>\n    <ul class="nav nav-pills">\n      <li class="nav-item">\n        <a class="nav-link active" href="#scrollspyHeading1" @click.prevent="goto">Main</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="#scrollspyHeading2" @click.prevent="goto">Layout</a>\n      </li>\n      <li class="nav-item dropdown">\n        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" @click.prevent="goto">Advanced</a>\n        <ul class="dropdown-menu">\n          <li><a class="dropdown-item" href="#scrollspyHeading3" @click.prevent="goto">Custom Code</a></li>\n          <li><a class="dropdown-item" href="#scrollspyHeading4" @click.prevent="goto">Debugging</a></li>\n          <li><hr class="dropdown-divider"></li>\n          <li><a class="dropdown-item" href="#scrollspyHeading5" @click.prevent="goto">Permissions</a></li>\n        </ul>\n      </li>\n    </ul>\n  </nav>\n  <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">\n    <h4 id="scrollspyHeading1">Main settings</h4>\n    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It\'s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>\n    <h4 id="scrollspyHeading2">Layout settings</h4>\n    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It\'s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>\n    <h4 id="scrollspyHeading3">Custom Code settings</h4>\n    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It\'s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>\n    <h4 id="scrollspyHeading4">Debugging settings</h4>\n    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It\'s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>\n    <h4 id="scrollspyHeading5">Permission settings</h4>\n    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It\'s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>\n  </div>\n  </div>\n</template>\n\n<script>\nimport { onMounted, defineComponent } from \'vue\'\n\nexport default defineComponent({\n  name: \'Settings\',\n  data () {\n    return {\n    };\n  },\n  methods: {\n    goto() {\n      document.querySelector(\'#scrollspyHeading2\').scrollIntoView({behavior: \'smooth\'});\n    }\n  }\n});\n<\/script>\n\n<style lang="css" scoped>\n.scrollspy-example {\n  position: relative;\n  height: 200px;\n  margin-top: .5rem;\n  overflow: auto;\n}\n</style>\n'],sourceRoot:""}]),t.Z=r},6034:function(){},8191:function(){},6003:function(e,t,n){n.r(t),n.d(t,{__esModule:function(){return a.X},default:function(){return i}});var o=n(9154),a=n(2277);var i=(0,n(3744).Z)(a.Z,[["render",o.s]])},8745:function(e,t,n){n.r(t),n.d(t,{__esModule:function(){return a.X},default:function(){return i}});var o=n(2374),a=n(6505);var i=(0,n(3744).Z)(a.Z,[["render",o.s]])},3269:function(e,t,n){n.r(t),n.d(t,{__esModule:function(){return a.X},default:function(){return p}});var o=n(8607),a=n(4561),i=n(3379),r=n.n(i),l=n(6773),s={insert:"head",singleton:!1};r()(l.Z,s),l.Z.locals;var p=(0,n(3744).Z)(a.Z,[["render",o.s],["__scopeId","data-v-a1e569a6"]])},311:function(e){e.exports=Vue}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[582,703,898],(function(){return t(81),t(6034),t(8191)}));e.O()}]);
//# sourceMappingURL=admin.js.map