import React, { useState } from "react";
import Prime_logo from "../assets/logo/PrimeLogo.png";
import styles from "../styles/ForgotPassword.module.css";
import {validateEmail} from '../components/Validations'
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    setError(true);
    if (!validateEmail(email)) {
      try {
        setError(false);
        setIsLoading(true);
      } catch {
        alert("Failed to Reset Password");
      }
      setIsLoading(false);
      setEmail("");
    }
  };
 
  const inputClass = error ? styles.invalid : styles.form;
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={Prime_logo} alt="prome_logo" />
      <div className={styles.outer_box}>
        <div className={styles.forgetPassword}>
          <div className={styles.title}>Password assistance</div>
          <p>Enter the email address associated with your Amazon account.</p>
          <form className={inputClass} onSubmit={formSubmitHandler}>
            <label>Email</label>
            <input type="email" value={email} onChange={changeEmailHandler} />
            {error && <p>{validateEmail(email)}</p>}
            <button className={styles.button} disabled={isLoading}>
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
