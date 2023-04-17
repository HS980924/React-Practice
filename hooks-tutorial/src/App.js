import { useState } from 'react';
import './App.css';
import Counter from './component/Counter';
import Info from './component/Info';
import Average from './component/Average';

function App() {
  const [visiable, setVisiable] = useState(false);

  return (
    <div>
      {/* <button
        onClick={()=>{setVisiable(!visiable)}}
      >{visiable ? "숨기기":"보이기"}</button>
      {visiable && <Info/>} */}
      {/* <Counter></Counter> */}
      {/* <Info></Info> */}
      <Average></Average>
    </div>
  );
}

export default App;
