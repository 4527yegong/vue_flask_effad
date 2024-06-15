<template>
  <div id="app"> 
    <app-sidebar></app-sidebar>
    <router-view></router-view>
    
  </div>
</template>

<script>

import sidebar from "./components/sidebar.vue";
// import Tenant from "./components/Tenant.vue";

export default {
  name: "眼疾辅助诊断系统",
  data() {
    return {};
  },
  components: {
    // "app-header": layui,
    "app-sidebar": sidebar,

  },
  methods: {
    showPage(pageName) {
      var content = document.getElementById('pageContent');
      if (pageName === 'page1') {
        content.innerHTML = 'This is page 1 content.';
      } else if (pageName === 'page2') {
        content.innerHTML = 'This is page 2 content.';
      } else if (pageName === 'page3') {
        content.innerHTML = 'This is page 3 content.';
      }
    },
  },
};
</script>

<style scope="this api replaced by slot-scope in 2.5.0+">


</style>
