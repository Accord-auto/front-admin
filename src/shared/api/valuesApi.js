import axios from "axios";

const apiURL = "http://10.3.24.115:8080/properties";

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

export const addValue = async (id, name) => {
  await axios
    .post(apiURL + "/add-value", {
      propertyId: id,
      value: name,
    })
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

export const removeValue = async (id, idValue) => {
  await axios
    .delete(apiURL + "/delete-value", {
      data: {
        idCharacteristic: id,
        idValue: idValue,
      },
    })
    .then(function (res) {
      return res.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
};
