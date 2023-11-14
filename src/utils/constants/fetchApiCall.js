import axios from "axios";

export const fetchApiCall = async (category) => {
  console.log(import.meta.env.VITE_API_KEY);

  const options = {
    method: "GET",
    url: "https://youtube-v311.p.rapidapi.com/search/",
    params: {
      part: "snippet",
      maxResults: "50",
      order: "relevance",
      safeSearch: "moderate",
      type: "video,channel,playlist",
      regionCode: "IN",
      q: category,
    },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "youtube-v311.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};
