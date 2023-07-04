import { Badge, Text } from "@chakra-ui/react";

interface Props {
  rating: string;
}

const Rating = ({ rating }: Props) => {
  let color = rating === "R - 17+ (violence & profanity)" ? "red" : "";

  return (
    <Text
      backgroundColor="transparent"
      color={color}
      fontSize="10px"
      paddingY={1}
    >
      {rating}
    </Text>
  );
};

export default Rating;
