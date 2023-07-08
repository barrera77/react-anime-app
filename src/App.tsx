import {
  Box,
  Text,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import AnimeGrid from "./components/AnimeGrid";
import NavBar from "./components/NavBar";
import Popular from "./components/Popular";
import Hero from "./components/Hero";
import SearchInput from "./components/SearchInput";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      position="relative"
      display="flex"
      flexDirection="column"
      minHeight="100%"
      margin="0"
    >
      <GridItem
        position="relative"
        className="header"
        marginBottom="1.5rem"
        marginTop=" 1rem"
      >
        <Box className="container">
          <NavBar />
        </Box>
      </GridItem>

      <GridItem area="main" position="relative">
        <Box className="container">
          <Box width="100%" className="slider" marginBottom="1.5rem">
            <Hero />
          </Box>
          <Box>
            <Flex
              className="top-section"
              display="flex"
              justifyContent={"space-between"}
              alignItems="flex-end"
              marginBottom="1.5rem"
            >
              <Box className="heading" display="flex">
                <Text
                  width="5rem"
                  marginRight="3rem"
                  textTransform="uppercase"
                  outline="1px solid #314e6e !important"
                  fontWeight="600"
                >
                  Recently Updated
                </Text>
              </Box>
              <Flex className="tabs" marginRight="auto" display="flex">
                <Box className="tab">Tab 1</Box>
                <Box className="tab">Tab 2</Box>
                <Box className="tab">Tab 3</Box>
              </Flex>
              <Box className="section-paging">3</Box>
            </Flex>
            <Box className="tab-content">
              <AnimeGrid />
            </Box>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
