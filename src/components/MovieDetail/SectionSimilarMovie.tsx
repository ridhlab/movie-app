import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Card } from "../Card";
import GridSectionSimilar from "./GridSection";

interface SimilarMovieProps {
  similarMovie: any;
}

const SectionSimilarMovie: React.FC<SimilarMovieProps> = ({ similarMovie }) => {
  const movies = similarMovie?.results.slice(0, 4);
  return (
    <Box mt={4}>
      <Heading fontSize={24} mb={2}>
        Similar Movie
      </Heading>
      <GridSectionSimilar movies={movies} />
    </Box>
  );
};

export default SectionSimilarMovie;
