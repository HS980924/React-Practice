import { useParams } from "react-router-dom";
import Categories from '../component/Categories';
import NewList from '../component/NewsList';

const Newpage = () => {
    const params = useParams();
    const category = params.category || 'all';

    return(
        <div>
            <Categories category={category}/>
            <NewList category={category}/>
        </div>
    );
};

export default Newpage;
