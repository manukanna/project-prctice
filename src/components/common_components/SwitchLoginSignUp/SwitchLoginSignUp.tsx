import { Login } from "../../Login/login";
import SignUpPage from "../../SignUp/signUp";
import { useDispatch, useSelector } from "react-redux";
import { swicthLoginSignUpComponent } from "../../Redux/practiceSlice";

export const SwitchLoginSignUpContent = () => {
    const dispatch = useDispatch()
    const { switchLoginSignUp } = useSelector((state: any) => state.swicthLoginSignUpComponent);
    const handleSwitchLoginSignUp = () => {
        dispatch(swicthLoginSignUpComponent(switchLoginSignUp));
    }
    return (<>
        <div className="create_account x_small_font_size">
            {switchLoginSignUp ? "You" : "Don't"} have an account with Practice
            <span onClick={handleSwitchLoginSignUp} className="px-2 submit_color pointer">{switchLoginSignUp ? 'Login' : 'Create Account'}</span>
        </div>
    </>)
}

export const SwitchLoginSignUpComponent = () => {
    const { switchLoginSignUp } = useSelector((state: any) => state.swicthLoginSignUpComponent);
    return (
        <>
            {switchLoginSignUp ? <SignUpPage /> : <Login />}
        </>
    )
}


