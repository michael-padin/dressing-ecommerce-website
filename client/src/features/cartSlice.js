import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicRequest } from "../api/shopApi.js";



export const addAsyncCart = createAsyncThunk("/addAsyncCart", async(product, {rejectWithValue}) => {
      try {
        const {data} = await publicRequest.post("/cart", product);    
         return data;
        
      }catch (err) {
        let errorMessage = "Internal Server Error";
        if (err.response) {
          errorMessage = err.response.data.message;
        }
        return rejectWithValue(errorMessage); 
      }
    });

export const fetchAsyncCart = createAsyncThunk("/fetchAsyncCart", async(userId, {rejectWithValue}) => {
      try {
        const {data} = await publicRequest.get(`/cart/find/${userId}`);    
        return (data);
      }catch (err) {
        let errorMessage = "Internal Server Error";
        if (err.response) {
          errorMessage = err.response.data.message;
        }
        return rejectWithValue(errorMessage); 
      }
    });

export const addAsyncCartQuantity = createAsyncThunk("/addAsyncCartQuantity", async(product, {rejectWithValue}) => {
  console.log(product);
      try {
        const {data} = await publicRequest.post(`/cart/updatecart/${product.userId}`, product);    
        return (data);
      }catch (err) {
        let errorMessage = "Internal Server Error";
        if (err.response) {
          errorMessage = err.response.data.message;
        }
        return rejectWithValue(errorMessage); 
      }
    });
export const deleteAsyncCartItem = createAsyncThunk("/deleteAsyncCartItem", async(product, {rejectWithValue}) => {

      try {
        const {data} = await publicRequest.post(`/cart/deletecart/${product.userId}`, product);    
        return (data);
      }catch (err) {
        let errorMessage = "Internal Server Error";
        if (err.response) {
          errorMessage = err.response.data.message;
        }
        return rejectWithValue(errorMessage); 
      }
    });



const initialState = { products: [], totalPrice: 0, status: '' };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
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
  },
  extraReducers: {
    [addAsyncCart.pending]: (state) => {
        return {...state, status: "pending"}
    },
    [addAsyncCart.fulfilled]: (state, {payload}) => {
        const newPayload = Object.assign({}, ...payload)
        console.log(newPayload);
        // return {...state, status: "fulfilled", products: payload.products, totalPrice: payload.totalPrice}
    },
    [addAsyncCart.rejected]: (state) => {
        return {...state, status: "rejected"}
    },
    [fetchAsyncCart.pending]: (state) => {
        return {...state, status: "pending"}
    },
    [fetchAsyncCart.fulfilled]: (state, {payload}) => {
      if (payload){
        return {...state, status: "fulfilled", products: payload.products, totalPrice: payload.totalPrice}
      }
    },
    [fetchAsyncCart.rejected]: (state) => {
        return {...state, status: "rejected"}
    },
    [deleteAsyncCartItem.pending]: (state) => {
        return {...state, status: "pending"}
    },
    [deleteAsyncCartItem.fulfilled]: (state, {payload}) => {
      if (payload){
        return {...state, status: "fulfilled", }
      }
    },
    [deleteAsyncCartItem.rejected]: (state) => {
        return {...state, status: "rejected"}
    },
  }
});
export const { addQuantity, removeProduct,addQuantityInCart } = cartSlice.actions;
export default cartSlice.reducer;