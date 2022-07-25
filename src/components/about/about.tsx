import React from 'react';
import {connect} from "react-redux";

interface IProps {
}

const About: React.FC<IProps> = (props) => {
    return (
        <div className={`navbar-wrapper`}>

        </div>
    );
};

function mapStateToProps({user} :any) {
    return {
    }
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(About);