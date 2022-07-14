import React from "react";
import NavBar from "../../Template/NavBar/NavBar";
const navItems = {
  role: "Admin",
  items: [
    { title: "Home", link: "/admin" },
    { title: "Customer", link: "/admin/customer" },
    { title: "Car", link: "/admin/car" },
    { title: "Model", link: "/admin/model" },
    { title: "Brand", link: "/admin/brand" },
    { title: "Dealer", link: "/admin/dealer" },
    { title: "Sales", link: "/admin/Sales" },
  ],
};
const NavList = ({ title }) => {
  return (
    <>
      <NavBar navItems={navItems} />
    </>
  );
};

export default NavList;
