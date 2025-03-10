import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  funcAddBranch,
  funcFetchDepartmentsBranches,
  funcRemoveBranch,
} from "./brancesFunction";

export const addBrunchThunk = createAsyncThunk(
  "newBranch/addBranch",
  funcAddBranch
);

export const getDepartmentsBranchesThunk = createAsyncThunk(
  "newBranch/getDepartmentsBranches",
  funcFetchDepartmentsBranches
);

export const deleteBrunchThunk = createAsyncThunk(
  "newBranch/deleteBranch",
  funcRemoveBranch
);

const newBranchSlice = createSlice({
  name: "newBranch",
  initialState: {
    InfoBranch: {
      name: "",
      address: {
        city: "",
        street: "",
        state: "",
        zipCode: "",
      },
      contacts: [
        {
          phoneNumber: "",
          email: "",
          socialURLs: [],
        },
      ],
      typeCompany: "DEPARTMENT",
    },
    departmentsBranches: [],
    status: "idle",
    error: null,
  },
  reducers: {
    updateType(state, action) {
      state.InfoBranch.typeCompany = action.payload;
    },
    updateName(state, action) {
      state.InfoBranch.name = action.payload;
    },
    updateCity(state, action) {
      state.InfoBranch.address.city = action.payload;
    },
    updateStreet(state, action) {
      state.InfoBranch.address.street = action.payload;
    },
    updateState(state, action) {
      state.InfoBranch.address.state = action.payload;
    },
    updateZipcode(state, action) {
      state.InfoBranch.address.zipCode = action.payload;
    },
    updatePhone(state, action) {
      state.InfoBranch.contacts[0].phoneNumber = action.payload;
    },
    updateMail(state, action) {
      state.InfoBranch.contacts[0].email = action.payload.trim();
    },
    addSocialMedia(state, action) {
      state.InfoBranch.contacts[0].socialURLs = [
        ...state.InfoBranch.contacts[0].socialURLs,
        action.payload,
      ];
    },
    delSocialMedia(state, action) {
      state.InfoBranch.contacts[0].socialURLs =
        state.InfoBranch.contacts[0].socialURLs.filter(
          (element) =>
            !(
              element.type === action.payload.type &&
              element.url === action.payload.url
            )
        );
    },
    resetAllBranch(state) {
      state.InfoBranch.name = "";

      state.InfoBranch.address.city = "";
      state.InfoBranch.address.state = "";
      state.InfoBranch.address.street = "";
      state.InfoBranch.address.zipCode = "";

      state.InfoBranch.contacts[0].email = "";
      state.InfoBranch.contacts[0].phoneNumber = "";
      state.InfoBranch.contacts[0].socialURLs = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addBrunchThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addBrunchThunk.fulfilled, (state) => {
        state.status = "successfully/add";
      })
      .addCase(addBrunchThunk.rejected, (state, action) => {
        state.status = "failed/add";
        state.error = action.error.message;
      })
      .addCase(getDepartmentsBranchesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDepartmentsBranchesThunk.fulfilled, (state, action) => {
        state.status = "successfully";
        state.departmentsBranches = action.payload;
      })
      .addCase(getDepartmentsBranchesThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteBrunchThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteBrunchThunk.fulfilled, (state) => {
        state.status = "successfully/remove";
      })
      .addCase(deleteBrunchThunk.rejected, (state, action) => {
        state.status = "failed/remove";
        state.error = action.error.message;
      });
  },
});

export const {
  updateType,
  updateName,
  updateCity,
  updateStreet,
  updateState,
  updateZipcode,
  updatePhone,
  updateMail,
  addSocialMedia,
  delSocialMedia,
  resetAllBranch,
} = newBranchSlice.actions;

export default newBranchSlice.reducer;
