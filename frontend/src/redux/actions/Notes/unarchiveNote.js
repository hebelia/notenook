import axios from "axios";
import {API_URL} from "../../../utils/constants";
import { UNARCHIVE_NOTE } from "../actionTypes";

// const endpoint = `${API_URL}/note`;

const unarchiveNote = (noteId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${API_URL}/note/${noteId}/unarchive`);
      dispatch({
        type: UNARCHIVE_NOTE,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export default unarchiveNote;