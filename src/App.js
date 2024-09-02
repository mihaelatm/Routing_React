import { Route, Routes } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import Users from "./pages/User";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/user/:userId" element={<UserProfile />} />
    </Routes>
  );
}

export default App;
