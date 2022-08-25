import { NextPage } from "next";
import { ErrorMessage, HeadComp, LayoutRoot, Loader } from "../src/components";
import { ContainerMovieCategory } from "../src/components/Container";
import serviceMovieApi from "../src/services/api/movie";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { ReactNode, useEffect } from "react";
import { LoaderCenter } from "../src/components/Loader";
import { setLocalStorage } from "../src/services/localStorage/service";

const NowPlaying: NextPage = () => {
  const router = useRouter();

  const { getListMovieNowPlaying } = serviceMovieApi;

  const { page } = router.query;

  const fetchData = ({ queryKey }: any): Promise<any> => {
    const [_, _page] = queryKey;
    return getListMovieNowPlaying(_page);
  };

  const { isLoading, data, error, refetch } = useQuery(["now-playing", page], fetchData, {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const showData = (): ReactNode => {
    if (isLoading) {
      return <LoaderCenter />;
    }

    if (error) {
      return <ErrorMessage />;
    }

    return (
      <ContainerMovieCategory
        path="now-playing"
        text="Now Playing"
        queryKey="page"
        movies={data.results}
        page={data.page}
        totalPages={data.total_pages > 500 ? 500 : data.total_pages}
      />
    );
  };

  useEffect(() => {
    if (page) refetch();
  }, [page]);

  useEffect(() => {
    if (data) setLocalStorage("movieNowPlaying", JSON.stringify(data));
  }, [data]);

  return (
    <div>
      <HeadComp title="Now Playing" />
      <LayoutRoot>{showData()}</LayoutRoot>
    </div>
  );
};

export default NowPlaying;
