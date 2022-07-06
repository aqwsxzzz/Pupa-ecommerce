import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StaticHeader } from "./Components/Static/Header";
import { StaticFooter } from "./Components/Static/Footer";
import { Home } from "./Components/Views/Home";
import { Products } from "./Components/Views/Products";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <StaticHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <StaticFooter />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
