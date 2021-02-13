import Head from "next/head";
import Layout from "components/Layout";
import IntroSection from "components/IntroSection";
import AboutSection from "components/AboutSection";
import SkillsSection from "components/SkillsSection";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>John Paul Ong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <IntroSection />
        <AboutSection />
        <SkillsSection />
      </Layout>
    </>
  );
}
