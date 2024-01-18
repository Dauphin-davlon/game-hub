import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client"

interface Screenshots{
    id: number;
    image :string;
    height: number;
    width: number;
}


const useScreenshots = (gameId : number) => {
    const apiClient = new APIClient<Screenshots>(`/games/${gameId}/screenshots`);

    return useQuery({
        queryKey: ["screenshots", gameId],
        queryFn: apiClient.getAll
    })
}

export default useScreenshots;