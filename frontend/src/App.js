import { Route, Routes } from "react-router-dom";

import DashBoard from "./Components/Admin";

import "./App.css";
import CarList from "./Components/User/CarList/CarList";
// import CarDetails from "./Components/User/CarDetails/CarDetails";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<CarList />} />
        <Route path="/admin" element={<DashBoard />} />
      </Routes>
    </div>
  );
};

export default App;
