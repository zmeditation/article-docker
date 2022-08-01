import { createSlice } from "@reduxjs/toolkit";
import { setArticles, updateArticles, deleteArticles } from "./actions";
import { articlesType } from "./types";

const PREFIX = "name";
const initialState: articlesType = {
  articles: [],
};

const setArticle = (state: articlesType, data: any) => {
  state.articles = data.data;
};

export const articlesReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      setArticles.fulfilled.type,
      (state: articlesType, action: any) => {
        setArticle(state, action.payload);
      }
    );
  },
});

export { setArticles, updateArticles, deleteArticles };
export default articlesReducer.reducer;
