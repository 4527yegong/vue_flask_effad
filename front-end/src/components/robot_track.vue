

<template>
    <div id="app" class="container">
      <div class="parent-container" style="flex-grow: 1; max-width: auto; height: 1000px; display: flex; flex-direction: column;">
        <!-- 按钮和查询表单容器 -->
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <!-- 按钮组 -->
            <div style="margin-bottom: 20px;">
                <el-button type="primary" @click="addRow_admin">机器人工作日志显示</el-button>
            </div>
           <!-- 时间表查询 --> 
            <div >
               <el-form :inline="true" class="query-form" >
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
                 
              </el-form>
            </div> 

            <el-table :data="tableData_1" style="width: 100%">
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column prop="date" label="日期" width="180">
                <template slot-scope="scope">
                  <span v-if="!scope.row.editable">{{ scope.row.date }}</span>
                  <el-input v-else v-model="scope.row.date"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="work_content" label="作业描述" width="180">
                <template slot-scope="scope">
                  <span v-if="!scope.row.editable">{{ scope.row.work_content }}</span>
                  <el-input v-else v-model="scope.row.work_content"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="result" label="执行结果" width="180">
                <template slot-scope="scope">
                  <span v-if="!scope.row.editable">{{ scope.row.result }}</span>
                  <el-input v-else v-model="scope.row.result"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="waring" label="异常" width="180">
                <template slot-scope="scope">
                  <span v-if="!scope.row.editable">{{ scope.row.waring }}</span>
                  <el-input v-else v-model="scope.row.waring"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="robot" label="所属机器人" width="180">
                <template slot-scope="scope">
                  <span v-if="!scope.row.editable">{{ scope.row.robot }}</span>
                  <el-input v-else v-model="scope.row.robot"></el-input>
                </template>
              </el-table-column>

              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button @click="handleEdit(scope.row)" size="mini" type="primary">{{ scope.row.editable ? '保存' : '编辑' }}</el-button>
                  <el-button @click="gotoDetail(scope.row)" size="mini" type="primary">查看</el-button>
                  <el-button @click="goto_1" size="mini" type="primary">查看识别图像</el-button>
                </template>
              </el-table-column>


            </el-table>
        </div>
       <!-- 其他内容 -->
      </div>
    </div>
</template>
  


  <script>
  export default  ({

    data() {
      return {
        queryStartTime: '',
        queryEndTime: '',
        tableData: [
          { timestamp: '2024-06-17 10:00:00', value: 25 },
          { timestamp: '2024-06-17 11:00:00', value: 30 },
          { timestamp: '2024-06-17 12:00:00', value: 28 }
        ],
        tableData_1: [
          { date: '2023-10-14', work_content: '检测区域1', result: '成功', waring: '无', robot: '检测机器人', editable: false , id: 1 },
          { date: '2023-11-16', work_content: '采摘区域1', result: '成功', waring: '有', robot: '采摘机器人', editable: false , id: 2 },
          { date: '2023-12-07', work_content: '喷洒区域1', result: '成功', waring: '无', robot: '喷洒机器人', editable: false , id: 3 },
          { date: '2024-01-17', work_content: '喷洒区域1', result: '成功', waring: '无', robot: '喷洒机器人', editable: false , id: 4 },
          { date: '2024-01-17', work_content: '喷洒区域2', result: '成功', waring: '无', robot: '喷洒机器人', editable: false , id: 5 },
          { date: '2024-02-17', work_content: '采摘区域3', result: '成功', waring: '无', robot: '采摘机器人', editable: false , id: 6 },
          { date: '2024-03-17', work_content: '采摘区域4', result: '成功', waring: '无', robot: '采摘机器人', editable: false , id: 7 },
          { date: '2024-03-01', work_content: '除草区域1', result: '成功', waring: '无', robot: '除草机器人', editable: false , id: 8 },
          { date: '2024-04-17', work_content: '除草区域2', result: '成功', waring: '无', robot: '除草机器人', editable: false , id: 9 },
          { date: '2024-04-27', work_content: '除草区域3', result: '成功', waring: '无', robot: '除草机器人', editable: false , id: 10 },
          { date: '2024-05-17', work_content: '除草区域4', result: '成功', waring: '无', robot: '除草机器人', editable: false , id: 11 },
          { date: '2024-05-21', work_content: '除草区域5', result: '成功', waring: '无', robot: '除草机器人', editable: false , id: 12 },
        ],
        selectedRow: null, // 用于存储选中行的数据
      }
    },
    methods: {
      goto_1() {
        this.$router.push({ path: '/picture_show' }); // 假设 id 为 1
      },
      gotoDetail(row) {
        // 查看按钮点击事件处理逻辑，跳转到详情页
        // 假设详情页路由为 '/detail/:id'，其中 :id 是动态参数
        this.$router.push(`/detail/${row.id}`); // 假设 row 对象中有一个 id 字段
      },
      handleEdit(row) {
        row.editable = !row.editable; // 切换编辑状态
        if (!row.editable) {
          // 在这里可以进行保存操作，比如调用 API 将修改后的数据提交到后端
        //   console.log('保存数据：', row);
        }
      },
      deleteRow(index, /* row */) {
        this.tableData_1.splice(index, 1); // 从 tableData 数组中移除指定索引的行
      },
      handleSelectionChange(selection) {
        this.selectedRow = selection.length > 0 ? selection[0] : null;
      },
      handleQuery() {
        // 将日期字符串转换为日期对象，以便于比较
        const start = new Date(this.queryStartTime).setHours(0, 0, 0, 0);
        const end = new Date(this.queryEndTime).setHours(23, 59, 59, 999);

        // 过滤 tableData_1 中的数据
        this.tableData_1 = this.tableData_1.filter(item => {
          const itemDate = new Date(item.date).setHours(0, 0, 0, 0); // 将日期设置为当天的起始时间
          return itemDate >= start && itemDate <= end;
        });
      },
    },
        
  });

  </script>

<style scoped>
.container {
  margin-left: 16%;
  margin-top: 5%;
  width: 80%;
}

.parent-container {
  display: flex;
  justify-content: space-between;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.el-button {
  margin-right: 5%;
}

.table-container {
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.query-form {
  margin-bottom: 0;
}

.video-player {
  width: 100%;
  height: 500px;
  margin-top: 20px;
} 
</style>
