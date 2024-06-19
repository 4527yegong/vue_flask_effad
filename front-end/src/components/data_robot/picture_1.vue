<template>
<div class="demo-image" style="margin-left: 10%;margin-top: 5%;">
    <div style="margin-left: 10%;margin-top: 5%;">
        <span class="demonstration">{{ fit }}</span>
    </div>
    <div class="block" v-for="fit in fits" :key="fit">
      
      <el-image
        style="width: 800px; height: 600px"
        :src="url"
        :fit="fit"></el-image>
    </div>
  </div>
 </template> 
  <script>
    export default {
      data() {
        return {
          fits: ['检测图像'],
          url: '/picture/0baabe1e-b188-4c55-8f61-0f484f90c73b___FAM_B.Rot 3532_flipLR.JPG'

        }
      }
    }
  </script>