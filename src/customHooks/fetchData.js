import axios from "axios";
import CONSTANTS from "constants/constants";
import { configOptions } from "final-form";
import { useEffect, useState } from "react";

const useFetchData = (path) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`${CONSTANTS.API}${path}`);
                setData(response);
            } catch (error) {
                console.error(error)
            }
            setLoading(false);
        };

        fetchData();
    }, []);
    
    return {
        data,
        loading,
    };
};

export default useFetchData;