import axios from "axios";
import {API_URL} from "../../../utils/constants";
import { ARCHIVE_NOTE } from "../actionTypes";

// const endpoint = `${API_URL}/note`;

const archiveNote = (noteId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${API_URL}/note/${noteId}/archive`);
      dispatch({
        type: ARCHIVE_NOTE,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export default archiveNote;
