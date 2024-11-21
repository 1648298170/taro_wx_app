import { useState } from "react"
import { ScrollView, View } from '@tarojs/components'


export default function ScrollViewComponet({ children, fetchData }) {
    const [refresherTriggered, setRefresherTriggered] = useState(false)
    console.log("children>>", children)
    //下拉刷新
    const refresh = async () => {
        console.log("获取数据")
        setRefresherTriggered(true)
        const res = await fetchData()
        console.log(res)
        setRefresherTriggered(false)
    }
    //触底刷新
    const loadMore = async () => {
        console.log('触底刷新')
        // const res = await fetchData()
        // console.log(res)

    }
    return (
        <ScrollView
            scrollY
            refresher-enabled
            style={{ border: '1px solid red', height: '88vh' }}
            onRefresherRefresh={() => refresh()}
            refresher-triggered={refresherTriggered}
            onScrollToLower={() => loadMore()}
        >
            {children}
        </ScrollView>
    )
}