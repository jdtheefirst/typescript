// src/App.tsx
import { ChakraProvider, Box, useColorMode, Button } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Timeline } from "./pages/Timeline";
import { Blogs } from "./pages/Blogs";
import { Contact } from "./pages/Contact";

interface NavbarProps {
  colorMode: "light" | "dark";
  toggleColorMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ colorMode, toggleColorMode }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p="4"
      bg={colorMode === "dark" ? "gray.800" : "gray.100"}
    >
      <Box>
        <Link to="/">Home</Link>
        <Link to="/timeline" style={{ marginLeft: "15px" }}>
          Timeline
        </Link>
        <Link to="/blogs" style={{ marginLeft: "15px" }}>
          Blogs
        </Link>
        <Link to="/contact" style={{ marginLeft: "15px" }}>
          Contact
        </Link>
      </Box>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
    </Box>
  );
};

const App: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider>
      <Router>
        <Box>
          <Navbar colorMode={colorMode} toggleColorMode={toggleColorMode} />
          <Routes>
            <Route path="/" element={<Home colorMode={colorMode} />} />
            <Route
              path="/timeline"
              element={<Timeline colorMode={colorMode} />}
            />
            <Route path="/blogs" element={<Blogs colorMode={colorMode} />} />
            <Route
              path="/contact"
              element={<Contact colorMode={colorMode} />}
            />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;
