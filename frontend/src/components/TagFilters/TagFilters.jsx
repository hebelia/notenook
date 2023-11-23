import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllTags from "../../redux/actions/Tags/getAllTags";
import filterNotesByTags from "../../redux/actions/Notes/filterNotesByTags";
import { Card, Button, Tag, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faTag } from "@fortawesome/free-solid-svg-icons";

const TagFilters = () => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tagsReducer.tags);
  const [selectedTagNames, setSelectedTagNames] = useState([]);

  useEffect(() => {
    dispatch(getAllTags());
  }, [dispatch]);

  const handleTagClick = (tag) => {
    const isSelected = selectedTagNames.includes(tag.name);
    const newSelectedTagNames = isSelected
      ? selectedTagNames.filter((name) => name !== tag.name)
      : [...selectedTagNames, tag.name];

    setSelectedTagNames(newSelectedTagNames);

    dispatch(filterNotesByTags(newSelectedTagNames));
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {tags.map((tag) => (
        <Button
          key={tag.ID}
          style={{
            background: tag.color,
            color: "#fff",
            margin: "5px",
            border: selectedTagNames.includes(tag.name)
              ? "2px solid #f0a65c"
              : "none",
          }}
          onClick={() => handleTagClick(tag)}
        >
          {tag.name}
        </Button>
      ))}
    </div>
  );
};

export default TagFilters;
