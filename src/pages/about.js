import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

const AboutPage = () => {
  return (
    <Layout pageName="about">
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container>
        <h1>About</h1>
        <p>
          I am Maryna. I have worked as bank clerk, professional dancer, oracle
          developer, business analyst, math techer, had sall transportation
          business, and I am learning web development.
        </p>
      </Container>
    </Layout>
  );
};

export default AboutPage;
