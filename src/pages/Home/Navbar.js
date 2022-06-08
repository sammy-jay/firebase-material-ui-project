import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import Button from "@mui/material/Button";
import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar({ email }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/auth");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ p: 0.25 }}>
        <Toolbar>
          <IconButton
            sx={{ display: { xs: "block", sm: "none" }, color: "#fff" }}
          >
            <Menu />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {email}
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Button
            onClick={handleLogout}
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#be4646" }}
          >
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
