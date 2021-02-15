import Head from "next/head";
import Layout from "components/Layout";
import IntroSection from "components/IntroSection";
import AboutSection from "components/AboutSection";
import SkillsSection from "components/SkillsSection";
import { useState } from "react";

export default function IndexPage() {
  const [active, setActive] = useState("");
  return (
    <>
      <Head>
        <title>John Paul Ong</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="I'm a front-end and back-end developer from Metro Manila, Philippines. I enjoy taking on complex designs and visualized concepts and implementing them into simple and beautiful systems for production. I also love the logic and structure that goes into coding and always strive to write elegant and efficient code."
        />
      </Head>
      <Layout active={active}>
        <IntroSection setActive={setActive} />
        <AboutSection setActive={setActive} />
        <SkillsSection setActive={setActive} />
      </Layout>
    </>
  );
}
