import { useState, useEffect } from 'react';

const Info = () =>{
    const [ name, setName ] = useState('');
    const [ nickname, setNickname ] = useState('');

    useEffect(()=>{
        console.log(name);
    },[name]);
    const onChangeName = (e) => setName(e.target.value);
    const onChangeNickname = (e) => setNickname(e.target.value);

    return(
        <div>
            <input
                name='name'
                value={name}
                onChange={onChangeName}
            />
            <input
                name='nickname'
                value={nickname}
                onChange={onChangeNickname}
            />
            <h3><b>이름:</b>{name}</h3>
            <h3><b>닉네임:</b>{nickname}</h3>
        </div>
    );
};

export default Info;