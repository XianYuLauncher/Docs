// 使用无字体版本的主题，避免 Inter 导致中文回退到微软雅黑
import DefaultTheme from 'vitepress/theme-without-fonts'
import OpenInLauncherCard from './components/OpenInLauncherCard.vue'

// 引入自定义样式
import './style/index.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('OpenInLauncherCard', OpenInLauncherCard)
  }
}
