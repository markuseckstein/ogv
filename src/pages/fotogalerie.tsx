import { graphql, PageProps } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const FotogaleriePage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout
      teaserImage={data.file.childImageSharp.gatsbyImageData}
      teaserPosition="50% 38%"
      teaserAltText="Willkommen beim Obst- und Gartenbauverein Pattenhofen Altenthann e.V."
      backgroundColor={data.file.colors.lightMuted}
    >
      <h1>Fotogalerie</h1>

      <p>Hier finden Sie Bilder von vergangenen Veranstaltungen</p>
      <a
        href="https://www.flickr.com/photos/ogv-altenthann/albums"
        target="_blank"
        rel="noopener"
      >
        Fotogalerie OGV Pattenhofen-Altenthann bei Flickr
      </a>

      <p>
        <a
          href="https://www.kv-gartenbau-nl.de/images/eigene/2020_Fruehlingsbilder/index.html"
          target="_blank"
          rel="noopener"
        >
          Fotoschau 2020 des OGV Kreisverband Nürnberger Land - Einblicke in
          unsere Gärten
        </a>
      </p>
    </Layout>
  );
};

export default FotogaleriePage;

export const query = graphql`
  query {
    file(relativePath: { eq: "fotogalerie.jpg" }) {
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
