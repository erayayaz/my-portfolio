import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import axios from "axios";

interface HomeProps {
}

const Home: React.FC<HomeProps> = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/project/list');
                setData(response.data);
            } catch (error) {
                // Handle errors...
            }
        };

        fetchData();
    }, []);

    return (
       <div>

       </div>
    );
};

function mapStateToProps() {
    return {
    }
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);