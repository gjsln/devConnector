import { GET_PROFILE_INFO, LOADING, CLEAR_PROFILE, GET_ERRORS } from './types';
import axios from 'axios';

export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());

  axios
    .get('/api/profile')
    .then(res =>
      dispatch({
        type: GET_PROFILE_INFO,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE_INFO,
        payload: {}
      })
    );
};

export const setProfileLoading = () => {
  return {
    type: LOADING
  };
};

export const clearCurrentProfile = () => {
  return {
    type: CLEAR_PROFILE
  };
};

export const createProfile = (profileData, history) => dispatch => {
  axios
    .post('/api/profile', profileData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
