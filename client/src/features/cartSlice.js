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

export const deleteAsyncAllCartItems = createAsyncThunk("/deleteAsyncAllCartItems", async(product, {rejectWithValue}) => {
  console.log(product);
      try {
        const {data} = await publicRequest.post(`/cart/deletecarts/${product.userId}`, product);    
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
    refreshCartStatus : (state) => {
      return{...state, status: ''}
    },
  },
  extraReducers: {
    [addAsyncCart.pending]: (state) => {
        return {...state, status: "pending"}
    },
    [addAsyncCart.fulfilled]: (state, {payload}) => {
        return {...state, status: "fulfilled", products: payload.products, totalPrice: payload.totalPrice}
    },
    [addAsyncCart.rejected]: (state) => {
        return {...state, status: "rejected"}
    },
    [addAsyncCartQuantity.pending]: (state) => {
        return {...state, status: "pending"}
    },
    [addAsyncCartQuantity.fulfilled]: (state, {payload}) => {
        return {...state, status: "fulfilled", products: payload.products, totalPrice: payload.totalPrice}
    },
    [addAsyncCartQuantity.rejected]: (state) => {
        return {...state, status: "rejected"}
    },

    [fetchAsyncCart.fulfilled]: (state, {payload}) => {
        if(payload){
          return {...state, products: payload.products, totalPrice: payload.totalPrice, status: 'fulfilled'} 
        }
    },
    [fetchAsyncCart.rejected]: (state) => {
        return {...state, status: "rejected",}
    },
    [deleteAsyncCartItem.pending]: (state) => {
        return {...state, status: "pending"}
    },
    [deleteAsyncCartItem.fulfilled]: (state, {payload}) => {
      return {...state, status: "fulfilled", products: payload.products, totalPrice: payload.totalPrice}
    },
    [deleteAsyncCartItem.rejected]: (state) => {
        return {...state, status: "rejected"}
    },
    [deleteAsyncAllCartItems.pending]: (state) => {
        return {...state, status: "pending"}
    },
    [deleteAsyncAllCartItems.fulfilled]: (state, {payload}) => {
      return {...state, status: "fulfilled", products: payload.products, totalPrice: payload.totalPrice}
    },
    [deleteAsyncAllCartItems.rejected]: (state) => {
        return {...state, status: "rejected"}
    },
  }
});
export const { addQuantity, addQuantityInCart, refreshCartStatus } = cartSlice.actions;
export default cartSlice.reducer;