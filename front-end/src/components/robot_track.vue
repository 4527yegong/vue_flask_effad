

<template>
    <div id="app" class="container">
      <div class="parent-container" style="width: auto; height: 1000px; display: flex; flex-direction: column;">
        <!-- 按钮和查询表单容器 -->
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <!-- 按钮组 -->
            <div style="margin-bottom: 20px;">
                <el-button type="primary" @click="addRow_admin">机器人行动轨迹显示</el-button>
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
              </el-form>
            </div>
                  
            
            <div style="flex: 1;"> <!-- 这个容器将占据剩余空间 -->
                <!-- 按钮下方的空间 -->
            </div>
        </div>
       <!-- 其他内容 -->
      </div>
    </div>
</template>
  


  <script>
  export default  ({
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
    display: flex; /* 启用 Flexbox 布局 */
    justify-content: space-between; /* 可选，如果需要在子元素之间分配空间 */
    border: 1px solid #e6e6e6; /* 表格外框 */
    border-radius: 4px; /* 边框圆角 */
    padding: 10px;
    background-color: #fff; /* 背景色 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 阴影 */
    }
    .el-button {
      margin-right: 5%; /* 按钮间距 */
    }
    
    .table-container {
        border: 1px solid #e6e6e6; /* 表格外框 */
        border-radius: 4px; /* 边框圆角 */
        padding: 10px;
        background-color: #fff; /* 背景色 */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 阴影 */
    }
    .query-form {
    margin-bottom: 20px;
  }
    </style>