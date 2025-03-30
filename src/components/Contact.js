import { useState } from "react";
import { Box, Text, Input, Button, VStack, Image, useColorModeValue } from "@chakra-ui/react";

import emailjs from "@emailjs/browser";


const Contact = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("black", "white");

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const emailData = {
      to_email: "yoshithanunna77@gmail.com",
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };
    emailjs.send("service_xyvlmgy", "template_8uy4jkz", emailData, "JXze4K0bHne12OaPW")
      .then((response) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => alert("Failed to send message."));
  };

  return (
    <Box p={10} display="flex" flexDirection={{ base: "column", md: "row" }} alignItems="center" justifyContent="center">
      {/* Left Side - Image */}
      <Box flex={1} display="flex" justifyContent="center" alignItems="center" p={5}>
        <Image src="https://static.vecteezy.com/system/resources/previews/020/348/785/non_2x/hire-me-icon-vector.jpg" alt="Contact Me" borderRadius="lg" boxShadow="lg" maxW={{ base: "70%", md: "50%" }} />
      </Box>
      
      {/* Right Side - Contact Form */}
      <Box maxW={{ base: "90%", md: "50%" }} flex={1} p={5} textAlign="center"  boxShadow={`0px 0px 30px `} borderRadius="lg" bg={bgColor} color={textColor}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>Hire Me</Text>
        <VStack spacing={4} as="form" onSubmit={sendEmail}>
          <Input name="name" placeholder="Your Name" size="lg" value={formData.name} onChange={handleChange} required />
          <Input name="email" type="email" placeholder="Your Email" size="lg" value={formData.email} onChange={handleChange} required />
          <Input name="message" placeholder="Your Message" size="lg" height="100px" as="textarea" value={formData.message} onChange={handleChange} required />
          <Button type="submit" colorScheme="teal" size="lg">submit</Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Contact;
