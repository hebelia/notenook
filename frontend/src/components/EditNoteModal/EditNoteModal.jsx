import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Modal,
  Form,
  Input,
  Button,
  Checkbox,
  Divider,
  message,
  Select,
} from "antd";
import updateNote from "../../redux/actions/Notes/updateNote";
import { noteColors } from "../../utils/noteColors";
import TagInput from "../TagInput/TagInput";

const EditNoteModal = ({ isVisible, onClose, noteData }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [tags, setTags] = useState(noteData.tags || []);
  const [selectedColor, setSelectedColor] = useState(
    noteData.color || "gallery"
  );

  useEffect(() => {
    if (isVisible && noteData) {
      form.setFieldsValue({
        ...noteData,
        tags: undefined,
      });
      setTags(noteData.Tags.map((tag) => tag.name));
      setSelectedColor(noteData.color);
    }
  }, [isVisible, noteData, form]);

  const handleTagsChange = (newTags) => {
    setTags(newTags);
  };

  const handleFormSubmit = (values) => {
    console.log("Form Values:", values);
    console.log("Tags:", tags);
    const updatedNoteData = {
      ...values,
      color: selectedColor,
      tags: tags,
    };
    console.log("Updated Note Data:", updatedNoteData);
    const noteId = noteData.ID;
    dispatch(updateNote(noteId, updatedNoteData));
    onClose();
  };
  return (
    <Modal
      title="Edit Note"
      visible={isVisible}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} onFinish={handleFormSubmit} layout="vertical">
        <Form.Item name="title" label="Title">
          <Input />
        </Form.Item>
        <Form.Item name="content" label="Content">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="status" label="Status">
          <Select>
            <Select.Option value="important">Important</Select.Option>
            <Select.Option value="relevant">Relevant</Select.Option>
            <Select.Option value="trivial">Trivial</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="color" label="Color">
          <Select>
            {Object.keys(noteColors).map((color) => (
              <Select.Option key={color} value={color}>
                {color}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Color">
          <div className="color-selector" style={{ display: "flex" }}>
            {Object.entries(noteColors).map(([colorName, colorValue]) => (
              <Button
                key={colorName}
                style={{
                  background: colorValue,
                  border: `4px solid ${
                    selectedColor === colorName ? "#f0a65c" : "white"
                  }`,
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  margin: 5,
                }}
                onClick={() => setSelectedColor(colorName)}
              ></Button>
            ))}
          </div>
        </Form.Item>
        <Form.Item label="Tags">
          <TagInput onTagsChange={handleTagsChange} initialTags={tags} />
        </Form.Item>
        <Button type="primary" onClick={() => form.submit()}>
          Update Note
        </Button>
      </Form>
    </Modal>
  );
};

export default EditNoteModal;
