import axios from "axios";
import { API_URL } from "../../../utils/constants";
import { UPDATE_NOTE } from "../actionTypes";

const updateNote = (noteId, updatedData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(
        `${API_URL}/note/${noteId}`,
        updatedData
      );
      dispatch({
        type: UPDATE_NOTE,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export default updateNote;
