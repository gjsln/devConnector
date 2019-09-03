import {
    GET_PROFILE_INFO,
    LOADING,
    CLEAR_PROFILE
} from './types';
import axios from 'axios';

export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());

    axios.get('/api/profile')
        .then(res =>
            dispatch({
                type: GET_PROFILE_INFO,
                payload: res.data
            })
        ).catch(err => dispatch({
            type: GET_PROFILE_INFO,
            payload: {}
        }));
}

export const setProfileLoading = () => {
    return {
        type: LOADING
    }
}

export const clearCurrentProfile = () => {
    return {
        type: CLEAR_PROFILE
    }
}