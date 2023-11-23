import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import createNote from "../../redux/actions/Notes/createNote";
import { noteColors } from "../../utils/noteColors";
import TagInput from "../TagInput/TagInput";
import { Modal, Form, Input, Select, Button } from "antd";
import "./CreateNoteModal.module.css";
import { CheckOutlined } from "@ant-design/icons";
const { Option } = Select;

const initialNoteData = {
  title: "",
  content: "",
  status: "important",
  color: "gallery",
  tags: [],
};

const CreateNoteModal = ({ isVisible, onClose }) => {
  const dispatch = useDispatch();
  const [noteData, setNoteData] = useState(initialNoteData);
  const [form] = Form.useForm();
  const [selectedColor, setSelectedColor] = useState("gallery");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (!isVisible) {
      form.resetFields();
      setSelectedColor("gallery");
      setTags([]);
    }
  }, [isVisible, form]);

  const handleFormSubmit = (values) => {
    console.log("Form Values:", values);
    console.log("Tags:", tags);
    dispatch(createNote({ ...values, color: selectedColor, tags: tags }));
    onClose();
  };

  const handleTagsChange = (newTags) => {
    setTags(newTags);
  };

  return (
    <Modal
      title="Create Note"
      visible={isVisible}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} onFinish={handleFormSubmit} layout="vertical">
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="content" label="Content" rules={[{ required: true }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="status" label="Status">
          <Select placeholder="Select a status">
            <Option value="important">Important</Option>
            <Option value="relevant">Relevant</Option>
            <Option value="trivial">Trivial</Option>
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
              >
                {/* {selectedColor === colorName && (
                  <CheckOutlined style={{ color: "white" }} />
                )} */}
              </Button>
            ))}
          </div>
        </Form.Item>
        <Form.Item>
          <TagInput onTagsChange={handleTagsChange} initialTags={tags} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Note
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateNoteModal;
