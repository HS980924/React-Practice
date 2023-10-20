import { AiFillGithub } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { login } from "../util/auth";

import '../styles/Modal/LoginModal.scss';

const LoginModal = ({onCancel}) => {

    const logButton = () => {
        login();
        onCancel();
    }
    
    return(
        <div className="LoginContainer">
            <div className="LoginModalBox">
                <div className="LoginModalHeader">
                    <MdOutlineCancel className="LoginModalCancel" onClick={()=>onCancel()}/>
                </div>
                <div className="LoginModalTitle">로그인</div>
                <div className="LoginModalButton" onClick={()=>logButton()}>
                    <AiFillGithub className="LoginGithubIcon"/>
                    <div className="LoginModalContent">github으로 로그인하기</div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal;