import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
    id: number;
    name: string;
}
  
interface GameResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [errors, setErrors] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<GameResponse>("/games", {signal: controller.signal})
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((error) => {
        if(error instanceof CanceledError) return;
        setErrors(error.message)
        });

      return (() => controller.abort())
  }, []);

  return {games, errors};
}

export default useGames;