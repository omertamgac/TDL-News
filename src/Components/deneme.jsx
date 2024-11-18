import { useEffect, useState } from 'react';
import MyCard from "./Card";
import './NewsComponent.css'; // Yeni CSS dosyasını dahil ediyoruz

const NewsComponent = () => {
  const [articles, setArticles] = useState([]);

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

  // Description uzunluğunu kontrol ederek kesiyoruz
  function truncateText(text, maxLength) {
    if (!text) return ""; // Eğer description yoksa boş döner
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  }

  function CardMaker(prop) {
    return (
      <MyCard
        width={"35%"}
        src={prop.urlToImage}
        name={prop.title}
        text={truncateText(prop.description, 164)} // 164 karakter sınırı
      />
    );
  }

  return (
    <div className="news-container">
      {articles.map((article, index) => (
        <CardMaker
          key={index}
          urlToImage={article.urlToImage}
          title={article.title}
          description={article.description}
        />
      ))}
    </div>
  );
};

export default NewsComponent;
