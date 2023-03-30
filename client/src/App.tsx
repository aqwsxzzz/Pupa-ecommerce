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
    <QueryClientProvider client={queryClient}>
      <PreFetch />
      <ChakraProvider>
        <Home />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/products" element={<Products />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/quoter" element={<Quoter />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
