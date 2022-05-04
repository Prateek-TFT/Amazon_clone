import React, { useContext, useState } from "react";
import classes from "../styles/Signup.module.css";
import Amazon_Logo from "../assets/logo/PrimeLogo.png";
import Important from "../assets/logo/i.png";
import EmailSignUp from "../components/EmailSignup";
import {
  checkForEmpty,
  validateConfirmPassword,
  validateEmail,
  validatePassword,
} from "../components/Validations";
import { AuthContext } from "../store/AuthContext";
import { Link } from "react-router-dom";
export const Signup = () => {
  const Authctx = useContext(AuthContext);

  const [shouldPerformValidation, setShouldPerformValidation] = useState(false);
  const [data, setData] = useState({
    Name: "",
    Email: "",
    Password: "",
    Confirm_password: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onSubmitHandler = async () => {
    setShouldPerformValidation(true);
    if (
      !checkForEmpty(data.Name) &&
      !validateEmail(data.Email) &&
      !validatePassword(data.Password) &&
      !validateConfirmPassword(data.Password, data.Confirm_password)
    ) {
      setShouldPerformValidation(false);
      const Credential = await EmailSignUp(data.Email, data.Password);
      // Authctx.setLogin(Credential.user.accessToken);
      if (Credential) {
        setData({
          Name: "",
          Email: "",
          Password: "",
          Confirm_password: "",
        });
      }
    }
  };
  return (
    <div className={classes.container}>
      <img className={classes.logo} src={Amazon_Logo} alt="amazon_logo" />
      <div className={classes.formdiv}>
        <div className={classes.formdivinner}>
          <h1>Create account</h1>
          <label>Your name</label>
          <input
            value={data.Name}
            name="Name"
            onChange={onChangeHandler}
          ></input>
          <p className={classes.errorp}>
            {shouldPerformValidation &&
              checkForEmpty(data.Name, "Enter your name")}
          </p>
          <label>Email</label>
          <input
            value={data.Email}
            name="Email"
            onChange={onChangeHandler}
          ></input>
          <p className={classes.errorp}>
            {shouldPerformValidation &&
              validateEmail(data.Email, "Enter your email")}
          </p>
          <label>Password</label>
          <input
            value={data.Password}
            type="password"
            name="Password"
            onChange={onChangeHandler}
          ></input>
          <p className={classes.errorp}>
            {shouldPerformValidation &&
              validatePassword(data.Password, "Enter your password")}
          </p>
          <div className={classes.alignbox}>
            <img className={classes.iLogo} src={Important} alt="ilogo"></img>
            <span>Passwords must be at least 6 characters</span>
          </div>
          <label>Re-enter password</label>
          <input
            value={data.Confirm_password}
            type="password"
            name="Confirm_password"
            onChange={onChangeHandler}
          ></input>
          <p className={classes.errorp}>
            {shouldPerformValidation &&
              validateConfirmPassword(data.Password, data.Confirm_password)}
          </p>
          <button className={classes.buttonstyle} onClick={onSubmitHandler}>
            Create your Amazon account
          </button>
          <p>
            By creating an account you agree to Amazon's
            <p className={classes.pLink}> Conditions of Use</p> and{" "}
            <p className={classes.pLink}>Privacy Notice</p>
          </p>
          <br></br>
          <hr className={classes.hr}></hr>
          <div>
            <p>Already have an account?</p>
            <Link style={{ textDecoration: "none" }} to="/signin">
              <p className={classes.pLink}>Sign-in</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
