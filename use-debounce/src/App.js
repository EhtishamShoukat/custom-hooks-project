import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { useDebounce } from "./components/useDebounce";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const API_KEY = "b6c6d089a3cd496682fe7c57dc2ff4be";
const API_URL = "https://newsapi.org/v2/everything";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleSearch = async () => {
    if (debouncedSearchTerm) {
      console.log(`Searching for ${debouncedSearchTerm}`);
      try {
        const response = await axios.get(API_URL, {
          params: {
            q: debouncedSearchTerm,
            from: "2024-09-22",
            sortBy: "publishedAt",
            apiKey: API_KEY,
          },
        });
        setResults(response.data.articles);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
  };

  useEffect(() => {
    handleSearch();
  }, [debouncedSearchTerm]); 
  return (
    <div className="container" style={{margin:"20px"}}>
      <h1 className="input-group mb-3"> Search</h1>
      <input  className="input-group-text"
        type="text"
        placeholder="Search for news..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {results.length > 0 ? (
          results.map((article, index) => (
            <div key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default App;
