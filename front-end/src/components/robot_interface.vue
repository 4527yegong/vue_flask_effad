<template>
  <div id="app" class="container">
   <div class="table-container">
     <!-- <h2 class=" title">机器人数据接口</h2> -->
      <div style="margin-bottom: 20px;">
        <el-button type="primary" @click="addRow_admin" style="font-size: 16px;">机器人数据接口</el-button>
      </div>
     <div class="robot-data-interface" >
       <el-select v-model="robotType" placeholder="请选择机器人类型">
         <el-option label="Fanuc" value="chatbot"></el-option>
         <el-option label="ABB" value="industrial"></el-option>
         <el-option label="KUKA" value="service"></el-option>
       </el-select>

       <el-select v-model="protocolType" placeholder="请选择通讯协议类型">
         <el-option label="HTTP" value="http"></el-option>
         <el-option label="WebSocket" value="websocket"></el-option>
         <el-option label="MQTT" value="mqtt"></el-option>
       </el-select>
       <el-select v-model="protocolType" placeholder="请选择数据协议类型">
         <el-option label="CVS 数据" value="http"></el-option>
         <el-option label="JSON 数据" value="websocket"></el-option>
         <el-option label="XML 数据" value="mqtt"></el-option>
       </el-select>

       <el-upload
         class="upload-demo"
         drag
         action="/upload"
         multiple
         :on-success="handleUploadSuccess"
         :before-upload="beforeUpload">
         <i class="el-icon-upload"></i>
         <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
         <div class="el-upload__tip" slot="tip"></div>
       </el-upload>
     </div>
   </div>
 </div>
</template>

<script>
export default {
 data() {
   return {
     robotType: '',
     protocolType: ''
   };
 },
 methods: {
   handleUploadSuccess(/*response, file, fileList*/) {
     this.$message.success('上传成功');
     // 处理上传成功后的逻辑，例如展示上传结果或发送数据到后端
   },
   beforeUpload(file) {
     if (!file.raw.type.includes('directory')) {
       this.$message.error('只能上传文件夹');
       return false;
     }
     return true;
   }
 }
};
</script>

<style>
 .container {
   margin-left: 15%;
   margin-top: 5%;
 }
 
 .table-container {
   border: 1px solid #e6e6e6; /* 表格外框 */
   border-radius: 4px; /* 边框圆角 */
   padding: 10px;
   background-color: #fff; /* 背景色 */
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 阴影 */
 }
.robot-data-interface {
 display: flex;
 flex-direction: column;
 align-items: center;
}

.upload-demo {
 margin-top: 20px;
}
.title {
  width: px;
    background-color: #2cafc1;
    color: #fff;
    padding: 10px;
    border-radius: 4px;
    font-size: 14px;
  }
</style>
