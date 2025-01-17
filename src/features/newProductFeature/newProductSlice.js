import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { funcCreateProduct } from "./newProductFunction";

export const addProductThunk = createAsyncThunk(
  "newProduct/addProduct",
  funcCreateProduct
);

const newProductSlice = createSlice({
  name: "newProduct",
  initialState: {
    InfoProduct: {
      name: "",
      brand: "",
      count: "",
      price: {
        discount: "",
        value: "",
      },
      countType: "",
      description: "",
      article: "",
      categoryId: null,
      specialOffer: false,
      customerArticle: "",
      properties: [],
    },
    mainPhoto: null,
    morePhotos: [],
    status: "idle",
    error: null,
  },
  reducers: {
    updateName(state, action) {
      state.InfoProduct.name = action.payload;
    },
    updateBrand(state, action) {
      state.InfoProduct.brand = action.payload;
    },
    updateDescription(state, action) {
      state.InfoProduct.description = action.payload;
    },
    updateCategory(state, action) {
      state.InfoProduct.categoryId = parseInt(action.payload);
    },
    updateSpecialOffer(state, action) {
      state.InfoProduct.specialOffer = action.payload;
    },
    updatePrice(state, action) {
      state.InfoProduct.price.value = parseInt(action.payload);
    },
    updateDiscount(state, action) {
      state.InfoProduct.price.discount = parseInt(action.payload);
    },
    updateCount(state, action) {
      state.InfoProduct.count = parseInt(action.payload);
    },
    updateCountType(state, action) {
      state.InfoProduct.countType = action.payload;
    },
    updateArticle(state, action) {
      state.InfoProduct.article = action.payload;
    },
    updateCustomerArticle(state, action) {
      state.InfoProduct.customerArticle = action.payload;
    },
    addProperty(state, action) {
      const listProperties = action.payload;
      state.InfoProduct.properties.push(...listProperties);
    },
    removeProperty(state, action) {
      state.InfoProduct.properties = state.InfoProduct.properties.filter(
        (property) => property.propertyId !== action.payload
      );
    },
    updateMainPhoto(state, action) {
      state.mainPhoto = action.payload;
      console.log(state.mainPhoto);
    },
    updateMorePhotos(state, action) {
      state.morePhotos = [...state.morePhotos, action.payload];
      console.log(state.morePhotos);
    },
    resetMainPhoto(state) {
      state.mainPhoto = null;
    },
    resetMorePhotos(state) {
      state.morePhotos = [];
    },
    resetAllInfo(state) {
      state.mainPhoto = null;
      state.morePhotos = [];
      state.InfoProduct.properties = [];
      state.InfoProduct.name = "";
      state.InfoProduct.brand = "";
      state.InfoProduct.description = "";
      state.InfoProduct.article = "";
      state.InfoProduct.categoryId = null;
      state.InfoProduct.count = "";
      state.InfoProduct.countType = "";
      state.InfoProduct.customerArticle = "";
      state.InfoProduct.price.discount = "";
      state.InfoProduct.price.value = "";
      state.InfoProduct.specialOffer = false;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProductThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProductThunk.fulfilled, (state) => {
        state.status = "successfully/add";
      })
      .addCase(addProductThunk.rejected, (state, action) => {
        state.status = "failed/add";
        state.error = action.error.message;
      });
  },
});

export const {
  updateName,
  updateBrand,
  updateDescription,
  updateCategory,
  updateSpecialOffer,
  updatePrice,
  updateDiscount,
  updateCount,
  updateCountType,
  updateArticle,
  updateCustomerArticle,
  addProperty,
  removeProperty,
  updateMainPhoto,
  updateMorePhotos,
  resetMainPhoto,
  resetMorePhotos,
  resetAllInfo,
} = newProductSlice.actions;

export default newProductSlice.reducer;
