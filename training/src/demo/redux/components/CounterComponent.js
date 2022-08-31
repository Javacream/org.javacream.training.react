import {increment, decrement} from '../ReduxSlice'
import { store } from '../../../books/ApplicationContext'
import { useEffect, useState } from 'react';
export default function CounterComponent(props){
    let [value, updateValue] = useState(0);
    function update(){
        const state = store.getState()
        updateValue(state.counter.value)
    }
    useEffect(() => {
        store.subscribe(update)
    }, [])
    return (
        <>
            <button id="increment" onClick={() => store.dispatch(increment())}>+</button>
            <button id="decrement" onClick={() => store.dispatch(decrement())}>-</button>
            Clicked: <span id="value">{value}</span> times
        </>
    )
}