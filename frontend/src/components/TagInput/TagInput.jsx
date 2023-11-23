import React, { useState, useEffect } from "react";
import { Input, Tag, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const TagInput = ({ onTagsChange, initialTags = [] }) => {
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState(initialTags);

  useEffect(() => {
    setTags(initialTags);
  }, [initialTags]);

  const handleInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && tagInput) {
      e.preventDefault();
      const newTags = [...tags, tagInput.trim()];
      setTags(newTags);
      onTagsChange(newTags);
      setTagInput("");
    }
  };

  const removeTag = (indexToRemove) => {
    const newTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(newTags);
    onTagsChange(newTags);
  };

  return (
    <div style={{ padding: "10px 0" }}>
      {tags.map((tag, index) => (
        <Tag
          key={index}
          closable
          onClose={() => removeTag(index)}
          style={{ margin: "5px",padding: '5px' }}
        >
          {tag}
        </Tag>
      ))}
      <Input
        type="text"
        value={tagInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Add a tag and press Enter"
        style={{ width: "200px"}}
      />
    </div>
  );
};

export default TagInput;
