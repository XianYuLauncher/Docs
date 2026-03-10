---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "XianYuLauncher"
  text: "Minecraft 启动器文档"
  tagline: 简洁、高效、功能强大的 Minecraft 启动器，为您提供最佳的游戏体验
  image:
    src: /logo.png
    alt: XianYuLauncher Logo
  actions:
    - theme: brand
      text: 快速开始
      link: /quick-start.md
    - theme: alt
      text: 功能介绍
      link: /interface.md

features:
  - title: 简洁界面
    details: 采用现代化设计，简洁易用的界面，让您轻松管理和启动 Minecraft
  - title: WinUI3 界面框架
    details: 基于现代化 WinUI3 框架开发，提供流畅的用户体验和精美的界面设计
  - title: 多版本管理
    details: 支持多个 Minecraft 版本的管理，一键切换和更新游戏版本，轻松管理版本
  - title: 多样加载器支持
    details: 兼容 Forge / Fabric / Neoforge 等多种加载器，轻松管理和安装 Mod
  - title: 丰富社区资源
    details: 支持 Mod、光影、资源包、整合包等模组的下载，满足多样化需求
  - title: 便捷安装方式
    details: 支持一键拖放安装，简化组件的安装流程
  - title: 稳定联机支持
    details: 由陶瓦联机服务支持，与朋友畅玩游戏，享受稳定的联机体验
---

## 团队介绍

<style scoped>
/* 调整团队介绍部分与上面内容的间距 */
:deep(.VPTeamMembers) {
  margin-top: 2rem;
}
</style>

<script setup>
import VPTeamMembers from './.vitepress/theme/components/VPTeamMembers.vue'

const members = [
  {
    avatar: '/img/N123999.png',
    name: 'XianYu',
    title: '开发者',
    desc: '负责启动器的设计和开发',
    links: [
      { icon: 'github', link: 'https://github.com/N123999' }
    ]
  },
  {
    avatar: '/img/dots.svg',
    name: '其它贡献者',
    title: '贡献者',
    desc: '感谢所有为 XianYuLauncher 提供建议和帮助的社区成员'
  }
]
</script>

<VPTeamMembers size="small" :members="members" />

