import React from "react";
import { Box, Text } from "@chakra-ui/react";

const ErrorMessage: React.FC = () => {
  return (
    <Box p={4}>
      <Text textAlign="center" color="red">
        Terjadi kesalahan....
      </Text>
    </Box>
  );
};

export default ErrorMessage;
