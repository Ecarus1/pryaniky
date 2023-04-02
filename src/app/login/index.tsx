import {useStore} from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import FormLogin from "../../components/form-login";
import authActions from "../../store/auth/actions";

import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../store/interface";
import Services from "../../services";
import {AnyAction} from "redux";
import { AuthAction } from "../../store/auth/actions";
import { AuthActions } from "../../store/auth/actions";



export type AppDispatch = ThunkDispatch<RootState, Services, AnyAction>;

function Login() {
  const store = useStore();
  // store.dispatch(actions.load)

  const select = useTypedSelector(state => ({
    JWT: state.auth.token,
  }));

  const authSystemUser = (user: any) => {
    console.log();
    store.dispatch(authActions.load(user))
  }

  return (
    <FormLogin authSystemUser={authSystemUser}/>
  );
}

export default Login;