<template>
    <div id="app" class="container">
      <div class="table-container">
        <!-- <el-button type="primary" @click="addRow_admin">创建新机器人作业</el-button>
        <el-button type="primary" @click="addRow_user">导入新作业</el-button> -->

              <!-- 按钮组 -->
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div >
            <el-button type="primary" @click="addRow_admin">创建新机器人作业</el-button>
            <el-button type="primary" @click="addRow_user">导入新作业</el-button>
          </div>
          <div>
            <!-- 时间查询表单 -->
            <!-- <el-form :inline="true" class="query-form" style="margin-top: 20px; ">
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
            </el-form> -->

          </div>
        </div>

        <el-table
          :data="tableData"
          style="width: 100%; margin-top: 10px;"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="num" label="编号" width="100"></el-table-column>
          <el-table-column prop="name" label="作业名" width="100"></el-table-column>
          <el-table-column prop="batch1" label="批次 1" width="90"></el-table-column>
          <el-table-column prop="batch2" label="批次 2" width="90"></el-table-column>
          <el-table-column prop="batch3" label="批次 3" width="90"></el-table-column>
          <el-table-column prop="batch4" label="批次 4" width="90"></el-table-column>
          <el-table-column prop="batch5" label="批次 5" width="90"></el-table-column>
          <!-- <el-table-column prop="time" label="批次 1" width="180"></el-table-column> -->
          <!-- <el-table-column prop="num" label="租赁机器数" width="180"></el-table-column> -->
          <el-table-column label="操作" width="450">
            <template slot-scope="scope">
              <div style="display: flex; gap: 10px;">
                <el-button
                  size="mini"
                  @click="editRow(scope.row)"
                >编辑</el-button>
                <el-button
                  size="mini"
                  @click="goto_1"
                >图表导出</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="deleteRow(scope.$index, scope.row)"
                >作业删除</el-button>
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
        tableData: [
          { name: '作业 1 ', num: 'J 1' ,batch1:"1048",batch2:"736",batch3:"580",batch4:"484",batch5:"300" },
          { name: '作业 2 ', num: 'J 2',batch1:"26",batch2:"587",batch3:"485",batch4:"369",batch5:"475" },
          { name: '作业 3 ', num: 'J 3',batch1:"2143",batch2:"586",batch3:"125",batch4:"74",batch5:"963" },
          // { name: 'David', num: '模型4',time:"2024-6-16" },
        ],
        selectedRow: null, // 用于存储选中行的数据
      };
    },
    methods: {
      goto_1() {
        this.$router.push({ path: '/work' });
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
      editRow(row) {
        let editDataString = JSON.stringify({
            name: row.name,
            num: row.num,
            authority: row.authority,
        });

        this.$prompt('请输入新信息', '编辑', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputValidator: (input) => {
            // 尝试将输入转换为JSON对象
            try {
                let inputObject = JSON.parse(input);
                // 验证输入对象的属性
                if (!inputObject.name) return '用户名不能为空';
                if (!inputObject.num) return '数量不能为空';
                if (!inputObject.authority) return '权限不能为空';
            } catch (e) {
                // 如果输入不是有效的JSON，返回错误信息
                return '输入的值不是有效的JSON';
            }
            return true;
            },
            inputValue: editDataString // 将对象转换为字符串作为初始输入值
        }).then(({ value }) => {
            // 更新 row 对象的属性
            let newValues = JSON.parse(value);
            row.name = newValues.name;
            row.num = newValues.num;
            row.authority = newValues.authority;
        }).catch(() => {
            // 用户取消操作时的反馈
            this.$message({
            message: '编辑已取消',
            type: 'info'
            });
        });
        },
      deleteRow(index) {
        this.tableData.splice(index, 1);
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