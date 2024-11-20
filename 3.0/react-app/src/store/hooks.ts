import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./index";


/**
 * 自定义的钩子，用于在函数组件中获取 Redux store 的 dispatch 函数。
 * 
 * 这个钩子通过调用 `useDispatch.withTypes<AppDispatch>()` 来创建，返回的是一个类型为 `AppDispatch` 的 dispatch 函数。
 * 
 * 使用这个钩子可以确保在使用 dispatch 函数时，类型是已知的，从而提供更好的类型检查和自动补全。
 * 
 * @returns {AppDispatch} 返回一个类型为 `AppDispatch` 的 dispatch 函数。
 */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

/**
 * 自定义的钩子，用于在函数组件中从 Redux store 中选择特定状态。
 * 
 * 这个钩子通过调用 `useSelector.withTypes<RootState>()` 来创建，返回的是一个类型为 `RootState` 的选择器函数。
 * 
 * 使用这个钩子可以确保在使用选择器函数时，从 Redux store 中选择的状态类型是已知的，从而提供更好的类型检查和自动补全。
 * 
 * @returns {RootState} 返回一个类型为 `RootState` 的选择器函数。
 */
export const useAppSelector = useSelector.withTypes<RootState>();