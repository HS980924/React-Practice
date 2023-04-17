import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Layout from './Layout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Mypage from './pages/Mypage';


function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='profile/:username' element={<Profile/>}></Route>
        </Route>
        <Route path='articles' element={<Articles/>}>
          <Route path=':id' element={<Article/>}/>
        </Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='mypage' element={<Mypage/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  );
}

export default App;
