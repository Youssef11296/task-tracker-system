import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import ConfirmComponent from "../../components/uiComponents/sharedComponents/ConfirmComponent";
import { useState } from "react";
import { Button } from "@mui/material";

const MainHeader = () => {
  const { isAuthenticated } = useAuth();

  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false);
  const onOpenConfirmModal = () => setOpenConfirmModal(true);
  const onCloseConfirmModal = () => setOpenConfirmModal(false);

  return (
    <header>
      <div className="logo">
        <img src="../../src/assets/images/logo3.jpg" alt="Logo" />
      </div>
      {
        isAuthenticated ? <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/my-tasks">My Tasks</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Button
                variant="outlined"
                onClick={onOpenConfirmModal}
                sx={{ textTransform: "capitalize" }}
              >
                Logout
              </Button>
            </li>
          </ul>
        </nav> : null
      }

      <ConfirmComponent
        purpose="LOGOUT"
        question="You're sure you want to log out?"
        open={openConfirmModal}
        onClose={onCloseConfirmModal}
      />
    </header>
  );
};

export default MainHeader;
