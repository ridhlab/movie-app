import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Card from "./CardStandard";
import { AiTwotoneStar } from "react-icons/ai";
import Link from "next/link";

const CardMovie: React.FC<{ movie: any }> = ({ movie }) => {
  return (
    <Card p={0}>
      <Image
        loader={() => `http://image.tmdb.org/t/p/w500${movie.poster_path}`}
        src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
        width="100%"
        height="160%"
        layout="responsive"
        objectFit="cover"
        alt={movie.original_title}
        unoptimized
      />
      <Box p={4}>
        <Link href={`/movie/${movie.id}`}>
          <a>
            <Heading as="h3" fontSize={16} my={2}>
              {movie.title} ({new Date(movie.release_date).getFullYear()})
            </Heading>
          </a>
        </Link>
        <Box display="flex" alignItems="center">
          <AiTwotoneStar color="gold" />
          <Text>
            {movie.vote_average} ({movie.vote_count} votes)
          </Text>
        </Box>
      </Box>
    </Card>
  );
};

export default CardMovie;
