import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { StaticFooter } from "../Components/Static/Footer";
import { StaticHeader } from "../Components/Static/Header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <StaticHeader />
      <Box w={"100%"} minH={"792px"} backgroundColor={"#f0d3e9"}>
        {children}
      </Box>
      <StaticFooter />
    </>
  );
};
