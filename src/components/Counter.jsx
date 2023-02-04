import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/counter/counterSlice';

function Counter() {
    const count = useSelector((store) => store.counter)
    const dispatch = useDispatch()


    return (
        <>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <h2>Count : {count.value}</h2>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </>
    )
}

export default Counter
