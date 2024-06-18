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
import DeviceManager from './components/DeviceManager.vue'
import TimeSeriesDB from './components/TimeSeriesDB.vue'
import robot_track from './components/robot_track.vue'
import work_list from './components/work_list.vue'
import TingModelManage from './components/ThingModelManager.vue'
import EdgeManagement from './components/EdgeManagement.vue'
import SceneLinkage from './components/SceneLinkage.vue'
import AdvancedDataTransform from './components/AdvancedDataTransform.vue'
import robot_interface from './components/robot_interface.vue'
import DatabaseTable from './components/DatabaseTable.vue'
import work_vidoe from './components/work_vidoe.vue'

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
        {path: "/Device", component:DeviceManager, meta: {title:'DeviceManager'}},
        {path: "/TimeData", component: TimeSeriesDB, meta: {title: 'TimeSeriesDB'}},
        {path: "/robot_track", component: robot_track, meta: {title: 'robot_track'}},
        {path: "/work_list", component: work_list, meta: {title: 'work_list'}},
        {path: "/TingModelManage", component: TingModelManage, meta: {title: 'TingModelManage'}},
        {path: "/EdgeManagement", component: EdgeManagement, meta: {title: 'EdgeManagement'}},
        {path: "/SceneLinkage", component: SceneLinkage, meta: {title: 'ScenceLinkage'}},
        {path: "/AdvancedDataTransform", component: AdvancedDataTransform, meta: {title: 'AdvancedDataTransform'}},
        {path: "/robot_interface", component: robot_interface, meta: {title: 'robot_interface'}},
        {path: "/DatabaseTable", component: DatabaseTable, meta: {title: 'DatabaseTable'}},
        {path: "/work_vidoe", component: work_vidoe, meta: {title: 'work_vidoe'}}
    ],
    mode: "history",
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App),   //App.vue组件渲染到id为app的div中,这个App为根组件，调用的router都是在这个根组件叠加的
})
