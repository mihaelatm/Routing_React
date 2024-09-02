import { Route, Routes } from "react-router-dom";
import "./App";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";
import NavBar from "./components/NavBar";
import styles from "./styles.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:userId/:username" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
