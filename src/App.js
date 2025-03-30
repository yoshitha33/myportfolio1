import { ChakraProvider, Box, ColorModeScript } from "@chakra-ui/react";
import theme from "./components/Theme";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Box >
        {/* <Header /> */}
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Box>
    </ChakraProvider>
  );
}

export default App;