<template>
    <div class="video-container">
      <video
        ref="videoPlayer"
        :src="videoSrc"
        controls
        width="100%"
        @loadedmetadata="onVideoLoaded"
      ></video>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      videoSrc: {
        type: String,
        required: true
      }
    },
    methods: {
      onVideoLoaded() {
        // console.log('视频已加载');
        // 这里可以添加更多视频加载后的逻辑
      }
    }
  };
  </script>
  
  <style>
  .video-container {
    /* 样式可以根据需要进行调整 */
    width: 400px; /* 视频容器宽度 */
    height: 300px;
    margin: 10% 1%;
  }
  </style>