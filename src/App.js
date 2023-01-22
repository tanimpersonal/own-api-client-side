import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllUser from "./components/AllUser/AllUser";
import RandomUser from "./components/RandomUser/RandomUser";
import SaveUser from "./components/SaveUser/SaveUser";
import UpdateUser from "./components/UpdateUser/UpdateUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={AllUser}></Route>
      <Route path="/random" element={RandomUser}></Route>
      <Route path="/save-user" element={SaveUser}></Route>
      <Route path="/update-user" element={UpdateUser}></Route>
    </Routes>
  );
}

export default App;
