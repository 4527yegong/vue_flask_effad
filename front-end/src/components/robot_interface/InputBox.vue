<template>
    <div>
      <input type="text" v-model="inputText" @keydown.enter="submitMessage">
      <button @click="submitMessage">发送</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputText: ''
      };
    },
    methods: {
      submitMessage() {
        this.$emit('submit', this.inputText);
        this.inputText = '';
      }
    }
  };
  </script>
  