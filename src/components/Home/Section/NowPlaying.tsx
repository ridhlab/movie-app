import { ReactNode, useEffect } from "react";
import { Box, Heading, Grid, GridItem } from "@chakra-ui/react";
import serviceMovieApi from "../../../services/api/movie";
import { useQuery } from "@tanstack/react-query";
import { Loader, ErrorMessage, Card } from "../../";
import GridSection from "./GridSection";
import { LayoutSectionMovieCategory } from "../../Layout";

const SectionNowPlaying: React.FC = () => {
  const { getListMovieNowPlaying } = serviceMovieApi;

  const { isLoading, error, data } = useQuery(["now-playing"], () => getListMovieNowPlaying());

  const showData = (): ReactNode => {
    if (isLoading) return <Loader />;

    if (error) return <ErrorMessage />;

    return <GridSection data={data?.results} pathMore="/now-playing" />;
  };

  return <LayoutSectionMovieCategory title="Now Playing">{showData()}</LayoutSectionMovieCategory>;
};

export default SectionNowPlaying;
