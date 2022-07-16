import NavBar from "./Nabar/NavBar";
import Header from "./Header/Header";
import Content from "./Content/Content";
import { Routes, Route } from "react-router-dom";

function DashBoard() {
  return (
    <div className="wrapper align-items-stretch">
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/customer" element={<Content tableName={"customer"} />} />
        <Route path="/model" element={<Content tableName={"model"} />} />
        <Route path="/brand" element={<Content tableName={"brand"} />} />
        <Route path="/car" element={<Content tableName={"car"} />} />
        <Route path="/dealer" element={<Content tableName={"dealer"} />} />
        <Route
          path="/inventory"
          element={<Content tableName={"inventory"} />}
        />
        <Route path="/sales" element={<Content tableName={"sales"} />} />
      </Routes>
    </div>
  );
}

export default DashBoard;
