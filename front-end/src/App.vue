<template>
  <div id="layui" class="layui-layout layui-layout-admin">  
    <!-- 上方头部 -->
    <el-header >
        <app-head></app-head>
    </el-header>

    <el-container> 

      <!-- 侧边栏 -->
      <el-aside >
        <app-sidebar></app-sidebar>
      </el-aside>
      

      <!-- 主体内容 -->
      <el-main>
        <router-view></router-view>
      </el-main>

      <!-- 底部 -->
        <el-footer >
          <app-foot></app-foot>
        </el-footer>
    </el-container>

  </div>
</template>

<script>

// import sidebar from "./components/sidebar.vue";
import head from "./components/Container/head.vue";
import foot from "./components/Container/foot.vue";
import sidebar from "./components/Container/sidebar.vue";

export default {
  name: "眼疾辅助诊断系统",
  data() {
    return {};
  },
  components: {
    // "app-header": layui,
    // "app-sidebar": sidebar,
    "app-head": head,
    "app-foot": foot,
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
