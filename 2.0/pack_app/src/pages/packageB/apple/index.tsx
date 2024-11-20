import Taro, { Component, Config } from '@tarojs/taro'
export default class Index extends Component {
  config:Config = {
    navigationBarTitleText: '苹果'
  }
  render() {
    return (
      <div>
        <h1>苹果</h1>
      </div>
    )
  }
}