import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Card from "./CardStandard";
import Image from "next/image";
import { AiTwotoneStar } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import Link from "next/link";

interface CardMovieDetailProps {
  title: string;
  tagline: string;
  backdropPath: string;
  overview: string;
  genres?: any[];
  releaseDate?: string;
  voteAverage?: number;
  voteCount?: number;
}

const CardMovieDetail: React.FC<CardMovieDetailProps> = ({ title, tagline, backdropPath, overview, genres, releaseDate, voteAverage, voteCount }) => {
  return (
    <Card p={0}>
      <Image
        src={`http://image.tmdb.org/t/p/w500${backdropPath}`}
        alt={title}
        loader={() => `http://image.tmdb.org/t/p/w500${backdropPath}`}
        width="100%"
        height="60%"
        layout="responsive"
        objectFit="cover"
        unoptimized
      />
      <Box p={4}>
        <Box mt={2}>
          <Box>
            <Box>
              <Heading as="h2" fontSize={20}>
                {title} ({new Date(releaseDate || "").getFullYear()})
              </Heading>
              <Text fontStyle="italic">{tagline}</Text>
            </Box>
            <Box mt={2}>
              <Box display="flex" alignItems="center">
                <AiTwotoneStar color="gold" />
                <Text>{voteAverage}</Text>
                <Box mx={2}>
                  <GoPrimitiveDot size={8} />
                </Box>
                <Text>{voteCount} votes</Text>
              </Box>
              <Flex>
                {genres?.map((genre) => {
                  return (
                    <Link key={genre.id} href={`/genre/${genre.id}?page=${1}`}>
                      <a>
                        <Box borderRadius={4} mr={2} bgColor="gray.200" px={2}>
                          <Text fontSize={12}>{genre.name}</Text>
                        </Box>
                      </a>
                    </Link>
                  );
                })}
              </Flex>
              <Text>Releasae : {releaseDate}</Text>
            </Box>
          </Box>
          <Box mt={4}>
            <Text>{overview}</Text>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default CardMovieDetail;
