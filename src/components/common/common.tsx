import React from 'react';
import {connect} from "react-redux";

interface IProps {
}

const Common: React.FC<IProps> = (props) => {
    return (
        <div className={`common-wrapper`}>

        </div>
    );
};

function mapStateToProps({user} :any) {
    return {
    }
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Common);