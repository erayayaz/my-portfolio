import React from 'react';
import './portfolio.scss';
import UpsideSign from "./components/upsideSign/upsideSign";
import {
    setIsUserLogin,
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
            <UpsideSign />
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
