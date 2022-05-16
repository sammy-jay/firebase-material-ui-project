import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const handleAuth = onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      navigate("/auth");
    }
  });

  useEffect(() => {
    handleAuth();
  });
  return (
    <main>
      <Navbar email={user?.email} />
    </main>
  );
};

export default Home;
