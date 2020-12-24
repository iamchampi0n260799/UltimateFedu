import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILED } from "./constant";

let initialState = {
    loading: false,
    data: null,
    err: null,
};

const usersListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST: {
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        }
        case GET_USERS_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return { ...state };
        }
        case GET_USERS_FAILED: {
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return { ...state };
        }
        default:
            return { ...state };
    }
};

export default usersListReducer;