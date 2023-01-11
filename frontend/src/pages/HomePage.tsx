import React, { useState } from "react";
import { HomeComponent } from "../components/homeComponents";
import { useSelector } from "react-redux";
import { RootState } from "../context";
import { LoginComponent } from "../components/authComponents";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const [openLogin, setOpenLogin] = useState(false);
  const openLoginForm = () => setOpenLogin((ps) => !ps);

  if (!isAuthenticated)
    return (
      <div className="home-not-auth">
        {openLogin ? (
          <LoginComponent />
        ) : (
          <>
            <p>It seems you're not authenticated!</p>
            <button onClick={openLoginForm}>Login</button>
          </>
        )}
      </div>
    );
  return (
    <div className="home-page">
      <HomeComponent />
      <ToastContainer />
    </div>
  );
};

export default HomePage;
