import { useState, useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";
import parse from 'html-react-parser';

import CommentForm from "../components/Comment/CommentForm";
import CommentItem from "../components/Comment/CommentItem";

import '../styles/Notice/NoticeDetail.scss';


const NoticeDetail = () =>{

    const dummyData = {
        id: 0,
        writer: "최형순",
        profile: "형순",
        title: "알아두면 유용한 알고리즘",
        contents:"<h2>알아두면 좋은 4가지 알고리즘</h2><h4>1. 버블 정렬 알고리즘</h4><ul><li>이것은 이것이다.</li></ul><h4>2. 선택 정렬 알고리즘</h4><ul><li>이것도 이것이다.</li></ul><h4>3. 이것은 뭘까?</h4><ul><li>이것도 이것이다.<ul><li>이것은 이것이것이다.</li></ul></li></ul><h4>4. 이것은 이것이다.</h4><ul><li>아닌가? 맞는가?<ul><li>아닌교?<ul><li>아니다.</li></ul></li></ul></li></ul>",
        cnt: 200,
        createdDate: "3개월전"
    }

    const dummyComment = [
        {
            id:0,
            writer: "최형순",
            profile: "형순",
            comment:"하하하하핳하하하하하하하하하하하하하하하하하",
            createdDate: "2023-10-14T16:22",
        },
        {
            id:1,
            writer: "최최최",
            profile: "최최",
            comment:"흠 디자인이 별로네요",
            createdDate: Date(),
        }
    ]
    const [ noticeInfo, setNoticeInfo ] = useState(dummyData);


    return(
        <div className="NoticeDetailContainer">
            <div className="NoticeDetailHeader">
                <p className="NoticeCategory">공지사항&nbsp;&nbsp;Notice</p>
                <h1 className="NoticeHeaderTitle">{noticeInfo?.title}</h1>
                <div className="NoticeDetailInfo">
                    <div className='NoticeMyProfile'>{noticeInfo?.profile}</div>
                    <div className='NoticeWriter'>{noticeInfo?.writer}</div>
                    <AiOutlineEye className="NoticeEyeIcon"/>
                    <div className='NoticeWatchCnt'>{noticeInfo?.cnt}</div>
                    <div className='NoticeTime'>{noticeInfo?.createdDate}</div>
                </div>
            </div>
            <div className="NoticeContents">
                {parse(noticeInfo?.contents)}
            </div>
            <div className="NoticeComment">
                <div className="CommentCnt">댓글 {dummyComment.length}</div>
                {
                    dummyComment?.map((comment)=>
                        <CommentItem key={comment.id} commentInfo={comment}/>
                    )
                }
            </div>
            <CommentForm/>
        </div>
    );
}

export default NoticeDetail;