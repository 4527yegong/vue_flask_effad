<template>
  <div id="layui" class="layui-layout layui-layout-admin">  

    <!-- 头部区域（可配合layui 已有的水平导航） -->
    <div class="layui-header">
      <div class="layui-logo layui-hide-xs layui-bg-black">云边端融合感知平台</div>

      <!-- 移动端显示 -->
      <ul class="layui-nav layui-layout-left">
          <li class="layui-nav-item layui-show-xs-inline-block layui-hide-sm" lay-header-event="menuLeft">
              <i class="layui-icon layui-icon-spread-left"></i>
          </li>
          <li class="layui-nav-item layui-hide-xs"><a href="javascript:;">标签页 1</a></li>
          <li class="layui-nav-item layui-hide-xs"><a href="javascript:;">标签页 2</a></li>
          <li class="layui-nav-item layui-hide-xs"><a href="javascript:;">标签页 3</a></li>
              <!-- <li class="layui-nav-item">
                  <a href="javascript:;">nav groups</a>
                  <dl class="layui-nav-child">
                  <dd><a href="javascript:;">menu 11</a></dd>
                  <dd><a href="javascript:;">menu 22</a></dd>
                  <dd><a href="javascript:;">menu 33</a></dd>
                  </dl>
              </li> -->
      </ul>
        
      <!-- 客户端显示 -->
      <ul class="layui-nav layui-layout-right">
          <li class="layui-nav-item layui-hide layui-show-sm-inline-block">
              <a href="javascript:;">
                  <img src="//unpkg.com/outeres@0.0.10/img/layui/icon-v2.png" class="layui-nav-img">
                  tester
                  </a>
              <dl class="layui-nav-child">
                  <dd><a href="javascript:;">Your Profile</a></dd>
                  <dd><a href="javascript:;">Settings</a></dd>
                  <dd><a href="javascript:;">Sign out</a></dd>
              </dl>
          </li>
          <li class="layui-nav-item" lay-header-event="menuRight" lay-unselect>
              <a href="javascript:;">
              <i class="layui-icon layui-icon-more-vertical"></i>
              </a>
          </li>
      </ul>
    </div>

    <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
    <div class="layui-side layui-bg-black">
      <div class="layui-side-scroll">
        <ul class="layui-nav layui-nav-tree" lay-filter="test" >
          
            <li class="layui-nav-item layui-nav-itemed" style="display: flex;  align-items: center;margin-left: 10% ;">
                <!-- <i class="layui-icon layui-icon-face-smile" style="font-size: 20px; color: #1E9FFF;margin-right: 8px;"></i>  -->
                <a href="javascript:;" class="dropbtn" @click="goto_1" style="height: 50px;">病虫害检测</a>
                <!-- <dl class="layui-nav-child" v-show="isDropdownVisible_1">
                    <dd v-for="type in types_1" :key="type" style="  margin-left: 15%;">
                        <a href="javascript:;" >{{ type }}</a>

                    </dd>
                </dl> -->
            </li>
            
            <li class="layui-nav-item layui-nav-itemed" style="display: flex;  align-items: center;margin-left: 10% ;">
              <a href="javascript:;" class="dropbtn" @click="goto_10" style="height: 50px;">检测模型管理</a>
            </li>

            <li class="layui-nav-item layui-nav-itemed" style="display: flex;  align-items: center;margin-left: 10% ;">
                <a href="javascript:;" class="dropbtn" @click="goto_2" style="height: 50px;">机器人状态</a>
                <!-- <dl class="layui-nav-child" v-show="isDropdownVisible_2">
                    <dd v-for="type in types_2" :key="type"  style="  margin-left: 15%;">
                        <a href="javascript:;">{{ type }}</a>
                    </dd>
                </dl> -->
            </li>

            <li class="layui-nav-item layui-nav-itemed" style="display: flex;  align-items: center;margin-left: 10% ;">
                <a href="javascript:;" class="dropbtn" @click="goto_11" style="height: 50px;">机器人行动轨迹</a>
            </li>

            <li class="layui-nav-item layui-nav-itemed" style="display: flex;  align-items: center;margin-left: 10% ;">
              <a href="javascript:;" class="dropbtn" @click="goto_13" style="height: 50px;">机器人接口</a>
            </li>


            <li class="layui-nav-item layui-nav-itemed" style="display: flex;  align-items: center;margin-left: 10% ;">
              <a href="javascript:;" class="dropbtn" @click="goto_3" style="height: 50px;">多租户管理</a>
            </li>

            <li class="layui-nav-item layui-nav-itemed" style="display: flex;  align-items: center;margin-left: 10% ;">
              <a href="javascript:;" class="dropbtn" @click="goto_4" style="height: 50px;">机器人作业管理</a>
            </li>
            
            <li class="layui-nav-item layui-nav-itemed" style="display: flex;  align-items: center;margin-left: 10% ;">
              <a href="javascript:;" class="dropbtn" @click="goto_5" style="height: 50px;">时序数据库</a>
            </li>
            <li class="layui-nav-item layui-nav-itemed" style="display: flex;  align-items: center;margin-left: 10% ;">
              <a href="javascript:;" class="dropbtn" @click="goto_6" style="height: 50px;">设备管理</a>
            </li>
            <li class="layui-nav-item layui-nav-itemed" style="display: flex;  align-items: center;margin-left: 10% ;">
              <a href="javascript:;" class="dropbtn" @click="goto_7" style="height: 50px;">物模型管理</a>
            </li>
            <li class="layui-nav-item layui-nav-itemed" style="display: flex;  align-items: center;margin-left: 10% ;">
              <a href="javascript:;" class="dropbtn" @click="goto_8" style="height: 50px;">边端管理</a>
            </li>
            <li class="layui-nav-item layui-nav-itemed" style="display: flex;  align-items: center;margin-left: 10% ;">
              <a href="javascript:;" class="dropbtn" @click="goto_9" style="height: 50px;">场景联动</a>
            </li>
            <!-- <li class="layui-nav-item layui-nav-itemed" style="display: flex;  align-items: center;margin-left: 10% ;">   
              <a href="javascript:;" class="dropbtn" @click="goto_14" style="height: 50px;">数据库表管理</a>
            </li> -->
            <li class="layui-nav-item layui-nav-itemed" style="display: flex;  align-items: center;margin-left: 10% ;">
              <a href="javascript:;" class="dropbtn" @click="goto_12" style="height: 50px;">高级数据转换</a>
            </li>
        </ul>
      </div>
    </div> 

    <!-- 底部固定区域 -->
    <div class="layui-footer">
        底部固定区域
    </div>
  </div>
