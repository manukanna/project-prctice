
export const ValidateInputFields = (signUpDetails: any) => {

    for (const key in signUpDetails) {
        if (!signUpDetails[key]) {
          return key; // Return the first missing field
        }
      }
      return null; // Return null if all fields are filled
    

}
export const validatePassword = (password: string) => {
  const uppercaseRegex = /[A-Z]/;
  const alphanumericRegex = /[a-zA-Z0-9]/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  const lengthRegex = /^.{10,15}$/;
 
  let errorMessage = "";

switch (true) {
  case !uppercaseRegex.test(password):
    errorMessage = "Password must contain at least one uppercase letter.";
    break;
  case !alphanumericRegex.test(password):
    errorMessage = "Password must contain at least one alphanumeric character.";
    break;
  case !specialCharRegex.test(password):
    errorMessage = "Password must contain at least one special character.";
    break;
  case !lengthRegex.test(password):
    errorMessage = "Password must be between 10 and 15 characters.";
    break; 
  default:
    errorMessage = "";
    break;
}

return errorMessage;
};