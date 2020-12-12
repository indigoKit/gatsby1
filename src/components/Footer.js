import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import mail from "assets/images/SVG/mail.svg";
import linked from "assets/images/SVG/linkedin.svg";
import github from "assets/images/SVG/github.svg";

import Container from "components/Container";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <footer>
      <Container>
        {/* add author's name in footer by uncommenting the following line*/}
        {/* <p>Made by by {data.site.siteMetadata.author} using Gatsby</p> */}
        <p>
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          using Gatsby.
        </p>
        <div className="footer__icons">
          <a href="" target="_blank" rel="noopener noreferrer">
            <svg className="footer__icons-item">
              <use xlinkHref={`#${linked.id}`} />
            </svg>
          </a>

          <a href="" target="_blank" rel="noopener noreferrer">
            <svg className="footer__icons-item">
              <use xlinkHref={`#${github.id}`} />
            </svg>
          </a>

          <a href="#" rel="noopener noreferrer">
            <svg className="footer__icons-item">
              <use xlinkHref={`#${mail.id}`} />
            </svg>
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
