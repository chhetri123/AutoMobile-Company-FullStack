import React from "react";
import NavBar from "../../Template/NavBar/NavBar";

const navItems = {
  role: "User",
  items: [
    { title: "Home", link: "/" },
    { title: "Brand", link: "/brand" },
    { title: "Model", link: "/model" },
  ],
};

const UserNavBar = () => {
  return (
    <>
      <NavBar navItems={navItems} />
    </>
  );
};
export default UserNavBar;
