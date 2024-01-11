import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    //next?: string;
    results: T[];
}

const axiosInstance =  axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "c01a51a6d59240df9f8c2c6d535cb75c"
    },
})

class APIClient<T>{
    endpoint : string;

    constructor (endpoint : string) {
        this.endpoint = endpoint;
    }

    getAll = ( config: AxiosRequestConfig) => 
        axiosInstance.get<FetchResponse<T>>(this.endpoint, config ).then(res => res.data)
    
}

export default APIClient;