import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import ConfirmComponent from "../../components/uiComponents/sharedComponents/ConfirmComponent";
import { useState } from "react";
import { Avatar, Button, IconButton, Popover, Typography } from "@mui/material";
import { USER_ROLE } from "../../utils/constants";

const MainHeader = () => {
  const { isAuthenticated, user } = useAuth();

  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false);
  const onOpenConfirmModal = () => {
    setOpenConfirmModal(true)
    handleClose()
  };
  const onCloseConfirmModal = () => setOpenConfirmModal(false);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <header>
      <div className="logo">
        <img src="../../src/assets/images/logo3.jpg" alt="Logo" />
      </div>
      {
        isAuthenticated ? <nav>
          <ul>
            <li style={{ marginRight: '1rem' }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ marginRight: '1rem' }}>
              <Link to="/my-tasks">Tasks</Link>
            </li>
            <li style={{ marginRight: '1rem' }}>
              <Link to="/packages">Packages</Link>
            </li>
            {
              user?.role?.roleName === USER_ROLE.ADMIN ? <li style={{ marginRight: '1rem' }}>
                <Link to="/admin/users">Users</Link>
              </li> : null
            }
            <li style={{ marginRight: '1rem' }}>
              <Link to="/about">About</Link>
            </li>
            <li>
              <IconButton onClick={handleClick}>
                <Avatar />
              </IconButton>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                sx={{
                  padding: '2rem',
                  width: '300px'
                }}
              >
                <Link to="/user/settings" onClick={handleClose}>
                  <Button sx={{ textTransform: "capitalize" }}>Settings</Button>
                </Link>
                <Button
                  variant="text"
                  sx={{ textTransform: "capitalize" }}
                  onClick={onOpenConfirmModal}
                >
                  Logout
                </Button>
              </Popover>
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
