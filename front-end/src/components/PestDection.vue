<template>
  <div id="Content">
    <el-dialog
      title="AI预测中"
      :visible.sync="dialogTableVisible"
      :show-close="false"
      :close-on-press-escape="false"
      :append-to-body="true"
      :close-on-click-modal="false"
      :center="true"
    >
      <el-progress :percentage="percentage"></el-progress>
      <span slot="footer" class="dialog-footer">请耐心等待</span>
    </el-dialog>

    

    
    <div id="CT">
      <div class="top-left-edition">
        <span style="color: #21b3b9; font-weight: bold">
          
        </span>
      </div>
      <div id="CT_image">
        <el-card
          id="CT_image_1"
          class="box-card"
          style="
            border-radius: 8px;
            width: 1000px;
            height: 360px;
            margin-bottom: -50px;
          "
        >
          <!-- 类型选择 -->
          <div class="demo-image__preview0">
            <div class="dropdown-menu" >
              <el-dropdown @command="toggleDropdown">
                <span class="dropdown-link">
                  {{ buttonText }}
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown" class="custom-dropdown-menu" >
                  <!-- <el-dropdown-item class ="dropdown-item" v-for="item in menuItems" :key="item" @click="handleclick(item)">{{ item }} </el-dropdown-item> -->
                  <el-button 
                    v-for="item in menuItems" 
                    :key="item" 
                    class="dropdown-item" 
                    @click="handleClick(item)" style="margin: 0; padding: 0;">
                    {{ item }} 
                  </el-button>
                </el-dropdown-menu>

              </el-dropdown>
              
            </div>
          </div>

          <!-- 上传图片 -->
          <div class="demo-image__preview1">
            <div
              v-loading="loading"
              element-loading-text="上传图片中"
              element-loading-spinner="el-icon-loading"
            >
              <el-image
                :src="url_1"
                class="image_1"
                :preview-src-list="srcList"
                style="border-radius: 3px 3px 0 0"
              >
                <div slot="error">
                  <div slot="placeholder" class="error">
                    <el-button
                      v-show="showbutton"
                      type="primary"
                      icon="el-icon-upload"
                      class="download_bt"
                      v-on:click="true_upload"
                    >
                      上传图像
                      <input
                        ref="upload"
                        style="display: none"
                        name="file"
                        type="file"
                        @change="update"
                      />
                    </el-button>
                  </div>
                </div>
              </el-image>
            </div>
            <div class="img_info_1" style="border-radius: 0 0 5px 5px">
              <span style="color: white; letter-spacing: 6px">原始图像</span>
            </div>
          </div>
          
          <!-- 检测结果 -->
          <div class="demo-image__preview2">
            <div
              v-loading="loading"
              element-loading-text="处理中,请耐心等待"
              element-loading-spinner="el-icon-loading"
            >
              <el-image
                :src="url_2"
                class="image_1"
                :preview-src-list="srcList1"
                style="border-radius: 3px 3px 0 0"
              >
                <div slot="error">
                  <div slot="placeholder" class="error">{{ wait_return }}</div>
                </div>
              </el-image>
            </div>
            <div class="img_info_1" style="border-radius: 0 0 5px 5px">
              <span style="color: white; letter-spacing: 4px">检测结果</span>
            </div>
          </div>

        </el-card>
      </div>
      <div id="info_patient">
        <!-- 卡片放置表格 -->
        <el-card style="border-radius: 8px">
          <div slot="header" class="clearfix">
            <span>检测目标</span>
            <el-button
              style="margin-left: 35px"
              v-show="!showbutton"
              type="primary"
              icon="el-icon-upload"
              class="download_bt"
              v-on:click="true_upload2"
            >
              重新选择图像
              <input
                ref="upload2"
                style="display: none"
                name="file"
                type="file"
                @change="update"
              />
            </el-button>
          </div>
          <el-tabs v-model="activeName">
            <el-tab-pane label="检测到的目标" name="first">
              <!-- 表格存放特征值 -->
              <el-table
                :data="feature_list"
                height="390"
                :border="true"
                style="width: 960px; text-align: center"
                v-loading="loading"
                element-loading-text="数据正在处理中，请耐心等待"
                element-loading-spinner="el-icon-loading"
                lazy
              >
                <el-table-column label="目标类别" width="330px" >
                  <template slot-scope="scope">
                    <span>{{ scope.row[1] }}</span>
                  </template>
                </el-table-column>
                <!-- <el-table-column label="目标大小" width="320px">
                  <template slot-scope="scope">
                    <span>{{ scope.row[0] }}</span>
                  </template>
                </el-table-column> -->
                <el-table-column label="置信度" width="320px">
                  <template slot-scope="scope">
                    <span>{{ scope.row[0] }}</span>
                  </template>
                </el-table-column>

                <el-table-column label="延迟" width="320px" >
                  
                    <span>{{ "23ms" }}</span>
                  
                </el-table-column>

              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Content",
  data() {
    return {
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
      menuItems: ['模型 M 1', '模型 M 2', '模型 M 3'],  
      buttonText: '模型管理',
      dropdownVisible: false,
    };
  },
  created: function () {
    document.title = "病虫害检测WEB端";
  },
  methods: {
    true_upload() {
      this.$refs.upload.click();
    },
    true_upload2() {
      this.$refs.upload2.click();
    },
    next() {
      this.active++;
    },
    // 获得目标文件
    getObjectURL(file) {
      var url = null;
      if (window.createObjcectURL != undefined) {
        url = window.createOjcectURL(file);
      } else if (window.URL != undefined) {
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        url = window.webkitURL.createObjectURL(file);
      }
      return url;
    },
    // 上传文件
    update(e) {
      this.percentage = 0;
      this.dialogTableVisible = true;   //是否显示对话框表格
      this.url_1 = "";
      this.url_2 = "";
      this.srcList = [];
      this.srcList1 = [];
      this.wait_return = "";
      this.wait_upload = "";
      this.feature_list = [];
      this.feat_list = [];
      this.fullscreenLoading = true;
      this.loading = true;
      this.showbutton = false;
      
      let file = e.target.files[0];   // 获取上传的文件对象
      this.url_1 = this.$options.methods.getObjectURL(file);    // 通过Vue实例的方法获取文件的URL，并设置为url_1
      let param = new FormData();     //创建form对象,用于构建发送到服务器的数据
      param.append("file", file, file.name); //通过append向form对象添加数据
      param.append("type", this.buttonText); //通过append向form对象添加数据
      //定时器
      var timer = setInterval(() => {
        this.myFunc();
      }, 300);
      let config = {
        headers: { "Content-Type": "multipart/form-data" },
      }; //添加请求头
 
      axios.post(this.server_url + "/upload", param, config)
      .then((response) => {
          // console.log("Server response:", response); // 打印服务器响应
          this.percentage = 100;      
          clearInterval(timer); // 清除定时器
          
          // 确保服务器响应包含预期的数据结构
          if (response.data && response.data.image_url && response.data.draw_url && response.data.image_info) {
              this.url_1 = response.data.image_url; // 更新图片URL
              this.srcList.push(this.url_1);
              this.url_2 = response.data.draw_url;
              this.srcList1.push(this.url_2);

              this.fullscreenLoading = false;
              this.loading = false;
              this.dialogTableVisible = false;
              
              this.feat_list = Object.keys(response.data.image_info);   //从响应中获取图片信息

              for (var i = 0; i < this.feat_list.length; i++) {         //图片包含多个信息
                response.data.image_info[this.feat_list[i]][1] = this.feat_list[i];
                this.feature_list.push(response.data.image_info[this.feat_list[i]]);
              }
              // this.feature_list.push(response.data.image_info);

              // this.feat_list = Object.keys(response.data.image_info);
              // response.data.image_info[this.feat_list][1] = this.feat_list;
              // this.feature_list.push(response.data.image_info[this.feat_list]);
              // this.feature_list.push(response.data.image_info);

              this.feature_list_1 = this.feature_list[0];
              this.dialogTableVisible = false;
              this.notice1(); // 触发通知或其他操作
          } else {
              throw new Error("Unexpected server response structure");
          }
      })
      .finally(() => {
          // 确保无论请求成功与否，都会重置加载状态
          this.fullscreenLoading = false;
          this.loading = false;
          this.percentage = 0;
      });

    },
    myFunc() {
      if (this.percentage + 3 < 99) {
        this.percentage = this.percentage + 3  ;
      } else {
        this.percentage = 99;
      }
    },
    drawChart() {},
    notice1() {
      this.$notify({
        title: "预测成功",
        message: "点击图片可以查看大图",
        duration: 0,
        type: "success",
      });
    },
    handleCommand(command) {
      // 处理菜单项点击事件
      // console.log('点击了菜单项：', command);
      this.buttonText = command; // 更新按钮的文字为点击的菜单项内容
    },
    handleClick(item) {
      // 处理点击事件
      // this.$router.push({ path: "/list" })
      this.buttonText = item; // 更新按钮文本
      this.dropdownVisible = false; // 关闭下拉菜单
    },
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },

  },
  mounted() {
    this.drawChart();
  },
  
};
</script>


