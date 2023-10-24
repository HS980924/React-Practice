import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GitHubCalendar from 'react-github-calendar';
import axios from "axios";

import MypageHeader from "../components/Header/MypageHeader";
import Title from "../components/Title/Title";

import '../styles/MyPage/MyProfile.scss';
import { getCookie } from "../util/auth";

const MyProfile = () => {
    
    const navigate = useNavigate();

    const [myInfo, setMyInfo] = useState(null);
    const [myPoint, setMyPoint] = useState(null);
    const [githubCommitCalendar, setGithubCalendar]  = useState(null);

    const read_myInfomation = async() =>{
        try{
            const url = `${process.env.REACT_APP_API_SERVER}/api/users/me`;
            const response = await axios.get(url,{
                headers:{
                    Authorization: `Bearer ${getCookie('accessToken')}`
                },
                withCredentials:true
            });
            if(response.status === 200){
                setMyInfo(response.data.data);
            }else{
                alert('내 정보를 가져오는데 실패했습니다.');
                navigate('/');
            }
        }catch(e){
            alert(e.response.data.message);
            navigate('/');
        }
    }

    const read_myPoint = async() =>{
        try{
            const url = `${process.env.REACT_APP_API_SERVER}/api/points/me`;
            const response = await axios.get(url,{
                headers:{
                    Authorization: `Bearer ${getCookie('accessToken')}`
                },
                withCredentials:true
            });
            if(response.status === 200){
                console.log(response);
                setMyPoint(response.data.data);
            }else{
                alert('내 포인트를 가져오는데 실패했습니다.');
                navigate('/');
            }
        }catch(e){
            alert(e.response.data.message);
            navigate('/');
        }
    }

    useEffect(()=>{
        read_myInfomation();
        // read_myPoint();
    },[]);

    return(
        <div className="MyProfileContainer">
            <Title title={'Mypage'}/>
            <MypageHeader/>
            <div className="MyInfoBox">
                <div className="MyInfo">
                    <div className="MyProfilBox">
                        <img src={myInfo?.profileImgUrl} className="ProfileImg" alt="Profile"/>
                        <div className="ProfileButton">이미지 변경</div>
                    </div>
                    <div className="MyInfoDetailBox">
                        <div className="InfoDetail">
                            <div className="InfoTitle">이름</div>
                            <div className="InfoContent">{myInfo?.username}</div>
                        </div>
                        <div className="InfoDetail">
                            <div className="InfoTitle">전화번호</div>
                            <div className="InfoContent">{myInfo?.phoneNumber}</div>
                        </div>
                        <div className="InfoDetail">
                            <div className="InfoTitle">이메일</div>
                            <div className="InfoContent">{myInfo?.email}</div>
                        </div>
                        <div className="InfoDetail">
                            <div className="InfoTitle">Github</div>
                            <div className="InfoContent">{myInfo?.githubId}</div>
                            
                        </div>
                    </div>
                    <div className="MyPointBox">
                        <div className="MyGetPoint">누적 포인트&nbsp;&nbsp;&nbsp;{myPoint?.totalPoint} pt</div>
                        <div className="MyGetPoint">주간 포인트&nbsp;&nbsp;&nbsp;{myPoint?.currentPoint} pt</div>
                        <div className='PointButtonBox'>
                            <div className='RemoveButton'>회원탈퇴</div>
                            <div className='SaveButton'>저장</div>
                        </div>
                    </div>
                </div>
                <div className="MyCommitBox">
                    {
                        myInfo ? 
                        <GitHubCalendar 
                            username={(myInfo?.githubId).toLowerCase()}
                            showWeekdayLabels 
                            colorScheme="light"/> 
                        : <></>
                    }
                    {/* {githubCommitCalendar} */}
                </div>
            </div>
        </div>
    );
}

export default MyProfile;