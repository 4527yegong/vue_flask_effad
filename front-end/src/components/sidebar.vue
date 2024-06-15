<template>
    <div id="layui" class="layui-layout layui-layout-admin">
        
        <div class="layui-header">
            <div class="layui-logo layui-hide-xs layui-bg-black">云边端融合感知平台</div>
            <!-- 头部区域（可配合layui 已有的水平导航） -->
            <ul class="layui-nav layui-layout-left">
                <!-- 移动端显示 -->
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

        <div class="layui-side layui-bg-black">
            <div class="layui-side-scroll">
                <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
                <ul class="layui-nav layui-nav-tree" lay-filter="test" >
                    <li class="layui-nav-item layui-nav-itemed" style="display: flex;  align-items: center;margin-left: 10% ;">
                       <!-- <i class="layui-icon layui-icon-face-smile" style="font-size: 20px; color: #1E9FFF;margin-right: 8px;"></i>  -->
                        <a href="javascript:;" class="dropbtn" @click="goto_1" style="height: 50px;">病虫害检测</a>

                        <!-- <dl class="layui-nav-child" v-show="isDropdownVisible_1">
                            <dd v-for="type in types_1" :key="type" style="  margin-left: 15%;">
                                <a href="javascript:;">{{ type }}</a>
                            </dd>
                        </dl> -->
                    </li>
                    <li class="layui-nav-item layui-nav-itemed" style="display: flex;  align-items: center;margin-left: 10% ;">
                      <!-- <i class="layui-icon layui-icon-user" style="font-size: 20px; color: #1E9FFF;"></i>  -->
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
                        <a href="javascript:;" class="dropbtn" @click="goto_2" style="height: 50px;">机器人行动轨迹</a>
                        <!-- <dl class="layui-nav-child" v-show="isDropdownVisible_2">
                            <dd v-for="type in types_2" :key="type"  style="  margin-left: 15%;">
                                <a href="javascript:;">{{ type }}</a>
                            </dd>
                        </dl> -->
                    </li>

                    <li class="layui-nav-item layui-nav-itemed" style="display: flex;  align-items: center;margin-left: 10% ;">
                      <!-- <i class="layui-icon layui-icon-user" style="font-size: 20px; color: #1E9FFF;"></i>  -->
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
                </ul>
            </div>
        </div> 
        
        <div class="layui-footer">
            <!-- 底部固定区域 -->
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
      this.$router.push({ path: '/work' });
    },
    goto_5() {
      this.$router.push({ path: '/TimeData' });
    },
    goto_6() {
      this.$router.push({ path: '/Device' });
    },
    goto_7() {
      this.$router.push({ path: '/ThingModel' });
    },
    goto_8() {
      this.$router.push({ path: '/Edge' });
    },
    goto_9() {
      this.$router.push({ path: '/Scene' });
    },
    goto_10() {
      this.$router.push({ path: '/modelmge' });
    },
  },
  
};
</script>

<style scoped>
@import url("D:\lib_project\pycharm_project\Yolov5-Flask-VUE\front-end\layui\css\layui.css");
.layui-nav-child {
  display: none; /* 默认隐藏下拉菜单 */
  
}
.layui-nav-itemed > .layui-nav-child {
  display: block; /* 当导航项激活时显示下拉菜单 */
  
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
  padding: 0px;
  font-size: 16px;
  border: none;
  position: relative;
  display: inline-block;
  margin-left: 0;
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
    font-size: 50px;
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


