<template>
    <div id="app" class="container">
      <div class="table-container">
        <el-button type="primary" @click="addRow_admin">创建新物模型</el-button>
        <el-button type="primary" @click="addRow_user">导入本地物模型</el-button>
        <el-table
          :data="tableData"
          style="width: 100%; margin-top: 10px;"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="num" label="编号" width="120"></el-table-column>
          <el-table-column prop="name" label="模型名" width="120"></el-table-column>
          <el-table-column prop="property" label="属性" width="120"></el-table-column>
          <el-table-column prop="service" label="服务" width="120"></el-table-column>
          <el-table-column prop="event" label="事件" width="120"></el-table-column>

          <el-table-column label="操作" width="300">
            <template slot-scope="scope">
              <div style="display: flex; gap: 8px;">
                <el-button
                  size="mini"
                  @click="editRow(scope.row)"
                >编辑</el-button>
                <el-button
                  size="mini"
                  
                  @click="deleteRow(scope.$index, scope.row)"
                >导出物模型</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="deleteRow(scope.$index, scope.row)"
                >删除</el-button>
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
          { name: '物模型 1', num: 'T 1' ,property:"属性1", service:"服务1",event:"事件1",time:"2024-6-14" },
          { name: '物模型 2', num: 'T 2',property:"属性2",service:"服务2",event:"事件2",time:"2024-6-15" },
          { name: '物模型 3', num: 'T 3',property:"属性3",service:"服务3",event:"事件3",time:"2024-6-16" },
          // { name: 'David', num: '模型4',time:"2024-6-16" },
        ],
        selectedRow: null, // 用于存储选中行的数据
      };
    },
    methods: {
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
  </style>