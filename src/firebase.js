import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCn-yLerKZQRnp5NgcS8FYDIJGHVIHYr4k",
  authDomain: "todo-ish-5c83c.firebaseapp.com",
  projectId: "todo-ish-5c83c",
  storageBucket: "todo-ish-5c83c.appspot.com",
  messagingSenderId: "320549407857",
  appId: "1:320549407857:web:c9c690eb0f35276ceb9fd0",
  measurementId: "G-BLYRTY6CLW",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
