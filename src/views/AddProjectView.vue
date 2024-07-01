<template>
  <el-form :model="projectVO" label-position="top">
    <el-form-item label="项目名称">
      <el-input v-model="projectVO.name" clearable />
    </el-form-item>

    <el-form-item label="项目简称">
      <el-input v-model="projectVO.simpleName" clearable />
    </el-form-item>

    <el-form-item label="是否申报软著">
      <el-radio-group v-model="projectVO.hasCopyrights">
        <el-radio :value="true">是</el-radio>
        <el-radio :value="false">否</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="软著材料">
      <el-upload
        v-model:file-list="fileList"
        class="upload-demo"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        multiple
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :limit="3"
        :on-exceed="handleExceed">
        <el-button type="primary">点击上传</el-button>
      </el-upload>
    </el-form-item>

    <el-form-item label="立项时间">
      <el-date-picker
        v-model="projectVO.startDay"
        type="date"
        :shortcuts="[{ text: '今天', value: new Date() }]" />
    </el-form-item>

    <el-form-item label="预计结束时间">
      <el-date-picker v-model="projectVO.expectEndDay" type="date" />
    </el-form-item>

    <el-form-item label="实际结束时间">
      <el-date-picker v-model="projectVO.endDay" type="date" />
    </el-form-item>

    <el-form-item label="项目类型">
      <el-select v-model="projectVO.category">
        <el-option
          v-for="({ label, value }, index) in projectCategory"
          :key="index"
          :label="label"
          :value="value" />
      </el-select>
    </el-form-item>

    <el-form-item label="业务联系人">
      <el-select
        multiple
        clearable
        filterable
        allow-create
        v-model="projectVO.business">
        <el-option
          v-for="({ label, value }, index) in businessList"
          :key="index"
          :label="label"
          :value="value" />
      </el-select>
    </el-form-item>

    <el-form-item label="技术联系人">
      <el-input v-model="projectVO.developer" clearable />
    </el-form-item>

    <el-form-item label="前台地址">
      <el-input v-model="projectVO.urlFront" clearable>
        <template #prepend
          ><el-icon> <Link /> </el-icon
        ></template>
      </el-input>
    </el-form-item>

    <el-form-item label="管理地址">
      <el-input v-model="projectVO.urlAdmin" clearable>
        <template #prepend
          ><el-icon> <Link /> </el-icon
        ></template>
      </el-input>
    </el-form-item>

    <el-form-item label="其他人员">
      <el-input v-model="projectVO.others" clearable />
    </el-form-item>

    <el-form-item label="项目备注">
      <el-input
        v-model="projectVO.remark"
        :rows="2"
        type="textarea"
        placeholder="请输入项目备注" />
    </el-form-item>

    <el-form-item label="设计">
      <el-input v-model="projectVO.designer" clearable />
    </el-form-item>

    <el-form-item label="设计时间">
      <el-date-picker
        v-model="designDateRange"
        value-format="YYYY-MM-DD"
        type="daterange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        @change="dateRangeChangeHandler(designDateRange, 'designer')" />
    </el-form-item>

    <el-form-item label="前端">
      <el-input v-model="projectVO.backDev" clearable />
    </el-form-item>

    <el-form-item label="前端时间">
      <el-date-picker
        v-model="frontendDateRange"
        type="daterange"
        value-format="YYYY-MM-DD"
        range-separator="-"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        @change="dateRangeChangeHandler(frontendDateRange, 'frontDev')" />
    </el-form-item>

    <el-form-item label="后端">
      <el-input v-model="projectVO.backDev" clearable />
    </el-form-item>

    <el-form-item label="后端时间">
      <el-date-picker
        v-model="backendDateRange"
        type="daterange"
        value-format="YYYY-MM-DD"
        range-separator="-"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        @change="dateRangeChangeHandler(backendDateRange, 'backDev')" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitHandler">创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { UploadFilled, Link } from '@element-plus/icons-vue'

// 项目分类
const projectCategory = [
  { value: '网站', label: '网站' },
  { value: '微信小程序', label: '微信小程序' },
  { value: '微信H5', label: '微信H5' },
  { value: 'APP', label: 'APP' }
]

// 业务联系人
const businessList = [
  { value: '张三', label: '张三' },
  { value: '李四', label: '李四' },
  { value: '王五', label: '王五' }
]

// 技术联系人
const developerList = [
  { value: '张三', label: '张三' },
  { value: '李四', label: '李四' },
  { value: '王五', label: '王五' }
]

const designDateRange = ref([]);
const frontendDateRange = ref([]);
const backendDateRange = ref([]);

// 日期范围选择时，触发的回调
const dateRangeChangeHandler = (dateRange, item) => {
  console.log(item)
  projectVO[`${item}Start`] = dateRange[0]
  projectVO[`${item}End`] = dateRange[1]
}

const projectVO = reactive({
  backDev: "",
  backDevEnd: "",
  backDevStart: "",
  business: "",
  category: projectCategory[0].value,
  designer: "",
  designerEnd: "",
  designerStart: "",
  developer: "",
  endDay: "",
  expectEndDay: "",
  fileCopyrights: "",
  frontDev: "",
  frontDevEnd: "",
  frontDevStart: "",
  hasCopyrights: false,
  id: 0,
  name: "",
  others: "",
  remark: "",
  simpleName: "",
  startDay: "",
  urlAdmin: "",
  urlFront: ""
})

// 提交回调
const submitHandler = () => {
  console.log(projectVO)
}
</script>

<style lang="scss">
.el-form {
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 100px;

  .el-form-item {
    .el-form-item__label {
      padding: 0;
      display: inline-block;
    }
  }
}
</style>
