import axios from "axios";
import { CREATE_TAG } from "../actionTypes";
import { API_URL } from "../../../utils/constants";

const createTag = (tagData) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/tag`, tagData);
    dispatch({
      type: CREATE_TAG,
      payload: response.data,
    });
  } catch (error) {
    console.error(error);
  }
};
export default createTag;
