import { Box, Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface LayoutSectionProps {
  children: ReactNode;
  title: string;
}

const LayoutSectionMovieCategory: React.FC<LayoutSectionProps> = ({ children, title }) => {
  return (
    <Box mb={8}>
      <Heading style={{ marginBottom: 8 }} as="h2" fontSize={24} mb={4}>
        {title}
      </Heading>
      {children}
    </Box>
  );
};

export default LayoutSectionMovieCategory;
