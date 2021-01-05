import { CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILED } from "./constants";

let initialState = {
  loading: false,
  data: null,
  error: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }

    case CATEGORIES_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }

    case CATEGORIES_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default categoriesReducer;
