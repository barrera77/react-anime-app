import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AnimeCardContainer = ({ children }: Props) => {
  return (
    <Box
      width="180px"
      height="310"
      className="responsive"
      borderRadius={10}
      overflow="hidden"
      flexDirection="column"
      display="flex"
    >
      {children}
    </Box>
  );
};

export default AnimeCardContainer;
