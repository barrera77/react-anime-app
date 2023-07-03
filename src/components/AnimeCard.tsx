import { Anime } from "../hooks/useAnime";
import { Card, Image, CardBody, Heading, Box } from "@chakra-ui/react";
import Rating from "./Rating";

interface Props {
  anime: Anime;
}

const AnimeCard = ({ anime }: Props) => {
  return (
    <Card height="inherit">
      <Image src={anime.images.jpg.image_url} display={"flex"} />
      <CardBody>
        <Heading padding={5} textAlign="center" fontSize="xl">
          {anime.title}
        </Heading>
        <Rating rating={anime.rating} />
      </CardBody>
    </Card>
  );
};

export default AnimeCard;