<style>
.el-button {
  padding: 12px 20px !important;
}

#hello p {
  font-size: 15px !important;
  /*line-height: 25px;*/
}

.n1 .el-step__description {
  padding-right: 20%;
  font-size: 14px;
  line-height: 20px;
  /* font-weight: 400; */
}
</style>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.dialog_info {
  margin: 20px auto;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card {
  width: 680px;
  height: 200px;
  border-radius: 8px;
  margin-top: -20px;
}

.divider {
  width: 50%;
}

#CT {
  display: flex;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  margin-right: 0px;
  max-width: 1800px;
}

#CT_image_1 {
  width: 90%;
  height: 40%;
  margin: 0px auto;
  padding: 0px auto;
  margin-right: 180px;
  margin-bottom: 0px;
  border-radius: 4px;
}

#CT_image {
  margin-bottom: 60px;
  margin-left: 30px;
  margin-top: 5px;
}

.image_1 {
  width: 275px;
  height: 260px;
  background: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.img_info_1 {
  height: 30px;
  width: 275px;
  text-align: center;
  background-color: #21b3b9;
  line-height: 30px;
}

.demo-image__preview0 {
  width: 250px;
  height: 290px;
  margin: 20px 30px;
  float: left;
}

.demo-image__preview1 {
  width: 250px;
  height: 290px;
  margin: 20px 30px;
  float: left;
}

.demo-image__preview2 {
  width: 250px;
  height: 290px;

  margin: 20px 30px;
  float: left;
  /* background-color: green; */
}

.error {
  margin: 100px auto;
  width: 50%;
  padding: 10px;
  text-align: center;
}





div {
  display: block;
}



.download_bt {
  padding: 10px 16px !important;
}

#upfile {
  width: 104px;
  height: 45px;
  background-color: #187aab;
  color: #fff;
  text-align: center;
  line-height: 45px;
  border-radius: 3px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  color: #fff;
  font-family: "Source Sans Pro", Verdana, sans-serif;
  font-size: 0.875rem;
}

