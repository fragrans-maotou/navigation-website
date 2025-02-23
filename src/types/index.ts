// 网站类型定义
export interface Site {
  id: number
  name: string
  url: string
  icon: string
  desc: string
  tags: string[]
  views?: number
  likes?: number
  badges?: Array<{
    text: string
    color: string
  }>
  featured?: boolean
  fullDesc?: string
}

// 自定义事件类型定义
export interface SectionChangeEvent extends CustomEvent {
  detail: {
    sectionId: string
  }
}

// DOM元素类型扩展
declare global {
  interface HTMLElement {
    readonly offsetTop: number
    readonly offsetHeight: number
  }
}