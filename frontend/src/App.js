import { Route, Routes } from "react-router-dom";
import AdminComponent from "./Components/Admin";
import UserComponent from "./Components/User";
import React, { useState, useEffect } from "react";

import axios from "axios";
import "./App.css";
const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  async function handleUser(data) {
    try {
      const res = await axios.post(`${process.env.REACT_APP_ROOT_API}/admin`, {
        email: data,
      });

      if (res.data.status === 200) {
        localStorage.setItem("isAdmin", JSON.stringify(true));
        setIsAdmin(true);
        window.location.href = "/admin";
      }
    } catch (err) {
      alert(err.response.data.msg);
    }
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("isAdmin"));
    if (items) {
      setIsAdmin(items);
    }
  }, [isAdmin]);
  return (
    <div className="App">
      <Routes>
        {isAdmin ? (
          <Route path="/admin/*" exact element={<AdminComponent />} />
        ) : (
          ""
        )}
        <Route
          path="*"
          exact
          element={<UserComponent handleUser={handleUser} />}
        />
      </Routes>
    </div>
  );
};

export default App;
