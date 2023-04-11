import { shallowEqual } from "react-redux";

import { useAppSelector, useAppDispatch } from "../../hooks/redux-hook";
import { fetchSetData } from "../../storeRedux/table-data/thunk";

import AuthBlock from "../../components/auth-block";
import TableMain from "../../components/table-main";
import Loader from "../../components/loader";
import { FetchTableData } from "../../interface";

function MainContent() {
  const dispatch = useAppDispatch();

  const select = useAppSelector(state => ({
    exists: state.auth.exists,
    data: state.tableData.data,
    waitingData: state.tableData.waiting,
    waiting: state.auth.waiting,
    // waitingRow: state.tableData.waitingRow
  }), shallowEqual);

  console.log(select);

  const onUpdatingRow = (rowData: FetchTableData) => {
    dispatch(fetchSetData({rowData}))
  }

  const whoIsComponent = () => {
    if(select.waiting || select.waitingData) {
      return <Loader/>
    }

    if(select.exists) {
      return <TableMain data={select.data} onUpdatingRow={onUpdatingRow}/>
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