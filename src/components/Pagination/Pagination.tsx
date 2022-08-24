import React from "react";
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  path: string;
  queryKey: string;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, path, queryKey }) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)">
      <GridItem textAlign="left">
        {currentPage > 1 && (
          <Flex justifyContent="flex-start">
            <Box>
              <Link href={{ pathname: `/${path}`, query: { [queryKey]: 1 } }}>
                <a>
                  <Box bgColor="gray.200" px={2}>
                    <Text mb={2}>Halaman Awal...</Text>
                  </Box>
                </a>
              </Link>
              <Flex justifyContent="flex-start">
                <Link href={{ pathname: `/${path}`, query: { [queryKey]: currentPage - 1 } }}>
                  <a>
                    <Flex alignItems="center" bgColor="gray.200" px={2}>
                      <MdKeyboardArrowLeft />
                      <Text>Back</Text>
                    </Flex>
                  </a>
                </Link>
              </Flex>
            </Box>
          </Flex>
        )}
      </GridItem>
      <GridItem display="flex" alignItems="center" justifyContent="center">
        <Text>Halaman Ke {currentPage}</Text>
      </GridItem>
      <GridItem textAlign="right">
        {currentPage < totalPages && (
          <Flex justifyContent="flex-end">
            <Box>
              <Link href={{ pathname: `/${path}`, query: { [queryKey]: totalPages } }}>
                <a>
                  <Box bgColor="gray.200" px={2}>
                    <Text mb={2}>Halaman Terakhir...</Text>
                  </Box>
                </a>
              </Link>
              <Flex justifyContent="flex-end">
                <Link href={{ pathname: `/${path}`, query: { [queryKey]: currentPage + 1 } }}>
                  <a>
                    <Flex alignItems="center" bgColor="gray.200 " px={2} borderRadius={4}>
                      <Text>Next</Text>
                      <MdKeyboardArrowRight />
                    </Flex>
                  </a>
                </Link>
              </Flex>
            </Box>
          </Flex>
        )}
      </GridItem>
    </Grid>
  );
};

export default Pagination;
