<template>
  <div id="app"> 
    <app-sidebar></app-sidebar>
    <!-- <app-header></app-header> -->
    <!-- <app-container></app-container> -->
    <router-view></router-view>
    
  </div>
</template>

<script>

import sidebar from "./components/sidebar.vue";
// import Tenant from "./components/Tenant.vue";
// import Container from "./components/Container.vue";

export default {
  name: "眼疾辅助诊断系统",
  data() {
    return {};
  },
  components: {
    // "app-header": layui,
    "app-sidebar": sidebar,
    // "app-container": Container,
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
