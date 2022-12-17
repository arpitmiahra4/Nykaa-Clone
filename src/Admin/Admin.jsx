import './Admin.module.css'
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";


import "react-toastify/dist/ReactToastify.css";


import AdminLoginPage from './AdminPages/AdminLoginPage'
import AdminUsersList from "./AdminPages/AdminUsersList";

import AdminHomePage from "./AdminPages/AdminHomePage";
import AdminFooter from "./Admincomponents/AdminFooter";
function Admin() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}



        
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      


      <Routes>
        <Route path="/" element={<AdminLoginPage />} />
        <Route path="/profile" element={<AdminHomePage/>} />
        <Route path="/users" element={<AdminUsersList />} />
      </Routes>
      <AdminFooter />
    </>
  );
}

export default Admin;