import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";


export interface Game {
    id: number;
    name: string;
    genres: Genre[];
    background_image: string;
    slug: string;
    publishers: Publisher[];
    description_raw: string;
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
    rating_top: number;
}
