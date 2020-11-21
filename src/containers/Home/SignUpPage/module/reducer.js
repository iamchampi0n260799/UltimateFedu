import { SIGNUP_REQUEST , SIGNUP_SUCCESS , SIGNUP_FAILED} from './constant.js'

let initialState = {
    loading: false,
    data: null,
    error: null
}
const signupReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGNUP_REQUEST: {
        state.loading = true;
        state.data = null;
        state.error = null;
        return { ...state };
      }
      case SIGNUP_SUCCESS: {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
        
        return { ...state };
      }
      case SIGNUP_FAILED: {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
        return { ...state };
      }
      default:
        return { ...state };
    }
  };
  export default signupReducer;