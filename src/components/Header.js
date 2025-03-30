// import { Flex, IconButton, Spacer, Link, useColorMode } from "@chakra-ui/react";
// import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";

// const Header = () => {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <Flex p={4} alignItems="center">
//       <IconButton 
//         aria-label="Toggle Theme" 
//         icon={colorMode === "light" ? <FaMoon /> : <FaSun />} 
//         onClick={toggleColorMode} 
//         mr={4}
//       />
//       <Spacer />
//       <Link href="https://linkedin.com" isExternal>
//         <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} mr={2} />
//       </Link>
//       <Link href="https://github.com" isExternal>
//         <IconButton aria-label="GitHub" icon={<FaGithub />} />
//       </Link>
//     </Flex>
//   );
// };
// export default Header;