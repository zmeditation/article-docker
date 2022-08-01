import { REQUEST_API_URL } from "../../../Constant";
import axios from "axios";

export const getArticlesAPI = async () => {
  return axios.get(`${REQUEST_API_URL}/articles`);
};

export const getArticleById = async (id: string) => {
  try {
    const response = await axios.get(`${REQUEST_API_URL}/articles/${id}`);
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const createArticle = async (title: string, content: string) => {
  try {
    const response = await axios.put(`${REQUEST_API_URL}/articles`, {
      title: title,
      content: content,
    });
    if (response) {
      if (response.status === 200) {
        return response.data.id;
      }
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const updateArticleById = async (
  id: string,
  title: string,
  content: string
) => {
  try {
    const response = await axios.post(`${REQUEST_API_URL}/articles/${id}`, {
      title: title,
      content: content,
    });
    if (response) {
      if (response.status === 200) {
        return response.data[1].id;
      }
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const deleteArticleById = async (id: any) => {
  try {
    const response = await axios.delete(`${REQUEST_API_URL}/articles/${id}`);
    if (response) {
      if (response.status === 200) {
        return true;
      }
    }
    return null;
  } catch (error) {
    return null;
  }
};
