import Head from "next/head";
import Layout from "components/Layout";
import Intro from "components/Intro";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>John Paul Ong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Intro />
      </Layout>
    </>
  );
}
