

<template>
    <div id="app" class="container">
      <div class="parent-container" style="flex-grow: 1; max-width: auto; height: 1000px; display: flex; flex-direction: column;">
        <!-- 按钮和查询表单容器 -->
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <!-- 按钮组 -->
            <div style="margin-bottom: 20px;">
                <el-button type="primary" @click="addRow_admin">机器人图像识别显示</el-button>
            </div>
           <!-- 时间表查询 --> 
            <div style="flex-grow: 1;">
               <el-form :inline="true" class="query-form" >
                  <el-form-item label="起始时间">
                    <el-date-picker
                      v-model="queryStartTime"
                      type="datetime"
                      placeholder="选择起始时间">
                    </el-date-picker>
                  </el-form-item>
                  <el-form-item label="结束时间">
                      <el-date-picker
                        v-model="queryEndTime"
                        type="datetime"
                        placeholder="选择结束时间">
                      </el-date-picker>
                  </el-form-item>
                  <el-form-item>
                      <el-button type="primary" @click="handleQuery">查询</el-button>
                  </el-form-item>
                  <video-player class="video-player"  :video-src="videoUrl"></video-player>
              </el-form>
              
            </div>
            
                  
            
            <!-- <div style="flex: 1;"> 
                
            </div> -->
        </div>
       <!-- 其他内容 -->
      </div>
    </div>
</template>
  


  <script>
    import VideoPlayer from './VideoPlayer.vue';
  export default  ({
    components: {
      VideoPlayer,
    },
    data() {
      return {
        queryStartTime: '',
        queryEndTime: '',
        tableData: [
          { timestamp: '2024-06-17 10:00:00', value: 25 },
          { timestamp: '2024-06-17 11:00:00', value: 30 },
          { timestamp: '2024-06-17 12:00:00', value: 28 }
        ],
      }
    },
        
  });

  </script>

<style scoped>
.container {
  margin-left: 16%;
  margin-top: 5%;
  width: 80%;
}

.parent-container {
  display: flex;
  justify-content: space-between;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.el-button {
  margin-right: 5%;
}

.table-container {
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.query-form {
  margin-bottom: 0;
}

.video-player {
  width: 100%;
  height: 500px;
  margin-top: 20px;
} 
</style>
