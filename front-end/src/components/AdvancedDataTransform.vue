<template>
    <div >
      <!-- 输入数据 -->
        <div class="data-converter" style="margin-top: 5%; display: flex; justify-content: space-between;">
            <el-card class="data-card">
                <div slot="header" class="clearfix">
                <span>清洗数据</span>
                </div>
                <el-form ref="inputForm" :model="inputData" label-width="100px">
                
                    <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                        <el-button size="small" type="primary">点击上传</el-button>
                        </el-upload>

                <el-form-item label="输入数据">
                    <el-input v-model="inputData" placeholder="请输入需要转换的数据"></el-input>
                    <el-button @click="cleanData" type="text" style="margin-left: 10px;">清洗数据</el-button>
                </el-form-item>
                </el-form>
            </el-card>
            
            <!-- 数据标准化 -->
            <el-card class="data-card">
                <div slot="header" class="clearfix">
                <span>数据标准化转换</span>
                </div>
                <el-form ref="optionsForm" :model="conversionOption" label-width="120px">
                <el-form-item label="转换选项">
                    <el-checkbox-group v-model="conversionOption">
                    <el-checkbox label="option1">选项1</el-checkbox>
                    <el-checkbox label="option2">选项2</el-checkbox>
                    <el-checkbox label="option3">选项3</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                </el-form>
                <el-button type="primary" @click="normalizeData">转换数据</el-button>
            </el-card>
            
            <!-- 格式转换 -->
            <el-card class="data-card">
                <div slot="header" class="clearfix">
                <span>数据格式转换</span>
                </div>
                
                <!-- 输入数据选择 -->
                <el-form ref="inputForm" :model="formData" label-width="120px">
                <el-form-item label="选择数据格式">
                    <el-radio-group v-model="selectedFormat">
                    <el-radio label="json">JSON</el-radio>
                    <el-radio label="csv">CSV</el-radio>
                    <!-- 可以根据需要添加更多选项，如关系数据库、NoSQL数据库等 -->
                    </el-radio-group>
                </el-form-item>
                
                <!-- <el-form-item label="输入数据">
                    <el-input v-model="inputData" placeholder="请输入需要转换的数据"></el-input>
                </el-form-item> -->
                </el-form>
                
                <!-- 转换选项 -->
                <el-form ref="optionsForm" :model="conversionOptions" label-width="120px" v-if="selectedFormat === 'json'">
                <el-form-item label="JSON 转换选项">
                    <el-checkbox-group v-model="jsonOptions">
                    <el-checkbox label="format">格式化输出</el-checkbox>
                    <!-- 可以根据需要添加更多选项 -->
                    </el-checkbox-group>
                </el-form-item>
                </el-form>
                
                <!-- 转换按钮 -->
                <el-button type="primary" @click="convertData">转换数据</el-button>
                <el-button type="primary" @click="exportf">文件导出</el-button>
                <el-dialog
                title="文件导出成功"
                :visible="exportSuccess"
                @close="exportSuccess = false"
                >
                <p>您的文件已成功导出。</p>
                </el-dialog>
                <!-- 转换过程展示 -->
                <!-- <el-divider v-if="convertedData !== ''"></el-divider>
                <div v-if="convertedData !== ''">
                <h4>转换后的数据：</h4>
                <pre>{{ convertedData }}</pre>
                </div> -->
            </el-card>
        </div>



        <div class="data-converter" style="margin-top: 5%; display: flex; justify-content: space-between;">
            <!-- 数据清洗和转换过程展示 -->
            <el-card v-if="cleanedData !== '' || conversionLog.length > 0" class="data-card">
                <div slot="header" class="clearfix">
                <span>数据清洗和转换过程</span>
                </div>
                <div v-if="cleanedData !== ''">
                <strong>清洗后的数据</strong>: {{ cleanedData }}
                </div>
                <!-- <div v-for="(log, index) in conversionLog" :key="index" style="margin-top: 10px;">
                <strong>{{ log.label }}</strong>: {{ log.data }}
                </div> -->
                <div v-if="outputData !== ''">
                <strong>标准化后的数据</strong>: {{ outputData }}
                </div>
                <div v-if="convertedData !== ''">
                <strong>格式转换后的数据：</strong>: {{ convertedData }}
                </div>
            </el-card>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        exportSuccess: false, // 控制弹窗显示与隐藏
        cleanedData: '', // 清洗后的数据
        conversionOption: [], // 转换选项
        outputData: '', // 输出的数据
        conversionLog: [], // 转换过程日志
        formData: {
          selectedFormat: 'json',
          inputData: '',
        },
        conversionOptions: {
          jsonOptions: [],
        },
        convertedData: '',
      };
    },
    computed: {
      selectedFormat: {
        get() {
          return this.formData.selectedFormat;
        },
        set(value) {
          this.formData.selectedFormat = value;
        },
      },
      inputData: {
        get() {
          return this.formData.inputData;
        },
        set(value) {
          this.formData.inputData = value;
        },
      },
      jsonOptions: {
        get() {
          return this.conversionOptions.jsonOptions;
        },
        set(value) {
          this.conversionOptions.jsonOptions = value;
        },
      },
    },
    methods: {
        exportf() {
            // 假设这里是文件导出的逻辑，这里用 setTimeout 模拟异步操作
            setTimeout(() => {
                // 成功导出后显示弹窗
                this.exportSuccess = true;
            }, 1000); // 延迟1秒，模拟文件生成和下载的时间
        },
      cleanData() {
        // 模拟简单的数据清洗，示例中去除空格
        this.cleanedData = this.inputData.trim();
      },
      normalizeData() {
        this.conversionLog = []; // 清空转换日志
        
        let convertedDataa = this.inputData; // 初始转换为输入数据
        
        if (this.conversionOption.includes('option1')) {
            convertedDataa = convertedDataa.toLowerCase();
          this.conversionLog.push({ label: '选项1转换', data: convertedDataa });
        }
        
        if (this.conversionOption.includes('option2')) {
            convertedDataa = convertedDataa.split('').reverse().join('');
          this.conversionLog.push({ label: '选项2转换', data: convertedDataa });
        }
        
        if (this.conversionOption.includes('option3')) {
            convertedDataa = convertedDataa.replace(/./g, '*');
          this.conversionLog.push({ label: '选项3转换', data: convertedDataa });
        }
        
        this.outputData = convertedDataa; // 更新输出数据
        this.inputData = convertedDataa; // 更新输入数据
      },
      convertData() {
        if (this.selectedFormat === 'json') {
        try {
            const jsonData = JSON.parse(this.inputData);
            
            // Function to convert JSON to CSV format
            const jsonToCsv = (jsonArray) => {
            if (!jsonArray || !jsonArray.length) {
                return null;
            }

            const headers = Object.keys(jsonArray[0]);

            // Create CSV header row
            let csv = headers.join(',') + '\n';

            // Create CSV rows
            jsonArray.forEach((row) => {
                const values = headers.map(header => {
                // Handle nested objects or arrays if needed
                return typeof row[header] === 'object' ? JSON.stringify(row[header]) : row[header];
                });
                csv += values.join(',') + '\n';
            });

            return csv;
            };

            // Convert JSON to CSV
            const csvData = jsonToCsv(jsonData);

            // Set converted CSV data to the component's state or variable
            this.convertedData = csvData || '无法转换为 CSV 格式。';
        } catch (error) {
            this.convertedData = '无法解析输入的 JSON 数据。';
        }
        } else if (this.selectedFormat === 'csv') {
            // CSV to JSON conversion logic
            try {
                const lines = this.inputData.split('\n');
                const result = [];
                const headers = lines[0].split(',');

                for (let i = 1; i < lines.length; i++) {
                    const obj = {};
                    const currentLine = lines[i].split(',');


                    if (currentLine.length !== headers.length) {
                        throw new Error('CSV 数据行与标题行列数不一致。');
                    }

                    for (let j = 0; j < headers.length; j++) {
                        obj[headers[j]] = currentLine[j];
                    }

                    result.push(obj);
                }

                this.convertedData = JSON.stringify(result, null, 2);
            } catch (error) {

                this.convertedData = '无法解析输入的 CSV 数据。';
            }
        }
        
      },
    },
  };
  </script>
  
  <style scoped>
  .data-converter {
    max-width: 1000px;
    height: 350px;
    margin: 10px auto;
    padding: 20px;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;

  }
  .data-card {
    height: 300px;
    width: 49%; /* 调整每个卡片的宽度，使其并排显示 */
    border: 1px solid #ebebeb;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px; /* 添加卡片底部间距 */
    margin-left: 20px;
  }
  </style>