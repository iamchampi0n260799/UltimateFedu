import { COURSES_RESIGN_REQUEST , COURSES_RESIGN_SUCCESS ,COURSES_RESIGN_FAILED } from "./constants"

  
  let initialState = {
    loading: false,
    data: null,
    error: null,
  };
  
  const resignCourseReducer = (state = initialState, action) => {
    switch (action.type) {
      case COURSES_RESIGN_REQUEST: {
        state.loading = true;
        state.data = null;
        state.error = null;
        return { ...state };
      }
      case COURSES_RESIGN_SUCCESS: {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
        return { ...state };
      }
      case COURSES_RESIGN_FAILED: {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
        return { ...state };
      }
      default:
        return { ...state };
    }
  };
  export default resignCourseReducer;
  