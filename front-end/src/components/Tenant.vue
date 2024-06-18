<template>
    <div id="app" class="container">
      <div class="table-container">
        <el-button type="primary" @click="addRow_admin">添加管理员</el-button>
        <el-button type="primary" @click="addRow_user">添加普通用户</el-button>
          
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="name" label="租户名" width="180">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.name }}</span>
              <el-input v-else v-model="scope.row.name"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="authority" label="权限" width="180">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.authority }}</span>
              <el-input v-else v-model="scope.row.authority"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="num_machine" label="总租赁机器数" width="180">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.num_machine }}</span>
              <el-input v-else v-model="scope.row.num_machine"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="num_using" label="在使用机器数" width="180">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.num_using }}</span>
              <el-input v-else v-model="scope.row.num_using"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="num_remain" label="剩余可使用机器数" width="180">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.num_remain }}</span>
              <el-input v-else v-model="scope.row.num_remain"></el-input>
            </template>
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="handleEdit(scope.row)" size="mini" type="primary">{{ scope.row.editable ? '保存' : '编辑' }}</el-button>
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
        tableData: [
          { name: 'Alice', authority: '管理员', num_machine: 100, num_using: 69, num_remain: 31, editable: false },
          { name: 'Bob', authority: '普通用户', num_machine: 50, num_using: 36, num_remain: 14, editable: false },
          { name: 'Carol', authority: '普通用户', num_machine: 30, num_using: 22, num_remain: 8, editable: false },
          { name: 'David', authority: '普通用户', num_machine: 20, num_using: 11, num_remain: 9 , editable: false },
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