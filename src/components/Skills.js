import { Box, Text, SimpleGrid, useColorModeValue, Icon } from "@chakra-ui/react";
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaGitAlt, FaFigma, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiChakraui, SiMysql, SiC } from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React.js", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "MongoDB", icon: FaDatabase },
  { name: "Python", icon: FaPython },
  { name: "Git", icon: FaGitAlt },
  { name: "Figma", icon: FaFigma },
  { name: "SQL", icon: SiMysql },
  { name: "Chakra UI", icon: SiChakraui },
  { name: "C Language", icon: SiC },
];

const Skills = () => {
  const cardBg = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.200");
  const hoverBg = useColorModeValue("blue.200", "blue.600");

  return (
    <Box id="skills" p={10} textAlign="center">
      <Text fontSize="3xl" fontWeight="bold" color={textColor} mb={6}>
        Skills & Tools
      </Text>
      <SimpleGrid columns={{ base: 3, md: 4, lg: 6 }} spacing={4}>
        {skills.map((skill, index) => (
          <Box
            key={index}
            bg={cardBg}
            p={3}
            borderRadius="md"
            boxShadow="md"
            display="flex"
            flexDirection="column"
            alignItems="center"
            transition="transform 0.2s, background 0.2s"
            _hover={{ transform: "scale(1.05)", background:'transparent'  }}
          >
            <Icon as={skill.icon} w={8} h={8} color="blue.400" mb={2} />
            <Text fontSize="sm" fontWeight="medium" color={textColor}>
              {skill.name}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
