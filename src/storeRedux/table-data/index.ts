import { createSlice} from "@reduxjs/toolkit";
import { fetchGetData, fetchSetData } from "./thunk";

type ToastType = "pending" | "failed" | "succeeded";

interface TableDataState {
  data: any[];
  waiting: boolean;
  status: ToastType,
  errorMsg: string;
}

const initialState: TableDataState = {
  data: [],
  waiting: false,
  status: 'pending',
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

    .addCase(fetchSetData.pending, (state) => {
      state.status = "pending";
      state.errorMsg = ''
    })
    .addCase(fetchSetData.fulfilled, (state, action) => {
      state.status = "succeeded";
    })
    .addCase(fetchSetData.rejected, (state, action) => {
      state.status = "failed";
      state.errorMsg = action.payload || '';
    })
  },
});

// export const {authRemind} = authSlice.actions;
export default tableDataSlice.reducer;