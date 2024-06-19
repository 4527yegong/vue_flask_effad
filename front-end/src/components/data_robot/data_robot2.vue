<template>
    <div id="app" class="container">
      <div class="table-container">
          
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="type" label="属性" width="180">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.type }}</span>
              <el-input v-else v-model="scope.row.type"></el-input>
            </template>
          </el-table-column>

          <el-table-column prop="time1" label="时间点1" width="180">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.time1 }}</span>
              <el-input v-else v-model="scope.row.time1"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="time2" label="时间点2" width="180">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.time2 }}</span>
              <el-input v-else v-model="scope.row.time2"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="time3" label="时间点3" width="180">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.time3 }}</span>
              <el-input v-else v-model="scope.row.time3"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="time4" label="时间点4" width="180">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.time4 }}</span>
              <el-input v-else v-model="scope.row.time4"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="time5" label="时间点5" width="180">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.time5 }}</span>
              <el-input v-else v-model="scope.row.time5"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="time6" label="时间点6" width="180">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.time6 }}</span>
              <el-input v-else v-model="scope.row.time5"></el-input>
            </template>
          </el-table-column>
        </el-table>


      </div>
    </div>
  </template>
    
  <script>
  export default {
    data() {
      return {
        tableData: [
          {type: '时间', time1: '2023-11-16 00:00:00', time2: '2023-11-16 01:00:00', time3: '2023-11-16 01:05:00', time4: '2023-11-16 03:00:00', time5: '2023-11-16 03:05:00',time6: '2023-11-16 04:00:00', editable: false },
          {type: '作业轨迹', time1: '执行任务1', time2: '任务1执行完成', time3: '执行任务2', time4: '任务2执行完成', time5: '执行任务3', time6: '任务3执行完成', editable: false },
          {type: '行驶点区域', time1: '区域1', time2: '区域2', time3: '区域3', time4: '区域4', time5: '区域5', time6: '区域6', editable: false },
          {type: '行驶点状态', time1: '正常', time2: '正常', time3: '正常', time4: '亏电', time5: '亏电', time6: '亏电', editable: false },
        ],
        selectedRow: null, // 用于存储选中行的数据
      };
    },
    methods: {
      addRow_admin() {
      this.tableData.push({ name: 'New Admin', authority: '管理员', num_machine: 0, num_using: 0, num_remain: 0, editable: false });
    },
    addRow_user() {
      this.tableData.push({ name: 'New User', authority: '普通用户', num_machine: 0, num_using: 0, num_remain: 0, editable: false });
    },
      handleEdit(row) {
        row.editable = !row.editable; // 切换编辑状态
        if (!row.editable) {
          // 在这里可以进行保存操作，比如调用 API 将修改后的数据提交到后端
        //   console.log('保存数据：', row);
        }
      },
      deleteRow(index, /* row */) {
        this.tableData.splice(index, 1); // 从 tableData 数组中移除指定索引的行
      },
      handleSelectionChange(selection) {
        this.selectedRow = selection.length > 0 ? selection[0] : null;
      },
    },
  };
  </script>
  
  <style scoped>
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
  
  .el-button {
    margin-right: 10px; /* 按钮间距 */
  }
  
  /* 表格单元格和表头样式 */
  .el-table th,
  .el-table td {
    border-bottom: 1px solid #e6e6e6; /* 单元格边框 */
    text-align: center; /* 文本居中 */
  }
  
  .el-table tr:hover {
    background-color: #f5f5f5; /* 鼠标悬浮背景色 */
  }
  </style>