import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AnimeCardContainer = ({ children }: Props) => {
  return (
    <Box height="500px" width="285px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default AnimeCardContainer;