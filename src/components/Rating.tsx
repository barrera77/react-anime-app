import { Badge } from "@chakra-ui/react";

interface Props {
  rating: string;
}

const Rating = ({ rating }: Props) => {
  let color = rating === "R - 17+ (violence & profanity)" ? "red" : "";

  return (
    <Badge
      backgroundColor="transparent"
      colorScheme={color}
      fontSize="10px"
      paddingY={5}
    >
      {rating}
    </Badge>
  );
};

export default Rating;
