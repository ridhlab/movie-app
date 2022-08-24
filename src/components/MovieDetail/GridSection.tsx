import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { CardMovie } from "../Card";

interface GridSectionSimilarProps {
  movies: any[];
}

const GridSectionSimilar: React.FC<GridSectionSimilarProps> = ({ movies }) => {
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

export default GridSectionSimilar;
