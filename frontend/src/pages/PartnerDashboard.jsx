import { Routes, Route } from "react-router-dom";
import Sidebar from "../layouts/SideBar";





export default function PartnerDashboard() {
  return (
    <div>
      <Sidebar path="/Partner" />

      <h1>Partner Dashboard</h1>
    </div>
  );
}
