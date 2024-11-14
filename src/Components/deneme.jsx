import  { useEffect, useState } from 'react';

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

  return (
    <div>
      <h1>Top News</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsComponent;