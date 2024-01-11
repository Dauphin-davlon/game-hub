import { QueryKey, useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {

    return useQuery<FetchResponse<Genre>, Error, FetchResponse<Genre>>({
        queryKey : ['genres'],
        queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then((res) => res.data),
        staleTime : 24 * 60 * 60 * 1000, //24hrs
        initialData : {count : genres.length, results: genres}
    })
}




export default useGenres;