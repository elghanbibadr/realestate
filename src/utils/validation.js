export function isValidEmail(email) {
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  let result = validEmailRegex.test(email) ? true : false;
  return result;
}

export function isValidPassword(password) {
  let result = parseInt(password.length) >= 8 ? true : false;
  return result;
}

export function isValidConfirmPassword(password, confirmPassword) {
  return password === confirmPassword;
}

export function isValidRole(role) {
  let result = role.length > 0 ? true : false;
  return result;
}

export function isValidUserName(username) {
  let result = username.length > 0 ? true : false;
  return result;
}

export function isValidForm(errors) {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
}

export function isValidNationalId(nationalId) {
  const nationalIdRegex = new RegExp("^[1|2]{1}[0-9]{9}$");
  let result = nationalIdRegex.test(nationalId) ? true : false;
  return result;
}

export function isValidPhoneNumber(phoneNumber) {
  const phoneNumberRegex = new RegExp(
    /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/
  );
  let result = phoneNumberRegex.test(phoneNumber) ? true : false;
  return result;
}
