import React from "react";
import { useSelector } from "react-redux";
import Note from "../../components/Note/Note";
import { NavLink } from "react-router-dom";
import logo from "/img/logo.png";

const ArchivedNotes = () => {
  const archivedNotes = useSelector(
    (state) => state.notesReducer.archivedNotes
  );

  if (!archivedNotes || archivedNotes.length === 0)
    return (
      <div>
        <div>
          <NavLink to="/home">&gt;_ Go back</NavLink>
        </div>
        There are no archived notes
      </div>
    );
  return (
    <div>
      <NavLink to="/home">&gt;_ Go back</NavLink>
      <h2>Archived Notes</h2>

      <div>
        {archivedNotes.map((note) => (
          <Note key={note.ID} {...note} />
        ))}
      </div>
    </div>
  );
};

export default ArchivedNotes;
