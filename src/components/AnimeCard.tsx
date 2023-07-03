import React from "react";
import { Anime } from "../hooks/useAnime";
import { Card, Image, CardBody, Heading } from "@chakra-ui/react";
import Rating from "./Rating";

interface Props {
  anime: Anime;
}

const AnimeCard = ({ anime }: Props) => {
  return (
    <Card height="450px" width="250px" borderRadius={10} overflow="hidden">
      <Image src={anime.images.jpg.image_url} />
      <CardBody>
        <Heading fontSize="xl">{anime.title}</Heading>
        <Rating rating={anime.rating} />
      </CardBody>
    </Card>
  );
};

export default AnimeCard;
