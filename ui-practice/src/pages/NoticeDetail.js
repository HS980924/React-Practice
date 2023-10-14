import { useState, useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";

import CommentForm from "../components/Comment/CommentForm";

import '../styles/Notice/NoticeDetail.scss';

const NoticeDetail = () =>{

    const dummyData = {
        id: 0,
        writer: "최형순",
        profile: "형순",
        title: "알아두면 유용한 알고리즘",
        contents:"하하하하핳하하하하하하하하하하하하하하하하하",
        cnt: 200,
        createdDate: "3개월전"
    }
    const [ noticeInfo, setNoticeInfo ] = useState(dummyData);


    return(
        <div className="NoticeDetailContainer">
            <div className="NoticeDetailHeader">
                <div className="NoticeCategory">공지사항&nbsp;&nbsp;Notice</div>
                <h1>{noticeInfo?.title}</h1>
                <div className="NoticeDetailInfo">
                    <div className='NoticeMyProfile'>{noticeInfo?.profile}</div>
                    <div className='NoticeWriter'>{noticeInfo?.writer}</div>
                    <AiOutlineEye className="NoticeEyeIcon"/>
                    <div className='NoticeWatchCnt'>{noticeInfo?.cnt}</div>
                    <div className='NoticeTime'>{noticeInfo?.createdDate}</div>
                </div>
            </div>
            <div className="NoticeContents">
                {noticeInfo?.contents}
            </div>
            <CommentForm/>
        </div>
    );
}

export default NoticeDetail;