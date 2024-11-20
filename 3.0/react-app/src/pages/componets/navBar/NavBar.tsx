
import { View } from "@tarojs/components";
import Taro, { useDidShow } from "@tarojs/taro";
import { useState } from "react";
import "./NavBar.less"

/**
 * 自定义顶部导航栏
 * 1.获取胶囊位置
 * 2.获取设备系统数据,获取导航栏（胶囊）距离设备顶部的高度statusBarHeight
 * 设置导航栏高度
 * 设置导航栏背景色
 * 设置导航栏标题
 * 设置导航栏标题颜色
 * 设置导航栏返回按钮
 */
export default function NaviBar({ title }) {
    const [navBarHeight, setNavBarHeight] = useState(0);
    const [navHeight, setNavHeight] = useState(0);

    const getNavHeight = () => {
        // 获取胶囊位置,top 和 height 是胶囊的顶部和高度
        const { top, height } = Taro.getMenuButtonBoundingClientRect();
        //获取状态栏高度
        const { statusBarHeight } = Taro.getSystemInfoSync();
        //计算导航栏底部距离
        const navHeightCale = height + (top - statusBarHeight!) * 2;
        //计算导航栏高度 
        const navBarHeightCale = statusBarHeight! + height + (top - statusBarHeight!) * 2;
        //设置导航栏高度
        setNavHeight(navHeightCale)
        setNavBarHeight(navBarHeightCale)
    }

    useDidShow(() => {
        getNavHeight();
    })
    return (
        <View className="nav-bar" style={{ height: `${navBarHeight}px` }}>
            <View className="nav-bar-title" style={{height: `${navHeight}px`}}>
                
            </View>
        </View>
    )
}