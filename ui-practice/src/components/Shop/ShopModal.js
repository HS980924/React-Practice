
import { useEffect } from 'react';
import '../../styles/Shop/ShopModal.scss';

const ShopModal = ({itemInfo ,closeModal, myPoint, post_BuyItem}) =>{

    // useEffect(()=>{
    // },[]);

    return(
        <div className="ShopModal">
            <div className="ItemInfoBox">
                <div className="ItemInfoTitle">아이템 구매</div>
                <div className="ItemInfoContent">
                    <div className='ItemInfoImage'>
                        <img src={itemInfo?.imgUrl} className='ItemImage' alt='ItemImg'/>
                        <div className='ItemName'>{itemInfo?.itemName}</div>
                        <div className='ItemPoint'>{itemInfo?.point}</div>
                    </div>
                    <div className='ItemInfoDetail'>
                        <div className='ItemContentInfo'>
                            <li className='Title'>아이템 설명</li>
                            <div className='Content'>{itemInfo?.itemDescription}</div>
                        </div>
                        <div className='ItemPointInfo'>
                            <li className='Title'>아이템 정보</li>
                            <li className='Content'>{itemInfo?.itemName} : {itemInfo?.point} pt</li>
                            <li className='Content'>현재 보유 포인트 : {myPoint} pt</li>
                            <li className='Content'>차감 이후 포인트 : {myPoint-itemInfo.point} pt</li>
                        </div>
                    </div>
                </div>
                <div className='ShopButtonBox'>
                    <div className='ShopCancelButton' onClick={()=>closeModal()}>취소</div>
                    <div className='ShopSaveButton' onClick={()=>post_BuyItem(itemInfo?.itemId)}>구매</div>
                </div>
            </div>
        </div>
    );
}

export default ShopModal;
