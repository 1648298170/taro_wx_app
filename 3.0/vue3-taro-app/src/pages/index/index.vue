<template>
  <view class="index">
    <text>state:{{ store.count }}</text>
    <text>getter:{{ store.doubleCount }}</text>
    <button @click="c">+1</button>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import './index.less'
import useCounterStore from '@/stores/counter'

const store = useCounterStore()
const c = ()=>{
  console.log(store.count)
}
console.log(store.increment)
</script>
