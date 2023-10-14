import { useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidPencil } from "react-icons/bi";

import NoticeItem from "../components/Notice/NoticeItem";

import '../styles/Notice/Notice.scss';


const Notice = () =>{
    const DummyNoticeList = [
        {
            id: 0,
            writer:"최형순",
            title:"이번주 부터 TIL은 주 3회로 늘리겠습니다.",
            modifiedDate: "2023-10-11T19:23:33.222",
            watchCnt: 0,
        },
        {
            id: 1,
            writer:"최형순",
            title:"이번주 부터 TIL은 주 3회로 늘리겠습니다.",
            modifiedDate: "2023-10-11T19:23:33.222",
            watchCnt: 0,
        },
        {
            id: 2,
            writer:"최형순",
            title:"이번주 부터 TIL은 주 3회로 늘리겠습니다.",
            modifiedDate: "2023-10-11T19:23:33.222",
            watchCnt: 0,
        },
        {
            id: 3,
            writer:"최형순",
            title:"이번주 부터 TIL은 주 3회로 늘리겠습니다.",
            modifiedDate: "2023-10-11T19:23:33.222",
            watchCnt: 0,
        },
        {
            id: 4,
            writer:"최형순",
            title:"이번주 부터 TIL은 주 3회로 늘리겠습니다.",
            modifiedDate: "2023-10-11T19:23:33.222",
            watchCnt: 0,
        },
        {
            id: 5,
            writer:"최형순",
            title:"이번주 부터 TIL은 주 3회로 늘리겠습니다.",
            modifiedDate: "2023-10-11T19:23:33.222",
            watchCnt: 0,
        },
    ];

    const [ noticeList, setNoticeList ] = useState(DummyNoticeList);
    return(
        <div className="NoticeContainer">
            <div className="NoticeTitleBox">
                <div className="NoticeTitle">공지사항</div>
                {/* <div className="NoticeSubcontents">Pray2U의 다양한 정보를 공지하는 공간입니다.</div> */}
            </div>
            <div className="NoticeMiddleBox">
                <Link to={'/notice/create'} className="CreateForm">
                    <BiSolidPencil className="PencilLogo"/>
                    <p className="Write">작성하기</p>
                </Link>
            </div>
            <div className="NoticeListBox">
                {
                    noticeList?.map(notice => 
                        <NoticeItem key={notice.id} noticeItem={notice}/>
                    )
                }
            </div>
            
        </div>
    );
}

export default Notice;