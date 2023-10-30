import Header from './components/Header';
import Main from './pages/Main';
import Notice from './pages/Notice';
import NoticeCreate from './pages/NoticeCreate';
import NoticeDetail from './pages/NoticeDetail';
import NoticeEdit from './pages/NoticeEdit';
import Til from './pages/Til';
import TilCreate from './pages/TilCreate';
import TilEdit from './pages/TilEdit';
import Shop from './pages/Shop';
import Event from './pages/Event';
import Error from './pages/Error';
import MyAttend from './pages/MyAttend';
import MyTil from './pages/MyTil';
import MyShop from './pages/MyShop';
import MyProfile from './pages/MyProfile';
import AdminUser from './pages/AdminUser';
import AdminShop from './pages/AdminShop';
import AdminOrder from './pages/AdminOrder';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminShopCreate from './pages/AdminShopCreate';

function App() {

  return (
    <>
      <Router>
        <Header/>
        <div className='Container'>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/notice' element={<Notice/>}/>
            <Route path='/notice/create' element={<NoticeCreate/>}/>
            <Route path='/notice/detail/:id' element={<NoticeDetail/>}/>
            <Route path='/notice/edit/:id' element={<NoticeEdit/>}/>
            <Route path='/event' element={<Event/>}/>
            <Route path='/til' element={<Til/>}/>
            <Route path='/til/create' element={<TilCreate/>}/>
            <Route path='/til/edit/:id' element={<TilEdit/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/mypage/profile' element={<MyProfile/>}/>
            <Route path='/mypage/attendance' element={<MyAttend/>}/>
            <Route path='/mypage/mytil' element={<MyTil/>}/>
            <Route path='/mypage/myshop' element={<MyShop/>}/>
            <Route path='/admin/user' element={<AdminUser/>}/>
            <Route path='/admin/shop' element={<AdminShop/>}/>
            <Route path='/admin/shop/create' element={<AdminShopCreate/>}/>
            <Route path='/admin/order' element={<AdminOrder/>}/>
            <Route path='/signup' element={<Main/>}/>
            <Route path='/search' element={<Main/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
