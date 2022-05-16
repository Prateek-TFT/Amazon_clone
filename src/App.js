import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Spinner from "./components/UI/Spinner";
import { useAuth } from "./store/AuthProvider";

const SignUp = React.lazy(()=>import('./pages/SignUp'));
const SignIn = React.lazy(()=>import('./pages/SignIn'));
const ForgotPassword = React.lazy(()=>import('./pages/ForgotPassword'));
const Home = React.lazy(()=>import('./pages/Home'));
const MovieDesc = React.lazy(()=>import('./pages/MovieDesc'));

const App = () => {
  const {user} = useAuth();

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/detail/:id" element={<MovieDesc/>}/>
        <Route path="/signin" element={user ? <Navigate to="/" />:<SignIn />} />
        <Route path="/signup" element={user ? <Navigate to="/" />:<SignUp />} />
        <Route path="/forgot-password" element={user ? <Navigate to="/" />:<ForgotPassword />} />
      </Routes>
    </Suspense>
  );
};

export default App;
