import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllTags from "../redux/actions/Tags/getAllTags";

export const useFetchTags = () => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tagsReducer.tags);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(getAllTags()).then(() => setLoaded(true));
  }, [dispatch]);

  return { tags, loaded };
};
