// import { useState } from "react";

// import "./App.css";
// import { useEffect } from "react";
// import axios from "axios";
// export default function App() {
//   useEffect(() => {
//     async function fetchArtickles() {
//       const responcse = await axios.get(
//         "<https://hn.algolia.com/api/v1/search?query=react>"
//       );
//       console.log(responcse);
//     }
//     fetchArtickles();
//   }, []);
//   return (
//     <>
//       <h1>Latest artickle</h1>
//     </>
//   );
// }

// ==========================================================Обробка даних запиту=========================================

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   useEffect(() => {
//     async function fetchArticles() {
//       const response = await axios.get(
//         "<https://hn.algolia.com/api/v1/search?query=react>"
//       );
//       setArticles(response.data.hits);
//     }
//     fetchArticles();
//   }, []);

//   return (
//     <>
//       <h1>Hello</h1>
//     </>
//   );
// };

// ==============================================Відображення даних========================================
// import ArticleList from "./ArticleList/ArticleList";
// import { useEffect, useState } from "react";
// import axios from "axios";
// const App = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     async function fetchArticles() {
//       const response = await axios.get(
//         "https://hn.algolia.com/api/v1/search?query=react"
//       );
//       // setArticles(response.data.hits);
//       console.log(response);
//     }
//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

// const App = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     async function fetchArticles() {
//       const response = await axios.get(
//         "<https://hn.algolia.com/api/v1/search?query=react>"
//       );
//       setArticles(response.data.hits);
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

// const ArticleList = ({ items }) => (
//   <ul>
//     {items.map(({ objectID, url, title }) => (
//       <li key={objectID}>
//         <a href={url} target="_blank" rel="noreferrer noopener">
//           {title}
//         </a>
//       </li>
//     ))}
//   </ul>
// );

// ==================================================Індикатор завантаження====================================

// import ArticleList from "./ArticleList/ArticleList";
// import { CirclesWithBar } from "react-loader-spinner";
// <CirclesWithBar
//   height="100"
//   width="100"
//   color="#4fa94d"
//   outerCircleColor="#4fa94d"
//   innerCircleColor="#4fa94d"
//   barColor="#4fa94d"
//   ariaLabel="circles-with-bar-loading"
//   wrapperStyle={{}}
//   wrapperClass=""
//   visible={true}
// />;
// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     async function fetchArticles() {
//       try {
//         // 1. Встановлюємо індикатор в true перед запитом
//         setLoading(true);
//         const response = await axios.get(
//           "https://hn.algolia.com/api/v1/search?query=react"
//         );
//         setArticles(response.data.hits);
//       } catch (error) {
//         // Тут будемо обробляти помилку
//       } finally {
//         // 2. Встановлюємо індикатор в false після запиту
//         setLoading(false);
//       }
//     }

//     fetchArticles();
//   }, []);
//   return (
//     <div>
//       <h1>Latest articles</h1>
//       {loading && <CirclesWithBar />}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

// =============================================================Обробка помилок====================================
// import ArticleList from "./ArticleList/ArticleList";
// import { useEffect, useState } from "react";
// import axios from "axios";
// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   async function fetchArticles() {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         https://hn".algolia.com/api/v1/search?query=react"
//       );
//       setArticles(response.data.hits);
//     } catch (error) {
//       // Встановлюємо стан error в true
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div>
//       <h1>Latest articles</h1>
//       {loading && <p style={{ fontSize: 20 }}>Loading data, please wait...</p>}
//       {error && (
//         <p>Whoops, something went wrong! Please try reloading this page!</p>
//       )}
//       {articles.length > 0 && <ArticleList items={articles} />}

//       <button onClick={fetchArticles}>Click</button>
//     </div>
//   );
// };

// import { Audio } from "react-loader-spinner";
// <Audio
//   height="80"
//   width="80"
//   radius="9"
//   color="green"
//   ariaLabel="three-dots-loading"
//   wrapperStyle
//   wrapperClass
// />;
// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   async function fetchArticles() {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         "https://hn.algolia.com/api/v1/search?query=react"
//       );
//       setArticles(response.data.hits);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <>
//       <h1>Artickles</h1>
//       {articles.length > 0 && <ArticleList items={articles} />}
//       {loading && <Audio />}
//       {error && <p>You have a problem!</p>}
//       <button onClick={fetchArticles}>Click</button>
//     </>
//   );
// };

// =================================================Поділ відповідальності============================
import ArticleList from "./ArticleList/ArticleList";
import { useEffect, useState } from "react";
import axios from "axios";
import { fetchArticlesWithTopic } from "./articles-api";
// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     async function fetchArticles() {
//       try {
//         setLoading(true);
//         // 2. Використовуємо HTTP-функцію
//         const data = await fetchArticlesWithTopic("react");
//         setArticles(data);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>
//       {loading && <p>Loading data, please wait...</p>}
//       {error && (
//         <p>Whoops, something went wrong! Please try reloading this page!</p>
//       )}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

// ============================================Пошук через форму============================================
import SearchForm from "./SearchForm/SearchForm";
// import { SearchForm } from "./SearchForm";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};
export default App;
