import { useState, useMemo, useCallback } from 'react';

const getAverage = (numbers) =>{
    console.log('평균값 계산 중');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b)=>a+b);
    return sum / numbers.length;
}

const Average = () =>{
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');


    const onChangeNumber = useCallback((e) => {setNumber(e.target.value);
    console.log('check');},[]);
    const onClickResist = useCallback(() => {
        const nextList = list.concat(parseInt(number) || 0);
        setList(nextList);
        setNumber('');
        console.log('chsss');
    },[number,list]);

    const avg = useMemo(()=>getAverage(list),[list]);

    const showList = list.map((num, idx) => <li key={idx}>{num}</li>)

    return(
       <div>
        <input
            name="regist"
            value={number}
            onChange={onChangeNumber}
        />
        <button onClick={onClickResist}>등록</button>
        <ul>
            {showList}
            {/* {list.map((num, idx) => {return (<li key={idx}>{num}</li>)})} */}
        </ul>
        <div>
            {/* <b>평균값:</b> {getAverage(list)} */}
            <b>평균값:</b> {avg}
        </div>
       </div> 
    );
};

export default Average;