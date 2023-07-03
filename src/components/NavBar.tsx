import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";
import { HStack, Image, Text } from "@chakra-ui/react";
import logo3 from "../assets/logo3.jpg";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image
        src={logo3}
        boxSize="70px"
        objectFit="cover"
        borderRadius={10}
        backgroundColor="transparent"
      />
      <SearchInput />
      <ColorModeSwitch />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default NavBar;
