import { Button, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'
import { increment,decrement, incrementByAmount, selectCount } from '@/store/reducer/counter/counter'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import NaviBar from '../componets/navBar/NavBar'

export default function Index() {
  const {count} = useAppSelector(selectCount)
  const dipatch = useAppDispatch()
  useLoad(() => {
    console.log('Page loaded.:', count)
  })

  return (
    <>
      <NaviBar title={'首页'}></NaviBar>
      <Text>首页</Text>
      <Text>{count}</Text>
      <Button onClick={() => dipatch(increment())}>increment</Button>
      <Button onClick={() => dipatch(decrement())}>decrement</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
      <Button onClick={() => dipatch(incrementByAmount(3))}>incrementByAmount</Button>
    </>
  )
}
