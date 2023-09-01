import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import axios from "axios";
import {setIsLoading, TSetIsLoading} from "../../redux/actions/commonAction";

interface HomeProps {

    setIsLoading: TSetIsLoading;
}

const Home: React.FC<HomeProps> = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/project/list');
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(true);
            }
        };

        fetchData().then(r => console.log(r));
    }, []);

    return (
       <div>

       </div>
    );
};

function mapStateToProps({ common} : any) {
    return {
        isLoading: common.get('isLoading', false),
    }
}

const mapDispatchToProps = {
    setIsLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);