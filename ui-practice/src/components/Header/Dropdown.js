import { Link } from "react-router-dom";
import '../../styles/Header/Dropdown.scss';

const Dropdown = ({onHandleLogout, onSetView}) => {
    return(
        <div className="DropdownBox">
            <div className="DropdownMenuBox">
                <Link to={'/mypage/profile'} className="DropdownMenuFirst" onClick={()=>onSetView(false)}>프로필</Link>
                <Link to={'/mypage/attendance'} className="DropdownMenu" onClick={()=>onSetView(false)}>출석</Link>
                <Link to={'/mypage/mytil'} className="DropdownMenu" onClick={()=>onSetView(false)}>My TIL</Link>
                <Link to={'/mypage/myshop'} className="DropdownMenu" onClick={()=>onSetView(false)}>My Shop</Link>
                <Link to={'/admin'} className="DropdownMenu" onClick={()=>onSetView(false)}>관리자</Link>
            </div>
            <div className="DropdownLogOut" onClick={onHandleLogout}>로그아웃</div>
        </div>
    )
}

export default Dropdown;