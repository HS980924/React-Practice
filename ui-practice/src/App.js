import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Notice from './pages/Notice';
import NoticeDetail from './pages/NoticeDetail';
import NoticeCreate from './pages/NoticeCreate';
import Reconfirm from './components/Reconfirm';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

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
            <Route path='/event' element={<Main/>}/>
            <Route path='/til' element={<Reconfirm message={"삭제하시겠습니까?"} button1='취소' button2='삭제'/>}/>
            <Route path='/shop' element={<Main/>}/>
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
