import {useState} from 'react';

const Counter = () =>{
    const [ count, setCount ] = useState(0);

    return(
        <div>
            <h1>현재 카운터 값은 <b>{count}</b>입니다.</h1>
            <button onClick={()=>{setCount(count+1)}}>+1</button>
            <button onClick={()=>{setCount(count-1)}}>-1</button>
        </div>
    );
};

export default Counter;