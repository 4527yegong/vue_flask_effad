// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
import Element from 'element-ui'
import * as echarts from 'echarts';
import VueCompositionAPI from '@vue/composition-api';
Vue.use(VueCompositionAPI);
Vue.prototype.$echarts = echarts;

import '../node_modules/element-ui/lib/theme-chalk/index.css'
import '../src/assets/style.css'
import './theme/index.css'
import '../layui/css/layui.css'
import 'element-ui/lib/theme-chalk/index.css';

// import layui from "./components/layui.vue"; 
import PestDection from "./components/PestDection";
import work from './components/work.vue' 
import statue from './components/statue.vue'   
import Tenant from './components/Tenant.vue'
import modelmge from './components/modelmge.vue'

Vue.use(Element)
Vue.config.productionTip = false// 对于 JavaScript 文件，应该使用如下语法


Vue.use(VueRouter)
Vue.prototype.$http = axios

const router = new VueRouter({
    routes: [ 
        {path: "/PestDection", component: PestDection, meta: {title: ' PestDection'}}, 
        {path: "/Tenant", component: Tenant , meta: {title: 'Tenant'}},
        {path: "/work", component: work, meta: {title: 'work'}},
        {path: "/statue", component: statue, meta: {title:'statue'}},
        {path: "/modelmge", component: modelmge, meta: {title:'modelmge'}},
    ],
    mode: "history",
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App),   //App.vue组件渲染到id为app的div中,这个App为根组件，调用的router都是在这个根组件叠加的
})
