import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../common/Layout";
import Home from "../common/Home";
import Nopage from "../common/Nopage";
import About from "../common/About";
import MyWork from "../common/MyWork";
const RoutesLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mywork" element={<MyWork />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesLayout;
