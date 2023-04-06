import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { fetchAuth, fetchRemind } from "./thunk";

interface AuthState {
  token: string | null;
  waiting: boolean;
  exists: boolean;
  errorMsg: string;
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  waiting: true,
  exists: false,
  errorMsg: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authRemind: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.exists = true;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.waiting = true;
        state.errorMsg = ''
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.token = action.payload.data.token;
        state.waiting = false;
        state.exists = true;
      })
      .addCase(fetchAuth.rejected, (state, action) => {
        state.token = '';
        state.waiting = false;
        state.exists = false;
        state.errorMsg = action.payload || '';
      })

      // Обрабатываем Thunk fetchRemind
      .addCase(fetchRemind.pending, (state) => {
        state.waiting = true;
        state.errorMsg = ''
      })
      .addCase(fetchRemind.fulfilled, (state) => {
        state.waiting = false;
        state.exists = true;
      })
      .addCase(fetchRemind.rejected, (state, action) => {
        state.token = '';
        state.waiting = false;
        state.exists = false;
        state.errorMsg = action.payload || '';
      })
  },
});

export const {authRemind} = authSlice.actions;
export default authSlice.reducer;