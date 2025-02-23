<template>
  <div class="site-card" :class="{ 'is-featured': featured }">
    <div class="site-header">
      <img :src="site.icon" :alt="site.name" class="site-icon">
      <div class="site-badges" v-if="site.badges">
        <span 
          v-for="badge in site.badges" 
          :key="badge.text"
          class="badge"
          :style="{ background: badge.color }"
        >
          {{ badge.text }}
        </span>
      </div>
    </div>
    
    <div class="site-content">
      <h3>{{ site.name }}</h3>
      <p>{{ site.desc }}</p>
    </div>

    <div class="site-footer">
      <div class="site-meta">
        <span class="views" v-if="site.views">
          <i class="fas fa-eye"></i> {{ formatNumber(site.views) }}
        </span>
        <span class="likes" v-if="site.likes">
          <i class="fas fa-heart"></i> {{ formatNumber(site.likes) }}
        </span>
      </div>
      <a :href="site.url" target="_blank" class="visit-btn">
        访问网站
        <i class="fas fa-external-link-alt"></i>
      </a>
    </div>

    <div class="hover-info">
      <div class="hover-content">
        <h4>站点信息</h4>
        <p>{{ site.fullDesc || site.desc }}</p>
        <div class="tags" v-if="site.tags">
          <span v-for="tag in site.tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteCard',
  props: {
    site: {
      type: Object,
      required: true
    },
    featured: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    formatNumber(num) {
      return num > 1000 ? (num/1000).toFixed(1) + 'k' : num
    }
  }
}
</script>

<style lang="less" scoped>
.site-card {
  background: #fff;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;

  &.is-featured {
    border-color: #FFD700;
    background: linear-gradient(45deg, rgba(255,215,0,0.05), transparent);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);

    .hover-info {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .site-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1rem;

    .site-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      object-fit: cover;
    }

    .site-badges {
      display: flex;
      gap: 0.5rem;

      .badge {
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
        color: #fff;
        font-size: 0.75rem;
      }
    }
  }

  .site-content {
    h3 {
      margin-bottom: 0.5rem;
      color: var(--text-primary);
      font-weight: 600;
    }

    p {
      color: var(--text-secondary);
      line-height: 1.5;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
  }

  .site-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .site-meta {
      display: flex;
      gap: 1rem;
      color: var(--text-secondary);
      font-size: 0.85rem;

      span {
        display: flex;
        align-items: center;
        gap: 0.3rem;
      }
    }

    .visit-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background: var(--primary-dark);
      color: #fff;
      border-radius: 6px;
      text-decoration: none;
      font-size: 0.9rem;
      transition: all 0.3s;

      &:hover {
        background: var(--primary-gray);
        transform: translateY(-1px);
      }
    }
  }

  .hover-info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255,255,255,0.98);
    padding: 1.5rem;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s;
    display: flex;
    flex-direction: column;

    .hover-content {
      h4 {
        margin-bottom: 1rem;
        color: var(--primary-dark);
      }

      p {
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: 1rem;
      }

      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;

        .tag {
          padding: 0.3rem 0.8rem;
          background: var(--light-gray);
          border-radius: 20px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
      }
    }
  }
}
</style> 