import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo3 from "../assets/logo3.jpg";

const NavBar = () => {
  return (
    <HStack padding="10px" paddingX={"30px"} justifyContent={"space-between"}>
      <Image
        src={logo3}
        boxSize="70px"
        objectFit="cover"
        borderRadius={10}
        backgroundColor="transparent"
      />
      <SearchInput />
      <Box>
        <ColorModeSwitch />
      </Box>
    </HStack>
  );
};

export default NavBar;
