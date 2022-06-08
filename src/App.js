import "./App.css";
import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
// import Auth from "./pages/Auth/Auth";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    cpassword: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [error, setError] = useState({
    text: "",
    visible: false,
  });
  const handleSubmit = () => {
    setError({ text: "", visible: false });
    if (formData.email && formData.password && formData.cpassword) {
      if (formData.email.includes("@") && formData.email.includes(".")) {
        if (formData.password === formData.cpassword) {
          setError({ text: "User Created", visible: true });
        } else {
          setError({ text: "Passwords do not match", visible: true });
        }
      } else {
        setError({ text: "Invalid email", visible: true });
      }
    } else {
      setError({ text: "Field(s) can't be empty", visible: true });
    }
  };
  return (
    <div>
      <Box
        component="form"
        noValidate
        sx={{ mr: "auto", ml: "auto", mt: 1, width: 400 }}
      >
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Login to account
        </Typography>
        <TextField
          value={formData.email}
          name="email"
          onChange={handleChange}
          margin="normal"
          fullWidth
          label="Email Address"
          autoComplete="email"
          autoFocus
        />
        <Typography variant="body1" color="textSecondary" gutterBottom>
          We'll never share your email with anyone else
        </Typography>
        <TextField
          value={formData.password}
          name="password"
          onChange={handleChange}
          margin="normal"
          fullWidth
          label="Password"
          type="password"
        />
        <TextField
          value={formData.cpassword}
          name="cpassword"
          onChange={handleChange}
          margin="normal"
          fullWidth
          label="Confirm Password"
          type="password"
        />
        <Typography
          variant="body1"
          color="error"
          data-testid="error-msg"
          gutterBottom
          sx={{ display: error.visible ? "block" : "none" }}
        >
          {error.text}
        </Typography>
        <Button
          onClick={handleSubmit}
          type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
      <img src="#" alt="img-tag" />
    </div>
  );
}

export default App;
