import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, {FetchResponse } from "../services/api-client";
import ms from 'ms';
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => {

    return useQuery<FetchResponse<Genre>, Error, FetchResponse<Genre>>({
        queryKey : ['genres'],
        queryFn: apiClient.getAll,
        staleTime : ms('24h'), //24hrs
        initialData : genres,
        keepPreviousData: true
    })
}




export default useGenres;