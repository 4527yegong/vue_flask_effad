<template>
    <div id="app" class="container">
      <div class="table-container">
        <el-button type="primary" @click="addRow_admin">创建新设备</el-button>
        <el-button type="primary" @click="addRow_user">导入新设备</el-button>
        <el-table
          :data="tableData"
          style="width: 100%; margin-top: 10px;"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="num" label="编号" width="130">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.num }}</span>
              <el-input v-else v-model="scope.row.num"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="type" label="边端类型" width="180">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.type }}</span>
              <el-input v-else v-model="scope.row.type"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="effective" label="性能" width="130">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.effective }}</span>
              <el-input v-else v-model="scope.row.effective"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="resource" label="资源" width="130">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.resource }}</span>
              <el-input v-else v-model="scope.row.resource"></el-input>
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
        
          <el-table-column label="操作" width="450">
            <template slot-scope="scope">
              <div style="display: flex; gap: 10px;">
                <el-button @click="handleEdit(scope.row)" size="mini" type="primary">{{ scope.row.editable ? '保存' : '编辑' }}</el-button>
                <el-button
                  size="mini"
                  @click="editRow(scope.row)"
                >配置</el-button>
                <el-button
                  size="mini"
                  @click="deleteRow(scope.$index, scope.row)"
                >部署</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="deleteRow(scope.$index, scope.row)"
                >设备删除</el-button>
              </div>
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
        items: [
          { id: 1, isActive: true },
          { id: 2, isActive: false },
          // ...其他数据
        ],
        tableData: [
          { name: '设备 1 ', num: 'E 1' ,type:"边缘计算设备", effective:"1000W", resource:"1000W" , isActive: true , editable: false },
          { name: '设备 2 ', num: 'E 2',type:"边缘计算设备", effective:"1000W", resource:"1000W" , isActive: false, editable: false },
          { name: '设备 3 ', num: 'E 3',type:"边缘计算节点", effective:"1000W", resource:"1000W" , isActive: false , editable: false },
        ],
        selectedRow: null, // 用于存储选中行的数据
      };
    },
    methods: {
      addRow_admin() {
        this.tableData.push({ name: '新设备', num: 'E ' + (this.tableData.length + 1), type: "新设备类型", effective: "100W", resource: "100W", isActive: false, editable: false });
      },
      addRow_user() {
        const newRow = { name: '', authority: '普通用户', num: '' };
        this.tableData.push(newRow);
        this.selectedRow = newRow;
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
      confirmDelete() {
        if (!this.selectedRow) {
          this.$message({
            message: '请先选择要删除的行',
            type: 'warning',
          });
          return;
        }
        this.$confirm('此操作将永久删除该行, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          this.deleteRow(this.tableData.indexOf(this.selectedRow));
          this.selectedRow = null;
          this.$message({
            type: 'success',
            message: '删除成功!',
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          });
        });
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