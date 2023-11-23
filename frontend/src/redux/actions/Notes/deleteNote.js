import axios from "axios";
import {API_URL} from "../../../utils/constants";
import { DELETE_NOTE } from "../actionTypes";

const deleteNote = (noteId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${API_URL}/note/${noteId}`);
      dispatch({
        type: DELETE_NOTE,
        payload: noteId,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export default deleteNote;