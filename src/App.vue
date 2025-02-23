<template>
  <div id="app">
    <!-- 顶部 LOGO 和搜索 -->
    <header class="header">
      <div class="logo">
        <router-link to="/">NAV</router-link>
      </div>
      <div class="search-box">
        <el-input
          v-model="searchQuery"
          placeholder="搜索任何内容..."
          :suffix-icon="Calendar"
        />
      </div>
    </header>

    <div class="container">
      <AppSidebar></AppSidebar>
      <main class="main-content" @scroll="handleScroll">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Calendar } from '@element-plus/icons-vue'
import AppSidebar from '@/components/AppSidebar.vue'

// 监听滚动事件
const handleScroll = () => {
  const sections = document.querySelectorAll('.content-section')
  const scrollPosition = document.querySelector('.main-content').scrollTop

  sections.forEach(section => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // 发送当前活动区域ID到父组件
      const currentSectionId = section.getAttribute('id')
      
      // 触发自定义事件
      window.dispatchEvent(new CustomEvent('section-change', {
        detail: { sectionId: currentSectionId }
      }))
    }
  })
}

</script>

<style lang="less">
// 重置样式
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// 颜色变量
:root {
  // 主题色
  --primary: #2c3e50;
  --secondary: #34495e;
  
  // 背景色
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #f1f3f5;
  
  // 文字颜色
  --text-primary: #2c3e50;
  --text-secondary: #6c757d;
  --text-light: #909399;
  
  // 边框颜色
  --border-color: #e9ecef;
  
  // 功能色
  --info: #3498db;
  --success: #07bc0c;
  --warning: #f1c40f;
  --danger: #e74c3c;
}

// 全局样式
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-primary);
  background: var(--bg-secondary);
  line-height: 1.5;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

// 布局样式
.header {
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 64px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.9);

  .logo {
    a {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--primary);
      text-decoration: none;
      letter-spacing: 1px;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &::before {
        content: '';
        width: 8px;
        height: 8px;
        background: var(--primary);
        border-radius: 50%;
      }
    }
  }

  .search-box {
    max-width: 480px;
    width: 100%;

    :deep(.el-input) {
      --el-input-border-color: var(--border-color);
      --el-input-hover-border-color: var(--secondary);
      --el-input-focus-border-color: var(--primary);
      
      .el-input__wrapper {
        box-shadow: none;
        background: var(--bg-tertiary);
        border-radius: 8px;
        padding: 0 1rem;
        height: 40px;

        &.is-focus {
          background: var(--bg-primary);
          box-shadow: 0 0 0 1px var(--primary);
        }
      }

      .el-input__inner {
        height: 40px;
        font-size: 0.9rem;
        
        &::placeholder {
          color: var(--text-light);
        }
      }
    }
  }
}

.container {
  flex: 1;
  display: flex;
  background: var(--bg-secondary);
  margin-top: 64px;
  min-height: calc(100vh - 64px);
  position: relative;
}

.main-content {
  flex: 1;
  margin-left: 240px;
  height: calc(100vh - 64px);
  overflow-y: auto;
  position: relative;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--border-color);
    border-radius: 4px;

    &:hover {
      background: var(--text-light);
    }
  }
}

// Element Plus 主题覆盖
:deep(.el-button) {
  --el-button-bg-color: var(--primary);
  --el-button-border-color: var(--primary);
  --el-button-hover-bg-color: var(--secondary);
  --el-button-hover-border-color: var(--secondary);
}

:deep(.el-tabs) {
  --el-tabs-header-height: 48px;
  
  .el-tabs__nav-wrap::after {
    height: 1px;
    background-color: var(--border-color);
  }
  
  .el-tabs__item {
    font-size: 15px;
    color: var(--text-secondary);
    
    &.is-active {
      color: var(--primary);
      font-weight: 500;
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .header {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;

    .search-box {
      width: 100%;
      max-width: none;
    }
  }

  .main-content {
    margin-left: 64px;
  }
}
</style>
