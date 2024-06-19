<template>
    <div id="app" class="container">
      <div class="table-container">

              <!-- 按钮组 -->
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div >
            <el-button type="primary" @click="addRow_admin">创建新机器人作业</el-button>
            <el-button type="primary" @click="addRow_user">导入新作业</el-button>
          </div>
        </div>

        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="num" label="编号" width="180">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.name }}</span>
              <el-input v-else v-model="scope.row.name"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="作业名" width="180">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.name }}</span>
              <el-input v-else v-model="scope.row.name"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="batch1" label="批次 1" width="120">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.batch1 }}</span>
              <el-input v-else v-model="scope.row.batch1"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="batch2" label="批次 2" width="120">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.batch2 }}</span>
              <el-input v-else v-model="scope.row.batch2"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="batch3" label="批次 3" width="90">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.batch3 }}</span>
              <el-input v-else v-model="scope.row.batch3"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="batch4" label="批次 4" width="90">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.batch4 }}</span>
              <el-input v-else v-model="scope.row.batch4"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="batch5" label="批次 5" width="90">
            <template slot-scope="scope">
              <span v-if="!scope.row.editable">{{ scope.row.batch5 }}</span>
              <el-input v-else v-model="scope.row.batch5"></el-input>
            </template>
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="handleEdit(scope.row)" size="mini" type="primary">{{ scope.row.editable ? '保存' : '编辑' }}</el-button>
              <el-button
                  size="mini"
                  @click="goto_1"
                >图表导出</el-button>
                <el-button
                  size="mini"
                  @click="goto_2"
                >作业视频</el-button>
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
          { name: '作业 1 ', num: 'J 1' ,batch1:"1048",batch2:"736",batch3:"580",batch4:"484",batch5:"300",editable: false },
          { name: '作业 2 ', num: 'J 2',batch1:"26",batch2:"587",batch3:"485",batch4:"369",batch5:"475" ,editable: false },
          { name: '作业 3 ', num: 'J 3',batch1:"2143",batch2:"586",batch3:"125",batch4:"74",batch5:"963",editable: false },
          // { name: 'David', num: '模型4',time:"2024-6-16" },
        ],
        selectedRow: null, // 用于存储选中行的数据
      };
    },
    methods: {
      goto_1() {
        this.$router.push({ path: '/work' });
      },
      goto_2() {
        this.$router.push({ path: '/work_vidoe' });
      },
      addRow_admin() {
        const newRow = { name: '', authority: '管理员', num: '' };
        this.tableData.push(newRow);
        this.selectedRow = newRow;
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
  .query-form {
    margin-bottom: 20px;
  }
  </style>