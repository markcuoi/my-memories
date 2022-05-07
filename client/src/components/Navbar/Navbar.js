import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Button,
  Tooltip,
} from "@mui/material";
import memories from "../../images/memories.png";
import useStyles from "./styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const history = useNavigate();
  const location = useLocation();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [user?.token, location]);

  return (
    <AppBar
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 2,
        px: 4,
        my: 4,
        gap: "16px",
      }}
      position="static"
      color="inherit"
    >
      <div
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ color: "#00A4E5", fontWeight: "bold", textDecoration: "none" }}
          variant="h2"
          align="center"
          component={Link}
          to="/"
        >
          Memories
        </Typography>
        <img src={memories} alt="icon" height="40" />
      </div>

      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Tooltip title="Create Post">
              <AddCircleIcon
                onClick={() => {
                  // history.push("/");
                  dispatch({ type: "OPEN_FORM" });
                }}
                color="primary"
                className={classes.addIcon}
              />
            </Tooltip>
            <Tooltip title="Chat">
              <Link to="/chat">
                <TelegramIcon color="primary" className={classes.chatIcon} />
              </Link>
            </Tooltip>
            <div className={classes.titleBar}>
              <Avatar
                className={classes.purple}
                alt={user.result.name}
                src={user.result.imageUrl}
              >
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user.result.name.split(" ")[0]}
              </Typography>
            </div>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
              size="small"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
            size="small"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
