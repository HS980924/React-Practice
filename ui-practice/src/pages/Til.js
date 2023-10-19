import { useEffect, useState, useRef } from 'react';
import { AiOutlineSearch } from "react-icons/ai";

import CreateButton from '../components/CreateButton';
import TilItem from '../components/Til/TilItem';

import '../styles/Til/Til.scss';
import Title from '../components/Title/Title';

const defaultOption = {
    root: null,
    threshold: 0.5,
    rootMargin: '0px'
};

const DummyData = [
    {
        "tilId": 2,
        "userId": 2,
        "username": "Choi HyungSoon",
        "userImg": "test.com/12",
        "tag": "test",
        "title": "2023-10-15 TIL",
        "content": "# 테스트용 TIL 내용 제목\n- 이것 또한 테스트용 내용\n- 이건 뭔지 모르겠네\n- 흠흠흠",
        "createdDate": "2023-10-15T09:27:20.264576",
        "modifiedDate": null
    },
    {
        "tilId": 3,
        "userId": 2,
        "username": "Choi HyungSoon",
        "userImg": "test.com/12",
        "tag": "test",
        "title": "2023-10-15 TIL",
        "content": "## 2번째 TIL 내용 수정\n- 이것 또한 테스트 내용",
        "createdDate": "2023-10-15T09:46:21.279251",
        "modifiedDate": null
    },
    {
        "tilId": 4,
        "userId": 2,
        "username": "Choi HyungSoon",
        "userImg": "test.com/12",
        "tag": "test",
        "title": "2023-10-15 TIL",
        "content": "# Awesome Editor!\n\n## Create Instance\n\nYou can create an instance with the following code and use `getHtml()` and `getMarkdown()` of the [Editor](https://github.com/nhn/tui.editor).\n\n```js\nconst editor = new Editor(options);\n```",
        "createdDate": "2023-10-15T09:47:01.685912",
        "modifiedDate": null
    },
    {
        "tilId": 5,
        "userId": 2,
        "username": "Choi HyungSoon",
        "userImg": "test.com/12",
        "tag": "test",
        "title": "2023-10-15 TIL",
        "content": "# TIL 및 공지사항 UI 변경 예정\n- okky와 요즘 IT, 커리어리 UI 참고하여 사용자에게 보다 더 편리하게 서비스 제공할 예정",
        "createdDate": "2023-10-15T10:25:43.467468",
        "modifiedDate": null
    },
    {
        "tilId": 6,
        "userId": 2,
        "username": "Choi HyungSoon",
        "userImg": "test.com/12",
        "tag": "test",
        "title": "2023-10-15 TIL",
        "content": "테스트용 테스트 테스트용 테스트",
        "createdDate": "2023-10-15T10:35:36.380016",
        "modifiedDate": null
    }
]

const Til = () => {

    const [ isLoaded, setIsLoaded ] = useState(true);
    const [ target, setTarget ] = useState(null);
    const [ pageNumber, setPageNumber ] = useState(1);
    const [ totalPageNum, setTotalPageNum ] = useState(null);
    const [ apiTilDataList, setApiTilDataList ] = useState(DummyData);
    // const [ apiTilDataList, setApiTilDataList ] = useState([]);

    const onRemove = async(id) => {
        // try{
        //     // 모달창 띄우고
        //     const url = `${process.env.REACT_APP_API_SERVER}/api/tils/${id}`;
        //     const response = await axios.delete(url,{
        //         headers:{
        //             Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        //         },
        //         withCredentials:true
        //     });
        //     if(response.status === 200){
        //         setApiTilDataList(apiTilDataList => apiTilDataList.filter(til => til.tilId !== id));
        //     }else{
        //         // 에러 모달창 띄위기
        //     }
        // }catch(e){
        //     navigate('/error');
        //     console.log(e);
        // }
    }

    const onIntersect = async ([ entry ], observer) => {
        if (entry.isIntersecting && !isLoaded) {
            observer.unobserve(entry.target);
            // await read_tilDataAPi();
            observer.observe(entry.target);
        }
    };

    useEffect(() => {
        // read_tilDataAPi();
        let observer; // (1)observer 변수를 선언해주고
        if (target) { // (2) 관찰대상이 존재하는지 체크한다.
            observer = new IntersectionObserver(onIntersect , { 
                ...defaultOption
            }); // (3) 관찰대상이 존재한다면 관찰자를 생성한다.
            observer.observe(target); // (4) 관찰자에게 타겟을 지정한다.
        }
        return () => observer && observer.disconnect(); // 의존성에 포함된 값이 바뀔때 관찰을 중지한다.
    }, [target]);

    return(
        <div className="TilContainer">
            <Title title='TIL' subTitle='Today I Learned'/>
            <CreateButton link={'/til/create'}/>
            <div className="SearchBox">
                <div className="SearchBar">
                    <AiOutlineSearch className="SearchIcon"/>
                    <input className="SearchInput"/>
                </div>
            </div>
            <div className="TilListBox">
                    {
                        apiTilDataList?.map(til =>
                            <TilItem key={til.tilId} tilInfo={til} onRemove={onRemove}/>
                        )
                    }
                    {
                        totalPageNum > pageNumber ? 
                        <div ref={setTarget}>
                            {isLoaded && <p>Loading...</p>}
                        </div>
                        : <></>
                    }
                </div>
        </div>
    )
}

export default Til;