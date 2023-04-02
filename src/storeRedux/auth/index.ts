import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import { fetchAuth } from "./thunk";

interface AuthState {
  token: string;
  waiting: boolean;
}

const initialState: AuthState = {
  token: '',
  waiting: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAuth.pending, (state) => {
        console.log('loading')
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        console.log('fulfilled', action)
      })
      .addCase(fetchAuth.rejected, (state, action) => {
        console.log('rejected', action)
      })
  },
});

// export const {addNumber} = authSlice.actions;
export default authSlice.reducer;