import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_URL = "https://api.themoviedb.org/3";

const getListMovieNowPlaying = async (page: number = 1): Promise<any> => {
  try {
    const res = await axios.get(`${API_URL}/movie/now_playing?api_key=${API_KEY}&page=${page}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

const getListMovieUpcoming = async (page: number = 1): Promise<any> => {
  try {
    const res = await axios.get(`${API_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

const getListMoviePopular = async (page: number = 1): Promise<any> => {
  try {
    const res = await axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

const getListMovieTopRated = async (page: number = 1): Promise<any> => {
  try {
    const res = await axios.get(`${API_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

const getMovieDetail = async (id: string | any): Promise<any> => {
  try {
    const res = await axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

const getSimilarMovie = async (id: string | any, page: number = 1): Promise<any> => {
  try {
    const res = await axios.get(`${API_URL}/movie/${id}/similar?api_key=${API_KEY}&page=${page}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

const getMoviesByGenre = async (id: string | any, page: number = 1): Promise<any> => {
  try {
    const res = await axios.get(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${id}&page=${page}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

const getGenres = async () => {
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

const serviceMovieApi = {
  getListMovieNowPlaying,
  getListMovieUpcoming,
  getListMoviePopular,
  getListMovieTopRated,
  getMovieDetail,
  getSimilarMovie,
  getMoviesByGenre,
  getGenres,
};

export default serviceMovieApi;
