import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetch(url) {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const res = await axios.get(url);
            setData(res.data);
        } catch (error) {
            setData([]);
        }
    }

    useEffect(() => {
        getData();
    }, [url])

    return [data];
}
