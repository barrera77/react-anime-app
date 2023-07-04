import { GridItem, Show } from "@chakra-ui/react";
import AnimeGrid from "./components/AnimeGrid";
import NavBar from "./components/NavBar";
import Popular from "./components/Popular";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        <AnimeGrid />
      </GridItem>
    </>
  );
}

export default App;
