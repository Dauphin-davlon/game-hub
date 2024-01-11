import useGenres from "./UseGenres";


export const useGenre = (genreId? : number) => {
    const { data: genres } = useGenres();
    return genres?.results.find((genre) => genre.id === genreId);
}