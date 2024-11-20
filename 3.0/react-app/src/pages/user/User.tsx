import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './User.less'
import { useAppSelector } from '@/store/hooks'
import { selectCount } from '@/store/reducer/counter/counter'

export default function Index() {
  const { count } = useAppSelector(selectCount)
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text></Text>
      <Text>{count}</Text>
    </View>
  )
}
