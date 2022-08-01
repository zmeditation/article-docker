import type { RootState } from "../store";

export const getArticles = (state: RootState) => state.articles.articles;
