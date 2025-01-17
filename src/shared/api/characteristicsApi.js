import axios from "axios";

const backendUrl = process.env.import.meta.env.VITE_BACKEND_URL;

const apiURL = `${backendUrl}/properties`;

/**
 * Fetches a list of characteristics from the API.
 *
 * @async
 * @function fetchCharacteristics
 * @return {Promise<Array>}
 */

export const fetchCharacteristics = async () => {
  const res = await axios.get(apiURL);
  return res.data;
};

/**
 * Adds a new characteristic to the API.
 *
 * @async
 * @function addCharacteristics
 * @param {String} name
 * @return {Promise<Object|Error>}
 */

export const addCharacteristics = async (name) => {
  await axios
    .post(apiURL, {
      name: name,
    })
    .then(function (res) {
      return res.data;
    })
    .catch(function (error) {
      return error;
    });
};

/**
 * Removes a characteristic to the API.
 *
 * @async
 * @function removeCharacteristic
 * @param {Number} id
 * @return {Promise<Object>}
 */

export const removeCharacteristic = async (id) => {
  const res = await axios.delete(`${apiURL}/${id}`);
  return res.data;
};
