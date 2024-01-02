import { Grid, GridItem, HStack, Image, Show, Text } from "@chakra-ui/react";
import Logo from "./assets/logo.webp";

function App() {
  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav    nav" "aside  main"`,
        }}
      >
        <GridItem area={"nav"}>
          <HStack>
            <Image src={Logo} boxSize="60px"></Image>
            <Text> NavBar </Text>
          </HStack>
        </GridItem>
        <Show above="lg">
          <GridItem bg="gold" area={"aside"}>
            Aside
          </GridItem>
        </Show>

        <GridItem bg="yellow" area={"main"}>
          Main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
