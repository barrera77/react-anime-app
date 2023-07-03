import React from "react";
import { Anime } from "../hooks/useAnime";
import { Card, Image, CardBody, Heading } from "@chakra-ui/react";

interface Props {
  anime: Anime;
}

const AnimeCard = ({ anime }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={anime.images.jpg.image_url} />
      <CardBody>
        <Heading fontSize="xl">{anime.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default AnimeCard;
