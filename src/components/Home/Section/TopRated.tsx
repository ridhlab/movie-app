import React, { ReactNode } from "react";
import { LayoutSectionMovieCategory } from "../../Layout";
import serviceMovieApi from "../../../services/api/movie";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../../Loader";
import ErrorMessage from "../../ErrorMessage";
import GridSection from "./GridSection";

const SectionTopRated: React.FC = () => {
  const { getListMovieTopRated } = serviceMovieApi;

  const { isLoading, error, data } = useQuery(["top-rated"], () => getListMovieTopRated());

  const showData = (): ReactNode => {
    if (isLoading) return <Loader />;

    if (error) return <ErrorMessage />;

    return <GridSection data={data?.results} pathMore="/top-rated" />;
  };

  return <LayoutSectionMovieCategory title="Top Rated">{showData()}</LayoutSectionMovieCategory>;
};

export default SectionTopRated;
