import { createAsyncThunk } from "@reduxjs/toolkit";
import Services from "../../services";
import { FetchTableData } from "../../interface";

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
  }
);