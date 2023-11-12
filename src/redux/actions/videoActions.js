import { FETCH_VIDEOS, FETCH_VIDEOS_SUCCESS, FETCH_VIDEOS_FAILURE, FETCH_TRENDING_VIDEOS, FETCH_TRENDING_VIDEOS_SUCCESS, FETCH_TRENDING_VIDEOS_FAILURE } from '../types';
const API_ENDPOINT = 'http://localhost:3001'
const storedVideo = sessionStorage.getItem('selectedVideo');

export const fetchVideos = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_VIDEOS });

    if (storedVideo) {
      const selectedVideo = JSON.parse(storedVideo);
      dispatch({
        type: FETCH_VIDEOS_SUCCESS,
        payload: selectedVideo,
      });
    } else {
      fetch(`${API_ENDPOINT}/Featured`)
        .then((res) => res.json())
        .then((data) =>
          dispatch({
            type: FETCH_VIDEOS_SUCCESS,
            payload: data,
          })
        )
        .catch((error) =>
          dispatch({
            type: FETCH_VIDEOS_FAILURE,
            payload: error,
          })
        );
    }
  };
};

export const fetchTrendingNowVideos = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_TRENDING_VIDEOS });

    fetch(`${API_ENDPOINT}/TendingNow?_sort=Date&_order=desc&_limit=50`)
      .then((res) => res.json())
      .then((data) => {
          dispatch({
            type: FETCH_TRENDING_VIDEOS_SUCCESS,
            payload: data,
          });
      })
      .catch((error) =>
        dispatch({
          type: FETCH_TRENDING_VIDEOS_FAILURE,
          payload: error,
        })
      );
  };
};