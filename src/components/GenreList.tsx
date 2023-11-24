import { Box, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/UseGenres";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { data } = useGenres();
  return (
    <>
      <Box className="dropdown-content" backgroundColor="Window">
        <ul>
          {data.map((genre) => (
            <Button
              onClick={() => onSelectedGenre(genre)}
              variant="unstyled"
              key={genre.mal_id}
            >
              {genre.name}
            </Button>
          ))}
        </ul>
      </Box>
    </>
  );
};

export default GenreList;
