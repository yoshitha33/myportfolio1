

import { Box, Text, Image, Heading, Container, Button, VStack, HStack, useColorModeValue, Flex, IconButton, Spacer, Link, useColorMode } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";

const Hero = () => {
  const bg = useColorModeValue("#FFF5E1", "#1A202C");
  const textColor = useColorModeValue("#4A5568", "#E2E8F0");
  const accentColor = useColorModeValue("#6C63FF", "#90CDF4");
  const borderColor = useColorModeValue("#CBD5E0", "#2D3748");
  const glowColor = useColorModeValue("rgba(108, 99, 255, 0.6)", "#90cdf4");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box position="relative" minH="100vh" overflow="hidden" bg={bg}>
      <Flex p={4} alignItems="center">
        <IconButton 
          aria-label="Toggle Theme" 
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />} 
          onClick={toggleColorMode} 
          mr={4}
        />
        <Spacer />
        <Link href="https://www.linkedin.com/in/yoshitha-nunna-8492a3293/" isExternal>
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} mr={2} bgColor={'#90cdf4'}/>
        </Link>
        <Link href="https://github.com/yoshitha33" isExternal>
          <IconButton aria-label="GitHub" icon={<FaGithub />} bgColor={'#90cdf4'}/>
        </Link>
      </Flex>
      <Container maxW="container.xl" display="flex" flexDirection={{ base: "column", md: "row" }} alignItems="center" minH="80vh" position="relative" zIndex={2}>
        {/* Left Section */}
        <VStack align="start" spacing={4} flex={1} zIndex={3}>
          <Text fontWeight="bold" color={accentColor} textTransform="uppercase"></Text>
          <Heading size="2xl" color={textColor}>Hello</Heading>
          <Heading size="2xl" fontWeight="bold" color={textColor}>I'm Yoshitha</Heading>
          <Text fontSize="xl" color={textColor}>
            <Typewriter
              options={{
                strings: [ "MERN Enthusiast", "UI/UX Designer"],
                autoStart: true,
                loop: true,
              }}
            />
          </Text>
          <Text color={textColor}>
            Passionate about building beautiful and user-friendly web experiences. Let's create something amazing together!
          </Text>
          <HStack spacing={4}>
          <Button
  as={Link}
  href="/Resume.pdf" // Path to the resume file
  target="_blank" // Opens the file in a new tab
  rel="noopener noreferrer" // Security best practice
  bg={accentColor}
  color="white"
  _hover={{ bg: "#544BD8" }}
  size="lg"
>
  Resume
</Button>
 <Button as={Link} href="https://www.linkedin.com/in/yoshitha-nunna-8492a3293/" isExternal variant="outline" spacing={2} size="lg" borderColor={textColor} color={textColor} _hover={{ bg: borderColor }}>LinkedIn</Button>
          </HStack>
        </VStack>
        
        {/* Right Section (Image with Glow Effect) */}
        <Box flex={1} display="flex" justifyContent="center" position="relative" zIndex={2}>
          <Image 
            src="/photo.png" // Replace with your image path
            alt="Profile Picture" 
            borderRadius="full"
            boxSize="320px"
            objectFit="cover"
            border={`8px solid ${borderColor}`}
            boxShadow={`0px 0px 30px ${glowColor}`}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
