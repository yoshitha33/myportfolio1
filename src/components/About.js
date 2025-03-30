import { Box, Text, Heading, VStack, useColorModeValue } from "@chakra-ui/react";

const About = () => {
  const bgGradient = useColorModeValue(
    "linear(to-r, #90CDF4, #6C63FF)",
    "linear(to-r, #1A202C, #2D3748)"
  );
  const textColor = useColorModeValue("#2D3748", "#E2E8F0");

  return (
    <Box id="about" p={10} textAlign="center"  borderRadius="lg" boxShadow="lg">
        <VStack spacing={4}>
          <Heading fontSize="3xl" fontWeight="bold" color={''}>About Me</Heading>
          <Text fontSize="lg" color={textColor} maxW="800px">
            Hi, I'm <b>Yoshitha</b>, a <b>MERN Stack Developer</b> and <b>UI/UX Designer</b> passionate about crafting 
            scalable web applications and seamless user experiences. I specialize in building dynamic and responsive 
            web solutions using <b>MongoDB, Express.js, React.js, and Node.js</b>.
          </Text>
          <Text fontSize="lg" color={textColor} maxW="800px">
            I also love solving <b>Python challenges</b> and expressing creativity through <b>pencil sketches</b>. 
            Let’s connect and create something amazing together!
          </Text>
        </VStack>
      </Box>
  );
};

export default About;
