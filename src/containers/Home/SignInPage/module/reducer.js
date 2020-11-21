import { SIGNIN_REQUEST , SIGNIN_SUCCESS , SIGNIN_FAILED} from './constant.js'

let initialState = {
    loading: false,
    data: null,
    error: null
}
const signinReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGNIN_REQUEST: {
        state.loading = true;
        state.data = null;
        state.error = null;
        return { ...state };
      }
      case SIGNIN_SUCCESS: {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
        
        return { ...state };
      }
      case SIGNIN_FAILED: {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
        return { ...state };
      }
      default:
        return { ...state };
    }
  };
  export default signinReducer;