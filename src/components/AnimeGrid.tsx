import { SimpleGrid } from "@chakra-ui/react";
import useAnime from "../hooks/useAnime";
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";

const AnimeGrid = () => {
  const { animeList, error, isLoading } = useAnime();
  const skeletons = [1, 2, 3, 4, 5, 6, 7];

  return (
    <SimpleGrid
      columns={{ sm: 2, md: 4, lg: 5, xl: 7 }}
      padding="30px"
      spacing={10}
    >
      {isLoading &&
        skeletons.map((skeleton) => <AnimeCardSkeleton key={skeleton} />)}
      {animeList.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </SimpleGrid>
  );
};

export default AnimeGrid;
