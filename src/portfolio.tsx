import React from 'react';
import './portfolio.scss';
import SignUp from "./components/signUp/signUp";
import {setIsUserLogin,
    TSetIsUserLogin,
} from "./redux/actions/userActions";
import {connect} from "react-redux";

interface IProps {
    isLogin: boolean;

    setIsUserLogin: TSetIsUserLogin;
}

const Portfolio: React.FC<IProps> = (props) => {

    return (
        <div className={`portfolio-wrapper`}>
            <SignUp />
        </div>
    );
};

function mapStateToProps({ user } : any) {
    return {
        isLogin: user.get('isLogin', false),
    }
}

const mapDispatchToProps = {
    setIsUserLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
