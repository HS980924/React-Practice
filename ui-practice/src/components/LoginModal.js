
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";

import '../styles/Modal/LoginModal.scss';

const LoginModal = ({onCancel}) => {
    
    return(
        <div className="LoginContainer">
            <div className="LoginModalBox">
                <div className="LoginModalHeader">
                    <MdOutlineCancel className="LoginModalCancel" onClick={()=>onCancel()}/>
                </div>
                <div className="LoginModalTitle">로그인</div>
                <Link to='https://github.com/Pray2U' 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="LoginModalButton">
                    <AiFillGithub className="LoginGithubIcon"/>
                    <div className="LoginModalContent">github으로 로그인하기</div>
                </Link>
            </div>
        </div>
    )
}

export default LoginModal;