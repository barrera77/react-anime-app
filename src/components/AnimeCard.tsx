import { Anime } from "../hooks/useAnime";
import { Card, Image, CardBody, Heading, Box } from "@chakra-ui/react";
import Rating from "./Rating";

interface Props {
  anime: Anime;
}

const AnimeCard = ({ anime }: Props) => {
  return (
    <Card width="inherit" height="inherit">
      <Box className="item-top">
        <Image
          objectFit="cover"
          className="poster"
          src={anime.images.jpg.image_url}
        />
      </Box>
      <CardBody className="item-bottom" display="table-column" paddingTop="1">
        <Heading textAlign="center" fontSize="sm">
          {anime.title}
        </Heading>
        <Rating rating={anime.rating} />
      </CardBody>
    </Card>
  );
};

export default AnimeCard;
