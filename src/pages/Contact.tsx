// src/pages/Contact.tsx
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Event handler for textarea
  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData); // Here you can handle form submission logic
  };

  return (
    <Box p="4">
      <form onSubmit={handleSubmit}>
        <FormControl mb="4">
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            isRequired
          />
        </FormControl>

        <FormControl mb="4">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            isRequired
          />
        </FormControl>

        <FormControl mb="4">
          <FormLabel>Message</FormLabel>
          <Textarea
            value={formData.message}
            onChange={handleTextareaChange}
            isRequired
          />
        </FormControl>

        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
};