</template>
  


<script>

export default {
  name: 'LayoutWithLayui',
  data() {
    return {
      // 控制下拉菜单的显示和隐藏
      isDropdownVisible_1: false,
      // 下拉菜单的选项
      types_1: ['类型 1', '类型 2', '类型 3'],
      isDropdownVisible_2: false,
      // 下拉菜单的选项
      types_2: ['类型 1', '类型 2', '类型 3'],
      server_url: "http://127.0.0.1:5003",
      activeName: "first",
      active: 0,
      centerDialogVisible: true,
      url_1: "",
      url_2: "",
      textarea: "",
      srcList: [],
      srcList1: [],
      feature_list: [],
      feature_list_1: [],
      feat_list: [],
      url: "",
      visible: false,
      wait_return: "等待上传",
      wait_upload: "等待上传",
      loading: false,
      table: false,
      isNav: false,
      showbutton: true,
      percentage: 0,
      fullscreenLoading: false,
      opacitys: {
        opacity: 0,
      },
      dialogTableVisible: false,
      menuItems: ['类型1', '类型2', '类型3'],
      buttonText: '下拉菜单按钮',
    };
  },

  created: function () {
      document.title = "云边端融合感知平台";
    },
  methods: {
    toggleDropdown_1() {
      this.isDropdownVisible_1 = !this.isDropdownVisible_1;
    },
    toggleDropdown_2() {
      this.isDropdownVisible_2 = !this.isDropdownVisible_2;
    },
    goto_1() {
      this.$router.push({ path: '/PestDection' });
    },
    goto_2() {
      this.$router.push({ path: '/statue' });
    },
    goto_3() {
      this.$router.push({ path: '/Tenant' });
    },
    goto_4() {
      this.$router.push({ path: '/work_list' });
    },
    goto_5() {
      this.$router.push({ path: '/TimeData' });
    },
    goto_6() {
      this.$router.push({ path: '/Device' });
    },
    goto_7() {
      this.$router.push({ path: '/TingModelManage' });
    },
    goto_8() {
      this.$router.push({ path: '/EdgeManagement' });
    },
    goto_9() {
      this.$router.push({ path: '/SceneLinkage' });
    },
    goto_10() {
      this.$router.push({ path: '/modelmge' });
    },
    goto_11() {
      this.$router.push({ path: '/robot_track' });
    },
    goto_12() {
      this.$router.push({ path: '/AdvancedDataTransform' }); 
    },
    goto_13() {
      this.$router.push({ path: '/robot_interface' });
    },
    goto_14() {
      this.$router.push({ path: '/DatabaseTable' });
    },
  },
};
</script>

