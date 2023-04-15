import './App.css';
import MyComponent from './component/MyComponent';
import Say from './component/Say';
import EventPractice from './component/EventPractice';
import IterationSample from './component/IterationSample';

import React, { useState, useEffect } from 'react';

function App() {
  const [ name, setName ] = useState('react');
  const [ check, setCheck] = useState(true);

  const changeCheck = () => {
    if (check){
      setCheck(false);
      setName('component');
    }
    else{
      setCheck(true);
      setName('컴포넌트');
    }
  }
  return (
    <>
      {check? 
      ( 
        <div>
          <h1>{name} Hello react</h1>
        </div>
      ) :
      ( 
        <div>
          <h2>잘 작동하니?</h2>
        </div> 
      )
      }
      <MyComponent name={name}/>
      <Say/>
      <EventPractice/>
      <button onClick={changeCheck}>Click</button>
      <IterationSample></IterationSample>

    </>
  );
}

export default App;
