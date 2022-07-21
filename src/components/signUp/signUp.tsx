import React from 'react';
import {connect} from "react-redux";
import './signUp.scss';

interface IProps {
    isLogin: boolean;
}

const SignUp: React.FC<IProps> = (props) => {
    return (
        <div className={`signUp-wrapper`}>
            <div className={`signUp-wrapper__topside`}>
                <div className={`signUp-wrapper__backside`}>
                </div>
                <div className={`signUp-wrapper__header`}>
                    <div className={`signUp-wrapper__header-text`}>
                        Welcome
                    </div>
                    <div className={`signUp-wrapper__header-text`}>
                        Back
                    </div>
                    <div className={`signUp-wrapper__header-small-text`}>
                        Please sign-in to continue!
                    </div>
                </div>
            </div>
        </div>
    );
};

function mapStateToProps({user} :any) {
    return {
        isLogin: user.get('isLogin', false),
    }
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);