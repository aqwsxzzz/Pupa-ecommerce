import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Home } from "./Components/Views/Home";
import { Products } from "./Components/Views/Products";
import { Admin } from "./Components/Views/Admin";
import { PreFetch } from "Components/General/PreFetch";
import { Quoter } from "Components/Views/Quoter";

const queryClient = new QueryClient();

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
