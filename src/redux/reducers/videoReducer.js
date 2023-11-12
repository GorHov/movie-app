import { FETCH_VIDEOS, FETCH_VIDEOS_SUCCESS, FETCH_VIDEOS_FAILURE, FETCH_TRENDING_VIDEOS_SUCCESS, FETCH_TRENDING_VIDEOS_FAILURE, FETCH_TRENDING_VIDEOS } from '../types';

const initialState = {
  videos: [],
  trendingVideos: [],
  loading: false,
  error: null,
};

function videoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_VIDEOS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: action.payload,
      };
    case FETCH_VIDEOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case FETCH_TRENDING_VIDEOS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_TRENDING_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        trendingVideos: action.payload,
      };
    case FETCH_TRENDING_VIDEOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default videoReducer;
