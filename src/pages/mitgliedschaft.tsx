import { graphql, PageProps } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";
import antrag from "../download/beitrittserklaerung_ogv_pattenhofen_altenthann.pdf";

const MitgliedschaftPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout
      teaserImage={data.file.childImageSharp.gatsbyImageData}
      teaserPosition="50% 47%"
      teaserAltText="Willkommen beim Obst- und Gartenbauverein Pattenhofen Altenthann e.V."
      backgroundColor="#f8f9fa"
    >
      <h1>Mitgliedschaft</h1>
      <p>
        Liebe Besucher unserer Homepage. Wenn Sie interessiert sind und in der
        Nähe wohnen können Sie gern Mitglied werden. Wir freuen uns darauf.
      </p>

      <p>
        Der Mitgliedsbeitrag beträgt 15 € jährlich. Eine Haftpflicht- und
        Unfallversicherung ist im Betrag enthalten.
      </p>

      <p>
        Die monatlich erscheinende Fachzeitschrift "Gartenratgeber" kann als
        Mitglied über den Verein abonniert werden.
      </p>

      <p>
        Hier können Sie einen{" "}
        <a target="_blank" href={antrag} rel="noopener">
          Mitgliedsantrag herunterladen
        </a>{" "}
        und ausdrucken.
      </p>
    </Layout>
  );
};

export default MitgliedschaftPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "mitgliedschaft.jpg" }) {
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
