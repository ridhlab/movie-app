import { Box } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { HeadComp, LayoutRoot, SectionSimilarMovie } from "../../src/components";
import { CardMovieDetail } from "../../src/components/Card";
import serviceMovieApi from "../../src/services/api/movie";

interface MovieDetailProps {
  movieDetail: any;
  similarMovies: any;
}

const MovieDetail: NextPage<MovieDetailProps> = ({ movieDetail, similarMovies }) => {
  return (
    <div>
      <HeadComp title={movieDetail.title} />
      <LayoutRoot>
        <CardMovieDetail
          title={movieDetail.title}
          backdropPath={movieDetail.backdrop_path}
          overview={movieDetail.overview}
          tagline={movieDetail.tagline}
          releaseDate={movieDetail.release_date}
          genres={movieDetail.genres}
          voteAverage={movieDetail.vote_average}
          voteCount={movieDetail.vote_count}
        />
        <SectionSimilarMovie similarMovie={similarMovies} />
      </LayoutRoot>
    </div>
  );
};

export default MovieDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const { getMovieDetail, getSimilarMovie } = serviceMovieApi;

  const _movieDetail: any = await getMovieDetail(id);

  const _similarMovie: any[] = await getSimilarMovie(id);

  const props: MovieDetailProps = {
    movieDetail: { ..._movieDetail },
    similarMovies: { ..._similarMovie },
  };

  return {
    props,
  };
};
