import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import axios from "axios";

import '../../styles/Til/TilItem.scss';


const TilItem = ({tilInfo, onRemove}) =>{

    const navigate = useNavigate();

    const [ isClosed, setIsClosed ] = useState(true);
    const [ isOverContent, setIsOverContent ] = useState(true);

    const onDeleteTIL = async (id) => {
        // 모달창 띄우기 확인 누를 시 데이터 통신
        onRemove(id);
    }
    
    const onEditTIL = (id) => {
        navigate(`/til/edit/${id}`);
    }

    const onChangeIsClosed = () =>{
        setIsClosed(!isClosed);
    }

    const checkOverContents = () =>{
        const contentLine = tilInfo?.content.split('\n');
        const length = contentLine.length;
        if (length >= 10){
            setIsOverContent(true);
        }else{
            setIsOverContent(false);
        }
    }

    useEffect(()=>{
        checkOverContents();
    },[]);

    return(
        <div className={isClosed ? "TilItemBox": "TilItemBox2"}>
            <div className="TilHeaderBox">
                <img src={tilInfo?.profileImgUrl} alt="프로필" className='Profile'/>
                <div className="TilDetailTile">{tilInfo?.title}</div>
                <div className="EditButton" onClick={()=>onEditTIL(tilInfo?.tilId)}>
                    <AiTwotoneEdit/>
                </div>
                <div className="DeleteButton" onClick={()=>onDeleteTIL(tilInfo?.tilId)}>
                    <AiFillDelete/>
                </div>
            </div>
            <div className={isClosed ? "TilContentBox" : "TilContentBox2"}>
                {/* <Viewer
                    initialEditType="markdown"
                    initialValue={tilInfo?.content}
                /> */}
                {
                    tilInfo?.content
                }
            </div>
            {
                isOverContent ? 
                <div className="TilMoreSeeBox" onClick={()=>onChangeIsClosed()}>
                    {isClosed ? "더보기" : "접기"}
                </div> 
                : <></>
            }
        </div>
    );
}

export default TilItem;