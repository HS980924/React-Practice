import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Notice from './pages/Notice';
import NoticeDetail from './pages/NoticeDetail';
import NoticeCreate from './pages/NoticeCreate';
import Til from './pages/Til';
import TilCreate from './pages/TilCreate';
import Shop from './pages/Shop';
import Event from './pages/Event';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <div className='Container'>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/notice' element={<Notice/>}/>
            <Route path='/notice/detail/:id' element={<NoticeDetail/>}/>
            <Route path='/notice/create' element={<NoticeCreate/>}/>
            <Route path='/event' element={<Event/>}/>
            <Route path='/til' element={<Til/>}/>
            <Route path='/til/create' element={<TilCreate/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/login' element={<Main/>}/>
            <Route path='/signup' element={<Main/>}/>
            <Route path='/search' element={<Main/>}/>
            <Route path='*' element={<Main/>}/>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
