import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextEditor from '../components/TextEditor';
import RegistButton from '../components/RegistButton';

import '../styles/Til/TilCreate.scss';

const TilCreate = () =>{

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
        <div className="TilCreateCotainer">
            <h1 className='h1'>TIL 작성</h1>
            <div>
                <p className='p'>제목</p>
                <input
                    placeholder='제목을 입력해주세요.'
                    className='TilCreateTitle'
                    onChange={onHandleTitle}/>
            </div>
            <div>
                <p  className='p'>태그</p>
                <input 
                    placeholder='태그를 입력해주세요. (예: #java, #react)'
                    className='TilCreateTag'
                    onChange={onHandleTag}/>
            </div>
            <div className='TilContentBox'>
                <p className='p'>본문</p>
                <TextEditor value={content} setValue={setContent}/>
            </div>
            <RegistButton 
                onHandleCancel={onHandleCancel}
                onHandleSave={onHandleSave}/>
        </div>
    );
}

export default TilCreate;