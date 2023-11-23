import {
  CREATE_NOTE,
  GET_ALL_NOTES,
  GET_NOTE_BY_ID,
  UPDATE_NOTE,
  DELETE_NOTE,
  ARCHIVE_NOTE,
  UNARCHIVE_NOTE,
  FILTER_NOTES_BY_TAGS,
} from "../actions/actionTypes";

const initialState = {
  notes: [],
  unarchivedNotes: [],
  archivedNotes: [],
  filteredNotes: [],
  selectedFilterTags: [],
  selectedNote: null,
};
const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NOTES:
      return { ...state, notes: action.payload };

    case GET_NOTE_BY_ID:
      return { ...state, selectedNote: action.payload };

    case CREATE_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };

    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.ID === action.payload.ID ? action.payload : note
        ),
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.ID !== action.payload),
      };
    case ARCHIVE_NOTE:
      const newArchived = state.notes.find(
        (note) => note.ID === action.payload.ID
      );
      return {
        ...state,
        notes: state.notes.filter((note) => note.ID !== action.payload.ID),
        archivedNotes: [
          ...state.archivedNotes,
          { ...newArchived, isArchived: true },
        ],
      };

    case UNARCHIVE_NOTE:
      const newUnarchived = state.archivedNotes.find(
        (note) => note.ID === action.payload.ID
      );
      return {
        ...state,
        archivedNotes: state.archivedNotes.filter(
          (note) => note.ID !== action.payload.ID
        ),
        notes: [...state.notes, { ...newUnarchived, isArchived: false }],
      };

    case FILTER_NOTES_BY_TAGS:
      return {
        ...state,
        filteredNotes: action.payload,
        selectedFilterTags: action.selectedFilterTags,
      };
    default:
      return state;
  }
};

export default notesReducer;
