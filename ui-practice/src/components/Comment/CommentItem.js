
import { timeTrans } from '../../util/time';

import '../../styles/Comment/CommentItem.scss';

const CommentItem = ({commentInfo}) =>{
    return(
        <div className="CommentItemBox">
            <div className="CommentItemHeader">
                <img src={commentInfo?.user?.writerProfileImg} className='CommentItemProfile' alt="프로필"/>
                <div className='CommentItemWriter'>{commentInfo?.user?.writerName}</div>
            </div>
            <div className="CommentItemContents">{commentInfo?.content}</div>
            <div className="CommentTime">{timeTrans(commentInfo?.createdDate)}</div>
        </div>
    );
}

export default CommentItem;