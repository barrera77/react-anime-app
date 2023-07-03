import { SimpleGrid } from "@chakra-ui/react";
import useAnime from "../hooks/useAnime";
import AnimeCard from "./AnimeCard";

const AnimeGrid = () => {
  const { animeList, error } = useAnime();
  return (
    <SimpleGrid
      columns={{ sm: 2, md: 4, lg: 5, xl: 7 }}
      padding="30px"
      spacing={10}
    >
      {animeList.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </SimpleGrid>
  );
};

export default AnimeGrid;
