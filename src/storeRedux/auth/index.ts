import { createSlice, PayloadAction} from "@reduxjs/toolkit";
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
  reducers: {
    authRemind: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.waiting = true;
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.token = action.payload.data.token;
        state.waiting = false;
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.token = '';
        state.waiting = false;
      })
  },
});

export const {authRemind} = authSlice.actions;
export default authSlice.reducer;