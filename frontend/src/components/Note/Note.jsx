import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Button, Tag, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchive,
  faEdit,
  faTrashAlt,
  faBoxOpen,
  faBox,
} from "@fortawesome/free-solid-svg-icons";
import archiveNote from "../../redux/actions/Notes/archiveNote";
import unarchiveNote from "../../redux/actions/Notes/unarchiveNote";
import deleteNote from "../../redux/actions/Notes/deleteNote";
import { noteColors } from "../../utils/noteColors";
import EditNoteModal from "../EditNoteModal/EditNoteModal";

const { Title, Paragraph, Text } = Typography;

const Note = ({
  ID,
  title,
  content,
  status,
  isArchived,
  color,
  createdAt,
  updatedAt,
  Tags,
}) => {
  const dispatch = useDispatch();
  const [isEditNoteModalVisible, setIsEditNoteModalVisible] = useState(false);
  const safeTags = Tags || [];

  const handleArchive = () => {
    if (isArchived) {
      dispatch(unarchiveNote(ID));
    } else {
      dispatch(archiveNote(ID));
    }
  };

  const handleDelete = () => {
    dispatch(deleteNote(ID));
  };

  const showModal = () => {
    setIsEditNoteModalVisible(true);
  };

  return (
    <Card style={{ backgroundColor: noteColors[color] || color }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title level={4}>{title}</Title>
        <div>
          <Button
            icon={<FontAwesomeIcon icon={isArchived ? faBoxOpen : faBox} />}
            onClick={handleArchive}
          />
          <Button
            icon={<FontAwesomeIcon icon={faTrashAlt} />}
            onClick={handleDelete}
          />
          <Button
            icon={<FontAwesomeIcon icon={faEdit} />}
            onClick={showModal}
          />
        </div>
      </div>
      <Paragraph>{content}</Paragraph>
      <Text>Status: {status}</Text>
      <br />
      {/* <Text>Created: {new Date(createdAt).toLocaleString()}</Text><br/> */}
      <Text>Updated at: {new Date(updatedAt).toLocaleString()}</Text>
      <br />
      <div>
        Tags:
        {safeTags.map((tag) => (
          <Tag key={tag.ID} color={tag.color} style={{ color: "black" }}>
            {tag.name}
          </Tag>
        ))}
      </div>

      <EditNoteModal
        isVisible={isEditNoteModalVisible}
        onClose={() => setIsEditNoteModalVisible(false)}
        noteData={{ ID, title, content, status, color, Tags }}
      />
    </Card>
  );
};

export default Note;

//   {
//     "ID": "27caa132-a711-47c0-84e1-c53a3799bb7e",
//     "title": "Don't forget - Updated!",
//     "content": "Take the dog for a walk",
//     "status": "important",
//     "isArchived": false,
//     "color": "lilac",
//     "createdAt": "2023-11-22T03:40:51.009Z",
//     "updatedAt": "2023-11-22T04:16:13.188Z",
//     "Tags": [
//         {
//             "ID": "f0070c52-a9a9-4568-8210-5be3830e5eba",
//             "name": "personal",
//             "color": "#D3D3D3"
//         },
//         {
//             "ID": "c65d4b21-d7e1-40d9-b7ed-c6ed9e122aae",
//             "name": "to do",
//             "color": "#D3D3D3"
//         }
//     ]
// }
