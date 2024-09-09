// src/pages/Timeline.tsx
import { Box, Text, VStack } from "@chakra-ui/react";

interface Event {
  date: string;
  description: string;
}

export const Timeline: React.FC = () => {
  const events: Event[] = [
    { date: "2020", description: "Started my journey as a developer." },
    {
      date: "2021",
      description: "Joined my first full-time job as a MERN stack developer.",
    },
    { date: "2022", description: "Launched my first portfolio website." },
  ];

  return (
    <Box p="4">
      <Text fontSize="2xl" mb="4">
        My Timeline
      </Text>
      <VStack spacing={4} align="stretch">
        {events.map((event, index) => (
          <Box
            key={index}
            p="4"
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
          >
            <Text fontSize="lg">{event.date}</Text>
            <Text>{event.description}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};
