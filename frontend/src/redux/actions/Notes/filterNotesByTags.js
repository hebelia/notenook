import axios from "axios";
import { API_URL } from "../../../utils/constants";
import { FILTER_NOTES_BY_TAGS } from "../actionTypes";

const filterNotesByTags = (tags) => {
  console.log(tags);
  return async (dispatch) => {
    try {
      let data;
      if (tags.length > 0) {
        const response = await axios.get(`${API_URL}/note/filter?tags=${tags.join(",")}`);
        data = response.data;
      } else {
        data = []; 
      }
      dispatch({
        type: FILTER_NOTES_BY_TAGS,
        payload: data,
        selectedFilterTags:tags,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export default filterNotesByTags;
