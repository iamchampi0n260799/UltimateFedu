import { COURSES_REQUEST, COURSES_SUCCESS, COURSES_FAILED, COURSES_SEARCH } from "./constant";

let initialState = {
  loading: false,
  data: null,
  error: null,
  searchTerm: "",
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case COURSES_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }

    case COURSES_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }

    case COURSES_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    case COURSES_SEARCH: {
      state.searchTerm = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default courseReducer;
