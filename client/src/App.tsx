import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Views/Home";
import { Products } from "./Components/Views/Products";
import { Admin } from "./Components/Views/Admin";
import { PreFetch } from "Components/General/PreFetch";
import { Quoter } from "Components/Views/Quoter";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <QueryClientProvider client={queryClient}>
        <PreFetch />
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/quoter" element={<Quoter />} />
          </Routes>
        </ChakraProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
