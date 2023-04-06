import { shallowEqual } from "react-redux";

import { useAppDispatch, useAppSelector } from "../../hooks/redux-hook";
import FormLogin from "../../components/form-login";
import { fetchAuth } from "../../storeRedux/auth/thunk";
import { IUser } from "../../interface";


function Login() {
  // const store = useStore();
  const dispatch = useAppDispatch();

  const select = useAppSelector(state => ({
    token: state.auth.token,
    waiting: state.auth.waiting,
    errorMsg: state.auth.errorMsg
  }), shallowEqual);

  const authSystemUser = (user: IUser) => {
    dispatch(fetchAuth({user}));
  }

  return (
    <FormLogin authSystemUser={authSystemUser} errorMsg={select.errorMsg}/>
  );
}

export default Login;