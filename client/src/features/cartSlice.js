import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicRequest } from "../api/shopApi.js";

const initialState = { products: [], quantity: 0, totalPrice: 0 };

export const addAsyncProduct = createAsyncThunk("/addAsyncProduct", async(product, {rejectWithValue}) => {
      try {
        const {data} = await publicRequest.post("/cart", product);    
        return (data);
      }catch (err) {
        let errorMessage = "Internal Server Error";
        if (err.response) {
          errorMessage = err.response.data.message;
        }
        return rejectWithValue(errorMessage); 
      }
    });


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.products.unshift(payload); 
      state.products[0].totalPrice =   payload.price * payload.quantity;
      state.quantity += 1;  
      state.totalPrice = state.products?.map(product => product.totalPrice).reduce((a, b) => a + b, 0) 
    },  
    addQuantity: (state, { payload }) => {
      state.products[payload.index].quantity += payload.quantity;  
      state.products[payload.index].totalPrice =  state.products[payload.index].price *  state.products[payload.index].quantity
      state.totalPrice = state.products?.map(product => product.totalPrice).reduce((a, b) => a + b, 0) 
    },
    addQuantityInCart: (state, { payload }) => {
      state.products[payload.index].quantity = payload.quantity;  
      state.products[payload.index].totalPrice =  state.products[payload.index].price *  state.products[payload.index].quantity
      state.totalPrice = state.products?.map(product => product.totalPrice).reduce((a, b) => a + b, 0) 
    },
    removeProduct: (state, { payload }) => {
      state.products.splice(payload.index, 1);
      state.quantity = state.products.length;
      state.totalPrice = state.products?.map(product => product.totalPrice).reduce((a, b) => a + b, 0) 
    },
  },
  extraReducers: {
    [addAsyncProduct.pending]: (state) => {
        return {...state, status: "pending"}
    },
    [addAsyncProduct.fulfilled]: (state, {payload}) => {
        return {...state, status: "fulfilled"}
    },
    [addAsyncProduct.rejected]: (state) => {
        return {...state, status: "rejected"}
    },
  }
});
export const { addProduct, addQuantity, removeProduct,addQuantityInCart } = cartSlice.actions;
export default cartSlice.reducer;