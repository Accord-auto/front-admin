import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const apiURL = `${backendUrl}/companies`;

export const fetchHeadersBranches = async () => {
  const res = await axios.get(`${apiURL}/header`);
  return res.data;
};

export const fetchDepartmentBranches = async () => {
  const res = await axios.get(`${apiURL}/departments`);
  return res.data;
};

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

export const removeBranch = async (id) => {
  const res = await axios.delete(`${apiURL}/${id}`);
  return res.data;
};
