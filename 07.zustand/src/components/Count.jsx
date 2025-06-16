import React from 'react'
import { useState } from 'react'
import CountBox from './CountBox';
import useCountStore from '../stores/useCountStore';

const Count = () => {
    // const [count, setCount] = useState(0);
    const { count, increase, increaseBy, decrease, decreaseBy} = useCountStore();

    const handleAddCount = () => {
        increase();
    }

    const handleMinusCount=() => {
        if(count > 0){
            decrease();
        }
    }

    

  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={handleAddCount}>증가+1</button>
        <button onClick={()=>increaseBy(10)}>증가+10</button>
        <button onClick={handleMinusCount}>증가-1</button>
        <button onClick={()=>decreaseBy(10)}>증가-10</button>
        <CountBox/>
    </div>
  )
}

export default Count