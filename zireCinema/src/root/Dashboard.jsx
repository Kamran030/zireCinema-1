import React from "react";
import { Route, Routes, useParams } from "react-router-dom";

import Home from "../Userpages/Home/Home";
import AboutUs from "../Userpages/aboutUs/AboutUs";
import Admin from "../adminPanel/Admin";
import SignInAdmin from "../adminPanel/pages/SignInAdmin";
import SelectedMovie from "../Userpages/selectedMovie/SelectedMovie";

const Dashboard = () => {
  let { userId, moviesId } = useParams();
  return (
    <div className="appContainer">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/movies/:moviesId" element={<SelectedMovie />} />
        <Route path="/admin/:userId" element={<Admin />} />
        <Route path="/admin" element={<SignInAdmin />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default Dashboard;