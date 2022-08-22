import { graphql, Link, PageProps } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";

// markup
const ImpressumPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout
      teaserImage={data.file.childImageSharp.gatsbyImageData}
      teaserPosition="55% 67%"
      teaserAltText="Willkommen beim Obst- und Gartenbauverein Pattenhofen Altenthann e.V."
      backgroundColor={data.file.colors.lightMuted}
    >
      <h1>Impressum</h1>

      <p>Verantwortlich:</p>

      <p>
        Thomas Schmid
        <br />
        Pattenhofener Str. 18
        <br />
        90592 Schwarzenbruck
        <br />
      </p>

      <h3>Links</h3>
      <a href="http://www.kv-gartenbau-nl.de/" target="_blank" rel="noopener">
        Kreisverband Nürnberger Land
      </a>
      <br />
      <a href="http://www.gartenbauvereine.org/" target="_blank" rel="noopener">
        Landesverband Bayern
      </a>
      <br />
      <br />
      <h3>Datenschutz</h3>
      <p>
        <Link to="/datenschutz">Unsere Datenschutzerklärung</Link>
      </p>
    </Layout>
  );
};

export default ImpressumPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "impressum.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      colors {
        ...GatsbyImageColors
      }
    }
  }
`;

type DataProps = {
  file: {
    childImageSharp: { gatsbyImageData: IGatsbyImageData };
    colors: { lightMuted: string };
  };
};
