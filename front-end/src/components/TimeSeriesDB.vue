<template>
  <div class="time-series-db">
    <el-container>
      <!-- 查询条件设置区域 -->
      <el-header>
        <el-form :inline="true" class="query-form">
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
          <el-button type="primary" @click="goto_1">查看数据库</el-button>
        </el-form>
      </el-header>

      <!-- 数据展示区域 -->
      <el-main>
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="timestamp"
            label="时间戳">
          </el-table-column>
          <el-table-column
            prop="value"
            label="数值">
          </el-table-column>
          <el-table-column
            label="操作"
            width="120">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index)">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>

      <!-- 数据存储管理区域 -->
      <el-footer>
        <el-button type="primary" @click="handleAdd">添加数据</el-button>
        <el-button type="info" @click="handleExport">导出数据</el-button>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        queryStartTime: '',
        queryEndTime: '',
        tableData: [
          { timestamp: '2024-06-17 10:00:00', value: 25 },
          { timestamp: '2024-06-17 11:00:00', value: 30 },
          { timestamp: '2024-06-17 12:00:00', value: 28 }
        ]
      };
    },
    methods: {
      handleQuery() {
        // 处理查询逻辑，根据queryStartTime和queryEndTime从数据库中获取数据
        // console.log('查询时间范围：', this.queryStartTime, '至', this.queryEndTime);
        // 此处可根据实际情况更新this.tableData
      },
      handleAdd() {
        // 处理添加数据的逻辑
        // 示例中省略具体实现
        // console.log('添加数据');
      },
      handleDelete(index) {
        // 处理删除数据的逻辑
        this.tableData.splice(index, 1);
        // console.log('删除数据');
      },
      handleExport() {
        // 处理导出数据的逻辑
        // 示例中省略具体实现
        // console.log('导出数据');
      },
      goto_1() {
        this.$router.push({ path: '/DatabaseTable' });
      },
    }
  };
</script>

<style scoped>
  .time-series-db {
    margin-top: 0;
    margin-left: 11%;
    border: 1px solid #e6e6e6; /* 表格外框 */
    border-radius: 4px; /* 边框圆角 */
    padding: 10px;
    background-color: #fff; /* 背景色 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 阴影 */
    
  }

  .query-form {
    margin-bottom: 20px;
  }
</style>
