import { useState } from "react";
import "../global_styles/loginSignUp.scss";
import { DangerAlert } from "../common_components/alert_component/Alert_Component";
import { SwitchLoginSignUpContent } from "../common_components/SwitchLoginSignUp/SwitchLoginSignUp";
import { ValidateInputFields, validatePassword } from "../common_Utilis/validationOfInputFields";
import { useDispatch } from "react-redux";
import {
  swicthLoginSignUpComponent,
  updateSignUpData,
} from "../Redux/practiceSlice";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const [showErrorMessage, setshowErrorMessage] = useState({
    showAlert: false,
    message: "",
    alertColor: "",
  });
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    catogery: "",
  });
  const [showHidePassword, setshowHidePassword] = useState(false);
  const[confirmShowHidePassword,setConfirmShowHidePassword]=useState(false);
  const[passwordValidation,setPasswordValidation]=useState("");
  const hideShowPassword = (password: string) => {
    if(password==="password"){
      setshowHidePassword(!showHidePassword);
    }else {
      setConfirmShowHidePassword(!confirmShowHidePassword)
    }
  };
  const handleChange = (e: { target: any }) => {
    setSignUpDetails({ ...signUpDetails, [e.target.name]: e.target.value });
    if (e.target.name === "password") {
      const passwordErrorMessage= validatePassword(e.target.value)
      setPasswordValidation(passwordErrorMessage)
    }
  };
  const handleCreateAccount = (e: any) => {
    e.preventDefault();
    const missingInputField = ValidateInputFields(signUpDetails);
    if (missingInputField) {
      setshowErrorMessage({
        showAlert: true,
        message: `Please verify the ${missingInputField} field`,
        alertColor: "dangerBackground",
      });
      setTimeout(() => {
        setshowErrorMessage({ showAlert: false, message: "", alertColor: "" });
      }, 2000);
    } else {
      setshowErrorMessage({
        showAlert: true,
        message: `your account has been created successfully`,
        alertColor: "successBackground",
      });
      setTimeout(() => {
        setshowErrorMessage({ showAlert: false, message: "", alertColor: "" });
        dispatch(updateSignUpData(signUpDetails));
        dispatch(swicthLoginSignUpComponent(false));
      }, 2000);

      setSignUpDetails({
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        email: "",
        catogery: "",
      });
    }
  };

  let passwordMatch = '';
  if(signUpDetails.password !== signUpDetails.confirmPassword){
    passwordMatch="entered Password is not matching with Confirm Password"
  }
  return (
    <>
      <div className="contaner position-relative">
        <div className="loginSignUp_component">
          <div className="d-flex justify-content-center align-items-center full_min_height">
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-xs-12">
              <div className="loginSignUp_box p-4 rounded text_center ">
                <h3 className="my-2"> SignUp Page</h3>
                <h6 className="mb-4 medium_font_size">
                  Please Enter below Details to Register
                </h6>
                <div>
                  <div className="input_parent w-100 my-2 text_starting">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="FirstName"
                      onChange={handleChange}
                      value={signUpDetails.firstName}
                      className="w-100 px-2 py-2 input_focus_none"
                    />
                    <br />
                  </div>
                  <div className="input_parent my-2 text_starting position-relative">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="LastName"
                      onChange={handleChange}
                      value={signUpDetails.lastName}
                      className="w-100 px-2 py-2 input_focus_none"
                    />
                    <br />
                  </div>
                  <div className="input_parent my-2 text_starting position-relative">
                    <input
                      type="text"
                      name="email"
                      placeholder="email"
                      onChange={handleChange}
                      value={signUpDetails.email}
                      className="w-100 px-2 py-2 input_focus_none"
                    />
                    <br />
                  </div>
                  <div className="input_parent my-2 text_starting position-relative">
                    <input
                      type={showHidePassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                      value={signUpDetails.password}
                      className="w-100 px-2 py-2 input_focus_none"
                    />
                    {passwordValidation && <div className="validate_password">{passwordValidation}
                    </div>}
                    <div
                      className="password_icons_signUp position-absolute"
                      onClick={()=>hideShowPassword("password")}
                    >
                      {showHidePassword ? (
                        <div>
                          <span className="icon_modify pointer material-symbols-outlined">
                            visibility
                          </span>
                        </div>
                      ) : (
                        <div>
                          <span className="icon_modify material-symbols-outlined">
                            visibility_off
                          </span>
                        </div>
                      )}
                    </div>
                    <br />
                  </div>
                  <div className="input_parent my-2 text_starting position-relative">
                    <input
                      type={confirmShowHidePassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="confirmPassword"
                      onChange={handleChange}
                      value={signUpDetails.confirmPassword}
                      className="w-100 px-2 py-2 input_focus_none"
                    />
                    {passwordMatch && <div className="validate_password">{passwordMatch}
                    </div>}
                    <div
                      className="password_icons_signUp position-absolute"
                      onClick={()=>hideShowPassword("confirmPassword")}
                    >
                      {confirmShowHidePassword ? (
                        <div>
                          <span className="icon_modify pointer material-symbols-outlined cursor">
                            visibility
                          </span>
                        </div>
                      ) : (
                        <div>
                          <span className="icon_modify material-symbols-outlined pointer">
                            visibility_off
                          </span>
                        </div>
                      )}
                    </div>
                    <br />
                  </div>
                  <div className="input_parent my-2 text_starting position-relative">
                    <select
                      name="catogery"
                      onChange={handleChange}
                      value={signUpDetails.catogery}
                      className="w-100 px-2 py-2 input_focus_none"
                    >
                      <option value=""> Select catogery</option>
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                      <option value="vendor">Vendor</option>
                    </select>
                    <br />
                  </div>
                  <button
                    type="submit"
                    onClick={handleCreateAccount}
                    className="btn btn-primary my-2 submitButton w-100 py-2 my-3"
                  >
                    Create
                  </button>
                  <SwitchLoginSignUpContent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showErrorMessage.showAlert && (
        <DangerAlert alertMessage={showErrorMessage} />
      )}
    </>
  );
};
export default SignUpPage;
