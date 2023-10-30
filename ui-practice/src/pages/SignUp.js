import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

import SignUpForm from '../components/SignUp/SignUpForm';
import Footer from '../components/Footer';

import '../styles/SignUp/SignUp.scss';

const SignUp = () =>{

    const navigate = useNavigate();
    const [ searchParams, setSearchParams ] = useSearchParams();

    useEffect(()=>{
        let token = searchParams.get('accessToken');
        if(!token){
            navigate('/error');
        }
    },[]);

    return(
        <>
            <div className="SignInContainer">
                <div className="LeftBox">
                    <div className='LogoBox'>
                        <img src='./img/logo.png' alt='img'/>
                    </div>
                    <SignUpForm/>
                    <div className="BottomColor"/>
                </div>
                <img src='./img/signup_illustration.png' className='RightBox'/>
            </div>
            <Footer/>
        </>
    );   

}

export default SignUp;