import { useState } from "react"
import { Login } from "../../Login/login";
import SignUpPage from "../../SignUp/signUp";

export const SwitchLoginSignUpContent = () => {
    const [switchLoginSignUp, setswitchLoginSignUp] = useState(false);
    const handleSwitchLoginSignUp = () => {
        setswitchLoginSignUp(!switchLoginSignUp);
    }
    return (<>
        <div className="create_account x_small_font_size">
            {switchLoginSignUp ? "You" : "Don't"} have an account with Practice
            <span onClick={handleSwitchLoginSignUp} className="px-2 submit_color pointer">{switchLoginSignUp ? "Login" : "Create Account"}</span>
        </div>
    </>)
}

export const SwitchLoginSignUpComponent = () => {
    return (
        <>
        <Login/>
        <SignUpPage/>
        </>
    )
}


