import axios from "axios";

const apiURL = "http://10.3.24.115:8080/articles";
// const URL = "http://10.3.24.115:8080/";

// const instance = axios.create({ baseURL: URL })
// instance.post('/articles/${id}')

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
  return await axios
    .post(apiURL, form, {
      headers: {
        "Content-Type": "multipart/form-data",
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

export const removeArticle = async (id) => {
  const res = await axios.delete(`${apiURL}/${id}`);
  return res.data;
};
