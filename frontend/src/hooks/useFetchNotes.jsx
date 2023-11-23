import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllNotes from "../redux/actions/Notes/getAllNotes";

export const useFetchNotes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notesReducer.notes);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(getAllNotes()).then(() => setLoaded(true));
  }, [dispatch]);

  return { notes, loaded };
};
