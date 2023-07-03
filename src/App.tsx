import { GridItem, Show } from "@chakra-ui/react";
import AnimeGrid from "./components/AnimeGrid";
import NavBar from "./components/NavBar";
import Popular from "./components/Popular";

function App() {
  return (
    <>
      <NavBar />
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        <AnimeGrid />
      </GridItem>
      <AnimeGrid />
    </>
  );
}

export default App;
