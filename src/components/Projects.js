import { Box, Text, SimpleGrid, Link, Image, useColorModeValue } from "@chakra-ui/react";

const projectData = [
  { title: "Micro Mart", description: "An online platform for buying and selling products for small and micro business.",image:"https://co-well.vn/wp-content/uploads/2019/11/shooping-cart-img.jpg"},
  { title: "IDcard Generator", description: "A real-time chat application for seamless communication.", link: "https://id-card-maker-xc6k.vercel.app/" ,image:"/Yoshitha.png"}, // No link for this project

  { title: "MYPortfolio ", description: "A personal portfolio to showcase projects and skills.", image:"https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/08/how-to-make-an-online-portfolio.png"}
];

const Projects = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const cardBg = useColorModeValue("blue.200", "blue.200");
  const textColor = useColorModeValue("gray.800", "gray.900");
  const linkColor = useColorModeValue("blue.600", "blue.700");

  return (
    <Box p={10} textAlign="center" bg={bgColor} minH="100vh">
    <Text fontSize="2xl" fontWeight="bold" color="" mb={4}>Projects</Text>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} maxW="1200px" mx="auto">
      {projectData.map((project, index) => (
        <Box 
          key={index} 
          p={6} 
          shadow="md" 
          borderWidth="1px" 
          borderRadius="md" 
          bg={cardBg} 
          transition="transform 0.3s ease" 
          _hover={{ transform: "scale(1.05)", shadow: "lg" }}
        >
          <Image src={project.image} alt={project.title} borderRadius="sm" mb={3} boxSize="150px" objectFit="cover" mx="auto" />
          <Text fontSize="lg" fontWeight="bold" color={textColor}>{project.title}</Text>
          <Text fontSize="sm" color={textColor} mb={2}>{project.description}</Text>
          {project.link && (
            <Link 
              href={project.link} 
              color={"violet.500"} 
              fontWeight="medium" 
              isExternal
              fontSize="sm"
              _hover={{ textDecoration: "underline" }}
            >
              View Project
            </Link>
          )}
        </Box>
      ))}
    </SimpleGrid>
  </Box>
  );
};

export default Projects;
