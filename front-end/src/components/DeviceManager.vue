<template>
    <div id="app" class="container">
      <div class="table-container">
        <el-button type="primary" @click="addRow_admin">创建新设备</el-button>
        <el-button type="primary" @click="addRow_user">导入新设备</el-button>

        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="num" label="编号" width="140">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.num }}</span>
              <el-input v-else v-model="scope.row.num"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="设备名" width="140">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.name }}</span>
              <el-input v-else v-model="scope.row.name"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="time" label="设备更新时间" width="160">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.time }}</span>
              <el-input v-else v-model="scope.row.time"></el-input>
            </template>
          </el-table-column>

          <el-table-column label="启动/停止" width="160">
            <template slot-scope="scope">
              <div style="display: flex; gap: 10px;">
                <el-switch
                  v-model="scope.row.isActive"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  @change="handleSwitchChange(scope.row)">
                </el-switch>
              </div>
            </template>
          </el-table-column>
          

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="handleEdit(scope.row)" size="mini" type="primary">{{ scope.row.editable ? '保存' : '编辑' }}</el-button>
              <el-button
                  size="mini"
                  @click="goto_1"
                >设备升级</el-button>
                <el-button
                  size="mini"
                  @click="goto_2"
                >设备调试</el-button>
              <el-button @click="deleteRow(scope.$index, scope.row)" size="mini" type="danger">删除 </el-button>
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
        value_1: true,
        tableData: [
          { name: '设备 1 ', num: 'D 1' ,time:"2024-6-16", isActive: true, editable: false },
          { name: '设备 2 ', num: 'D 2',time:"2024-6-15" , isActive: false, editable: false },
          { name: '设备 3 ', num: 'D 3',time:"2024-5-30" , isActive: false, editable: false } ,
          // { name: 'David', num: '模型4',time:"2024-6-16" },
        ],
        selectedRow: null, // 用于存储选中行的数据
      };
    },
    methods: {
      addRow_admin() {
        this.tableData.push({ name: '新设备', num: 'D ' + (this.tableData.length + 1), time: new Date().toLocaleDateString() , editable: false });
      },
      addRow_user() {
        this.tableData.push({ name: '新模型', num: 'D ' + (this.tableData.length + 1), time: "11", editable: false });
      },
      handleEdit(row) {
        row.editable = !row.editable; // 切换编辑状态
        if (!row.editable) {
          // 在这里可以进行保存操作，比如调用 API 将修改后的数据提交到后端
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
    margin-left: 11%;
    margin-top: 0;
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