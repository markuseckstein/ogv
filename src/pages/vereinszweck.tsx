import { graphql, PageProps } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const VereinszweckPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout
      teaserImage={data.file.childImageSharp.gatsbyImageData}
      teaserPosition="50% 19%"
      teaserAltText="Willkommen beim Obst- und Gartenbauverein Pattenhofen Altenthann e.V."
      backgroundColor="#f8f9fa"
    >
      <h1>Vereinszweck</h1>
      <p>
        Zweck des Vereins ist, im Rahmen des Obst- und Gartenbaus, die Förderung
        der Landespflege und des Umweltschutzes zur Erhaltung einer schönen
        Kulturlandschaft und der menschlichen Gesundheit.
      </p>

      <p>
        Pflege der Gemeinschaft, Geselligkeit sowie Erfahrungsaustausch der
        Vereinsmitglieder zur Erhaltung der Gartenkultur.
      </p>

      <p>
        Der Verein ist Mitglied des{" "}
        <a href="http://www.gartenbauvereine.org/" target="_blank">
          Bayerischen Landesverbandes für Gartenbau und Landespflege
        </a>{" "}
        und gleichzeitig Mitglied des örtlichen{" "}
        <a href="http://www.kv-gartenbau-nl.de/" target="_blank">
          Kreis- und Bezirksverbandes
        </a>
        .
      </p>

      <p>
        Förderung von Erwerbsobstbau und des Erwerbsgartenbaus sind keine
        Vereinsaufgaben.
      </p>

      <p>
        Der Verein ist selbstlos tätig. Er verfolgt in erster Linie
        eigenwirtschaftliche Zwecke. Die Mittel des Vereins, einschließlich
        etwaiger Gewinne, dürfen nur für satzungsgemäße Zwecke verwendet werden.
      </p>

      <p>Alle Inhaber von Vereinsämtern sind ehrenamtlich tätig.</p>
    </Layout>
  );
};

export default VereinszweckPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "vereinszweck.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

type DataProps = {
  file: {
    childImageSharp: { gatsbyImageData: IGatsbyImageData };
  };
};
