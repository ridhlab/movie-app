import React from "react";
import { Box, Flex, Heading, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { HiMenuAlt3 } from "react-icons/hi";
import { ButtonComp } from "../";
import Link from "next/link";
import { useAuth } from "../../context/Auth";
import { LoaderCenter } from "../Loader";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const { isLogin, setIsLogin } = useAuth();

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    router.push("/login");
  };

  return (
    <Flex bgColor="primary.normal" p={4} justifyContent="space-between" alignItems="center">
      <Link href="/">
        <a>
          <Heading as="h1" color="white" fontSize={24}>
            MovieList
          </Heading>
        </a>
      </Link>
      <Menu>
        <Flex _hover={{ bgColor: "primary.darker" }} width={8} height={8} borderRadius={4} justifyContent="center" alignItems="center">
          <MenuButton as="button">
            <HiMenuAlt3 color="white" size={24} />
          </MenuButton>
        </Flex>
        <MenuList>
          {isLogin ? (
            <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
          ) : (
            <MenuItem>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </MenuItem>
          )}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Header;
