import { Route, Routes, Link } from "react-router-dom";
import DashBoard from "./Components/Admin";

import "./App.css";
import CarList from "./Components/User/Car/CarList/CarList";
import BrandList from "./Components/User/Brand/BrandList";
import ModelList from "./Components/User/Model/ModelList";
import CarDetails from "./Components/User/Car/CarDetails/CarDetails";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" exact element={<DashBoard />} />
        <Route path="/" exact element={<BrandList />} />
        <Route path="/brand/:id/model" exact element={<ModelList />} />
        <Route path="/brand/:id1/model/:id/car" exact element={<CarList />} />
        <Route
          path="/brand/:id1/model/:id/car/:id2/details"
          exact
          element={<CarDetails />}
        />
      </Routes>
    </div>
  );
};

export default App;
