import { useState, useEffect } from 'react';
import axios from 'axios'
import NewsItem from "./NewsItem";
import '../scss/NewsList.scss'

const NewsList = ({category}) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true);
            try{
                const query = (category === 'all' ? " ": category)
                const link = `https://newsapi.org/v2/top-headlines?country=kr&category=${query}&apiKey=`
                const key = process.env.REACT_APP_NEWS_KEY;
                const response = await axios.get(link+key);
                console.log(response.data.articles);
                setArticles(response.data.articles);
            }catch(e){
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    },[category]);

    if(loading){
        return <div>대기 중...</div>;
    }

    if(!articles){
        return null;
    }

    return(
        <div className="NewsList">
            {articles.map(article => (
                <NewsItem key={article.url} article={article}></NewsItem>
            ))}
        </div>
    );
};

export default NewsList;