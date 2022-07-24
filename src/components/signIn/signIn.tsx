import React, {useContext} from 'react';
import {connect} from "react-redux";
import '../common/common.scss';
import {Context} from "../common/context";
interface IProps {
}

const SignIn: React.FC<IProps> = (props) => {

    const { switchToSignUp} : any = useContext(Context);

    return (
        <div className={`sign-wrapper`}>
            <form className={`sign-wrapper__form`}>
                <input className={`sign-wrapper__input`} placeholder={"Email"} type={"email"} />
                <input className={`sign-wrapper__input`} placeholder={"Password"} type={"password"}/>
                </form>
            <a className={`sign-wrapper__link`} href={"#"}>Forget your password?</a>
            <button className={`sign-wrapper__submit-button`} type={"submit"}>Sign in</button>
            <a className={`sign-wrapper__link`}  onClick={switchToSignUp} href={"#"}>
                    Don't have an account?
                <a className={`sign-wrapper__link-bold`} onClick={switchToSignUp} href={"#"}>
                    Sign up
                </a>
            </a>
        </div>
    );
};

function mapStateToProps({user} :any) {
    return {

    }
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);