
import { timeTrans } from '../../util/time';

import '../../styles/Comment/CommentItem.scss';

const CommentItem = ({commentInfo}) =>{
    return(
        <div className="CommentItemBox">
            <div className="CommentItemHeader">
                <div className='CommentItemProfile'>{commentInfo?.profile}</div>
                <div className='CommentItemWriter'>{commentInfo?.writer}</div>
            </div>
            <div className="CommentItemContents">{commentInfo?.comment}</div>
            <div className="CommentTime">{timeTrans(commentInfo?.createdDate)}</div>
        </div>
    );
}

export default CommentItem;