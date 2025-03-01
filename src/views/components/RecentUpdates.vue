<template>
  <section class="recent-updates-section">
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
      <div v-for="site in sites" :key="site.id" class="site-item">
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
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  sites: {
    type: Array,
    required: true
  }
})
</script>

<style lang="less" scoped>
.recent-updates-section {
  // margin: 10px;
  // margin-bottom: 2rem;
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
        border-radius: 8px;
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
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--primary-dark);
          }

          .update-time {
            font-size: 0.9rem;
            color: var(--text-secondary);
          }
        }

        p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 0.8rem;
          line-height: 1.4;
        }

        .site-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;

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
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.5rem 1rem;
        border: 1px solid var(--border-color);
        border-radius: 6px;
        color: var(--text-secondary);
        text-decoration: none;
        font-size: 0.9rem;
        transition: all 0.3s;

        &:hover {
          background: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
        }
      }
    }
  }
}
</style> 