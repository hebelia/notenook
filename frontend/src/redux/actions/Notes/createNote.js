import axios from "axios";
import {API_URL} from "../../../utils/constants";
import { CREATE_NOTE } from "../actionTypes";

// const endpoint = `${API_URL}/note`;

const createNote = (noteData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${API_URL}/note`, noteData);
      dispatch({
        type: CREATE_NOTE,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export default createNote;
