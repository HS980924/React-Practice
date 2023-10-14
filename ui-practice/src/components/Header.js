import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineSearch, AiFillGithub } from "react-icons/ai";
import '../styles/Header/Header.scss';

const Header = () => {

    const navigate = useNavigate();

    const [ isLoggedIn, setIsLoggedIn ] = useState(true);
    const [ menuId, setMenuId ] = useState(null);
    const [ searchContent, setSearchContent ] = useState(null);

    const menus = [
        {
            id: 0,
            title: "공지사항",
            link: 'notice',
        },
        {
            id: 1,
            title: "이벤트",
            link: 'event',
        },
        {
            id: 2,
            title: "TIL",
            link: 'til',
        },
        {
            id: 3,
            title: "Shop",
            link: 'shop',
        }
    ]

    const onChageSearch = (e) => {
        setSearchContent(e.target.value);
    }

    const search = () => {
        if(searchContent){
            navigate(`/search?query=${searchContent}`);
        }
    }
    
    const handleKeyDown = (e) =>{
        if(e.key === 'Enter' && searchContent){
            navigate(`/search?query=${searchContent}`);
        }
    }

    return(
        <div className='HeaderContainer'>
            <div className='HeaderBox'>
                <Link to='/' className='LogoLink' onClick={()=>setMenuId(null)}>
                    <img className='LogoImage' alt='Logo_Image' src='img/logo_title.png'/>
                </Link>
                <div className='MenuBox'>
                    {
                        menus.map((menu) =>
                            <Link to={menu.link} 
                                key={menu.id} 
                                className={ menu.id === menuId ? "SelectedMenu" : "Menu"}
                                onClick={()=>setMenuId(menu.id)}
                                >{menu.title}</Link>
                        )
                    }
                </div>
                <div className='SearchBarBox'>
                    <AiOutlineSearch className="SearchIcon" onClick={()=>search()}/>
                    <input className='SearchInput' 
                        placeholder="검색" 
                        onChange={onChageSearch}
                        onKeyDown={handleKeyDown}
                        />
                </div>
                {
                    isLoggedIn ? 
                    <div className='ButtonBox'>
                        <Link to='https://github.com/Pray2U' target="_blank" rel="noopener noreferrer" className='GithubLink'>
                            <AiFillGithub className='GithubIcon'/>
                        </Link>
                        <div className='MyProfile'>형순</div>
                    </div>
                    :
                    <div className='ButtonBox'>
                        <Link to='https://github.com/Pray2U' target="_blank" rel="noopener noreferrer" className='GithubLink'>
                            <AiFillGithub className='GithubIcon'/>
                        </Link>
                        <Link to='/login' className='LoginButton'>로그인</Link>
                        <Link to='/signup' className='SignUpButton'>회원가입</Link>
                    </div>
                }
            </div>
        </div>
    )

    
}

export default Header;