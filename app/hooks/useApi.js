import { useState } from 'react';


export default useApi = (apiFunc) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        // const request = async () => {
        setLoading(true);
        // const response = await apiFunc();
        const response = await apiFunc(...args);
        setLoading(false);

        // if (!response.ok) return setError(true);

        setError(!response.ok);
        setData(response.data);
        return response;
    };

    return { data, error, loading, request };
}