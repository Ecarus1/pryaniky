import { ThunkAction } from "redux-thunk";
import { RootState } from "../interface";
import { AnyAction } from 'redux';

import Services from "../../services";

export type AuthAction = ThunkAction<void, RootState, Services, AnyAction>;

const authActions = {
  load: (user: any): AuthAction  => {
    return async(dispatch, getState, services)=> {
    }
  },
}

export default authActions