import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "..";
import { useAuth } from "../../context/Auth";
import { LoaderCenter } from "../Loader";

interface LayoutProps {
  children: ReactNode;
}

const LayoutRoot: React.FC<LayoutProps> = ({ children }) => {
  const { authLoading } = useAuth();

  if (authLoading) return <LoaderCenter />;

  return (
    <Box minHeight="100vh">
      <Header />
      <Box maxW={520} margin="auto">
        <Box p={4}>{children}</Box>
      </Box>
    </Box>
  );
};

export default LayoutRoot;
