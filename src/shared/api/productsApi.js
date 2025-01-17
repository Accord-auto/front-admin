import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const apiURL = `${backendUrl}/products`;

const params = {
  offset: 0,
  limit: 20,
  sort: "ID_ASC",
};

export const fetchMiniCatalog = async () => {
  const res = await axios.get(
    apiURL,
    { params },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

/**
 * Adds a new product to the API.
 *
 * @async
 * @function addProduct
 * @param {FormData} form
 * @param {Object} thunkAPI
 * @return {Promise<Object|Error>}
 */

export const addProduct = async (form, thunkAPI) => {
  return await axios
    .post(apiURL, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(function (res) {
      console.log(res);
      return res.data;
    })
    .catch(function (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    });
};

export const getProduct = async (id) => {
  const res = await axios.get(`${apiURL}/${id}`);
  return res.data;
};

export const changePriceProduct = async (id, price) => {
  const res = await axios.put(`${apiURL}/${id}/price`, price, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

export const changeDiscountProduct = async (id, price) => {
  const res = await axios.put(`${apiURL}/${id}/discount`, price, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

export const changeCountProduct = async (id, count) => {
  const res = await axios.put(`${apiURL}/${id}/count`, count, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await axios.delete(`${apiURL}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

export const toggleOfferProduct = async (id) => {
  const res = await axios.put(`${apiURL}/${id}/toggle-special-offer`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};
