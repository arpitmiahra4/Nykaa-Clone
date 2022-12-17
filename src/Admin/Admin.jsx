import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLoginPage from "./Pages/LoginPage";
import AdminUsersList from "./Pages/UsersList";
import AdminHomePage from "./Pages/HomePage";
import AdminFooter from "./Components/Footer";
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
        <Route path="/profile" element={<AdminHomePage />} />
        <Route path="/users" element={<AdminUsersList />} />
      </Routes>
      <AdminFooter />
    </>
  );
}

export default Admin;