<template>
  <div class="about-view">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="about-header">
          <h1>关于我们</h1>
          <p class="subtitle">让网络导航更简单、更高效</p>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :md="16" :sm="24">
        <div class="about-section">
          <h2>项目介绍</h2>
          <p>这是一个专注于为用户提供优质网站导航服务的平台。我们致力于收集和整理互联网上最有价值的网站资源，帮助用户快速找到所需的工具和信息。</p>
          
          <h2>我们的特色</h2>
          <el-row :gutter="20" class="features">
            <el-col :sm="12" v-for="feature in features" :key="feature.title">
              <div class="feature-card">
                <el-icon :size="32"><component :is="feature.icon" /></el-icon>
                <h3>{{ feature.title }}</h3>
                <p>{{ feature.desc }}</p>
              </div>
            </el-col>
          </el-row>

          <h2>更新日志</h2>
          <el-timeline>
            <el-timeline-item
              v-for="log in changelog"
              :key="log.date"
              :timestamp="log.date"
              :type="log.type"
            >
              {{ log.content }}
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-col>

      <el-col :md="8" :sm="24">
        <div class="contact-section">
          <h2>联系我们</h2>
          <el-form :model="contactForm" label-position="top">
            <el-form-item label="您的称呼">
              <el-input v-model="contactForm.name" placeholder="请输入您的称呼" />
            </el-form-item>
            <el-form-item label="联系邮箱">
              <el-input v-model="contactForm.email" placeholder="请输入您的邮箱" />
            </el-form-item>
            <el-form-item label="留言内容">
              <el-input
                v-model="contactForm.message"
                type="textarea"
                rows="4"
                placeholder="请输入您的留言"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitContact">提交留言</el-button>
            </el-form-item>
          </el-form>
        </div>

        <div class="stats-section">
          <h2>网站统计</h2>
          <ul class="stats-list">
            <li>
              <span class="label">收录网站</span>
              <span class="value">1,234</span>
            </li>
            <li>
              <span class="label">活跃用户</span>
              <span class="value">45.6k</span>
            </li>
            <li>
              <span class="label">访问量</span>
              <span class="value">123.4k</span>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const features = [
  {
    icon: 'Collection',
    title: '精选资源',
    desc: '严选优质网站，保证资源的可靠性和实用性'
  },
  {
    icon: 'Search',
    title: '智能搜索',
    desc: '强大的搜索功能，快速定位所需资源'
  },
  {
    icon: 'DataLine',
    title: '分类清晰',
    desc: '科学的分类体系，让导航更加清晰直观'
  },
  {
    icon: 'Connection',
    title: '及时更新',
    desc: '定期更新维护，确保资源的有效性'
  }
]

const changelog = [
  {
    date: '2024-02-01',
    content: '网站正式上线',
    type: 'success'
  },
  {
    date: '2024-01-15',
    content: '完成主要功能开发',
    type: 'info'
  },
  {
    date: '2024-01-01',
    content: '项目启动',
    type: 'primary'
  }
]

const contactForm = ref({
  name: '',
  email: '',
  message: ''
})

const submitContact = () => {
  // 实现提交逻辑
  ElMessage.success('感谢您的留言，我们会尽快回复！')
}
</script>

<style lang="less" scoped>
.about-view {
  .about-header {
    text-align: center;
    margin-bottom: 3rem;

    h1 {
      font-size: 2.5rem;
      font-weight: 500;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .subtitle {
      font-size: 1.2rem;
      color: var(--text-secondary);
    }
  }

  .about-section {
    background: var(--bg-primary);
    border-radius: 8px;
    padding: 2rem;
    margin-bottom: 2rem;

    h2 {
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--text-primary);
      margin: 2rem 0 1rem;

      &:first-child {
        margin-top: 0;
      }
    }

    p {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
  }

  .features {
    margin: 2rem 0;

    .feature-card {
      background: var(--bg-secondary);
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      text-align: center;

      .el-icon {
        color: var(--primary);
        margin-bottom: 1rem;
      }

      h3 {
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
      }

      p {
        color: var(--text-secondary);
        font-size: 0.9rem;
        margin: 0;
      }
    }
  }

  .contact-section,
  .stats-section {
    background: var(--bg-primary);
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 2rem;

    h2 {
      font-size: 1.25rem;
      font-weight: 500;
      color: var(--text-primary);
      margin-bottom: 1.5rem;
    }
  }

  .stats-list {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
      border-bottom: 1px solid var(--border-color);

      &:last-child {
        border-bottom: none;
      }

      .label {
        color: var(--text-secondary);
      }

      .value {
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--primary);
      }
    }
  }
}
</style>
