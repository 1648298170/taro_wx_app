export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/shop/index',
  ],
  tabBar:{
    list:[
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/shop/index',
        text: '购物车'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
