import {
    GET_PROFILE_INFO,
    LOADING,
    CLEAR_PROFILE
} from './../actions/types';

const initialState = {
    profile: null,
    profiles: null,
    loading: false
}


export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null
            };
        case GET_PROFILE_INFO:
            return {
                ...state,
                profile: action.payload,
                    loading: false
            };
        default:
            return state;
    }
}