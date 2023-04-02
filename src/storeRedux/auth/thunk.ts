import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const fetchAuth = createAsyncThunk(
  'auth/fetch',
  async (user) => {
    const response = await fetch(user);
    return response;
  }
);