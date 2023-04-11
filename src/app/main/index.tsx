import { useAppDispatch } from "../../hooks/redux-hook";

import { fetchGetData } from "../../storeRedux/table-data/thunk";
import { Container } from "@mui/material";
import TopContainer from "../../containers/top";
import MainContent from "../../containers/main-content";
import { useEffect } from "react";

function Main() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetData());
  }, []);

  return (
    <>
      <TopContainer/>
      <MainContent/>
    </>
  );
}

export default Main;