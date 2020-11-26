import {
  COURSE_DETAIL_REQUEST,
  COURSE_DETAIL_SUCESS,
  COURSE_DETAIL_FAILED,
} from "./constants";

let initialState = {
  loading: false,
  data: null,
  error: null,
};

const courseDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case COURSE_DETAIL_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }
    case COURSE_DETAIL_SUCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }
    case COURSE_DETAIL_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default courseDetailReducer;
