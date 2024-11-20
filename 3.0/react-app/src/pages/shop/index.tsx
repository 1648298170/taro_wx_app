import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'
import { useSelector } from 'react-redux'

export default function Index() {
  const count = useSelector((state:any)=>state.counter.count)
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>购物车</Text>
      <Text>{count}</Text>
    </View>
  )
}
