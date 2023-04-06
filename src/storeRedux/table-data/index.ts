import { createSlice} from "@reduxjs/toolkit";
import { fetchGetData } from "./thunk";

interface TableDataState {
  data: any[];
  waiting: boolean;
  errorMsg: string;
}

const initialState: TableDataState = {
  data: [],
  waiting: false,
  errorMsg: ''
}

const tableDataSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
    .addCase(fetchGetData.pending, (state) => {
      state.waiting = true;
      state.errorMsg = ''
    })
    .addCase(fetchGetData.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.waiting = false;
    })
    .addCase(fetchGetData.rejected, (state, action) => {
      state.waiting = false;
      state.errorMsg = action.payload || '';
    })
  },
});

// export const {authRemind} = authSlice.actions;
export default tableDataSlice.reducer;