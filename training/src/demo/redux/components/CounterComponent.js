import { store } from "../../../books/ApplicationContext";
import {useEffect, useState} from 'react'
import {increment, decrement, change} from '../CounterSlice'
import Button from 'react-bootstrap/Button';

export default function CounterComponent(){
    const [value, updateValue] = useState(0);
    const updateComponent = () => {
        const state = store.getState()
        updateValue(state.counter.value)
    }

    useEffect( () => store.subscribe(updateComponent))
    return (
        <>
            <Button id="increment" variant="primary" onClick={() => store.dispatch(increment())}>+</Button>
            <Button id="decrement" variant="secondary" onClick={() => store.dispatch(decrement())}>-</Button>
            <Button id="batch" variant="secondary" onClick={() => store.dispatch(change({number: 5}))}>+ 5</Button>
            Clicked: <span id="value">{value}</span>
        </>
    )
}