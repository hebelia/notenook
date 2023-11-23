import axios from "axios";
import {API_URL} from "../../../utils/constants";
import { GET_NOTE_BY_ID } from "../actionTypes";

// const endpoint = `${API_URL}/note`;

const getNoteById = (noteId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${API_URL}/note/${noteId}`);
      dispatch({
        type: GET_NOTE_BY_ID,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export default getNoteById;
