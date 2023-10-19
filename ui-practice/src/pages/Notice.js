import { useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidPencil } from "react-icons/bi";

import NoticeItem from "../components/Notice/NoticeItem";
import CreateButton from "../components/CreateButton";
import Title from "../components/Title/Title";

import Pagination from 'react-bootstrap/Pagination';

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

    
    const [ selectedPage, setSelectedPage ] = useState(1);
    const [ pageSetCnt, setPageSetCnt ] = useState(0);
    const [ pageNumList, setPageNumList ] = useState([1,2,3,4,5]);
    const [ totalPage, setTotalPage ] = useState(10);

    const pagePrevMoved = () => {
        if (selectedPage > 1){
            setSelectedPage(selectedPage-1);
            if((selectedPage%5) === 1){
                setPageSetCnt(parseInt(selectedPage/5)-1);
            }
        }
    }

    const pageNextMoved = () => {
        if(selectedPage < totalPage){
            setSelectedPage(selectedPage+1);
            if(!(selectedPage%5)){
                setPageSetCnt(parseInt(selectedPage/5));
            }
        }
    }

    const pageSetPreMoved = () => {
        if(pageSetCnt){
            setPageSetCnt(pageSetCnt-1);
            setSelectedPage(5*(pageSetCnt-1)+1);
        }    
    }
    
    const pageSetNextMoved = () => {
        if(pageSetCnt < parseInt(totalPage / 5)){
            setPageSetCnt(pageSetCnt+1);
            setSelectedPage(5*(pageSetCnt+1)+1);
        }
    }
    
    const onChangePageNum = (num) => {
        setSelectedPage(num);
    }


    const [ noticeList, setNoticeList ] = useState(DummyNoticeList);
    return(
        <div className="NoticeContainer">
            <Title title='공지사항'/>
            <CreateButton link={'/notice/create'}/>
            <div className="NoticeListBox">
                {
                    noticeList?.map(notice => 
                        <NoticeItem key={notice.id} noticeItem={notice}/>
                    )
                }
            </div>
            <Pagination className='PaginationBox'>
                <Pagination.Prev onClick={pagePrevMoved}/>
                {
                    pageNumList?.map(pageNum =>
                        selectedPage === pageNum ?
                        <Pagination.Item 
                            key={pageNum} 
                            active={true}>
                            {pageNum}
                        </Pagination.Item> :
                        <Pagination.Item 
                            key={pageNum} 
                            active={false} 
                            onClick={()=>onChangePageNum(pageNum)}>
                                {pageNum}
                        </Pagination.Item>
                    )
                }
                <Pagination.Next onClick={pageNextMoved}/>
            </Pagination>
        </div>
    );
}

export default Notice;