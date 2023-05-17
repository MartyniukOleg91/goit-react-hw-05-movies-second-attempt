import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '309df4a19ba58fdd322dab99a0059b3e';

export async function trendingmoviesRequest() {
  try {
    const response = await axios.get(`trending/movie/day?`, {
      params: {
        api_key: KEY,
      },
    });
    return response;
  } catch (error) {
    console.log('error = ', error);
  }
}

export async function moviesQueryRequest(search) {
  try {
    const response = await axios.get(`search/movie`, {
      params: {
        api_key: KEY,
        language: 'en-US',
        query: search,
        include_adult: false,
        page: 1,
      },
    });
    return response;
  } catch (error) {
    console.log('error = ', error);
  }
}

export async function movieInfoRequest(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}`, {
      params: {
        api_key: KEY,
        language: 'en-US',
      },
    });
    return response;
  } catch (error) {
    console.log('error = ', error);
  }
}

export async function castRequest(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}/credits`, {
      params: {
        api_key: KEY,
        language: 'en-US',
      },
    });
    return response;
  } catch (error) {
    console.log('error = ', error);
  }
}

export async function reviewsRequest(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}/reviews`, {
      params: {
        api_key: KEY,
        language: 'en-US',
        page: 1,
      },
    });
    return response;
  } catch (error) {
    console.log('error = ', error);
  }
}