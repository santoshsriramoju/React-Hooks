import React, { useState } from 'react'
import useFetch from './useFetch';

export default function UseCustomHookComponent() {
    const [input, setInput] = useState("");
    const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts");

    const [data] = useFetch(url);

    const handleClick = () => {
        setUrl(input)
    }
    return (
        <div>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={handleClick}>Submit</button>
            <hr />
            {
                data && data.length > 0 && data.map(item => {
                    return <h5>{item.title}</h5>
                })
            }
        </div>
    )
}
