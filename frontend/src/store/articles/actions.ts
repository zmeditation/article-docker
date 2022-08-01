import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getArticlesAPI,
  updateArticleById,
  deleteArticleById,
} from "../api/articles";

export const setArticles = createAsyncThunk(
  "articles/getArticles",
  async () => {
    try {
      const res = await getArticlesAPI();
      return res;
    } catch (err: any) {}
  }
);

export const updateArticles = createAsyncThunk(
  "articles/updateArticles",
  async ({ articleId, title, content }: any, { dispatch, getState }) => {
    try {
      const res = await updateArticleById(articleId, title, content);
      dispatch(setArticles());
      return res;
    } catch (err: any) {}
  }
);

export const deleteArticles = createAsyncThunk(
  "articles/deleteArticles",
  async ({ articleId }: any, { dispatch, getState }) => {
    try {
      const res = await deleteArticleById(articleId);
      dispatch(setArticles());
      return res;
    } catch (err: any) {}
  }
);
