import React, {useContext} from 'react';
import {connect} from "react-redux";
import '../common/common.scss';
import {Context} from "../common/context";

interface IProps {
}

const SignUp: React.FC<IProps> = (props) => {

    // @ts-ignore
    const { switchToSignIn } : any = useContext(Context);

    return (
        <div className={`sign-wrapper`}>
            <form className={`sign-wrapper__form`}>
                <input className={`sign-wrapper__input`} placeholder={"Full Name"} type={"text"}/>
                <input className={`sign-wrapper__input`} placeholder={"Email"} type={"email"}/>
                <input className={`sign-wrapper__input`} placeholder={"Password"} type={"password"}/>
                <input className={`sign-wrapper__input`} placeholder={"Confirm Password"} type={"password"}/>
            </form>
            <button className={`sign-wrapper__submit-button`} type={"submit"}>Sign up</button>
            <div className={`sign-wrapper__link-area`}>
                <a className={`sign-wrapper__link`} onClick={switchToSignIn} href={"#"}>
                    Have an account already?
                </a>
                <a className={`sign-wrapper__link-bold`} onClick={switchToSignIn} href={"#"}>
                    Log in
                </a>
            </div>
        </div>
    );
};

function mapStateToProps({user}: any) {
    return {};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);