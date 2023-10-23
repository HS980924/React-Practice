import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BiSolidPencil } from "react-icons/bi";

import NoticeItem from "../components/Notice/NoticeItem";
import CreateButton from "../components/CreateButton";
import Title from "../components/Title/Title";
import Paging from "../components/Paging";

import Pagination from 'react-bootstrap/Pagination';
import axios from 'axios';
import { getCookie } from "../util/auth";

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

    
    const navigate = useNavigate();
    const pageSize = 10;
    
    const [ selectedPage, setSelectedPage ] = useState(1);
    const [ totalItemCnt, setTotalItemCnt ] = useState(null);
    const [ noticeList, setNoticeList ] = useState([]);

    const read_NoticeList = async() => {
        try{
            const url = `${process.env.REACT_APP_API_SERVER}/api/posts?pageNumber=${selectedPage-1}&pageSize=${pageSize}`
            const response = await axios.get(url,
                {
                    headers:{
                        Authorization: `Bearer ${getCookie('accessToken')}`
                    },
                    withCredentials:true
                });
            setNoticeList([...response.data.data.content]);
            setTotalItemCnt(response.data.data.totalElements);
            // setIsLodding(false);
        }catch(e){
            console.log(e);
        }
    }

    // const create_NoticePageCnt = (totalPage) => {
    //     let startNum = 5*(pageSetCnt)+1;
    //     let endNum = parseInt(totalPage / 5) > pageSetCnt ? startNum+4 : totalPage;
    //     const newPageNumList = [...Array(endNum - startNum+1).keys()].map((i) => i + startNum)
    //     setPageNumList([...newPageNumList]);
    // }

    useEffect(()=>{
        read_NoticeList();
    },[selectedPage]);


    return(
        <div className="NoticeContainer">
            <Title title='공지사항'/>
            <CreateButton link={'/notice/create'}/>
            <div className="NoticeListBox">
                {
                    noticeList?.map(notice => 
                        <NoticeItem key={notice.postId} noticeItem={notice}/>
                    )
                }
            </div>
            <Paging
                pageNum={selectedPage}
                countPerPage={pageSize}
                totalItems={totalItemCnt ? totalItemCnt : 0}
                handlePage={setSelectedPage}
            />
        </div>
    );
}

export default Notice;