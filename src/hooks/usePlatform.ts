import usePlatforms from "./usePlatforms";

export const usePlatform = (platformId?: number) => {
    const { data: platforms } = usePlatforms();
    return platforms?.results.find(
        (p) => p.id === platformId
      );
}