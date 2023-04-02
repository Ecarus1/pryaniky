import {Routes, Route} from "react-router-dom";

import Login from "./login";
import Main from "./main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/main" element={<Main/>}/>
    </Routes>
  );
}

export default App;