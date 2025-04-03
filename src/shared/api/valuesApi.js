import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const apiURL = `${backendUrl}/properties`;

/**
 * Fetches a list of values property from the API.
 *
 * @async
 * @function fetchValues
 * @param {Number} id
 * @return {Promise<Array>}
 */

export const fetchValues = async (id) => {
  const res = await axios.get(`${apiURL}/${id}`);
  return res.data;
};

/**
 * Adds a new value of property to the API.
 *
 * @async
 * @function addValue
 * @param {Number} id
 * @param {String} name
 * @return {Promise<Object|Error>}
 */

export const addValue = async (id, name, token) => {
  await axios
    .post(
      apiURL + "/add-value",
      {
        propertyId: id,
        value: name,
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
 * Removes a value from property to the API.
 *
 * @async
 * @function removeValue
 * @param {Number} id
 * @param {Number} idValue
 * @return {Promise<Object>}
 */

export const removeValue = async (id, idValue, token) => {
  console.log(id, idValue, token);
  await axios
    .delete(
      apiURL + "/delete-value",
      {
        data: {
          idCharacteristic: id,
          idValue: idValue,
        },
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
      console.log(error);
      return error;
    });
};
