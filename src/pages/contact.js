import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

import mail from "assets/images/SVG/mail.svg";
import linked from "assets/images/SVG/linkedin.svg";
import github from "assets/images/SVG/github.svg";
import insta from "assets/images/SVG/instagram.svg";

const ContactPage = () => {
  return (
    <Layout pageName="contact">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Container>
        <h1>Contact</h1>
        <p>Let's get in touch!</p>
        <div className="contact__icon">
          <a
            href="https://www.linkedin.com/in/maryna-khatnyuk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="contact__icon-item">
              <use xlinkHref={`#${linked.id}`} />
            </svg>
          </a>

          <a
            href="https://github.com/indigoKit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="contact__icon-item">
              <use xlinkHref={`#${github.id}`} />
            </svg>
          </a>

          <a href="mailto:m.a.khatnyuk@gmail.com" rel="noopener noreferrer">
            <svg className="contact__icon-item">
              <use xlinkHref={`#${mail.id}`} />
            </svg>
          </a>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactPage;
