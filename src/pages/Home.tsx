import React from "react";
import { useTheme } from "../components/ThemeContext";
import {
  Box,
  Button,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { colorMode } = useTheme();

  return (
    <Box
      p="4"
      width={"100%"}
      className="home"
      bg={colorMode === "dark" ? "black" : "whitesmoke"}
      color={colorMode === "dark" ? "white" : "black"}
    >
      {/* Hero Section */}
      <Box
        textAlign="center"
        py="10"
        backgroundImage="url('/path/to/hero-background.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Heading as="h1" size="2xl" mb="4">
          Welcome to My Personal Website
        </Heading>
        <Text fontSize="xl" mb="6">
          Exploring Web Development and Building Modern Solutions
        </Text>
        <Link to="/contact">
          <Button size="lg" colorScheme="teal">
            Contact Me
          </Button>
        </Link>
      </Box>

      {/* About Section */}
      <Box textAlign="center" py="10">
        <Heading as="h2" size="xl" mb="6">
          About Me
        </Heading>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="/path/to/profile.jpg"
          alt="Profile Image"
          mb="6"
        />
        <Text fontSize="lg" mx="auto" maxW="600px">
          Hi, I'm a full-stack developer specializing in creating modern web
          applications. With experience in both frontend and backend
          technologies, I enjoy crafting seamless user experiences.
        </Text>
      </Box>

      {/* Skills Section */}
      <Box
        py="10"
        bg={colorMode === "dark" ? "gray.800" : "gray.100"}
        textAlign="center"
      >
        <Heading as="h2" size="xl" mb="6">
          My Skills
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem>
            <Image boxSize="50px" src="/path/to/js-icon.png" alt="JavaScript" />
            <Text>JavaScript</Text>
          </GridItem>
          <GridItem>
            <Image boxSize="50px" src="/path/to/react-icon.png" alt="React" />
            <Text>React</Text>
          </GridItem>
          <GridItem>
            <Image boxSize="50px" src="/path/to/node-icon.png" alt="Node.js" />
            <Text>Node.js</Text>
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Box
        textAlign="center"
        py="10"
        mt="10"
        borderTop="1px solid"
        borderColor={colorMode === "dark" ? "gray.700" : "gray.200"}
      >
        <Text>&copy; {new Date().getFullYear()} My Personal Website</Text>
      </Box>
    </Box>
  );
};

export default Home;
