export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/shop/Shop',
    'pages/user/User',
  ],
  tabBar:{
    list:[
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/shop/Shop',
        text: '购物车'
      },
      {
        pagePath: 'pages/user/User',
        text: '我的'
      },
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
