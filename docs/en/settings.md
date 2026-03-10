---
description: "Detailed settings guide for XianYuLauncher. Customize your launcher experience: themes, language, Java runtime, download sources, memory allocation, and other advanced options."
---

# Launcher Settings

On the launcher main interface, click the "Settings" icon at the bottom of the sidebar to enter. The settings page is organized into sections by function, covering game runtime, appearance, downloads, AI analysis, and more.

## Game

This section configures the Minecraft runtime environment.

**Minecraft Game Directory**: Manages where game files are stored; you can add multiple directories and double-click list items to switch quickly.

**Java Version Management**: Add, remove, or refresh installed Java runtimes; the launcher will automatically match the appropriate version.

**Version Isolation**: When enabled, each version uses its own game directory so Mods and saves stay separate.

**Global Memory Allocation** and **Global Launch Resolution**: Set defaults for all versions; each version can override these in version management.

**Global Custom JVM Parameters** and **Global Garbage Collector**: Advanced options for experienced users.

**Launch Game Real-time Log**: When enabled, the log page opens automatically after a successful game launch for troubleshooting.

<OpenInLauncherCard
  href="xianyulauncher://open?page=settings&section=game"
  title="Open in Launcher: Game"
  description="Click to jump to Launcher Settings → Game"
/>

## Personalization

**Theme**: Light, Dark, or Follow System.

**Window Material**: Choose the window background effect (e.g. Fluent).

**Language**: Select the application language. Supported languages include 中文（简体）, English, and more; changes require an app restart to take effect.

**Font**: Select the application font; changes take effect immediately.

**Navigation Bar Style**: Choose Side or Top.

<OpenInLauncherCard
  href="xianyulauncher://open?page=settings&section=personalization"
  title="Open in Launcher: Personalization"
  description="Click to jump to Launcher Settings → Personalization"
/>

## Network and Download

**Game Resource Download Source** and **Community Resource Download Source**: Used for the game itself, ModLoader, and community resources like Modrinth / CurseForge. Supported download sources include the official source, [BMCLAPI](https://bmclapi2.bangbang93.com/), [MCIM](https://www.mcimirror.top/), and others. You can also add custom sources via **Custom Source Configuration** by opening the config folder and adding files manually.

**Speed Test and Auto Source Selection**: Tests and automatically selects the fastest download source.

**Download Pre-requisite Mods**: When enabled, automatically downloads required dependency Mods.

**Hide Mod Snapshot Versions**: When enabled, hides snapshots, pre-releases, and release candidates on the Mod download page, showing stable versions only.

**Download Thread Count** and **Core File Split Count**: Affect download speed; higher values generally mean faster downloads.

**Cache Management**: Clear search results and image cache.

<OpenInLauncherCard
  href="xianyulauncher://open?page=settings&section=network"
  title="Open in Launcher: Network"
  description="Click to jump to Launcher Settings → Network"
/>

## AI Analysis

**AI Crash Analysis**: When enabled, third-party AI services can be used to analyze crash logs. Requires self-configuration of API endpoint and key.

<OpenInLauncherCard
  href="xianyulauncher://open?page=settings&section=ai-analysis"
  title="Open in Launcher: AI Analysis"
  description="Click to jump to Launcher Settings → AI Analysis"
/>

## About

Displays the current version, End User Agreement, Privacy Policy, GitHub, Sponsor, and other links.

**Allow Sending Anonymous Diagnostic Data**: Helps improve the launcher; only collects game version, runtime performance, and launch outcome data.

**Update Settings**: Configure automatic update checks; supports check for updates, install Dev channel version, etc.

**Open Log Directory**: View launcher operation logs for troubleshooting.

**Open Source Software License Statement**: View open source software and licenses used in this project.

<OpenInLauncherCard
  href="xianyulauncher://open?page=settings&section=about"
  title="Open in Launcher: About"
  description="Click to jump to Launcher Settings → About"
/>

## Advanced Settings

### Easter Egg Options

In the About section, click the "Version" area 5 times consecutively to enter. You can:
- idk(

### Experimental Features

Not ready yet, planned for the future..

---

## Next Steps

- [FAQ](./faq.md)
