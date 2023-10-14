import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Notice from './pages/Notice';
import NoticeDetail from './pages/NoticeDetail';

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
            <Route path='/event' element={<Main/>}/>
            <Route path='/til' element={<Main/>}/>
            <Route path='/shop' element={<Main/>}/>
            <Route path='/login' element={<Main/>}/>
            <Route path='/signup' element={<Main/>}/>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
