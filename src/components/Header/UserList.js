import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/AuthProvider";
import styles from '../../styles/Navbar.module.css';

const UserList = () => {
  const {user , signout} = useAuth();
  console.log(user)

  const handleSignOut = async() => await signout();
  return (
    <ul className={styles["user-list"]}>
      {
         user ?
          <>
              <li>
                Profile
              </li>
              <li onClick={handleSignOut}>Sign-Out</li>
          </>
         :
          <li>
            <Link to="/signin">Sign In</Link>
          </li>   
      }
      
      <li>Watch Anywhere</li>
      <li>Help</li>
    </ul>
  );
};

export default UserList;
