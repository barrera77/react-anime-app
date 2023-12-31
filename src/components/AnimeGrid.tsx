import { SimpleGrid, Text } from "@chakra-ui/react";
import useAnime from "../hooks/useAnime";
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import AnimeCardContainer from "./AnimeCardContainer";
import { Genre } from "../hooks/UseGenres";

interface Props {
  selectedGenre: Genre | null;
}

const AnimeGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useAnime(selectedGenre);
  const skeletons = [2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 5, xl: 7 }} spacing={5}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <AnimeCardContainer key={skeleton}>
              <AnimeCardSkeleton />
            </AnimeCardContainer>
          ))}
        {data?.map((anime) => (
          <AnimeCardContainer key={anime.mal_id}>
            <AnimeCard anime={anime} />
          </AnimeCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default AnimeGrid;
