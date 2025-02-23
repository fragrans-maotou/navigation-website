<template>
  <div class="home">
    <div class="overview-cards">
      <el-card class="stat-card">
        <h3>活跃用户</h3>
        <div class="stat-value">45.6k</div>
      </el-card>
      <el-card class="stat-card">
        <h3>今日访问</h3>
        <div class="stat-value">12.3k</div>
      </el-card>
      <el-card class="stat-card">
        <h3>收藏数</h3>
        <div class="stat-value">8.9k</div>
      </el-card>
    </div>

    <section v-for="section in sections" :key="section.id" :id="section.id" class="content-section">
      <h2>{{ section.name }}</h2>
      <div class="card-grid">
        <el-card v-for="(item, index) in section.items" :key="index" class="card-item">
          <div class="card-content">
            <img :src="item.icon" :alt="item.name" class="card-icon">
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
            <el-button type="primary" @click="openLink(item.url)">访问</el-button>
          </div>
        </el-card>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sections = ref([
  {
    id: 'tools',
    name: '实用工具',
    items: [
      {
        name: '在线工具箱',
        description: '各种常用在线工具集合',
        url: 'https://tool.lu',
        icon: '/icons/tools.png'
      },
      {
        name: 'JSON 格式化',
        description: '在线JSON校验格式化工具',
        url: 'https://www.json.cn',
        icon: '/icons/json.png'
      },
      {
        name: '图片压缩',
        description: '在线图片压缩工具',
        url: 'https://tinypng.com',
        icon: '/icons/image.png'
      },
      {
        name: '正则测试',
        description: '正则表达式在线测试工具',
        url: 'https://regex101.com',
        icon: '/icons/regex.png'
      },
      {
        name: '在线PS',
        description: '在线图片编辑器',
        url: 'https://www.photopea.com',
        icon: '/icons/photoshop.png'
      },
      {
        name: '文件转换',
        description: '在线文件格式转换工具',
        url: 'https://convertio.co/zh',
        icon: '/icons/convert.png'
      },
      {
        name: '在线绘图',
        description: '流程图、思维导图等在线绘制',
        url: 'https://www.draw.io',
        icon: '/icons/draw.png'
      },
      {
        name: '代码格式化',
        description: '各种语言的代码格式化工具',
        url: 'https://prettier.io/playground',
        icon: '/icons/format.png'
      }
    ]
  },
  {
    id: 'study',
    name: '学习资源',
    items: [
      {
        name: '慕课网',
        description: '程序员的实战视频课程平台',
        url: 'https://www.imooc.com',
        icon: '/icons/study.png'
      },
      {
        name: '掘金',
        description: '帮助开发者成长的技术社区',
        url: 'https://juejin.cn',
        icon: '/icons/juejin.png'
      },
      {
        name: 'LeetCode',
        description: '全球极客挚爱的技术成长平台',
        url: 'https://leetcode.cn',
        icon: '/icons/leetcode.png'
      },
      {
        name: 'MDN',
        description: 'Web 开发技术权威文档',
        url: 'https://developer.mozilla.org',
        icon: '/icons/mdn.png'
      },
      {
        name: 'GitHub',
        description: '开源代码托管平台',
        url: 'https://github.com',
        icon: '/icons/github.png'
      },
      {
        name: 'Stack Overflow',
        description: '程序员问答社区',
        url: 'https://stackoverflow.com',
        icon: '/icons/stackoverflow.png'
      },
      {
        name: 'W3Schools',
        description: 'Web技术学习平台',
        url: 'https://www.w3schools.com',
        icon: '/icons/w3schools.png'
      },
      {
        name: 'Coursera',
        description: '全球顶尖大学课程',
        url: 'https://www.coursera.org',
        icon: '/icons/coursera.png'
      }
    ]
  },
  {
    id: 'entertainment',
    name: '娱乐天地',
    items: [
      {
        name: '哔哩哔哩',
        description: '国内知名的视频弹幕网站',
        url: 'https://www.bilibili.com',
        icon: '/icons/bilibili.png'
      },
      {
        name: '网易云音乐',
        description: '音乐流媒体服务',
        url: 'https://music.163.com',
        icon: '/icons/netease.png'
      },
      {
        name: '虎牙直播',
        description: '游戏直播平台',
        url: 'https://www.huya.com',
        icon: '/icons/huya.png'
      },
      {
        name: '斗鱼直播',
        description: '游戏直播平台',
        url: 'https://www.douyu.com',
        icon: '/icons/douyu.png'
      },
      {
        name: 'YouTube',
        description: '全球最大的视频平台',
        url: 'https://www.youtube.com',
        icon: '/icons/youtube.png'
      },
      {
        name: 'Netflix',
        description: '全球流媒体视频网站',
        url: 'https://www.netflix.com',
        icon: '/icons/netflix.png'
      }
    ]
  },
  {
    id: 'news',
    name: '新闻资讯',
    items: [
      {
        name: '36氪',
        description: '互联网创业资讯',
        url: 'https://36kr.com',
        icon: '/icons/36kr.png'
      },
      {
        name: '虎嗅网',
        description: '科技媒体和产业服务平台',
        url: 'https://www.huxiu.com',
        icon: '/icons/huxiu.png'
      },
      {
        name: '少数派',
        description: '高质量数字生活媒体',
        url: 'https://sspai.com',
        icon: '/icons/sspai.png'
      },
      {
        name: 'TechCrunch',
        description: '国际科技新闻',
        url: 'https://techcrunch.com',
        icon: '/icons/techcrunch.png'
      },
      {
        name: '爱范儿',
        description: '泛科技媒体',
        url: 'https://www.ifanr.com',
        icon: '/icons/ifanr.png'
      }
    ]
  },
  {
    id: 'social',
    name: '社交媒体',
    items: [
      {
        name: '微博',
        description: '中国最大的社交媒体平台',
        url: 'https://weibo.com',
        icon: '/icons/weibo.png'
      },
      {
        name: '知乎',
        description: '中文互联网高质量问答社区',
        url: 'https://www.zhihu.com',
        icon: '/icons/zhihu.png'
      },
      {
        name: '豆瓣',
        description: '文艺青年聚集地',
        url: 'https://www.douban.com',
        icon: '/icons/douban.png'
      },
      {
        name: 'Twitter',
        description: '国际社交媒体平台',
        url: 'https://twitter.com',
        icon: '/icons/twitter.png'
      },
      {
        name: 'LinkedIn',
        description: '职业社交平台',
        url: 'https://www.linkedin.com',
        icon: '/icons/linkedin.png'
      }
    ]
  },
  {
    id: 'dev',
    name: '开发工具',
    items: [
      {
        name: 'VS Code',
        description: '最受欢迎的代码编辑器',
        url: 'https://code.visualstudio.com',
        icon: '/icons/vscode.png'
      },
      {
        name: 'GitLab',
        description: '代码托管和CI/CD平台',
        url: 'https://gitlab.com',
        icon: '/icons/gitlab.png'
      },
      {
        name: 'Postman',
        description: 'API开发测试工具',
        url: 'https://www.postman.com',
        icon: '/icons/postman.png'
      },
      {
        name: 'Docker Hub',
        description: '容器镜像仓库',
        url: 'https://hub.docker.com',
        icon: '/icons/docker.png'
      },
      {
        name: 'npm',
        description: 'Node.js包管理器',
        url: 'https://www.npmjs.com',
        icon: '/icons/npm.png'
      },
      {
        name: 'Jenkins',
        description: '开源自动化服务器',
        url: 'https://www.jenkins.io',
        icon: '/icons/jenkins.png'
      }
    ]
  },
  {
    id: 'design',
    name: '设计资源',
    items: [
      {
        name: 'Dribbble',
        description: '设计师必备灵感站点',
        url: 'https://dribbble.com',
        icon: '/icons/dribbble.png'
      },
      {
        name: 'Behance',
        description: '创意设计社区',
        url: 'https://www.behance.net',
        icon: '/icons/behance.png'
      },
      {
        name: 'UI中国',
        description: '设计师交流平台',
        url: 'https://www.ui.cn',
        icon: '/icons/uicn.png'
      },
      {
        name: 'Figma',
        description: '在线UI设计工具',
        url: 'https://www.figma.com',
        icon: '/icons/figma.png'
      },
      {
        name: 'IconFont',
        description: '阿里巴巴矢量图标库',
        url: 'https://www.iconfont.cn',
        icon: '/icons/iconfont.png'
      },
      {
        name: 'Unsplash',
        description: '免费高质量图片',
        url: 'https://unsplash.com',
        icon: '/icons/unsplash.png'
      }
    ]
  }
])

