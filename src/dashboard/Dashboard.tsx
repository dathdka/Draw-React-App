import React, { useEffect } from "react";
import Sidebar from "./sidebar/Sidebar";
import Home from "./home/Home";
import { connectWithServer } from "../socket";
import * as customInterface from "../interface/customInterface";
import { useState } from "react";
const Dashboard: React.FC = () => {

  useEffect(() => {
    const token = localStorage.getItem("token");
    connectWithServer({ token: token || "" });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Home />
    </div>
  );
};

export default Dashboard;
