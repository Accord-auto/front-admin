import axios from "axios";
// import { useSelector } from "react-redux";
import { selectAuthData } from "../../features/authFeature/authSelector";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const apiURL = `${backendUrl}/articles`;
// const { token } = useSelector(selectAuthData);
/**
 * Fetches a list of articles from the API.
 *
 * @async
 * @function fetchArticles
 * @return {Promise<Array>}
 */

export const fetchArticles = async () => {
  const res = await axios.get(apiURL);
  return res.data;
};

/**
 * Adds a new article to the API.
 *
 * @async
 * @function addArticle
 * @param {FormData} form
 * @param {Object} thunkAPI
 * @return {Promise<Object|Error>}
 */

export const addArticle = async (form, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = selectAuthData(state);

  return await axios
    .post(apiURL, form, {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": token,
      },
    })
    .then(function (res) {
      return res.data;
    })
    .catch(function (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    });
};

/**
 * Removes an article to the API.
 *
 * @async
 * @function removeArticle
 * @param {Number} id
 * @return {Promise<Object>}
 */

export const removeArticle = async (id, token) => {
  const res = await axios.delete(`${apiURL}/${id}`, {
    headers: {
      "X-API-KEY": token,
    },
  });
  return res.data;
};
