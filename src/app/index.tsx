import { useLayoutEffect } from "react";
import {Routes, Route} from "react-router-dom";
import { useAppDispatch } from "../hooks/redux-hook";
import Protected from "../hoc/protected";
import PublicRoute from "../hoc/public-route";
import { fetchRemind } from "../storeRedux/auth/thunk";

import Login from "./login";
import Main from "./main";

function App() {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(fetchRemind());
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/login" element={<PublicRoute><Login/></PublicRoute>}/>
    </Routes>
  );
}

export default App;