<style scoped>
@import url("C:\Users\lianlong\Desktop\Yolov5-Flask-VUE\front-end\layui\css\layui.css");


/* 只定义一次 .layui-nav-child，移除重复的定义 */
.layui-nav-itemed > .layui-nav-child {
  position: absolute;
  top: 100%; /* 使下拉菜单显示在导航项的下方 */
  left: 0;
  z-index: 1000;
  display: none; /* 初始状态为隐藏，由 Vue 的 v-show 控制显示 */
}




.el-button {
  padding: 12px 20px !important;
}




</style>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* 设置下拉菜单按钮样式 */
.dropbtn {

  color: white;
  padding: 5px;
  font-size: 16px;
  border: none;
  position: relative;
  display: inline-block;
  margin-left: 0;
  height: 40px;
}

/* 下拉菜单内容（隐藏起来）*/
.dropdown-content {
  display: none;
  position: absolute;
  background-color: hsl(222, 35%, 93%);
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 20px 20px;

  

}

/* 当鼠标悬停在下拉菜单按钮上时显示下拉菜单内容 */
.dropdown:hover .dropdown-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center

}

/* 添加按钮之间的垂直间隔 */
.dropdown .el-button {
  margin-bottom: 10px; /* 调整间隔大小 */
}

.button-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center
}

/* 添加按钮之间的垂直间隔 */
.button-column .custom-button {
  margin-bottom: 10px; /* 调整间隔大小 */
  width: 100%; /* 或者设置一个固定宽度 */
  align-items: center
}
.custom-button {
  width: 100px; /* 设置按钮的固定宽度 */
  margin: 0; /* 重置按钮的margin */
  padding: 0; /* 重置按钮的padding */
  box-sizing: border-box; /* 确保按钮的宽度包括边框和内边距 */
}
.dropdown-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.dropdown-link {
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
}

.sidebar {
      background-color: #bde1ee;
      color: #131212;
      height: 100%;
      margin-top: 5px;
      margin-bottom: 0%;
    }
.sidebar ul {
  list-style: none;
  padding: 0;
  width: 150px;

}
.sidebar li {
  padding: 10px 20px;
  border-bottom: 1px solid #f8f9f9;
}
.layui-logo .layui-hide-xs .layui-bg-black {
    font-size: 40px;
}
.layui-logo {
  font-size: 24px;
}
.layui-nav-itemed { 
  display: flex;
  align-items: center; /* 垂直居中对齐 */
}
.layui-nav-item i {
  margin-right: 8px;
}
</style>


