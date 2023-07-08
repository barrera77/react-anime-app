import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";
import {
  Box,
  Flex,
  HStack,
  Image,
  Button,
  Text,
  theme,
} from "@chakra-ui/react";
import logo3 from "../assets/logo3.jpg";
import GenreList from "./GenreList";

const NavBar = () => {
  return (
    <HStack paddingTop="10px" justifyContent={"space-between"}>
      <Box display="inline-flex" alignItems="center">
        <Image
          src={logo3}
          boxSize="60px"
          objectFit="cover"
          borderRadius={10}
          backgroundColor="transparent"
        />
        <Text padding={2} fontWeight={"bold"} fontSize="2xl">
          Anime Rocks!
        </Text>
      </Box>
      <Flex>
        <SearchInput />
      </Flex>

      <Flex gap="9">
        <Flex gap="8" fontSize="xl">
          <Box className="dropdown">
            <Button className="dropbtn" backgroundColor="transparent">
              Genre
            </Button>
            <GenreList />
          </Box>

          <Box>Updated</Box>
          <Box>Popular</Box>
          <Box>Other</Box>
        </Flex>
        <ColorModeSwitch />
      </Flex>
    </HStack>
  );
};

export default NavBar;
