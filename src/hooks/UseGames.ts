import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
        id : number;
        name: string;
        slug: string
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform : Platform}[];
    metacritic: number;
}
  
interface GameResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [errors, setErrors] = useState("");
    const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<GameResponse>("/games", {signal: controller.signal})
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if(error instanceof CanceledError) return;
        setErrors(error.message)
        setIsLoading(false);
        });

      return (() => controller.abort())
  }, []);

  return {games, errors, isLoading};
}

export default useGames;