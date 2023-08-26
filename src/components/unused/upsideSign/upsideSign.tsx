import React, {useState} from 'react';
import {connect} from "react-redux";
import './upsideSign.scss';
import SignIn from "../signIn/signIn";
import {Context} from "../../common/context";
import SignUp from "../signUp/signUp";

interface IProps {
    isLogin: boolean;
}

const backDropVariants = {
    expanded: {
        height: "1250px",
        width: "233%",
        borderRadius: "20%",
        transform: "rotate(60deg)",
        top: "-520px",
        left: "-50px",
    },

    collapsed: {
        width: "160%",
        height: "850px",
        borderRadius: "50%",
        transform: "rotate(60deg)",
        top: "-520px",
        left: "-50px",
    }
}

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 22,
}

const UpsideSign: React.FC<IProps> = (props) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [active, setActive] = useState("signin");

    const startExpandingAnimation = () => {
        setIsExpanded(true);
        setTimeout(() => {
            setIsExpanded(false);
        }, expandingTransition.duration * 1000 - 1000);
    };

    const switchToSignUp = () => {
        startExpandingAnimation();
        setTimeout(() => {
            setActive("signup");
        }, 1600);
    };

    const switchToSignIn = () => {
        startExpandingAnimation();
        setTimeout(() => {
            setActive("signin");
        }, 1600);
    };

    const contextValue = {switchToSignIn, switchToSignUp};

    return (
        <Context.Provider value={contextValue}>
            <div className={`upsideSign-wrapper`}>
                <div className={`upsideSign-wrapper__topside`}>
                    {active === "signin" &&
                        <div className={`upsideSign-wrapper__header`}>
                            <div className={`upsideSign-wrapper__header-text`}>
                                Welcome
                            </div>
                            <div className={`upsideSign-wrapper__header-text`}>
                                Back
                            </div>
                            <div className={`upsideSign-wrapper__header-small-text`}>
                                Please sign-in to continue!
                            </div>
                        </div>
                    }
                    {active === "signup" &&
                        <div className={`upsideSign-wrapper__header`}>
                            <div className={`upsideSign-wrapper__header-text`}>
                                Create
                            </div>
                            <div className={`upsideSign-wrapper__header-text`}>
                                Account
                            </div>
                            <div className={`upsideSign-wrapper__header-small-text`}>
                                Please sign-up to continue!
                            </div>
                        </div>
                    }

                </div>
                <div className={`upsideSign-wrapper__signIn`}>
                    {active === "signin" ? <SignIn /> : <SignUp />}
                </div>
            </div>
        </Context.Provider>
    );
};

function mapStateToProps({user} :any) {
    return {
        isLogin: user.get('isLogin', false),
    }
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(UpsideSign);