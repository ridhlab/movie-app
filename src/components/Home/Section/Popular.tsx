import React from "react";
import { LayoutSectionMovieCategory } from "../../Layout";
import serviceMovieApi from "../../../services/api/movie";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../../Loader";
import ErrorMessage from "../../ErrorMessage";
import GridSection from "./GridSection";

const SectionPopular: React.FC = () => {
  const { getListMoviePopular } = serviceMovieApi;

  const { isLoading, error, data } = useQuery(["popular"], () => getListMoviePopular());

  const showData = () => {
    if (isLoading) return <Loader />;

    if (error) return <ErrorMessage />;

    return <GridSection data={data?.results} pathMore="/popular" />;
  };

  return <LayoutSectionMovieCategory title="Popular">{showData()}</LayoutSectionMovieCategory>;
};

export default SectionPopular;
