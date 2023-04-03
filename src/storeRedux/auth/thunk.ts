import { createAsyncThunk } from "@reduxjs/toolkit";
import Services from "../../services";

interface UserAuth {
  data: {
    token: string;
  }
}

export const fetchAuth = createAsyncThunk<UserAuth, { user: object }, { extra: Services }>(
  'auth/fetch',
  async ({ user }, { rejectWithValue, extra }) => {
    const response = await extra.api.request({
      url: "/ru/data/v3/testmethods/docs/login",
      method: "POST",
      body: JSON.stringify(user)
    });

    if(response.data) {
      localStorage.setItem('token', response.data.token);
      // extra.api.setHeader()
      return response;
    } else {
      return rejectWithValue("ошибка")
    }
  }
);