.file {
  width: 200px;
  height: 130px;
  position: absolute;
  left: -20px;
  top: 0;
  z-index: 1;
  -moz-opacity: 0;
  -ms-opacity: 0;
  -webkit-opacity: 0;
  opacity: 0; /*css属性&mdash;&mdash;opcity不透明度，取值0-1*/
  filter: alpha(opacity=0);
  cursor: pointer;
}

#upload {
  position: relative;
  margin: 0px 0px;
}

#Content {
  width: 85%;
  height: 1000px;
  background-color: #ffffff;
  margin: 0 auto;
  display: flex;
  min-width: 1200px;
  margin-top: 70px;
  margin-left: 17%;
}

.divider {
  background-color: #eaeaea !important;
  height: 2px !important;
  width: 100%;
  margin-bottom: 50px;
}

.divider_1 {
  background-color: #ffffff;
  height: 2px !important;
  width: 100%;
  margin-bottom: 20px;
  margin: 20px auto;
}

.steps {
  font-family: "lucida grande", "lucida sans unicode", lucida, helvetica,
    "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  color: #21b3b9;
  text-align: center;
  margin: 15px auto;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.step_1 {
  /*color: #303133 !important;*/
  margin: 20px 26px;
}

#info_patient {
  margin-top: 10px;
  margin-right: 160px;
}

/* 设置下拉菜单按钮样式 */
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 20px;
  border: none;
  position: relative;
  display: inline-block;
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
.custom-dropdown-menu {
  width: 60px; /* Adjust the width as needed */
  /* justify-content: center; */
}
.dropdown-item {
  justify-content: center;
  display:flex;
}

</style>


