import axios from 'axios'
import React,{ useState,useEffect } from 'react'


export function Fetcj<T=unknown>(url: string, variavel: any){
    const [data, setData] = useState<T>();

    useEffect(() => {
        axios.get(url)
        .then(resp => {
            setData(resp.data);
        });
    },[variavel])

    return {data}
}