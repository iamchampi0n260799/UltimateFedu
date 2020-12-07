import { COURSES_CANCEL_REQUEST , COURSES_CANCEL_SUCCESS ,COURSES_CANCEL_FAILED } from "./constants"

  
  let initialState = {
    loading: false,
    data: null,
    error: null,
  };
  
  const cancelCourseReducer = (state = initialState, action) => {
    switch (action.type) {
      case COURSES_CANCEL_REQUEST: {
        state.loading = true;
        state.data = null;
        state.error = null;
        return { ...state };
      }
      case COURSES_CANCEL_SUCCESS: {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
        return { ...state };
      }
      case COURSES_CANCEL_FAILED: {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
        return { ...state };
      }
      default:
        return { ...state };
    }
  };
  export default cancelCourseReducer;
  