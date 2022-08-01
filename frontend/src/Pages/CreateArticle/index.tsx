import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createArticle } from "../../store/api/articles";
import { useStyles } from "./CreateArticleStyle";

export default function CreateArticle() {
  const [article, setArticle] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const classes = useStyles();

  const handleSubmit = async () => {
    const id = await createArticle(title, content);

    if (id) {
      navigate(`/article/${id}`);
    } else {
      window.alert("The server seems to be down. Article creation failed.");
    }
  };

  return (
    <div className={classes.root}>
      <h2>Create Article</h2>
      <div className={classes.editGroup}>
        <label className="col-sm-12 col-form-label">
          <span>Title</span>
          <br />
          <input
            className="form-control form-control-sm"
            value={title}
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
            size={39}
          />
        </label>
        <br />
        <label className="col-sm-12 col-form-label">
          <span>Content</span>
          <br />
          <textarea
            className="form-control form-control-sm"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            placeholder="contents"
            rows={18}
            cols={41}
          />
        </label>
      </div>
      <Button
        title="update changes"
        className="btn btn-success ml-3"
        onClick={() => handleSubmit()}
      >
        Create Article
      </Button>
    </div>
  );
}
