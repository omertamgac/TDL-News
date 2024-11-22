import { useEffect, useState } from 'react';
import MyCard from "./Card";
import './NewsComponent.css'; // Yeni CSS dosyasını dahil ediyoruz

const NewsComponent = (prop) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await fetch(
            `https://newsdata.io/api/1/latest?apikey=${import.meta.env.VITE_NEWSIO_API_KEY}&category=${prop.category}&language=en`
          );
          if (!response.ok) throw new Error("Failed to fetch news");
          const data = await response.json();
          setArticles(data.results || []); 
        } catch (error) {
          console.error("Error fetching news:", error);
        }
      };
      fetchNews();
    }, [prop.category]);
  

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
        urlToImage={article.image_url}
        title={article.title}
        description={article.description}
        />
      ))}
    </div>
  );
};

export default NewsComponent;
