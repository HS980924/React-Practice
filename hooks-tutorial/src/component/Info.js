import { useState, useEffect, useReducer } from 'react';


function reducer(state, action){
    return {
        ...state,
        [action.name]: action.value
    };
}

const Info = () =>{
    // const [ name, setName ] = useState('');
    // const [ nickname, setNickname ] = useState('');

    const [ state, dispatch ] = useReducer(reducer, {name:'', nickname:''});
    const { name, nickname } = state;

    const onChange = (e) =>{
        dispatch(e.target);
    };


    // useEffect(()=>{
    //     console.log('effect');
    //     console.log(name);
    //     return(()=>{
    //         console.log('cleanup');
    //         console.log(name);
    //     })   
    // },[name]);
    // const onChangeName = (e) => setName(e.target.value);
    // const onChangeNickname = (e) => setNickname(e.target.value);

    return(
        <div>
            <input
                name='name'
                value={name}
                onChange={onChange}
            />
            <input
                name='nickname'
                value={nickname}
                onChange={onChange}
            />
            <h3><b>이름:</b>{name}</h3>
            <h3><b>닉네임:</b>{nickname}</h3>
        </div>
    );
};

export default Info;