<template>
  <div class="scene-linkage">
    <el-container>
      <!-- 左侧设备列表 -->
      <el-aside width="200px">
        <el-menu
          :default-active="activeDevice"
          @select="handleDeviceSelect"
          class="el-menu-vertical-demo">
          <el-submenu
            v-for="(devices, room) in deviceList"
            :key="room"
            :index="room">
            <template slot="title">{{ room }}</template>
            <el-menu-item
              v-for="device in devices"
              :key="device.id"
              :index="device.id">
              {{ device.name }}
              <el-tag :type="device.status === 'on' ? 'success' : 'danger'">{{ device.status }}</el-tag>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- 右侧场景联动设置 -->
      <el-main>
        <el-card>
          <div slot="header">
            <span>场景联动设置</span>
          </div>
          <el-form :model="sceneLinkageForm" label-width="100px">
            <el-form-item label="选择场景">
              <el-select v-model="sceneLinkageForm.scene" placeholder="请选择场景">
                <el-option
                  v-for="scene in scenes"
                  :key="scene.value"
                  :label="scene.label"
                  :value="scene.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="添加条件">
              <el-input v-model="sceneLinkageForm.condition" placeholder="例如：温度低于20度"></el-input>
            </el-form-item>
            <el-form-item label="选择事件">
              <el-checkbox-group v-model="sceneLinkageForm.events">
                <el-checkbox label="打开机器 1"></el-checkbox>
                <el-checkbox label="启动模块 2"></el-checkbox>
                <el-checkbox label="开启功能 3"></el-checkbox>
                <!-- 可以根据实际需要添加更多事件选项 -->
              </el-checkbox-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="saveLinkage">保存联动</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeDevice: '',
      deviceList: {
        '地点 1': [
          { id: '1', name: '事件 1', status: 'on' },
          { id: '2', name: '事件 2', status: 'off' },
          { id: '3', name: '事件 3', status: 'off' }
        ],
        '地点 2': [
          { id: '4', name: '事件 1', status: 'on' },
          { id: '5', name: '事件 2', status: 'on' }
        ]
      },
      scenes: [
        { value: '1', label: '场景 1' },
        { value: '2', label: '场景 2' },
        { value: '3', label: '场景 3' }
      ],
      sceneLinkageForm: {
        scene: '',
        condition: '',
        events: []
      }
    };
  },
  methods: {
    handleDeviceSelect(index, ) {
      this.activeDevice = index;
      // 处理设备选中后的逻辑，例如显示设备详细信息或其他操作
    },
    saveLinkage() {
      // 处理保存场景联动的逻辑，示例中省略具体实现
      // console.log('保存场景联动', this.sceneLinkageForm);
    }
  }
};
</script>

<style scoped>
.scene-linkage {
  display: flex;
  height: 100%;
  margin-top: 5%;
  margin-left: 15%;
  border: 1px solid #e6e6e6; /* 表格外框 */
  border-radius: 4px; /* 边框圆角 */
  padding: 10px;
  background-color: #fff; /* 背景色 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 阴影 */
}
.el-menu-vertical-demo {
  height: 100%;
  overflow-y: auto;
}
</style>
