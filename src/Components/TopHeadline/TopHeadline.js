import React, { useEffect, useState } from 'react';
import News from '../News/News';


const TopHeadline = () => {
    const [news,setNews]=useState([]);
    useEffect(()=>{
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=819940a0ad13485c90a38a9c180ae1ad')
        .then(response=>response.json())
        .then(data=>setNews(data.articles))
    },[])
    return (
        <div>
            <h2>Top Headlines : {news.length}</h2>
            {
                news.map(article=> <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;