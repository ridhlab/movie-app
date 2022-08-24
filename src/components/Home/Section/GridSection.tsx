import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { BsArrowRightCircle } from "react-icons/bs";
import { PRIMARY_COLOR_NORMAL } from "../../../constants/constants";
import React from "react";
import { CardMovie } from "../../Card";
import Link from "next/link";

interface GridSectionProps {
  data: any[];
  pathMore: string;
}

const GridSection: React.FC<GridSectionProps> = ({ data, pathMore }) => {
  return (
    <Grid templateColumns="repeat(2, 1fr) " gap={6}>
      {data.slice(0, 3).map((movie) => {
        return (
          <GridItem key={movie.id}>
            <CardMovie movie={movie} />
          </GridItem>
        );
      })}
      <GridItem display="flex" alignItems="center">
        <Link href={{ pathname: pathMore, query: { page: 1 } }}>
          <a>
            <BsArrowRightCircle color={PRIMARY_COLOR_NORMAL} size={50} />
          </a>
        </Link>
      </GridItem>
    </Grid>
  );
};

export default GridSection;
