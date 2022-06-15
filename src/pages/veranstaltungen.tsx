import { graphql, PageProps } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

import React from "react";
import Layout from "../components/layout";
import tagDerGartentuer from "../download/Flyer_offene_Gartentuer_2022.pdf";

const VeranstaltungenPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout
      teaserImage={data.file.childImageSharp.gatsbyImageData}
      teaserPosition="50% 38%"
      teaserAltText="Willkommen beim Obst- und Gartenbauverein Pattenhofen Altenthann e.V."
      backgroundColor={data.file.colors.lightMuted}
    >
      <h1>Jahresprogramm 2022</h1>
      <p>
        <table>
          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              22.04.2022
            </td>
            <td>
              Jahreshauptversammlung 19:00 Uhr im Gasthaus "Weisses Kreuz".
            </td>
          </tr>
          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              07.05.2022
            </td>
            <td>Blumenabend 19:30 Uhr im Gasthaus "Weisses Kreuz".</td>
          </tr>
          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              25.06.2022
            </td>
            <td>
              Sommerschnittkurs 14:00 Uhr. Treffpunkt Altdorfer Straße, Ortsausgang.
            </td>
          </tr>
          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              26.06.2022
            </td>
            <td>
              Tag der offenen Gartentür. 10 - 17 Uhr.
              <br />
              <a href={tagDerGartentuer} target="_blank" rel="noopener">
                Flyer downloaden
              </a>
              .
            </td>
          </tr>
          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              16.10.2022
            </td>
            <td>Herbstwanderung. Programm wird noch bekannt gegeben.</td>
          </tr>
        </table>
      </p>
      <p>
        Weitere Veranstaltungen die noch nicht terminiert sind werden
        rechtzeitig in der Tageszeitung veröffentlicht.
      </p>
    </Layout>
  );
};

export default VeranstaltungenPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "veranstaltungen.jpg" }) {
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
