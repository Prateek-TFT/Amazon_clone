import React, { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

export const Footer = () => {
  const autCtx = useContext(AuthContext);

  return <button onClick={() => autCtx.setLogout()}>Signout</button>;
};
