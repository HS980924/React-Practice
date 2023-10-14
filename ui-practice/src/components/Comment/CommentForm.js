
import { useState } from 'react';
import '../../styles/Comment/CommentForm.scss';

const CommentForm = () =>{

    const [ comment, setComment ] = useState(null);

    const onHandleComment = (e) => {
        setComment(e.target.value);
    }

    return(
        <div className="CommentFormContainer">
            <div className="CommentMyInfo">
                <div className="CommentProfile">형순</div>
                <div className="CommentWriter">HS980924</div>
            </div>
            <div className='CommentInfoBox'>
                <textarea
                    rows={5} 
                    cols={100}
                    maxLength={500}
                    placeholder='자유로운 댓글을 남겨주세요.'
                    onChange={(e)=>onHandleComment(e)}
                    className="CommentContents"/>
                <div className="CommentLengthBox">
                    { comment ? comment?.length : 0 }/500
                </div>
            </div>
            <div className="CommentFooter">
                <div className="CommentWrite">작성하기</div>
            </div>
        </div>
    );
}

export default CommentForm;