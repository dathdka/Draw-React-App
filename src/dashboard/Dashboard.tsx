import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Home from './home/Home'


const Dashboard: React.FC = () => {
  return (
    <div style={{display : 'flex'}}>
      <Sidebar/>
      <Home/>
    </div>
  );
};
export default Dashboard