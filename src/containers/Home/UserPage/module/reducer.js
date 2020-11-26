import { EDIT_REQUEST , EDIT_SUCCESS , EDIT_FAILED} from './constant.js'

let initialState = {
    loading: false,
    data: null,
    error: null
}
const editUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case EDIT_REQUEST: {
        state.loading = true;
        state.data = null;
        state.error = null;
        return { ...state };
      }
      case EDIT_SUCCESS: {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
        
        return { ...state };
      }
      case EDIT_FAILED: {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
        return { ...state };
      }
      default:
        return { ...state };
    }
  };
  export default editUserReducer;