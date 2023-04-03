import { useStore, shallowEqual} from "react-redux";

import { useAppDispatch, useAppSelector } from "../../hooks/redux-hook";
import FormLogin from "../../components/form-login";
import { fetchAuth } from "../../storeRedux/auth/thunk";


function Login() {
  // const store = useStore();
  const dispatch = useAppDispatch();

  const select = useAppSelector(state => ({
    token: state.auth.token,
    waiting: state.auth.waiting
  }), shallowEqual);

  const authSystemUser = (user: any) => {
    dispatch(fetchAuth({user}));
  }

  return (
    <FormLogin authSystemUser={authSystemUser}/>
  );
}

export default Login;