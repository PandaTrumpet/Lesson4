import axios from "axios";

const baseUrl = (axios.defaults.baseURL = "https://hn.algolia.com/api/v1");

export const fetchArticlesWithTopic = async (topic) => {
  const response = await axios.get(`${baseUrl}/search?query=${topic}`);
  console.log(response);
  return response.data.hits;
};
