import { useState } from "react";
import "../global_styles/loginSignUp.scss";
import { SwitchLoginSignUpContent } from "../common_components/SwitchLoginSignUp/SwitchLoginSignUp";
import { DangerAlert } from "../common_components/alert_component/Alert_Component";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  const { signUpDetails } = useSelector((state: any) => state.updateSignUpData);
  const [userCreds, setUserCred] = useState({ name_email: "", password: "" });
  const [alertError, setalertError] = useState({
    showAlert: false,
    message: "",
    alertColor: "",
  });
  const [showHidePassword, setshowHidePassword] = useState(false);
  const hideShowPassword = () => {
    setshowHidePassword(!showHidePassword);
  };
  const userCredsChange = (e: { target: any }) => {
    setUserCred({ ...userCreds, [e.target.name]: e.target.value });
  };
  const submitUserCreds = () => {
    if (userCreds.name_email === "" || userCreds.password === "") {
      setalertError({
        showAlert: true,
        message: "Please verify your Username or Password.",
        alertColor: "dangerBackground",
      });
      setTimeout(() => {
        setalertError({ showAlert: false, message: "", alertColor: "" });
      }, 2000);
    } else {
      if (
        signUpDetails.email === userCreds.name_email &&
        signUpDetails.password === userCreds.password
      ) {
        navigate("/stepper");
      } else {
        setalertError({
          showAlert: true,
          message: "Please verify your Username or Password.",
          alertColor: "dangerBackground",
        });
        setTimeout(() => {
          setalertError({ showAlert: false, message: "", alertColor: "" });
        }, 2000);
      }
    }
  };
  return (
    <>
      <div className="contaner position-relative">
        <div className="loginSignUp_component">
          <div className="d-flex justify-content-center align-items-center full_min_height">
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-xs-12">
              <div className="loginSignUp_box p-4 rounded text_center ">
                <h3 className="my-2">Welcome Practice</h3>
                <h6 className="mb-4 medium_font_size">
                  Please Enter below Details to Experience
                </h6>
                <div>
                  <div className="input_parent w-100 my-2 text_starting">
                    <label htmlFor="name_email">Username / Email*</label>
                    <input
                      onChange={userCredsChange}
                      type="text"
                      id="name_email"
                      name="name_email"
                      className="w-100 px-2 py-2 input_focus_none"
                      autoComplete="off"
                    />
                  </div>
                  <div className="input_parent my-2 text_starting position-relative">
                    <label htmlFor="password">Password*</label>
                    <input
                      onChange={userCredsChange}
                      type={showHidePassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className="w-100 ps-2 pe-5 py-2 input_focus_none"
                    />
                    <div
                      className="password_icons position-absolute"
                      onClick={hideShowPassword}
                    >
                      {showHidePassword ? (
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
                  </div>
                  <div className="forgot_password text_end pointer text-decoration-underline">
                    Forgot Password
                  </div>
                  <div
                    className="btn btn-primary my-2 submitButton w-100 py-2 my-3"
                    onClick={submitUserCreds}
                  >
                    Login Practice
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <hr className="w-50" />
                    <span className="px-2 small_font_size">or</span>
                    <hr className="w-50" />
                  </div>
                  <SwitchLoginSignUpContent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {alertError.showAlert && <DangerAlert alertMessage={alertError} />}
    </>
  );
};
