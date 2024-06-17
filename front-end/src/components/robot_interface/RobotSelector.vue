<template>
    <div>
      <el-select v-model="selectedRobot" placeholder="选择机器类型" @change="onSelect">
        <el-option label="Fanuc" value="fanuc"></el-option>
        <el-option label="ABB" value="abb"></el-option>
        <!-- 添加更多机器人选项 -->
      </el-select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedRobot: '',
        textColor: 'blue', // 设置初始字体颜色
      };
    },
    methods: {
      onSelect(value) {
        this.$emit('select', value);
      }
    }
  };
  </script>
  