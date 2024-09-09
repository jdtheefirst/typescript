// src/pages/Blogs.tsx
import { Box, Heading, Text, VStack, Image, Link } from "@chakra-ui/react";

interface Blog {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  link: string;
}

export const Blogs: React.FC = () => {
  const blogs: Blog[] = [
    {
      title: "Learning TypeScript with React",
      description:
        "A complete guide to setting up TypeScript in a React project and the benefits of static typing.",
      date: "2024-09-09",
      imageUrl: "https://via.placeholder.com/400",
      link: "https://example.com/typescript-react",
    },
    {
      title: "Building Responsive Websites with Chakra UI",
      description:
        "How to build modern, responsive websites quickly using Chakra UI’s powerful component library.",
      date: "2024-08-20",
      imageUrl: "https://via.placeholder.com/400",
      link: "https://example.com/responsive-chakra",
    },
    {
      title: "MERN Stack: From Beginner to Pro",
      description:
        "A comprehensive guide for developers looking to master the MERN stack and build powerful web apps.",
      date: "2024-07-15",
      imageUrl: "https://via.placeholder.com/400",
      link: "https://example.com/mern-stack-guide",
    },
  ];

  return (
    <Box p="4">
      <Heading as="h1" mb="8" fontSize="2xl">
        My Blogs
      </Heading>
      <VStack spacing={8} align="stretch">
        {blogs.map((blog, index) => (
          <Box
            key={index}
            p="6"
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            alignItems="center"
            maxWidth="1000px"
            mx="auto"
          >
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              boxSize={{ base: "100%", md: "200px" }}
              objectFit="cover"
              borderRadius="md"
              mr={{ md: 6 }}
              mb={{ base: 4, md: 0 }}
            />
            <Box>
              <Heading as="h2" fontSize="xl" mb="2">
                {blog.title}
              </Heading>
              <Text fontSize="md" color="gray.500" mb="2">
                {blog.date}
              </Text>
              <Text fontSize="md" mb="4">
                {blog.description}
              </Text>
              <Link href={blog.link} color="teal.500" isExternal>
                Read more
              </Link>
            </Box>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};
