import { createAsyncThunk } from "@reduxjs/toolkit";
import {toast} from "react-hot-toast";
import Services from "../../services";
import { FetchTableData } from "../../interface";
import { RootState } from "../store";

interface ResTableData {
  data: FetchTableData[]
}

export const fetchGetData = createAsyncThunk<ResTableData, undefined, { rejectValue: string, extra: Services }>(
  'getdata/fetch',
  async (_, { rejectWithValue, extra }) => {
    const response = await extra.api.request({
      url: "/ru/data/v3/testmethods/docs/userdocs/get",
      method: "GET"
    })

    console.log(response)
    if(response) {

      return response;
    } else {
      return rejectWithValue("Неизвестная ошибка");
    }
  },
  {
    condition(_, {getState}) {
      const exists = (getState() as RootState).auth.exists;
      return exists;
    }
  }
);

export const fetchSetData = createAsyncThunk<FetchTableData, {rowData: FetchTableData}, { rejectValue: string, extra: Services }>(
  'setdata/fetch',
  async ({rowData}, { rejectWithValue, extra }) => {
    const response = await toast.promise(extra.api.request({
      url: `/ru/data/v3/testmethods/docs/userdocs/set/${rowData.id}`,
      method: "POST",
      body: JSON.stringify(rowData)
    }), {
      loading: 'Loading...',
      success: 'Data Loaded',
      error: 'Failed to load data'
    })

    console.log(response)
    if(response) {

      return response;
    } else {
      return rejectWithValue("Неизвестная ошибка");
    }
  }
);