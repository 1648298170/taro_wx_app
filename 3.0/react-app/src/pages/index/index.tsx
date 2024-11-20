import {  Button, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'
import { useDispatch, useSelector } from 'react-redux'
import {increment} from '@/store/reducer/counter/counter'

export default function Index() {
  const count = useSelector((state:any)=>state.counter.count)
  const dipatch = useDispatch()
  useLoad(() => {
    console.log('Page loaded.:',count)
  })

  return (
    <>
      <Text>首页</Text>
      <Text>{count}</Text>
      <Button onClick={()=>dipatch(increment())}>count++</Button>
    </>
  )
}
