import React, {useEffect} from 'react';
import './portfolio.scss';
import UpsideSign from "./upsideSign/upsideSign";
import {
    setIsUserLogin,
    TSetIsUserLogin,
} from "../redux/actions/userActions";
import {connect} from "react-redux";

interface IProps {
    isLogin: boolean;

    setIsUserLogin: TSetIsUserLogin;
}

const Portfolio: React.FC<IProps> = (props) => {

    useEffect(() => {
        console.log("Hi, I'm Eray Ayaz. If you have any feedback about my portfolio site," +
            " I would appreaciate it if you could get back to me via email. Happy Coding :)")
    }, []);

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
