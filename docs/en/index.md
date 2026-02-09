---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "XianYuLauncher"
  text: "Minecraft Launcher Documentation"
  tagline: A simple, efficient, and powerful Minecraft launcher that provides you with the best gaming experience
  image:
    src: /logo.png
    alt: XianYuLauncher Logo
  actions:
    - theme: brand
      text: Get Started
      link: /en/quick-start.md
    - theme: alt
      text: Features
      link: /en/interface.md

features:
  - title: Simple Interface
    details: Modern design with a simple and easy-to-use interface, allowing you to easily manage and launch Minecraft
  - title: WinUI3 Interface Framework
    details: Developed based on the modern WinUI3 framework, providing a smooth user experience and beautiful interface design
  - title: Multi-version Management
    details: Support for managing multiple Minecraft versions, one-click switching and updating game versions, easy version management
  - title: Diverse Loader Support
    details: Compatible with multiple loaders including Forge, Fabric, and Neoforge, easily manage and install mods
  - title: Rich Community Resources
    details: Support for downloading mods, shaders, resource packs, modpacks and other components to meet diverse needs
  - title: Convenient Installation
    details: Support for one-click drag-and-drop installation, simplifying the installation process of components
  - title: Stable Online Support
    details: Supported by Terracotta Online Service, enjoy stable online gaming experience with friends
---

## Team Introduction

<style scoped>
/* 调整团队介绍部分与上面内容的间距 */
:deep(.VPTeamMembers) {
  margin-top: 2rem;
}
</style>

<script setup>
import VPTeamMembers from '../.vitepress/theme/components/VPTeamMembers.vue'

const members = [
  {
    avatar: '/logo.png',
    name: 'XianYu',
    title: 'Developer',
    desc: 'Founder of XianYuLauncher, responsible for the design and development of the launcher',
    links: [
      { icon: 'github', link: 'https://github.com/N123999' }
    ]
  },
  {
    avatar: '/logo.png',
    name: 'Feedback Group Members',
    title: 'Members',
    desc: 'XianYuLauncher Feedback Group Members, who provided me with many valuable insights and suggestions'
  }
]
</script>

<VPTeamMembers size="small" :members="members" />
