<template>
  <div class="home" @scroll="handleScroll">
    <div class="page1 full-page" ref="page1Ref">
      <statistics-section :stats="statsData" />
      <div style="display: flex; gap: 20px;">
        <featured-section 
          :sites="hotSites" 
          @refresh="refreshHot"
        />
        <recent-updates :sites="recentSites" />
      </div>
    </div>

    <el-row class="page2 full-page">
      <el-col :span="2">
        <AppSidebar v-if="containerRef" :container-ref="containerRef" />
      </el-col>
      <el-col :span="22">
        <div class="content-container" ref="containerRef">
          <section 
            v-for="component in siteComponents" 
            :key="component.name" 
            :id="component.name" 
            class="content-section"
          >
            <component :is="component.component" />
          </section>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import StudyView from '@/views/StudyView.vue'
import EntertainmentView from '@/views/EntertainmentView.vue'
import NewsView from '@/views/NewsView.vue'
import ToolsView from '@/views/ToolsView.vue'
import DevToolsView from '@/views/DevToolsView.vue'
import SocialView from '@/views/SocialView.vue'
import { ref, computed, onMounted, nextTick, defineEmits} from 'vue'
import AppSidebar from '@/views/components/AppSidebar.vue'
import StatisticsSection from '@/views/components/StatisticsSection.vue'
import FeaturedSection from '@/views/components/FeaturedSection.vue'
import RecentUpdates from '@/views/components/RecentUpdates.vue'
const stats = ref({
  totalSites: 1234,
  activeUsers: '45.6k',
  todayVisits: '12.3k'
})

const emit = defineEmits(['pageScrolled'])

let containerRef = ref<HTMLElement | null>(null)
const page1Ref = ref<HTMLElement | null>(null)


onMounted(async () => {
  await nextTick()
  const container = document.querySelector('.content-container')
  if (container instanceof HTMLElement) {
    containerRef.value = container
  }
})

const handleScroll = () => {
  const position = document.querySelector('.content-container')?.getBoundingClientRect();
  if (position && position.top < 100) {
    emit('pageScrolled', { id: 'secondPage' });
  }else{
    emit('pageScrolled', { id: 'firstPage' });
  }
};

const siteComponents = [
  {
    name: 'tools',
    component: ToolsView
  },
  {
    name: 'study',
    component: StudyView
  },
  {
    name: 'entertainment',
    component: EntertainmentView
  },
  {
    name: 'social',
    component: SocialView
  },
  {
    name: 'news',
    component: NewsView
  },
  {
    name: 'dev',
    component: DevToolsView
  }
]

const statsData = computed(() => [
  { label: '收录网站', value: stats.value.totalSites, icon: 'fas fa-globe' },
  { label: '活跃用户', value: stats.value.activeUsers, icon: 'fas fa-users' },
  { label: '今日访问', value: stats.value.todayVisits, icon: 'fas fa-clock' }
])

// 在组件挂载时获取数据
onMounted(async () => {
  try {
    // TODO: 从API获取初始数据
    const response = await Promise.all([
      // fetchStats(),
      // fetchHotSites(),
      // fetchRecentSites()
    ])
    
    // 等待实际API实现后取消注释
    // stats.value = response[0]
    // hotSites.value = response[1]
    // recentSites.value = response[2]
  } catch (error) {
    console.error('获取数据失败:', error)
  }
})



const hotSites = computed(() => {
  return [{
    id: 1,
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'https://github.com/favicon.ico',
    desc: '全球最大的代码托管平台',
    updateTime: '2024-02-01',
    tags: ['开发工具', '代码托管', '开源社区'],
    visits: 1234,
    likes: 567,
    featured: true
  },
  {
    id: 2,
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com',
    icon: 'https://stackoverflow.com/favicon.ico',
    desc: '程序员问答社区',
    updateTime: '2024-02-01',
    tags: ['编程', '问答', '社区'],
    visits: 2345,
    likes: 678,
    featured: true
  },
  {
    id: 3,
    name: 'MDN Web Docs',
    url: 'https://developer.mozilla.org',
    icon: 'https://developer.mozilla.org/favicon.ico',
    desc: 'Web开发者的文档和资源',
    updateTime: '2024-02-01',
    tags: ['Web开发', '文档', '资源'],
    visits: 3456,
    likes: 789,
    featured: true
  },
  {
    id: 4,
    name: 'W3Schools',
    url: 'https://www.w3schools.com',
    icon: 'https://www.w3schools.com/favicon.ico',
    desc: 'Web开发学习资源',
    updateTime: '2024-02-01',
    tags: ['学习', 'Web开发', '教程'],
    visits: 4567,
    likes: 890,
    featured: true
  }]
})

const recentSites = computed(() => {
  return [ {
    id: 1,
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'https://github.com/favicon.ico',
    desc: '全球最大的代码托管平台',
    updateTime: '2024-02-01',
    tags: ['开发工具', '代码托管', '开源社区'],
    visits: 1234,
    likes: 567
  }]
})

const refreshHot = () => {
  // 实现换一批逻辑
  console.log("打印逻辑");
  
  
}

</script>

<style lang="less" scoped>
.home {
  height: calc(100vh - 64px);
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  scroll-timeline: none; // 禁用默认的滚动时间线

  background: var(--bg-secondary);
  padding: 1rem;
  
  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary-light);
  }
}

.full-page {
  height: calc(100vh - 64px);
  scroll-snap-align: start;
  scroll-snap-stop: always;
 
}

.page1 {
  display: flex;
  align-items: center;
  justify-content: center;
}


.content-container {
  height: calc(100vh - 64px);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--primary-light) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary-light);
    border-radius: 3px;
  }
}

.content-section {
  height: 85vh;
  margin-bottom: 2rem;
  background: var(--bg-primary);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow-y: auto;
  scroll-behavior: smooth;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }
}
</style>
