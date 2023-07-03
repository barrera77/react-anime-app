import { SimpleGrid } from "@chakra-ui/react";
import useAnime from "../hooks/useAnime";
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import AnimeCardContainer from "./AnimeCardContainer";

const AnimeGrid = () => {
  const { animeList, error, isLoading } = useAnime();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <SimpleGrid
      columns={{ sm: 2, md: 4, lg: 5, xl: 6 }}
      padding="30px"
      spacing={10}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <AnimeCardContainer>
            <AnimeCardSkeleton key={skeleton} />
          </AnimeCardContainer>
        ))}
      {animeList.map((anime) => (
        <AnimeCardContainer>
          <AnimeCard key={anime.mal_id} anime={anime} />
        </AnimeCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default AnimeGrid;
