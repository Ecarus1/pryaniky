import { shallowEqual } from "react-redux";

import { useAppSelector } from "../../hooks/redux-hook";

import AuthBlock from "../../components/auth-block";
import TableMain from "../../components/table-main";
import Loader from "../../components/loader";

function MainContent() {

  const select = useAppSelector(state => ({
    exists: state.auth.exists,
    data: state.tableData.data,
    waitingData: state.tableData.waiting,
    waiting: state.auth.waiting
  }), shallowEqual);

  // console.log(select.data)

  const whoIsComponent = () => {
    if(select.waiting || select.waitingData) {
      return <Loader/>
    }

    if(select.exists) {
      return <TableMain data={select.data}/>
    } else {
      return <AuthBlock/>
    }
  }

  return (
    <>
      {whoIsComponent()}
    </>
  );
}

export default MainContent;