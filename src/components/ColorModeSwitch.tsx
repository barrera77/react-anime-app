import { HStack, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="red"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
    </HStack>
  );
};

export default ColorModeSwitch;
