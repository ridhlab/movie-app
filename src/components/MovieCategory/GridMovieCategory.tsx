import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { CardMovie } from "../Card";

interface GridMovieCategoryProps {
  movies: any[];
}

const GridMovieCategory: React.FC<GridMovieCategoryProps> = ({ movies }) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      {movies.map((movie) => {
        return (
          <GridItem key={movie.id}>
            <CardMovie movie={movie} />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default GridMovieCategory;
