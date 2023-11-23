import axios from "axios";
import {API_URL} from "../../../utils/constants";
import { GET_ALL_NOTES } from "../actionTypes";

const endpoint = `${API_URL}/note`;

const getAllNotes = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      dispatch({
        type: GET_ALL_NOTES,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export default getAllNotes;
