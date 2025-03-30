import { extendTheme } from "@chakra-ui/react";
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.900" : "gray.100",
        color: props.colorMode === "dark" ? "white" : "black",
      },
    }),
  },
});
export default theme;