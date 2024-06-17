<template>
    <div class="message">{{ content }}</div>
  </template>
  
  <script>
  export default {
    props: ['content']
  };
  </script>
  
  <style>
  .message {
    padding: 10px;
    border: 1px solid #ccc;
    margin: 5px 0;
  }
  </style>
  