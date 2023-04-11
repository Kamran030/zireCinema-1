import React from "react";
import { Route, Routes, useParams } from "react-router-dom";

import Home from "../Userpages/Home/Home";
import AboutUs from "../Userpages/aboutUs/AboutUs";
import SignInAdmin from "../adminPanel/pages/SignInAdmin";
import SelectedMovie from "../Userpages/selectedMovie/SelectedMovie";
import AdminUsers from "../adminPanel/pages/AdminUsers";
import AdminAddFilm from "../adminPanel/pages/AdminAddFilm";
import AdminAddSession from "../adminPanel/pages/AdminAddSession";

const Dashboard = () => {
  let { userId, moviesId } = useParams();
  return (
    <div className="appContainer">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/movies/:moviesId" element={<SelectedMovie />} />
        <Route path="/admin" element={<SignInAdmin />} />
        <Route path="/admin/:userId/users" element={<AdminUsers />} />
        <Route path="/admin/:userId/addfilm" element={<AdminAddFilm />} />
        <Route path="/admin/:userId/addsession" element={<AdminAddSession />} />
        <Route
          path="*"
          element={
            <div
              className="d-flex justify-content-center align-items-center text-danger "
              style={{ height: "100vh" }}
            >
              <h1 style={{ fontSize: "80px" }}>404 Not Found</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default Dashboard;
