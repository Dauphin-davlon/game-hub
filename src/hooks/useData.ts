import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
    count: number;
    //next?: string;
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig? : AxiosRequestConfig, deps? : any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [errors, setErrors] = useState("");
    const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if(error instanceof CanceledError) return;
        setErrors(error.message)
        setIsLoading(false);
        });

      return (() => controller.abort())
  }, deps ? [...deps] : []);

  return {data, errors, isLoading};
}

export default useData;