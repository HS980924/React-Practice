import { useEffect, useState } from "react";
import { getCookie } from "../util/auth";
import axios from "axios";

import AdminSideMenu from "../components/Admin/AdminSideMenu";
import AdminOrderItem from "../components/Admin/AdminOrderItem";
import Footer from "../components/Footer";
import Title from "../components/Title/Title";
import Paging from "../components/Paging";

import '../styles/Admin/AdminOrder.scss';

const AdminOrder = () => {

    const pageSize = 10;

    const dummy = [
        {
            orderId: "1",
            user: "최형순",
            item: {
                itemId: 1,
                itemName : "아메리카노",
                point: 3000,
                itemDescription: "맛있는 아메리카노",
                imgUrl: "test.com",
            },
            targetUser: "user",
            useStatus: "ser",
            createDate: "2023-10-20",
            modifiedDate:"2023-10-20",
        },
        {
            orderId: "2",
            user: "최형순",
            item: {
                itemId: 1,
                itemName : "아메리카노",
                point: 3000,
                itemDescription: "맛있는 아메리카노",
                imgUrl: "test.com",
            },
            targetUser: "user",
            useStatus: "uss",
            createDate: "2023-10-20",
            modifiedDate:"2023-10-20",
        },
    ]

    const [ pageCnt, setPageCnt ] = useState(1);
    const [ totalItemCnt, setTotalItemCnt ] = useState(2);
    const [ orderList, setOrderList ] = useState(dummy);
    // const [ orderList, setOrderList ] = useState([]);

    const read_OrderList = async() => {
        try{
            const url = `${process.env.REACT_APP_API_SERVER}/api/orders?page=${pageCnt-1}&size=${pageSize}&sort=id,desc`;
            const response = await axios.get(url,{
                headers: {
                    Authorization: `Bearer ${getCookie('accessToken')}`
                },
                withCredentials: true,
            });
            if(response.status === 200){
                let newOrderList = response.data.data;
                setOrderList(newOrderList);
                setTotalItemCnt(newOrderList?.length);
                // setTotalItemCnt(response.data.data.totalElements);
            }else{
                alert(response.data.msg);
            }
        }catch(e){
            alert(e.response.data.message);
        }
    }

    
    const post_OrderApproval = async(id) => {
        try{
            const url = `${process.env.REACT_APP_API_SERVER}/api/admin/orders/${id}/accept`;
            const response = await axios.put(url,null,{
                headers:{
                    Authorization: `Bearer ${getCookie('accessToken')}`,
                },
                withCredentials: true
            });
            if(response.status === 200){
                alert('주문 승인이 완료되었습니다.');
                console.log(response);
                let newOrder = response.data.data.content;
                setOrderList(orderList => orderList.map(order => order?.orderId === id ? newOrder : order));
            }else{
                alert(response.data.message);
            }
        }catch(e){
            alert(e.response.data.message);
        }
    }

    useEffect(()=>{
        // read_OrderList();
    },[pageCnt]);

    return(
        <>
        <div className="AdminOrderContainer">
            <Title title={"주문 관리"}/>
            <div className="AdminShopListBox">
                <AdminSideMenu/>
                <div className="AdminOrderList">
                    <div className="AdminOrderListHeader">
                        <div className="AdminOrderListUserName">신청자</div>
                        <div className="AdminOrderListCreate">주문 날짜</div>
                        <div className="AdminOrderListItemName">주문 상품</div>
                        <div className="AdminOrderListStatus">승인 여부</div>
                    </div>
                    {
                        orderList?.map(order => 
                            <AdminOrderItem
                                key={order?.orderId} 
                                orderInfo={order}
                                onToggle={post_OrderApproval}
                            />
                        )
                    }
                    <Paging
                        pageNum={pageCnt}
                        countPerPage={pageSize}
                        totalItems={totalItemCnt ? totalItemCnt : 0}
                        handlePage={setPageCnt}
                        />
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default AdminOrder;