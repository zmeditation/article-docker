import React, { useState, useEffect } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getArticleById } from "../../store/api/articles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updateArticles } from "../../store/articles";
import { Button } from "@mui/material";
import { useStyles } from "./EditArticleStyle";

export default function EditArticle() {
  const [searchParams] = useSearchParams();
  const isEditMode = searchParams.get("edit");
  let { articleId } = useParams();
  const [article, setArticle] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (articleId) {
      getArticleById(articleId).then((data: any) => {
        setArticle(data);
        setTitle(data.title);
        setContent(data.content);
      });
    }
  }, [articleId]);

  const handleSubmit = async () => {
    dispatch(updateArticles({ articleId, title, content }));
    navigate(`/article/${articleId}`);
    // window.alert("The server seems to be down. Article update failed.");
  };
  return (
    <div className={classes.root}>
      {article ? (
        <>
          <h2>Modify Article</h2>
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
                disabled={!isEditMode}
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
                disabled={!isEditMode}
              />
            </label>
          </div>
          {isEditMode ? (
            <Button onClick={() => handleSubmit()}>Update Article</Button>
          ) : (
            <Button onClick={() => navigate("/")}>Go to Main Page</Button>
          )}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
