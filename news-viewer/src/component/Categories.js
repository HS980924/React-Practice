import "../scss/Categories.scss"
import { useParams, NavLink } from "react-router-dom";
const categories = [
    {
        name: 'all',
        text: '전체보기',
    },
    {
        name: 'business',
        text: '비즈니스',
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트',
    },{
        name: 'health',
        text: '건강',
    },
    {
        name: 'science',
        text: '과학',
    },{
        name: 'sports',
        text: '스포츠',
    }
    ,{
        name: 'technology',
        text: '기술',
    }
]

const Category = () => {
    const params = useParams();
    let category = params.category;
    return(
        <div className="Categories">
            {categories.map(c => (
                    <NavLink 
                        to={c.name === 'all' ? '/' : `/${c.name}`}
                        className={(c.name === (category || 'all')) ? "SelectedCatergory" : "Category"} 
                        key={c.name}
                    >{c.text}</NavLink>
            ))}
        </div>
    );
};

export default Category;