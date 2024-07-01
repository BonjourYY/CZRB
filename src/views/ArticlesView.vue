<!-- 稿源库 -->
<script setup>
import { ref } from 'vue'
import { Timer, EditPen, Delete } from '@element-plus/icons-vue'
import { ElMessageBox, ElMessage } from 'element-plus'
const articlesData = ref([
  {
    date: '2024-05-01',
    name: '明珠',
    tag: '已发布',
    title: '「全球经济复苏：2024年展望与挑战分析」',
  },
  {
    date: '2024-05-02',
    name: '紫霞',
    tag: '已发布',
    title: '「人工智能技术：革命性应用与未来趋势预测」',
  },
  {
    date: '2024-05-03',
    name: '心怡',
    tag: '已发布',
    title: '「气候变化影响下的全球粮食安全挑战与应对策略」',
  },
  {
    date: '2024-05-04',
    name: '嘉懿',
    tag: '未发布',
    title: '「新能源革命：太阳能和风能在全球能源转型中的作用」',
  },
  {
    date: '2024-05-05',
    name: '梓萱',
    tag: '未发布',
    title: '「医疗科技创新：2024年医疗界的突破与发展」',
  },
  {
    date: '2024-05-06',
    name: '雨婷',
    tag: '已发布',
    title: '「数字化转型浪潮：企业如何应对数据驱动时代的挑战」',
  },
  {
    date: '2024-05-07',
    name: '璇儿',
    tag: '已发布',
    title: '「教育变革：全球教育系统如何适应技术发展与社会需求」',
  },
  {
    date: '2024-05-08',
    name: '浩然',
    tag: '未发布',
    title: '「城市可持续发展：2024年城市规划与环境保护的最新进展」',
  },
  {
    date: '2024-05-09',
    name: '瑞雪',
    tag: '未发布',
    title: '「金融科技革新：区块链技术如何改变全球金融体系」',
  },
  {
    date: '2024-05-10',
    name: '希望',
    tag: '已发布',
    title: '「健康与福祉：2024年全球健康政策与公共卫生策略探讨」',
  },

])

const handleCurrentChange = (val) => {
  console.log(val)
}

const filterTag = (value, row) => {
  return row.tag === value
}

const handleDelete = (index, row) => {
  ElMessageBox.confirm(
    '是否确认删除该文章？',
    'Warning',
    {
      confirmButtonText: '删除',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      articlesData.value.splice(index, 1)
      ElMessage({
        type: 'success',
        message: '删除成功',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消删除',
      })
    })

}
</script>

<template>
  <el-table highlight-current-row :data="articlesData" border stripe style="width: 100%"
    @current-change="handleCurrentChange">
    <el-table-column sortable prop="date" label="日期" width="180">
      <template #default="{ row }">
        <div style="display: flex; align-items: center">
          <el-icon>
            <timer />
          </el-icon>
          <span style="margin-left: 10px">{{ row.date }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="title" label="文章标题" />
    <el-table-column prop="tag" label="状态" width="100" :filters="[
      { text: '已发布', value: '已发布' },
      { text: '未发布', value: '未发布' },
    ]" :filter-method="filterTag" filter-placement="bottom-end">
      <template #default="{ row }">
        <el-tag :type="row.tag === '已发布' ? 'success' : 'danger'">{{ row.tag }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="作者" width="180" />
    <el-table-column label="Operations" width="180">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
          <el-icon style="margin-right: 5px;">
            <EditPen />
          </el-icon> Edit
        </el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
          <el-icon style="margin-right: 5px;">
            <Delete />
          </el-icon>
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="scss" scoped></style>
