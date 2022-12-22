import { axiosInstance } from "../config/https";
import CONSTANTS from "constants/constants";
import { useEffect, useState } from "react";

const useFetchData = (path) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axiosInstance.get(`${CONSTANTS.API}${path}`);
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