import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
        case "DECREMENT":
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}

export default function UseReducerComponent() {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <div>
            <h1>UseReducer</h1>
            <h1>Count is {state.count}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>{"  "}
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        </div>
    )
}
