import React, { useState } from "react";
import classes from "../styles/Signup.module.css";
import Amazon_Logo from "../assets/logo/PrimeLogo.png";
import Important from "../assets/logo/i.png";
export const Signup = () => {
  const [shouldPerformValidation, setShouldPerformValidation] = useState(false);
  const [data, setData] = useState({
    Name: "",
    Email: "",
    Password: "",
    Confirm_password: "",
  });
  const validateEmail = (text, errorMessage = "This is a required field") => {
    if (text.trim().length === 0) {
      return errorMessage;
    }

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(text) ? "" : "Please enter valid email";
  };
  const validatePassword = (
    text,
    errorMessage = "This is a required field"
  ) => {
    if (text.trim().length === 0) {
      return errorMessage;
    }
    let reg =
      /^(?=.*[0-9])(?=.*[!@#$%^&*?)(])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*?)(]{6,12}$/;
    return reg.test(text)
      ? ""
      : "Password Must contain at least one number and one uppercase and lowercase letter";
  };
  const checkForEmpty = (text, errorMessage = "This is a required field") => {
    if (text.length === 0) {
      return errorMessage;
    }
    return "";
  };
  const validateConfirmPassword = (
    password1,
    password2,
    errorMessage = "Password does not match"
  ) => {
    if (password2.trim().length === 0) {
      return "This is a required field";
    }
    if (password1 === password2) {
      return "";
    }
    return errorMessage;
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onSubmitHandler = () => {
    setShouldPerformValidation(true);
    if (
      !checkForEmpty(data.Name) &&
      !validateEmail(data.Email) &&
      !validatePassword(data.Password) &&
      !validateConfirmPassword(data.Password, data.Confirm_password)
    ) {
      setShouldPerformValidation(false);
      console.log(data);
    }
  };
  return (
    <div className={classes.container}>
      <img className={classes.logo} src={Amazon_Logo} />
      <div className={classes.formdiv}>
        <div className={classes.formdivinner}>
          <h1>Create account</h1>
          <label>Your name</label>
          <input name="Name" onChange={onChangeHandler}></input>
          <p className={classes.errorp}>
            {shouldPerformValidation && checkForEmpty(data.Name)}
          </p>
          <label>Email</label>
          <input name="Email" onChange={onChangeHandler}></input>
          <p className={classes.errorp}>
            {shouldPerformValidation && validateEmail(data.Email)}
          </p>
          <label>Password</label>
          <input name="Password" onChange={onChangeHandler}></input>
          <p className={classes.errorp}>
            {shouldPerformValidation && validatePassword(data.Password)}
          </p>
          <div className={classes.alignbox}>
            <img className={classes.iLogo} src={Important}></img>
            <span>Passwords must be at least 6 characters</span>
          </div>
          <label>Re-enter password</label>
          <input name="Confirm_password" onChange={onChangeHandler}></input>
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
          <hr></hr>
          <div>
            <p>Already have an account?</p>
            <p className={classes.pLink}>Sign-in</p>
          </div>
        </div>
      </div>
    </div>
  );
};
