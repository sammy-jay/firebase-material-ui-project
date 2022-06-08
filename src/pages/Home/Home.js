import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import {
  Typography,
  Button,
  Container,
  IconButton,
  Stack,
  makeStyles,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Send, KeyboardArrowRight } from "@mui/icons-material";

const useStyles = makeStyles({
  btn: {
    borderRadius: 10,
    backgroundColor: "green",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "green",
    },
  },
  title: {
    textDecoration: "underline",
  },
});

const Home = () => {
  const classes = useStyles();
  // const navigate = useNavigate();
  // const [user, setUser] = useState(null);
  // const handleAuth = onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     setUser(user);
  //   } else {
  //     navigate("/auth");
  //   }
  // });

  // useEffect(() => {
  //   handleAuth();
  // });
  return (
    <Container>
      {/* <Navbar email={user?.email} /> */}
      <Typography
        color="textSecondary"
        variant="h5"
        component="h2"
        gutterBottom
        className={classes.title}
      >
        Todo-Ish
      </Typography>
      <Button
        className={classes.btn}
        variant="contained"
        color="secondary"
        endIcon={<KeyboardArrowRight />}
      >
        Next
      </Button>
    </Container>
  );
};

export default Home;
