import type { NextPage } from "next";
import { HeadComp, LayoutRoot, SectionNowPlaying, SectionPopular, SectionTopRated, SectionUpcoming } from "../src/components";

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
