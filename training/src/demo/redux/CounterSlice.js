import {createSlice} from '@reduxjs/toolkit'

const counterSliceTemplate = 
{
    name: 'counter', 
    initialState: {
        value: 0
    }, 
    reducers: {
        increment(state, action){
            state.value += 1
        }, 
        decrement(state, action){
            state.value -= 1
        },
        change(state, action){
            state.value += action.payload.number
        }, 
    }
}

const counterSlice = createSlice(counterSliceTemplate)

export const {increment, decrement, change} = counterSlice.actions
export default counterSlice.reducer