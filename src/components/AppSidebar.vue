<template>
  <aside class="sidebar" :class="{ collapsed: isCollapsed }">
    <div class="sidebar-header">
      <div class="collapse-btn" @click="toggleCollapse">
        <i class="fas" :class="isCollapsed ? 'fa-angle-right' : 'fa-angle-left'"></i>
      </div>
    </div>
    
    <nav class="main-nav">
      <a 
        v-for="item in navItems" 
        :key="item.id"
        class="nav-item"
        :class="{ active: activeSection === item.id }"
        :title="isCollapsed ? item.name : ''"
        @click="scrollToSection(item.id)"
      >
        <i :class="item.icon"></i>
        <span v-show="!isCollapsed">{{ item.name }}</span>
      </a>
    </nav>

    <div class="sidebar-footer" v-if="!isCollapsed">
      <div class="user-info">
        <img src="/avatar.jpg" alt="用户头像" class="avatar">
        <div class="info">
          <p class="name">游客</p>
          <p class="role">普通用户</p>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isCollapsed = ref(false)
const activeSection = ref('tools')

const navItems = ref([
  { id: 'tools', name: '实用工具', icon: 'fas fa-tools' },
  { id: 'study', name: '学习资源', icon: 'fas fa-book' },
  { id: 'entertainment', name: '娱乐天地', icon: 'fas fa-play' },
  { id: 'news', name: '新闻资讯', icon: 'fas fa-newspaper' },
  { id: 'dev', name: '开发工具', icon: 'fas fa-code' }
])

// 处理导航点击
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
    activeSection.value = sectionId
  }
}

// 监听滚动事件，更新活动区域
const handleSectionChange = (event) => {
  activeSection.value = event.detail.sectionId
}

onMounted(() => {
  window.addEventListener('section-change', handleSectionChange)
})

onUnmounted(() => {
  window.removeEventListener('section-change', handleSectionChange)
})

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>

<style lang="less" scoped>
.sidebar {
  width: 240px;
  background: var(--primary);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  height: calc(100vh - 64px);
  position: fixed;
  top: 64px;
  left: 0;
  z-index: 100;

  &.collapsed {
    width: 64px;

    .nav-item {
      padding: 0.8rem;
      justify-content: center;

      i {
        margin: 0;
      }
    }
  }

  .sidebar-header {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;

    .collapse-btn {
      width: 24px;
      height: 24px;
      border-radius: 4px;
      background: rgba(255,255,255,0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: rgba(255,255,255,0.8);
      transition: all 0.3s;

      &:hover {
        background: rgba(255,255,255,0.2);
        color: #fff;
      }
    }
  }

  .main-nav {
    flex: 1;
    overflow-y: auto;
    padding: 1rem 0;
  }

  .nav-item {
    color: rgba(255,255,255,0.8);
    text-decoration: none;
    padding: 0.8rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    transition: all 0.3s;
    cursor: pointer;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background: #fff;
      transform: scaleY(0);
      transition: transform 0.3s;
    }

    i {
      width: 20px;
      text-align: center;
      opacity: 0.8;
      transition: all 0.3s;
    }

    &:hover {
      background: rgba(255,255,255,0.1);
      color: #fff;

      i {
        opacity: 1;
        transform: scale(1.1);
      }

      &::before {
        transform: scaleY(0.6);
      }
    }

    &.active {
      background: rgba(255,255,255,0.15);
      color: #fff;
      font-weight: 500;

      &::before {
        transform: scaleY(1);
      }

      i {
        opacity: 1;
        transform: scale(1.1);
      }
    }
  }

  .sidebar-footer {
    margin-top: auto;
    padding: 1rem;
    border-top: 1px solid rgba(255,255,255,0.1);

    .user-info {
      display: flex;
      align-items: center;
      gap: 1rem;

      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
      }

      .info {
        .name {
          color: #fff;
          font-weight: 500;
        }

        .role {
          color: rgba(255,255,255,0.6);
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style> 