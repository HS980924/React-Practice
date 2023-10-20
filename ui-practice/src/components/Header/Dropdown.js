import { Link } from "react-router-dom";
import '../../styles/Header/Dropdown.scss';

const Dropdown = ({onHandleLogout}) => {
    return(
        <div className="DropdownBox">
            <div className="DropdownMenuBox">
                <Link to={'/mypage/profile'} className="DropdownMenuFirst">프로필</Link>
                <Link to={'/mypage/attendance'} className="DropdownMenu">출석</Link>
                <Link to={'/mypage/mytil'} className="DropdownMenu">My TIL</Link>
                <Link to={'/mypage/myshop'} className="DropdownMenu">My Shop</Link>
                <Link to={'/admin'} className="DropdownMenu">관리자</Link>
            </div>
            <div className="DropdownLogOut" onClick={onHandleLogout}>로그아웃</div>
        </div>
    )
}

export default Dropdown;