
import { createApp } from 'vue'
import './app.less'
import { createPinia } from 'pinia'

const pinia = createPinia()
const App = createApp({
  onShow (options) {
    console.log('App onShow:',options)
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(pinia);

export default App
