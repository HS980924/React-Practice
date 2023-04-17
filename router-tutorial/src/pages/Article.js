import { useParams } from 'react-router-dom';

const Aricle = () =>{
    const { id } = useParams();

    return(
        <div>
            <h2>게시물 {id}</h2>
        </div>
    );
};

export default Aricle;