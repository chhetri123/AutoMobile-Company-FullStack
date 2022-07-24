import React from "react";
import NavBar from "../../Template/NavBar/NavBar";

const navItems = {
  role: "User",
  link: "/admin",
  items: [
    { title: "Home", link: "/" },
    { title: "Brand", link: "/brand" },
    { title: "Model", link: "/model" },
  ],
};

const UserNavBar = (props) => {
  return (
    <>
      <NavBar
        navItems={navItems}
        handleUser={props.handleUser}
        isStyle={false}
      />
    </>
  );
};
export default UserNavBar;
