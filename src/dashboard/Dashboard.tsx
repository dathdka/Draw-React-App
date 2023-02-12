import React, { useEffect } from "react";
import Sidebar from "./sidebar/Sidebar";
import Home from "./home/Home";
import { connectWithServer } from "../socket";
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
