import {
  CREATE_TAG,
  GET_ALL_TAGS,
  GET_TAG_BY_ID,
  UPDATE_TAG,
  DELETE_TAG,
} from "../actions/actionTypes";

const initialState = {
  tags: [],
  selectedTags: [],
};
const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TAGS:
      return { ...state, tags: action.payload };

    case GET_TAG_BY_ID:
      return { ...state, selectedTag: action.payload };

    case CREATE_TAG:
      return { ...state, tags: [...state.tags, action.payload] };

    case UPDATE_TAG:
      return {
        ...state,
        tags: state.tags.map((tag) =>
          tag.ID === action.payload.ID ? action.payload : tag
        ),
      };

    case DELETE_TAG:
      return {
        ...state,
        tags: state.tags.filter((tag) => tag.ID !== action.payload),
      };
    default:
      return state;
  }
};

export default tagsReducer;
