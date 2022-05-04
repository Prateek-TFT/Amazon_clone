import React, { useContext, useState } from "react";
import styles from "../styles/Signin.module.css";
import Prime_logo from "../assets/logo/PrimeLogo.png";
import { Link, useNavigate } from "react-router-dom";
import EmailSignIn from "../components/EmailSignIn";
import { validateEmail, validatePassword } from "../components/Validations";
import { AuthContext } from "../store/AuthContext";
const Signin = () => {
  const authCtx = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
  };
  const createAccountHandler = () => {
    navigate("/signup");
  };
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    setError(true);
    if (!validateEmail(email) && !validatePassword(password)) {
      setError(false);
      const data = await EmailSignIn(email, password);
      authCtx.setLogin(data.user.accessToken);
      if (data) {
        setEmail("");
        setPassword("");
      }
    }
  };
  const inputClass = error ? styles.invalid : styles.form;
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={Prime_logo} alt="" />
      <div className={styles.outer_box}>
        <div className={styles.signin}>
          <div className={styles.title}>Sign-In</div>
          <form className={inputClass} onSubmit={formSubmitHandler}>
            <label>Email</label>
            <input type="email" value={email} onChange={changeEmailHandler} />
            {error ? <p>{validateEmail(email)}</p> : <p />}
            <div className={styles.password}>
              <label>Password</label>
              <Link to="/forgotpassword" className={styles.forget_pwd}>
                Forgot your password?
              </Link>
            </div>
            <input
              type="password"
              value={password}
              onChange={changePasswordHandler}
            />
            {error ? <p>{validatePassword(password)}</p> : <p />}
            <button className={styles.button}>Sign-In</button>
          </form>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <label>
            <input type="checkbox" />
            Keep me signed in.
          </label>

          <div className={styles.horizontal}>
            <span>New to Amazon?</span>
          </div>

          <button
            className={styles.button_signup}
            onClick={createAccountHandler}
          >
            Create your Amazon account
          </button>
        </div>
      </div>
    </div>
  );
};
export default Signin;
