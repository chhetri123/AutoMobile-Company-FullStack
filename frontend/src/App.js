import { Route, Routes } from "react-router-dom";
import DashBoard from "./Components/Admin";
import NavBar from "./Components/Template/NavBar/NavBar";
import Content from "./Components/Template/Content/Content";
import Footer from "./Components/Template/Footer/Footer";
import CarList from "./Components/User/Car/CarList/CarList";
import BrandList from "./Components/User/Brand/BrandList";
import ModelList from "./Components/User/Model/ModelList";

import CarDetails from "./Components/User/Car/CarDetails/CarDetails";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/admin" exact element={<DashBoard />} />
        <Route path="/" exact element={<Content />} />
        <Route path="/brand" exact element={<BrandList />} />
        <Route
          path="/model"
          exact
          element={<ModelList isModel={true} title={"All Avaiable Models"} />}
        />
        <Route
          path="/model/:id/car"
          exact
          element={
            <CarList isCarFromModel={true} title={"All Avaiable Models"} />
          }
        />

        <Route
          path="/brand/:id1/model/:id/car"
          exact
          isCarFromModel={false}
          element={<CarList />}
        />
        <Route
          path="/brand/:id/model"
          exact
          element={<ModelList isModel={false} />}
        />
        <Route
          path="/brand/:id1/model/:id/car/:id2/details"
          exact
          element={<CarDetails />}
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
