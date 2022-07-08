import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StaticHeader } from "./Components/Static/Header";
import { StaticFooter } from "./Components/Static/Footer";
import { Home } from "./Components/Views/Home";
import { Products } from "./Components/Views/Products";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <StaticHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
          <StaticFooter />
        </ChakraProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
