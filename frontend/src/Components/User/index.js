import { Route, Routes } from "react-router-dom";
import UserNavBar from "../User/UserNavBar/NavBar";
import Content from "../Template/Content/Content";
import Footer from "../Template/Footer/Footer";
import CarList from "../User/Car/CarList/CarList";
import BrandList from "../User/Brand/BrandList";
import ModelList from "../User/Model/ModelList";

import CarDetails from "../User/Car/CarDetails/CarDetails";
const App = (props) => {
  return (
    <div className="App">
      <UserNavBar handleUser={props.handleUser} />
      <Routes>
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
