import React, {useEffect} from 'react';
import './portfolio.scss';

import {
    setIsUserLogin,
    TSetIsUserLogin,
} from "../redux/actions/userActions";
import {connect} from "react-redux";
import NavBar from "./navbar/navbar";
import Home from "./home/home";

interface IProps {
    isLogin: boolean;

    setIsUserLogin: TSetIsUserLogin;
}

const Portfolio: React.FC<IProps> = (props) => {

    useEffect(() => {
        console.log("Hi, I'm Eray Ayaz. If you have any feedback about my portfolio site," +
            " I would appreaciate it if you could get back to me via email. Happy Coding :)")
    }, []);

    const menuItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Blog', path: '/blog' },
        { label: 'Email', path: '/email' },
    ];

    return (
        <div className={`portfolio-wrapper`}>
            <NavBar items={menuItems} />
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
