import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';

import TextEditor from '../components/TextEditor';
import RegistButton from '../components/RegistButton';
import { getCookie } from '../util/auth';

import axios from "axios";

import '../styles/Notice/NoticeCreate.scss';
import Title from '../components/Title/Title';

const NoticeCreate = () =>{

    const navigate = useNavigate();

    const [ title, setTitle ] = useState(null);
    const [ content, setContent ] = useState(null);
    const [ fileNameList, setFileNameList ] = useState([]);

    const onHandleTitle = (e) => {
        setTitle(e.target.value);
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

    const post_noticeInfo = async() => {
        if (title && content){
            try{
                const postData = {
                    title:title,
                    content:content,
                    fileUrl: null,
                }
                const url = `${process.env.REACT_APP_API_SERVER}/api/posts`;
                const response = await axios.post(url,postData,{
                    headers: {
                        Authorization: `Bearer ${getCookie('accessToken')}`
                    }
                    ,withCredentials:true
                });
                if (response.status === 200){
                    alert('등록되었습니다.');
                    navigate('/notice');
                }else{
                    alert('등록 실패하셨습니다.');
                    navigate('/notice');
                }
            }catch(e){
                alert(e);
                navigate('/notice');
            }
        }else{
            alert('제목 혹은 내용을 채워주세요');
        }
        
    };

    return(
        <div className="NoticeCreateCotainer">
            {/* <Title title={'공지사항 작성'}/> */}
            <h1 className='h1'>공지사항 작성</h1>
            <div>
                <p className='p'>제목</p>
                <input
                    placeholder='제목을 입력해주세요.'
                    className='NoticeCreateTitle'
                    onChange={onHandleTitle}/>
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
                    <div className='FileUpload'>파일 업로드</div>
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
            <RegistButton
                onHandleCancel={onHandleCancel}
                onHandleSave={post_noticeInfo}/>
        </div>
    );
}

export default NoticeCreate