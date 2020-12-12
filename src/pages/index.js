import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

import blue_fox_img from "assets/images/blue-fox.jpg";

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
        <p className="cover">
          <img src={blue_fox_img} alt="made with gatsby" />
        </p>
        <h1 className="heading"></h1>
        <p>Welcome to my site</p>
      </Container>
    </Layout>
  );
};

export default IndexPage;
