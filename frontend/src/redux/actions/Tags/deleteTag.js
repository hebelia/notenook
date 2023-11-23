import axios from "axios";
import { DELETE_TAG } from "../actionTypes";
import { API_URL } from "../../../utils/constants";

const deleteTag = (tagId) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/tag/${tagId}`);
    dispatch({
      type: DELETE_TAG,
      payload: tagId,
    });
  } catch (error) {
    console.error(error);
  }
};

export default deleteTag;
