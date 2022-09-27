import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box w={"100%"} minH={"792px"} backgroundColor={"#f0d3e9"}>
      {children}
    </Box>
  );
};
