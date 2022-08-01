import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles, CardItem } from "./MainContainerStyle";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getArticles } from "../../store/articles/selectors";
import { setArticles, deleteArticles } from "../../store/articles";

export default function MainContainer() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const articles = useAppSelector(getArticles);

  const handleCreate = () => {
    navigate("/articles/new");
  };

  const handleEdit = (id: any) => {
    navigate(`/article/${id}?edit=true`);
  };

  const handleRead = (id: any) => {
    navigate(`/article/${id}`);
  };

  const handleDelete = (id: any) => {
    dispatch(deleteArticles({ articleId: id }));
  };

  useEffect(() => {
    dispatch(setArticles());
  }, [navigate]);

  return (
    <div className={classes.root}>
      <div className={classes.buttonGroup}>
        <Button onClick={handleCreate}>Create</Button>
        {/* <Button>Sort</Button> */}
      </div>
      <div className={classes.cardContainer}>
        {articles?.length > 0 &&
          articles.map((article: any, key: any) => (
            <CardItem key={key}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleRead(article.id)}
                  >
                    {article.title}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {new Date(article.updatedAt).toString()}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => handleEdit(article.id)}>
                    Edit
                  </Button>
                  <Button size="small" onClick={() => handleDelete(article.id)}>
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </CardItem>
          ))}
      </div>
    </div>
  );
}
