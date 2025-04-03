import axios from "axios";
import { selectAuthData } from "../../features/authFeature/authSelector";

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
  const state = thunkAPI.getState();
  const { token } = selectAuthData(state);

  return await axios
    .post(apiURL, form, {
      headers: {
        "Content-Type": "application/json",
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

export const removeBranch = async (id, token) => {
  const res = await axios.delete(`${apiURL}/${id}`, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": token,
    },
  });
  return res.data;
};
