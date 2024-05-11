import React, { useState, useEffect } from 'react';

const Articles = ({ sort, time, totalArticles }) => {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 6;

    useEffect(() => {
        const fetchArticles = async () => {
            const apiKey = '6IPGoI88rQjGxo4NvU9hAOrbYjMxoUaW';
            const url = `https://api.nytimes.com/svc/mostpopular/v2/${sort}/${time}.json?api-key=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setArticles(data.results.slice(0, totalArticles));
            } catch (error) {
                console.error('Failed to fetch articles:', error);
            }
        };

        fetchArticles();
    }, [sort, time, totalArticles]);

    useEffect(() => {
        setCurrentPage(1);
    }, [totalArticles]);

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    const totalPages = Math.ceil(totalArticles / articlesPerPage);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="articles-wrapper">
            <div className="articles-container">
                {currentArticles.map((article, index) => (
                    <div key={index} className="article">
                        <div className="article-header">
                            <h2 className="article-title">{`${indexOfFirstArticle + index + 1}. ${article.title}`}</h2>
                            <p className="article-date">{article.published_date}</p>
                        </div>
                        <div className="article-content">
                            <img src={article.media && article.media.length > 0 ? article.media[0]['media-metadata'][2].url : 'placeholder.jpg'} alt={article.title} />
                            <p>{article.abstract}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, idx) => (
                    <button key={idx + 1} onClick={() => paginate(idx + 1)} disabled={currentPage === idx + 1}>
                        {idx + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Articles;
