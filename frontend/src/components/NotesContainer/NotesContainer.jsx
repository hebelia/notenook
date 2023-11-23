import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Typography } from "antd";
import { useFetchNotes } from "../../hooks/useFetchNotes";
import Note from "../Note/Note";
import CreateNoteModal from "../CreateNoteModal/CreateNoteModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchive,
  faEdit,
  faTrashAlt,
  faBoxOpen,
  faBox,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
const { Text } = Typography;
const NotesContainer = () => {
  const { notes, loaded } = useFetchNotes();
  const [isCreateNoteModalVisible, setIsCreateNoteModalVisible] =
    useState(false);

  const filteredNotes = useSelector(
    (state) => state.notesReducer.filteredNotes
  );
  const selectedFilterTags = useSelector(
    (state) => state.notesReducer.selectedFilterTags
  );
  const notesToDisplay = selectedFilterTags.length > 0 ? filteredNotes : notes;
  const showCreateNoteModal = () => {
    setIsCreateNoteModalVisible(true);
  };

  const handleClose = () => {
    setIsCreateNoteModalVisible(false);
  };

  if (!loaded) return <div>Loading...</div>;

  if (notesToDisplay.length === 0) {
    return (
      <div>
        <Button type="primary" onClick={showCreateNoteModal}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <Text type="secondary">No notes available</Text>
      </div>
    );
  }

  return (
    <div>
      <Button type="primary" onClick={showCreateNoteModal}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
      {notesToDisplay
        .filter((note) => !note.isArchived)
        .map((note) => (
          //Note: used to pass all the data as props
          <Note key={note.ID} {...note} />
        ))}
      <CreateNoteModal
        isVisible={isCreateNoteModalVisible}
        onClose={handleClose}
      />
    </div>
  );
};

export default NotesContainer;
