
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import '../styles/Notice/NoticeCreate.scss';
import TextEditor from '../components/TextEditor';

const NoticeCreate = () =>{

    const navigate = useNavigate();

    const [ title, setTitle ] = useState(null);
    const [ tag, setTag ] = useState(null);
    const [ content, setContent ] = useState(null);
    const [ fileNameList, setFileNameList ] = useState([]);

    const onHandleTitle = (e) => {
        setTitle(e.target.value);
    }

    const onHandleTag = (e) => {
        setTag(e.target.value);
    }

    const onHandleContent = (e) => {
        setContent(e.target.value);
    }

    const onHandleAddFile = (e) => {
        const fileLists = e.target.files;
        let fileNameLists = [...fileNameList];

        for(let i=0; i < fileLists.length; i++){
            fileNameLists.push(fileLists[i].name);
        }

        if(fileNameLists.length > 5){
            fileNameLists = fileNameLists.slice(0,5);
        }

        setFileNameList(fileNameLists);
    }

    const onHandleDeleteFile = (id) => {
        setFileNameList(fileNameList.filter((_, index) => index !== id));
    };

    const onHandleCancel = () => {
        navigate('/notice')
    }

    const onHandleSave = () => {
        console.log('제목',title);
        console.log('내용',content);
    }

    return(
        <div className="NoticeCreateCotainer">
            <h1 className='h1'>공지사항 작성</h1>
            <div>
                <p className='p'>제목</p>
                <input
                    placeholder='제목을 입력해주세요.'
                    className='NoticeCreateTitle'
                    onChange={onHandleTitle}/>
            </div>
            <div>
                <p  className='p'>태그</p>
                <input 
                    placeholder='태그를 입력해주세요. (예: #java, #react)'
                    className='NoticeCreateTag'
                    onChange={onHandleTag}/>
            </div>
            <div className='NoticeContentBox'>
                <p className='p'>본문</p>
                <TextEditor value={content} setValue={setContent}/>
            </div>
            <div className='FileUploadBox'>
            <input 
                type="file" 
                id="input-file" 
                multiple 
                className="FileUpload" 
                style={{display:"none"}}
                onChange={onHandleAddFile}
                />
                <label htmlFor="input-file" className='FileUpload'>
                    <div className='FileUpload' >파일 업로드</div>
                </label>
                <div className='FileItemBox'>
                {
                    fileNameList?.map((file, idx) => (
                        <div key={idx} className='FileItem'>
                            <div className='FileName'>{file}</div>
                            <MdOutlineCancel className='FileDelete' onClick={() => onHandleDeleteFile(idx)}/>
                        </div>
                    ))
                }
                </div>
            </div>
            <div className="NoticeCreateButtons">
                <div className="NoticeCancel" onClick={()=>onHandleCancel()}>취소</div>
                <div className="NoticeSave"  onClick={()=>onHandleSave()}>등록</div>
            </div>
        </div>
    );
}

export default NoticeCreate