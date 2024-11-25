import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import { Provider } from 'react-redux'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import { store } from './store'
import './app.less'

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    console.log('App launched.')
    console.log("children", children)
  })

  // children
  return (
    // 在入口组件不会渲染任何内容，但我们可以在这里做类似于状态管理的事情
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default App
