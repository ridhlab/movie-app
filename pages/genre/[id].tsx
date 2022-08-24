import { ReactNode, useEffect, useMemo } from "react";
import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { ErrorMessage, HeadComp, LayoutRoot } from "../../src/components";
import serviceMovieApi from "../../src/services/api/movie";
import { useQuery } from "@tanstack/react-query";
import { LoaderCenter } from "../../src/components/Loader";
import { ContainerMovieCategory } from "../../src/components/Container";

const Genre: NextPage = ({ genres }: any) => {
  const router = useRouter();

  const { id, page } = router.query;

  const { getMoviesByGenre } = serviceMovieApi;

  const genreSelected = genres.genres.filter((genre: any) => genre.id === parseInt(id as string))[0].name;

  const fetchData = ({ queryKey }: any): Promise<any> => {
    const [_, _id, _page] = queryKey;
    return getMoviesByGenre(_id, _page);
  };

  const { isLoading, error, data, refetch } = useQuery(["genre", id, page], fetchData, {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const showData = (): ReactNode => {
    if (isLoading) return <LoaderCenter />;

    if (error) return <ErrorMessage />;

    return (
      <Box>
        <ContainerMovieCategory
          path={`genre/${id}`}
          text={`Genre ${genreSelected}`}
          queryKey="page"
          movies={data.results}
          page={data.page}
          totalPages={data.total_pages > 500 ? 500 : data.total_pages}
        />
      </Box>
    );
  };

  useEffect(() => {
    if (page) refetch();
  }, [page]);

  return (
    <div>
      <HeadComp title={genreSelected} />
      <LayoutRoot>{showData()}</LayoutRoot>
    </div>
  );
};

export default Genre;

export const getServerSideProps = async () => {
  const { getGenres } = serviceMovieApi;
  const _genres = await getGenres();
  return {
    props: {
      genres: _genres,
    },
  };
};
