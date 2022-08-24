import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import GridMovieCategory from "../MovieCategory/GridMovieCategory";
import Pagination from "../Pagination/Pagination";

interface ContainerMovieCategoryProps {
  path: string;
  text: string;
  page: number;
  totalPages: number;
  movies: any[];
  queryKey: string;
}

const ContainerMovieCategory: React.FC<ContainerMovieCategoryProps> = ({ path, text, page, movies, totalPages, queryKey }) => {
  return (
    <Box>
      <Box mb={8}>
        <Heading mb={2} fontSize={20}>
          {text}
        </Heading>
        <GridMovieCategory movies={movies} />
      </Box>
      <Pagination currentPage={page} totalPages={totalPages} path={path} queryKey={queryKey} />
    </Box>
  );
};

export default ContainerMovieCategory;
