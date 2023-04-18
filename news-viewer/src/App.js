import Newpage from './pages/Newpage';
import SimpleSlider from './component/SampleSlider';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Newpage/>}/>
        <Route path='/:category' element={<Newpage/>}/>
        <Route path='/test' element={<SimpleSlider/>}/>
      </Routes>
    </div>  
  );
}

export default App;
