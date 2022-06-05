import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { publicRequest } from "../api/shopApi.js";

export const register = createAsyncThunk("/register", async(user, {rejectWithValue}) => {
    try {
      const {data} = await axios.post("http://localhost:3001/register", user);    
      return (data);
    }catch (err) {
      let errorMessage = "Internal Server Error";
      if (err.response) {
        errorMessage = err.response.data.message;
      }
      return rejectWithValue(errorMessage); 
    }
  
  });
  
  export const login = createAsyncThunk("/login", async(user, {rejectWithValue}) => {  
    try {
      const {data} = await publicRequest.post("/login", user);  
      return data;
    } catch (err) {
      let errorMessage = "Internal Server Error";
      if (err.response) {
        errorMessage = err.response.data.message;
      }
      return rejectWithValue(errorMessage); 
    }
  
  })


const initialState = { currentUser: null, status: "", message: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutStart: (state)  => {
      return{...state, currentUser :null, status : "", }
    },
    refreshUserStatus: (state) => {
     return {...state, status : "", message : ""} 
    }
}, extraReducers: {
  [login.pending]: (state) => {
    return {...state, status: "pending"}
  }, 
  [login.fulfilled]: (state, {payload}) => {
    return {...state, currentUser: payload, status: "fulfilled", message: ""}
  }, 
  [login.rejected]: (state, {payload}) => {
    return {...state, message: payload, status: "rejected"}
  }, 
  [register.pending]: (state) => {
    return {...state, status: "pending"}
  }, 
  [register.fulfilled]: (state) => {
    return {...state, status: "fulfilled", message: ""}
  }, 
  [register.rejected]: (state, {payload}) => {
    return {...state, message: payload, status: "rejected"}
  },
}
});
export const { logoutStart, refreshUserStatus } = userSlice.actions;
export default userSlice.reducer;