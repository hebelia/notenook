import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Form, Input, Button } from "antd";
import createTag from "../../redux/actions/Tags/createTag";

const CreateTagModal = ({ isVisible, onClose, onCreate }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleFormSubmit = (values) => {
    dispatch(createTag(values));
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title="Create Tag"
      visible={isVisible}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} onFinish={handleFormSubmit} layout="vertical">
        <Form.Item
          name="name"
          label="Tag Name"
          rules={[{ required: true, message: "Please input the tag name!" }]}
        >
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Create Tag
        </Button>
      </Form>
    </Modal>
  );
};

export default CreateTagModal;
