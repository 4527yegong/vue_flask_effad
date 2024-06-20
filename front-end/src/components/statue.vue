

  <template>
    <div id="app" class="container">
      <div class="parent-container">
        <div style="flex: 1; margin-right: 15px;">
            <el-button type="primary" @click="addRow_admin">机器人状态实时监测</el-button>
            <div style="display: flex; justify-content: flex-end;margin-right: 10px;">
              <!-- 使用电池组件并传递电量 --> {{"电量："}}
              <battery-component :capacity="batteryLevel"></battery-component>
            </div>
            <video-player :video-src="videoUrl"></video-player>
        </div>
        <div style="flex: 1; margin-left: 15px;">
            <el-button type="primary" @click="addRow_user">检测数据准确率导出</el-button>
            <v-chart :option="chartOptions_1" style="width: 100%; height: 400px;margin-top: 10px;"></v-chart>
        </div>
      </div>
      <div class="panel" :style="{transform: `rotate(${rotate}deg)`}">
      <div class="remainder" :style="{width: quantity +'%'}" />
    </div>
    <div v-show="showText" :style="{marginLeft: (parseFloat(rotate)? 0 : '10') + 'px'}"
      class="text">{{ quantity }}%</div>
    </div>
  </template>
  
  <script>
  import VideoPlayer from './VideoPlayer.vue';
  import { defineComponent } from '@vue/composition-api';
  import { use } from 'echarts/core';
  import VChart from 'vue-echarts';
  import {
    CanvasRenderer
  } from 'echarts/renderers';
  import {
    PieChart
  } from 'echarts/charts';
  import {
    TitleComponent,
    TooltipComponent,
    LegendComponent
  } from 'echarts/components';
  import BatteryComponent from './battery-component.vue'; // 替换为组件的实际路径
    // Register necessary components
    use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent
  ]);
  
  export default defineComponent ({
    components: {
      VideoPlayer,
      VChart,
      BatteryComponent,
    },
    data() {
      return {
        batteryLevel: 80, // 假设当前电量为75%
        videoUrl: "C:/Users/lianlong/Desktop/Yolov5-Flask-VUE/front-end/1118379989-1-208.mp4",
        chartOptions_1: {
          title: {
            text: '',
            subtext: '',
            left: 'center',
            textStyle: {
                color: '#000000' // 设置标题字体颜色
                }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{d}%'
            },
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '50%',
              data: [
                { value: 2096, name: '准确数据' },
                { value: 75, name: '错误数据' },
                { value: 14, name: '未知数据' },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              label: {
                textStyle: {
                    fontSize: 14, // 设置系列名称字体大小
                    color: '#000000' // 设置系列名称字体颜色
                }
                }
            }
          ]
        },
        chartOptions_2: {
        title: {
        text: '作业类型 1的各批次占用时间量',
        textStyle: {
                color: '#ffffff' // 设置标题字体颜色
                },
        subtext: '',
        left: 'center'
        },
        xAxis: {
          type: 'category',
          data: ['批次 1', '批次 2', '批次 3', '批次 4', '批次 5'],
          axisLabel: {
                textStyle: {
                fontSize: 12, // 设置x轴刻度和标签字体大小
                color: '#ffffff' // 设置x轴刻度和标签字体颜色
                }
            },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
                textStyle: {
                fontSize: 12, // 设置x轴刻度和标签字体大小
                color: '#ffffff' // 设置x轴刻度和标签字体颜色
                }
            },
        },
        series: [{
            data: [
                { value: 1048, name: '批次 1' },
                { value: 735, name: '批次 2' },
                { value: 580, name: '批次 3' },
                { value: 484, name: '批次 4' },
                { value: 300, name: '批次 5' }
              ],
          type: 'bar',
          label: {
                textStyle: {
                    fontSize: 12, // 设置系列名称字体大小
                    color: '#ffffff' // 设置系列名称字体颜色
                }
                }
        }]
      },
      };
    }
  });
  </script>

    <style scoped>
    .container{
      margin-left: 11%;
      margin-top: 0;
    }
    

    .parent-container {
    display: flex; /* 启用 Flexbox 布局 */
    justify-content: space-between; /* 可选，如果需要在子元素之间分配空间 */
    border: 1px solid #e6e6e6; /* 表格外框 */
    border-radius: 4px; /* 边框圆角 */
    padding: 10px;
    background-color: #fff; /* 背景色 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 阴影 */
    }
    .el-button {
      margin-right: 5%; /* 按钮间距 */
    }
    
    .table-container {
        border: 1px solid #e6e6e6; /* 表格外框 */
        border-radius: 4px; /* 边框圆角 */
        padding: 10px;
        background-color: #fff; /* 背景色 */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 阴影 */
    }
    </style>