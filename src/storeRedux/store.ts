import { configureStore } from '@reduxjs/toolkit'

import Services from '../services';
import authReducer from "./auth";
import tableDataReducer from "./table-data";
import config from '../config';
// ...

const services = new Services(config);


const store = configureStore({
  reducer: {
    auth: authReducer,
    tableData: tableDataReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    { 
      thunk: { 
        extraArgument: services 
      } 
    }
  )
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch