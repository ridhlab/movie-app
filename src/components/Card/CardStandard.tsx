import React, { ReactNode } from "react";
import { Box, ResponsiveValue } from "@chakra-ui/react";

interface CardProps {
  children: ReactNode;
  mx?: number | string;
  p?: number | string;
  boxShadow?: ResponsiveValue<number | "base" | "outline" | "sm" | "md" | "lg" | "xl" | "2xl" | "xs" | "inner" | "dark-lg"> | undefined;
  borderColor?: string;
  border?: string;
  my?: number | string;
  mt?: number | string;
  w?: number | string;
}

const Card: React.FC<CardProps> = ({ children, p = 4, borderColor = "primary.normal", border = "1px", ...props }) => {
  return (
    <Box border={border} borderColor={borderColor} borderRadius={4} p={p} {...props}>
      {children}
    </Box>
  );
};

export default Card;
