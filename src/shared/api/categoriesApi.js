import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const apiURL = `${backendUrl}/categories`;

/**
 * Fetches a list of categories from the API.
 *
 * @async
 * @function fetchCategories
 * @return {Promise<Array>}
 */

export const fetchCategories = async () => {
  const res = await axios.get(apiURL);
  return res.data;
};

/**
 * Adds a new category to the API.
 *
 * @async
 * @function addCategory
 * @param {String} name
 * @return {Promise<Object|Error>}
 */

export const addCategory = async (name, token) => {
  await axios
    .post(
      apiURL,
      {
        name: name,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": token,
        },
      }
    )
    .then(function (res) {
      return res.data;
    })
    .catch(function (error) {
      return error;
    });
};

/**
 * Removes a category to the API.
 *
 * @async
 * @function removeCategory
 * @param {Number} id
 * @return {Promise<Object>}
 */

export const removeCategory = async (id, token) => {
  const res = await axios.delete(`${apiURL}/${id}`, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": token,
    },
  });
  return res.data;
};
