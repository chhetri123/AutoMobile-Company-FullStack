import { Route, Routes } from "react-router-dom";
import AdminComponent from "./Components/Admin";
import UserComponent from "./Components/User";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" exact element={<AdminComponent />} />
        <Route path="/" exact element={<UserComponent />} />
      </Routes>
    </div>
  );
};

export default App;
