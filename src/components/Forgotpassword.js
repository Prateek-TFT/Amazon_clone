import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
const Forgotpassword = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Passsword Reset Email Sent Successfully");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
};
export default Forgotpassword;
