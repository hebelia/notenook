import axios from "axios";
import { UPDATE_TAG } from "../actionTypes";
import { API_URL } from "../../../utils/constants";

const updateTag = (tagId, updatedData) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/tag/${tagId}`, updatedData);
    dispatch({
      type: UPDATE_TAG,
      payload: response.data,
    });
  } catch (error) {
    console.error(error);
  }
};
export default updateTag;
