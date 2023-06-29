import { graphql, PageProps } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

import React from "react";
import Layout from "../components/layout";

const VeranstaltungenPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout
      teaserImage={data.file.childImageSharp.gatsbyImageData}
      teaserPosition="50% 38%"
      teaserAltText="Willkommen beim Obst- und Gartenbauverein Pattenhofen Altenthann e.V."
      backgroundColor={data.file.colors.lightMuted}
    >
      <h1>Jahresprogramm 2023</h1>
      <p>
        <table>
          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              17.03.2023
            </td>
            <td>
              Jahreshauptversammlung 19:30 Uhr im Gasthaus "Weisses Kreuz".
            </td>
          </tr>
          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              31.03.2023
            </td>
            <td>Ortsrandsäuberung 17:00 Uhr, Treffpunkt am Dorfweiher.</td>
          </tr>
          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              13.05.2023
            </td>
            <td>Blumenabend 19:30 Uhr im Gasthaus "Weisses Kreuz".</td>
          </tr>
          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              <s>02.07.2023</s>
            </td>
            <td>
              <span style={{ color: "red" }}>ABGESAGT </span><s>Bus-Ausflug nach Riedenburg und Weltenburg. Abfahrt 9:30 am Dorfweiher. Unkostenbeitrag 50€, Anmeldung bis 11.06. bei Karin Tempelmeier.</s>
            </td>
          </tr>
          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              15.07.2023
            </td>
            <td>
              Planzenschnittkurs um 14:00 Uhr.<br/>
              Thema: Sommerschnitt an Obstgehölzen<br/>
              Treffpunkt: Steuobstwiese an der Altdorfer Straße 
              
            </td>
          </tr>
          <tr>
            <td style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
              26.08.2023
            </td>
            <td>Obstbaumversteigerung, 14 Uhr. Treffpunkt am Weiher.</td>
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
