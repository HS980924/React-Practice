import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


import MyShopItem from "../components/Shop/MyShopItem";
import MypageHeader from "../components/Header/MypageHeader";
import Title from "../components/Title/Title";

import '../styles/MyPage/MyShop.scss';
import { getCookie } from "../util/auth";

const MyShop = () =>{  

    const navigate = useNavigate();

    const dummyData = [
        {
            "githubId" : "2",
            "userName" : "2",
            "orderId" : "1",
            "item" : 
                {
                    "itemId": 1,
                    "itemName" : "아이스 아메리카노 교환권",
                    "point":6000,
                    "itemDescription":"아이스 아메리카노 교환권으로 교환 가능합니다.",
                    "imgUrl":"https://jpg.com/iceamericano.jpg"
                },
            "targetUser": "",
            "useStatus":"Pending approval",
            "createDate":"2023-06-31",
            "modifiedDate":"2023-06-31"
        },{
            "githubId" : "2",
            "userName" : "2",
            "orderId" : "2",
            "item" : 
                {
                    "itemId": 1,
                    "itemName" : "아이스 아메리카노 교환권",
                    "point":6000,
                    "itemDescription":"아이스 아메리카노 교환권으로 교환 가능합니다.",
                    "imgUrl":"https://jpg.com/iceamericano.jpg"
                },
            "targetUser": "",
            "useStatus":"Pending approval",
            "createDate":"2023-06-31",
            "modifiedDate":"2023-06-31"
        },{
            "githubId" : "2",
            "userName" : "2",
            "orderId" : "3",
            "item" : 
                {
                    "itemId": 1,
                    "itemName" : "아이스 아메리카노 교환권",
                    "point":6000,
                    "itemDescription":"아이스 아메리카노 교환권으로 교환 가능합니다.",
                    "imgUrl":"https://jpg.com/iceamericano.jpg"
                },
            "targetUser": "",
            "useStatus":"Pending approval",
            "createDate":"2023-06-31",
            "modifiedDate":"2023-06-31"
        },{
            "githubId" : "2",
            "userName" : "2",
            "orderId" : "4",
            "item" : 
                {
                    "itemId": 1,
                    "itemName" : "아이스 아메리카노 교환권",
                    "point":6000,
                    "itemDescription":"아이스 아메리카노 교환권으로 교환 가능합니다.",
                    "imgUrl":"https://jpg.com/iceamericano.jpg"
                },
            "targetUser": "",
            "useStatus":"Pending approval",
            "createDate":"2023-06-31",
            "modifiedDate":"2023-06-31"
        },{
            "githubId" : "2",
            "userName" : "2",
            "orderId" : "5",
            "item" : 
                {
                    "itemId": 1,
                    "itemName" : "아이스 아메리카노 교환권",
                    "point":6000,
                    "itemDescription":"아이스 아메리카노 교환권으로 교환 가능합니다.",
                    "imgUrl":"https://jpg.com/iceamericano.jpg"
                },
            "targetUser": "",
            "useStatus":"Pending approval",
            "createDate":"2023-06-31",
            "modifiedDate":"2023-06-31"
        },{
            "githubId" : "2",
            "userName" : "2",
            "orderId" : "6",
            "item" : 
                {
                    "itemId": 1,
                    "itemName" : "아이스 아메리카노 교환권",
                    "point":6000,
                    "itemDescription":"아이스 아메리카노 교환권으로 교환 가능합니다.",
                    "imgUrl":"https://jpg.com/iceamericano.jpg"
                },
            "targetUser": "",
            "useStatus":"Pending approval",
            "createDate":"2023-06-31",
            "modifiedDate":"2023-06-31"
        },{
            "githubId" : "2",
            "userName" : "2",
            "orderId" : "7",
            "item" : 
                {
                    "itemId": 1,
                    "itemName" : "아이스 아메리카노 교환권",
                    "point":6000,
                    "itemDescription":"아이스 아메리카노 교환권으로 교환 가능합니다.",
                    "imgUrl":"https://jpg.com/iceamericano.jpg"
                },
            "targetUser": "",
            "useStatus":"Pending approval",
            "createDate":"2023-06-31",
            "modifiedDate":"2023-06-31"
        },{
            "githubId" : "2",
            "userName" : "2",
            "orderId" : "8",
            "item" : 
                {
                    "itemId": 1,
                    "itemName" : "아이스 아메리카노 교환권",
                    "point":6000,
                    "itemDescription":"아이스 아메리카노 교환권으로 교환 가능합니다.",
                    "imgUrl":"https://jpg.com/iceamericano.jpg"
                },
            "targetUser": "",
            "useStatus":"Already Approved",
            "createDate":"2023-06-31",
            "modifiedDate":"2023-06-31"
        },
        {
            "githubId" : "2",
            "userName" : "2",
            "orderId" : "9",
            "item" : 
                {
                    "itemId": 1,
                    "itemName" : "아이스 아메리카노 교환권",
                    "point":6000,
                    "itemDescription":"아이스 아메리카노 교환권으로 교환 가능합니다.",
                    "imgUrl":"https://jpg.com/iceamericano.jpg"
                },
            "targetUser": "",
            "useStatus":"Already Approved",
            "createDate":"2023-06-31",
            "modifiedDate":"2023-06-31"
        },
    ]

    const OrderMenu = [ '사용가능', '사용완료' ]

    const [myOrderList, setMyOrderList] = useState([]);
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isUsedItem, setIsUsedItem] = useState("Pending approval")

    const onClickMenu = (idx) =>{
        setSelectedMenu(idx);
        if(idx){
            setIsUsedItem('Already Approved');
        }else{
            setIsUsedItem('Pending approval');
        }
    }

    const read_MyOrderItem = async() =>{
        try{
            const url = `${process.env.REACT_APP_API_SERVER}/api/orders/me`;
            const response = await axios.get(url,{
                headers:{
                    Authorization: `Bearer ${getCookie('accessToken')}`
                },
                withCredentials:true,
            });
            if(response.status === 200){
                setMyOrderList(response.data.data);
            }else{
                alert('나의 상점 정보를 불러오지 못했습니다.');
            }
        }catch(e){
            alert(e.response.data.message);
            navigate('/');
        }
    };

    useEffect(()=>{
        read_MyOrderItem();
    },[]);

    return(
        <div className="MyShopContainer">
            <Title title={'Mypage'}/>
            <MypageHeader/>
            <div className="MyItemOrderBox">
                <div className="UsedItemButtons">
                    {
                        OrderMenu.map((menu,idx) =>
                            <div 
                                className={selectedMenu === idx ? "SelectedOrderMenu" : "OrderMenu"}
                                onClick={()=>onClickMenu(idx)}
                                key={idx}>{menu}
                            </div>
                        )
                    }
                </div>
                <div className="ItemListBox">
                    {
                        myOrderList?.map(order => 
                            isUsedItem === order.useStatus &&
                            <MyShopItem key={order.orderId} item={order.item}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default MyShop;