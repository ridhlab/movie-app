import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Card } from "../Card";

const ContainerAuth: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box maxW={360} margin="auto" minH="80vh" display="flex" alignItems="center" justifyContent="center">
      <Card w="full">{children}</Card>
    </Box>
  );
};

export default ContainerAuth;