const openLink = (url) => {
  window.open(url, '_blank')
}
</script>

<style lang="less" scoped>
.home {
  padding: 2rem;
  margin-left: 240px;
  background-color: var(--bg-secondary);
  min-height: calc(100vh - 64px);
}

.overview-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  .stat-card {
    text-align: center;
    padding: 1.5rem;

    h3 {
      color: var(--text-secondary);
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }

    .stat-value {
      color: var(--primary);
      font-size: 2rem;
      font-weight: 600;
    }
  }
}

.content-section {
  background: var(--bg-primary);
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  margin-bottom: 2rem;
  scroll-margin-top: 80px;

  h2 {
    color: var(--text-primary);
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--border-color);
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: '';
      width: 4px;
      height: 1.5rem;
      background: var(--primary);
      border-radius: 2px;
    }
  }
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-item {
  transition: all 0.3s ease;
  border: none;
  background: var(--bg-primary);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  .card-content {
    text-align: center;
    padding: 1.5rem;

    .card-icon {
      width: 64px;
      height: 64px;
      margin-bottom: 1rem;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }

    h3 {
      color: var(--text-primary);
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    p {
      color: var(--text-secondary);
      font-size: 0.9rem;
      margin-bottom: 1rem;
      height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .el-button {
      width: 100%;
      margin-top: 0.5rem;
    }
  }
}

@media (max-width: 768px) {
  .home {
    padding: 1rem;
    margin-left: 64px;
  }

  .content-section {
    padding: 1rem;
  }

  .card-grid {
    grid-template-columns: 1fr;
  }

  .overview-cards {
    grid-template-columns: 1fr;
  }
}
</style> 