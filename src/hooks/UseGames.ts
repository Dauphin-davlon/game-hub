import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../store/gameQueryStore"; 
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../store/gameQueryStore";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGames = () =>
    {
        const gameQuery = useGameQueryStore(s => s.gameQuery);
        return useInfiniteQuery<FetchResponse<Game>, Error, FetchResponse<Game>>({
            queryFn : ({pageParam  = 1}) => apiClient.getAll({
                params : {
                    genres : gameQuery.genreId, 
                    parent_platforms : gameQuery.platformId,
                    ordering : gameQuery.sortOrder,
                    search : gameQuery.searchText,
                    page : pageParam
                }
            }),
            queryKey : ['games', gameQuery],
            getNextPageParam : (lastPage, allPages) =>  lastPage.next ? allPages.length + 1 : undefined,
            staleTime: ms('24h'), // 24hrs

            
        })

    }

export default useGames;