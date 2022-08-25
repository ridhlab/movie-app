import React, { ReactNode, useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { ErrorMessage, HeadComp, LayoutRoot } from "../src/components";
import serviceMovieApi from "../src/services/api/movie";
import { useQuery } from "@tanstack/react-query";
import { LoaderCenter } from "../src/components/Loader";
import { ContainerMovieCategory } from "../src/components/Container";
import { setLocalStorage } from "../src/services/localStorage/service";

const Popular: NextPage = () => {
  const router = useRouter();

  const { getListMoviePopular } = serviceMovieApi;

  const { page } = router.query;

  const fetchData = ({ queryKey }: any): Promise<any> => {
    const [_, _page] = queryKey;
    return getListMoviePopular(_page);
  };

  const { isLoading, data, error, refetch } = useQuery(["popular", page], fetchData, {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  useEffect(() => {
    if (page) refetch();
  }, [page]);

  useEffect(() => {
    if (data) setLocalStorage("moviePopular", JSON.stringify(data));
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
        path="popular"
        text="Popular"
        queryKey="page"
        movies={data.results}
        page={data.page}
        totalPages={data.total_pages > 500 ? 500 : data.total_pages}
      />
    );
  };

  return (
    <div>
      <HeadComp title="Popular" />
      <LayoutRoot>{showData()}</LayoutRoot>
    </div>
  );
};

export default Popular;
