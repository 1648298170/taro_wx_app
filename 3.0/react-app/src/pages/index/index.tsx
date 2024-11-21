import { Button, Text, View } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.less'
import { increment, decrement, incrementByAmount, selectCount } from '@/store/reducer/counter/counter'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { NavBar,ScrollViewComponent } from 'LocalComponets'

export default function Index() {
  const { count } = useAppSelector(selectCount)
  const dipatch = useAppDispatch()
  useLoad(() => {
    console.log('Page loaded.:', count)
  })

  //模拟请求数据
  const fetchData = () => {
    Taro.request({
      url:'/api/users'
    }).then(res=>{
      console.log(res)
    })
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('fetch data success')
      }, 2000)
    })
  }



  return (
    <View>
      <NavBar title={'首页'}>
        <Text>首页</Text>
      </NavBar>
      <ScrollViewComponent  fetchData={fetchData}
      >
        <Text>首页</Text>
        <Text>{count}</Text>
        <Button onClick={() => dipatch(increment())}>increment</Button>
        <Button onClick={() => dipatch(decrement())}>decrement</Button>
        {
          Array.from({ length: 10 }).map(() => {
            return <View>列表内容</View>
          })
        }
      </ScrollViewComponent>
    </View>
  )
}
