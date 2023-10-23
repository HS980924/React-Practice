
import { timeTrans } from '../../util/time';

import '../../styles/Comment/CommentItem.scss';

const CommentItem = ({commentInfo}) =>{
    return(
        <div className="CommentItemBox">
            <div className="CommentItemHeader">
                <div className='CommentItemProfile'>{commentInfo?.profile}</div>
                <div className='CommentItemWriter'>{commentInfo?.username}</div>
            </div>
            <div className="CommentItemContents">{commentInfo?.content}</div>
            <div className="CommentTime">{timeTrans(commentInfo?.createdDate)}</div>
        </div>
    );
}

export default CommentItem;