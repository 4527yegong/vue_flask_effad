<template>
    <div class="database-table">
      <el-table :data="tableData" style="width: 100%">

        <el-table-column prop="ID" label="ID" width="180">
          <template slot-scope="scope">
            <span v-if="!scope.row.editable">{{ scope.row.ID }}</span>
            <el-input v-else v-model="scope.row.ID"></el-input>
          </template>
        </el-table-column>

        <el-table-column prop="memory" label="存储区域" width="180">
          <template slot-scope="scope">
            <span v-if="!scope.row.editable">{{ scope.row.memory }}</span>
            <el-input v-else v-model="scope.row.memory"></el-input>
          </template>
        </el-table-column>

        <el-table-column prop="description" label="数值" width="120">
          <template slot-scope="scope">
            <span v-if="!scope.row.editable">{{ scope.row.description }}</span>
            <el-input v-else v-model="scope.row.description"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="table_size" label="表大小" width="160">
          <template slot-scope="scope">
            <span v-if="!scope.row.editable">{{ scope.row.table_size }}</span>
            <el-input v-else v-model="scope.row.table_size"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="time" label="时间戳 " width="160">
          <template slot-scope="scope">
            <span v-if="!scope.row.editable">{{ scope.row.time }}</span>
            <el-input v-else v-model="scope.row.time"></el-input>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleEdit(scope.row)" size="mini" type="primary">{{ scope.row.editable ? '保存' : '编辑' }}</el-button>
          </template>
        </el-table-column>
        
      </el-table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tableData: [
        { ID: '20240601001',time: '2024-06-18 10:00:00', description: '125', table_size: '1KB', editable: false, memory : '内存' },
          { ID: '20240601001' ,time:'2024-06-19 10:00:00', description: '236', table_size: '1KB', editable: false , memory: '内存'},
          { ID: '20240601001',time:'2024-06-20 10:00:00', description: '452', table_size: '1KB', editable: false, memory : '内存' },
          { ID: '20240601001', time: '2024-06-18 10:00:00', description: '42', table_size: '1KB', editable: false, memory: '内存' },
          { ID: '20240601002', time: '2024-06-19 10:00:00', description: '41', table_size: '1KB', editable: false, memory: '内存' },
          { ID: '20240601003', time: '2024-06-20 10:00:00', description: '2', table_size: '1KB', editable: false, memory: '内存' },
          { ID: '20240601004', time: '2024-06-21 10:00:00', description: '55', table_size: '2KB', editable: false, memory: '磁盘' },
          { ID: '20240601005', time: '2024-06-22 10:00:00', description: '11', table_size: '3KB', editable: false, memory: '内存' },
          { ID: '20240601006', time: '2024-06-23 10:00:00', description: '2', table_size: '4KB', editable: false, memory: '磁盘' },
          { ID: '20240601007', time: '2024-06-24 10:00:00', description: '52', table_size: '5KB', editable: false, memory: '内存' },
          { ID: '20240601008', time: '2024-06-25 10:00:00', description: '22', table_size: '6KB', editable: false, memory: '磁盘' },
          { ID: '20240601009', time: '2024-06-26 10:00:00', description: '758', table_size: '7KB', editable: false, memory: '内存' },
          { ID: '20240601010', time: '2024-06-27 10:00:00', description: '554', table_size: '8KB', editable: false, memory: '磁盘' },
          { ID: '20240601001',time: '2024-06-18 10:00:00', description: '442', table_size: '1KB', editable: false, memory : '内存' },
          { ID: '20240601001' ,time:'2024-06-19 10:00:00', description: '445', table_size: '1KB', editable: false , memory: '内存'},
          { ID: '20240601001',time:'2024-06-20 10:00:00', description: '25', table_size: '1KB', editable: false, memory : '内存' },
          { ID: '20240601001', time: '2024-06-18 10:00:00', description: '55', table_size: '1KB', editable: false, memory: '内存' },
          { ID: '20240601002', time: '2024-06-19 10:00:00', description: '55', table_size: '1KB', editable: false, memory: '内存' },
          { ID: '20240601003', time: '2024-06-20 10:00:00', description: '55', table_size: '1KB', editable: false, memory: '内存' },
          { ID: '20240601004', time: '2024-06-21 10:00:00', description: '22', table_size: '2KB', editable: false, memory: '磁盘' },
          { ID: '20240601005', time: '2024-06-22 10:00:00', description: '25', table_size: '3KB', editable: false, memory: '内存' },
          { ID: '20240601006', time: '2024-06-23 10:00:00', description: '88', table_size: '4KB', editable: false, memory: '磁盘' },
          { ID: '20240601007', time: '2024-06-24', description: '55', table_size: '5KB', editable: false, memory: '内存' },
          { ID: '20240601008', time: '2024-06-25', description: '255', table_size: '6KB', editable: false, memory: '磁盘' },
          { ID: '20240601009', time: '2024-06-26', description: '55', table_size: '7KB', editable: false, memory: '内存' },
          { ID: '20240601010', time: '2024-06-27', description: '12', table_size: '8KB', editable: false, memory: '磁盘' },
          { ID: '20240601001',time: '2024-06-18', description: '张三', table_size: '1KB', editable: false, memory : '内存' },
          { ID: '20240601001' ,time:'2024-06-19', description: '李四', table_size: '1KB', editable: false , memory: '内存'},
          { ID: '20240601001',time:'2024-06-20', description: '王五', table_size: '1KB', editable: false, memory : '内存' },
          { ID: '20240601001', time: '2024-06-18', description: '张三', table_size: '1KB', editable: false, memory: '内存' },
          { ID: '20240601002', time: '2024-06-19', description: '李四', table_size: '1KB', editable: false, memory: '内存' },
          { ID: '20240601003', time: '2024-06-20', description: '王五', table_size: '1KB', editable: false, memory: '内存' },
          { ID: '20240601004', time: '2024-06-21', description: '赵六', table_size: '2KB', editable: false, memory: '磁盘' },
          { ID: '20240601005', time: '2024-06-22', description: '孙七', table_size: '3KB', editable: false, memory: '内存' },
          { ID: '20240601006', time: '2024-06-23', description: '周八', table_size: '4KB', editable: false, memory: '磁盘' },
          { ID: '20240601007', time: '2024-06-24', description: '郑九', table_size: '5KB', editable: false, memory: '内存' },
          { ID: '20240601008', time: '2024-06-25', description: '王十', table_size: '6KB', editable: false, memory: '磁盘' },
          { ID: '20240601009', time: '2024-06-26', description: '冯十一', table_size: '7KB', editable: false, memory: '内存' },
          { ID: '20240601010', time: '2024-06-27', description: '陈十二', table_size: '8KB', editable: false, memory: '磁盘' },
          { ID: '20240601001',time: '2024-06-18', description: '张三', table_size: '1KB', editable: false, memory : '内存' },
          { ID: '20240601001' ,time:'2024-06-19', description: '李四', table_size: '1KB', editable: false , memory: '内存'},
          { ID: '20240601001',time:'2024-06-20', description: '王五', table_size: '1KB', editable: false, memory : '内存' },
          { ID: '20240601001', time: '2024-06-18', description: '张三', table_size: '1KB', editable: false, memory: '内存' },
          { ID: '20240601002', time: '2024-06-19', description: '李四', table_size: '1KB', editable: false, memory: '内存' },
          { ID: '20240601003', time: '2024-06-20', description: '王五', table_size: '1KB', editable: false, memory: '内存' },
          { ID: '20240601004', time: '2024-06-21', description: '赵六', table_size: '2KB', editable: false, memory: '磁盘' },
          { ID: '20240601005', time: '2024-06-22', description: '孙七', table_size: '3KB', editable: false, memory: '内存' },
          { ID: '20240601006', time: '2024-06-23', description: '周八', table_size: '4KB', editable: false, memory: '磁盘' },
          { ID: '20240601007', time: '2024-06-24', description: '郑九', table_size: '5KB', editable: false, memory: '内存' },
          { ID: '20240601008', time: '2024-06-25', description: '王十', table_size: '6KB', editable: false, memory: '磁盘' },
          { ID: '20240601009', time: '2024-06-26', description: '冯十一', table_size: '7KB', editable: false, memory: '内存' },
          { ID: '20240601010', time: '2024-06-27', description: '陈十二', table_size: '8KB', editable: false, memory: '磁盘' },
        ]
      };
    },
    methods: {
      handleEdit(row) {
        row.editable = !row.editable; // 切换编辑状态
        if (!row.editable) {
          // 在这里可以进行保存操作，比如调用 API 将修改后的数据提交到后端
        //   console.log('保存数据：', row);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .database-table {
    margin-left: 15%;
    margin-top: 90px;
    border: 1px solid #e6e6e6; /* 表格外框 */
    border-radius: 4px; /* 边框圆角 */
    padding: 10px;
    background-color: #fff; /* 背景色 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 阴影 */
    /* 可以添加组件公共的样式 */
  }
  /* 可以添加组件私有的样式 */
  .el-table {
    border-collapse: collapse;
  }
  
  .el-table th, .el-table td {
    border: 1px solid #dcdfe6;
  }
  </style>
  