<template>
  <div class="home">
    <!-- 顶部统计 -->
    <section class="stats-section">
      <div class="stat-card">
        <i class="fas fa-globe"></i>
        <div class="stat-info">
          <h3>{{ stats.totalSites }}</h3>
          <p>收录网站</p>
        </div>
      </div>
      <div class="stat-card">
        <i class="fas fa-users"></i>
        <div class="stat-info">
          <h3>{{ stats.activeUsers }}</h3>
          <p>活跃用户</p>
        </div>
      </div>
      <div class="stat-card">
        <i class="fas fa-clock"></i>
        <div class="stat-info">
          <h3>{{ stats.todayVisits }}</h3>
          <p>今日访问</p>
        </div>
      </div>
    </section>

    <!-- 热门推荐 -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">
          <i class="fas fa-fire"></i>
          热门推荐
        </h2>
        <div class="section-actions">
          <button class="btn" @click="refreshHot">
            <i class="fas fa-sync-alt"></i>
            换一批
          </button>
        </div>
      </div>
      
      <div class="card-grid">
        <site-card
          v-for="site in hotSites"
          :key="site.id"
          :site="site"
          :featured="site.featured"
        />
      </div>
    </section>

    <!-- 最近更新 -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">
          <i class="fas fa-clock"></i>
          最近更新
        </h2>
        <div class="section-actions">
          <router-link to="/all" class="btn">
            查看全部
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>

      <div class="site-list">
        <div v-for="site in recentSites" :key="site.id" class="site-item">
          <img :src="site.icon" :alt="site.name" class="site-icon">
          <div class="site-info">
            <div class="site-header">
              <h3>{{ site.name }}</h3>
              <span class="update-time">{{ site.updateTime }}</span>
            </div>
            <p>{{ site.desc }}</p>
            <div class="site-tags">
              <span v-for="tag in site.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>
          </div>
          <a :href="site.url" target="_blank" class="visit-link">
            访问
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- 工具区域 -->
    <section id="tools" class="content-section">
      <!-- <h2>实用工具</h2> -->
      <ToolsView></ToolsView>
    </section>

    <section id="study" class="content-section">
      <!-- <h2>学习资源</h2> -->
      <StudyView></StudyView>
    </section>

    <section id="entertainment" class="content-section">
      <!-- <h2>娱乐天地</h2> -->
      <EntertainmentView></EntertainmentView>
    </section>

    <section id="news" class="content-section">
      <!-- <h2>新闻资讯</h2> -->
      <NewsView></NewsView>
    </section>

    <section id="dev" class="content-section">
      <!-- <h2>开发工具</h2> -->
      <ToolsView></ToolsView>
    </section>
  </div>
</template>

<script setup lang="ts">
import StudyView from '@/views/StudyView.vue'
import EntertainmentView from '@/views/EntertainmentView.vue'
import NewsView from '@/views/NewsView.vue'
import ToolsView from '@/views/ToolsView.vue'

import { ref, computed, onMounted, onUnmounted } from 'vue'
import SiteCard from '@/components/SiteCard.vue'

const stats = ref({
  totalSites: 1234,
  activeUsers: '45.6k',
  todayVisits: '12.3k'
})

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
    icon: '/icons/github.png',
    desc: '全球最大的代码托管平台',
    updateTime: '2024-02-01',
    tags: ['开发工具', '代码托管', '开源社区'],
    visits: 1234,
    likes: 567,
    featured:1
  }
  ]
})

const recentSites = computed(() => {
  return [ {
    id: 1,
    name: 'GitHub',
    url: 'https://github.com',
    icon: '/icons/github.png',
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
  .stats-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;

    .stat-card {
      background: #fff;
      border-radius: 12px;
      padding: 1.5rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);

      i {
        font-size: 2rem;
        color: var(--primary-dark);
        opacity: 0.8;
      }

      .stat-info {
        h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--primary-dark);
          margin-bottom: 0.2rem;
        }

        p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
      }
    }
  }

  .section {
    margin-bottom: 2rem;
    background: #fff;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);

    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--border-color);

      .section-title {
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--primary-dark);
        display: flex;
        align-items: center;
        gap: 0.8rem;

        i {
          font-size: 1.2rem;
          opacity: 0.8;
        }
      }

      .section-actions {
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          background: transparent;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          font-size: 0.9rem;

          &:hover {
            background: var(--light-gray);
            color: var(--primary-dark);
          }
        }
      }
    }
  }

  .site-list {
    .site-item {
      display: flex;
      align-items: flex-start;
      padding: 1.2rem;
      border-bottom: 1px solid var(--border-color);
      transition: all 0.3s;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background: var(--light-gray);
      }

      .site-icon {
        width: 48px;
        height: 48px;
        border-radius: 10px;
        margin-right: 1rem;
      }

      .site-info {
        flex: 1;

        .site-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;

          h3 {
            color: var(--text-primary);
            font-weight: 500;
          }

          .update-time {
            color: var(--text-secondary);
            font-size: 0.85rem;
          }
        }

        p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 0.8rem;
        }

        .site-tags {
          display: flex;
          gap: 0.5rem;

          .tag {
            padding: 0.2rem 0.6rem;
            background: var(--light-gray);
            border-radius: 4px;
            font-size: 0.8rem;
            color: var(--text-secondary);
          }
        }
      }

      .visit-link {
        padding: 0.4rem 1.2rem;
        background: transparent;
        color: var(--text-primary);
        border: 1px solid var(--border-color);
        border-radius: 6px;
        text-decoration: none;
        transition: all 0.3s;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-left: 1rem;

        &:hover {
          background: var(--primary-dark);
          color: #fff;
          border-color: var(--primary-dark);
        }
      }
    }
  }

  .content-section {
    margin-bottom: 3rem;
    background: #fff;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    scroll-margin-top: 80px; // 确保滚动定位时不被顶部导航栏遮挡

    h2 {
      font-size: 1.8rem;
      font-weight: 600;
      color: var(--primary);
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid var(--border-color);
    }
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    animation: fadeIn 0.5s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

@media (max-width: 768px) {
  .home {
    .section {
      padding: 1rem;
    }

    .card-grid {
      grid-template-columns: 1fr;
    }

    .content-section {
      padding: 1.5rem;
      margin-bottom: 2rem;
    }
  }
}
</style>
