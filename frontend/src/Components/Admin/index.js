import NavBar from "./Nabar/NavBar";
import Header from "./Header/Header";
import Content from "./Content/Content";

function DashBoard() {
  return (
    <div className="wrapper align-items-stretch">
      <NavBar />
      <Header />
      <Content />
    </div>
  );
}

export default DashBoard;
