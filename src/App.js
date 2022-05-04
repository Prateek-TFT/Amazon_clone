import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import { MovieDisplay } from "./pages/MovieDisplay";
import Signin from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { AuthContext } from "./store/AuthContext";
import "./styles/App.css";
function App() {
  const authctx = useContext(AuthContext);
  const isLogin = authctx.isLogin;
  return (
    <Routes>
      {!isLogin && <Route path="/signin" element={<Signin />} />}
      {!isLogin && (
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      )}
      {!isLogin && <Route path="/signup" element={<Signup />} />}
      {isLogin && <Route path={"/home"} element={<MovieDisplay />} />}
      {/* here we can add more pages to above Route */}
      <Route
        path="*"
        element={<Navigate to={isLogin ? "/home" : "/signin"} />}
      />
    </Routes>
  );
}

export default App;
