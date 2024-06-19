<template>
  <el-form :model="form" label-width="auto" style="max-width: 600px;margin: 100px;">
    <el-form-item label="文章标题">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="作者">
      <el-select v-model="form.author" placeholder="请选择作者">
        <el-option label="明珠" value="明珠" />
        <el-option label="紫霞" value="紫霞" />
        <el-option label="浩然" value="浩然" />
      </el-select>
    </el-form-item>
    <el-form-item label="发布时间">
      <el-col :span="11">
        <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%" />
      </el-col>
      <el-col :span="2" class="text-center">
        <p class="text-gray-500" style="text-align: center;">-</p>
      </el-col>
      <el-col :span="11">
        <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
      </el-col>
    </el-form-item>
    <el-form-item label="类型">
      <el-radio-group v-model="form.resource">
        <el-radio value="Sponsor">公开</el-radio>
        <el-radio value="Venue">内部</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="备注">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'


const form = reactive({
  name: '',
  author: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  ElMessage({
    type: 'success',
    message: '创建成功',
  })
}
</script>
