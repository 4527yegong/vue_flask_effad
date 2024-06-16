    <template>
      <div class="body" style="margin-top: 60px; margin-left: 20px; padding-top: 20px;">
        <div style="margin-left: 20%;margin-bottom: 20px;">
                <el-button type="primary" @click="goto">切换到作业列表</el-button>
        </div>

        <div style="display: flex; justify-content: space-between;">
          <div style="flex: 1; margin-right: 15px;">
            <v-chart :option="chartOptions_1" style="width: 100%; height: 400px;"></v-chart>
          </div>
          <div style="flex: 1; margin-left: 15px;">
            <v-chart :option="chartOptions_2" style="width: 100%; height: 400px;"></v-chart>
          </div>
        </div>

        <div style="margin-top: 20px;margin-left: 150px;margin-bottom: 100px;justify-content: center;">
          <v-chart :option="chartOptions_line" style="width: 60%; height: 300px;"></v-chart>
        </div>
      </div>
    </template>
  
  <script>

  import { defineComponent } from '@vue/composition-api';
  import { use } from 'echarts/core';
  import VChart from 'vue-echarts';
  import {
    CanvasRenderer
  } from 'echarts/renderers';
  import {
    LineChart,
    PieChart,
  } from 'echarts/charts';
  import {
    TitleComponent,
    TooltipComponent,
    LegendComponent
  } from 'echarts/components';
  
  // Register necessary components
  use([
    CanvasRenderer,
    PieChart,
    LineChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent
  ]);
  
  export default defineComponent({
    name: 'PieChart',
    components: {
      VChart
    },
    data() {
      return {
        chartOptions_1: {
          title: {
            text: '作业类型 1的各批次占用时间比例',
            subtext: '',
            left: 'center',
            textStyle: {
                color: '#ffffff' // 设置标题字体颜色
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
                { value: 1048, name: '批次 1' },
                { value: 735, name: '批次 2' },
                { value: 580, name: '批次 3' },
                { value: 484, name: '批次 4' },
                { value: 300, name: '批次 5' }
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
                    fontSize: 12, // 设置系列名称字体大小
                    color: '#ffffff' // 设置系列名称字体颜色
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
      chartOptions_line: {
        title: {
          text: '',
          textStyle: {
            color: '#ffffff'
          },
          left: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['作业 1 批次时间'],
          textStyle: {
            fontSize: 12, // 设置图例字体大小
            color: '#ffffff' // 设置图例字体颜色
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['批次 1', '批次 2', '批次 3', '批次 4', '批次 5'],
          axisLabel: {
            textStyle: {
              fontSize: 12, // 设置x轴刻度和标签字体大小
              color: '#ffffff' // 设置x轴刻度和标签字体颜色  
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            textStyle: {
              fontSize: 12, // 设置x轴刻度和标签字体大小
              color: '#ffffff' // 设置x轴刻度和标签字体颜色  
            }
          }
        },
        series: [{
          name: '作业 1 批次时间',
          type: 'line',
          data: [1048, 735, 580, 484, 300]
        }]
      },
      };
    },
    methods: {
      goto() {
        this.$router.push('/work_list');
      }
    }
  });
  </script>
  
  <style scoped>
  .body {
    background-color: #0e4272; /* 浅蓝色背景 */
    padding: 20px; /* 根据需要添加内边距 */
    min-height: 100vh; /* 设置最小高度为视口高度 */
  }
  </style>
  