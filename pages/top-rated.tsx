import React, { ReactNode, useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ErrorMessage, HeadComp, LayoutRoot } from "../src/components";
import serviceMovieApi from "../src/services/api/movie";
import { useQuery } from "@tanstack/react-query";
import { LoaderCenter } from "../src/components/Loader";
import { ContainerMovieCategory } from "../src/components/Container";
import { setLocalStorage } from "../src/services/localStorage/service";

const TopRated: NextPage = () => {
  const router = useRouter();

  const { getListMovieTopRated } = serviceMovieApi;

  const { page } = router.query;

  const fetchData = ({ queryKey }: any): Promise<any> => {
    const [_, _page] = queryKey;
    return getListMovieTopRated(_page);
  };

  const { isLoading, data, error, refetch } = useQuery(["top-rated", page], fetchData, {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  useEffect(() => {
    if (page) refetch();
  }, [page]);

  useEffect(() => {
    if (data) setLocalStorage("movieTopRated", JSON.stringify(data));
  }, [data]);

  const showData = (): ReactNode => {
    if (isLoading) {
      return <LoaderCenter />;
    }

    if (error) {
      return <ErrorMessage />;
    }

    return (
      <ContainerMovieCategory
        path="top-rated"
        text="Top Rated"
        queryKey="page"
        movies={data.results}
        page={data.page}
        totalPages={data.total_pages > 500 ? 500 : data.total_pages}
      />
    );
  };

  return (
    <div>
      <HeadComp title="Top Rated" />
      <LayoutRoot>{showData()}</LayoutRoot>
    </div>
  );
};

export default TopRated;
