import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import { LayoutSectionMovieCategory } from "../../Layout";
import serviceMovieApi from "../../../services/api/movie";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../../Loader";
import ErrorMessage from "../../ErrorMessage";
import GridSection from "./GridSection";

const SectionUpcoming: React.FC = () => {
  const { getListMovieUpcoming } = serviceMovieApi;

  const { isLoading, error, data } = useQuery(["upcoming"], () => getListMovieUpcoming());

  const showData = (): ReactNode => {
    if (isLoading) return <Loader />;

    if (error) return <ErrorMessage />;

    return <GridSection data={data?.results} pathMore="/upcoming" />;
  };

  return <LayoutSectionMovieCategory title="Upcoming">{showData()}</LayoutSectionMovieCategory>;
};

export default SectionUpcoming;
