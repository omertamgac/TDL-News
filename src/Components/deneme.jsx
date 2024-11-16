import  { useEffect, useState } from 'react';
import MyCard from "./Card"

const NewsComponent = () => {
  const [articles, setArticles] = useState([]);
//deneme
  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
      );
      const data = await response.json();
      setArticles(data.articles);
    };
    fetchNews();
  }, []);

  
  function CardMaker(prop)
  {
    return(<MyCard
      width={"60%"}
      src={prop.urlToImage}
      name={prop.title}
      text={prop.description}
    
    />)
  }

  return (
    <>
      {articles.map((article, index) => (
        <CardMaker
          key={index}
          urlToImage={article.urlToImage}
          title={article.title}
          description={article.description}
        />
      ))}
    </>
  );
  
};

export default NewsComponent;