import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest } from "../api/shopApi.js";

export const fetchAsyncProducts = createAsyncThunk("/products/fetchAsyncProducts", async () => {
    const { data } = await publicRequest.get("/products");
    return data;
})


export const fetchAsyncSelectedProduct = createAsyncThunk("/products/fetchAsyncSelectedProduct", async (id) => {
    const { data} =await publicRequest.get(`/products/find/${id}`);
    return data;
})
    

const initialState = {products: [], status: "", productsByCat: [], productsBySearch: [], selectedProduct: {}};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
      refreshProducts: (state) => {
        state.products  = []
      },
      refreshProductsByCat: (state) => {
        state.productsByCat  = []
      },
      refreshSelectedProduct: (state) => {
          state.selectedProduct = {}
      }
}, 
extraReducers: { 
    [fetchAsyncProducts.pending]: (state) => {
        return {...state, status: "pending"}
    },
    [fetchAsyncProducts.fulfilled]: (state, {payload}) => {
        return {...state, products: payload, status: "fulfilled"}
    },
    [fetchAsyncProducts.rejected]: (state) => {
        return {...state, status: "rejected"}
    },
    [fetchAsyncSelectedProduct.pending]: (state) => {
        return {...state, status: "pending"}
    },
    [fetchAsyncSelectedProduct.fulfilled]: (state, {payload}) => {
        return {...state, selectedProduct: payload, status: "fulfilled"}
    } ,
}
});

export const {refreshProducts,refreshProductsByCat, refreshSelectedProduct } = productSlice.actions
export const getAllProducts = (state) => state.products.products;
export default productSlice.reducer;