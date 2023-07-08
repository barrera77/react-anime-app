import { Box } from "@chakra-ui/react";
import useGenres from "../hooks/UseGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <>
      <Box className="dropdown-content" backgroundColor="Window">
        {data.map((genre) => (
          <li key={genre.mal_id}>{genre.name}</li>
        ))}
      </Box>
    </>
  );
};

export default GenreList;
