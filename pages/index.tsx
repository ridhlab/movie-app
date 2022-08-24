import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { HeadComp, Header, LayoutRoot, SectionNowPlaying, SectionPopular, SectionTopRated, SectionUpcoming } from "../src/components";
import { useAuth } from "../src/context/Auth";

const Home: NextPage = () => {
  return (
    <div>
      <HeadComp title="MovieApp" />
      <LayoutRoot>
        <SectionNowPlaying />
        <SectionUpcoming />
        <SectionPopular />
        <SectionTopRated />
      </LayoutRoot>
    </div>
  );
};

export default Home;
