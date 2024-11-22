import { useEffect, useState } from 'react';
import MyCard from "./Card";

const SportTen = () => {
    const [articles, setArticles] = useState([]);
  
    useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await fetch(
            `https://newsdata.io/api/1/latest?apikey=${import.meta.env.VITE_NEWSIO_API_KEY}&q=sport&language=en`
          );
          if (!response.ok) throw new Error("Failed to fetch news");
          const data = await response.json();
          setArticles((data.results || []).slice(0, 4));
        } catch (error) {
          console.error("Error fetching news:", error);
        }
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
        width={"70%"}
        src={prop.urlToImage}
        name={prop.title}
        text={truncateText(prop.description, 164)} 
      />
    );
  }

  return (
    
    <div className="news-container">
      
      <h1 style={{ 
    fontFamily: "'Roboto Slab', serif", 
    fontSize: '2rem', 
    fontWeight: 'bold', 
    color:'white',
    marginTop:"40px"
  }}>Trend Sport</h1>

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

export default SportTen;
