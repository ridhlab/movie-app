import Head from "next/head";
import React from "react";

interface HeadProps {
  title: string;
}

const HeadComp: React.FC<HeadProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadComp;
