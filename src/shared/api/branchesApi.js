import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const apiURL = `${backendUrl}/companies`;

// export const fetchArticles = async () => {
//   const res = await axios.get(apiURL);
//   return res.data;
// };

export const addBranch = async (form, thunkAPI) => {
  return await axios
    .post(apiURL, form, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(function (res) {
      return res.data;
    })
    .catch(function (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    });
};

// export const removeArticle = async (id) => {
//   const res = await axios.delete(`${apiURL}/${id}`);
//   return res.data;
// };
