import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import ConfirmComponent from "../../components/sharedComponents/ConfirmComponent";
import { useState } from "react";
import { Button } from "@mui/material";

const MainHeader = () => {
  const { isAuthenticated } = useAuth();

  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false);
  const onOpenConfirmModal = () => setOpenConfirmModal(true);
  const onCloseConfirmModal = () => setOpenConfirmModal(false);

  return (
    <header>
      <h2>LOGO</h2>
      <nav>
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
          {isAuthenticated ? (
            <li>
              <Button
                variant="outlined"
                onClick={onOpenConfirmModal}
                sx={{ textTransform: "capitalize" }}
              >
                Logout
              </Button>
            </li>
          ) : null}
        </ul>
      </nav>

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
