import axios from "axios";
import {API_URL} from "../../../utils/constants";
import { GET_ALL_TAGS } from "../actionTypes";

const endpoint = `${API_URL}/tag`;

const getAllNotes = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      dispatch({
        type: GET_ALL_TAGS,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export default getAllNotes;
