<template>
    <div>
      <el-select v-model="selectedInterface" placeholder="选择接口类型" @change="onSelect">
        <el-option label="CSV文件接口" value="csv"></el-option>
        <el-option label="JSON文件接口" value="json"></el-option>
        <el-option label="XML文件接口" value="xml"></el-option>
        <!-- 添加更多接口选项 -->
      </el-select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedInterface: ''
      };
    },
    methods: {
      onSelect(value) {
        this.$emit('select', value);
      }
    }
  };
  </script>
  
  <style>
  /* 样式按需求自定义 */
  </style>
  