<template>
  <el-container class="layout-container">
    <!-- 侧边栏 -->
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu>
          <router-link :to="{ name: 'home' }">
            <el-menu-item index="1"
              ><el-icon> <Menu /> </el-icon>首页</el-menu-item
            >
          </router-link>
          <router-link :to="{ name: 'addProject' }">
            <el-menu-item index="2"
              ><el-icon> <FolderAdd /> </el-icon>添加项目</el-menu-item
            >
          </router-link>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <!-- 主体区域 -->
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px">
              <setting />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </div>
      </el-header>

      <el-main>
        <Suspense>
          <router-view></router-view>
        </Suspense>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { Menu, FolderAdd } from '@element-plus/icons-vue'
</script>

<style scoped>
.layout-container {
  height: 100vh;
}

.layout-container .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container .el-menu {
  border-right: none;
}

.layout-container .el-main {
  padding: 20px;
}

.layout-container .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
