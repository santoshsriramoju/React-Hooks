import React,{useEffect, useState, useContext} from 'react'
import {Context} from '../index'

export default function useEffectComponent() {
    const [count, setCount] = useState(0);
    const value = useContext(Context);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <div>
    <h1>I've rendered {count} times!</h1>
    <h1>value from context {value.hello}</h1>
  </div>;
}
