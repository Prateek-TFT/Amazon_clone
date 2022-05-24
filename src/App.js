import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/Route/PrivateRoute";
import Spinner from "./components/UI/Spinner";
import { useAuth } from "./store/AuthProvider";

const SignUp = React.lazy(()=>import('./pages/Auth/SignUp'));
const SignIn = React.lazy(()=>import('./pages/Auth/SignIn'));
const ForgotPassword = React.lazy(()=>import('./pages/Auth/ForgotPassword'));
const Home = React.lazy(()=>import('./pages/Home'));
const MovieDesc = React.lazy(()=>import('./pages/MovieDesc'));
const MyStuff = React.lazy(()=> import('./pages/MyStuff'));
const MoviePlayer=React.lazy(()=>import('./components/Movie/MoviePlayer/MoviePlayer'))

const App = () => {
  const { user } = useAuth();

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/detail/:id" element={<MovieDesc/>}/>
        <Route path="/player" element={<MoviePlayer/>}/>
        <Route path="/mystuff" element={<PrivateRoute />} >
          <Route path="/mystuff" element={<MyStuff />} />
        </Route>
        <Route path="/signin" element={user ? <Navigate to="/" />:<SignIn />} />
        <Route path="/signup" element={user ? <Navigate to="/" />:<SignUp />} />
        <Route path="/forgot-password" element={user ? <Navigate to="/" />:<ForgotPassword />} />
      </Routes>
    </Suspense>
  );
};

export default App;
