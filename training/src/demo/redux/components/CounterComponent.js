import { store } from "../../../books/ApplicationContext";
import {useEffect, useState} from 'react'
import {increment, decrement, change} from '../CounterSlice'
export default function CounterComponent(){
    const [value, updateValue] = useState(0);
    const updateComponent = () => {
        const state = store.getState()
        updateValue(state.counter.value)
    }

    useEffect( () => store.subscribe(updateComponent))
    return (
        <>
            <button id="increment" onClick={() => store.dispatch(increment())}>+</button>
            <button id="decrement" onClick={() => store.dispatch(decrement())}>-</button>
            <button id="batch" onClick={() => store.dispatch(change({number: 5}))}>+ 5</button>
            Clicked: <span id="value">{value}</span>
        </>
    )
}