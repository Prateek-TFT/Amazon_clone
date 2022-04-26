export const validateEmail = (
  text,
  errorMessage = "This is a required field"
) => {
  if (text.trim().length === 0) {
    return errorMessage;
  }

  let reg = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(text) ? "" : "Please enter valid email";
};
export const validatePassword = (
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
export const checkForEmpty = (
  text,
  errorMessage = "This is a required field"
) => {
  if (text.length === 0) {
    return errorMessage;
  }
  return "";
};
export const validateConfirmPassword = (
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
