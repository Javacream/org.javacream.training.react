// Das Alles wird vom Toolkit als Template genutzt
import {createSlice} from '@reduxjs/toolkit'
const counterSliceTemplate = {
    name: 'counter',
    initialState: {value:0},
    reducers: {
        increment(state, action){
            state.value += 1
        },
        decrement(state, action){
            state.value -= 1
        }

    }
}
const counterSlice = createSlice(counterSliceTemplate)
export const {increment, decrement} = counterSlice.actions //increment und decrement sind Funktionen, die für eine Component einee Action erzeugen
export default counterSlice.reducer
