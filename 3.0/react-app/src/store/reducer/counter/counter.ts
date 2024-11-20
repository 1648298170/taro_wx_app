import { RootState } from "@/store"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CounterState{
    count:number
}

const initialState:CounterState = {
    count:0
} 

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state, action:PayloadAction<number>) => {
            state.count += action.payload
        },
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// 选择器等其他代码可以使用导入的 `RootState` 类型
export const selectCount = (state:RootState)=>state.counter.count;

export default counterSlice.reducer;