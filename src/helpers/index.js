export function checkValidationName(value) {
  if (value.length && value.length < 15) {
    return true;
  }
  return false;
}

export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function checkPhoneNumber(number) {
  
  if (String(number).length > 10 || isNaN(number)) {
    return false;
  }
  return true;
}
