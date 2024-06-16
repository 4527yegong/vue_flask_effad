<template>
  <div class="battery-container">
    <div class="shell">
      <div 
        v-for="(item,index) in batteryChunk" 
        class="block" 
        :key="index"
        :style="{
          background: `${batteryColor}`
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    capacity:{
      type: [Number,String],
    }
  },
  computed:{
    batteryChunk(){
      return this.findInterval(this.capacity)
    },
    batteryColor(){
      if(this.batteryChunk >=0 && this.batteryChunk <= 1){
        return '#FE5F69'
      }else if(this.batteryChunk > 1 && this.batteryChunk <=4){
        return '#FFC95C'
      }else{
        return '#64BA8C'
      }
    }
  },
  methods:{
    findInterval(num) {
      var intervalSize = 100 / 6
      var interval = Math.floor(num / intervalSize)
      if (interval === 6) { 
        return interval
      } else {
        return interval + 1
      }
    }
  }
}
</script>
<style lang='less' scoped>
.battery-container{
  width: 48px;
  height: 24px;
  border: 4px solid #DFE6EE ;
  border-radius: 4px;
  position: relative;
  transform: scale(0.5);
  transform-origin: left top;
  &:after{
    content: "";
    display: block;
    height: 12px;
    width: 4px;
    position: absolute;
    background:#DFE6EE ;
    right: -8px;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
  .shell{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 2px;
    background: #F8FAFC ;
    display: grid;
    grid-template-columns: repeat(6,1fr);
    grid-column-gap: 2px;
    .block{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
