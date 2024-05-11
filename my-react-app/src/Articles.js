import React, { useState, useEffect } from 'react';

const Articles = ({ sort, time, number }) => {  
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const apiKey = '6IPGoI88rQjGxo4NvU9hAOrbYjMxoUaW';
            const url = `https://api.nytimes.com/svc/mostpopular/v2/${sort}/${time}.json?api-key=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setArticles(data.results.slice(0, number));
            } catch (error) {
                console.error('Failed to fetch articles:', error);
            }
        };

        fetchArticles();
    }, [sort, time, number]);

    return (
        <div className="articles-wrapper">
            <div className="articles-container">
                {articles.map((article, index) => (
                    <div key={index} className="article">
                        <div className="article-header">
                            <h2 className="article-title">{article.title}</h2>
                            <p className="article-date">{article.published_date}</p>
                        </div>
                        <div className="article-content">
                            <img src={article.media && article.media.length > 0 ? article.media[0]['media-metadata'][2].url : 'placeholder.jpg'} alt={article.title} />
                            <p>{article.abstract}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Articles;
