import SideBar from "./Nabar/SideBar";
import Header from "./Header/Header";
import Content from "./Content/Content";

function DashBoard() {
  return (
    <div className="wrapper d-flex align-items-stretch">
      <SideBar />
      <div>
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default DashBoard;
