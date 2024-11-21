import Mock from 'mockjs'

Mock.setup({
  timeout: '200-600'
})

Mock.mock('/api/user', 'get', {
  'code': 200,
  'data': {
    "array|1-10": [
      {
        "name|+1": [
          "Hello",
          "Mock.js",
          "!"
        ]
      }
    ]
  }
})



