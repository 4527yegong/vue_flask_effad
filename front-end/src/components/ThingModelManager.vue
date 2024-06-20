<template>
    <div id="app" class="container">
      <div class="table-container">
        <el-button type="primary" @click="addRow_admin">创建新物模型</el-button>
        <el-button type="primary" @click="addRow_user">导入本地物模型</el-button>

        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="num" label="编号" width="140">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.num }}</span>
              <el-input v-else v-model="scope.row.num"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="物模型名" width="140">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.name }}</span>
              <el-input v-else v-model="scope.row.name"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="property" label="属性" width="160">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.property }}</span>
              <el-input v-else v-model="scope.row.property"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="service" label="服务" width="160">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.service }}</span>
              <el-input v-else v-model="scope.row.service"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="event" label="事件" width="160">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.event }}</span>
              <el-input v-else v-model="scope.row.event"></el-input>
            </template>
          </el-table-column>
          
          

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="handleEdit(scope.row)" size="mini" type="primary">{{ scope.row.editable ? '保存' : '编辑' }}</el-button>
              <el-button
                  size="mini"
                  @click="handleEdit(scope.row)"
                >模型导出</el-button>
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
          { name: '物模型 1', num: 'T 1' ,property:"属性1", service:"服务1",event:"事件1",time:"2024-6-14", editable: false },
          { name: '物模型 2', num: 'T 2',property:"属性2",service:"服务2",event:"事件2",time:"2024-6-15" , editable: false },
          { name: '物模型 3', num: 'T 3',property:"属性3",service:"服务3",event:"事件3",time:"2024-6-16", editable: false },
          // { name: 'David', num: '模型4',time:"2024-6-16" },
        ],
        selectedRow: null, // 用于存储选中行的数据
      };
    },
    methods: {
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
      addRow_admin() {
        this.tableData.push({ name: '新模型', num: 'T ' + (this.tableData.length + 1), property: "新属性", service: "新服务", event: "新事件", time: new Date().toLocaleDateString(), editable: false });
      },
      addRow_user() {
        // 这里可以编写导入本地模型的逻辑
        // 暂且用与 addRow_admin 相同的逻辑作为示例
        this.tableData.push({ name: '本地模型', num: 'M ' + (this.tableData.length + 1), time: new Date().toLocaleDateString(), editable: false });
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