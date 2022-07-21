import React from 'react';
import {connect} from "react-redux";

interface IProps {
}

const SignIn: React.FC<IProps> = (props) => {
    return (
        <div className={`signIn-wrapper`}>

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