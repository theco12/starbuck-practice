import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import Nav from "./Layout/Nav";
import MainBanner from "./components/MainBanner";

const Router = () => {
  return (
    <div>
      <Nav />
      <MainBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/MyPage" element={<MyPage />} />
      </Routes>
    </div>
  );
};

export default Router;
