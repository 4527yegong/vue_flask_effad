

<template>
    <div id="app" class="container">
      <div class="parent-container" style="width: auto; height: 1000px; display: flex; flex-direction: column;">
    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <div style="margin-bottom: 50px;">
            <el-button type="primary" @click="addRow_admin">机器人行动轨迹显示</el-button>
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
    </style>