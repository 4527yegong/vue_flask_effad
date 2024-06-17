<template>
    <div id="app" class="container">>
      <div class="table-container">
        <h1>机器人数据接口</h1>
        <InterfaceSelector @select="handleInterfaceSelect"/>
        <RobotSelector @select="handleRobotSelect"/>
        <Message v-for="(message, index) in messages" :key="index" :content="message"/>
        <InputBox @submit="sendMessage"/>

      </div>
    </div>
  </template>
  
  <script>
import InterfaceSelector from './robot_interface/InterfaceSelector.vue';
import RobotSelector from './robot_interface/RobotSelector.vue';
import Message from './robot_interface/Message.vue';
import InputBox from './robot_interface/InputBox.vue';
import axios from 'axios';


export default {
  data() {
    return {
      messages: [],
      selectedInterface: 'rest',
      selectedRobot: 'fanuc'
    };
  },
  components: {
    InterfaceSelector,
    RobotSelector,
    Message,
    InputBox
  },
  methods: {
    async sendMessage(inputText) {
      try {
        let response;
        switch (this.selectedInterface) {
          case 'rest':
            response = await this.sendRestRequest(inputText);
            break;
          case 'websocket':
            response = await this.sendWebSocketRequest(inputText);
            break;
          // 可添加更多接口类型的处理逻辑
          default:
            throw new Error('未知接口类型');
        }
        this.messages.push(response.data.reply);
      } catch (error) {
        // console.error('Error sending message:', error);
        this.messages.push('Error: ' + error.message);
      }
    },
    handleInterfaceSelect(interfaceType) {
      this.selectedInterface = interfaceType;
    },
    handleRobotSelect(robotType) {
      this.selectedRobot = robotType;
    },
    async sendRestRequest(inputText) {
      const response = await axios.post(`/api/${this.selectedRobot}/query`, { text: inputText });
      return response;
    },
    async sendWebSocketRequest() {
      // WebSocket请求的实现
    }
  }
};
</script>
  
  <style scoped>
  .container {
    display: flex;
    height: 100vh;
    width: 80%;
    margin-left: 10%;
    margin-top: 5%;
  }
  
  .table-container {
    flex: 1;
    /* display: flex; */
    align-items: center; 
    justify-content: center;
    height: 1000px;
    width: 800px;
    flex-direction: column;
    align-items: center;
    border: 1px solid #e6e6e6; /* 表格外框 */
    border-radius: 4px; /* 边框圆角 */
    padding: 10px;
    background-color: #fff; /* 背景色 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 阴影 */
    margin-left: 10%;
  }
  
  .el-button {
    margin-right: 10px; /* 按钮间距 */
  }

 
  </style>