import React from "react";
import Head from "next/head";
import Main from "@/components/organism/Main";
import { useTranslation } from "react-i18next";
import { GetStaticProps, NextPage } from "next";
import Header from "@/components/organism/Header";
import Footer from "@/components/organism/Footer";
import Headline from "@/components/organism/Headline";
import { COMMON_TNS, GLOSSARY_TNS, PAGES_TNS } from "@/lib/i18n/consts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { locale } = ctx;

  return {
    props: {
      ...(await serverSideTranslations(locale || "en", [
        PAGES_TNS,
        GLOSSARY_TNS,
        COMMON_TNS,
      ])),
      // Will be passed to the page component as props
    },
  };
};

const Homepage: NextPage = () => {
  const { t: gt } = useTranslation([GLOSSARY_TNS]);

  return (
    <>
      <Head>
        <title>Mega</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Headline />
      <Main />
      <Footer />
    </>
  );
};

export default Homepage;
