
import { AiOutlineEye,AiOutlineComment } from "react-icons/ai";
import '../../styles/Notice/NoticeItem.scss';
import { useNavigate } from "react-router-dom";

const NoticeItem = ({noticeItem}) =>{
    const navigate = useNavigate();

    const moveDetailPage = (id) =>{
        navigate(`/notice/detail/${id}`);
    }

    return(
        <div className="NoticeItemContainer" onClick={()=>moveDetailPage(noticeItem?.id)}>
            <div className='WriterBox'>
                <div className='Profile'>{(noticeItem?.writer).substr(1)}</div>
                <div className='Writer'>{noticeItem?.writer}</div>
            </div>
            <div className='Title'>{noticeItem?.title}</div>
            <div className='DetailBox'>
                <AiOutlineEye className="EyeIcon"/>
                <div className='WatchCnt'>2000</div>
                <AiOutlineComment/>
                <div className="Comment">122</div>
                <div className='Time'>3개월전</div>
            </div>
        </div>
    );
}

export default NoticeItem;