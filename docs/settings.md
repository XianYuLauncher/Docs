---
description: XianYuLauncher 详细设置指南。自定义您的启动器体验：调整个性化主题、语言设置、Java 运行环境、下载源、游戏内存分配以及其他高级选项。
---

# 启动器设置

在启动器主界面，点击侧边栏底部的「设置」图标即可进入。设置页面按功能分为多个板块，涵盖游戏运行、外观、下载、AI 分析等，可根据需要调整。

## 游戏相关

这里配置 Minecraft 的运行环境。

**Minecraft 游戏目录**：管理游戏文件所在位置，支持添加多个目录，双击列表项可快速切换。

**Java 版本管理**：添加、删除、刷新已安装的 Java 运行时，启动器会自动匹配合适的版本。

**版本隔离**：开启后，每个版本使用独立的游戏目录，Mod 和存档互不干扰。

**全局内存分配**和**全局启动分辨率**：设置所有版本的默认值，各版本可在版本管理中单独覆盖。

**全局自定义 JVM 参数**和**全局垃圾回收器**：高级选项，适合有经验的用户调整。

**启动游戏实时日志**：开启后，游戏启动成功会自动打开日志页面，方便排查问题。

<OpenInLauncherCard
  href="xianyulauncher://open?page=settings&section=game"
  title="在启动器中打开「游戏」"
  description="点击跳转至启动器设置 → 游戏"
/>

## 个性化

**主题**：浅色、深色或跟随系统。

**窗口材质**：选择窗口背景效果（如流光等）。

**语言**：选择应用语言，支持中文（简体）、English 等，更改后需重启应用生效。

**字体**：选择应用字体，更改后立即生效。

**导航栏风格**：可选择侧边或顶部显示。

<OpenInLauncherCard
  href="xianyulauncher://open?page=settings&section=personalization"
  title="在启动器中打开「个性化」"
  description="点击跳转至启动器设置 → 个性化"
/>

## 网络与下载

**游戏资源下载源**和**社区资源下载源**：分别用于游戏本体、ModLoader 以及 Modrinth、CurseForge 等社区资源的下载。支持的下载源包括官方源、[BMCLAPI](https://bmclapi2.bangbang93.com/)、[MCIM](https://www.mcimirror.top/) 等，也可通过**自定义源配置**打开配置文件夹手动添加。

**测速与自动选源**：测试并自动选择最快的下载源。

**下载前置 Mod**：开启后自动下载 Mod 所需的前置依赖。

**Mod 隐藏快照版本**：开启后隐藏快照、预发布版和候选版，仅显示稳定版。

**下载线程数**和**核心文件分片数**：影响下载速度，数值越大通常下载越快。

**缓存管理**：可清理搜索结果和图片缓存。

<OpenInLauncherCard
  href="xianyulauncher://open?page=settings&section=network"
  title="在启动器中打开「网络」"
  description="点击跳转至启动器设置 → 网络"
/>

## AI 分析

**AI 崩溃分析**：启用后可使用第三方 AI 服务分析崩溃日志，需自行配置 API 端点与密钥。

<OpenInLauncherCard
  href="xianyulauncher://open?page=settings&section=ai-analysis"
  title="在启动器中打开「AI 分析」"
  description="点击跳转至启动器设置 → AI 分析"
/>

## 关于

显示当前版本、最终用户协议、隐私协议、GitHub、赞助等链接。

**允许发送匿名诊断数据**：帮助改进启动器，仅收集游戏版本、运行性能及启动结果类数据。

**更新设置**：配置自动检查更新，支持检查更新、安装 Dev 通道版本等。

**打开日志目录**：查看启动器运行日志，用于排查问题。

**开源软件许可说明**：查看本项目使用的开源软件及许可信息。

<OpenInLauncherCard
  href="xianyulauncher://open?page=settings&section=about"
  title="在启动器中打开「关于」"
  description="点击跳转至启动器设置 → 关于"
/>

## 高级设置

### 彩蛋选项

在「关于」选项中，连续点击 5 次「版本号」区域可进入。可以：
- idk(

### 实验性功能

没做好，有计划吧..

---

## 下一步

- [常见问题](./faq.md)
