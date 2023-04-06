import { createAsyncThunk } from "@reduxjs/toolkit";
import Services from "../../services";
import { RootState } from "../store";
import { IUser } from "../../interface";

interface UserAuth {
  data: {
    token: string;
  }
}

export const fetchAuth = createAsyncThunk<UserAuth, { user: IUser}, { rejectValue: string, extra: Services }>(
  'auth/fetch',
  async ({ user }, { rejectWithValue, extra }) => {
    const response = await extra.api.request({
      url: "/ru/data/v3/testmethods/docs/login",
      method: "POST",
      body: JSON.stringify(user)
    });

    if(response.data) {
      localStorage.setItem('token', response.data.token);

      extra.api.setHeader('x-auth', response.data.token);
      
      return response;
    } else {
      return rejectWithValue(response.message || "Неверный логин или пароль");
    }
  }
);

export const fetchRemind = createAsyncThunk<string, undefined, { rejectValue: string, extra: Services}>(
  'remind/fetch',
  async (_, { rejectWithValue, extra, getState }) => {
    //Так как это тз, то я предполагаю, что здесь в последствии будет идти восстановление учётной записи по токену
    //будем отправлять на сервер токен, а он вернёт уже все данные о юзере

    const token = (getState() as RootState).auth.token;

    if(token) {
      extra.api.setHeader('x-auth', token);

      return token;
    } else {
      return rejectWithValue("Неизвестная ошибка");
    }
  },
  {
    condition(_, { getState }) {
      const token = (getState() as RootState).auth.token;
      return !!token;
    },
  }
);