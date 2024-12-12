// Das Alles wird vom Toolkit als Template genutzt
import {createSlice} from '@reduxjs/toolkit'
const counterSliceTemplate = {
    name: 'counter',
    initialState: {value:0},
    reducers: {
        increment(state, action){
            state.value += 5
        },
        decrement(state, action){
            state.value -= 1
        },
        inverse(state, action){
            state.value = -state.value
        }


    }
}
const counterSlice = createSlice(counterSliceTemplate)
export const {increment, decrement, inverse} = counterSlice.actions 
export default counterSlice.reducer
