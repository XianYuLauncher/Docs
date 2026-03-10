import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap'
    }]
  ],
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      title: "XianYuLauncher 文档",
      description: "XianYuLauncher - 文档",
      ignoreDeadLinks: true,
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '快速开始', link: '/quick-start.md' }
        ],
        sidebar: [
          {
            text: '入门指南',
            items: [
              { text: '快速开始', link: '/quick-start.md' },
              { text: '启动器界面介绍', link: '/interface.md' }
            ]
          },
          {
            text: 'Minecraft 管理',
            items: [
              { text: '下载和安装 Minecraft', link: '/download-minecraft.md' },
              { text: '启动 Minecraft', link: '/launch-minecraft.md' },
              { text: '游戏版本管理', link: '/version-management.md' }
            ]
          },
          {
            text: '高级功能',
            items: [
              { text: '模组管理', link: '/mod-management.md' },
              { text: '多人游戏', link: '/multiplayer.md' },
              { text: '启动器设置', link: '/settings.md' }
            ]
          },
          {
            text: '帮助与支持',
            items: [
              { text: '常见问题', link: '/faq.md' }
            ]
          }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      title: "XianYuLauncher Docs",
      description: "XianYuLauncher - Docs",
      link: '/en/',
      themeConfig: {
        editLink: {
          pattern: 'https://github.com/XianYuLauncher/XianYuLauncher-Docs/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Quick Start', link: '/en/quick-start.md' }
        ],
        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Quick Start', link: '/en/quick-start.md' },
              { text: 'Launcher Interface Introduction', link: '/en/interface.md' }
            ]
          },
          {
            text: 'Minecraft Management',
            items: [
              { text: 'Download and Install Minecraft', link: '/en/download-minecraft.md' },
              { text: 'Launch Minecraft', link: '/en/launch-minecraft.md' },
              { text: 'Game Version Management', link: '/en/version-management.md' }
            ]
          },
          {
            text: 'Advanced Features',
            items: [
              { text: 'Mod Management', link: '/en/mod-management.md' },
              { text: 'Multiplayer', link: '/en/multiplayer.md' },
              { text: 'Launcher Settings', link: '/en/settings.md' }
            ]
          },
          {
            text: 'Help & Support',
            items: [
              { text: 'FAQ', link: '/en/faq.md' }
            ]
          }
        ]
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/logo.png', alt: 'XianYuLauncher Logo' },
    editLink: {
      pattern: 'https://github.com/XianYuLauncher/XianYuLauncher-Docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/XianYuLauncher/XianYuLauncher' }
    ],
    // 布局配置
    sidebar: {
      autoCollapse: true
    },
    // 搜索配置
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        locales: {
          root: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '未找到结果',
                resetButtonTitle: '清除查询',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          },
          en: {
            placeholder: 'Search docs',
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear query',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Navigate',
                  closeText: 'Close'
                }
              }
            }
          }
        }
      }
    }
  }
})
